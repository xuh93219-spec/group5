/**
 * 高光圆桌会 · 互动H5 应用逻辑
 * 负责数据渲染与交互
 */

(function () {
  'use strict';

  const data = window.TEAM_DATA;
  if (!data) {
    console.error('数据未加载，请检查 data.js');
    return;
  }

  // 颜色映射
  const COLOR_MAP = {
    purple: { main: '#534AB7', light: '#EEEDFE' },
    teal: { main: '#0F6E56', light: '#E1F5EE' },
    coral: { main: '#D85A30', light: '#FAECE7' },
    blue: { main: '#185FA5', light: '#E6F1FB' },
    amber: { main: '#BA7517', light: '#FAEEDA' },
    pink: { main: '#993556', light: '#FBEAF0' },
    gray: { main: '#888780', light: '#F1EFE8' }
  };

  // ========== P1 开场页 ==========
  function renderCover() {
    const team = data.team;
    document.getElementById('coverTeamName').textContent = team.name + ' · 第5组';
    document.getElementById('coverSlogan').textContent = team.slogan;
    document.getElementById('coverSloganSub').textContent = team.slogan_sub || '';

    const coverBg = document.getElementById('coverBg');
    if (team.cover_image) {
      coverBg.style.background = 'url(' + team.cover_image + ') center/cover no-repeat';
    } else {
      coverBg.style.background = team.cover_bg || 'linear-gradient(135deg, #1A0F2E 0%, #2C2418 100%)';
    }

    if (team.slogan_color) {
      document.getElementById('coverSlogan').style.color = team.slogan_color;
    }
  }

  // ========== P2 我们是谁 ==========
  function renderIntro() {
    document.getElementById('oneLiner').textContent = data.team.one_liner;

    const tagsContainer = document.getElementById('coreTags');
    tagsContainer.innerHTML = '';
    data.team.core_tags.forEach(tag => {
      const el = document.createElement('div');
      el.className = 'core-tag color-' + (tag.color || 'purple');
      el.textContent = tag.label;
      tagsContainer.appendChild(el);
    });
  }

  // ========== P3 30人卡片 ==========
  function renderMembers() {
    const grid = document.getElementById('membersGrid');
    grid.innerHTML = '';

    data.members.forEach((member, index) => {
      const card = document.createElement('div');
      card.className = 'member-card cat-' + (member.skill_category || '其他');
      card.innerHTML = `
        <div class="member-nickname">${member.nickname}</div>
        <div class="member-symbol">${member.symbol || ''}</div>
        <div class="member-category">${member.skill_category || '其他'}</div>
      `;
      card.addEventListener('click', () => showMemberDetail(member));
      grid.appendChild(card);
    });
  }

  // ========== P4 能力图谱 ==========
  function renderSkillsChart() {
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // 按类别统计人数
    const categoryCount = {};
    data.skill_categories.forEach(cat => {
      categoryCount[cat.name] = 0;
    });
    data.members.forEach(m => {
      const cat = m.skill_category || '其他';
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });

    const labels = Object.keys(categoryCount);
    const counts = Object.values(categoryCount);
    const colors = labels.map(name => {
      const cat = data.skill_categories.find(c => c.name === name);
      const colorKey = cat ? cat.color : 'gray';
      return COLOR_MAP[colorKey] ? COLOR_MAP[colorKey].main : '#888780';
    });

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '人数',
          data: counts,
          backgroundColor: colors,
          borderRadius: 6,
          maxBarThickness: 40
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: function (context) {
                const catName = context.label;
                const members = data.members.filter(m => m.skill_category === catName);
                const names = members.slice(0, 5).map(m => m.nickname).join('、');
                return members.length > 5 ? names + ' 等' : names;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1, font: { size: 11 } },
            grid: { color: '#F1EFE8' }
          },
          x: {
            ticks: { font: { size: 12 } },
            grid: { display: false }
          }
        },
        onClick: function (event, elements) {
          if (elements.length > 0) {
            const index = elements[0].index;
            const catName = labels[index];
            showCategoryMembers(catName);
          }
        }
      }
    });

    // 渲染图例
    const legend = document.getElementById('chartLegend');
    legend.innerHTML = '';
    labels.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `<span class="legend-dot" style="background:${colors[i]}"></span>${name} (${counts[i]})`;
      item.addEventListener('click', () => showCategoryMembers(name));
      legend.appendChild(item);
    });
  }

  // 显示某类别的成员列表
  function showCategoryMembers(catName) {
    const members = data.members.filter(m => m.skill_category === catName);
    if (members.length === 0) return;

    const body = document.getElementById('modalBody');
    const colorKey = (data.skill_categories.find(c => c.name === catName) || {}).color || 'gray';
    const color = COLOR_MAP[colorKey] || COLOR_MAP.gray;

    body.innerHTML = `
      <div class="modal-category-badge" style="background:${color.light};color:${color.main}">${catName}组 · ${members.length}人</div>
      <div class="modal-section">
        <div class="modal-section-label">MEMBERS</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${members.map(m => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;background:#F1EFE8;border-radius:8px;cursor:pointer;" onclick="document.getElementById('modalClose').click();setTimeout(()=>{const ev=new CustomEvent('openMember',{detail:'${m.nickname}'});document.dispatchEvent(ev);},300);">
              <div>
                <div style="font-size:14px;font-weight:600;">${m.nickname}</div>
                <div style="font-size:11px;color:#888780;">${m.symbol || ''}</div>
              </div>
              <div style="font-size:11px;color:#5F5E5A;">${(m.skills || []).slice(0, 2).join(' · ')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.getElementById('memberModal').classList.add('active');
  }

  // ========== 成员详情 Modal ==========
  function showMemberDetail(member) {
    const body = document.getElementById('modalBody');
    const catName = member.skill_category || '其他';
    const colorKey = (data.skill_categories.find(c => c.name === catName) || {}).color || 'gray';
    const color = COLOR_MAP[colorKey] || COLOR_MAP.gray;

    body.innerHTML = `
      <div class="modal-category-badge" style="background:${color.light};color:${color.main}">${catName}</div>
      <div class="modal-nickname">${member.nickname}</div>
      <div class="modal-symbol">${member.symbol || ''}</div>

      ${member.intro ? `
        <div class="modal-section">
          <div class="modal-section-label">ABOUT</div>
          <div class="modal-intro">${member.intro}</div>
        </div>
      ` : ''}

      ${(member.skills && member.skills.length) ? `
        <div class="modal-section">
          <div class="modal-section-label">SKILLS</div>
          <div class="modal-skills">
            ${member.skills.map(s => `<span class="modal-skill-tag">${s}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      ${member.contact ? `
        <div class="modal-section">
          <div class="modal-section-label">CONTACT</div>
          <div class="modal-contact" id="modalContact">${member.contact}${member.need_diplomat ? '（外交官）' : ''}</div>
        </div>
      ` : ''}
    `;
    document.getElementById('memberModal').classList.add('active');
  }

  // 监听自定义事件（从类别列表跳转到成员详情）
  document.addEventListener('openMember', function (e) {
    const member = data.members.find(m => m.nickname === e.detail);
    if (member) showMemberDetail(member);
  });

  // 关闭Modal
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('memberModal').classList.remove('active');
  });

  // 点击遮罩关闭
  document.getElementById('memberModal').addEventListener('click', (e) => {
    if (e.target.id === 'memberModal') {
      document.getElementById('memberModal').classList.remove('active');
    }
  });

  // ========== P5 连接我们 ==========
  function renderConnection() {
    const conn = data.connection;
    document.getElementById('inviteText').textContent = conn.invite_text;

    const container = document.getElementById('connectOptions');
    container.innerHTML = '';

    

    // 飞书群二维码
    if (conn.feishu_qr) {
      const card = document.createElement('div');
      card.className = 'connect-card';
      card.innerHTML = `
        <div class="connect-icon bg-blue">飞书</div>
        <div class="connect-info">
          <div class="connect-label">飞书群</div>
          <div class="connect-detail">扫码加入</div>
        </div>
        <div class="connect-arrow">›</div>
      `;
      card.addEventListener('click', () => showQRCode(conn.feishu_qr));
      container.appendChild(card);
    }

    // 自己联系入口
    if (conn.show_direct_contact) {
      const directMembers = data.members.filter(m => m.contact && !m.need_diplomat);
      if (directMembers.length > 0) {
        const card = document.createElement('div');
        card.className = 'connect-card';
        card.innerHTML = `
          <div class="connect-icon bg-teal">直联</div>
          <div class="connect-info">
            <div class="connect-label">直接联系成员</div>
            <div class="connect-detail">${directMembers.length}位成员可直联</div>
          </div>
          <div class="connect-arrow">›</div>
        `;
        card.addEventListener('click', () => showDirectContactList(directMembers));
        container.appendChild(card);
      }
    }
  }

  // 显示直联成员列表
  function showDirectContactList(members) {
    const body = document.getElementById('modalBody');
    body.innerHTML = `
      <div class="modal-nickname" style="font-size:18px;">可直接联系的成员</div>
      <div class="modal-symbol">点击复制微信号</div>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
        ${members.map(m => `
          <div class="modal-contact" style="cursor:pointer;" data-contact="${m.contact}">
            <div style="font-weight:600;margin-bottom:2px;">${m.nickname}</div>
            <div style="font-size:11px;color:#5F5E5A;">${m.contact}</div>
          </div>
        `).join('')}
      </div>
    `;
    body.querySelectorAll('[data-contact]').forEach(el => {
      el.addEventListener('click', () => copyToClipboard(el.dataset.contact, '已复制微信号'));
    });
    document.getElementById('memberModal').classList.add('active');
  }

  // 显示二维码
  function showQRCode(url) {
    const body = document.getElementById('modalBody');
    body.innerHTML = `
      <div class="modal-nickname" style="text-align:center;">飞书群二维码</div>
      <div style="text-align:center;margin:20px 0;">
        <img src="${url}" style="max-width:200px;border-radius:8px;" alt="二维码">
      </div>
      <div style="text-align:center;font-size:12px;color:#888780;">长按图片保存，用飞书扫码加入</div>
    `;
    document.getElementById('memberModal').classList.add('active');
  }

  // 复制到剪贴板
  function copyToClipboard(text, toastMsg) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast(toastMsg));
    } else {
      // 兼容方案
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast(toastMsg);
      } catch (e) {
        showToast('复制失败，请手动复制');
      }
      document.body.removeChild(textarea);
    }
  }

  // 显示提示
  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  // ========== P2 "看见彼此"词云背景 ==========
  // 数据来源：文档第二阶段"看见彼此"的共同点/差异/组合优势
  // 布局算法：螺旋放置 + 碰撞检测，确保不重叠
  // 字号：按 weight 决定，高频词大，低频词小
  function renderWordCloud() {
    const container = document.getElementById('wordcloudBg');
    if (!container) return;

    const words = data.wordcloud_words;
    if (!words || !words.length) return;

    // 容器尺寸（必须先于 scale 获取）
    const containerW = container.offsetWidth || 360;
    const containerH = container.offsetHeight || 640;
    const centerX = containerW / 2;
    const centerY = containerH / 2;

    // 按 weight 从高到低排序（高频词先放置，占据中心位置）
    const sorted = [...words].sort((a, b) => (b.weight || 1) - (a.weight || 1));

    // 字号根据屏幕宽度自适应（以380px移动端为基准，PC自动放大）
    const scale = Math.max(1, containerW / 380);

    // weight → 字号映射（已乘以scale，PC上自动放大）
    const fontSizeMap = {
      5: Math.round(30 * scale),
      4: Math.round(24 * scale),
      3: Math.round(18 * scale),
      2: Math.round(15 * scale),
      1: Math.round(13 * scale)
    };
    // weight → 透明度映射（提高可见度，从背景层升级为视觉层）
    const opacityMap = { 5: 0.48, 4: 0.40, 3: 0.32, 2: 0.26, 1: 0.20 };

    // 颜色池（主题色系）
    const colors = ['#534AB7', '#185FA5', '#0F6E56', '#D85A30', '#993556', '#BA7517', '#3C3489'];

    container.innerHTML = '';

    // 获取前景卡片的边界（作为词云禁区，词云会自动避让卡片区域）
    const card = document.querySelector('.screen-inner-intro');
    let cardRect = null;
    if (card) {
      const containerRect = container.getBoundingClientRect();
      const cardBounds = card.getBoundingClientRect();
      cardRect = {
        left: cardBounds.left - containerRect.left,
        top: cardBounds.top - containerRect.top,
        right: cardBounds.right - containerRect.left,
        bottom: cardBounds.bottom - containerRect.top
      };
    }

    // 检测位置是否与卡片重叠（加20px边距，让词不要紧贴卡片）
    function overlapsCard(x, y, halfW, halfH) {
      if (!cardRect) return false;
      const margin = 20;
      return (x + halfW > cardRect.left - margin &&
              x - halfW < cardRect.right + margin &&
              y + halfH > cardRect.top - margin &&
              y - halfH < cardRect.bottom + margin);
    }

    // 已放置词的边界框（用于碰撞检测）
    const placed = [];

    sorted.forEach((wordObj, i) => {
      const text = wordObj.text;
      const weight = wordObj.weight || 1;
      const fontSize = fontSizeMap[weight] || 12;
      const opacity = opacityMap[weight] || 0.1;
      const color = colors[i % colors.length];
      const isBold = weight >= 4;

      // 估算文字宽高（中文约1字宽=字号，英文约0.6字宽）
      const charWidth = /[\u4e00-\u9fa5]/.test(text) ? fontSize : fontSize * 0.6;
      const textW = text.length * charWidth + 8;
      const textH = fontSize * 1.3 + 4;
      const halfW = textW / 2;
      const halfH = textH / 2;

      // 螺旋寻找不重叠的位置
      let angle = Math.random() * Math.PI * 2;
      let radius = 0;
      let x = centerX, y = centerY;
      let found = false;
      let attempts = 0;
      const maxAttempts = 400;
      const angleStep = 0.3;
      const radiusStep = 1.5;

      while (!found && attempts < maxAttempts) {
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);

        // 边界检测（留10px边距）
        if (x - halfW < 10 || x + halfW > containerW - 10 ||
            y - halfH < 10 || y + halfH > containerH - 10) {
          angle += angleStep;
          radius += radiusStep;
          attempts++;
          continue;
        }

        // 卡片禁区检测（避让前景内容卡片）
        if (overlapsCard(x, y, halfW, halfH)) {
          angle += angleStep;
          radius += radiusStep;
          attempts++;
          continue;
        }

        // 碰撞检测（与其他已放置的词）
        let overlap = false;
        for (let p of placed) {
          const dx = Math.abs(x - p.x);
          const dy = Math.abs(y - p.y);
          const minDx = (textW + p.w) / 2 + 6;
          const minDy = (textH + p.h) / 2 + 4;
          if (dx < minDx && dy < minDy) {
            overlap = true;
            break;
          }
        }

        if (!overlap) {
          found = true;
        } else {
          angle += angleStep;
          radius += radiusStep;
          attempts++;
        }
      }

      if (found) {
        placed.push({ x, y, w: textW, h: textH });

        const span = document.createElement('span');
        span.className = 'wordcloud-word';
        span.textContent = text;
        span.style.cssText = `
          position: absolute;
          left: ${x}px;
          top: ${y}px;
          transform: translate(-50%, -50%);
          font-size: ${fontSize}px;
          color: ${color};
          opacity: ${opacity};
          font-weight: ${isBold ? '600' : '400'};
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          letter-spacing: 0.5px;
        `;
        container.appendChild(span);
      }
    });

    // 调试条：显示词云渲染状态（5秒后自动消失）
    const debug = document.createElement('div');
    debug.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#000;color:#FFF;padding:10px 20px;border-radius:8px;font-size:13px;z-index:99999;font-family:monospace;';
    debug.textContent = '词云: ' + placed.length + '/' + sorted.length + ' 个词 | 容器: ' + containerW + 'x' + containerH;
    document.body.appendChild(debug);
    setTimeout(function () { if (debug.parentNode) debug.remove(); }, 5000);
  }

  // ========== 初始化 ==========
  function init() {
    renderCover();
    renderIntro();
    renderMembers();
    renderSkillsChart();
    renderConnection();
    renderWordCloud();
    console.log('H5 初始化完成，共加载 ' + data.members.length + ' 位成员');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
