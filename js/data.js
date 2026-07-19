/**
 * 第5组"高光圆桌会"互动H5 - 数据接口
 * ============================================================
 * 内容共创官请修改本文件的数据内容，无需修改其他文件。
 * 修改后保存，刷新页面即可看到更新。
 *
 * 填写说明：
 * - 所有中文内容直接写在引号内
 * - 数组用方括号 [...]，元素用逗号分隔
 * - 不要删除字段名（如 nickname、skills 等），只改值
 * - 示例数据已填好，直接替换即可
 * ============================================================
 */

window.TEAM_DATA = {

  // ========== 团队层数据 ==========
  team: {
    name: "高光圆桌会",
    slogan: "把模糊变成具体",
    slogan_sub: "From fuzzy ideas to concrete deliverables",
    one_liner: "一群闪烁着独一无二光芒的星辰，以行动、共情与逻辑为声部，在彼此的共振中，合奏出更动人的交响。",
    core_tags: [
      { label: "策划力密集", color: "purple" },
      { label: "全链路小组", color: "teal" },
      { label: "不被替代的创意", color: "coral" }
    ],
    // P1 开场页背景图（可替换为AI海报URL，留空则用纯色背景）
    cover_image: "https://bee-reg-ab.imagency.cn/p/b4a83928a0b7025266e3d9e480743ad2.png",
    // P1 开场页背景色（cover_image为空时使用）
    cover_bg: "#1A0F2E",
    // P1 开场页slogan颜色
    slogan_color: "#F4F7FF"
  },

  // ========== 成员层数据（30人）==========
  // 每位成员包含：昵称、代称、简介、技能、技能类别、联系方式
  // skill_category 用于P4能力图谱归类，可选值：
  //   "策划" | "文案" | "视觉" | "数据" | "汇报" | "剪辑" | "其他"
  members: [
    {
      nickname: "尧尧",
      symbol: "慢慢烧开的水壶",
      intro: "为大家梳理各项任务，信息繁杂时拨开迷雾，提供情绪价值",
      skills: ["任务梳理", "情绪价值", "统筹协调"],
      skill_category: "策划",
      contact: "微信 Y1234567_765432",
      need_diplomat: false
    },
    {
      nickname: "小盐",
      symbol: "向日葵",
      intro: "头脑风暴提供创新点，倾听协调方案，擅长策划和写作",
      skills: ["推文制作", "海报制作", "摄影", "策划", "写作"],
      skill_category: "策划",
      contact: "微信luckFor11Yring-",
      need_diplomat: false
    },
    {
      nickname: "乐欣",
      symbol: "蓝色",
      intro: "整理并总结会议内容，真诚交流，协作有序",
      skills: ["阅读", "整理", "会议记录"],
      skill_category: "文案",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "蔓蔓",
      symbol: "水",
      intro: "倾听与引导，有卡点时帮忙梳理，互相激发新点子",
      skills: ["倾听引导", "问题梳理", "协调"],
      skill_category: "策划",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "wendy",
      symbol: "傍晚的暗黄色路灯",
      intro: "提供想法创新，英语方面的支持，户外摄影爱好者",
      skills: ["摄影", "英语", "户外", "创意想法"],
      skill_category: "视觉",
      contact: "微信19951700960",
      need_diplomat: false
    },
    {
      nickname: "俞冬",
      symbol: "灰蓝色调的黄昏",
      intro: "创意想法，文案编辑，及时反馈进程同步",
      skills: ["阅读", "写作", "摄影", "创意想法", "文案编辑"],
      skill_category: "文案",
      contact: "微信Eileenchoo_",
      need_diplomat: false
    },
    {
      nickname: "婷子",
      symbol: "拳手",
      intro: "商业研究分析，可对外展示路演",
      skills: ["商业研究", "分析", "对外路演"],
      skill_category: "汇报",
      contact: "微信Joychu666",
      need_diplomat: false
    },
    {
      nickname: "Kiel",
      symbol: "无",
      intro: "多平台信息检索，细节检查和多方位对比分析",
      skills: ["写作", "信息检索", "细节检查", "对比分析"],
      skill_category: "文案",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "妮妮",
      symbol: "较真的獾",
      intro: "拆解问题，任务模糊时拆解成小步骤，喜欢复盘",
      skills: ["任务拆解", "复盘整理", "问题分析"],
      skill_category: "策划",
      contact: "微信meng_ni_ni",
      need_diplomat: false
    },
    {
      nickname: "小杨",
      symbol: "正在扎根的树",
      intro: "文案写作，出点子，策划内容或优化表达",
      skills: ["文案写作", "创意点子", "内容优化", "数据可视化"],
      skill_category: "文案",
      contact: "微信kiyo_hyunjin",
      need_diplomat: false
    },
    {
      nickname: "小萌",
      symbol: "一棵茁壮生长的常青树",
      intro: "认真完成分配的任务，会议重点梳理、文案工作",
      skills: ["文案写作", "会议梳理", "执行"],
      skill_category: "文案",
      contact: "微信rymyyds123456",
      need_diplomat: false
    },
    {
      nickname: "小翁",
      symbol: "一只冷静的狐狸",
      intro: "负责排版和设计，从不同角度找切入点提供思路",
      skills: ["视觉设计", "排版", "创意想法", "切入点"],
      skill_category: "视觉",
      contact: "微信18757425707",
      need_diplomat: false
    },
    {
      nickname: "木木",
      symbol: "蓝色",
      intro: "文字梳理和内容框架搭建，把散乱内容变成清晰可展示成果",
      skills: ["摄影", "视频剪辑", "文字梳理", "框架搭建"],
      skill_category: "剪辑",
      contact: "微信13248466268",
      need_diplomat: false
    },
    {
      nickname: "苏苏",
      symbol: "林中的小鹿",
      intro: "数据整合、文案编辑、活动策划，快速摸清话题背景",
      skills: ["数据整合", "文案编辑", "活动策划", "背景调研"],
      skill_category: "策划",
      contact: "微信13611693429",
      need_diplomat: false
    },
    {
      nickname: "小弗",
      symbol: "谢霆锋《逆行》",
      intro: "头脑风暴、资料整合、汇报，习惯做笔记记录会议要点",
      skills: ["PPT制作", "汇报", "内容整理", "头脑风暴"],
      skill_category: "汇报",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "小金",
      symbol: "林俊杰《达尔文》",
      intro: "视觉设计，海报设计，UI/VI设计",
      skills: ["视觉设计", "海报", "UI/VI", "3D建模", "摄影"],
      skill_category: "视觉",
      contact: "微信yop708906",
      need_diplomat: false
    },
    {
      nickname: "小行",
      symbol: "魏如萱《香格里拉》",
      intro: "文案编辑、内容策划，早期追随者",
      skills: ["剧本写作", "访谈提纲", "文案编辑", "内容策划", "阅读观影"],
      skill_category: "文案",
      contact: "微信18808850501",
      need_diplomat: false
    },
    {
      nickname: "嘎嘎",
      symbol: "云",
      intro: "视频剪辑、信息流口播、总结汇报",
      skills: ["视频剪辑", "信息流口播", "汇报"],
      skill_category: "剪辑",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "小森",
      symbol: "绿色，充满永不止息的生命力",
      intro: "活动策划安排、海报设计，会议准备",
      skills: ["活动策划", "海报设计", "剪辑", "PPT"],
      skill_category: "策划",
      contact: "微信_512827zx",
      need_diplomat: false
    },
    {
      nickname: "小林",
      symbol: "一只收集地图的蜗牛",
      intro: "细节把控，交付结果前的信息核对检查",
      skills: ["细节把控", "信息核对", "排版布局", "汇报", "社群运营"],
      skill_category: "视觉",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "巴拉",
      symbol: "卡皮巴拉",
      intro: "发现成员闪光点并协调工作，擅长和客户沟通，运营社群",
      skills: ["台前汇报", "统筹策划", "社群运营", "商务沟通", "活动策划"],
      skill_category: "汇报",
      contact: "微信13601712921",
      need_diplomat: false
    },
    {
      nickname: "hogan",
      symbol: "卡皮巴拉",
      intro: "汇报、策划一项活动",
      skills: ["汇报", "策划", "整理"],
      skill_category: "汇报",
      contact: "微信17766563408",
      need_diplomat: false
    },
    {
      nickname: "妍妍",
      symbol: "喷泉",
      intro: "文本制作、策划活动",
      skills: ["文本制作", "活动策划"],
      skill_category: "策划",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "肆肆",
      symbol: "胶卷",
      intro: "视觉表达设计、AI技术支持、内容策划",
      skills: ["摄影", "视觉设计", "排版", "内容策划", "AI技术"],
      skill_category: "视觉",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "焦恩",
      symbol: "快乐小狗",
      intro: "数据汇总分析，协作助理工作",
      skills: ["数据汇总", "数据分析", "协作助理"],
      skill_category: "数据",
      contact: "微信Bababooeyyyyyy",
      need_diplomat: false
    },
    {
      nickname: "Soleil",
      symbol: "《Cornelia Street》",
      intro: "创意性观点，文本制作，耐心平和",
      skills: ["创意观点", "文本制作", "整理"],
      skill_category: "文案",
      contact: "",
      need_diplomat: false
    },
    {
      nickname: "哈哈番茄",
      symbol: "绿色",
      intro: "倾听，内容梳理整合，文字工作",
      skills: ["文案制作", "内容整理", "视觉设计", "倾听"],
      skill_category: "视觉",
      contact: "微信19892565360",
      need_diplomat: false
    },
    {
      nickname: "小余",
      symbol: "《我与地坛》",
      intro: "文字梳理与内容判断力，简单直接高效率",
      skills: ["文字梳理", "内容判断"],
      skill_category: "文案",
      contact: "微信18299109981",
      need_diplomat: false
    },
    {
      nickname: "一舟",
      symbol: "天和山雨雪",
      intro: "数据处理与可视化，用数据看见看不见的规律",
      skills: ["数据可视化", "小工具开发", "PPT"],
      skill_category: "数据",
      contact: "微信thesecrects356",
      need_diplomat: false
    },
    {
      nickname: "之之",
      symbol: "小太阳",
      intro: "文案编辑、内容策划、协助工作，不拖高效",
      skills: ["整理", "策划", "剪辑", "PPT", "文案"],
      skill_category: "策划",
      contact: "微信xxz062260",
      need_diplomat: false
    },
    {
      nickname: "大头",
      symbol: "淡蓝色",
      intro: "活动现场执行、新媒体内容产出、数据整理和复盘",
      skills: ["文案", "策划", "剪辑", "海报设计", "数据管理"],
      skill_category: "策划",
      contact: "微信L00L00XXXX",
      need_diplomat: false
    }
  ],

  // ========== 能力图谱数据 ==========
  // skill_categories 定义技能类别及其展示颜色
  // 颜色可选：purple | teal | coral | blue | amber | pink | gray
  skill_categories: [
    { name: "策划", color: "purple" },
    { name: "文案", color: "blue" },
    { name: "视觉", color: "pink" },
    { name: "数据", color: "teal" },
    { name: "汇报", color: "coral" },
    { name: "剪辑", color: "amber" }
  ],

  // ========== 词云数据（P2"看见彼此"背景）==========
  // 来源：文档第二阶段"看见彼此"表格的共同点/差异/组合优势
  // weight 决定字号大小（5最大，1最小），值越高词频越高
  wordcloud_words: [
    { text: "沟通", weight: 5 },
    { text: "互补", weight: 4 },
    { text: "技能", weight: 4 },
    { text: "高效", weight: 4 },
    { text: "性格", weight: 4 },
    { text: "想法", weight: 4 },
    { text: "学习", weight: 3 },
    { text: "创意", weight: 3 },
    { text: "专业", weight: 3 },
    { text: "及时反馈", weight: 3 },
    { text: "完整链条", weight: 3 },
    { text: "碰撞", weight: 3 },
    { text: "分工", weight: 3 },
    { text: "目标明确", weight: 3 },
    { text: "策划", weight: 2 },
    { text: "视觉", weight: 2 },
    { text: "数据", weight: 2 },
    { text: "文案", weight: 2 },
    { text: "创新", weight: 2 },
    { text: "协调", weight: 2 },
    { text: "真诚", weight: 2 },
    { text: "全链条", weight: 2 },
    { text: "DDL", weight: 2 },
    { text: "综合实力", weight: 2 },
    { text: "倾听", weight: 1 },
    { text: "表达", weight: 1 },
    { text: "执行", weight: 1 },
    { text: "攻守", weight: 1 },
    { text: "多角度", weight: 1 },
    { text: "情绪价值", weight: 1 },
    { text: "势如破竹", weight: 1 },
    { text: "耳目一新", weight: 1 },
    { text: "收拢", weight: 1 },
    { text: "发散", weight: 1 },
    { text: "理性", weight: 1 },
    { text: "感性", weight: 1 },
    { text: "各取所长", weight: 1 },
    { text: "学习型组织", weight: 1 },
    { text: "整合优势", weight: 1 }
  ],

  // ========== 连接方式 ==========
  connection: {
    
    // 飞书群二维码图片URL（留空则不显示）
    feishu_qr: "",
    // 团队对外一句话（显示在连接页顶部）
    invite_text: "想找我们聊聊？以下方式都可以",
    // 是否显示"自己联系"成员列表
    show_direct_contact: true
  }
};
