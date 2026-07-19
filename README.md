# 高光圆桌会 · 互动H5 数据填写指南

> 给内容共创官：你只需要修改 `js/data.js` 这一个文件，其他文件不要动。  
> 修改后保存，把文件发回给一舟，替换即可生效。

---

## 文件位置

```
h5/
├── index.html        ← 不要动
├── css/style.css     ← 不要动
└── js/
    ├── data.js       ← 只改这个
    └── app.js        ← 不要动
```

---

## 填写规则

1. **只改值，不改字段名**：如 `nickname: "一舟"`，只改 `"一舟"` 这部分，不要动 `nickname:` 这个名字
2. **引号不能丢**：中文内容写在英文双引号内，如 `"高光圆桌会"`
3. **逗号要保留**：每个字段之间用逗号分隔，最后一个字段可以不加逗号
4. **数组用方括号**：如 `skills: ["数据可视化", "PPT"]`
5. **留空用空字符串**：如没有联系方式，写 `contact: ""`

---

## 三部分数据

### 第一部分：团队信息（1份）

```javascript
team: {
  name: "高光圆桌会",                    // 团队名
  slogan: "把模糊变成具体",              // 主slogan
  slogan_sub: "From fuzzy ideas to...",  // slogan副标题（英文，可留空）
  one_liner: "30个擅长把...",            // 一句话团队介绍
  core_tags: [                           // 核心标签，3个以内
    { label: "策划力密集", color: "purple" },
    { label: "全链路小组", color: "teal" },
    { label: "不被替代的创意", color: "coral" }
  ],
  cover_image: "",                       // 开场页背景图URL，留空用纯色
  cover_bg: "#1A0F2E",                   // 纯色背景色
  slogan_color: "#FAC775"                // slogan文字颜色
}
```

**可选颜色**：purple / teal / coral / blue / amber / pink / gray

---

### 第二部分：成员信息（30份）

每位成员按以下格式填写，复制粘贴后修改：

```javascript
{
  nickname: "一舟",                      // 昵称
  symbol: "天和山雨雪",                  // 代称（颜色/动物/歌曲等）
  intro: "数据处理与可视化...",          // 一句话自我介绍（30字内）
  skills: ["数据可视化", "小工具开发", "PPT"],  // 技能关键词
  skill_category: "数据",                // 技能类别（见下方分类表）
  contact: "微信 xxx",                  // 联系方式，没有写 ""
  need_diplomat: false                   // 是否需要外交官代联，true/false
}
```

**skill_category 必须是以下6个之一**（影响P4能力图谱归类）：

| 类别 | 说明           | 颜色  |
| -- | ------------ | --- |
| 策划 | 策划、活动策划、内容策划 | 紫色  |
| 文案 | 文字写作、内容整理、推文 | 蓝色  |
| 视觉 | 设计、排版、海报、UI  | 粉色  |
| 数据 | 数据分析、可视化、小工具 | 青色  |
| 汇报 | 汇报、演讲、商务沟通   | 橙色  |
| 剪辑 | 视频剪辑、摄影、后期   | 琥珀色 |

如果某成员跨多个类别，选最主要的那个。

---

### 第三部分：连接方式

```javascript
connection: {
  diplomats: [                           // 外交官名单
    { nickname: "hogan", wechat: "17766563408" },
    { nickname: "巴拉", wechat: "（请补充）" }
  ],
  feishu_qr: "",                         // 飞书群二维码图片URL，留空不显示
  invite_text: "想找我们聊聊？以下方式都可以",
  show_direct_contact: true              // 是否显示"直接联系成员"入口
}
```

---

## 快速检查清单

填完后，对照以下清单检查：

- [ ] team 部分的 slogan 和 one_liner 已填写
- [ ] core_tags 有3个标签，每个都有 label 和 color
- [ ] members 数组有30个成员（或至少10个以上）
- [ ] 每个成员都有 nickname、symbol、skill_category
- [ ] skill_category 只用了规定的6个类别名
- [ ] connection.diplomats 至少有1位外交官
- [ ] 所有引号都是英文双引号 `"`，不是中文引号 `""`
- [ ] 所有逗号都在，没有漏掉

---

## 常见问题

**Q：某成员没有代称怎么办？**  
A：写 `symbol: ""`，留空即可。

**Q：联系方式想保护隐私怎么办？**  
A：`contact: ""` 留空，并设 `need_diplomat: true`，让外交官代为联系。

**Q：某成员技能跨多个类别怎么填？**  
A：skills 数组可以填多个技能，但 skill_category 只能选一个最主要的。

**Q：想加开场页背景图（AI海报）怎么办？**  
A：把图片上传到任何图床（如飞书云空间），把链接填到 `team.cover_image`。

**Q：填完怎么测试？**  
A：把 data.js 发给一舟，替换后刷新页面即可看到效果。
