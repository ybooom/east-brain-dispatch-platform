const modules = [
  {
    id: "star",
    icon: "★",
    name: "数字化星级调度",
    summary: "围绕星级目标、整改任务、基础问题和专项提升形成闭环。",
    kpis: [
      ["4.1★", "当前整体星级"],
      ["4.6★", "全年目标"],
      ["186", "整改任务总数"],
      ["124", "已完成任务"],
    ],
    metrics: [
      ["大区当前整体星星数", "4.1★", "距离目标差 0.5★"],
      ["大区全年星星数目标", "4.6★", "按季度滚动复核"],
      ["全年整改任务总数", "186", "覆盖 7 类问题"],
      ["当前已完成任务数量", "124", "完成率 66.7%"],
      ["当前进行中任务数量", "42", "需跟踪节点"],
      ["当前逾期未开始任务数量", "20", "需重点督办"],
    ],
    plan: [
      ["目标牵引", "按大区、区域、厂站三级拆解星级目标，展示年度目标、当前星级、差距和预计达成时间。"],
      ["整改闭环", "建立整改任务总池，按已完成、进行中、逾期未开始分类，绑定责任人和计划完成日期。"],
      ["提升分析", "聚焦基础问题、过程驱动和专项提升，识别重复问题、共性短板和优先整改清单。"],
    ],
    tasks: [
      ["星级评分规则口径确认", "运营管理部", "进行中", 76, "关注"],
      ["逾期未启动整改任务督办", "各区域公司", "预警", 28, "高"],
      ["基础问题重复项治理", "数字化小组", "进行中", 61, "中"],
      ["星级目标季度复盘", "大区运营", "未开始", 0, "中"],
    ],
    insight: "当前星级已进入提升阶段，主要矛盾不是任务数量，而是逾期未启动和重复问题。建议驾驶舱默认展示差距最大的区域，并把逾期未启动任务作为一级督办入口。",
    chart: [48, 56, 61, 66, 72, 79],
  },
  {
    id: "intensive",
    icon: "▦",
    name: "集约化调度",
    summary: "跟踪集约化事项推进、区域差异、共享能力建设和落地成效。",
    kpis: [
      ["73%", "整体进度"],
      ["58", "已完成任务"],
      ["21", "进行中任务"],
      ["7", "逾期未开始"],
    ],
    metrics: [
      ["大区整体进度", "73%", "较上周 +4%"],
      ["当前已完成任务数量", "58", "已验收 46 项"],
      ["当前进行中任务数量", "21", "重点跟踪 9 项"],
      ["当前逾期未开始任务数量", "7", "需区域说明"],
      ["共享岗位覆盖率", "82%", "核心岗位基本覆盖"],
      ["集约化收益测算", "312万", "年度预计贡献"],
    ],
    plan: [
      ["任务统筹", "以任务包方式管理集约化推进事项，按照厂站、区域和专业线统计进度。"],
      ["能力沉淀", "沉淀共享岗位、远程支持、标准动作和调度知识库，形成可复制模板。"],
      ["收益核算", "跟踪人效提升、响应时长下降、重复工作减少等结果指标。"],
    ],
    tasks: [
      ["共享化值守排班上线", "生产运行部", "已完成", 100, "低"],
      ["区域远程支持标准化", "技术支持组", "进行中", 72, "中"],
      ["低效重复工作压降", "综合管理部", "预警", 41, "中"],
      ["集约化收益核算模板", "财务运营", "进行中", 68, "低"],
    ],
    insight: "集约化调度适合做成进度看板加收益看板双视角。当前应重点补齐逾期未开始事项的原因字段，否则后续难以判断是资源不足、规则未定还是协同卡点。",
    chart: [36, 48, 57, 65, 69, 73],
  },
  {
    id: "process-ai",
    icon: "AI",
    name: "工艺AI调度",
    summary: "对关键工艺节点、异常水质、模型建议和执行反馈进行智能联动。",
    kpis: [
      ["81%", "节点进度"],
      ["5", "滞后节点"],
      ["23", "AI建议"],
      ["68%", "建议采纳率"],
    ],
    metrics: [
      ["大区整体节点进度", "81%", "关键路径正常"],
      ["滞后节点", "5项", "集中在调试环节"],
      ["AI优化建议数", "23", "本周新增 6 条"],
      ["建议采纳率", "68%", "需补执行反馈"],
      ["异常参数识别", "14次", "氨氮/总磷为主"],
      ["工艺稳定指数", "88", "整体可控"],
    ],
    plan: [
      ["节点地图", "展示工艺调试、模型训练、建议输出、现场执行和效果评估的节点进度。"],
      ["异常识别", "汇总水质、水量、药耗、能耗等异常，关联 AI 诊断原因。"],
      ["建议闭环", "每条 AI 建议记录采纳状态、执行人、执行结果和效果评估。"],
    ],
    tasks: [
      ["重点厂站工艺模型校准", "工艺技术部", "进行中", 78, "中"],
      ["滞后节点原因复核", "区域工艺负责人", "预警", 35, "高"],
      ["AI建议执行反馈补录", "厂站运行班组", "进行中", 62, "中"],
      ["异常参数规则优化", "数字化小组", "进行中", 70, "低"],
    ],
    insight: "工艺 AI 页建议突出节点进度和建议闭环，不只展示模型输出。滞后节点需要与厂站、参数、责任人绑定，便于从驾驶舱直接穿透到整改动作。",
    chart: [52, 58, 63, 70, 76, 81],
  },
  {
    id: "water",
    icon: "专",
    name: "专业化公司调度",
    summary: "统筹专业化公司服务能力、任务派发、响应效率和协同成效。",
    kpis: [
      ["88%", "任务进度"],
      ["12", "专业公司"],
      ["46", "支撑任务"],
      ["91%", "响应达成率"],
    ],
    metrics: [
      ["专业公司覆盖数", "12家", "覆盖核心专业线"],
      ["本月支撑任务", "46项", "已完成 33 项"],
      ["响应达成率", "91%", "目标 95%"],
      ["跨区域协同事项", "18项", "处理中 6 项"],
      ["服务评价均分", "4.6分", "满分 5 分"],
      ["待协调资源", "5项", "需大区统筹"],
    ],
    plan: [
      ["能力统筹", "展示专业化公司能力清单、服务范围、人员资源和可支撑区域。"],
      ["任务协同", "跟踪专业支撑任务从申请、派发、响应、执行到评价的全过程。"],
      ["成效评价", "按响应时效、问题解决率、服务满意度和复用成果沉淀专业价值。"],
    ],
    tasks: [
      ["专业支撑任务池梳理", "运营管理部", "进行中", 76, "中"],
      ["跨区域资源调配", "专业化公司", "预警", 48, "高"],
      ["服务评价规则确认", "综合管理部", "进行中", 68, "中"],
      ["专业成果模板沉淀", "数字化小组", "已完成", 100, "低"],
    ],
    insight: "专业化公司调度建议突出能力池和任务池双视角，重点看跨区域资源是否匹配、响应是否超时、支撑成果是否沉淀复用。",
    chart: [88, 91, 95, 92, 96, 94],
  },
  {
    id: "workorder",
    icon: "□",
    name: "工单管理调度",
    summary: "管理工单受理、派发、响应、超时和闭环质量。",
    kpis: [
      ["426", "本月工单"],
      ["91%", "闭环率"],
      ["18", "超时工单"],
      ["4.6h", "平均响应"],
    ],
    metrics: [
      ["本月工单总数", "426", "环比 +8%"],
      ["工单闭环率", "91%", "目标 95%"],
      ["超时工单", "18", "高优先级 5 项"],
      ["平均响应时长", "4.6h", "较上月下降"],
      ["重复工单占比", "12%", "需根因治理"],
      ["一次解决率", "78%", "仍可提升"],
    ],
    plan: [
      ["工单总览", "按来源、类型、区域、优先级统计工单数量与状态。"],
      ["超时督办", "对即将超时和已超时工单自动预警，推送责任人处理。"],
      ["质量复盘", "分析重复工单、返工工单和一次解决率，形成运维改进清单。"],
    ],
    tasks: [
      ["高优先级超时工单清理", "运维中心", "预警", 54, "高"],
      ["重复工单根因分析", "设备管理部", "进行中", 47, "中"],
      ["工单分类标准优化", "数字化小组", "进行中", 82, "低"],
      ["闭环质量抽检", "大区运营", "未开始", 0, "中"],
    ],
    insight: "工单管理页适合做成队列式工作台。后续可接入移动端处理记录，形成从预警、派单、处理、验收到评价的闭环。",
    chart: [74, 78, 82, 86, 89, 91],
  },
  {
    id: "cost",
    icon: "¥",
    name: "经营管理调度",
    summary: "跟踪收入、成本、预算、回款和经营指标，支撑经营质量提升。",
    kpis: [
      ["92%", "经营进度"],
      ["1,245万", "预算执行"],
      ["128万", "节约金额"],
      ["5", "超预算项"],
    ],
    metrics: [
      ["经营目标进度", "92%", "高于时间进度"],
      ["预算执行金额", "1,245万", "执行率 62%"],
      ["节约金额", "128万", "本月新增 18 万"],
      ["超预算事项", "5项", "需经营复核"],
      ["回款完成率", "87%", "目标 90%"],
      ["经营风险事项", "8项", "重点跟踪 3 项"],
    ],
    plan: [
      ["经营总览", "展示收入、成本、利润、预算执行、回款和经营风险的核心指标。"],
      ["偏差预警", "对预算超支、回款滞后、费用异常和经营目标偏差进行预警。"],
      ["经营闭环", "将经营偏差转为专项任务，跟踪责任部门、整改措施和收益确认。"],
    ],
    tasks: [
      ["经营指标月度复盘", "经营管理部", "进行中", 72, "中"],
      ["超预算事项核查", "财务运营", "预警", 42, "高"],
      ["回款滞后项目督办", "区域公司", "进行中", 63, "中"],
      ["节约收益确认台账", "大区运营", "进行中", 58, "中"],
    ],
    insight: "经营管理调度需要把预算执行、回款进度和经营风险放在一个视图里，方便从经营偏差直接穿透到责任部门和整改任务。",
    chart: [68, 64, 61, 59, 57, 55],
  },
  {
    id: "safety",
    icon: "◇",
    name: "安全管理调度",
    summary: "对安全检查、隐患整改、培训演练和高风险作业进行统一调度。",
    kpis: [
      ["97%", "隐患整改率"],
      ["12", "未闭环隐患"],
      ["6", "高风险作业"],
      ["100%", "培训覆盖"],
    ],
    metrics: [
      ["隐患整改率", "97%", "目标 98%"],
      ["未闭环隐患", "12", "逾期 3 项"],
      ["高风险作业", "6项", "今日需审批"],
      ["培训覆盖率", "100%", "已完成月度培训"],
      ["应急演练完成率", "83%", "2 区域待完成"],
      ["安全事件", "0", "本月未发生"],
    ],
    plan: [
      ["隐患闭环", "按照发现、整改、复查、销号跟踪安全隐患。"],
      ["作业管控", "对有限空间、动火、吊装等高风险作业进行审批和实时提醒。"],
      ["能力建设", "展示培训、演练、考试和班组安全活动完成情况。"],
    ],
    tasks: [
      ["逾期隐患整改督办", "安全管理部", "预警", 50, "高"],
      ["高风险作业审批复核", "区域安全员", "进行中", 80, "中"],
      ["应急演练补齐", "各区域公司", "进行中", 83, "低"],
      ["月度安全台账检查", "大区安全", "未开始", 0, "中"],
    ],
    insight: "安全页建议保留红色高优先级入口，直接展示逾期隐患和今日高风险作业。后续可以与工单和人员定位数据联动。",
    chart: [91, 93, 94, 95, 96, 97],
  },
  {
    id: "risk",
    icon: "!",
    name: "运营风险调度",
    summary: "跨专题汇总目标偏差、进度滞后、数据异常、成本异常和安全风险。",
    kpis: [
      ["17", "当前预警"],
      ["4", "高风险"],
      ["9", "处理中"],
      ["76%", "关闭率"],
    ],
    metrics: [
      ["当前预警事项", "17", "高风险 4 项"],
      ["处理中风险", "9", "责任人已确认"],
      ["本月关闭率", "76%", "目标 85%"],
      ["平均关闭时长", "3.2天", "高风险 1.8 天"],
      ["重复风险事项", "5", "需根因治理"],
      ["联动专题数", "8个", "覆盖全部模块"],
    ],
    plan: [
      ["风险池", "从八大专题自动汇聚预警，统一分级、分派和跟踪。"],
      ["根因分析", "对重复风险、长期未关闭风险和跨部门风险进行原因归类。"],
      ["调度闭环", "形成风险识别、派发、处置、复核、关闭和复盘的闭环。"],
    ],
    tasks: [
      ["高风险事项日调度", "大区运营", "进行中", 76, "高"],
      ["重复风险根因复盘", "综合管理部", "预警", 33, "高"],
      ["跨专题风险规则配置", "数字化小组", "进行中", 69, "中"],
      ["风险关闭质量抽查", "运营管理部", "未开始", 0, "中"],
    ],
    insight: "运营风险调度应作为平台的总控专题，把其他七个页面的预警拉到一个池子里，便于领导层看优先级，也便于运营团队派发和复盘。",
    chart: [22, 20, 19, 18, 17, 17],
  },
];

const starAreaMetrics = [
  {
    id: "quant",
    title: "量化星星总数",
    value: "406",
    unit: "颗",
    cardNote: "5月 · 较4月 +132",
    note: "按星级量化规则测算",
    series: [
      ["2025年12月", 303],
      ["1月", 315],
      ["2月", 338],
      ["3月", 362],
      ["4月", 274],
      ["5月", 406],
    ],
    focus: ["5月较4月增加 132 颗", "较去年12月增加 103 颗", "5月完成值高于年度目标口径，需复核区域贡献结构"],
    diagnosis: "5月量化口径星星总数出现明显抬升，核心原因应重点看区域补录、量化规则覆盖项和集中整改销项三类因素。",
    actions: ["复核5月新增星星来源区域", "拆分基础量化项与专项提升项贡献", "对4月低值区域进行异常回看"],
  },
  {
    id: "accept",
    title: "量化+验收星星总数",
    value: "280",
    unit: "颗",
    cardNote: "5月 · 较4月 +57",
    note: "已纳入验收结果",
    series: [
      ["2025年12月", 252],
      ["1月", 258],
      ["2月", 266],
      ["3月", 271],
      ["4月", 223],
      ["5月", 280],
    ],
    focus: ["5月较4月增加 57 颗", "较去年12月增加 28 颗", "验收口径增幅低于量化口径，存在待验收沉淀"],
    diagnosis: "验收后星星总数提升稳定，但与纯量化口径差距较大，说明部分整改结果还停留在过程完成或资料待确认阶段。",
    actions: ["建立待验收任务清单", "优先处理高星值待验收事项", "按区域追踪验收退回原因"],
  },
  {
    id: "payback",
    title: "量化+验收+回款星星总数",
    value: "238",
    unit: "颗",
    cardNote: "5月 · 较4月 +46",
    note: "叠加25年回款率测算",
    series: [
      ["2025年12月", 220],
      ["1月", 224],
      ["2月", 229],
      ["3月", 234],
      ["4月", 192],
      ["5月", 238],
    ],
    focus: ["5月较4月增加 46 颗", "较去年12月增加 18 颗", "回款约束后得分收窄，经营结果影响明显"],
    diagnosis: "叠加回款后星星总数低于验收口径，说明运营质量结果已经受到经营兑现能力影响，需要联动经营管理调度。",
    actions: ["标记回款影响最大的区域", "关联项目回款计划和验收节点", "对高星低回款项目设置预警"],
  },
  {
    id: "total",
    title: "总分",
    value: "86.5",
    unit: "分",
    cardNote: "综合评分",
    note: "综合评分",
    series: [
      ["2025年12月", 82.0],
      ["1月", 82.8],
      ["2月", 83.6],
      ["3月", 84.4],
      ["4月", 85.1],
      ["5月", 86.5],
    ],
    focus: ["5月较4月提升 1.4 分", "较去年12月提升 4.5 分", "综合评分进入稳步提升区间"],
    diagnosis: "总分连续走高，说明任务推进、验收闭环和质量指标形成正向合力。后续重点是减少逾期项对评分的拖累。",
    actions: ["锁定低分区域短板项", "将逾期任务纳入周督办", "建立总分波动解释台账"],
  },
  {
    id: "operation",
    title: "运行质量得分",
    value: "91",
    unit: "分",
    cardNote: "运行稳定性",
    note: "运行稳定性",
    series: [
      ["2025年12月", 86],
      ["1月", 87],
      ["2月", 88],
      ["3月", 89],
      ["4月", 90],
      ["5月", 91],
    ],
    focus: ["5月较4月提升 1 分", "较去年12月提升 5 分", "运行质量保持上行趋势"],
    diagnosis: "运行质量得分提升较平稳，说明现场运行基础动作改善有效，但还需要关注异常厂站是否被均值掩盖。",
    actions: ["拉取低于85分厂站清单", "分析异常水量和运行记录完整性", "将连续低分项目纳入专项复盘"],
  },
  {
    id: "device",
    title: "设备质量得分",
    value: "88",
    unit: "分",
    cardNote: "设备完好率",
    note: "设备完好率",
    series: [
      ["2025年12月", 84],
      ["1月", 85],
      ["2月", 86],
      ["3月", 86],
      ["4月", 87],
      ["5月", 88],
    ],
    focus: ["5月较4月提升 1 分", "较去年12月提升 4 分", "设备质量改善但爬升速度偏慢"],
    diagnosis: "设备质量改善幅度小于运行质量，可能受备件、检修计划和设备台账准确率影响，建议与工单闭环联动。",
    actions: ["核查重复故障设备", "补齐设备巡检与维修台账", "将高频故障纳入专项整改"],
  },
  {
    id: "data",
    title: "数据质量得分",
    value: "93",
    unit: "分",
    cardNote: "数据完整准确",
    note: "数据完整准确",
    series: [
      ["2025年12月", 88],
      ["1月", 89],
      ["2月", 90],
      ["3月", 91],
      ["4月", 92],
      ["5月", 93],
    ],
    focus: ["5月较4月提升 1 分", "较去年12月提升 5 分", "数据完整性已成为优势项"],
    diagnosis: "数据质量得分最高，说明填报完整性和口径统一已有基础。下一步应从完整性转向准确性、及时性和可追溯性。",
    actions: ["建立异常数据自动校验", "抽检高分区域原始凭证", "补充数据质量扣分原因库"],
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const starTaskMonths = ["1月", "2月", "3月", "4月", "5月"];
const starTaskMetricSeries = {
  taskTotal: {
    title: "当前任务总数",
    shortTitle: "任务总数",
    unit: "项",
    note: "大区整改任务池规模，5月为当前底稿口径。",
    values: [128, 136, 148, 162, 186],
    ratioLabel: "任务池增长率",
    ratios: [100, 106.3, 115.6, 126.6, 145.3],
    tone: "neutral",
  },
  taskDoing: {
    title: "进行中任务数",
    shortTitle: "进行中",
    unit: "项",
    note: "仍处于执行或资料补齐阶段的任务。",
    values: [55, 54, 49, 41, 42],
    ratioLabel: "进行中占比",
    ratios: [43, 39.7, 33.1, 25.3, 22.6],
    tone: "blue",
  },
  taskDone: {
    title: "已完成任务数",
    shortTitle: "已完成",
    unit: "项",
    note: "已经完成整改并完成闭环的任务。",
    values: [62, 74, 88, 103, 124],
    ratioLabel: "完成占比",
    ratios: [48.4, 54.4, 59.5, 63.6, 66.7],
    tone: "green",
  },
  taskOverdueDone: {
    title: "逾期完成任务数",
    shortTitle: "逾期完成",
    unit: "项",
    note: "超过计划节点后完成的任务，反映延期闭环压力。",
    values: [4, 6, 9, 12, 15],
    ratioLabel: "逾期完成占比",
    ratios: [3.1, 4.4, 6.1, 7.4, 8.1],
    tone: "amber",
  },
  taskOverdueOpen: {
    title: "逾期未完成任务数",
    shortTitle: "逾期未完成",
    unit: "项",
    note: "已逾期且仍未闭环，需要区域和项目同步督办。",
    values: [7, 8, 11, 18, 20],
    ratioLabel: "逾期未完成占比",
    ratios: [5.5, 5.9, 7.4, 11.1, 10.8],
    tone: "red",
  },
};

const starTaskMetricOrder = ["taskTotal", "taskDoing", "taskDone", "taskOverdueDone", "taskOverdueOpen"];

function getStarTaskMetric(metricId = "taskTotal") {
  return starTaskMetricSeries[metricId] || starTaskMetricSeries.taskTotal;
}

function formatRatio(value) {
  return `${Number(value).toFixed(value % 1 === 0 ? 0 : 1)}%`;
}

function renderStarTaskStatusCards(activeId = "") {
  return starTaskMetricOrder.map((metricId) => {
    const metric = getStarTaskMetric(metricId);
    const current = metric.values[metric.values.length - 1];
    const ratio = metric.ratios[metric.ratios.length - 1];
    return `
      <article class="metric-card metric-link star-task-status-card ${metric.tone} ${metricId === activeId ? "active" : ""}" data-star-task-metric="${metricId}" role="button" tabindex="0">
        <span>${metric.title}</span>
        <strong>${current}</strong>
        <small>${metricId === "taskTotal" ? metric.note : `${metric.ratioLabel} ${formatRatio(ratio)}`}</small>
        ${metricId === "taskTotal" ? "" : `<div class="small-progress"><i style="width:${Math.min(100, ratio)}%"></i></div>`}
      </article>
    `;
  }).join("");
}

const utilityModules = [
  {
    id: "data-push",
    icon: "⇄",
    name: "数据推送中台",
    summary: "统一管理数据推送任务、接口订阅、推送频率、失败重试和推送日志。",
    kpis: [
      ["96%", "推送成功率"],
      ["128", "订阅接口"],
      ["18", "推送任务"],
      ["3", "异常队列"],
    ],
    metrics: [
      ["今日推送成功率", "96%", "失败 12 条"],
      ["订阅接口数", "128", "启用 116 个"],
      ["实时推送任务", "18", "运行中 15 个"],
      ["异常队列", "3", "需人工复核"],
      ["平均延迟", "2.8s", "目标 5s 内"],
      ["重试成功率", "84%", "自动重试策略"],
    ],
    plan: [
      ["推送总览", "展示接口订阅、推送任务、推送频率、成功率和异常队列。"],
      ["规则配置", "支持按专题、区域、系统和数据类型配置推送规则与频率。"],
      ["日志追踪", "记录推送链路、失败原因、重试状态和接收系统反馈。"],
    ],
    tasks: [
      ["推送任务规则梳理", "数字化小组", "进行中", 70, "中"],
      ["异常队列清理", "数据运维", "预警", 45, "高"],
      ["接口订阅口径确认", "平台管理员", "进行中", 62, "中"],
      ["推送日志留痕优化", "系统运维", "已完成", 100, "低"],
    ],
    insight: "数据推送中台建议作为平台的数据出口总控，重点关注推送成功率、异常队列、接口订阅变化和跨系统数据一致性。",
    chart: [72, 78, 83, 88, 92, 96],
  },
  {
    id: "permission",
    icon: "⊙",
    name: "权限配置",
    summary: "统一管理角色、菜单、数据范围、审批权限和操作审计。",
    kpis: [
      ["42", "角色数量"],
      ["316", "用户授权"],
      ["9", "待审批"],
      ["100%", "审计覆盖"],
    ],
    metrics: [
      ["角色数量", "42", "含大区/区域/厂站"],
      ["用户授权数", "316", "本月新增 18 个"],
      ["待审批权限", "9", "需管理员处理"],
      ["敏感操作审计", "100%", "全量留痕"],
      ["过期授权", "6", "建议清理"],
      ["数据范围规则", "24", "按区域/专题配置"],
    ],
    plan: [
      ["角色管理", "管理大区、区域、厂站、专业公司等角色和菜单权限。"],
      ["数据范围", "按组织、区域、专题和项目配置数据可见范围。"],
      ["审计追踪", "记录权限申请、审批、变更、登录和敏感操作。"],
    ],
    tasks: [
      ["角色权限矩阵整理", "平台管理员", "进行中", 82, "中"],
      ["过期授权清理", "系统运维", "预警", 50, "中"],
      ["权限审批流程配置", "综合管理部", "进行中", 64, "低"],
      ["敏感操作审计核查", "数字化小组", "已完成", 100, "低"],
    ],
    insight: "权限配置需要重点保障数据边界和操作留痕，后续可结合组织架构、岗位职责和审批流自动生成权限建议。",
    chart: [58, 66, 72, 80, 88, 96],
  },
];

const regionRankingRows = [
  { rank: 1, region: "烟威区域公司", bp: "山东2组", targetNoPay: 14, targetPay: 12, quant: { may: 18, apr: 12, dec: 16, mom: 6, ytd: 2 }, accept: { may: 16, apr: 11, dec: 14, mom: 5, ytd: 2 }, payback: { may: 10, apr: 7, dec: 10, mom: 3, ytd: 0 } },
  { rank: 2, region: "青岛区域公司", bp: "山东1组", targetNoPay: 24, targetPay: 24, quant: { may: 34, apr: 21, dec: 25, mom: 13, ytd: 9 }, accept: { may: 23, apr: 17, dec: 20, mom: 6, ytd: 3 }, payback: { may: 22, apr: 16, dec: 20, mom: 6, ytd: 2 } },
  { rank: 3, region: "潍坊区域公司", bp: "山东2组", targetNoPay: 7, targetPay: 7, quant: { may: 10, apr: 7, dec: 8, mom: 3, ytd: 2 }, accept: { may: 7, apr: 7, dec: 7, mom: 0, ytd: 0 }, payback: { may: 7, apr: 7, dec: 7, mom: 0, ytd: 0 } },
  { rank: 4, region: "晋临区域公司", bp: "豫陕晋组", targetNoPay: 8, targetPay: 8, quant: { may: 13, apr: 12, dec: 8, mom: 1, ytd: 5 }, accept: { may: 8, apr: 8, dec: 7, mom: 0, ytd: 1 }, payback: { may: 8, apr: 8, dec: 7, mom: 0, ytd: 1 } },
  { rank: 5, region: "济南区域公司", bp: "山东1组", targetNoPay: 15, targetPay: 15, quant: { may: 18, apr: 13, dec: 15, mom: 5, ytd: 3 }, accept: { may: 13, apr: 10, dec: 13, mom: 3, ytd: 0 }, payback: { may: 13, apr: 10, dec: 13, mom: 3, ytd: 0 } },
  { rank: 6, region: "聊城区域公司", bp: "山东1组", targetNoPay: 8, targetPay: 8, quant: { may: 16, apr: 11, dec: 6, mom: 5, ytd: 10 }, accept: { may: 6, apr: 5, dec: 4, mom: 1, ytd: 2 }, payback: { may: 5, apr: 5, dec: 4, mom: 0, ytd: 1 } },
  { rank: 7, region: "洛阳区域公司", bp: "豫陕晋组", targetNoPay: 16, targetPay: 12, quant: { may: 20, apr: 15, dec: 17, mom: 5, ytd: 3 }, accept: { may: 16, apr: 14, dec: 16, mom: 2, ytd: 0 }, payback: { may: 3, apr: 3, dec: 4, mom: 0, ytd: -1 } },
  { rank: 8, region: "济宁区域公司", bp: "山东1组", targetNoPay: 12, targetPay: 12, quant: { may: 12, apr: 6, dec: 11, mom: 6, ytd: 1 }, accept: { may: 11, apr: 6, dec: 10, mom: 5, ytd: 1 }, payback: { may: 11, apr: 6, dec: 10, mom: 5, ytd: 1 } },
  { rank: 9, region: "郑州业务区", bp: "豫陕晋组", targetNoPay: 13, targetPay: 13, quant: { may: 19, apr: 15, dec: 14, mom: 4, ytd: 5 }, accept: { may: 12, apr: 12, dec: 11, mom: 0, ytd: 1 }, payback: { may: 10, apr: 10, dec: 9, mom: 0, ytd: 1 } },
  { rank: 10, region: "东营滨州区域公司", bp: "山东1组", targetNoPay: 16, targetPay: 16, quant: { may: 17, apr: 8, dec: 15, mom: 9, ytd: 2 }, accept: { may: 14, apr: 8, dec: 13, mom: 6, ytd: 1 }, payback: { may: 14, apr: 8, dec: 13, mom: 6, ytd: 1 } },
  { rank: 11, region: "苏皖业务区", bp: "江浙组", targetNoPay: 30, targetPay: 30, quant: { may: 47, apr: 34, dec: 37, mom: 13, ytd: 10 }, accept: { may: 26, apr: 20, dec: 26, mom: 6, ytd: 0 }, payback: { may: 25, apr: 20, dec: 25, mom: 5, ytd: 0 } },
  { rank: 12, region: "菏泽区域公司", bp: "山东2组", targetNoPay: 11, targetPay: 10, quant: { may: 20, apr: 13, dec: 14, mom: 7, ytd: 6 }, accept: { may: 12, apr: 10, dec: 10, mom: 2, ytd: 2 }, payback: { may: 9, apr: 8, dec: 8, mom: 1, ytd: 1 } },
  { rank: 13, region: "南阳区域公司", bp: "豫陕晋组", targetNoPay: 5, targetPay: 5, quant: { may: 7, apr: 3, dec: 6, mom: 4, ytd: 1 }, accept: { may: 4, apr: 3, dec: 4, mom: 1, ytd: 0 }, payback: { may: 4, apr: 3, dec: 4, mom: 1, ytd: 0 } },
  { rank: 14, region: "西安区域公司", bp: "豫陕晋组", targetNoPay: 12, targetPay: 11, quant: { may: 15, apr: 10, dec: 6, mom: 5, ytd: 9 }, accept: { may: 10, apr: 7, dec: 6, mom: 3, ytd: 4 }, payback: { may: 8, apr: 6, dec: 6, mom: 2, ytd: 2 } },
  { rank: 15, region: "太原区域公司", bp: "豫陕晋组", targetNoPay: 1, targetPay: 1, quant: { may: 2, apr: 0, dec: 0, mom: 2, ytd: 2 }, accept: { may: 1, apr: 0, dec: 0, mom: 1, ytd: 1 }, payback: { may: 1, apr: 0, dec: 0, mom: 1, ytd: 1 } },
  { rank: 16, region: "临沂区域公司", bp: "山东2组", targetNoPay: 18, targetPay: 17, quant: { may: 22, apr: 18, dec: 21, mom: 4, ytd: 1 }, accept: { may: 18, apr: 17, dec: 18, mom: 1, ytd: 0 }, payback: { may: 14, apr: 13, dec: 14, mom: 1, ytd: 0 } },
  { rank: 17, region: "枣庄区域公司", bp: "山东2组", targetNoPay: 14, targetPay: 8, quant: { may: 19, apr: 13, dec: 14, mom: 6, ytd: 5 }, accept: { may: 14, apr: 11, dec: 12, mom: 3, ytd: 2 }, payback: { may: 6, apr: 5, dec: 6, mom: 1, ytd: 0 } },
  { rank: 18, region: "北京建工环境", bp: "江浙组", targetNoPay: 56, targetPay: 56, quant: { may: 73, apr: 47, dec: 55, mom: 26, ytd: 18 }, accept: { may: 50, apr: 42, dec: 47, mom: 8, ytd: 3 }, payback: { may: 49, apr: 42, dec: 46, mom: 7, ytd: 3 } },
  { rank: 19, region: "杭湖区域公司", bp: "江浙组", targetNoPay: 10, targetPay: 10, quant: { may: 13, apr: 10, dec: 9, mom: 3, ytd: 4 }, accept: { may: 9, apr: 9, dec: 8, mom: 0, ytd: 1 }, payback: { may: 9, apr: 9, dec: 8, mom: 0, ytd: 1 } },
  { rank: 20, region: "台州区域公司", bp: "江浙组", targetNoPay: 9, targetPay: 9, quant: { may: 11, apr: 6, dec: 6, mom: 5, ytd: 5 }, accept: { may: 10, apr: 6, dec: 6, mom: 4, ytd: 4 }, payback: { may: 10, apr: 6, dec: 6, mom: 4, ytd: 4 } },
];

const areaBulletinRows = [
  { region: "烟威区域公司", bp: "山东2组", targetNoPay: 14, targetPay: 12, may: 8, apr: 7, dec: 10, mom: 1, ytd: -2 },
  { region: "青岛区域公司", bp: "山东1组", targetNoPay: 24, targetPay: 24, may: 20, apr: 16, dec: 20, mom: 4, ytd: 0 },
  { region: "潍坊区域公司", bp: "山东2组", targetNoPay: 7, targetPay: 7, may: 6, apr: 7, dec: 7, mom: -1, ytd: -1 },
  { region: "晋临区域公司", bp: "豫陕晋组", targetNoPay: 8, targetPay: 8, may: 8, apr: 8, dec: 7, mom: 0, ytd: 1 },
  { region: "济南区域公司", bp: "山东1组", targetNoPay: 15, targetPay: 15, may: 12, apr: 10, dec: 13, mom: 2, ytd: -1 },
  { region: "聊城区域公司", bp: "山东1组", targetNoPay: 8, targetPay: 8, may: 5, apr: 5, dec: 4, mom: 0, ytd: 1 },
  { region: "洛阳区域公司", bp: "豫陕晋组", targetNoPay: 16, targetPay: 12, may: 3, apr: 3, dec: 4, mom: 0, ytd: -1 },
  { region: "济宁区域公司", bp: "山东1组", targetNoPay: 12, targetPay: 12, may: 8, apr: 6, dec: 10, mom: 2, ytd: -2 },
  { region: "郑州业务区", bp: "豫陕晋组", targetNoPay: 13, targetPay: 13, may: 10, apr: 10, dec: 9, mom: 0, ytd: 1 },
  { region: "东营滨州区域公司", bp: "山东1组", targetNoPay: 16, targetPay: 16, may: 11, apr: 8, dec: 13, mom: 3, ytd: -2 },
  { region: "苏皖业务区", bp: "江浙组", targetNoPay: 30, targetPay: 30, may: 23, apr: 20, dec: 25, mom: 3, ytd: -2 },
  { region: "菏泽区域公司", bp: "山东2组", targetNoPay: 11, targetPay: 10, may: 9, apr: 8, dec: 8, mom: 1, ytd: 1 },
  { region: "南阳区域公司", bp: "豫陕晋组", targetNoPay: 5, targetPay: 5, may: 3, apr: 3, dec: 4, mom: 0, ytd: -1 },
  { region: "西安区域公司", bp: "豫陕晋组", targetNoPay: 12, targetPay: 11, may: 6, apr: 6, dec: 6, mom: 0, ytd: 0 },
  { region: "太原区域公司", bp: "豫陕晋组", targetNoPay: 1, targetPay: 1, may: 0, apr: 0, dec: 0, mom: 0, ytd: 0 },
  { region: "临沂区域公司", bp: "山东2组", targetNoPay: 18, targetPay: 17, may: 12, apr: 13, dec: 14, mom: -1, ytd: -2 },
  { region: "枣庄区域公司", bp: "山东2组", targetNoPay: 14, targetPay: 8, may: 6, apr: 5, dec: 6, mom: 1, ytd: 0 },
  { region: "北京建工环境", bp: "江浙组", targetNoPay: 56, targetPay: 56, may: 45, apr: 42, dec: 46, mom: 3, ytd: -1 },
  { region: "杭湖区域公司", bp: "江浙组", targetNoPay: 10, targetPay: 10, may: 9, apr: 9, dec: 8, mom: 0, ytd: 1 },
  { region: "台州区域公司", bp: "江浙组", targetNoPay: 9, targetPay: 9, may: 7, apr: 6, dec: 6, mom: 1, ytd: 1 },
];

const permissionRows = [
  { level: "大区", unit: "东部大区", name: "张三", role: "运营负责人", dataTypes: ["大区经营总览", "全部专题日报", "风险通报"], modules: ["全部模块"], frequency: "每日 09:00", status: "启用" },
  { level: "区域", unit: "烟威区域公司", name: "李四", role: "星级负责人", dataTypes: ["星级月报", "整改任务", "通报排名"], modules: ["数字化星级调度"], frequency: "每日 10:00", status: "启用" },
  { level: "区域", unit: "青岛区域公司", name: "赵敏", role: "运营负责人", dataTypes: ["区域经营概览", "风险通报"], modules: ["经营管理调度", "运营风险调度"], frequency: "每日 09:30", status: "启用" },
  { level: "区域", unit: "苏皖业务区", name: "周强", role: "星级负责人", dataTypes: ["星级月报", "区域排名"], modules: ["数字化星级调度"], frequency: "每周一 09:00", status: "启用" },
  { level: "项目", unit: "单县水厂", name: "王五", role: "集约化负责人", dataTypes: ["集约化任务", "共享岗位进度"], modules: ["集约化调度"], frequency: "每周一 10:00", status: "启用" },
  { level: "项目", unit: "玄武水厂", name: "刘洋", role: "工艺AI负责人", dataTypes: ["AI建议", "滞后节点", "工艺异常"], modules: ["工艺AI调度"], frequency: "实时预警", status: "启用" },
  { level: "项目", unit: "长清水厂", name: "陈晨", role: "专业化公司负责人", dataTypes: ["专业公司支撑", "协同事项"], modules: ["专业化公司调度"], frequency: "每日 16:00", status: "启用" },
  { level: "项目", unit: "槐荫水厂", name: "孙琪", role: "工单负责人", dataTypes: ["超时工单", "工单闭环率"], modules: ["工单管理调度"], frequency: "实时预警", status: "启用" },
  { level: "项目", unit: "峄城水厂", name: "吴越", role: "成本负责人", dataTypes: ["预算执行", "超预算项"], modules: ["经营管理调度"], frequency: "每周五 17:00", status: "停用" },
  { level: "项目", unit: "莒平水厂", name: "郑涛", role: "运营风险负责人", dataTypes: ["高风险事项", "风险关闭质量"], modules: ["运营风险调度"], frequency: "实时预警", status: "启用" },
];

const scheduledPushRows = [
  { module: "数字化星级调度", name: "星级月度整体情况", scope: "大区 / 区域", audience: "大区负责人、区域运营负责人、星级负责人", frequency: "每月 3日 09:00", status: "已启用", content: "星级得分、星星总数变化、整改任务结构、区域排名和风险提示" },
  { module: "经营管理调度", name: "经营指标月报", scope: "大区 / 区域", audience: "运营负责人、经营负责人", frequency: "每月 5日 10:00", status: "已启用", content: "预算执行、收入回款、经营偏差、重点跟踪事项" },
  { module: "工单管理调度", name: "工单闭环周报", scope: "区域 / 项目", audience: "区域运营负责人、工单负责人", frequency: "每周一 09:30", status: "已启用", content: "超时工单、闭环率、重复工单、一次解决率" },
  { module: "运营风险调度", name: "风险监控日报", scope: "大区 / 区域 / 项目", audience: "运营负责人、专项负责人", frequency: "每日 08:30", status: "已启用", content: "新增风险、高风险事项、逾期未关闭风险和处置建议" },
];

const instantPushRows = [
  { scene: "星级任务逾期", module: "数字化星级调度", trigger: "任务状态=逾期", recipients: "区域总负责人、任务负责人", message: "当前存在 20 项逾期星级任务，建议立即督办责任人并更新完成节点。", risk: "高" },
  { scene: "工艺AI滞后节点", module: "工艺AI调度", trigger: "节点进度低于计划", recipients: "工艺负责人、项目负责人", message: "工艺 AI 有 5 项滞后节点，需补充原因、措施和预计完成时间。", risk: "中" },
  { scene: "超时工单提醒", module: "工单管理调度", trigger: "工单超时或即将超时", recipients: "工单负责人、区域运营负责人", message: "当前有 18 个超时工单，请优先处理高优先级工单并反馈闭环结果。", risk: "高" },
  { scene: "风险预警通报", module: "运营风险调度", trigger: "风险等级=高", recipients: "运营负责人、专项负责人", message: "新增高风险事项 3 项，请确认处置责任人和复核节点。", risk: "高" },
];

const regionMetricConfig = [
  { id: "quant", title: "量化星级总数", key: "quant", field: "may", note: "按星级量化规则测算", mode: "score", unit: "颗" },
  { id: "accept", title: "量化+验收星级总数", key: "accept", field: "may", note: "纳入验收结果", mode: "score", unit: "颗" },
  { id: "payback", title: "量化+验收+回款星级总数", key: "payback", field: "may", note: "叠加回款率测算", mode: "score", unit: "颗" },
  { id: "acceptTarget", title: "量化+验收星级总数目标", key: "targetNoPay", note: "不带回款目标", mode: "target", unit: "颗" },
  { id: "paybackTarget", title: "量化+验收+回款星级总数目标", key: "targetPay", note: "带回款目标", mode: "target", unit: "颗" },
  { id: "acceptGap", title: "不带回款较目标差距", key: "accept", note: "超过目标绿色 / 低于目标红色", mode: "gap", targetKey: "targetNoPay", unit: "颗" },
  { id: "paybackGap", title: "带回款较目标差距", key: "payback", note: "超过目标绿色 / 低于目标红色", mode: "gap", targetKey: "targetPay", unit: "颗" },
  { id: "totalScore", title: "总分", note: "综合评分", mode: "derived", unit: "分" },
  { id: "operationScore", title: "运行质量得分", note: "运行稳定性", mode: "derived", unit: "分" },
  { id: "deviceScore", title: "设备质量得分", note: "设备完好率", mode: "derived", unit: "分" },
  { id: "dataScore", title: "数据质量得分", note: "数据完整准确", mode: "derived", unit: "分" },
  { id: "taskTotal", title: "当前任务总数", note: "区域整改任务总量", mode: "task", unit: "项" },
  { id: "taskDoing", title: "进行中任务数", note: "仍在推进", mode: "task", unit: "项" },
  { id: "taskDone", title: "已完成任务数", note: "已完成整改任务", mode: "task", unit: "项" },
  { id: "taskOverdueDone", title: "逾期完成任务数", note: "超期后完成", mode: "task", unit: "项" },
  { id: "taskOverdueOpen", title: "逾期未完成任务数", note: "需重点督办", mode: "task", unit: "项" },
];

const starProjects = [
  {
    id: "RW-2026-0001",
    name: "单县水厂-年度星级任务",
    owner: "鲁西区域",
    segments: [
      { start: 1, end: 2, status: "done", title: "基础数据核验完成", progress: "已完成 12/12 项，完成率 100%" },
      { start: 3, end: 4, status: "done", title: "星级评分自查完成", progress: "完成现场自查与问题归档" },
      { start: 5, end: 6, status: "doing", title: "过程资料补齐", progress: "完成 18/25 项，当前完成率 72%" },
    ],
  },
  {
    id: "RW-2026-0002",
    name: "玄武水厂-星级复核任务",
    owner: "鲁中区域",
    segments: [
      { start: 2, end: 3, status: "done", title: "复核材料整理", progress: "完成制度、台账、现场照片归档" },
      { start: 4, end: 5, status: "overdue", title: "缺陷项整改逾期", progress: "8 项整改中 3 项逾期，需区域督办" },
      { start: 6, end: 8, status: "doing", title: "复核问题闭环", progress: "完成 11/17 项，当前完成率 65%" },
    ],
  },
  {
    id: "RW-2026-0004",
    name: "长清水厂-临时专项任务",
    owner: "鲁北区域",
    segments: [
      { start: 5, end: 10, status: "done", title: "专项整改主线完成", progress: "设备标识、制度上墙、运行记录已完成" },
    ],
  },
  {
    id: "RW-2026-0005",
    name: "槐荫水厂-临时专项任务",
    owner: "鲁中区域",
    segments: [
      { start: 8, end: 9, status: "done", title: "现场标准化整改完成", progress: "完成 9/9 项，已提交复核" },
    ],
  },
  {
    id: "RW-2026-0006",
    name: "玄武水厂-星级设备更新",
    owner: "鲁中区域",
    segments: [
      { start: 4, end: 7, status: "done", title: "设备更新一期完成", progress: "完成关键设备更新和资料归档" },
      { start: 8, end: 12, status: "doing", title: "设备更新二期推进", progress: "完成 16/24 项，当前完成率 67%" },
    ],
  },
  {
    id: "RW-2026-0007",
    name: "峄城水厂-星级管理提升",
    owner: "鲁南区域",
    segments: [
      { start: 7, end: 9, status: "doing", title: "班组管理提升", progress: "完成培训与检查 6/10 项" },
      { start: 10, end: 11, status: "overdue", title: "台账补录滞后", progress: "本月计划 6 项，已完成 2 项" },
    ],
  },
  {
    id: "RW-2026-0008",
    name: "莒平水厂-星级验收任务",
    owner: "鲁北区域",
    segments: [
      { start: 7, end: 12, status: "doing", title: "验收准备推进", progress: "完成现场整改 14/20 项" },
    ],
  },
  {
    id: "RW-2026-0009",
    name: "昆山水厂-星级提升任务",
    owner: "苏皖区域",
    segments: [
      { start: 10, end: 12, status: "doing", title: "星级提升冲刺", progress: "完成 7/13 项，剩余现场复查与验收资料" },
    ],
  },
  {
    id: "RW-2026-0010",
    name: "冠县水厂-星级验收任务",
    owner: "鲁西区域",
    segments: [
      { start: 6, end: 7, status: "overdue", title: "验收资料逾期", progress: "资料补齐滞后 2 周，责任人已确认" },
      { start: 8, end: 9, status: "doing", title: "问题复核推进", progress: "完成 5/8 项" },
    ],
  },
  {
    id: "RW-2026-0011",
    name: "莒平水厂-星级工艺优化",
    owner: "鲁北区域",
    segments: [
      { start: 9, end: 12, status: "done", title: "工艺优化任务完成", progress: "运行参数、巡检记录、整改报告已归档" },
    ],
  },
];

const annualStarProjects = [
  {
    id: "S2-001",
    name: "东营城北",
    owner: "东营滨州区域公司",
    tasks: [
      { title: "程控率", item: "事项1", status: "done", start: 6, end: 8, progress: 100, owner: "李铖悦" },
      { title: "紫外消毒设备吨水电耗", item: "事项2", status: "done", start: 4, end: 6, progress: 100, owner: "李铖悦" },
      { title: "碳源消耗比△C/△N", item: "事项3", status: "doing", start: 5, end: 6, progress: 0, owner: "李铖悦" },
      { title: "日常填报类数据准确性评价", item: "事项4", status: "doing", start: 5, end: 6, progress: 59, owner: "李铖悦" },
      { title: "提升输送系统效率", item: "事项5", status: "overdue", start: 5, end: 6, progress: 97, owner: "李铖悦" },
      { title: "生化池出水TP", item: "事项6", status: "done", start: 10, end: 11, progress: 100, owner: "李铖悦" },
      { title: "核心设备故障频度", item: "事项7", status: "done", start: 5, end: 7, progress: 100, owner: "来志浩" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项8", status: "done", start: 7, end: 8, progress: 100, owner: "李铖悦" },
      { title: "处理水量完成率", item: "事项9", status: "doing", start: 9, end: 12, progress: 0, owner: "李铖悦" },
      { title: "云平台实时数据完整性评价", item: "事项10", status: "doing", start: 4, end: 7, progress: 50, owner: "来志浩" },
    ],
  },
  {
    id: "S2-002",
    name: "宜兴徐舍",
    owner: "北京建工环境",
    tasks: [
      { title: "处理水量完成率", item: "事项1", status: "overdue", start: 10, end: 12, progress: 77, owner: "王立丰" },
      { title: "生化池出水TP", item: "事项2", status: "done", start: 5, end: 6, progress: 100, owner: "王立丰" },
      { title: "日常填报类数据上传及时性评价", item: "事项3", status: "doing", start: 4, end: 5, progress: 0, owner: "王立丰" },
      { title: "日常填报类数据准确性评价", item: "事项4", status: "overdue", start: 4, end: 5, progress: 82, owner: "王立丰" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项5", status: "done", start: 5, end: 8, progress: 100, owner: "王立丰" },
      { title: "混合系统单位容积能耗", item: "事项6", status: "overdue", start: 3, end: 5, progress: 77, owner: "王立丰" },
      { title: "碳源消耗比△C/△N", item: "事项7", status: "done", start: 7, end: 8, progress: 100, owner: "王立丰" },
      { title: "生化池曝气系统吨水电耗", item: "事项8", status: "done", start: 5, end: 8, progress: 100, owner: "王立丰" },
      { title: "提升输送系统效率", item: "事项9", status: "doing", start: 3, end: 5, progress: 0, owner: "王立丰" },
    ],
  },
  {
    id: "S2-003",
    name: "奉化莼湖",
    owner: "北京建工环境",
    tasks: [
      { title: "核心设备故障频度", item: "事项1", status: "overdue", start: 9, end: 12, progress: 92, owner: "项目负责人" },
      { title: "程控率", item: "事项2", status: "done", start: 3, end: 5, progress: 100, owner: "项目负责人" },
      { title: "除磷药剂摩尔比", item: "事项3", status: "done", start: 9, end: 12, progress: 100, owner: "项目负责人" },
      { title: "自主保障率", item: "事项4", status: "overdue", start: 1, end: 4, progress: 90, owner: "项目负责人" },
      { title: "生化池曝气系统吨水电耗", item: "事项5", status: "done", start: 10, end: 12, progress: 100, owner: "项目负责人" },
      { title: "云平台实时数据准确性评价", item: "事项6", status: "done", start: 3, end: 4, progress: 100, owner: "项目负责人" },
      { title: "生化池出水TP", item: "事项7", status: "doing", start: 10, end: 12, progress: 82, owner: "项目负责人" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项8", status: "doing", start: 11, end: 12, progress: 37, owner: "项目负责人" },
      { title: "提升输送系统效率", item: "事项9", status: "doing", start: 11, end: 12, progress: 69, owner: "项目负责人" },
      { title: "处理水量完成率", item: "事项10", status: "doing", start: 9, end: 10, progress: 77, owner: "项目负责人" },
    ],
  },
  {
    id: "S2-004",
    name: "南京荣泰",
    owner: "苏皖业务区",
    tasks: [
      { title: "提升输送系统效率", item: "事项1", status: "done", start: 4, end: 6, progress: 100, owner: "项目负责人" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项2", status: "done", start: 2, end: 4, progress: 100, owner: "项目负责人" },
      { title: "碳源消耗比△C/△N", item: "事项3", status: "doing", start: 1, end: 3, progress: 42, owner: "项目负责人" },
      { title: "除磷药剂摩尔比", item: "事项4", status: "done", start: 5, end: 7, progress: 100, owner: "项目负责人" },
      { title: "提升输送系统效率", item: "事项5", status: "done", start: 6, end: 8, progress: 100, owner: "项目负责人" },
      { title: "生化池曝气系统吨水电耗", item: "事项6", status: "doing", start: 4, end: 6, progress: 0, owner: "项目负责人" },
      { title: "混合系统单位容积能耗", item: "事项7", status: "done", start: 3, end: 5, progress: 100, owner: "项目负责人" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项8", status: "done", start: 6, end: 8, progress: 100, owner: "项目负责人" },
    ],
  },
  {
    id: "S2-005",
    name: "青岛高新区",
    owner: "青岛区域公司",
    tasks: [
      { title: "核心设备故障频度", item: "事项1", status: "done", start: 6, end: 9, progress: 100, owner: "项目负责人" },
      { title: "碳源消耗比△C/△N", item: "事项2", status: "doing", start: 6, end: 8, progress: 30, owner: "项目负责人" },
      { title: "提升输送系统效率", item: "事项3", status: "done", start: 6, end: 7, progress: 100, owner: "项目负责人" },
      { title: "程控率", item: "事项4", status: "done", start: 11, end: 12, progress: 100, owner: "项目负责人" },
      { title: "生化池曝气系统吨水电耗", item: "事项5", status: "done", start: 4, end: 7, progress: 100, owner: "项目负责人" },
      { title: "污泥脱水PAM吨干泥药耗", item: "事项6", status: "done", start: 5, end: 7, progress: 100, owner: "项目负责人" },
      { title: "云平台实时数据完整性评价", item: "事项7", status: "done", start: 6, end: 9, progress: 100, owner: "项目负责人" },
      { title: "处理水量完成率", item: "事项8", status: "doing", start: 7, end: 8, progress: 0, owner: "项目负责人" },
    ],
  },
];

const weeklyPlans = {
  "RW-2026-0001-5": [
    ["第1周", "资料缺口核查", "梳理星级评分资料缺失项", "张伟", "5月7日", "已完成"],
    ["第2周", "运行记录补齐", "补齐巡检、设备维护、交接班记录", "王敏", "5月14日", "已完成"],
    ["第3周", "现场标准化整改", "完成标识、台账、制度上墙整改", "李强", "5月21日", "进行中"],
    ["第4周", "区域复核", "组织区域复核并形成问题闭环表", "赵悦", "5月28日", "未开始"],
  ],
  "RW-2026-0002-4": [
    ["第1周", "逾期原因确认", "确认 3 项逾期整改责任人与资源缺口", "孙磊", "4月7日", "已完成"],
    ["第2周", "专项整改", "对现场标识、巡检记录开展集中整改", "杨华", "4月14日", "逾期"],
    ["第3周", "复核反馈", "提交区域复核材料并补齐图片证据", "陈晨", "4月21日", "进行中"],
    ["第4周", "销项验收", "完成整改销项和大区复验", "王敏", "4月28日", "未开始"],
  ],
};

function getWeeklyPlan(projectId, month) {
  return weeklyPlans[`${projectId}-${month}`] || [
    ["第1周", "任务拆解", "确认本月星级任务清单、责任人和完成节点", "区域负责人", `${month}月7日`, "已完成"],
    ["第2周", "整改推进", "完成现场整改、资料补齐和过程证据上传", "厂站负责人", `${month}月14日`, "进行中"],
    ["第3周", "过程复核", "对整改结果开展区域复核并形成问题清单", "运营管理部", `${month}月21日`, "进行中"],
    ["第4周", "销项归档", "完成任务销项、资料归档和星级评分更新", "大区运营", `${month}月28日`, "未开始"],
  ];
}

function badgeClass(level) {
  if (level === "高" || level === "danger") return "danger";
  if (level === "中" || level === "warn") return "warn";
  if (level === "低" || level === "good") return "good";
  return "info";
}

function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
  }[char]));
}

function renderNavigation() {
  const nav = $(".module-nav");
  nav.insertAdjacentHTML(
    "beforeend",
    modules.map((item) => `
      <button class="nav-item" data-module="${item.id}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.name}</span>
      </button>
    `).join("")
  );
  $("#utilityNav").innerHTML = `
    <div class="utility-title">平台能力</div>
    ${utilityModules.map((item) => `
      <button class="nav-item utility-item" data-module="${item.id}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.name}</span>
      </button>
    `).join("")}
  `;
}

function renderCards() {
  $("#moduleCards").innerHTML = modules.map((item) => `
    <article class="module-card cockpit-module-card">
      <div class="module-card-head">
        <span class="module-icon">${item.icon}</span>
        <strong>${item.name}</strong>
        <em><i></i>运行中</em>
      </div>
      <div class="module-primary">
        <div>
          <span>任务进度</span>
          <strong>${item.kpis[0]?.[0].includes("%") ? item.kpis[0][0] : item.kpis[1]?.[0].includes("%") ? item.kpis[1][0] : "73%"}</strong>
        </div>
        <div class="module-progress">
          <span style="width:${item.kpis[0]?.[0].includes("%") ? item.kpis[0][0] : item.kpis[1]?.[0].includes("%") ? item.kpis[1][0] : "73%"}"></span>
        </div>
      </div>
      <div class="module-mini-kpis">
        ${item.kpis.slice(0, 3).map(([value, label]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}
      </div>
      <button class="module-enter" data-module="${item.id}">进入专题 <span>→</span></button>
    </article>
  `).join("");
}

function assistantReply(question) {
  const q = question.trim();
  if (q.includes("风险")) return "当前大区共有 7 项风险预警，其中高风险主要集中在数字化星级整改逾期、工艺 AI 节点滞后和成本偏差三类。建议优先处理逾期未开始事项，并按区域责任人形成督办清单。";
  if (q.includes("星级") || q.includes("数字化")) return "数字化星级调度当前整体星级为 4.1★，全年目标为 4.6★。全年整改任务 186 项，已完成 124 项，进行中 42 项，逾期未开始 20 项。";
  if (q.includes("进度") || q.includes("完成")) return "八大专题当前综合任务进度约 73%，已完成任务 124 项。本月推进较快的是专业化公司调度和安全管理调度，滞后项主要集中在星级整改和工艺 AI 节点复核。";
  if (q.includes("成本") || q.includes("经营")) return "经营管理调度当前经营目标进度 92%，预算执行金额 1,245 万，回款完成率 87%。建议重点关注超预算事项和回款滞后项目。";
  return "我可以帮你查询任务进度、风险预警、星级整改、工单闭环、经营偏差和安全隐患等运营数据。你也可以问：本月哪些任务逾期？数字化星级差距在哪里？";
}

function renderAssistantModal() {
  $("#assistantModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="agent-backdrop" id="assistantModal">
      <section class="agent-modal" role="dialog" aria-modal="true" aria-labelledby="agentTitle">
        <aside class="agent-side">
          <div class="agent-avatar">AI</div>
          <h2 id="agentTitle">东部智脑智能助手</h2>
          <p>围绕八大调度专题，提供数据查询、风险研判和调度建议。</p>
          <div class="agent-topics">
            <button data-agent-question="当前有哪些风险预警？">风险预警</button>
            <button data-agent-question="数字化星级调度当前情况如何？">星级整改</button>
            <button data-agent-question="八大专题整体进度是多少？">任务进度</button>
            <button data-agent-question="经营管理有哪些异常？">经营异常</button>
          </div>
        </aside>
        <main class="agent-chat">
          <header class="agent-chat-head">
            <div>
              <strong>运营数据问答</strong>
              <span><i></i>在线分析中</span>
            </div>
            <button class="modal-close" data-close-agent type="button">×</button>
          </header>
          <div class="agent-messages" id="agentMessages">
            <article class="agent-message bot">
              <span>AI</span>
              <p>你好，我是东部智脑智能助手。你可以问我任务进度、风险预警、整改完成情况、成本偏差或各专题运行状态。</p>
            </article>
          </div>
          <form class="agent-input" id="agentForm">
            <input id="agentQuestion" placeholder="输入你想查询的数据情况，例如：本月哪些任务逾期？" />
            <button type="submit">发送</button>
          </form>
        </main>
      </section>
    </div>
  `);
}

function sendAssistantQuestion(question) {
  if (!question.trim()) return;
  const messages = $("#agentMessages");
  messages.insertAdjacentHTML("beforeend", `
    <article class="agent-message user">
      <span>我</span>
      <p>${question}</p>
    </article>
    <article class="agent-message bot">
      <span>AI</span>
      <p>${assistantReply(question)}</p>
    </article>
  `);
  messages.scrollTop = messages.scrollHeight;
}

function setTopbar(mode, title) {
  const topbar = $(".topbar");
  if (!topbar) return;
  topbar.classList.toggle("module-mode", mode === "module");
  $("#topTitle").textContent = title;
  if (mode === "home") {
    $("#topEyebrow").textContent = "数据源 · 智能分析 · 联动交互 · 科学决策 · 提质增效";
    $("#topSubtitle").textContent = "围绕目标、调度、价值三层闭环，形成大区运营管理的一屏统览、专题穿透和风险联动。";
  }
}

function renderGenericTemplate() {
  $("#moduleDetail").innerHTML = `
    <div class="detail-toolbar">
      <button class="ghost-btn" data-view-jump="cockpit">← 返回驾驶舱</button>
      <div>
        <p class="eyebrow" id="detailEyebrow">专题调度</p>
        <h2 id="detailTitle"></h2>
      </div>
    </div>
    <section class="detail-layout">
      <div class="detail-main">
        <section class="metric-grid" id="detailMetrics"></section>
        <section class="panel">
          <div class="panel-head">
            <h2>专题工作方案</h2>
            <span class="muted">当前版本为原型口径</span>
          </div>
          <div class="plan-grid" id="detailPlan"></div>
        </section>
        <section class="panel">
          <div class="panel-head">
            <h2>重点任务台账</h2>
            <span class="muted" id="taskCount">0 项</span>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>任务事项</th>
                  <th>责任部门</th>
                  <th>状态</th>
                  <th>完成率</th>
                  <th>风险</th>
                </tr>
              </thead>
              <tbody id="detailRows"></tbody>
            </table>
          </div>
        </section>
      </div>
      <aside class="detail-aside">
        <section class="panel dark-panel">
          <h2>调度判断</h2>
          <p id="detailInsight"></p>
          <div class="mini-chart" id="miniChart"></div>
        </section>
        <section class="panel">
          <div class="panel-head">
            <h2>风险与动作</h2>
          </div>
          <div class="risk-actions" id="detailActions"></div>
        </section>
      </aside>
    </section>
  `;
}

function renderDataPushModule(item) {
  $("#moduleDetail").innerHTML = `
    <div class="push-page">
      <div class="detail-toolbar push-toolbar">
        <button class="ghost-btn" data-view-jump="cockpit">← 返回驾驶舱</button>
        <div>
          <p class="eyebrow">平台能力 / 数据推送中台</p>
          <h2>${item.name}</h2>
        </div>
        <button class="primary-btn" data-open-push-preview type="button">推送预览</button>
      </div>

      <section class="push-summary-grid">
        <article><span>定时推送任务</span><strong>${scheduledPushRows.length}</strong><small>按月 / 周 / 日自动触达</small></article>
        <article><span>一键推送场景</span><strong>${instantPushRows.length}</strong><small>逾期、风险、超时即时提醒</small></article>
        <article><span>权限匹配对象</span><strong>${permissionRows.length}</strong><small>按岗位自动匹配收件人</small></article>
        <article><span>本月预计推送</span><strong>126</strong><small>含星级月报与风险通报</small></article>
      </section>

      <section class="push-workbench">
        <article class="panel push-panel">
          <div class="panel-head">
            <div>
              <h2>定时推送</h2>
              <span class="muted">面向 8 个调度功能，按周期生成不同层级的数据包。</span>
            </div>
            <button class="ghost-btn" data-open-push-preview type="button">新增定时</button>
          </div>
          <div class="push-card-list">
            ${scheduledPushRows.map((row) => `
              <div class="push-rule-card">
                <div>
                  <b>${row.name}</b>
                  <span>${row.module} · ${row.scope}</span>
                </div>
                <p>${row.content}</p>
                <div class="push-meta">
                  <i>${row.frequency}</i>
                  <i>${row.audience}</i>
                  <em>${row.status}</em>
                </div>
              </div>
            `).join("")}
          </div>
        </article>

        <article class="panel push-panel">
          <div class="panel-head">
            <div>
              <h2>一键推送</h2>
              <span class="muted">用于逾期、超时、风险等需要立即触达的场景。</span>
            </div>
            <button class="primary-btn" data-open-push-preview type="button">生成预览</button>
          </div>
          <div class="instant-push-grid">
            ${instantPushRows.map((row) => `
              <button class="instant-push-card" data-open-push-preview type="button">
                <span class="badge ${badgeClass(row.risk)}">${row.risk}风险</span>
                <strong>${row.scene}</strong>
                <small>${row.module}</small>
                <p>${row.message}</p>
                <em>推送给：${row.recipients}</em>
              </button>
            `).join("")}
          </div>
        </article>
      </section>

      <section class="panel push-preview-board">
        <div class="panel-head">
          <div>
            <h2>推送预览确认</h2>
            <span class="muted">确认推送对象、数据范围和内容摘要后再执行推送。</span>
          </div>
          <button class="primary-btn" data-open-push-preview type="button">打开预览页</button>
        </div>
        <div class="preview-layout">
          <div class="preview-config">
            <label>调度功能<select><option>数字化星级调度</option><option>集约化调度</option><option>工艺AI调度</option><option>专业化公司调度</option><option>工单管理调度</option><option>经营管理调度</option><option>安全管理调度</option><option>运营风险调度</option></select></label>
            <label>推送类型<select><option>月度整体情况</option><option>逾期任务一键推送</option><option>风险通报</option><option>专题日报</option></select></label>
            <label>推送范围<select><option>大区整体</option><option>区域公司</option><option>单项目</option></select></label>
          </div>
          <div class="preview-message">
            <b>预览内容</b>
            <p>【数字化星级调度】5月大区整体量化星星总数 406，量化+验收星星总数 280，逾期任务 20 项。建议重点关注临沂、烟威、济宁等区域较 12 月变化情况。</p>
            <div>
              <span>大区负责人：张三</span>
              <span>区域运营负责人：20 人</span>
              <span>任务负责人：按逾期任务自动匹配</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderPushPreviewModal() {
  $("#pushPreviewModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="pushPreviewModal">
      <section class="permission-modal push-preview-modal">
        <header>
          <div>
            <h2>推送预览</h2>
            <p class="muted">发送前确认数据范围、接收对象和消息内容。</p>
          </div>
          <button class="icon-close" data-close-push-preview type="button">×</button>
        </header>
        <div class="push-preview-modal-body">
          <aside>
            <b>推送配置</b>
            <label>调度功能<select><option>数字化星级调度</option><option>工单管理调度</option><option>运营风险调度</option></select></label>
            <label>触发方式<select><option>一键推送：逾期任务</option><option>定时推送：月度整体情况</option></select></label>
            <label>推送范围<select><option>大区整体</option><option>枣庄区域公司</option><option>东营城北项目</option></select></label>
          </aside>
          <main>
            <b>消息正文</b>
            <div class="push-message-box">
              <strong>数字化星级调度逾期任务提醒</strong>
              <p>当前共有 20 项逾期任务，其中星级任务逾期集中在资料补齐、过程复核和现场整改。请区域总负责人组织专项督办，任务负责人在本周内更新措施、节点和完成情况。</p>
              <ul>
                <li>推送对象：区域总负责人、单项任务负责人</li>
                <li>数据范围：逾期任务明细、责任人、完成节点、当前进度</li>
                <li>确认动作：接收人需反馈整改措施与预计完成时间</li>
              </ul>
            </div>
          </main>
        </div>
        <footer>
          <button class="ghost-btn" data-close-push-preview type="button">取消</button>
          <button class="primary-btn" data-close-push-preview type="button">确认推送</button>
        </footer>
      </section>
    </div>
  `);
}

function renderPermissionModule(item) {
  const levelCounts = ["大区", "区域", "项目"].map((level) => [level, permissionRows.filter((row) => row.level === level).length]);
  const activeCount = permissionRows.filter((row) => row.status === "启用").length;
  const pushTypes = [...new Set(permissionRows.flatMap((row) => row.dataTypes))].length;
  $("#moduleDetail").innerHTML = `
    <div class="permission-page">
      <div class="detail-toolbar permission-toolbar">
        <button class="ghost-btn" data-view-jump="cockpit">← 返回驾驶舱</button>
        <div>
          <p class="eyebrow">数据推送中台 / 权限配置</p>
          <h2>${item.name}</h2>
        </div>
        <button class="ghost-btn" data-open-permission-rules type="button">查看推送规则</button>
        <button class="primary-btn" data-open-permission-modal type="button">新增权限</button>
      </div>

      <section class="permission-metrics">
        <article><span>授权人员</span><strong>${permissionRows.length}</strong><small>模拟清单</small></article>
        <article><span>启用权限</span><strong>${activeCount}</strong><small>停用 ${permissionRows.length - activeCount}</small></article>
        <article><span>组织层级</span><strong>3</strong><small>大区 / 区域 / 项目</small></article>
        <article><span>推送数据类型</span><strong>${pushTypes}</strong><small>按岗位差异化推送</small></article>
      </section>

      <section class="panel permission-filter-panel">
        <div>
          <h2>权限筛选</h2>
          <p class="muted">用于数据推送中台按组织层级、岗位和数据类型自动匹配推送范围。</p>
        </div>
        <div class="permission-filters">
          <label>组织层级<select><option>全部</option><option>大区</option><option>区域</option><option>项目</option></select></label>
          <label>岗位名称<select><option>全部</option><option>运营负责人</option><option>星级负责人</option><option>集约化负责人</option><option>工艺AI负责人</option><option>专业化公司负责人</option><option>工单负责人</option><option>成本负责人</option><option>运营风险负责人</option></select></label>
          <label>状态<select><option>全部</option><option>启用</option><option>停用</option></select></label>
        </div>
      </section>

      <section class="permission-layout single">
        <article class="panel permission-table-panel">
          <div class="panel-head">
            <h2>人员权限配置清单</h2>
            <span class="muted">参考东部大区权限清单生成</span>
          </div>
          <div class="permission-table">
            <div class="permission-head">
              <span>组织层级</span><span>单位名称</span><span>姓名</span><span>岗位名称</span><span>可推送数据类型</span><span>推送频率</span><span>状态</span><span>操作</span>
            </div>
            ${permissionRows.map((row) => `
              <div class="permission-row">
                <b>${row.level}</b>
                <strong>${row.unit}</strong>
                <span>${row.name}</span>
                <span>${row.role}</span>
                <div class="permission-tags">${row.dataTypes.map((type) => `<i>${type}</i>`).join("")}</div>
                <span>${row.frequency}</span>
                <em class="${row.status === "启用" ? "enabled" : "disabled"}">${row.status}</em>
                <button class="text-btn" type="button">编辑</button>
              </div>
            `).join("")}
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderPermissionRulesModal() {
  const levelCounts = ["大区", "区域", "项目"].map((level) => [level, permissionRows.filter((row) => row.level === level).length]);
  $("#permissionRuleModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="permissionRuleModal">
      <section class="permission-modal rule-modal">
        <header>
          <div>
            <h2>岗位推送规则</h2>
            <p class="muted">用于数据推送中台按组织层级、岗位职责和数据类型匹配推送对象。</p>
          </div>
          <button class="icon-close" data-close-permission-rules type="button">×</button>
        </header>
        <div class="rule-modal-body">
          <section>
            <h3>层级授权概览</h3>
            <div class="permission-levels">
              ${levelCounts.map(([level, count]) => `<div><span>${level}</span><b>${count}</b><i style="width:${Math.max(16, count / permissionRows.length * 100)}%"></i></div>`).join("")}
            </div>
          </section>
          <section>
            <h3>岗位推送规则</h3>
            <div class="permission-rule-list">
              <div><b>运营负责人</b><span>接收经营总览、风险通报、日报、月度整体情况。</span></div>
              <div><b>星级负责人</b><span>接收星级得分、整改任务、区域排名和逾期督办提醒。</span></div>
              <div><b>专项负责人</b><span>只接收本专题任务、异常、闭环提醒和相关资料补充要求。</span></div>
              <div><b>项目负责人</b><span>接收项目范围内的任务节点、逾期提醒、资料上传和完成反馈。</span></div>
            </div>
          </section>
        </div>
        <footer>
          <button class="primary-btn" data-close-permission-rules type="button">知道了</button>
        </footer>
      </section>
    </div>
  `);
}

function renderPermissionModal() {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="permissionModal">
      <section class="permission-modal">
        <header>
          <div>
            <h2>新增权限</h2>
            <p class="muted">配置人员可接收的数据推送类型和推送范围。</p>
          </div>
          <button class="icon-close" data-close-permission-modal type="button">×</button>
        </header>
        <div class="permission-form-grid">
          <label>组织层级<select><option>大区</option><option>区域</option><option>项目</option></select></label>
          <label>单位名称<input placeholder="如：枣庄区域公司 / 单县水厂" /></label>
          <label>姓名<input placeholder="填写人员姓名" /></label>
          <label>岗位名称<select><option>运营负责人</option><option>星级负责人</option><option>集约化负责人</option><option>工艺AI负责人</option><option>专业化公司负责人</option><option>工单负责人</option><option>成本负责人</option><option>运营风险负责人</option></select></label>
          <label>推送频率<select><option>实时预警</option><option>每日 09:00</option><option>每日 16:00</option><option>每周一 09:00</option></select></label>
          <label>状态<select><option>启用</option><option>停用</option></select></label>
        </div>
        <div class="permission-checks">
          <span>可推送数据类型</span>
          <label><input type="checkbox" checked /> 星级月报</label>
          <label><input type="checkbox" /> 整改任务</label>
          <label><input type="checkbox" /> 风险通报</label>
          <label><input type="checkbox" /> 工单闭环</label>
          <label><input type="checkbox" /> 经营数据</label>
          <label><input type="checkbox" /> AI建议</label>
        </div>
        <footer>
          <button class="ghost-btn" data-close-permission-modal type="button">取消</button>
          <button class="primary-btn" data-close-permission-modal type="button">保存配置</button>
        </footer>
      </section>
    </div>
  `);
}

function statusLabel(status) {
  if (status === "done") return "已完成";
  if (status === "doing") return "正在开展";
  if (status === "overdue") return "逾期";
  return status;
}

function projectMonthStatus(project, month) {
  const source = project.tasks || project.segments || [];
  const activeItems = source.filter((item) => month >= item.start && month <= item.end);
  if (!activeItems.length) return null;
  const done = activeItems.filter((item) => item.status === "done").length;
  const doing = activeItems.filter((item) => item.status === "doing").length;
  const overdue = activeItems.filter((item) => item.status === "overdue").length;
  if (overdue) return { status: "overdue", items: activeItems, done, doing, overdue };
  if (doing) return { status: "doing", items: activeItems, done, doing, overdue };
  return { status: "done", items: activeItems, done, doing, overdue };
}

function projectStats(project) {
  const activeMonths = new Set();
  let done = 0;
  let doing = 0;
  let overdue = 0;
  const source = project.tasks || project.segments || [];
  source.forEach((segment) => {
    for (let month = segment.start; month <= segment.end; month += 1) activeMonths.add(month);
    if (segment.status === "done") done += 1;
    if (segment.status === "doing") doing += 1;
    if (segment.status === "overdue") overdue += 1;
  });
  const completedMonths = source
    .filter((segment) => segment.status === "done")
    .reduce((sum, segment) => sum + segment.end - segment.start + 1, 0);
  const progress = Math.min(100, Math.round((completedMonths / Math.max(activeMonths.size, 1)) * 100));
  return { activeMonths: activeMonths.size, done, doing, overdue, progress };
}

function annualStarTaskTotals() {
  return annualStarProjects.reduce((acc, project) => {
    const stats = projectStats(project);
    const total = (project.tasks || []).length;
    acc.total += total;
    acc.done += stats.done;
    acc.doing += stats.doing;
    acc.overdueOpen += stats.overdue;
    return acc;
  }, { total: 0, doing: 0, done: 0, overdueOpen: 0 });
}

function annualTaskBoardCards(stats) {
  const cards = [
    { title: "任务总数", value: stats.total, note: "年度星级任务池", tone: "neutral" },
    { title: "进行中任务数", value: stats.doing, note: `占比 ${formatRatio(stats.doing / Math.max(stats.total, 1) * 100)}`, tone: "blue" },
    { title: "已完成任务数", value: stats.done, note: `占比 ${formatRatio(stats.done / Math.max(stats.total, 1) * 100)}`, tone: "green" },
    { title: "逾期未完成任务数", value: stats.overdueOpen, note: `占比 ${formatRatio(stats.overdueOpen / Math.max(stats.total, 1) * 100)}`, tone: "red" },
  ];
  return `
    <section class="panel star-task-board-entry" data-star-task-board-entry role="button" tabindex="0">
      <div class="panel-head">
        <div>
          <h2>任务看板区</h2>
          <span class="muted">点击进入区域整体情况或项目整体情况任务看板。</span>
        </div>
        <span class="badge info">进入任务看板 →</span>
      </div>
      <div class="annual-task-card-row">
        ${cards.map((card) => `
          <article class="metric-card star-task-status-card ${card.tone}">
            <span>${card.title}</span>
            <strong>${card.value}</strong>
            <small>${card.note}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function mockTaskBoardRows() {
  return regionRankingRows.map((row, index) => {
    const total = Math.max(8, Math.round(row.targetNoPay * 1.8 + row.quant.may * 0.9 + (index % 4)));
    const done = Math.min(total, Math.max(1, Math.round(total * clampNumber(row.accept.may / Math.max(row.quant.may, 1), 0.34, 0.88))));
    const overdueOpen = Math.max(0, Math.round((total - done) * clampNumber(0.16 + Math.max(0, row.targetPay - row.payback.may) / Math.max(row.targetPay, 1) * 0.28, 0.08, 0.45)));
    const overdueDone = Math.max(0, Math.round(done * clampNumber(0.04 + Math.max(0, row.payback.mom) * 0.01, 0.02, 0.15)));
    return {
      rank: index + 1,
      region: row.region,
      itemName: row.region,
      total,
      done,
      overdueDone,
      overdueOpen,
      doneRate: done / Math.max(total, 1) * 100,
      overdueOpenRate: overdueOpen / Math.max(total, 1) * 100,
    };
  });
}

function projectTaskBoardRows(regionName = "枣庄区域公司") {
  const projects = projectRegionCatalog[regionName] || [];
  return projects.map((project, index) => {
    const seed = projectHash(regionName, project);
    const total = 5 + (seed % 8) + Math.floor(index / 2);
    const done = Math.min(total, Math.max(1, Math.round(total * (0.42 + (seed % 35) / 100))));
    const overdueOpen = Math.max(0, Math.round((total - done) * (0.18 + (seed % 16) / 100)));
    const overdueDone = Math.max(0, Math.round(done * (0.04 + (seed % 10) / 100)));
    return {
      rank: index + 1,
      region: regionName,
      itemName: project,
      total,
      done,
      overdueDone,
      overdueOpen,
      doneRate: done / Math.max(total, 1) * 100,
      overdueOpenRate: overdueOpen / Math.max(total, 1) * 100,
    };
  });
}

function taskBoardCell(row, key, mode) {
  if (mode === "rate") {
    const rateMap = {
      total: "100%",
      done: formatRatio(row.doneRate),
      overdueDone: formatRatio(row.overdueDone / Math.max(row.total, 1) * 100),
      overdueOpen: formatRatio(row.overdueOpenRate),
    };
    return rateMap[key];
  }
  return row[key];
}

function taskBoardTone(row) {
  if (row.overdueOpenRate >= 22) return "risk";
  if (row.doneRate >= 70 && row.overdueOpenRate <= 10) return "good";
  return "warn";
}

function renderTaskBoardTable(rows, view, mode) {
  return `
    <div class="star-task-board-table">
      <div class="task-board-head">
        <span>通报</span>
        <span>${view === "project" ? "项目" : "区域"}</span>
        <span>任务总数</span>
        <span>已完成任务数</span>
        <span>逾期完成任务数</span>
        <span>逾期未完成任务数</span>
      </div>
      ${rows.map((row, index) => `
        <div class="task-board-row ${taskBoardTone(row)}">
          <b>${index + 1}</b>
          <strong>${row.itemName}</strong>
          <span>${taskBoardCell(row, "total", mode)}</span>
          <span>${taskBoardCell(row, "done", mode)}</span>
          <span>${taskBoardCell(row, "overdueDone", mode)}</span>
          <span>${taskBoardCell(row, "overdueOpen", mode)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function starTaskBoardMarkup(view = "region", mode = "count", rank = "doneRate", regionName = "枣庄区域公司") {
  const isProject = view === "project";
  const rawRows = isProject ? projectTaskBoardRows(regionName) : mockTaskBoardRows();
  const rows = [...rawRows].sort((a, b) => rank === "overdueOpenRate" ? b.overdueOpenRate - a.overdueOpenRate : b.doneRate - a.doneRate);
  return `
    <section class="panel star-task-board-page">
      <div class="metric-drill-head">
        <button class="ghost-btn" data-star-view="gantt" type="button">← 返回年度任务</button>
        <div>
          <h2>年度任务看板</h2>
          <p class="muted">${isProject ? "按区域筛选后查看项目任务结构。" : "20个区域年度任务闭环排名与逾期结构。"}</p>
        </div>
        <span class="badge info">任务看板</span>
      </div>
      <div class="task-board-toolbar">
        <div class="star-report-actions compact">
          <button class="star-report-btn ${!isProject ? "active" : ""}" data-star-task-board-view="region" type="button">区域整体情况</button>
          <button class="star-report-btn ${isProject ? "active" : ""}" data-star-task-board-view="project" type="button">项目整体情况</button>
        </div>
        <div class="task-board-filters">
          ${isProject ? `
            <label>筛选区域
              <select id="starTaskBoardRegionSelect">
                ${Object.keys(projectRegionCatalog).map((region) => `<option value="${region}" ${region === regionName ? "selected" : ""}>${region}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          <label>展示口径
            <select id="starTaskBoardMode">
              <option value="count" ${mode === "count" ? "selected" : ""}>数量</option>
              <option value="rate" ${mode === "rate" ? "selected" : ""}>比例</option>
            </select>
          </label>
          <label>排名依据
            <select id="starTaskBoardRank">
              <option value="doneRate" ${rank === "doneRate" ? "selected" : ""}>按已完成比例</option>
              <option value="overdueOpenRate" ${rank === "overdueOpenRate" ? "selected" : ""}>按逾期未完成比例</option>
            </select>
          </label>
        </div>
      </div>
      ${renderTaskBoardTable(rows, view, mode)}
    </section>
  `;
}

function starGanttPanelMarkup() {
  const allStats = annualStarTaskTotals();
  return `
    <section class="panel star-task-interaction">
      <div class="panel-head">
        <div>
          <h2>任务交互</h2>
          <span class="muted">围绕任务填报、进度更新和任务审核形成闭环入口。</span>
        </div>
      </div>
      <div class="star-task-interaction-grid">
        <button data-star-task-interaction="fill" type="button"><span>任务填报</span><strong>填报入口</strong><small>项目发起整改任务</small></button>
        <button data-star-task-interaction="progress" type="button"><span>任务进度更新</span><strong>进度入口</strong><small>按节点更新完成情况</small></button>
        <button data-star-task-interaction="audit" type="button"><span>任务审核</span><strong>审核入口</strong><small>区域与大区审核闭环</small></button>
      </div>
    </section>
    ${annualTaskBoardCards(allStats)}
    <section class="panel star-gantt-panel">
      <div class="panel-head">
        <h2>年度星级任务进度看板</h2>
        <div class="legend">
          <span><i class="legend-done"></i>已完成</span>
          <span><i class="legend-doing"></i>正在进行中</span>
          <span><i class="legend-overdue"></i>逾期</span>
        </div>
      </div>
      <div class="year-board">
        <div class="board-header">
          <div class="project-head">项目</div>
          ${Array.from({ length: 12 }, (_, index) => `<div>${index + 1}月</div>`).join("")}
        </div>
        ${annualStarProjects.map((project) => `
          <div class="board-row">
            <button class="project-name project-name-button" data-project-overview="${project.id}" type="button">
              <strong>${project.name}</strong>
              <span>${project.owner}</span>
            </button>
            ${Array.from({ length: 12 }, (_, index) => {
              const month = index + 1;
              const monthStatus = projectMonthStatus(project, month);
              const status = monthStatus?.status || "idle";
              const count = monthStatus?.items.length || 0;
              return `
                <button class="month-status ${status}" data-project="${project.id}" data-month="${month}" type="button">
                  <b>${count || ""}</b>
                  ${monthStatus ? `
                    <span class="month-status-tooltip">
                      <strong>${project.name} · ${month}月任务情况</strong>
                      <em>任务总数 ${count} 个 · 完成 ${monthStatus.done} 个 · 进行中 ${monthStatus.doing} 个 · 逾期 ${monthStatus.overdue} 个</em>
                      <small>${monthStatus.items.map((item) => `${item.item}：${item.title}（${statusLabel(item.status)}）`).join("；")}</small>
                    </span>
                  ` : ""}
                </button>
              `;
            }).join("")}
          </div>
        `).join("")}
      </div>
    </section>
    <section class="panel month-drilldown" id="monthDrilldown">
      <div class="empty-drill">点击年度甘特图中的任一进度条，进入该项目整体进度页。</div>
    </section>
  `;
}

function starTaskMetricAnalysisMarkup(metricId) {
  const metric = getStarTaskMetric(metricId);
  const maxValue = Math.max(...metric.values);
  const maxRatio = Math.max(...metric.ratios, 1);
  const current = metric.values[metric.values.length - 1];
  const previous = metric.values[metric.values.length - 2];
  const currentRatio = metric.ratios[metric.ratios.length - 1];
  const previousRatio = metric.ratios[metric.ratios.length - 2];
  const delta = current - previous;
  const ratioDelta = Number((currentRatio - previousRatio).toFixed(1));
  const linePoints = metric.ratios.map((value, index) => ({
    left: metric.ratios.length === 1 ? 0 : (index / (metric.ratios.length - 1)) * 100,
    bottom: (value / maxRatio) * 82 + 8,
    value,
  }));
  return `
    <section class="panel star-task-metric-panel">
      <div class="metric-drill-head">
        <button class="ghost-btn" data-star-view="area" type="button">← 返回大区整体情况</button>
        <div>
          <h2>${metric.title}月度变化</h2>
          <p class="muted">当前展示 1月到5月的任务数量与占比变化，5月为当前底稿口径。</p>
        </div>
        <span class="badge info">任务指标</span>
      </div>
      <div class="task-trend-summary">
        <article class="metric-hero-card">
          <span>5月当前值</span>
          <strong>${current}<em>${metric.unit}</em></strong>
          <p>${metric.note}</p>
          <div class="metric-delta-row"><b>${delta >= 0 ? "+" : ""}${delta} 较4月</b><b>全年趋势追踪</b></div>
        </article>
        <article class="metric-analysis-card">
          <h3>结构判断</h3>
          <p>${metricId === "taskOverdueOpen" ? "逾期未完成占比仍处于高位，需要在项目通报中锁定责任人和预计完成节点。" : metricId === "taskDone" ? "完成数量和完成占比同步提升，说明任务池闭环速度正在追上新增任务节奏。" : "建议同时查看数量和占比，判断是任务池整体扩大，还是某类状态在结构中占比异常。"}</p>
          <div class="metric-focus-list"><span>${metric.ratioLabel}</span><span>${formatRatio(currentRatio)}</span><span>${ratioDelta >= 0 ? "+" : ""}${ratioDelta}pct 较4月</span></div>
        </article>
      </div>
      <div class="task-trend-grid">
        <article class="task-trend-card">
          <div class="panel-head"><h3>任务数量变化</h3><span class="muted">1月-5月</span></div>
          <div class="metric-bar-chart star-task-month-chart">
            ${metric.values.map((value, index) => `
              <div class="metric-bar-item">
                <b>${value}</b>
                <i class="${metric.tone}" style="height:${Math.max(16, (value / maxValue) * 100)}%"></i>
                <span>${starTaskMonths[index]}</span>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="task-trend-card">
          <div class="panel-head"><h3>${metric.ratioLabel}</h3><span class="muted">结构占比</span></div>
          <div class="task-ratio-chart">
            <div class="task-ratio-line">
              ${linePoints.map((point, index) => `
                <i style="left:${point.left}%; bottom:${point.bottom}%">
                  <b>${formatRatio(point.value)}</b>
                  <em>${starTaskMonths[index]}</em>
                </i>
              `).join("")}
              ${linePoints.slice(1).map((point, index) => {
                const prev = linePoints[index];
                const width = point.left - prev.left;
                const height = point.bottom - prev.bottom;
                const angle = Math.atan2(height, width) * 180 / Math.PI;
                const length = Math.sqrt(width * width + height * height);
                return `<span style="left:${prev.left}%; bottom:${prev.bottom}%; width:${length}%; transform:rotate(${angle}deg)"></span>`;
              }).join("")}
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderAreaBulletin(sortMode = "ytd") {
  const sortLabel = sortMode === "mom" ? "环比排名" : "较12月排名";
  const primaryLabel = sortMode === "mom" ? "环比变化" : "较12月变化";
  const secondaryLabel = sortMode === "mom" ? "较12月变化" : "环比变化";
  const rankedRows = [...areaBulletinRows].sort((a, b) => {
    const primary = sortMode === "mom" ? a.mom - b.mom : a.ytd - b.ytd;
    const secondary = sortMode === "mom" ? a.ytd - b.ytd : a.mom - b.mom;
    return primary || secondary || a.may - b.may;
  });
  const riskRows = rankedRows.filter((row) => row.ytd < 0 || row.mom < 0);
  const improvedRows = rankedRows.filter((row) => row.ytd > 0 && row.mom >= 0);
  return `
    <section class="area-bulletin-grid">
      <article class="panel area-bulletin-main">
        <div class="bulletin-toolbar">
          <div>
            <h2>20个区域通报排名情况</h2>
            <span class="muted">当前口径：${sortLabel}。负向变化优先通报，支持按环比或较12月切换。</span>
          </div>
          <div class="bulletin-filter-card">
            <span>排名筛选</span>
            <div>
              <button class="${sortMode === "mom" ? "active" : ""}" data-bulletin-sort="mom" type="button">环比排名</button>
              <button class="${sortMode === "ytd" ? "active" : ""}" data-bulletin-sort="ytd" type="button">较12月排名</button>
            </div>
          </div>
        </div>
        <div class="bulletin-table">
          <div class="bulletin-head">
            <span>通报排名</span>
            <span>区域公司</span>
            <span>BP小组</span>
            <span>5月</span>
            <span>4月</span>
            <span>12月</span>
            <span>环比变化</span>
            <span>较12月变化</span>
          </div>
          ${rankedRows.map((row, index) => `
            <div class="bulletin-row ${row.ytd < 0 || row.mom < 0 ? "risk" : "stable"}">
              <b>${index + 1}</b>
              <strong>${row.region}</strong>
              <span>${row.bp}</span>
              <span>${row.may}</span>
              <span>${row.apr}</span>
              <span>${row.dec}</span>
              <em class="${row.mom >= 0 ? "positive" : "negative"}">${formatSigned(row.mom)}</em>
              <em class="${row.ytd >= 0 ? "positive" : "negative"}">${formatSigned(row.ytd)}</em>
            </div>
          `).join("")}
        </div>
      </article>
      <aside class="panel area-bulletin-side">
        <h2>通报摘要</h2>
        <div class="area-bulletin-total">
          <strong>${riskRows.length}</strong>
          <span>需通报关注区域</span>
        </div>
        <div class="analysis-list">
          <div><span>较12月下降</span><b>${areaBulletinRows.filter((row) => row.ytd < 0).length}</b></div>
          <div><span>环比下降</span><b>${areaBulletinRows.filter((row) => row.mom < 0).length}</b></div>
          <div><span>双维度下降</span><b>${areaBulletinRows.filter((row) => row.ytd < 0 && row.mom < 0).length}</b></div>
          <div><span>正向提升</span><b>${improvedRows.length}</b></div>
        </div>
        <div class="bulletin-focus">
          <h3>重点通报</h3>
          ${rankedRows.slice(0, 5).map((row, index) => `
            <div>
              <b>${index + 1}</b>
              <span>${row.region}</span>
              <em>${primaryLabel} ${formatSigned(sortMode === "mom" ? row.mom : row.ytd)} / ${secondaryLabel} ${formatSigned(sortMode === "mom" ? row.ytd : row.mom)}</em>
            </div>
          `).join("")}
        </div>
      </aside>
    </section>
  `;
}

function starAreaReportMarkup(activeReport = "", selectedRegion = "") {
  const reportBody = activeReport === "region"
    ? `<div id="areaBulletinContent">${renderAreaBulletin("ytd")}</div>`
    : activeReport === "project"
      ? supervisionProgressMarkup(selectedRegion, false)
      : `<section class="panel star-report-empty"><strong>请选择通报类型</strong><span>点击“区域通报”查看20个区域排名，点击“项目通报”查看需整改项目清单。</span></section>`;
  return `
    <section class="star-report-shell">
      <div class="star-report-actions">
        <button class="star-report-btn ${activeReport === "region" ? "active" : ""}" data-star-report="region" type="button">区域通报</button>
        <button class="star-report-btn ${activeReport === "project" ? "active" : ""}" data-star-report="project" type="button">项目通报</button>
      </div>
      <div id="starReportContent">${reportBody}</div>
    </section>
  `;
}

function starAreaViewMarkup() {
  return starAreaReportMarkup();
}

function renderStarMetricCards() {
  return starAreaMetrics.map((metric) => `
    <article class="metric-card metric-link" data-star-area-metric="${metric.id}" role="button" tabindex="0">
      <span>${metric.title}</span>
      <strong>${metric.value}</strong>
      <small>${metric.cardNote || metric.note}</small>
    </article>
  `).join("");
}

function starMetricAnalysisMarkup(metricId) {
  const metric = starAreaMetrics.find((item) => item.id === metricId) || starAreaMetrics[0];
  const last = metric.series[metric.series.length - 1];
  const previous = metric.series[metric.series.length - 2];
  const lastYear = metric.series[0];
  const maxValue = Math.max(...metric.series.map((item) => item[1]));
  const deltaMonth = Number((last[1] - previous[1]).toFixed(1));
  const deltaYear = Number((last[1] - lastYear[1]).toFixed(1));
  const trendText = deltaMonth >= 0 ? `较4月 +${deltaMonth}` : `较4月 ${deltaMonth}`;
  const yearText = deltaYear >= 0 ? `较去年12月 +${deltaYear}` : `较去年12月 ${deltaYear}`;
  return `
    <section class="panel metric-drill-panel">
      <div class="metric-drill-head">
        <button class="ghost-btn" data-star-view="area" type="button">← 返回大区整体情况</button>
        <div>
          <h2>${metric.title}分析</h2>
          <p class="muted">当前展示 5月数据，并对 1-5月及去年12月进行趋势对比。</p>
        </div>
        <span class="badge info">大区整体</span>
      </div>
      <div class="metric-drill-layout">
        <article class="metric-hero-card">
          <span>5月当前值</span>
          <strong>${metric.value}<em>${metric.unit}</em></strong>
          <p>${metric.note}</p>
          <div class="metric-delta-row">
            <b>${trendText}</b>
            <b>${yearText}</b>
          </div>
        </article>
        <article class="metric-analysis-card">
          <h3>关键判断</h3>
          <p>${metric.diagnosis}</p>
          <div class="metric-focus-list">
            ${metric.focus.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      </div>
      <div class="metric-drill-grid">
        <article class="panel metric-trend-card">
          <div class="panel-head">
            <h2>历史趋势</h2>
            <span class="muted">去年12月、1-5月</span>
          </div>
          <div class="metric-bar-chart">
            ${metric.series.map(([month, value]) => `
              <div class="metric-bar-item">
                <b>${value}</b>
                <i style="height:${Math.max(14, (value / maxValue) * 100)}%"></i>
                <span>${month}</span>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="panel metric-table-card">
          <div class="panel-head">
            <h2>数据明细</h2>
            <span class="muted">月度口径</span>
          </div>
          <div class="metric-data-table">
            ${metric.series.map(([month, value], index) => {
              const prevValue = index === 0 ? null : metric.series[index - 1][1];
              const change = prevValue === null ? "基准" : `${value - prevValue >= 0 ? "+" : ""}${Number((value - prevValue).toFixed(1))}`;
              return `<div><span>${month}</span><b>${value}</b><em>${change}</em></div>`;
            }).join("")}
          </div>
        </article>
        <article class="panel metric-action-card">
          <div class="panel-head">
            <h2>后续动作</h2>
            <span class="muted">建议项</span>
          </div>
          <div class="metric-action-list">
            ${metric.actions.map((item, index) => `<div><b>0${index + 1}</b><span>${item}</span></div>`).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

const starTaskInteractionTabs = [
  { id: "fill", title: "任务填报", desc: "发起整改任务，填写基础信息、资源需求与附件。", accent: "cyan" },
  { id: "progress", title: "任务进度更新", desc: "更新任务进度、本周反馈、风险问题和过程资料。", accent: "green" },
  { id: "audit", title: "任务审核", desc: "审核提报内容，确认进度，处理退回与转交复核。", accent: "orange" },
];

const starTaskWorkflowRows = [
  { id: "st-001", name: "单县水厂星级整改", type: "星级整改任务", region: "鲁西区域", project: "单县水厂", applicant: "马超", owner: "区域负责人", executor: "项目执行人", status: "进行中", auditStatus: "待审核", phase: "整改推进", due: "2026-06-30", submitTime: "2026-06-18 09:42", progress: 42, weekDone: 3, issues: 2, risks: 1, priority: "重点", summary: "验收+量化星级较目标仍有差距，需补齐现场整改、资料证据和区域复核记录。" },
  { id: "st-002", name: "曲阜嘉诚资料补齐", type: "资料归档任务", region: "济宁区域", project: "曲阜嘉诚", applicant: "刘洋", owner: "资料专员", executor: "项目执行人", status: "进行中", auditStatus: "已退回", phase: "资料补齐", due: "2026-06-24", submitTime: "2026-06-17 16:30", progress: 55, weekDone: 2, issues: 3, risks: 1, priority: "紧急", summary: "星级资料缺少关键过程证据，需补齐台账、照片和复核说明。" },
  { id: "st-003", name: "东营城北现场复核", type: "验收补充任务", region: "东营滨州区域", project: "东营城北", applicant: "周明", owner: "运营负责人", executor: "现场负责人", status: "需协调", auditStatus: "待审核", phase: "区域复核", due: "2026-06-28", submitTime: "2026-06-16 14:20", progress: 68, weekDone: 4, issues: 1, risks: 1, priority: "重点", summary: "现场复核照片和设备维护记录需重新确认，区域需补充审核意见。" },
  { id: "st-004", name: "青岛高新区回款说明", type: "回款说明任务", region: "青岛区域", project: "青岛高新区", applicant: "赵敏", owner: "经营负责人", executor: "回款负责人", status: "进行中", auditStatus: "待审核", phase: "销项归档", due: "2026-06-26", submitTime: "2026-06-15 11:05", progress: 76, weekDone: 5, issues: 1, risks: 0, priority: "普通", summary: "回款口径影响星级折算，需补充回款进度说明和预计完成时间。" },
  { id: "st-005", name: "湖州光正月度归档", type: "资料归档任务", region: "杭湖区域", project: "湖州光正", applicant: "陈敏", owner: "资料专员", executor: "区域负责人", status: "已完成", auditStatus: "已通过", phase: "销项归档", due: "2026-06-20", submitTime: "2026-06-14 10:15", progress: 100, weekDone: 6, issues: 0, risks: 0, priority: "普通", summary: "资料已完成归档，区域审核通过后进入年度任务池。" },
  { id: "st-006", name: "玄武水厂星级复核", type: "星级整改任务", region: "鲁西区域", project: "玄武水厂", applicant: "李磊", owner: "区域负责人", executor: "项目执行人", status: "逾期", auditStatus: "已退回", phase: "整改推进", due: "2026-06-12", submitTime: "2026-06-12 17:50", progress: 35, weekDone: 1, issues: 4, risks: 2, priority: "紧急", summary: "整改进度滞后，需补充责任拆解、现场证据和延期原因。" },
];

function starTaskInteractionNav(activeType) {
  return `
    <div class="star-task-workflow-cards">
      ${starTaskInteractionTabs.map((tab) => `
        <button class="${tab.id === activeType ? "active" : ""} ${tab.accent}" data-star-task-interaction="${tab.id}" type="button">
          <i>${tab.id === "fill" ? "□" : tab.id === "progress" ? "↻" : "✓"}</i>
          <span>${tab.title}</span>
          <small>${tab.desc}</small>
        </button>
      `).join("")}
    </div>
  `;
}

function starTaskRegions() {
  return [...new Set(starTaskWorkflowRows.map((row) => row.region))];
}

function starTaskProjects(region = "全部区域") {
  const rows = region === "全部区域" ? starTaskWorkflowRows : starTaskWorkflowRows.filter((row) => row.region === region);
  return [...new Set(rows.map((row) => row.project))];
}

function starTaskOwners() {
  return [...new Set(starTaskWorkflowRows.map((row) => row.owner))];
}

function selectedAttr(value, selected) {
  return value === selected ? "selected" : "";
}

function starTaskFilterValues(scope = "progress") {
  const prefix = scope === "audit" ? "audit" : "progress";
  return {
    keyword: $(`#star-${prefix}-task-name`)?.value.trim() || "",
    region: $(`#star-${prefix}-region`)?.value || "全部区域",
    project: $(`#star-${prefix}-project`)?.value || "全部项目",
    owner: $(`#star-${prefix}-owner`)?.value || "全部负责人",
  };
}

function filterStarTaskRows(filters = {}) {
  const keyword = (filters.keyword || "").trim();
  return starTaskWorkflowRows.filter((row) => {
    const matchKeyword = !keyword || row.name.includes(keyword) || row.project.includes(keyword);
    const matchRegion = !filters.region || filters.region === "全部区域" || row.region === filters.region;
    const matchProject = !filters.project || filters.project === "全部项目" || row.project === filters.project;
    const matchOwner = !filters.owner || filters.owner === "全部负责人" || row.owner === filters.owner;
    return matchKeyword && matchRegion && matchProject && matchOwner;
  });
}

function renderStarTaskProjectOptions(region = "全部区域", selectedProject = "全部项目") {
  const projects = starTaskProjects(region);
  return `<option ${selectedAttr("全部项目", selectedProject)}>全部项目</option>${projects.map((project) => `<option ${selectedAttr(project, selectedProject)}>${project}</option>`).join("")}`;
}

function starTaskFilterPanelMarkup(scope = "progress", filters = {}) {
  const prefix = scope === "audit" ? "audit" : "progress";
  const selectedRegion = filters.region || "全部区域";
  const selectedProject = filters.project || "全部项目";
  return `
    <section class="task-form-section star-task-filter-panel">
      <div class="section-title">
        <b>任务筛选</b>
        <span>输入任务名称或选择区域、项目、负责人后，下方任务自动刷新</span>
      </div>
      <div class="task-form-grid four-filter">
        <label class="task-field">
          <span>任务名称</span>
          <input id="star-${prefix}-task-name" data-star-task-filter="${scope}" value="${filters.keyword || ""}" placeholder="可输入任务名称筛选" />
        </label>
        <label class="task-field">
          <span>区域</span>
          <select id="star-${prefix}-region" data-star-task-filter="${scope}">
            <option ${selectedAttr("全部区域", selectedRegion)}>全部区域</option>
            ${starTaskRegions().map((region) => `<option ${selectedAttr(region, selectedRegion)}>${region}</option>`).join("")}
          </select>
        </label>
        <label class="task-field">
          <span>项目</span>
          <select id="star-${prefix}-project" data-star-task-filter="${scope}">
            ${renderStarTaskProjectOptions(selectedRegion, selectedProject)}
          </select>
        </label>
        <label class="task-field">
          <span>负责人</span>
          <select id="star-${prefix}-owner" data-star-task-filter="${scope}">
            <option ${selectedAttr("全部负责人", filters.owner || "全部负责人")}>全部负责人</option>
            ${starTaskOwners().map((owner) => `<option ${selectedAttr(owner, filters.owner)}>${owner}</option>`).join("")}
          </select>
        </label>
      </div>
    </section>
  `;
}

function starProgressTaskListMarkup(rows, activeId) {
  return `
    <section class="panel star-progress-task-list">
      <div class="panel-head">
        <h2>筛选结果</h2>
        <span class="muted">${rows.length} 项任务</span>
      </div>
      <div class="star-progress-task-items">
        ${rows.map((row) => `
          <button class="${row.id === activeId ? "active" : ""}" data-star-progress-task="${row.id}" type="button">
            <span><b>${row.name}</b><small>${row.region} · ${row.project}</small></span>
            <em>${row.status}</em>
            <strong>${row.progress}%</strong>
          </button>
        `).join("") || `<div class="empty-state">暂无匹配任务</div>`}
      </div>
    </section>
  `;
}

function starProgressDynamicMarkup(filters = {}, activeId = "") {
  const rows = filterStarTaskRows(filters);
  const activeTask = rows.find((row) => row.id === activeId) || rows[0] || starTaskWorkflowRows[0];
  return `
    ${starProgressTaskListMarkup(rows, activeTask?.id)}
    <section class="panel star-progress-hero">
      <div>
        <span class="badge info">${activeTask.status}</span>
        <h2>${activeTask.name}</h2>
        <p class="muted">${activeTask.region} · ${activeTask.project} · 当前阶段：${activeTask.phase}；计划 ${activeTask.due} 完成。</p>
      </div>
      <div class="progress-ring-mini"><strong>${activeTask.progress}%</strong><span>整体进度</span></div>
    </section>
    <section class="star-progress-cards">
      <article><span>本周完成</span><strong>${activeTask.weekDone}</strong><small>任务事项</small></article>
      <article><span>待处理问题</span><strong>${activeTask.issues}</strong><small>需协调</small></article>
      <article><span>风险预警</span><strong>${activeTask.risks}</strong><small>${activeTask.risks ? "中风险" : "暂无风险"}</small></article>
    </section>
    <section class="task-form-section">
      <div class="section-title">
        <b>本次进度更新</b>
        <span>更新任务进展、问题、下周计划和附件</span>
      </div>
      <div class="task-form-grid three-cols">
        <label class="task-field"><span>更新日期 <em>*</em></span><input type="date" value="2026-06-15" /></label>
        <label class="task-field"><span>当前阶段 <em>*</em></span><select><option selected>${activeTask.phase}</option><option>任务拆解</option><option>整改推进</option><option>区域复核</option><option>销项归档</option></select></label>
        <label class="task-field"><span>任务状态 <em>*</em></span><select><option selected>${activeTask.status}</option><option>进行中</option><option>已完成</option><option>逾期</option><option>需协调</option></select></label>
        <label class="task-field wide progress-slider-field">
          <span>当前进度 <em>*</em></span>
          <div class="progress-slider-box">
            <input data-star-progress-range type="range" min="0" max="100" value="${activeTask.progress}" />
            <input data-star-progress-value value="${activeTask.progress}%" />
          </div>
        </label>
        <label class="task-field wide"><span>本周完成情况 <em>*</em></span><textarea>${activeTask.summary}</textarea></label>
        <label class="task-field"><span>存在问题 / 风险</span><textarea>${activeTask.issues ? "部分材料或现场证据仍需补充，需区域协同确认。" : "暂无新增问题。"}</textarea></label>
        <label class="task-field"><span>下周计划</span><textarea>完成资料复核、区域确认和月度归档。</textarea></label>
      </div>
    </section>
    <section class="panel star-week-gantt">
      <div class="panel-head"><h2>子任务进度明细</h2><span class="muted">按周跟踪</span></div>
      <div class="star-week-table">
        <div><b>子任务</b><b>第1周</b><b>第2周</b><b>第3周</b><b>第4周</b><b>进度</b></div>
        ${["方案制定", "资料补齐", "现场复核", "销项归档"].map((name, index) => {
          const doneWeeks = Math.min(4, Math.ceil(activeTask.progress / 25));
          return `
            <div>
              <input value="${name}" />
              ${Array.from({ length: 4 }, (_, week) => {
                const cls = week < doneWeeks ? (activeTask.progress >= 100 ? "done" : "doing") : "idle";
                return `
                  <select class="${cls}">
                    <option ${cls === "idle" ? "selected" : ""}>未开始</option>
                    <option ${cls === "doing" ? "selected" : ""}>进行中</option>
                    <option ${cls === "done" ? "selected" : ""}>已完成</option>
                    <option>逾期</option>
                  </select>
                `;
              }).join("")}
              <input value="${Math.max(0, Math.min(100, activeTask.progress - index * 12))}%" />
            </div>
          `;
        }).join("")}
      </div>
    </section>
    <div class="star-task-footer">
      <button class="ghost-btn" type="button">保存更新</button>
      <button class="primary-btn" type="button">提交更新</button>
    </div>
  `;
}

function updateStarProgressWorkspace(activeId = "") {
  const filters = starTaskFilterValues("progress");
  const projectSelect = $("#star-progress-project");
  if (projectSelect) {
    const currentProject = starTaskProjects(filters.region).includes(filters.project) ? filters.project : "全部项目";
    projectSelect.innerHTML = renderStarTaskProjectOptions(filters.region, currentProject);
    filters.project = projectSelect.value;
  }
  const target = $("#starProgressDynamic");
  if (target) target.innerHTML = starProgressDynamicMarkup(filters, activeId);
}

function starTaskFillMarkup() {
  const regions = starTaskRegions();
  const selectedRegion = regions[0];
  const projects = starTaskProjects(selectedRegion);
  return `
    <div class="star-task-workspace-grid full-width">
      <div class="star-task-main-form">
        <section class="task-form-section">
          <div class="section-title">
            <b>基本信息</b>
            <span>任务进入年度池前的基础口径</span>
          </div>
          <div class="task-form-grid four-cols">
            <label class="task-field">
              <span>任务名称 <em>*</em></span>
              <input value="5月星级短板整改" maxlength="50" />
            </label>
            <label class="task-field">
              <span>任务类型 <em>*</em></span>
              <select><option>星级整改任务</option><option>验收补充任务</option><option>回款说明任务</option><option>资料归档任务</option></select>
            </label>
            <label class="task-field">
              <span>所属区域 <em>*</em></span>
              <select id="starFillRegionSelect">${regions.map((item) => `<option>${item}</option>`).join("")}</select>
            </label>
            <label class="task-field">
              <span>所属项目 <em>*</em></span>
              <select id="starFillProjectSelect">${projects.map((item) => `<option>${item}</option>`).join("")}</select>
            </label>
            <label class="task-field">
              <span>责任人 <em>*</em></span>
              <input value="区域负责人" />
            </label>
            <label class="task-field">
              <span>执行人 <em>*</em></span>
              <input value="项目执行人" />
            </label>
            <label class="task-field">
              <span>任务优先级 <em>*</em></span>
              <select><option>重点</option><option>紧急</option><option>普通</option></select>
            </label>
            <label class="task-field">
              <span>计划完成时间 <em>*</em></span>
              <input type="date" value="2026-06-30" />
            </label>
          </div>
        </section>

        <section class="task-form-section">
          <div class="section-title">
            <b>任务内容</b>
            <span>说明问题来源、整改动作和验收目标</span>
          </div>
          <div class="task-form-grid two-cols">
            <label class="task-field wide">
              <span>任务背景 <em>*</em></span>
              <textarea placeholder="描述触发任务的指标、项目短板、区域复核意见或大区通报要求。">验收+量化星级较目标仍有差距，需补齐资料、现场整改和复核说明。</textarea>
            </label>
            <label class="task-field">
              <span>整改措施 <em>*</em></span>
              <textarea placeholder="填写整改动作、证据要求和责任分工。">完成问题清单拆解，补充过程资料，按周反馈整改进度。</textarea>
            </label>
            <label class="task-field">
              <span>完成目标 <em>*</em></span>
              <textarea placeholder="填写任务完成后应达到的结果。">6月底前完成区域复核并纳入星级月度归档。</textarea>
            </label>
          </div>
        </section>

        <section class="task-form-section">
          <div class="section-title">
            <b>资源与任务</b>
            <span>需要跨部门协调时自动补充协助信息</span>
          </div>
          <div class="task-form-grid three-cols">
            <label class="task-field">
              <span>是否需要资源协调 <em>*</em></span>
              <select id="starResourceNeed">
                <option>否</option>
                <option>是</option>
              </select>
            </label>
            <label class="task-field">
              <span>预计开始时间 <em>*</em></span>
              <input type="date" value="2026-06-08" />
            </label>
            <label class="task-field">
              <span>任务节点 <em>*</em></span>
              <select><option>任务拆解</option><option>整改推进</option><option>区域复核</option><option>销项归档</option></select>
            </label>
          </div>
          <div class="resource-fields star-resource-fields" data-star-resource-fields>
            <label class="task-field wide">
              <span>资源需求 <em>*</em></span>
              <textarea rows="3" placeholder="请说明需要预算、设备、自控、工艺或其他资源协调的具体事项。"></textarea>
            </label>
            <label class="task-field">
              <span>协助人 <em>*</em></span>
              <input placeholder="请选择或填写协助人" />
            </label>
            <label class="task-field">
              <span>协助人角色 <em>*</em></span>
              <select>
                <option>预算管理人</option>
                <option>设备管理人</option>
                <option>自控管理人</option>
                <option>工艺管理人</option>
                <option>资源协调人</option>
              </select>
            </label>
          </div>
        </section>

        <section class="task-form-section compact">
          <div class="section-title">
            <b>附件与子任务</b>
            <span>过程证据、复核记录和周任务拆解</span>
          </div>
          <div class="star-upload-grid">
            <div><b>整改方案</b><span>PDF / Word / PPT</span></div>
            <div><b>现场照片</b><span>JPG / PNG</span></div>
            <div><b>数据底稿</b><span>Excel / CSV</span></div>
          </div>
          <div class="star-subtask-table">
            <div><span>子任务</span><span>负责人</span><span>计划节点</span><span>状态</span><span>操作</span></div>
            ${["问题拆解", "资料补齐", "现场复核", "销项归档"].map((name, index) => `
              <div>
                <input value="${name}" />
                <input value="${index % 2 ? "项目执行人" : "区域负责人"}" />
                <input value="6月${8 + index * 5}日" />
                <select><option ${index === 0 ? "selected" : ""}>已完成</option><option ${index !== 0 ? "selected" : ""}>待推进</option><option>进行中</option><option>逾期</option></select>
                <button class="text-btn" type="button">删除</button>
              </div>
            `).join("")}
          </div>
          <button class="task-add-row-btn" type="button">+ 新建子任务</button>
        </section>

        <div class="star-task-footer">
          <button class="ghost-btn" type="button">暂存</button>
          <button class="primary-btn" type="button">提交提报</button>
        </div>
      </div>
      ${starTaskGuidanceMarkup("fill")}
    </div>
  `;
}

function starTaskGuidanceMarkup(type) {
  const copy = {
    fill: ["提报说明", "提报信息将进入区域审核，审核通过后进入年度任务池；资料不完整或责任不清晰会被退回。"],
    progress: ["更新说明", "先通过区域、项目和负责人筛选到具体任务，再填报当前完成度、阶段反馈、问题风险和下周计划。"],
    audit: ["审核说明", "审核重点是信息完整性、时间合理性、风险说明、附件齐全和是否满足进入年度任务池条件。"],
  }[type] || ["任务说明", "围绕提报、更新、审核形成任务闭环。"];
  return `
    <section class="star-task-guidance">
      <article>
        <h3>${copy[0]}</h3>
        <p>${copy[1]}</p>
      </article>
      <article>
        <h3>流程节点</h3>
        <div class="star-step-list horizontal">
          <span><b>1</b>项目提报</span>
          <span><b>2</b>区域审核</span>
          <span><b>3</b>大区确认</span>
          <span><b>4</b>进入年度任务</span>
        </div>
      </article>
    </section>
  `;
}

function starTaskProgressMarkup() {
  const filters = { region: "全部区域", project: "全部项目", owner: "全部负责人", keyword: "" };
  return `
    <div class="star-progress-layout">
      ${starTaskFilterPanelMarkup("progress", filters)}
      <div id="starProgressDynamic">${starProgressDynamicMarkup(filters)}</div>
      ${starTaskGuidanceMarkup("progress")}
    </div>
  `;
}

function starTaskAuditMarkup(status = "全部", selectedId = "") {
  const auditRows = status === "全部" ? starTaskWorkflowRows : starTaskWorkflowRows.filter((row) => row.auditStatus === status);
  const activeTask = auditRows.find((row) => row.id === selectedId) || auditRows[0] || starTaskWorkflowRows[0];
  const counts = {
    "全部": starTaskWorkflowRows.length,
    "待审核": starTaskWorkflowRows.filter((row) => row.auditStatus === "待审核").length,
    "已退回": starTaskWorkflowRows.filter((row) => row.auditStatus === "已退回").length,
    "已通过": starTaskWorkflowRows.filter((row) => row.auditStatus === "已通过").length,
  };
  const checks = [
    ["信息完整性", activeTask.progress > 35 ? "符合" : "待补充"],
    ["时间合理性", activeTask.auditStatus === "已退回" ? "待确认" : "符合"],
    ["责任清晰度", "符合"],
    ["风险说明", activeTask.risks ? "待检查" : "符合"],
    ["附件齐全", activeTask.auditStatus === "已退回" ? "待检查" : "符合"],
  ];
  return `
    <div class="star-audit-layout">
      <section class="star-audit-list panel">
        <div class="panel-head">
          <h2>待审核任务</h2>
          <span class="muted">按提交时间排序</span>
        </div>
        <div class="star-audit-tabs">
          ${Object.entries(counts).map(([label, count]) => `<button class="${status === label ? "active" : ""}" data-star-audit-status="${label}" type="button">${label} ${count}</button>`).join("")}
        </div>
        <div class="star-audit-items">
          ${auditRows.map((row, index) => `
            <button class="${row.id === activeTask.id ? "active" : ""}" data-star-audit-task="${row.id}" data-star-audit-current-status="${status}" type="button">
              <strong>${row.name}</strong>
              <span>${row.applicant} · ${row.region}</span>
              <em class="${row.auditStatus === "已退回" ? "danger" : row.auditStatus === "已通过" ? "ok" : ""}">${row.auditStatus}</em>
            </button>
          `).join("") || `<div class="empty-state">暂无对应状态任务</div>`}
        </div>
      </section>
      <section class="star-audit-detail panel">
        <div class="panel-head">
          <div>
            <h2>${activeTask.name}</h2>
            <span class="muted">提交时间：${activeTask.submitTime}</span>
          </div>
          <span class="badge ${activeTask.auditStatus === "已通过" ? "good" : activeTask.auditStatus === "已退回" ? "danger" : "warn"}">${activeTask.auditStatus}</span>
        </div>
        <div class="star-audit-info-grid">
          <div><span>申请人</span><b>${activeTask.applicant}</b></div>
          <div><span>所属区域</span><b>${activeTask.region}</b></div>
          <div><span>所属项目</span><b>${activeTask.project}</b></div>
          <div><span>当前阶段</span><b>${activeTask.phase}</b></div>
          <div><span>完成进度</span><b>${activeTask.progress}%</b></div>
          <div><span>责任人</span><b>${activeTask.owner}</b></div>
          <div><span>执行人</span><b>${activeTask.executor}</b></div>
          <div><span>计划完成</span><b>${activeTask.due}</b></div>
        </div>
        <article class="star-audit-summary">
          <h3>提报内容摘要</h3>
          <p>${activeTask.summary}</p>
        </article>
        <div class="star-audit-checks">
          ${checks.map(([item, result]) => `<div><span>${item}</span><b class="${result === "符合" ? "ok" : "warning"}">${result}</b></div>`).join("")}
        </div>
        <label class="task-field">
          <span>审核意见</span>
          <textarea placeholder="填写审核意见，退回时需说明需要补充的内容。"></textarea>
        </label>
        <div class="star-task-footer">
          <button class="danger-btn" type="button">退回修改</button>
          <button class="ghost-btn" type="button">转交复核</button>
          <button class="primary-btn" type="button">审核通过</button>
        </div>
      </section>
      ${starTaskGuidanceMarkup("audit")}
    </div>
  `;
}

function starTaskInteractionPageMarkup(type) {
  const activeType = starTaskInteractionTabs.some((tab) => tab.id === type) ? type : "fill";
  const activeTab = starTaskInteractionTabs.find((tab) => tab.id === activeType);
  const contentMap = {
    fill: starTaskFillMarkup,
    progress: starTaskProgressMarkup,
    audit: starTaskAuditMarkup,
  };
  return `
    <section class="panel star-task-interaction-page active-workspace">
      <div class="metric-drill-head">
        <button class="ghost-btn" data-star-view="gantt" type="button">← 返回年度任务</button>
        <div>
          <h2>${activeTab.title}</h2>
          <p class="muted">${activeTab.desc}</p>
        </div>
        <span class="badge info">任务交互</span>
      </div>
      ${starTaskInteractionNav(activeType)}
      <div id="starInteractionWorkspace">${contentMap[activeType]()}</div>
    </section>
  `;
}

function getRegionMetricValue(row, metric) {
  if (metric.mode === "target") return row[metric.key];
  if (metric.mode === "gap") return row[metric.key].may - row[metric.targetKey];
  if (metric.mode === "derived" || metric.mode === "task") return getRegionDerivedValue(row, metric.id, "may");
  if (metric.field) return row[metric.key][metric.field];
  return row[metric.key];
}

function formatSigned(value) {
  return value > 0 ? `+${value}` : `${value}`;
}

function clampNumber(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getRegionMonthlyBase(row) {
  const quantJan = Math.round(row.quant.dec + (row.quant.apr - row.quant.dec) * 0.25);
  const quantFeb = Math.round(row.quant.dec + (row.quant.apr - row.quant.dec) * 0.5);
  const quantMar = Math.round(row.quant.dec + (row.quant.apr - row.quant.dec) * 0.75);
  const acceptJan = Math.round(row.accept.dec + (row.accept.apr - row.accept.dec) * 0.25);
  const acceptFeb = Math.round(row.accept.dec + (row.accept.apr - row.accept.dec) * 0.5);
  const acceptMar = Math.round(row.accept.dec + (row.accept.apr - row.accept.dec) * 0.75);
  const payJan = Math.round(row.payback.dec + (row.payback.apr - row.payback.dec) * 0.25);
  const payFeb = Math.round(row.payback.dec + (row.payback.apr - row.payback.dec) * 0.5);
  const payMar = Math.round(row.payback.dec + (row.payback.apr - row.payback.dec) * 0.75);
  return [
    { month: "2025年12月", quant: row.quant.dec, accept: row.accept.dec, payback: row.payback.dec },
    { month: "1月", quant: quantJan, accept: acceptJan, payback: payJan },
    { month: "2月", quant: quantFeb, accept: acceptFeb, payback: payFeb },
    { month: "3月", quant: quantMar, accept: acceptMar, payback: payMar },
    { month: "4月", quant: row.quant.apr, accept: row.accept.apr, payback: row.payback.apr },
    { month: "5月", quant: row.quant.may, accept: row.accept.may, payback: row.payback.may },
  ];
}

function getRegionDerivedValue(row, metricId, monthKey = "may") {
  const sourceMap = {
    dec: { quant: row.quant.dec, accept: row.accept.dec, payback: row.payback.dec },
    apr: { quant: row.quant.apr, accept: row.accept.apr, payback: row.payback.apr },
    may: { quant: row.quant.may, accept: row.accept.may, payback: row.payback.may },
  };
  const source = sourceMap[monthKey] || sourceMap.may;
  const targetRate = source.accept / Math.max(row.targetNoPay, 1);
  const payRate = source.payback / Math.max(row.targetPay, 1);
  const quantGrowth = source.quant - row.quant.dec;
  const totalScore = Math.round(clampNumber(62 + targetRate * 18 + payRate * 14 + Math.max(0, quantGrowth) * 0.35, 60, 99));
  const operationScore = Math.round(clampNumber(78 + targetRate * 12 + Math.max(0, row.accept.ytd) * 0.8, 65, 99));
  const deviceScore = Math.round(clampNumber(76 + payRate * 12 + Math.max(0, row.payback.ytd) * 0.9, 65, 98));
  const dataScore = Math.round(clampNumber(82 + Math.min(10, Math.max(0, source.quant - source.accept)) * 0.7 + Math.max(0, row.quant.mom) * 0.35, 70, 99));
  const taskTotal = Math.max(6, Math.round(row.targetNoPay * 2.2 + source.quant * 1.15));
  const taskDone = Math.round(taskTotal * clampNumber(source.accept / Math.max(source.quant, 1), 0.2, 0.95));
  const taskOverdueOpen = Math.max(0, Math.round((taskTotal - taskDone) * clampNumber(0.12 + (row.targetPay - source.payback) / Math.max(row.targetPay, 1) * 0.3, 0.08, 0.42)));
  const taskOverdueDone = Math.max(0, Math.round(taskDone * clampNumber(0.04 + Math.max(0, row.accept.mom) * 0.008 + Math.max(0, row.payback.ytd) * 0.006, 0.03, 0.16)));
  const taskDoing = Math.max(0, taskTotal - taskDone - taskOverdueOpen);
  const valueMap = { totalScore, operationScore, deviceScore, dataScore, taskTotal, taskDoing, taskDone, taskOverdueDone, taskOverdueOpen, taskOverdue: taskOverdueOpen };
  return valueMap[metricId] ?? 0;
}

function getRegionRow(regionName = "枣庄区域公司") {
  return regionRankingRows.find((row) => row.region === regionName) || regionRankingRows[0];
}

function getRegionMetricCardValue(row, metric) {
  const value = getRegionMetricValue(row, metric);
  return metric.mode === "gap" || metric.mode === "change" ? formatSigned(value) : value;
}

function regionMetricTone(row, metric) {
  if (metric.mode !== "gap") return "";
  return getRegionMetricValue(row, metric) >= 0 ? "positive" : "negative";
}

function regionMetricPercent(row, metric) {
  if (metric.id === "taskTotal" || metric.mode !== "task") return "";
  const total = Math.max(getRegionDerivedValue(row, "taskTotal", "may"), 1);
  return `占比 ${formatRatio(getRegionDerivedValue(row, metric.id, "may") / total * 100)}`;
}

function regionMetricSeries(row, metric) {
  if (metric.mode === "target") {
    const target = row[metric.key];
    return {
      current: target,
      series: [
        ["2025年12月", target],
        ["1月", target],
        ["2月", target],
        ["3月", target],
        ["4月", target],
        ["5月", target],
      ],
      compare: null,
      subtitle: "目标值按当前底稿口径展示",
    };
  }
  if (metric.mode === "gap") {
    const source = row[metric.key];
    const jan = Math.round(source.dec + (source.apr - source.dec) * 0.25);
    const feb = Math.round(source.dec + (source.apr - source.dec) * 0.5);
    const mar = Math.round(source.dec + (source.apr - source.dec) * 0.75);
    const target = row[metric.targetKey];
    const values = [
      ["2025年12月", source.dec - target],
      ["1月", jan - target],
      ["2月", feb - target],
      ["3月", mar - target],
      ["4月", source.apr - target],
      ["5月", source.may - target],
    ];
    const current = values[values.length - 1][1];
    const apr = values[values.length - 2][1];
    return { current, series: values, compare: source, subtitle: `5月差距 ${formatSigned(current)}，较4月变化 ${formatSigned(current - apr)}` };
  }
  if (metric.mode === "derived" || metric.mode === "task") {
    const monthly = getRegionMonthlyBase(row);
    const values = monthly.map((item) => {
      const monthKey = item.month === "2025年12月" ? "dec" : item.month === "4月" ? "apr" : item.month === "5月" ? "may" : "may";
      if (item.month === "1月" || item.month === "2月" || item.month === "3月") {
        const fakeRow = {
          ...row,
          quant: { ...row.quant, may: item.quant },
          accept: { ...row.accept, may: item.accept },
          payback: { ...row.payback, may: item.payback },
        };
        return [item.month, getRegionDerivedValue(fakeRow, metric.id, "may")];
      }
      return [item.month, getRegionDerivedValue(row, metric.id, monthKey)];
    });
    const current = values[values.length - 1][1];
    const apr = values[values.length - 2][1];
    const dec = values[0][1];
    return { current, series: values, compare: null, subtitle: `5月较4月 ${formatSigned(current - apr)}，较去年12月 ${formatSigned(current - dec)}` };
  }
  const source = row[metric.key];
  const jan = Math.round(source.dec + (source.apr - source.dec) * 0.25);
  const feb = Math.round(source.dec + (source.apr - source.dec) * 0.5);
  const mar = Math.round(source.dec + (source.apr - source.dec) * 0.75);
  if (metric.mode === "change") {
    const values = [
      ["2025年12月", 0],
      ["1月", jan - source.dec],
      ["2月", feb - jan],
      ["3月", mar - feb],
      ["4月", source.apr - mar],
      ["5月", source.mom],
    ];
    return { current: source.mom, series: values, compare: source, subtitle: `5月较4月 ${formatSigned(source.mom)}，较去年12月 ${formatSigned(source.ytd)}` };
  }
  return {
    current: source.may,
    series: [
      ["2025年12月", source.dec],
      ["1月", jan],
      ["2月", feb],
      ["3月", mar],
      ["4月", source.apr],
      ["5月", source.may],
    ],
    compare: source,
    subtitle: `5月较4月 ${formatSigned(source.mom)}，较去年12月 ${formatSigned(source.ytd)}`,
  };
}

function renderRegionMetricCards(regionName = "枣庄区域公司", activeId = "quant") {
  const row = getRegionRow(regionName);
  const cardMarkup = (metric) => `
    <article class="metric-card metric-link region-metric-card ${metric.id === activeId ? "active" : ""} ${regionMetricTone(row, metric)}" data-region-metric="${metric.id}" role="button" tabindex="0">
      <span>${metric.title}</span>
      <strong>${getRegionMetricCardValue(row, metric)}</strong>
      <small>${regionMetricPercent(row, metric) || metric.note}</small>
      ${metric.mode === "task" && metric.id !== "taskTotal" ? `<div class="small-progress"><i style="width:${Math.min(100, getRegionDerivedValue(row, metric.id, "may") / Math.max(getRegionDerivedValue(row, "taskTotal", "may"), 1) * 100)}%"></i></div>` : ""}
    </article>
  `;
  const starMetrics = regionMetricConfig.filter((metric) => ["quant", "accept", "payback", "acceptTarget", "paybackTarget", "acceptGap", "paybackGap"].includes(metric.id));
  const qualityMetrics = regionMetricConfig.filter((metric) => ["totalScore", "operationScore", "deviceScore", "dataScore"].includes(metric.id));
  const taskMetrics = regionMetricConfig.filter((metric) => metric.mode === "task");
  return `
    <div class="region-metric-row star-counts">${starMetrics.map(cardMarkup).join("")}</div>
    <div class="region-metric-row quality-counts">${qualityMetrics.map(cardMarkup).join("")}</div>
    <div class="region-metric-row task-counts">${taskMetrics.map(cardMarkup).join("")}</div>
  `;
}

function regionMetricAnalysisMarkup(regionName = "枣庄区域公司", metricId = "quant") {
  const row = getRegionRow(regionName);
  const metric = regionMetricConfig.find((item) => item.id === metricId) || regionMetricConfig[0];
  const metricData = regionMetricSeries(row, metric);
  const values = metricData.series.map((item) => Math.abs(item[1]));
  const maxValue = Math.max(...values, 1);
  const rankingRows = [...regionRankingRows].sort((a, b) => getRegionMetricValue(b, metric) - getRegionMetricValue(a, metric));
  const rankIndex = rankingRows.findIndex((item) => item.region === row.region) + 1;
  const source = row[metric.key] && typeof row[metric.key] === "object" ? row[metric.key] : null;
  const firstValue = metricData.series[0][1];
  const ytdText = source ? formatSigned(source.ytd) : formatSigned(metricData.current - firstValue);
  const diagnosis = `AI根据当前区域底稿、月度趋势和排名情况判断：${row.region}${metric.title}5月值为 ${getRegionMetricCardValue(row, metric)}，在20个区域中排名第 ${rankIndex}，${metricData.subtitle}。建议结合目标差距、环比变化和较去年12月变化，判断该区域本月表现是否需要专项跟踪。`;
  return `
    <section class="panel metric-drill-panel region-drill-panel">
      <div class="metric-drill-head">
        <div>
          <h2>${row.region} · ${metric.title}分析</h2>
          <p class="muted">${row.bp} · 原表排名 ${row.rank} · 当前展示 2025年12月、1-5月变化趋势。</p>
        </div>
        <span class="badge info">区域维度</span>
      </div>
      <div class="metric-drill-layout">
        <article class="metric-hero-card">
          <span>5月当前值</span>
          <strong>${getRegionMetricCardValue(row, metric)}<em>${metric.unit || ""}</em></strong>
          <p>${metric.note}</p>
          <div class="metric-delta-row">
            <b>区域排名 第${rankIndex}</b>
            <b>${metricData.subtitle}</b>
          </div>
        </article>
        <article class="metric-analysis-card">
          <h3>AI智能分析</h3>
          <p>${diagnosis}</p>
          <div class="metric-focus-list">
            <span>目标不带回款 ${row.targetNoPay}</span>
            <span>目标带回款 ${row.targetPay}</span>
            <span>较去年12月 ${ytdText}</span>
          </div>
        </article>
      </div>
      <div class="metric-drill-grid">
        <article class="panel metric-trend-card">
          <div class="panel-head">
            <h2>月度变化趋势</h2>
            <span class="muted">1-3月为原型估算，4月/5月/12月来自底稿</span>
          </div>
          <div class="metric-bar-chart">
            ${metricData.series.map(([month, value]) => `
              <div class="metric-bar-item">
                <b>${value}</b>
                <i class="${value < 0 ? "negative" : ""}" style="height:${Math.max(14, (Math.abs(value) / maxValue) * 100)}%"></i>
                <span>${month}</span>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="panel metric-table-card">
          <div class="panel-head">
            <h2>数据明细</h2>
            <span class="muted">${row.region}</span>
          </div>
          <div class="metric-data-table">
            ${metricData.series.map(([month, value], index) => {
              const prevValue = index === 0 ? null : metricData.series[index - 1][1];
              const change = prevValue === null ? "基准" : formatSigned(Number((value - prevValue).toFixed(1)));
              return `<div><span>${month}</span><b>${value}</b><em>${change}</em></div>`;
            }).join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function regionViewMarkup() {
  const selectedRegion = "枣庄区域公司";
  return `
    <section class="panel region-filter-panel">
      <div class="panel-head">
        <div>
          <h2>区域整体情况</h2>
          <span class="muted">先选择区域，第一行展示星级与差距，第二行展示质量得分，第三行展示任务状态结构。</span>
        </div>
        <label class="region-select">选择区域
          <select id="regionSelect">
            ${regionRankingRows.map((row) => `<option value="${row.region}" ${row.region === selectedRegion ? "selected" : ""}>${row.region}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="region-metric-grid" id="regionMetricCards">
        ${renderRegionMetricCards(selectedRegion, "quant")}
      </div>
    </section>
    <div id="regionRankingContent">${regionMetricAnalysisMarkup(selectedRegion, "quant")}</div>
  `;
}

const projectRegionCatalog = {
  "太原区域公司": ["太原中北", "太原北控"],
  "晋临区域公司": ["临汾北控", "临汾润宇", "晋城清源", "霍州二污"],
  "杭湖区域公司": ["余杭污水四期", "南浔新城", "湖州光正", "南浔嘉诚"],
  "济宁区域公司": ["曲阜嘉诚", "曲阜昇丽", "曲阜高铁", "济宁鱼台"],
  "聊城区域公司": ["临清碧水", "冠县嘉诚", "茌平思源", "茌平绿源", "茌平开源"],
  "西安区域公司": ["华州北控", "武功嘉诚", "武功北控", "蒲城格瑞", "西咸中天", "西安阎良"],
  "青岛区域公司": ["日照圣公山", "日照两城", "五莲三污", "五莲二污", "日照市北", "日照岚山", "日照秀水", "胶南公司", "青岛高新区", "日照长冶河"],
  "东营滨州区域公司": ["东营北控", "利津环海", "湖滨嘉城", "兴福嘉诚", "惠民城北", "惠民胡集"],
  "临沂区域公司": ["临沂商谷", "临沂汤河", "临沂北城", "临沂嘉诚", "莒南嘉诚", "莒南卓澳"],
  "南阳区域公司": ["南阳市污水处理厂", "南阳张岗", "新野二污"],
  "台州区域公司": ["路桥中科成", "路桥滨海", "黄岩江口", "黄岩院桥"],
  "枣庄区域公司": ["薛城二污", "枣庄北控", "台儿庄北控", "滕州汇通", "枣庄陶庄"],
  "洛阳区域公司": ["伊川三污", "洛阳伊滨", "洛阳新区", "新安东区", "洛阳涧西", "洛阳瀍东"],
  "济南区域公司": ["夏津嘉诚", "宁津", "德州卓澳", "济南腊山", "遥墙中水", "济南公司", "济南巨野河"],
  "潍坊区域公司": ["潍坊坊安", "坊子污水", "潍坊黄旗堡"],
  "烟威区域公司": ["福山北控", "海阳北控", "烟台北控", "沽河北控", "胶州公司", "滨海北控"],
  "苏皖业务区": ["丹阳沃特", "仪征实康", "六合雄州", "南京荣泰", "安徽太和", "徐州创源", "枞阳亚同", "泰州亚同", "江苏汇同", "潜山亚同", "盱眙二污", "睢宁城东", "阜宁三期", "阜宁水处理"],
  "菏泽区域公司": ["巨野城北", "巨野城南", "泰安嘉诚", "菏泽", "菏泽青年湖", "鄄城"],
  "郑州业务区": ["兰考三污", "兰考二污", "巩义北控", "濮阳城东", "通许污水厂"],
  "北京建工环境": ["太仓开发区", "奉化莼湖", "宜兴和桥", "宜兴城市", "宜兴官林", "宜兴张渚", "宜兴徐舍", "宜兴新建", "徐州丁万河", "徐州不老河", "徐州新城区", "徐州西区", "徐州龙亭", "盐城城南", "盐城开发区", "昆山北区", "昆山吴淞江", "昆山张浦", "昆山花桥", "昆山陆家", "宜兴城市三期"],
};

const projectActualRows = [
  { region: "杭湖区域公司", project: "湖州光正", statusPay: 0.34, targetStar: 3, targetScore: 80, targetRun: 70, currentTotal: 85.24, prevTotal: 83.89, currentRun: 81.12, prevRun: 78.7, currentDevice: 87.55, prevDevice: 88.68, currentData: 100, prevData: 100, currentQuant: 4, prevQuant: 3, currentAccept: 3, prevAccept: 3, currentPay: 0, prevPay: 0, yearAccept: 3, yearPay: 3 },
  { region: "杭湖区域公司", project: "余杭污水四期", statusPay: 0, targetStar: 4, targetScore: 80, targetRun: 80, currentTotal: 91.74, prevTotal: 87.97, currentRun: 90.92, prevRun: 90.87, currentDevice: 88.22, prevDevice: 77.47, currentData: 100, prevData: 89.4, currentQuant: 4, prevQuant: 4, currentAccept: 4, prevAccept: 4, currentPay: 0, prevPay: 0, yearAccept: 3, yearPay: 3 },
  { region: "杭湖区域公司", project: "南浔新城", statusPay: 0.9, targetStar: 0, targetScore: 50, targetRun: 40, currentTotal: 63.73, prevTotal: 57.35, currentRun: 52.27, prevRun: 50.15, currentDevice: 81.25, prevDevice: 56.25, currentData: 90, prevData: 90, currentQuant: 1, prevQuant: 0, currentAccept: 0, prevAccept: 0, currentPay: 0, prevPay: 0, yearAccept: 0, yearPay: 0 },
  { region: "青岛区域公司", project: "青岛高新区", statusPay: 1, targetStar: 3, targetScore: 85, targetRun: 80, currentTotal: 73.63, prevTotal: 67.98, currentRun: 75.25, prevRun: 71.9, currentDevice: 61.11, prevDevice: 50, currentData: 83.3, prevData: 75, currentQuant: 3, prevQuant: 2, currentAccept: 3, prevAccept: 2, currentPay: 3, prevPay: 2, yearAccept: 3, yearPay: 3 },
  { region: "苏皖业务区", project: "南京荣泰", statusPay: 1, targetStar: 3, targetScore: 85, targetRun: 85, currentTotal: 87.21, prevTotal: 87.87, currentRun: 88.4, prevRun: 85.45, currentDevice: 85, prevDevice: 87.55, currentData: 85, prevData: 98.8, currentQuant: 4, prevQuant: 4, currentAccept: 3, prevAccept: 3, currentPay: 3, prevPay: 3, yearAccept: 3, yearPay: 3 },
  { region: "潍坊区域公司", project: "潍坊坊安", statusPay: 0.72, targetStar: 2, targetScore: 70, targetRun: 65, currentTotal: 65.29, prevTotal: 74.34, currentRun: 61.96, prevRun: 68.65, currentDevice: 59.82, prevDevice: 85, currentData: 87, prevData: 84.8, currentQuant: 2, prevQuant: 2, currentAccept: 2, prevAccept: 2, currentPay: 2, prevPay: 2, yearAccept: 2, yearPay: 2 },
];

function projectHash(region, project) {
  return [...`${region}-${project}`].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getProjectRecord(regionName = "杭湖区域公司", projectName = "湖州光正") {
  const actual = projectActualRows.find((row) => row.region === regionName && row.project === projectName);
  if (actual) return actual;
  const region = getRegionRow(regionName);
  const seed = projectHash(regionName, projectName);
  const currentQuant = Math.max(0, Math.min(4, Math.round(region.quant.may / Math.max(1, Math.round(region.targetNoPay / 3))) + (seed % 3) - 1));
  const prevQuant = Math.max(0, currentQuant - ((seed % 4) === 0 ? 1 : 0));
  const currentAccept = Math.max(0, Math.min(currentQuant, Math.round(region.accept.may / Math.max(1, Math.round(region.targetNoPay / 3)))));
  const prevAccept = Math.max(0, currentAccept - ((seed % 5) === 0 ? 1 : 0));
  const currentPay = Math.max(0, Math.min(currentAccept, Math.round(currentAccept * (0.45 + (seed % 50) / 100))));
  const prevPay = Math.max(0, currentPay - ((seed % 6) === 0 ? 1 : 0));
  const currentRun = Number((62 + (seed % 34) + currentAccept * 1.2).toFixed(2));
  const prevRun = Number((currentRun - ((seed % 14) - 5) * 0.7).toFixed(2));
  const currentDevice = Number((58 + ((seed * 3) % 36)).toFixed(2));
  const prevDevice = Number((currentDevice - ((seed % 12) - 4) * 0.9).toFixed(2));
  const currentData = Number((72 + ((seed * 5) % 29)).toFixed(2));
  const prevData = Number((currentData - ((seed % 10) - 3) * 0.8).toFixed(2));
  const currentTotal = Number(((currentRun * 0.42) + (currentDevice * 0.28) + (currentData * 0.3)).toFixed(2));
  const prevTotal = Number(((prevRun * 0.42) + (prevDevice * 0.28) + (prevData * 0.3)).toFixed(2));
  return {
    region: regionName,
    project: projectName,
    statusPay: Math.min(1.2, Math.max(0, currentPay / Math.max(currentAccept, 1))),
    targetStar: Math.max(1, Math.min(4, Math.round(region.targetPay / Math.max(Object.keys(projectRegionCatalog).length / 8, 1)))),
    targetScore: 75,
    targetRun: 70,
    currentTotal,
    prevTotal,
    currentRun,
    prevRun,
    currentDevice,
    prevDevice,
    currentData,
    prevData,
    currentQuant,
    prevQuant,
    currentAccept,
    prevAccept,
    currentPay,
    prevPay,
    yearAccept: currentAccept,
    yearPay: currentPay,
  };
}

function projectDelta(current, previous) {
  return Number((current - previous).toFixed(2));
}

function projectMetricCard(label, current, previous, unit, toneMode = "up") {
  const delta = projectDelta(current, previous);
  const positive = toneMode === "down" ? delta <= 0 : delta >= 0;
  return `
    <article class="project-kpi-card">
      <span>${label}</span>
      <strong>${current}${unit}</strong>
      <small>上月：${previous}${unit}</small>
      <em class="${positive ? "positive" : "negative"}">${delta >= 0 ? "↑" : "↓"} ${Math.abs(delta)}${unit}</em>
      <div class="sparkline">${[previous * 0.92, previous, (previous + current) / 2, current * 0.97, current].map((value, index) => `<i style="height:${Math.max(12, Math.min(100, value))}%; opacity:${0.45 + index * 0.12}"></i>`).join("")}</div>
    </article>
  `;
}

function renderProjectSelectors(regionName = "杭湖区域公司", projectName = "湖州光正") {
  const projects = projectRegionCatalog[regionName] || [];
  return `
    <section class="project-select-panel">
      <label>区域选择
        <select id="projectRegionSelect">
          ${Object.keys(projectRegionCatalog).map((region) => `<option value="${region}" ${region === regionName ? "selected" : ""}>${region}</option>`).join("")}
        </select>
      </label>
      <label>项目选择
        <select id="projectSelect">
          ${projects.map((project) => `<option value="${project}" ${project === projectName ? "selected" : ""}>${project}</option>`).join("")}
        </select>
      </label>
      <span><i></i>先选区域，再选项目</span>
      <button class="ghost-btn" type="button">搜索项目</button>
      <button class="ghost-btn" type="button">重置</button>
    </section>
  `;
}

function renderProjectDetail(regionName = "杭湖区域公司", projectName = "湖州光正") {
  const record = getProjectRecord(regionName, projectName);
  const status = record.currentTotal >= record.targetScore ? "正常" : record.currentTotal >= record.targetScore - 8 ? "关注" : "预警";
  const starText = "★".repeat(Math.max(0, Math.round(record.targetStar))) + "☆".repeat(Math.max(0, 5 - Math.round(record.targetStar)));
  return `
    <div id="projectDetailContent">
      <section class="project-info-strip">
        <div><span>所属区域</span><strong>${record.region}</strong></div>
        <div><span>项目名称</span><strong>${record.project}</strong></div>
        <div><span>本月状态</span><strong class="${status === "正常" ? "good" : status === "关注" ? "warn" : "danger"}">${status}</strong></div>
        <div><span>当前回款率</span><strong>${Math.round(record.statusPay * 1000) / 10}%</strong></div>
        <div><span>目标星级</span><strong class="project-stars">${starText}</strong></div>
      </section>
      <section class="project-kpi-grid">
        ${projectMetricCard("当月量化星级环比", record.currentQuant, record.prevQuant, "★")}
        ${projectMetricCard("当月验收+量化星级环比", record.currentAccept, record.prevAccept, "★")}
        ${projectMetricCard("当月验收+量化+回款星级环比", record.currentPay, record.prevPay, "★")}
        ${projectMetricCard("运行质量得分环比", record.currentRun, record.prevRun, "分")}
        ${projectMetricCard("设备质量得分环比", record.currentDevice, record.prevDevice, "分")}
        ${projectMetricCard("数据质量得分环比", record.currentData, record.prevData, "分")}
      </section>
      <section class="project-analysis-grid">
        <article class="panel project-ai-card">
          <h2>AI智能分析</h2>
          <p>${record.project} 本月总分 ${record.currentTotal} 分，较上月 ${formatSigned(projectDelta(record.currentTotal, record.prevTotal))} 分；量化星级 ${record.currentQuant}★，验收+量化 ${record.currentAccept}★，叠加回款后 ${record.currentPay}★。${record.currentData < record.prevData ? "数据质量较上月下降，需要优先复核填报完整性和异常数据。" : "数据质量保持稳定，可继续关注运行质量和设备质量的短板项。"}</p>
        </article>
        <article class="panel project-data-card">
          <div><span>当月总分</span><b>${record.currentTotal}</b><em>上月 ${record.prevTotal}</em></div>
          <div><span>年度验收+量化</span><b>${record.yearAccept}★</b><em>年底口径</em></div>
          <div><span>年度验收+量化+回款</span><b>${record.yearPay}★</b><em>年底口径</em></div>
        </article>
      </section>
    </div>
  `;
}

function projectOverviewMarkup() {
  const selectedRegion = "杭湖区域公司";
  const selectedProject = "湖州光正";
  return `
    <section class="panel project-overview-panel project-dashboard-panel">
      <div class="panel-head">
        <div>
          <h2>项目整体情况</h2>
          <span class="muted">数据口径参考 Sheet2，按项目查看当月与上月环比。</span>
        </div>
      </div>
      ${renderProjectSelectors(selectedRegion, selectedProject)}
    </section>
    ${renderProjectDetail(selectedRegion, selectedProject)}
  `;
}

const supervisionReportRows = [
  { region: "杭湖区域公司", project: "湖州光正", owner: "陈敏", status: "审核通过", updated: "5月28日", note: "整改措施完整，已纳入月度归档。" },
  { region: "潍坊区域公司", project: "潍坊坊安", owner: "王凯", status: "大区审核未通过", updated: "5月27日", note: "缺少运行质量下降原因和复核照片。" },
  { region: "青岛区域公司", project: "日照岚山", owner: "赵敏", status: "已完成上报", updated: "5月26日", note: "待大区运营复核。" },
  { region: "北京建工环境", project: "徐州龙亭", owner: "李磊", status: "未上报", updated: "未提交", note: "需补充项目整改任务。" },
  { region: "苏皖业务区", project: "丹阳沃特", owner: "周强", status: "大区审核未通过", updated: "5月25日", note: "回款影响说明不足，需重新提交。" },
  { region: "东营滨州区域公司", project: "东营北控", owner: "刘洋", status: "未上报", updated: "未提交", note: "量化和验收双下降，需尽快填报。" },
  { region: "济宁区域公司", project: "曲阜高铁", owner: "孙琪", status: "审核通过", updated: "5月24日", note: "整改计划清晰，节点完整。" },
  { region: "枣庄区域公司", project: "滕州汇通", owner: "吴越", status: "已完成上报", updated: "5月23日", note: "等待大区审核。" },
];

function getAllProjectRecords() {
  return Object.entries(projectRegionCatalog).flatMap(([region, projects]) =>
    projects.map((project) => getProjectRecord(region, project))
  );
}

function supervisionRuleTags(record) {
  const tags = [];
  const qualityDeclined = record.currentRun < record.prevRun || record.currentDevice < record.prevDevice || record.currentData < record.prevData;
  if (record.currentAccept < record.targetStar && qualityDeclined) {
    tags.push("目标差距+质量下降");
  }
  if (record.currentAccept < record.prevAccept) {
    tags.push("验收+量化环比下降");
  }
  if (record.currentPay < record.prevPay && record.currentAccept >= record.prevAccept) {
    tags.push("仅回款率影响");
  }
  return tags;
}

function supervisionNeedRows() {
  return getAllProjectRecords()
    .map((record) => ({ ...record, tags: supervisionRuleTags(record) }))
    .filter((record) => record.tags.length);
}

function supervisionStatusClass(status) {
  if (status === "审核通过") return "approved";
  if (status === "大区审核未通过") return "rejected";
  if (status === "已完成上报") return "submitted";
  return "pending";
}

function supervisionSubmittedCount(rows) {
  return Math.max(0, Math.round(rows.length * 0.55));
}

function supervisionMeasures(projectName, regionName) {
  const seed = projectHash(regionName, projectName);
  const ownerPool = ["项目负责人", "运行负责人", "设备负责人", "资料专员"];
  return [
    {
      reason: "验收+量化星级较目标仍有差距，运行/设备/数据质量得分存在环比下降",
      action: "复核运行记录、设备维护记录和数据填报证据，形成质量专项整改清单",
      start: "6月1日",
      end: "6月10日",
      owner: ownerPool[seed % ownerPool.length],
      rectifier: "厂站运行班组",
      helper: "区域星级负责人",
      target: "质量短板项恢复至目标线以上",
      regionReview: "待审核",
      areaReview: "未提交",
    },
    {
      reason: "验收+量化星级环比下降，部分验收项资料不完整",
      action: "按验收口径补充制度、台账、照片和复核说明",
      start: "6月3日",
      end: "6月15日",
      owner: ownerPool[(seed + 1) % ownerPool.length],
      rectifier: "资料管理员",
      helper: "运营管理部",
      target: "验收+量化星级较上月不下降",
      regionReview: "通过",
      areaReview: "待审核",
    },
    {
      reason: "回款口径影响星级折算结果",
      action: "补充回款进度说明，明确回款滞后原因与预计完成时间",
      start: "6月5日",
      end: "6月20日",
      owner: ownerPool[(seed + 2) % ownerPool.length],
      rectifier: "经营负责人",
      helper: "区域运营负责人",
      target: "完成回款影响说明并纳入月度复核",
      regionReview: "退回修改",
      areaReview: "未提交",
    },
  ];
}

function renderSupervisionMeasureModal(projectName, regionName) {
  $("#supervisionMeasureModal")?.remove();
  const rows = supervisionMeasures(projectName, regionName);
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="supervisionMeasureModal">
      <section class="supervision-measure-modal">
        <header>
          <div>
            <h2>${projectName} · 整改措施清单</h2>
            <p class="muted">${regionName} · 项目提报后，经区域审核、大区审核通过后进入年度任务池。</p>
          </div>
          <button class="icon-close" data-close-supervision-modal type="button">×</button>
        </header>
        <div class="measure-table">
          <div class="measure-head">
            <span>整改原因</span><span>整改措施</span><span>预计开始时间</span><span>预计完成时间</span><span>负责人</span><span>整改人</span><span>协助人</span><span>整改完成目标</span><span>区域审核结果</span><span>大区审核结果</span>
          </div>
          ${rows.map((row) => `
            <div class="measure-row">
              <span>${row.reason}</span>
              <span>${row.action}</span>
              <span>${row.start}</span>
              <span>${row.end}</span>
              <span>${row.owner}</span>
              <span>${row.rectifier}</span>
              <span>${row.helper}</span>
              <span>${row.target}</span>
              <em>${row.regionReview}</em>
              <em>${row.areaReview}</em>
            </div>
          `).join("")}
        </div>
        <footer>
          <button class="ghost-btn" data-close-supervision-modal type="button">关闭</button>
          <button class="task-create-btn" data-open-new-supervision-task data-task-project="${projectName}" data-task-region="${regionName}" type="button">新建任务</button>
          <button class="primary-btn" data-close-supervision-modal type="button">提交审核</button>
        </footer>
      </section>
    </div>
  `);
}

const intensiveSpecialtyOwners = {
  "自控": "马佳鹏",
  "人才技能": "龙伦明",
  "人效": "应璐璐",
  "工单薪酬": "应璐璐",
  "运行质量": "来庆龙",
  "夜间听班": "应璐璐",
  "设备质量": "马圣昌",
  "ROM厂网一体化": "杜惠洋",
};

const intensiveSpecialties = Object.keys(intensiveSpecialtyOwners);

function renderNewSupervisionTaskModal(projectName, regionName) {
  $("#newSupervisionTaskModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop task-modal-backdrop" id="newSupervisionTaskModal">
      <section class="task-create-modal">
        <header>
          <div>
            <span class="modal-kicker">整改任务提报</span>
            <h2>${projectName} · 新建任务</h2>
            <p class="muted">${regionName} · 填写后进入区域审核，审核通过后进入年度任务池。</p>
          </div>
          <button class="icon-close" data-close-new-supervision-task type="button">×</button>
        </header>
        <div class="task-form-body">
          <section class="task-form-section">
            <div class="section-title">
              <b>基础信息</b>
              <span>明确问题、措施和闭环目标</span>
            </div>
            <div class="task-form-grid single-title">
              <label class="task-field">
                <span>任务名称 <em>*</em></span>
                <input type="text" value="星级短板整改" maxlength="50" />
                <small>建议 20 字以内，便于后续推送和跟踪</small>
              </label>
              <label class="task-field wide">
                <span>整改原因 <em>*</em></span>
                <textarea rows="4" placeholder="请说明触发整改的原因，例如验收+量化星级低于目标、质量得分下降或回款口径影响。"></textarea>
              </label>
              <label class="task-field wide">
                <span>整改措施 <em>*</em></span>
                <textarea rows="4" placeholder="请填写具体整改动作、过程证据要求和需要达成的节点。"></textarea>
              </label>
              <label class="task-field wide">
                <span>整改完成目标</span>
                <textarea rows="3" placeholder="例如：6月底前完成资料补齐、现场整改和区域复核，验收+量化星级不低于目标。"></textarea>
              </label>
            </div>
          </section>
          <section class="task-form-section">
            <div class="section-title">
              <b>责任与计划</b>
              <span>配置责任人、时间节点和协同需求</span>
            </div>
            <div class="task-form-grid three-cols">
              <label class="task-field">
                <span>预计开始时间 <em>*</em></span>
                <input type="date" value="2026-06-08" />
              </label>
              <label class="task-field">
                <span>预计完成时间 <em>*</em></span>
                <input type="date" value="2026-06-30" />
              </label>
              <label class="task-field">
                <span>负责人 <em>*</em></span>
                <input type="text" value="区域负责人" />
              </label>
              <label class="task-field">
                <span>整改人 <em>*</em></span>
                <input type="text" value="项目整改人" />
              </label>
              <label class="task-field">
                <span>任务优先级 <em>*</em></span>
                <select>
                  <option>重点</option>
                  <option>紧急</option>
                  <option>普通</option>
                </select>
              </label>
              <label class="task-field">
                <span>是否需要资源协助</span>
                <select id="resourceAssistSelect">
                  <option>否</option>
                  <option>是</option>
                </select>
              </label>
            </div>
            <div class="resource-fields" data-resource-fields>
              <label class="task-field wide">
                <span>资源协助需求 <em>*</em></span>
                <textarea rows="3" placeholder="请说明需要大区或专业条线协助的资源、资料、人员或决策支持。"></textarea>
              </label>
              <label class="task-field">
                <span>协助人 <em>*</em></span>
                <input type="text" placeholder="请选择或填写协助人" />
              </label>
              <label class="task-field">
                <span>角色 <em>*</em></span>
                <select>
                  <option>星级管理者</option>
                  <option>集约化管理者</option>
                  <option>工艺AI管理者</option>
                  <option>专业化公司管理者</option>
                  <option>工单管理者</option>
                  <option>经营管理者</option>
                  <option>安全管理者</option>
                  <option>风险管理者</option>
                  <option>自控管理者</option>
                  <option>人才管理者</option>
                  <option>预算管理者</option>
                </select>
              </label>
            </div>
            <div class="specialty-routing-fields">
              <label class="task-field">
                <span>专项类别 <em>*</em></span>
                <select id="intensiveSpecialtySelect">
                  ${intensiveSpecialties.map((item) => `<option>${item}</option>`).join("")}
                </select>
              </label>
              <label class="task-field">
                <span>大区对接人</span>
                <input id="intensiveSpecialtyOwner" type="text" value="${intensiveSpecialtyOwners["自控"]}" readonly />
              </label>
            </div>
          </section>
          <section class="task-form-section compact">
            <div class="section-title">
              <b>资料上传</b>
              <span>支持整改前后照片、过程证据、复核记录</span>
            </div>
            <div class="task-upload-box">
              <strong>点击或拖拽文件上传</strong>
              <span>支持 PDF、Word、Excel、图片，单个文件不超过 50MB</span>
            </div>
          </section>
        </div>
        <footer>
          <button class="ghost-btn" data-close-new-supervision-task type="button">取消</button>
          <button class="ghost-btn" type="button">暂存</button>
          <button class="primary-btn" data-close-new-supervision-task type="button">提交任务</button>
        </footer>
      </section>
    </div>
  `);
}

function renderSupervisionRows(rows, interactive = true) {
  return `
    <div class="supervision-table need-table">
      <div class="supervision-table-head">
        <span>区域 / 项目</span><span>触发规则</span><span>验收+量化</span><span>运行质量</span><span>设备质量</span><span>数据质量</span><span>回款星级</span>
      </div>
      ${rows.map((row) => `
        <div class="supervision-row">
          <div class="supervision-project-cell">
            ${interactive ? `<button class="supervision-project-link" data-supervision-project="${row.project}" data-supervision-region="${row.region}" type="button">${row.project}</button>` : `<strong>${row.project}</strong>`}
            <small>${row.region}</small>
          </div>
          <div class="supervision-tags">${row.tags.map((tag) => `<i>${tag}</i>`).join("")}</div>
          <span class="supervision-value"><b>${row.currentAccept}★</b><small>目标 ${row.targetStar}★</small></span>
          <span class="supervision-value ${row.currentRun < row.prevRun ? "negative" : "positive"}"><b>${row.currentRun}分</b><small>${formatSigned(projectDelta(row.currentRun, row.prevRun))}</small></span>
          <span class="supervision-value ${row.currentDevice < row.prevDevice ? "negative" : "positive"}"><b>${row.currentDevice}分</b><small>${formatSigned(projectDelta(row.currentDevice, row.prevDevice))}</small></span>
          <span class="supervision-value ${row.currentData < row.prevData ? "negative" : "positive"}"><b>${row.currentData}分</b><small>${formatSigned(projectDelta(row.currentData, row.prevData))}</small></span>
          <span class="supervision-value ${row.currentPay < row.prevPay ? "negative" : "positive"}"><b>${row.currentPay}★</b><small>${formatSigned(projectDelta(row.currentPay, row.prevPay))}</small></span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSupervisionRuleModal() {
  $("#supervisionRuleModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="supervisionRuleModal">
      <section class="supervision-rule-modal">
        <header>
          <div>
            <h2>督办识别规则</h2>
            <p class="muted">系统根据 Sheet2 中项目维度指标自动识别需提报整改任务的项目。</p>
          </div>
          <button class="icon-close" data-close-supervision-rule type="button">×</button>
        </header>
        <div class="rule-card-grid">
          <article><b>01</b><strong>目标差距 + 质量下降</strong><span>验收+量化星级较目标仍有差距，并且运行质量得分环比、设备质量得分环比、数据质量得分环比任一下降。</span></article>
          <article><b>02</b><strong>验收量化下降</strong><span>验收+量化星级环比下降，说明项目验收口径或量化结果出现退步。</span></article>
          <article><b>03</b><strong>回款率影响</strong><span>验收+量化+回款星级下降，且主要由回款率下降影响，需要补充回款原因和预计节点。</span></article>
        </div>
        <footer>
          <button class="primary-btn" data-close-supervision-rule type="button">知道了</button>
        </footer>
      </section>
    </div>
  `);
}

function renderSupervisionRegionModal() {
  $("#supervisionRegionModal")?.remove();
  const regions = [...new Set(supervisionNeedRows().map((row) => row.region))];
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="supervisionRegionModal">
      <section class="supervision-region-modal">
        <header>
          <div>
            <h2>筛选区域</h2>
            <p class="muted">为空或选择全部区域时，项目清单展示全部识别结果。</p>
          </div>
          <button class="icon-close" data-close-supervision-region type="button">×</button>
        </header>
        <div class="region-filter-grid">
          <button data-supervision-region-filter="" type="button">全部区域</button>
          ${regions.map((region) => `<button data-supervision-region-filter="${region}" type="button">${region}</button>`).join("")}
        </div>
      </section>
    </div>
  `);
}

function supervisionProgressMarkup(selectedRegion = "", interactive = true) {
  const allRows = supervisionNeedRows();
  const needRows = selectedRegion ? allRows.filter((row) => row.region === selectedRegion) : allRows;
  const submittedCount = supervisionSubmittedCount(needRows);
  const unsubmittedCount = Math.max(0, needRows.length - submittedCount);
  return `
    <section class="supervision-page">
      <div class="supervision-head">
        <div class="supervision-stats">
          <article><span>需提报整改项目数</span><strong>${needRows.length}</strong></article>
          <article><span>已完成提报项目数</span><strong>${submittedCount}</strong></article>
          <article><span>未完成提报项目数</span><strong>${unsubmittedCount}</strong></article>
        </div>
      </div>
      <section class="supervision-layout">
        <article class="panel supervision-panel">
          <div class="panel-head">
            <div>
              <h2>需填写整改任务项目</h2>
              <span class="muted">${selectedRegion ? `当前筛选：${selectedRegion}` : "当前展示：全部区域"}</span>
            </div>
            <div class="supervision-actions">
              <button class="ghost-btn" data-open-supervision-rule type="button">查看规则</button>
              <button class="primary-btn" data-open-supervision-region type="button">筛选区域</button>
            </div>
          </div>
          <div id="supervisionList">${renderSupervisionRows(needRows, interactive)}</div>
        </article>
      </section>
    </section>
  `;
}

function renderStarInsight(view) {
  const content = $("#starInsightContent");
  if (!content) return;
  $(".star-metrics")?.classList.toggle("hide-on-region-view", view === "region");
  $(".star-metrics")?.classList.toggle("hide-on-gantt-view", view === "gantt");
  $(".star-metrics")?.classList.toggle("hide-on-project-view", view === "project");
  $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === view));
  if (view === "area") content.innerHTML = starAreaViewMarkup();
  if (view === "region") content.innerHTML = regionViewMarkup();
  if (view === "project") content.innerHTML = projectOverviewMarkup();
  if (view === "gantt") content.innerHTML = starGanttPanelMarkup();
}

const intensiveViews = [
  { id: "acceptance", name: "集约化验收" },
  { id: "review", name: "集约化回顾" },
  { id: "automation", name: "单厂自动化" },
  { id: "water-standard", name: "供水标准化" },
];

const intensiveAcceptanceRegions = ["杭湖区域公司", "东营滨州区域公司", "菏泽区域公司", "潍坊区域公司", "郑州业务区"];
const intensiveAcceptanceRows = {
  "5月": [
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "核心单元程控率达标率", weight: "5%", values: [["杭湖区域公司", 0.6667, 3.3333], ["东营滨州区域公司", 0.8333, 4.1667], ["菏泽区域公司", 1, 5], ["潍坊区域公司", 0, 0], ["郑州业务区", 1, 5]] },
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "数采数据质量达标率", weight: "5%", values: [["杭湖区域公司", 1, 5], ["东营滨州区域公司", 1, 5], ["菏泽区域公司", 1, 5], ["潍坊区域公司", 0, 0], ["郑州业务区", 1, 5]] },
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "运行转运维覆盖率", weight: "10%", values: [["杭湖区域公司", 1, 10], ["东营滨州区域公司", 1, 10], ["菏泽区域公司", 1, 10], ["潍坊区域公司", 1, 10], ["郑州业务区", 1, 10]] },
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "工艺加化验转质控覆盖率", weight: "5%", values: [["杭湖区域公司", 1, 5], ["东营滨州区域公司", 0.1667, 0.8333], ["菏泽区域公司", 0.8, 4], ["潍坊区域公司", 0.6667, 3.3333], ["郑州业务区", 0.6, 3]] },
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "供水厂标准化覆盖率", weight: "附加5%", values: [["杭湖区域公司", null, null], ["东营滨州区域公司", "/", "/"], ["菏泽区域公司", "/", "/"], ["潍坊区域公司", null, null], ["郑州业务区", "/", "/"]] },
    { level1: "集约化模式转变评价", level2: "厂端标准化构建评价", metric: "夜间听班覆盖率", weight: "5%", values: [["杭湖区域公司", 0, 0], ["东营滨州区域公司", 0.33, 1.65], ["菏泽区域公司", 0.2, 1], ["潍坊区域公司", 0, 0], ["郑州业务区", 0.5, 2.5]] },
    { level1: "集约化模式转变评价", level2: "区域集约化模式转变评价", metric: "质控集约化覆盖率", weight: "5%", values: [["杭湖区域公司", 1, 5], ["东营滨州区域公司", 1, 5], ["菏泽区域公司", 1, 5], ["潍坊区域公司", 1, 5], ["郑州业务区", 1, 5]] },
    { level1: "集约化模式转变评价", level2: "区域集约化模式转变评价", metric: "设备集约化覆盖率", weight: "5%", values: [["杭湖区域公司", 1, 5], ["东营滨州区域公司", 1, 5], ["菏泽区域公司", 1, 5], ["潍坊区域公司", 1, 5], ["郑州业务区", 1, 5]] },
    { level1: "人效提升评价", level2: "运营效率评价", metric: "人均运营规模", weight: "5%", values: [["杭湖区域公司", 2820.51, 4], ["东营滨州区域公司", 2577.32, 4], ["菏泽区域公司", 3522.73, 4], ["潍坊区域公司", 1923.08, 3], ["郑州业务区", 1983.47, 3]] },
    { level1: "人效提升评价", level2: "运营效率评价", metric: "人均创利", weight: "5%", values: [["杭湖区域公司", 94.04, 4.5], ["东营滨州区域公司", 31.96, 2], ["菏泽区域公司", 92.8, 4.5], ["潍坊区域公司", 84.18, 4], ["郑州业务区", 33.9, 0]] },
    { level1: "人效提升评价", level2: "运营效率评价", metric: "人事费用率", weight: "5%", values: [["杭湖区域公司", 0.061, 5], ["东营滨州区域公司", 0.118, 0], ["菏泽区域公司", 0.064, 5], ["潍坊区域公司", 0.085, 0], ["郑州业务区", 0.112, 1]] },
    { level1: "人效提升评价", level2: "区域人数变化评价", metric: "区域人数目标偏差率", weight: "10%", values: [["杭湖区域公司", 76, 10], ["东营滨州区域公司", 92, 10], ["菏泽区域公司", 83, 10], ["潍坊区域公司", 47, 10], ["郑州业务区", 118, 4]] },
    { level1: "人效提升评价", level2: "工单深化应用评价", metric: "工单薪酬落地完成率", weight: "10%", values: [["杭湖区域公司", 1, 10], ["东营滨州区域公司", 0.5, 5], ["菏泽区域公司", 0.6, 6], ["潍坊区域公司", 0, 0], ["郑州业务区", 1, 10]] },
    { level1: "区域可持续发展评价", level2: "运营体量提升评价", metric: "运营管理体量提升", weight: "加分项5%", values: [["杭湖区域公司", 0, 0], ["东营滨州区域公司", "+4万吨", 1], ["菏泽区域公司", 0, 0], ["潍坊区域公司", 0, 0], ["郑州业务区", "+4万吨", 1]] },
    { level1: "区域可持续发展评价", level2: "专业化服务能力评价", metric: "培育专业化服务能力", weight: "10%", values: [["杭湖区域公司", 1, 10], ["东营滨州区域公司", 0.892, 7.1], ["菏泽区域公司", 1, 10], ["潍坊区域公司", 0.818, 3.4], ["郑州业务区", 0.926, 8.8]] },
    { level1: "区域可持续发展评价", level2: "增量项目拓展能力评价", metric: "云链端新范式下OM获取数量", weight: "加分项10%", values: [["杭湖区域公司", 0, 0], ["东营滨州区域公司", 0, 0], ["菏泽区域公司", 0, 0], ["潍坊区域公司", 0, 0], ["郑州业务区", 0, 0]] },
    { level1: "区域可持续发展评价", level2: "增量项目拓展能力评价", metric: "厂网一体化推进能力", weight: "加分项5%", values: [["杭湖区域公司", 0, 0], ["东营滨州区域公司", 0, 0], ["菏泽区域公司", 0, 0], ["潍坊区域公司", 0, 0], ["郑州业务区", 0, 0]] },
  ],
};

const automationJuneRows = [
  { batch: "26集团", region: "苏皖业务区", factory: "徐州创源", fullName: "徐州睢宁污水处理厂", score: 89.8, qualified: "合格", dataQuality: 15.0, programRate: 89.1, programScore: 10.0, autoFunction: 67.5, autoScore: 16.9, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "苏皖业务区", factory: "南京荣泰", fullName: "南京荣泰污水处理厂", score: 89.3, qualified: "合格", dataQuality: 15.0, programRate: 83.6, programScore: 9.7, autoFunction: 67.0, autoScore: 16.8, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "苏皖业务区", factory: "丹阳沃特", fullName: "丹阳沃特污水处理厂", score: 87.2, qualified: "合格", dataQuality: 15.0, programRate: 90.0, programScore: 10.0, autoFunction: 71.7, autoScore: 17.9, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 6.9, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "太仓开发区", fullName: "太仓开发区污水处理厂", score: 83.3, qualified: "合格", dataQuality: 15.0, programRate: 88.7, programScore: 10.0, autoFunction: 66.5, autoScore: 16.6, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "昆山花桥", fullName: "昆山花桥污水处理厂", score: 83.2, qualified: "合格", dataQuality: 15.0, programRate: 87.9, programScore: 10.0, autoFunction: 79.7, autoScore: 19.9, opsScore: 10.0, labScore: 5.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "昆山北区", fullName: "昆山北区污水处理厂", score: 81.0, qualified: "合格", dataQuality: 15.0, programRate: 87.5, programScore: 10.0, autoFunction: 91.5, autoScore: 22.9, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "昆山吴淞江", fullName: "昆山吴淞江污水处理厂", score: 80.4, qualified: "合格", dataQuality: 15.0, programRate: 90.8, programScore: 10.0, autoFunction: 89.5, autoScore: 22.4, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "昆山张浦", fullName: "昆山张浦污水处理厂", score: 79.6, qualified: "合格", dataQuality: 15.0, programRate: 89.1, programScore: 10.0, autoFunction: 86.5, autoScore: 21.6, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "昆山陆家", fullName: "昆山陆家污水处理厂", score: 77.9, qualified: "合格", dataQuality: 15.0, programRate: 88.3, programScore: 10.0, autoFunction: 80.5, autoScore: 20.1, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "徐州龙亭", fullName: "徐州龙亭污水处理厂", score: 73.0, qualified: "合格", dataQuality: 15.0, programRate: 65.0, programScore: 5.6, autoFunction: 31.5, autoScore: 7.9, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "盐城开发区", fullName: "盐城开发区污水处理厂", score: 67.8, qualified: "合格", dataQuality: 15.0, programRate: 81.2, programScore: 9.2, autoFunction: 88.0, autoScore: 22.0, opsScore: 0.0, labScore: 0.0, nightScore: 0.0, benefitScore: 4.9, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "徐州新城区", fullName: "徐州新城区污水处理厂", score: 62.0, qualified: "合格", dataQuality: 15.0, programRate: 50.0, programScore: 2.2, autoFunction: 29.5, autoScore: 7.4, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "徐州西区", fullName: "徐州西区污水处理厂", score: 60.7, qualified: "合格", dataQuality: 15.0, programRate: 93.9, programScore: 10.0, autoFunction: 33.0, autoScore: 8.2, opsScore: 0.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 5.3, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "宜兴城市", fullName: "宜兴城市污水处理厂", score: 60.0, qualified: "合格", dataQuality: 15.0, programRate: 25.0, programScore: 0.0, autoFunction: 33.5, autoScore: 8.4, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 9.6, workorderScore: 0.0 },
  { batch: "26集团", region: "北京建工环境", factory: "宜兴城市三期", fullName: "宜兴城市三期污水处理厂", score: 58.1, qualified: "不合格", dataQuality: 15.0, programRate: 21.6, programScore: 0.0, autoFunction: 27.0, autoScore: 6.8, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 4.7, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26集团", region: "西安区域公司", factory: "西安阎良", fullName: "阎良污水处理厂", score: 62.6, qualified: "合格", dataQuality: 15.0, programRate: 86.9, programScore: 10.0, autoFunction: 45.5, autoScore: 11.4, opsScore: 0.0, labScore: 5.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "聊城区域公司", factory: "冠县嘉诚", fullName: "山东冠县嘉诚污水厂", score: 84.4, qualified: "合格", dataQuality: 15.0, programRate: 66.7, programScore: 5.9, autoFunction: 66.5, autoScore: 16.6, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "苏皖业务区", factory: "六合雄州", fullName: "六合区雄州第二污水处理厂", score: 82.6, qualified: "合格", dataQuality: 15.0, programRate: 73.2, programScore: 7.4, autoFunction: 74.8, autoScore: 18.7, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "聊城区域公司", factory: "冠县清泉", fullName: "山东冠县嘉诚污水厂", score: 79.7, qualified: "合格", dataQuality: 15.0, programRate: 83.3, programScore: 9.6, autoFunction: 76.5, autoScore: 19.1, opsScore: 0.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "北京建工环境", factory: "不老河二期", fullName: "徐州不老河二期污水处理厂", score: 79.7, qualified: "合格", dataQuality: 15.0, programRate: 88.6, programScore: 10.0, autoFunction: 55.0, autoScore: 13.8, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "南阳区域公司", factory: "南阳张岗", fullName: "南阳张岗污水处理厂", score: 78.6, qualified: "合格", dataQuality: 15.0, programRate: 89.3, programScore: 10.0, autoFunction: 31.5, autoScore: 7.9, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "苏皖业务区", factory: "安徽太和", fullName: "太和县第三污水处理厂", score: 76.3, qualified: "合格", dataQuality: 15.0, programRate: 73.3, programScore: 7.4, autoFunction: 57.5, autoScore: 14.4, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 1.2, staffScore: 8.0, workorderScore: 0.0 },
  { batch: "26大区", region: "北京建工环境", factory: "盐城城南", fullName: "盐城城南污水处理厂", score: 73.3, qualified: "合格", dataQuality: 15.0, programRate: 90.5, programScore: 10.0, autoFunction: 74.5, autoScore: 18.6, opsScore: 0.0, labScore: 5.0, nightScore: 10.0, benefitScore: 0.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "苏皖业务区", factory: "江苏汇同", fullName: "泰州市靖江工业园区污水处理厂", score: 71.0, qualified: "合格", dataQuality: 15.0, programRate: 44.0, programScore: 0.9, autoFunction: 43.5, autoScore: 10.9, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "北京建工环境", factory: "宜兴新建", fullName: "宜兴新建污水处理厂", score: 65.6, qualified: "合格", dataQuality: 15.0, programRate: 0.0, programScore: 0.0, autoFunction: 50.0, autoScore: 12.5, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "苏皖业务区", factory: "枞阳亚同", fullName: "枞阳县污水处理厂", score: 63.1, qualified: "合格", dataQuality: 15.0, programRate: 0.0, programScore: 0.0, autoFunction: 22.0, autoScore: 5.5, opsScore: 10.0, labScore: 5.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "北京建工环境", factory: "宜兴和桥", fullName: "宜兴和桥污水处理厂", score: 60.9, qualified: "合格", dataQuality: 15.0, programRate: 25.0, programScore: 0.0, autoFunction: 35.0, autoScore: 8.8, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "北京建工环境", factory: "宜兴徐舍", fullName: "宜兴徐舍污水处理厂", score: 60.8, qualified: "合格", dataQuality: 15.0, programRate: 12.0, programScore: 0.0, autoFunction: 34.5, autoScore: 8.6, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "西安区域公司", factory: "蒲城格瑞", fullName: "蒲城污水处理厂", score: 58.9, qualified: "不合格", dataQuality: 15.0, programRate: 31.7, programScore: 0.0, autoFunction: 52.0, autoScore: 13.0, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "西安区域公司", factory: "武功嘉诚", fullName: "武功污水处理厂", score: 54.2, qualified: "不合格", dataQuality: 15.0, programRate: 57.1, programScore: 3.8, autoFunction: 60.0, autoScore: 15.0, opsScore: 0.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 10.0, workorderScore: 0.0 },
  { batch: "26大区", region: "西安区域公司", factory: "华州北控", fullName: "华州区污水处理厂", score: 51.2, qualified: "不合格", dataQuality: 15.0, programRate: 20.0, programScore: 0.0, autoFunction: 30.0, autoScore: 7.5, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 8.6, workorderScore: 0.0 },
  { batch: "26大区", region: "西安区域公司", factory: "西咸中天", fullName: "西咸新区污水处理厂", score: 46.5, qualified: "不合格", dataQuality: 15.0, programRate: 25.0, programScore: 0.0, autoFunction: 30.0, autoScore: 7.5, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 0.4, staffScore: 9.0, workorderScore: 0.0 },
  { batch: "27年", region: "北京建工环境", factory: "大冶城西北二期", fullName: "大冶城西北二期污水处理厂", score: 75.3, qualified: "合格", dataQuality: 15.0, programRate: 76.9, programScore: 8.2, autoFunction: 83.5, autoScore: 20.9, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 8.7, workorderScore: 0.0 },
  { batch: "27年", region: "聊城区域公司", factory: "临清碧水", fullName: "临清市碧水污水处理厂", score: 66.8, qualified: "合格", dataQuality: 15.0, programRate: 59.5, programScore: 4.3, autoFunction: 49.5, autoScore: 12.4, opsScore: 0.0, labScore: 10.0, nightScore: 10.0, benefitScore: 2.7, staffScore: 9.0, workorderScore: 0.0 },
  { batch: "27年", region: "苏皖业务区", factory: "泰州亚同", fullName: "泰州亚同污水处理厂", score: 61.1, qualified: "合格", dataQuality: 15.0, programRate: 39.0, programScore: 0.0, autoFunction: 49.3, autoScore: 12.3, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 3.7, staffScore: 7.9, workorderScore: 0.0 },
  { batch: "27年", region: "北京建工环境", factory: "宜兴官林", fullName: "宜兴官林污水处理厂", score: 59.3, qualified: "不合格", dataQuality: 15.0, programRate: 38.9, programScore: 0.0, autoFunction: 36.0, autoScore: 9.0, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 8.5, workorderScore: 0.0 },
  { batch: "27年", region: "北京建工环境", factory: "徐州丁万河", fullName: "徐州丁万河污水处理厂", score: 61.0, qualified: "合格", dataQuality: 15.0, programRate: 92.3, programScore: 10.0, autoFunction: 35.0, autoScore: 8.8, opsScore: 10.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 6.2, workorderScore: 0.0 },
  { batch: "27年", region: "苏皖业务区", factory: "阜宁水处理", fullName: "阜宁生活污水处理厂", score: 55.8, qualified: "不合格", dataQuality: 15.0, programRate: 7.1, programScore: 0.0, autoFunction: 21.0, autoScore: 5.2, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 9.4, workorderScore: 0.0 },
  { batch: "27年", region: "北京建工环境", factory: "宜兴张渚", fullName: "宜兴张渚污水处理厂", score: 53.0, qualified: "不合格", dataQuality: 15.0, programRate: 12.0, programScore: 0.0, autoFunction: 23.0, autoScore: 5.8, opsScore: 10.0, labScore: 0.0, nightScore: 10.0, benefitScore: 5.0, staffScore: 6.7, workorderScore: 0.0 },
  { batch: "27年", region: "太原区域公司", factory: "太原北控", fullName: "太原市北郊污水处理厂", score: 24.7, qualified: "不合格", dataQuality: 15.0, programRate: 43.3, programScore: 0.7, autoFunction: 6.0, autoScore: 1.5, opsScore: 0.0, labScore: 0.0, nightScore: 0.0, benefitScore: 5.0, staffScore: 0.0, workorderScore: 0.0 },
];

const automationBatches = ["全部", ...new Set(automationJuneRows.map((row) => row.batch))];
const automationRegionBoardRows = [{"region":"北京建工环境","project":"大冶城西北二期","factory":"大冶城西北二期污水处理厂","opsTotal":83.372,"opsPass":"合格","opsResult":68.372,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.714,"workHourScore":7.658,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":65.231,"qcPass":"不合格","qcResult":45.231,"sedScore":45.231,"qcCertScore":0.0},{"region":"北京建工环境","project":"太仓开发区","factory":"太仓开发区污水处理厂","opsTotal":82.511,"opsPass":"合格","opsResult":67.511,"maintPlanScore":17.966,"faultScore":20.0,"certScore":4.545,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":62.945,"qcPass":"不合格","qcResult":42.945,"sedScore":32.945,"qcCertScore":10.0},{"region":"北京建工环境","project":"奉化莼湖","factory":"奉化莼湖污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":17.322,"faultScore":20.0,"certScore":3.333,"workHourScore":7.771,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":50.692,"qcPass":"不合格","qcResult":30.692,"sedScore":30.692,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴南漕","factory":"宜兴南漕污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":0.0,"faultScore":20.0,"certScore":null,"workHourScore":null,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":null,"qcPass":"未评价","qcResult":null,"sedScore":null,"qcCertScore":null},{"region":"北京建工环境","project":"宜兴和桥","factory":"宜兴和桥污水处理厂","opsTotal":82.0,"opsPass":"合格","opsResult":67.0,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.0,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":42.348,"qcPass":"不合格","qcResult":22.348,"sedScore":22.348,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴城市三期","factory":"宜兴城市三期污水处理厂","opsTotal":76.85,"opsPass":"合格","opsResult":61.85,"maintPlanScore":20.0,"faultScore":20.0,"certScore":4.444,"workHourScore":12.406,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":51.514,"qcPass":"不合格","qcResult":31.514,"sedScore":31.514,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴城市","factory":"宜兴城市污水处理厂","opsTotal":94.889,"opsPass":"合格","opsResult":79.889,"maintPlanScore":19.504,"faultScore":20.0,"certScore":5.385,"workHourScore":20.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":61.003,"qcPass":"不合格","qcResult":41.003,"sedScore":41.003,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴官林","factory":"宜兴官林污水处理厂","opsTotal":75.049,"opsPass":"合格","opsResult":60.049,"maintPlanScore":19.414,"faultScore":20.0,"certScore":1.111,"workHourScore":14.525,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":48.32,"qcPass":"不合格","qcResult":28.32,"sedScore":28.32,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴张渚","factory":"宜兴张渚污水处理厂","opsTotal":81.818,"opsPass":"合格","opsResult":66.818,"maintPlanScore":20.0,"faultScore":20.0,"certScore":1.818,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":57.44,"qcPass":"不合格","qcResult":37.44,"sedScore":37.44,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴徐舍","factory":"宜兴徐舍污水处理厂","opsTotal":78.474,"opsPass":"合格","opsResult":63.474,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.0,"workHourScore":16.474,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":57.689,"qcPass":"不合格","qcResult":37.689,"sedScore":37.689,"qcCertScore":0.0},{"region":"北京建工环境","project":"宜兴新建","factory":"宜兴新建污水处理厂","opsTotal":80.357,"opsPass":"合格","opsResult":65.357,"maintPlanScore":18.928,"faultScore":20.0,"certScore":1.429,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":28.815,"qcPass":"不合格","qcResult":8.815,"sedScore":8.815,"qcCertScore":0.0},{"region":"北京建工环境","project":"徐州丁万河","factory":"徐州丁万河污水处理厂","opsTotal":70.893,"opsPass":"合格","opsResult":55.893,"maintPlanScore":20.0,"faultScore":19.355,"certScore":4.167,"workHourScore":7.371,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":69.588,"qcPass":"不合格","qcResult":49.588,"sedScore":49.588,"qcCertScore":0.0},{"region":"北京建工环境","project":"不老河二期","factory":"徐州不老河二期污水处理厂","opsTotal":80.0,"opsPass":"合格","opsResult":65.0,"maintPlanScore":20.0,"faultScore":20.0,"certScore":0.0,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":59.849,"qcPass":"不合格","qcResult":39.849,"sedScore":39.849,"qcCertScore":0.0},{"region":"北京建工环境","project":"徐州新城区","factory":"徐州新城区污水处理厂","opsTotal":71.554,"opsPass":"合格","opsResult":56.554,"maintPlanScore":13.064,"faultScore":20.0,"certScore":4.286,"workHourScore":14.204,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":69.403,"qcPass":"不合格","qcResult":49.403,"sedScore":49.403,"qcCertScore":0.0},{"region":"北京建工环境","project":"徐州西区","factory":"徐州西区污水处理厂","opsTotal":68.853,"opsPass":"不合格","opsResult":53.853,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.667,"workHourScore":6.186,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":70.249,"qcPass":"合格","qcResult":50.249,"sedScore":45.249,"qcCertScore":5.0},{"region":"北京建工环境","project":"徐州龙亭","factory":"徐州龙亭污水处理厂","opsTotal":72.583,"opsPass":"合格","opsResult":57.583,"maintPlanScore":20.0,"faultScore":20.0,"certScore":3.333,"workHourScore":9.25,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":81.757,"qcPass":"合格","qcResult":61.757,"sedScore":45.757,"qcCertScore":16.0},{"region":"北京建工环境","project":"昆山北区","factory":"昆山北区污水处理厂","opsTotal":94.185,"opsPass":"合格","opsResult":79.185,"maintPlanScore":18.922,"faultScore":20.0,"certScore":5.263,"workHourScore":20.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":57.209,"qcPass":"不合格","qcResult":37.209,"sedScore":37.209,"qcCertScore":0.0},{"region":"北京建工环境","project":"昆山吴淞江","factory":"昆山吴淞江污水处理厂","opsTotal":94.615,"opsPass":"合格","opsResult":79.615,"maintPlanScore":20.0,"faultScore":20.0,"certScore":4.615,"workHourScore":20.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":60.211,"qcPass":"不合格","qcResult":40.211,"sedScore":33.545,"qcCertScore":6.666},{"region":"北京建工环境","project":"昆山张浦","factory":"昆山张浦污水处理厂","opsTotal":93.22,"opsPass":"合格","opsResult":78.22,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.833,"workHourScore":17.387,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":58.538,"qcPass":"不合格","qcResult":38.538,"sedScore":38.538,"qcCertScore":0.0},{"region":"北京建工环境","project":"昆山花桥","factory":"昆山花桥污水处理厂","opsTotal":95.179,"opsPass":"合格","opsResult":80.179,"maintPlanScore":19.794,"faultScore":20.0,"certScore":5.385,"workHourScore":20.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":74.905,"qcPass":"合格","qcResult":54.905,"sedScore":54.905,"qcCertScore":0.0},{"region":"北京建工环境","project":"昆山陆家","factory":"昆山陆家污水处理厂","opsTotal":95.0,"opsPass":"合格","opsResult":80.0,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.0,"workHourScore":20.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":66.848,"qcPass":"不合格","qcResult":46.848,"sedScore":40.182,"qcCertScore":6.666},{"region":"北京建工环境","project":"盐城城南","factory":"盐城城南污水处理厂","opsTotal":63.52,"opsPass":"不合格","opsResult":48.52,"maintPlanScore":0.0,"faultScore":20.0,"certScore":5.833,"workHourScore":7.687,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":74.157,"qcPass":"合格","qcResult":54.157,"sedScore":54.157,"qcCertScore":0.0},{"region":"北京建工环境","project":"盐城开发区","factory":"盐城开发区污水处理厂","opsTotal":54.286,"opsPass":"不合格","opsResult":39.286,"maintPlanScore":0.0,"faultScore":20.0,"certScore":4.286,"workHourScore":0.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":56.249,"qcPass":"不合格","qcResult":36.249,"sedScore":36.249,"qcCertScore":0.0},{"region":"太原区域","project":"太原北控","factory":"太原市北郊污水处理厂","opsTotal":0.0,"opsPass":"不合格","opsResult":51.354,"maintPlanScore":20.0,"faultScore":3.687,"certScore":2.667,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":44.231,"qcPass":"不合格","qcResult":24.231,"sedScore":24.231,"qcCertScore":0.0},{"region":"聊城区域公司","project":"临清碧水","factory":"临清市碧水污水处理厂","opsTotal":67.311,"opsPass":"不合格","opsResult":52.311,"maintPlanScore":13.978,"faultScore":20.0,"certScore":3.333,"workHourScore":0.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":75.848,"qcPass":"合格","qcResult":55.848,"sedScore":49.182,"qcCertScore":6.666},{"region":"聊城区域公司","project":"冠县嘉诚","factory":"山东冠县嘉诚污水厂","opsTotal":74.167,"opsPass":"合格","opsResult":59.167,"maintPlanScore":20.0,"faultScore":20.0,"certScore":4.167,"workHourScore":0.0,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":72.006,"qcPass":"合格","qcResult":52.006,"sedScore":37.006,"qcCertScore":15.0},{"region":"聊城区域公司","project":"冠县清泉","factory":"山东冠县嘉诚污水厂","opsTotal":64.167,"opsPass":"不合格","opsResult":49.167,"maintPlanScore":20.0,"faultScore":20.0,"certScore":4.167,"workHourScore":0.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":72.006,"qcPass":"合格","qcResult":52.006,"sedScore":37.006,"qcCertScore":15.0},{"region":"聊城区域公司","project":"茌平思源","factory":"茌平乐平铺污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":20.0,"faultScore":20.0,"certScore":null,"workHourScore":0.0,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":null,"qcPass":"未评价","qcResult":null,"sedScore":16.606,"qcCertScore":null},{"region":"聊城区域公司","project":"茌平绿源","factory":"茌平水质净化中心污水厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":19.041,"faultScore":20.0,"certScore":null,"workHourScore":20.0,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":null,"qcPass":"未评价","qcResult":null,"sedScore":40.662,"qcCertScore":null},{"region":"聊城区域公司","project":"茌平开源","factory":"茌平污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":20.0,"faultScore":0.0,"certScore":null,"workHourScore":20.0,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":null,"qcPass":"未评价","qcResult":null,"sedScore":25.855,"qcCertScore":null},{"region":"苏皖业务区","project":"丹阳沃特","factory":"丹阳沃特污水处理厂","opsTotal":85.417,"opsPass":"合格","opsResult":70.417,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.5,"workHourScore":12.917,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":80.001,"qcPass":"合格","qcResult":60.001,"sedScore":53.335,"qcCertScore":6.666},{"region":"苏皖业务区","project":"六合雄州","factory":"六合区雄州第二污水处理厂","opsTotal":80.07,"opsPass":"合格","opsResult":65.07,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.0,"workHourScore":15.07,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":55.283,"qcPass":"不合格","qcResult":35.283,"sedScore":25.283,"qcCertScore":10.0},{"region":"苏皖业务区","project":"南京荣泰","factory":"南京荣泰污水处理厂","opsTotal":87.34,"opsPass":"合格","opsResult":72.34,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.714,"workHourScore":11.626,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":73.831,"qcPass":"合格","qcResult":53.831,"sedScore":48.831,"qcCertScore":5.0},{"region":"苏皖业务区","project":"安徽太和","factory":"太和县第三污水处理厂","opsTotal":89.093,"opsPass":"合格","opsResult":74.093,"maintPlanScore":18.477,"faultScore":20.0,"certScore":10.0,"workHourScore":10.616,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":82.615,"qcPass":"合格","qcResult":62.615,"sedScore":52.615,"qcCertScore":10.0},{"region":"苏皖业务区","project":"徐州创源","factory":"徐州睢宁污水处理厂","opsTotal":81.682,"opsPass":"合格","opsResult":66.682,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.857,"workHourScore":8.825,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":79.234,"qcPass":"合格","qcResult":59.234,"sedScore":44.234,"qcCertScore":15.0},{"region":"苏皖业务区","project":"枞阳亚同","factory":"枞阳县污水处理厂","opsTotal":78.532,"opsPass":"合格","opsResult":63.532,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.5,"workHourScore":6.032,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":77.874,"qcPass":"合格","qcResult":57.874,"sedScore":52.874,"qcCertScore":5.0},{"region":"苏皖业务区","project":"泰州亚同","factory":"泰州亚同污水处理厂","opsTotal":78.826,"opsPass":"合格","opsResult":63.826,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.308,"workHourScore":6.518,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":59.52,"qcPass":"不合格","qcResult":39.52,"sedScore":29.52,"qcCertScore":10.0},{"region":"苏皖业务区","project":"江苏汇同","factory":"泰州市靖江工业园区污水处理厂","opsTotal":81.526,"opsPass":"合格","opsResult":66.526,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.0,"workHourScore":6.526,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":76.617,"qcPass":"合格","qcResult":56.617,"sedScore":43.283,"qcCertScore":13.334},{"region":"苏皖业务区","project":"潜山亚同","factory":"潜山污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":20.0,"faultScore":20.0,"certScore":5.455,"workHourScore":8.768,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":75.677,"qcPass":"合格","qcResult":55.677,"sedScore":35.677,"qcCertScore":20.0},{"region":"苏皖业务区","project":"阜宁水处理","factory":"阜宁生活污水处理厂","opsTotal":78.799,"opsPass":"合格","opsResult":63.799,"maintPlanScore":18.969,"faultScore":20.0,"certScore":3.333,"workHourScore":16.497,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":56.092,"qcPass":"不合格","qcResult":36.092,"sedScore":36.092,"qcCertScore":0.0},{"region":"南阳区域","project":"南阳张岗","factory":"南阳张岗污水处理厂","opsTotal":70.46,"opsPass":"合格","opsResult":55.46,"maintPlanScore":20.0,"faultScore":17.738,"certScore":6.667,"workHourScore":6.055,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":74.6,"qcPass":"合格","qcResult":54.6,"sedScore":54.6,"qcCertScore":0.0},{"region":"西安区域","project":"华州北控","factory":"华州区污水处理厂","opsTotal":82.0,"opsPass":"合格","opsResult":67.0,"maintPlanScore":20.0,"faultScore":20.0,"certScore":2.0,"workHourScore":20.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":65.812,"qcPass":"不合格","qcResult":45.812,"sedScore":45.812,"qcCertScore":0.0},{"region":"西安区域","project":"武功嘉诚","factory":"武功污水处理厂","opsTotal":57.608,"opsPass":"不合格","opsResult":42.608,"maintPlanScore":19.057,"faultScore":0.0,"certScore":2.222,"workHourScore":6.329,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":68.834,"qcPass":"不合格","qcResult":48.834,"sedScore":38.834,"qcCertScore":10.0},{"region":"西安区域","project":"渭南尚德","factory":"渭南污水处理厂","opsTotal":null,"opsPass":"未评价","opsResult":null,"maintPlanScore":20.0,"faultScore":0.0,"certScore":0.625,"workHourScore":0.0,"autoEngineerScore":null,"regionalEngineerScore":5.0,"qcTotal":null,"qcPass":"未评价","qcResult":null,"sedScore":null,"qcCertScore":0.0},{"region":"西安区域","project":"蒲城格瑞","factory":"蒲城污水处理厂","opsTotal":77.516,"opsPass":"合格","opsResult":62.516,"maintPlanScore":20.0,"faultScore":20.0,"certScore":1.111,"workHourScore":6.405,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":54.763,"qcPass":"不合格","qcResult":34.763,"sedScore":34.763,"qcCertScore":0.0},{"region":"西安区域","project":"西咸中天","factory":"西咸新区污水处理厂","opsTotal":86.299,"opsPass":"合格","opsResult":71.299,"maintPlanScore":20.0,"faultScore":20.0,"certScore":6.154,"workHourScore":10.145,"autoEngineerScore":10.0,"regionalEngineerScore":5.0,"qcTotal":38.983,"qcPass":"不合格","qcResult":18.983,"sedScore":18.983,"qcCertScore":0.0},{"region":"西安区域","project":"西安阎良","factory":"阎良污水处理厂","opsTotal":61.0,"opsPass":"不合格","opsResult":46.0,"maintPlanScore":20.0,"faultScore":20.0,"certScore":1.0,"workHourScore":0.0,"autoEngineerScore":0.0,"regionalEngineerScore":5.0,"qcTotal":70.437,"qcPass":"合格","qcResult":50.437,"sedScore":50.437,"qcCertScore":0.0}];
const automationRegions = ["全部", ...new Set([...automationJuneRows.map((row) => row.region), ...automationRegionBoardRows.map((row) => row.region)])];

const automationActualData = {"徐州创源":{"dataQualityData":0,"programRate":0.8909,"autoFunction":67.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.05,"workorderData":"/"},"南京荣泰":{"dataQualityData":0,"programRate":0.8364,"autoFunction":67,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"丹阳沃特":{"dataQualityData":0,"programRate":0.9,"autoFunction":71.7,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":0.3125,"workorderData":"/"},"太仓开发区":{"dataQualityData":0.0047,"programRate":0.8868,"autoFunction":66.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"昆山花桥":{"dataQualityData":0,"programRate":0.8788,"autoFunction":79.7,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.2083,"workorderData":"/"},"昆山北区":{"dataQualityData":0,"programRate":0.875,"autoFunction":91.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.1562,"workorderData":"/"},"昆山吴淞江":{"dataQualityData":0,"programRate":0.9082,"autoFunction":89.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.2593,"workorderData":"/"},"昆山张浦":{"dataQualityData":0,"programRate":0.8909,"autoFunction":86.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":0.9619,"staffData":-0.3333,"workorderData":"/"},"昆山陆家":{"dataQualityData":0,"programRate":0.8835,"autoFunction":80.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":0.9833,"staffData":-0.05,"workorderData":"/"},"徐州龙亭":{"dataQualityData":0,"programRate":0.65,"autoFunction":31.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.1481,"workorderData":"/"},"盐城开发区":{"dataQualityData":0,"programRate":0.8125,"autoFunction":88,"opsData":"不合格","labData":"不合格","nightData":"/","benefitData":0.9474,"staffData":-0.1429,"workorderData":"/"},"徐州新城区":{"dataQualityData":0.0019,"programRate":0.5,"autoFunction":29.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"徐州西区":{"dataQualityData":0.0022,"programRate":0.9394,"autoFunction":33,"opsData":"不合格","labData":"合格","nightData":"/","benefitData":1,"staffData":0.4667,"workorderData":"/"},"宜兴城市":{"dataQualityData":0,"programRate":0.25,"autoFunction":33.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.037,"workorderData":"/"},"宜兴城市三期":{"dataQualityData":0,"programRate":0.2157,"autoFunction":27,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":0.9444,"staffData":-0.5,"workorderData":"/"},"西安阎良":{"dataQualityData":0,"programRate":0.8689,"autoFunction":45.5,"opsData":"不合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.1,"workorderData":"/"},"冠县嘉诚":{"dataQualityData":0,"programRate":0.6667,"autoFunction":66.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"六合雄州":{"dataQualityData":0,"programRate":0.732,"autoFunction":74.75,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.2083,"workorderData":"/"},"冠县清泉":{"dataQualityData":0,"programRate":0.8333,"autoFunction":76.5,"opsData":"不合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.4,"workorderData":"/"},"不老河二期":{"dataQualityData":0,"programRate":0.8857,"autoFunction":55,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.1111,"workorderData":"/"},"南阳张岗":{"dataQualityData":0.0027,"programRate":0.8929,"autoFunction":31.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.0526,"workorderData":"/"},"安徽太和":{"dataQualityData":0,"programRate":0.7333,"autoFunction":57.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":0.875,"staffData":0.2,"workorderData":"/"},"盐城城南":{"dataQualityData":0,"programRate":0.9048,"autoFunction":74.5,"opsData":"不合格","labData":"合格","nightData":"/","benefitData":0.9524,"staffData":-0.2963,"workorderData":"/"},"江苏汇同":{"dataQualityData":0,"programRate":0.44,"autoFunction":43.5,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.0769,"workorderData":"/"},"宜兴新建":{"dataQualityData":0,"programRate":0,"autoFunction":50,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.0769,"workorderData":"/"},"枞阳亚同":{"dataQualityData":0,"programRate":0,"autoFunction":22,"opsData":"合格","labData":"合格","nightData":"/","benefitData":1,"staffData":-0.0588,"workorderData":"/"},"宜兴和桥":{"dataQualityData":0,"programRate":0.25,"autoFunction":35,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.1333,"workorderData":"/"},"宜兴徐舍":{"dataQualityData":0,"programRate":0.12,"autoFunction":34.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":-0.0769,"workorderData":"/"},"蒲城格瑞":{"dataQualityData":0,"programRate":0.3167,"autoFunction":52,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"武功嘉诚":{"dataQualityData":0,"programRate":0.5714,"autoFunction":60,"opsData":"不合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0,"workorderData":"/"},"华州北控":{"dataQualityData":0,"programRate":0.2,"autoFunction":30,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.1429,"workorderData":"/"},"西咸中天":{"dataQualityData":0.0037,"programRate":0.25,"autoFunction":30,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":0.8571,"staffData":0.1,"workorderData":"/"},"大冶城西北二期":{"dataQualityData":0,"programRate":0.7692,"autoFunction":83.5,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.1333,"workorderData":"/"},"临清碧水":{"dataQualityData":0,"programRate":0.5952,"autoFunction":49.5,"opsData":"不合格","labData":"合格","nightData":"/","benefitData":0.9048,"staffData":0.1,"workorderData":"/"},"泰州亚同":{"dataQualityData":0,"programRate":0.3902,"autoFunction":49.29,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":0.9231,"staffData":0.2105,"workorderData":"/"},"宜兴官林":{"dataQualityData":0,"programRate":0.3889,"autoFunction":36,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.1538,"workorderData":"/"},"徐州丁万河":{"dataQualityData":0,"programRate":0.9231,"autoFunction":35,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.3846,"workorderData":"/"},"阜宁水处理":{"dataQualityData":0.0034,"programRate":0.0714,"autoFunction":21,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.0588,"workorderData":"/"},"宜兴张渚":{"dataQualityData":0.003,"programRate":0.12,"autoFunction":23,"opsData":"合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":0.3333,"workorderData":"/"},"太原北控":{"dataQualityData":0,"programRate":0.4333,"autoFunction":6,"opsData":"不合格","labData":"不合格","nightData":"/","benefitData":1,"staffData":1.5,"workorderData":"/"}};

function automationMonthRows(month) {
  if (month === "6月") return automationJuneRows;
  const monthOffset = month === "5月" ? 0 : 1;
  return automationJuneRows.map((row, index) => {
    const delta = ((index % 7) - 2) * 0.6 + (index % 3 === 0 ? 1.4 : -0.3) + monthOffset * 0.8;
    const score = Math.max(18, Math.min(96, row.score - delta));
    return {
      ...row,
      score: Number(score.toFixed(1)),
      qualified: score >= 60 ? "合格" : "不合格",
      dataQuality: Number(Math.max(0, row.dataQuality - (index % 4 === 0 ? 0.5 : 0)).toFixed(1)),
      programRate: Number(Math.max(0, Math.min(100, row.programRate - delta * 1.8)).toFixed(1)),
      autoFunction: Number(Math.max(0, Math.min(100, row.autoFunction - delta * 1.2)).toFixed(1)),
    };
  });
}

function automationPreviousMonth(month) {
  return month === "6月" ? "5月" : "4月";
}

function automationFilteredRows(month, batch, region = "全部") {
  return automationMonthRows(month).filter((row) =>
    (batch === "全部" || row.batch === batch) &&
    (region === "全部" || row.region === region)
  );
}

function automationScoreClass(score) {
  if (score >= 80) return "excellent";
  if (score >= 60) return "qualified";
  return "risk";
}

const automationDetailMetrics = [
  { label: "数采质量", scoreKey: "dataQuality", dataKey: "dataQualityData", max: 15 },
  { label: "程控率", scoreKey: "programScore", dataKey: "programRate", max: 10, dataType: "percent" },
  { label: "自控功能", scoreKey: "autoScore", dataKey: "autoFunction", max: 25 },
  { label: "运行转运维", scoreKey: "opsScore", dataKey: "opsData", max: 10 },
  { label: "工艺化验转质控", scoreKey: "labScore", dataKey: "labData", max: 5 },
  { label: "夜间听班", scoreKey: "nightScore", dataKey: "nightData", max: 10 },
  { label: "设备自主保障", scoreKey: "benefitScore", dataKey: "benefitData", max: 5, dataType: "ratio" },
  { label: "人数目标偏差", scoreKey: "staffScore", dataKey: "staffData", max: 10, dataType: "signedPercent" },
  { label: "工时基线偏差", scoreKey: "workorderScore", dataKey: "workorderData", max: 10 },
];

function automationMetricDataValue(row, metric) {
  const actual = automationActualData[row.factory];
  if (actual && Object.prototype.hasOwnProperty.call(actual, metric.dataKey)) return actual[metric.dataKey];
  if (Object.prototype.hasOwnProperty.call(row, metric.dataKey)) return row[metric.dataKey];
  if (metric.dataKey === "dataQualityData") return row.dataQuality >= 15 ? "0" : "异常";
  if (metric.dataKey === "opsData") return row.opsScore > 0 ? "合格" : "不合格";
  if (metric.dataKey === "labData") return row.labScore > 0 ? "合格" : "不合格";
  if (metric.dataKey === "nightData") return row.nightScore > 0 ? "/" : "不合格";
  if (metric.dataKey === "benefitData") return row.benefitScore > 0 ? "100%" : "不足";
  if (metric.dataKey === "staffData") return row.staffScore >= 10 ? "达标" : "偏差";
  if (metric.dataKey === "workorderData") return row.workorderScore > 0 ? "达标" : "/";
  return row[metric.scoreKey] ?? "-";
}

function formatAutomationDetailValue(row, metric, mode, month = "6月") {
  if (mode === "delta") return formatAutomationDelta(row, metric, month);
  const value = mode === "data" ? automationMetricDataValue(row, metric) : row[metric.scoreKey];
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value !== "number") return value;
  if (mode === "data") {
    if (metric.dataType === "percent") return `${value.toFixed(1)}%`;
    if (metric.dataType === "ratio") return `${Math.round(value * 100)}%`;
    if (metric.dataType === "signedPercent") return `${value > 0 ? "+" : ""}${(value * 100).toFixed(1)}%`;
  }
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
}

function automationPreviousRow(row, month) {
  return automationMonthRows(automationPreviousMonth(month)).find((item) => item.factory === row.factory) || row;
}

function automationDeltaValue(row, metric, month) {
  const previous = automationPreviousRow(row, month);
  return Number(row[metric.scoreKey] || 0) - Number(previous[metric.scoreKey] || 0);
}

function formatAutomationDelta(row, metric, month = $("#automationMonthSelect")?.value || "6月") {
  const delta = automationDeltaValue(row, metric, month);
  if (Math.abs(delta) < 0.05) return "0";
  return `${delta > 0 ? "+" : ""}${delta.toFixed(1)}`;
}

function automationScoreDelta(row, month) {
  const previous = automationPreviousRow(row, month);
  return Number(row.score || 0) - Number(previous.score || 0);
}

function formatAutomationScoreValue(row, mode, month) {
  if (mode !== "delta") return row.score.toFixed(1);
  const delta = automationScoreDelta(row, month);
  if (Math.abs(delta) < 0.05) return "0";
  return `${delta > 0 ? "+" : ""}${delta.toFixed(1)}`;
}

function automationScoreCellClass(row, mode, month) {
  if (mode !== "delta") {
    if (row.score >= 70) return "score-pass";
    if (row.score >= 60) return "score-borderline";
    return "score-fail";
  }
  const delta = automationScoreDelta(row, month);
  if (delta > 0.05) return "cell-up";
  if (delta < -0.05) return "cell-down";
  return "cell-flat";
}

function automationMetricRiskClass(row, metric, mode = "score", month = "6月") {
  if (mode === "delta") {
    const delta = automationDeltaValue(row, metric, month);
    if (delta > 0.05) return "cell-up";
    if (delta < -0.05) return "cell-down";
    return "cell-flat";
  }
  const score = Number(row[metric.scoreKey] || 0);
  if (score >= metric.max) return "";
  return "cell-risk";
}

function averageValue(rows, key) {
  if (!rows.length) return 0;
  return rows.reduce((sum, row) => sum + Number(row[key] || 0), 0) / rows.length;
}

function averageDefined(rows, key) {
  const values = rows.map((row) => row[key]).filter((value) => typeof value === "number");
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function automationRegionBoardMonthRows(month) {
  if (month === "6月") return automationRegionBoardRows;
  return automationRegionBoardRows.map((row, index) => {
    const drift = ((index % 5) - 2) * 0.7;
    const shift = (value) => typeof value === "number" ? Number(Math.max(0, value - drift).toFixed(3)) : value;
    return {
      ...row,
      opsTotal: shift(row.opsTotal),
      opsResult: shift(row.opsResult),
      qcTotal: shift(row.qcTotal),
      qcResult: shift(row.qcResult),
      maintPlanScore: shift(row.maintPlanScore),
      faultScore: shift(row.faultScore),
      certScore: shift(row.certScore),
      workHourScore: shift(row.workHourScore),
      autoEngineerScore: shift(row.autoEngineerScore),
      regionalEngineerScore: shift(row.regionalEngineerScore),
      sedScore: shift(row.sedScore),
      qcCertScore: shift(row.qcCertScore),
    };
  });
}

function automationRegionBoardFilteredRows(month, region = "全部") {
  return automationRegionBoardMonthRows(month).filter((row) => region === "全部" || row.region === region);
}

const automationRegionLossMetrics = [
  ["维保计划", "maintPlanScore", 20],
  ["故障频度", "faultScore", 20],
  ["运维双证", "certScore", 10],
  ["维保工时", "workHourScore", 20],
  ["自控人员", "autoEngineerScore", 10],
  ["区域技师", "regionalEngineerScore", 5],
  ["SED质控", "sedScore", 60],
  ["质控双证", "qcCertScore", 20],
];

function automationCombinedScore(row) {
  const values = [row.opsTotal, row.qcTotal].filter((value) => typeof value === "number");
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatScore(value, digits = 1) {
  return typeof value === "number" ? value.toFixed(digits) : "-";
}

function findAutomationSummaryRow(regionRow, month, batch) {
  const rows = automationMonthRows(month);
  const matched = rows.filter((row) => row.factory === regionRow.project || row.fullName === regionRow.factory);
  if (batch !== "全部") return matched.find((row) => row.batch === batch) || null;
  return matched[0] || null;
}

function formatSummaryValue(row, key, digits = 1) {
  if (!row) return "-";
  const value = row[key];
  if (typeof value !== "number") return value ?? "-";
  return Number.isInteger(value) ? `${value}` : value.toFixed(digits);
}

function formatRegionDetailValue(row, key, digits = 1) {
  const value = row[key];
  if (typeof value !== "number") return value ?? "-";
  return Number.isInteger(value) ? `${value}` : value.toFixed(digits);
}

function stickyDetailCell(content, className = "") {
  return `<span class="${className}">${content}</span>`;
}

function projectLossItems(row, limit = 3) {
  return automationRegionLossMetrics
    .map(([label, key, max]) => ({ label, loss: typeof row[key] === "number" ? Number((max - row[key]).toFixed(1)) : null }))
    .filter((item) => item.loss !== null && item.loss > 0)
    .sort((a, b) => b.loss - a.loss)
    .slice(0, limit);
}

function automationRegionBoardMarkup(month = "6月", batch = "全部", region = "全部") {
  const rows = automationRegionBoardFilteredRows(month, region);
  const sorted = [...rows].sort((a, b) => automationCombinedScore(b) - automationCombinedScore(a));
  const opsPassCount = rows.filter((row) => row.opsPass === "合格").length;
  const qcPassCount = rows.filter((row) => row.qcPass === "合格").length;
  const avgOps = averageDefined(rows, "opsTotal");
  const avgQc = averageDefined(rows, "qcTotal");
  const riskRows = rows
    .map((row) => ({ ...row, lossItems: projectLossItems(row, 2) }))
    .filter((row) => row.lossItems.length)
    .sort((a, b) => b.lossItems[0].loss - a.lossItems[0].loss)
    .slice(0, 6);
  const regionRows = Object.values(rows.reduce((acc, row) => {
    acc[row.region] ||= { region: row.region, count: 0, opsPass: 0, qcPass: 0, scores: [] };
    acc[row.region].count += 1;
    acc[row.region].opsPass += row.opsPass === "合格" ? 1 : 0;
    acc[row.region].qcPass += row.qcPass === "合格" ? 1 : 0;
    const combined = automationCombinedScore(row);
    if (combined) acc[row.region].scores.push(combined);
    return acc;
  }, {})).map((item) => ({
    ...item,
    avg: item.scores.length ? item.scores.reduce((sum, value) => sum + value, 0) / item.scores.length : 0,
  })).sort((a, b) => b.avg - a.avg);
  const detailHeaders = [
    "项目", "总评分", "是否合格", "批次", "数采质量", "程控率得分", "程控率", "自控功能得分", "自控功能", "运行转运维总分", "工艺质控总分", "夜间听班", "设备自主保障", "人数目标偏差", "工时基线偏差",
    "运行转运维细分", "运行合格", "运行结果", "维保计划", "故障频度", "运维双证", "维保工时", "自控人员", "区域技师",
    "工艺质控细分", "质控合格", "质控结果", "SED质控", "质控双证", "主要失分"
  ];
  return `
    ${automationDashboardFiltersMarkup(month, batch, region)}
    <section class="automation-kpis region-board-kpis">
      <article><span>区域项目数</span><strong>${rows.length}</strong><small>${region === "全部" ? "全部区域" : region}</small></article>
      <article><span>运行转运维均分</span><strong>${avgOps.toFixed(1)}</strong><small>合格 ${opsPassCount}/${rows.length}</small></article>
      <article><span>工艺质控均分</span><strong>${avgQc.toFixed(1)}</strong><small>合格 ${qcPassCount}/${rows.length}</small></article>
      <article><span>双项合格项目</span><strong>${rows.filter((row) => row.opsPass === "合格" && row.qcPass === "合格").length}</strong><small>可作为区域标杆</small></article>
      <article><span>重点提升项目</span><strong>${rows.filter((row) => row.opsPass !== "合格" || row.qcPass !== "合格").length}</strong><small>需区域跟踪</small></article>
    </section>
    <section class="automation-region-layout">
      <article class="panel automation-panel">
        <div class="panel-head"><h2>区域综合排名</h2><span class="muted">运行转运维 + 工艺质控</span></div>
        <div class="region-score-list">
          ${regionRows.map((row, index) => `
            <div>
              <em>${index + 1}</em>
              <span>${row.region}<small>${row.count} 个项目 · 运行合格 ${row.opsPass} · 质控合格 ${row.qcPass}</small></span>
              <b>${row.avg.toFixed(1)}</b>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel automation-panel">
        <div class="panel-head"><h2>项目表现 TOP 6</h2><span class="muted">按双项综合得分</span></div>
        <div class="region-score-list">
          ${sorted.slice(0, 6).map((row, index) => `
            <div>
              <em>${index + 1}</em>
              <span>${row.project}<small>${row.region}</small></span>
              <b>${automationCombinedScore(row).toFixed(1)}</b>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel automation-panel">
        <div class="panel-head"><h2>主要失分项</h2><span class="muted">区域调度优先级</span></div>
        <div class="region-risk-list">
          ${riskRows.map((row) => `
            <div>
              <strong>${row.project}<small>${row.region}</small></strong>
              <span>${row.lossItems.map((item) => `${item.label} -${item.loss}`).join(" / ")}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
    <section class="panel region-detail-panel">
      <div class="panel-head"><h2>项目模式转型细项明细</h2><span class="muted">左侧项目与总分固定，右侧横向查看全部指标</span></div>
      <div class="region-detail-scroll">
      <div class="region-detail-table wide">
        <div class="region-detail-head">
          ${detailHeaders.map((header, index) => `<span class="${index < 3 ? `sticky-col sticky-${index + 1}` : ""}">${header}</span>`).join("")}
        </div>
        ${sorted.map((row) => {
          const summary = findAutomationSummaryRow(row, month, batch);
          return `
            <div class="region-detail-row">
              ${stickyDetailCell(`<b>${row.project}</b>`, "factory-cell sticky-col sticky-1")}
              ${stickyDetailCell(`<strong>${formatSummaryValue(summary, "score")}</strong>`, `sticky-col sticky-2 ${summary?.score >= 70 ? "score-pass" : summary?.score >= 60 ? "score-borderline" : "score-fail"}`)}
              ${stickyDetailCell(summary?.qualified || "-", `sticky-col sticky-3 ${summary?.qualified === "合格" ? "score-pass" : "score-fail"}`)}
              <span>${summary?.batch || "-"}</span>
              <span>${formatSummaryValue(summary, "dataQuality")}</span>
              <span>${formatSummaryValue(summary, "programScore")}</span>
              <span>${summary ? `${formatSummaryValue(summary, "programRate")}%` : "-"}</span>
              <span>${formatSummaryValue(summary, "autoScore")}</span>
              <span>${formatSummaryValue(summary, "autoFunction")}</span>
              <span>${formatSummaryValue(summary, "opsScore")}</span>
              <span>${formatSummaryValue(summary, "labScore")}</span>
              <span>${formatSummaryValue(summary, "nightScore")}</span>
              <span>${formatSummaryValue(summary, "benefitScore")}</span>
              <span>${formatSummaryValue(summary, "staffScore")}</span>
              <span>${formatSummaryValue(summary, "workorderScore")}</span>
              <span class="${row.opsPass === "合格" ? "score-pass" : "score-fail"}">${formatRegionDetailValue(row, "opsTotal")}</span>
              <span class="${row.opsPass === "合格" ? "score-pass" : "score-fail"}">${row.opsPass}</span>
              <span>${formatRegionDetailValue(row, "opsResult")}</span>
              <span>${formatRegionDetailValue(row, "maintPlanScore")}</span>
              <span>${formatRegionDetailValue(row, "faultScore")}</span>
              <span>${formatRegionDetailValue(row, "certScore")}</span>
              <span>${formatRegionDetailValue(row, "workHourScore")}</span>
              <span>${formatRegionDetailValue(row, "autoEngineerScore")}</span>
              <span>${formatRegionDetailValue(row, "regionalEngineerScore")}</span>
              <span class="${row.qcPass === "合格" ? "score-pass" : "score-fail"}">${formatRegionDetailValue(row, "qcTotal")}</span>
              <span class="${row.qcPass === "合格" ? "score-pass" : "score-fail"}">${row.qcPass}</span>
              <span>${formatRegionDetailValue(row, "qcResult")}</span>
              <span>${formatRegionDetailValue(row, "sedScore")}</span>
              <span>${formatRegionDetailValue(row, "qcCertScore")}</span>
              <span class="loss-tags">${projectLossItems(row, 2).map((item) => `<i>${item.label}-${item.loss}</i>`).join("") || "<i>暂无</i>"}</span>
            </div>
          `;
        }).join("")}
      </div>
      </div>
    </section>
  `;
}

function automationEmptySubpageMarkup(title) {
  return `
    <section class="panel automation-subpage-empty">
      <div class="empty-state">
        <span>${title}</span>
        <h2>${title}内容待补充</h2>
        <p>当前先预留页面入口，后续可在这里承接区域对比、区域穿透、任务清单、整改进度和责任人跟踪等内容。</p>
      </div>
    </section>
  `;
}

function automationHeaderMarkup(activeView) {
  const viewLabels = [
    ["dashboard", "评价看板"],
    ["region", "区域看板"],
    ["tasks", "任务总览"],
  ];
  return `
    <section class="automation-filter-card">
      <div class="automation-intro">
        <h2>单厂自动化评价看板</h2>
        <p class="muted">6月数据来自底稿，5月为当前原型模拟数据；评分取 F 列 100 分制结果，水厂名称取 D 列。</p>
      </div>
      <div class="automation-subnav">
        ${viewLabels.map(([id, label]) => `<button class="${activeView === id ? "active" : ""}" data-automation-subview="${id}" type="button">${label}</button>`).join("")}
      </div>
    </section>
  `;
}

function automationDashboardFiltersMarkup(month, batch, region) {
  return `
    <section class="automation-filter-row">
      <label>月份
        <select id="automationMonthSelect">
          <option ${month === "6月" ? "selected" : ""}>6月</option>
          <option ${month === "5月" ? "selected" : ""}>5月</option>
        </select>
      </label>
      <label>考核批次
        <select id="automationBatchSelect">
          ${automationBatches.map((item) => `<option value="${item}" ${item === batch ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label>区域筛选
        <select id="automationRegionSelect">
          ${automationRegions.map((item) => `<option value="${item}" ${item === region ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
    </section>
  `;
}

function automationDashboardMarkup(month = "6月", batch = "全部", detailMode = "score", subView = "dashboard", region = "全部") {
  const rows = automationFilteredRows(month, batch, region);
  const sorted = [...rows].sort((a, b) => b.score - a.score);
  const avgScore = averageValue(rows, "score");
  const passCount = rows.filter((row) => row.score >= 60).length;
  const passRate = rows.length ? Math.round((passCount / rows.length) * 100) : 0;
  const excellentCount = rows.filter((row) => row.score >= 80).length;
  const riskRows = sorted.filter((row) => row.score < 60);
  const topRows = sorted.slice(0, 5);
  const weakRows = [...sorted].reverse().slice(0, 5);
  const bandRows = [
    ["优秀", "80分及以上", excellentCount, "excellent"],
    ["合格", "60-79.9分", rows.filter((row) => row.score >= 60 && row.score < 80).length, "qualified"],
    ["不合格", "60分以下", riskRows.length, "risk"],
  ];
  if (subView === "region") {
    return `
      <div class="automation-dashboard">
        ${automationHeaderMarkup(subView)}
        ${automationRegionBoardMarkup(month, batch, region)}
      </div>
    `;
  }
  if (subView !== "dashboard") {
    return `
      <div class="automation-dashboard">
        ${automationHeaderMarkup(subView)}
        ${automationEmptySubpageMarkup(subView === "region" ? "区域看板" : "任务总览")}
      </div>
    `;
  }
  return `
    <div class="automation-dashboard">
      ${automationHeaderMarkup("dashboard")}
      ${automationDashboardFiltersMarkup(month, batch, region)}
      <section class="automation-kpis">
        <article><span>参评水厂</span><strong>${rows.length}</strong><small>${region === "全部" ? (batch === "全部" ? "全部批次" : batch) : region}</small></article>
        <article><span>平均得分</span><strong>${avgScore.toFixed(1)}</strong><small>${month} 100分制</small></article>
        <article><span>合格率</span><strong>${passRate}%</strong><small>${passCount}/${rows.length} 家合格</small></article>
        <article><span>优秀水厂</span><strong>${excellentCount}</strong><small>80分及以上</small></article>
        <article><span>不合格水厂</span><strong>${riskRows.length}</strong><small>低于60分</small></article>
      </section>
      <section class="automation-layout">
        <article class="panel automation-panel">
          <div class="panel-head"><h2>评分结构</h2><span class="muted">按得分区间统计</span></div>
          <div class="score-band-list">
            ${bandRows.map(([name, note, count, level]) => `
              <div class="score-band ${level}">
                <div><b>${name}</b><span>${note}</span></div>
                <strong>${count}</strong>
                <i style="width:${rows.length ? Math.max(8, (count / rows.length) * 100) : 0}%"></i>
              </div>
            `).join("")}
          </div>
        </article>
        <article class="panel automation-panel">
          <div class="panel-head"><h2>TOP 5 水厂</h2><span class="muted">按 F 列评分排序</span></div>
          <div class="automation-rank-list">
            ${topRows.map((row, index) => `
              <div><em>${index + 1}</em><span>${row.factory}<small>${row.region}</small></span><b>${row.score.toFixed(1)}</b></div>
            `).join("")}
          </div>
        </article>
        <article class="panel automation-panel">
          <div class="panel-head"><h2>重点提升清单</h2><span class="muted">低分优先关注</span></div>
          <div class="automation-rank-list weak">
            ${weakRows.map((row, index) => `
              <div><em>${index + 1}</em><span>${row.factory}<small>${row.region}</small></span><b>${row.score.toFixed(1)}</b></div>
            `).join("")}
          </div>
        </article>
      </section>
      <section class="panel automation-table-panel">
        <div class="panel-head automation-table-headline">
          <div>
            <h2>单厂自动化明细</h2>
            <span class="muted">${detailMode === "score" ? "当前展示各项得分" : detailMode === "data" ? "当前展示各项具体数据" : `当前展示较${automationPreviousMonth(month)}得分变化`}</span>
          </div>
          <div class="automation-mode-switch">
            <button class="${detailMode === "score" ? "active" : ""}" data-automation-detail-mode="score" type="button">得分展示</button>
            <button class="${detailMode === "data" ? "active" : ""}" data-automation-detail-mode="data" type="button">具体数据</button>
            <button class="${detailMode === "delta" ? "active" : ""}" data-automation-detail-mode="delta" type="button">环比变化</button>
          </div>
        </div>
        <div class="automation-table">
          <div class="automation-table-head">
            <span>水厂名称</span><span>批次</span><span>总评分</span>${automationDetailMetrics.map((metric) => `<span>${metric.label}</span>`).join("")}
          </div>
          ${sorted.map((row) => `
            <div class="automation-table-row ${automationScoreClass(row.score)}">
              <span class="factory-cell"><b>${row.factory}</b><small>${row.region}</small></span>
              <span>${row.batch}</span>
              <span class="${automationScoreCellClass(row, detailMode, month)}"><strong>${formatAutomationScoreValue(row, detailMode, month)}</strong></span>
              ${automationDetailMetrics.map((metric) => `<span class="${automationMetricRiskClass(row, metric, detailMode, month)}">${formatAutomationDetailValue(row, metric, detailMode, month)}</span>`).join("")}
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function intensiveAcceptanceMonthRows(month = "5月") {
  const base = intensiveAcceptanceRows["5月"];
  if (month === "5月") return base;
  const offset = month === "4月" ? -0.45 : -0.8;
  return base.map((row, rowIndex) => ({
    ...row,
    values: row.values.map(([region, value, score], index) => {
      if (typeof score !== "number") return [region, value, score];
      const nextScore = Number(Math.max(0, score + offset + ((rowIndex + index) % 3) * 0.2).toFixed(2));
      return [region, value, nextScore];
    }),
  }));
}

const intensiveProjectRows = {
  "5月": [
    { region: "菏泽区域公司", project: "巨野城北污水处理厂", shortName: "巨野城北", opsTotal: 80.7, opsPass: "合格", opsResult: 65.7, maintScore: 16.8, faultScore: 6.5, certScore: 7.5, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 79.5, qcPass: "合格", qcResult: 59.5, sedScore: 39.5, qcCertScore: 20, programRate: 0.9706, dataException: 0.002 },
    { region: "菏泽区域公司", project: "巨野城南污水处理厂", shortName: "巨野城南", opsTotal: 88.6, opsPass: "合格", opsResult: 73.6, maintScore: 18.8, faultScore: 20, certScore: 5, workHourScore: 14.7, instrumentScore: 10, engineerScore: 5, qcTotal: 66.0, qcPass: "不合格", qcResult: 46.0, sedScore: 46.0, qcCertScore: 0, programRate: 0.9707, dataException: 0 },
    { region: "菏泽区域公司", project: "泰安市污水处理厂", shortName: "泰安", opsTotal: 88.0, opsPass: "合格", opsResult: 73.0, maintScore: 20, faultScore: 20, certScore: 8, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 87.2, qcPass: "合格", qcResult: 67.2, sedScore: 55.2, qcCertScore: 12, programRate: 0.9744, dataException: 0 },
    { region: "菏泽区域公司", project: "菏泽市污水处理厂", shortName: "菏泽", opsTotal: 94.3, opsPass: "合格", opsResult: 79.3, maintScore: 20, faultScore: 20, certScore: 4.3, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 78.4, qcPass: "合格", qcResult: 58.4, sedScore: 43.4, qcCertScore: 15, programRate: 0.9139, dataException: 0.002 },
    { region: "菏泽区域公司", project: "鄄城县污水处理厂", shortName: "鄄城", opsTotal: 93.8, opsPass: "合格", opsResult: 78.8, maintScore: 20, faultScore: 20, certScore: 3.8, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 76.6, qcPass: "合格", qcResult: 56.6, sedScore: 46.6, qcCertScore: 10, programRate: 0.9286, dataException: 0.0026 },
    { region: "潍坊区域公司", project: "坊安污水处理厂", shortName: "坊安", opsTotal: 82.2, opsPass: "合格", opsResult: 67.2, maintScore: 8.2, faultScore: 20, certScore: 4, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 68.3, qcPass: "不合格", qcResult: 48.3, sedScore: 28.3, qcCertScore: 20, programRate: 0.8795, dataException: 0 },
    { region: "潍坊区域公司", project: "潍坊市坊子区污水处理厂", shortName: "潍坊坊子", opsTotal: 90.8, opsPass: "合格", opsResult: 75.8, maintScore: 18.7, faultScore: 20, certScore: 2.1, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 86.3, qcPass: "合格", qcResult: 66.3, sedScore: 46.3, qcCertScore: 20, programRate: 0.9306, dataException: 0.0014 },
    { region: "潍坊区域公司", project: "黄旗堡污水处理厂", shortName: "黄旗堡", opsTotal: 95.0, opsPass: "合格", opsResult: 80, maintScore: 20, faultScore: 20, certScore: 5, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 77.1, qcPass: "合格", qcResult: 57.1, sedScore: 37.1, qcCertScore: 20, programRate: 0.958, dataException: 0.0052 },
    { region: "杭湖区域公司", project: "余杭四期污水处理厂", shortName: "余杭四期", opsTotal: 96.9, opsPass: "合格", opsResult: 81.9, maintScore: 20, faultScore: 20, certScore: 6.9, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 84.4, qcPass: "合格", qcResult: 64.4, sedScore: 54.4, qcCertScore: 10, programRate: 0.8075, dataException: 0 },
    { region: "杭湖区域公司", project: "练市污水处理厂", shortName: "练市", opsTotal: 91.4, opsPass: "合格", opsResult: 76.4, maintScore: 20, faultScore: 20, certScore: 5, workHourScore: 16.4, instrumentScore: 10, engineerScore: 5, qcTotal: 82.6, qcPass: "合格", qcResult: 62.6, sedScore: 42.6, qcCertScore: 20, programRate: 0.9011, dataException: 0.0003 },
    { region: "杭湖区域公司", project: "菱湖污水处理厂", shortName: "菱湖", opsTotal: 79.0, opsPass: "合格", opsResult: 64.0, maintScore: 19.0, faultScore: 20, certScore: 0, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 73.7, qcPass: "合格", qcResult: 53.7, sedScore: 47.1, qcCertScore: 6.7, programRate: 0.9155, dataException: 0 },
    { region: "郑州业务区", project: "兰考县第三污水处理厂", shortName: "兰考第三", opsTotal: 90.5, opsPass: "合格", opsResult: 75.5, maintScore: 17.1, faultScore: 20, certScore: 3.3, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 82.7, qcPass: "合格", qcResult: 62.7, sedScore: 52.7, qcCertScore: 10, programRate: 0.9696, dataException: 0 },
    { region: "郑州业务区", project: "兰考县第二污水处理厂", shortName: "兰考第二", opsTotal: 85.0, opsPass: "合格", opsResult: 70.0, maintScore: 19.3, faultScore: 20, certScore: 5.7, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 95.1, qcPass: "合格", qcResult: 75.1, sedScore: 55.1, qcCertScore: 20, programRate: 0.8837, dataException: 0 },
    { region: "郑州业务区", project: "巩义市污水处理厂", shortName: "巩义", opsTotal: 78.5, opsPass: "合格", opsResult: 63.5, maintScore: 16.7, faultScore: 20, certScore: 1.7, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 61.4, qcPass: "不合格", qcResult: 41.4, sedScore: 24.2, qcCertScore: 17.1, programRate: 0.9702, dataException: 0 },
    { region: "郑州业务区", project: "濮阳市第三污水处理厂", shortName: "濮阳第三", opsTotal: 84.8, opsPass: "合格", opsResult: 69.8, maintScore: 20, faultScore: 19.8, certScore: 5, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 70.5, qcPass: "合格", qcResult: 50.5, sedScore: 43.9, qcCertScore: 6.7, programRate: 0.8985, dataException: 0 },
    { region: "郑州业务区", project: "通许县污水处理厂", shortName: "通许", opsTotal: 89.7, opsPass: "合格", opsResult: 74.7, maintScore: 17.2, faultScore: 20, certScore: 2.5, workHourScore: 20, instrumentScore: 10, engineerScore: 5, qcTotal: 56.1, qcPass: "不合格", qcResult: 36.1, sedScore: 36.1, qcCertScore: 0, programRate: 0.9245, dataException: 0 },
    { region: "东营滨州区域公司", project: "东营市东城北污水处理厂", shortName: "东营东城北", opsTotal: 83.3, opsPass: "合格", opsResult: 68.3, maintScore: 20, faultScore: 20, certScore: 3.3, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 63.0, qcPass: "不合格", qcResult: 43.0, sedScore: 36.3, qcCertScore: 6.7, programRate: 0.9515, dataException: 0.0028 },
    { region: "东营滨州区域公司", project: "利津县污水处理厂", shortName: "利津", opsTotal: 74.6, opsPass: "合格", opsResult: 59.6, maintScore: 20, faultScore: 11.0, certScore: 3.6, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 63.4, qcPass: "不合格", qcResult: 43.4, sedScore: 28.4, qcCertScore: 15, programRate: 0.6429, dataException: 0.005 },
    { region: "东营滨州区域公司", project: "博兴县湖滨镇污水处理厂", shortName: "博兴湖滨", opsTotal: 81.8, opsPass: "合格", opsResult: 66.8, maintScore: 19.3, faultScore: 20, certScore: 2.5, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 77.9, qcPass: "合格", qcResult: 57.9, sedScore: 37.9, qcCertScore: 20, programRate: 0.9068, dataException: 0.0029 },
    { region: "东营滨州区域公司", project: "博兴县第三污水处理厂", shortName: "博兴第三", opsTotal: 80.0, opsPass: "合格", opsResult: 65.0, maintScore: 20, faultScore: 20, certScore: 0, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 51.8, qcPass: "不合格", qcResult: 31.8, sedScore: 21.8, qcCertScore: 10, programRate: 0.9048, dataException: 0.0056 },
    { region: "东营滨州区域公司", project: "惠民县城北第二污水处理厂", shortName: "惠民城北第二", opsTotal: 79.5, opsPass: "合格", opsResult: 64.5, maintScore: 18.9, faultScore: 20, certScore: 6, workHourScore: 14.6, instrumentScore: 0, engineerScore: 5, qcTotal: 66.3, qcPass: "不合格", qcResult: 46.3, sedScore: 39.6, qcCertScore: 6.7, programRate: 1, dataException: 0 },
    { region: "东营滨州区域公司", project: "惠民县胡集第三污水处理厂", shortName: "惠民胡集第三", opsTotal: 83.4, opsPass: "合格", opsResult: 68.4, maintScore: 19.4, faultScore: 20, certScore: 4, workHourScore: 20, instrumentScore: 0, engineerScore: 5, qcTotal: 63.5, qcPass: "不合格", qcResult: 43.5, sedScore: 36.9, qcCertScore: 6.7, programRate: 0.9143, dataException: 0.0069 },
  ],
  "4月": [
    { project: "巨野城北污水处理厂", opsTotal: 92.3, qcTotal: 74.5, maintScore: 16.0, faultScore: 20, certScore: 6.3, workHourScore: 20, instrumentScore: 10, engineerScore: 5, sedScore: 34.5, qcCertScore: 20 },
    { project: "巨野城南污水处理厂", opsTotal: 88.0, qcTotal: 56.1, maintScore: 19.3, faultScore: 18.9, certScore: 2.5, workHourScore: 17.3, instrumentScore: 10, engineerScore: 5, sedScore: 36.1, qcCertScore: 0 },
    { project: "泰安市污水处理厂", opsTotal: 88.0, qcTotal: 77.2, maintScore: 20, faultScore: 20, certScore: 8, workHourScore: 20, instrumentScore: 0, engineerScore: 5, sedScore: 49.2, qcCertScore: 8 },
    { project: "菏泽市污水处理厂", opsTotal: 93.6, qcTotal: 72.5, maintScore: 20, faultScore: 20, certScore: 3.6, workHourScore: 20, instrumentScore: 10, engineerScore: 5, sedScore: 37.5, qcCertScore: 15 },
    { project: "鄄城县污水处理厂", opsTotal: 93.8, qcTotal: 71.3, maintScore: 20, faultScore: 20, certScore: 3.8, workHourScore: 20, instrumentScore: 10, engineerScore: 5, sedScore: 41.3, qcCertScore: 10 },
  ],
};

function scoreForRegion(row, region) {
  return row.values.find((item) => item[0] === region)?.[2];
}

function valueForRegion(row, region) {
  return row.values.find((item) => item[0] === region)?.[1];
}

function numericScores(rows, region) {
  return rows.map((row) => scoreForRegion(row, region)).filter((value) => typeof value === "number");
}

function intensiveRegionTotal(rows, region) {
  return numericScores(rows, region).reduce((sum, value) => sum + value, 0);
}

function intensiveRegionsForType(type = "acceptance") {
  if (type === "review") return window.INTENSIVE_REVIEW_SOURCE?.regions || [];
  return intensiveAcceptanceRegions;
}

function intensiveRulesForType(type = "acceptance") {
  if (type === "review") return window.INTENSIVE_REVIEW_SOURCE?.rules || intensiveRuleGroups;
  return intensiveRuleGroups;
}

function intensiveMonthRows(type = "acceptance", month = "5月") {
  if (type === "review") {
    const sourceRows = window.INTENSIVE_REVIEW_SOURCE?.rows || {};
    return sourceRows[month] || sourceRows["5月"] || [];
  }
  return intensiveAcceptanceMonthRows(month);
}

function intensiveRegionTotalForType(type, rows, region, month = "5月") {
  if (type === "review") {
    const total = window.INTENSIVE_REVIEW_SOURCE?.totals?.[month]?.[region];
    if (typeof total === "number") return total;
  }
  return intensiveRegionTotal(rows, region);
}

function intensiveRegionColumnLabel(type, regionName) {
  if (type !== "review") return regionName;
  return regionName.replace("区域公司", "").replace("业务区", "").replace("区域", "");
}

const intensiveRuleGroups = [
  {
    key: "A",
    title: "一把手变革意识与行为评价",
    weight: "10%",
    theme: "blue",
    rows: [
      ["区域总思想意识评价（权重6%）", "区域总集约化转型意愿强度", "全业态", "区域总（区域负责人）对本区域主动进行集约化转型意愿强弱", "通过“超出预期 / 符合预期 / 基本合格 / 需改进”及月度收评委打分，换算为百分制。", "6%"],
      ["区域总参与度评价（权重4%）", "区域总关键事项参与度", "全业态", "区域总在集约化转型过程中重要节点事项的参与程度", "重大事项包含规划评审、阶段性验收、终验、集团与大区会议等，缺席一次扣1分，集团级分享一次加1分。", "4%"],
    ],
  },
  {
    key: "B",
    title: "集约化模式转变评价",
    weight: "40%",
    theme: "green",
    rows: [
      ["厂端标准化构建评价（权重30%）", "核心单元程控率达标率", "市政污水", "区域内核心单元程控达标的污水厂数量 / 区域内污水厂总数", "污水厂核心单元程控率≥85%认定达标，该项得分=达标率×5。", "5%"],
      ["厂端标准化构建评价（权重30%）", "数采数据质量达标率", "市政污水", "区域内S+A类数据异常率达标的污水厂数量 / 区域内污水厂总数", "污水厂S+A类数据异常率≤5%认定达标，该项得分=达标率×5。", "5%"],
      ["厂端标准化构建评价（权重30%）", "运行转运维覆盖率", "市政污水", "运行转运维合格的污水厂数量 / 区域内污水厂总数", "依据运行转运维评价表，得分=覆盖率×10。", "10%"],
      ["厂端标准化构建评价（权重30%）", "工艺加化验转质控覆盖率", "市政污水", "工艺加化验转质控合格的污水厂数量 / 区域内污水厂总数", "依据工艺加化验转质控评价表，得分=覆盖率×5。", "5%"],
      ["厂端标准化构建评价（权重30%）", "供水厂标准化覆盖率", "供水", "供水厂标准化建设合格的供水厂数量 / 区域内供水厂总数", "如区域内有供水项目，则叠加5%权重，最终得分按百分制换算。", "附加5%"],
      ["厂端标准化构建评价（权重30%）", "夜间听班覆盖率", "市政污水", "夜间听班合格的污水厂数量 / 区域内污水厂总数", "依据夜间听班评价表，得分=覆盖率×5。", "5%"],
      ["区域集约化模式转变评价（权重10%）", "质控集约化覆盖率", "市政污水", "质控集约化转型合格的污水厂数量 / 区域内污水厂总数", "依据质控集约化评价表，得分=覆盖率×5。", "5%"],
      ["区域集约化模式转变评价（权重10%）", "设备集约化覆盖率", "市政污水", "设备集约化转型合格的污水厂数量 / 区域内污水厂总数", "依据设备集约化评价表，得分=覆盖率×5。", "5%"],
    ],
  },
  {
    key: "C",
    title: "人效提升评价",
    weight: "40%",
    theme: "orange",
    rows: [
      ["运营效率评价（权重15%）", "人均运营规模", "市政污水", "区域运营规模 / 区域实际人数", "对比集约前后提升，提升10%以上加分；2500-3000m3/d/人再得1分，≥3000m3/d/人再得2分，本项满分5分。", "5%"],
      ["运营效率评价（权重15%）", "人均创利", "市政污水", "区域净利润 / 区域实际人数", "对比集约前后人均创利提高得2分；达到60万元/人再得1分，每增加10万元/人加0.5分，本项满分5分。", "5%"],
      ["运营效率评价（权重15%）", "人事费用率", "市政污水", "人工薪酬 / 区域总收入", "人事费用率≤8%可得5分，每超过0.1%少1分；费用率较集约前下降0.5%以上可得1分。", "5%"],
      ["区域人数变化评价（权重10%）", "区域人数目标偏差率", "全业态", "（区域现状人数 - 区域标准人数）÷ 区域标准人数×100%", "偏差率≤0得10分；0-10%得6分；10-20%得4分；20-40%得2分；偏差率>40%原则上不得分。", "10%"],
      ["工单深化应用评价（权重15%）", "工时基线偏差率", "市政污水", "（区域工单工时 + 非工单有效任务工时 - 区域工时基线）÷ 区域工时基线×100%", "工时基线偏差率≤15%得10分；偏差率≥30%得0分。", "5%"],
      ["工单深化应用评价（权重15%）", "工单薪酬落地完成率", "市政污水", "区域工单薪酬达标水厂数量 / 区域污水厂总数", "水厂O序列运维岗薪酬结构中工单薪酬占比不少于50%认定合格，按完成率计分，满分10分。", "10%"],
    ],
  },
  {
    key: "D",
    title: "区域可持续发展评价",
    weight: "10%",
    theme: "purple",
    rows: [
      ["运营体量提升评价", "运营管理体量提升", "市政污水", "区域进行集约化转型前后，市政污水运营规模增长量", "提升1万吨+1分；提升5万吨+3分；提升10万吨+5分。", "加分项5%"],
      ["专业化服务能力评价（权重10%）", "培育专业化服务能力", "市政污水", "设备大修重置新增自主实施能力的服务事项 / 区域内大修重置新增服务事项", "系统内数值≥95%得10分；75%-95%之间按赋值计分；<75%得0分。", "10%"],
      ["增量项目拓展能力评价", "云链端新范式TOM获取数量", "全业态", "区域集约化转型前后，获取云链端新范式TOM数量", "获取1项+5分，获取2项+10分。", "加分项10%"],
      ["增量项目拓展能力评价", "厂网一体化推进能力", "全业态", "厂网一体化业务能力评分", "完成收资并形成下一步行动举措得3分；完成厂网一体化试点打造再得2分。", "加分项5%"],
    ],
  },
];

function intensiveDisplayValue(value, mode = "score") {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value !== "number") return value;
  if (mode === "value" && value > 0 && value <= 1) return `${Math.round(value * 100)}%`;
  return Number.isInteger(value) ? `${value}` : value.toFixed(1);
}

function intensivePreviousMonth(month = "5月") {
  return { "5月": "4月", "4月": "3月", "3月": "2月" }[month] || "4月";
}

function intensiveScoreDelta(row, region, month, type = "acceptance") {
  const current = scoreForRegion(row, region);
  if (typeof current !== "number") return null;
  const previousRows = intensiveMonthRows(type, intensivePreviousMonth(month));
  const previousRow = previousRows.find((item) => item.metric === row.metric && item.level2 === row.level2);
  const previous = previousRow ? scoreForRegion(previousRow, region) : null;
  if (typeof previous !== "number") return null;
  return Number((current - previous).toFixed(2));
}

function intensiveTotalDelta(region, month, type = "acceptance") {
  const currentRows = intensiveMonthRows(type, month);
  const previousMonth = intensivePreviousMonth(month);
  const previousRows = intensiveMonthRows(type, previousMonth);
  const current = intensiveRegionTotalForType(type, currentRows, region, month);
  const previous = intensiveRegionTotalForType(type, previousRows, region, previousMonth);
  return Number((current - previous).toFixed(1));
}

function intensiveDisplayMetric(row, region, mode, month, type = "acceptance") {
  if (mode === "value") return intensiveDisplayValue(valueForRegion(row, region), "value");
  if (mode === "delta") {
    const delta = intensiveScoreDelta(row, region, month, type);
    if (delta === null) return "-";
    return `${delta > 0 ? "+" : ""}${Number.isInteger(delta) ? delta : delta.toFixed(1)}`;
  }
  return intensiveDisplayValue(scoreForRegion(row, region), "score");
}

function intensiveMetricClass(row, region, mode, month, type = "acceptance") {
  if (mode === "delta") {
    const delta = intensiveScoreDelta(row, region, month, type);
    if (delta === null || delta === 0) return "delta-flat";
    return delta > 0 ? "delta-up" : "delta-down";
  }
  return mode === "score" ? acceptanceScoreClass(scoreForRegion(row, region)) : "";
}

function intensiveGroupedSections(rows) {
  return rows.reduce((groups, row) => {
    let level1Group = groups.find((item) => item.level1 === row.level1);
    if (!level1Group) {
      level1Group = { level1: row.level1, level2Groups: [] };
      groups.push(level1Group);
    }
    let level2Group = level1Group.level2Groups.find((item) => item.level2 === row.level2);
    if (!level2Group) {
      level2Group = { level2: row.level2, rows: [] };
      level1Group.level2Groups.push(level2Group);
    }
    level2Group.rows.push(row);
    return groups;
  }, []);
}

function intensiveSubjectHeaderMarkup(type, active = "dashboard") {
  const labels = [
    ["rules", "评价规则"],
    ["dashboard", "评价看板"],
    ["region", "区域看板"],
    ["tasks", "任务总览"],
  ];
  return `
    <section class="automation-filter-card intensive-subject-card">
      <div class="automation-intro">
        <h2>${type === "review" ? "集约化回顾" : "集约化验收"}</h2>
        <p class="muted">围绕区域层级指标、区域得分与整改任务形成月度评价闭环。</p>
      </div>
      <div class="automation-subnav intensive-subnav">
        ${labels.map(([id, label]) => `<button class="${active === id ? "active" : ""}" data-intensive-subview="${id}" data-intensive-type="${type}" type="button">${label}</button>`).join("")}
      </div>
    </section>
  `;
}

function intensiveMonthFilterMarkup(month, type, mode, region = "大区") {
  const regions = intensiveRegionsForType(type);
  return `
    <section class="automation-filter-row intensive-filter-row">
      <label>月份
        <select id="intensiveMonthSelect">
          ${["5月", "4月", "3月"].map((item) => `<option ${item === month ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <label>区域筛选
        <select id="intensiveRegionSelect">
          ${["大区", ...regions].map((item) => `<option value="${item}" ${item === region ? "selected" : ""}>${item}</option>`).join("")}
        </select>
      </label>
      <div class="automation-mode-switch intensive-inline-switch">
        <button class="${mode === "score" ? "active" : ""}" data-intensive-mode="score" data-intensive-type="${type}" type="button">得分展示</button>
        <button class="${mode === "value" ? "active" : ""}" data-intensive-mode="value" data-intensive-type="${type}" type="button">具体数值</button>
        <button class="${mode === "delta" ? "active" : ""}" data-intensive-mode="delta" data-intensive-type="${type}" type="button">得分环比</button>
      </div>
    </section>
  `;
}

function intensiveRulesMarkup(type) {
  const ruleGroups = intensiveRulesForType(type);
  return `
    <section class="panel intensive-rules-panel intensive-rules-overview">
      <div class="rules-hero">
        <div>
          <h2>${type === "review" ? "集约化回顾" : "集约化验收"}评价规则一页总览</h2>
          <p>评价维度 / 指标规则 / 计分口径</p>
        </div>
        <strong>红线要求：如发生生产安全事故，当次考核不通过</strong>
      </div>
      <div class="rules-overview-table">
        ${ruleGroups.map((group) => `
          <article class="rule-group ${group.theme}">
            <div class="rule-group-title">
              <em>${group.key}</em>
              <div><strong>${group.title}</strong><span>权重 ${group.weight}</span></div>
            </div>
            <div class="rule-group-table">
              <div class="rule-head"><span>二级指标</span><span>三级指标</span><span>评价业态</span><span>指标定义</span><span>评分说明</span><span>权重</span></div>
              ${group.rows.map((row) => `
                <div class="rule-row">
                  ${row.map((cell) => `<span>${cell}</span>`).join("")}
                </div>
              `).join("")}
            </div>
          </article>
        `).join("")}
        <div class="rule-total"><span>总计</span><strong>100%</strong></div>
      </div>
    </section>
  `;
}

function intensiveGroupRows(rows) {
  return rows.map((row, index) => ({
    ...row,
    showLevel1: row.level1 !== rows[index - 1]?.level1,
    showLevel2: row.level2 !== rows[index - 1]?.level2,
  }));
}

function acceptanceScoreClass(score) {
  if (typeof score !== "number") return "";
  if (score <= 0) return "score-fail";
  if (score < 4) return "score-borderline";
  return "score-pass";
}

function intensiveReviewMetricName(row) {
  return String(row.metric || "").replace(/\s*\/\s*[\d.]+%?$/g, "");
}

function intensiveReviewWeightLabel(weight) {
  if (typeof weight === "number") return `${Math.round(weight * 100)}%`;
  const text = String(weight || "");
  const numeric = Number(text);
  if (!Number.isNaN(numeric) && numeric > 0 && numeric <= 1) return `${Math.round(numeric * 100)}%`;
  return text || "-";
}

function intensiveReviewAreaDetailMarkup(rows, regions, mode, month) {
  return `
    <section class="panel acceptance-detail-panel review-detail-panel">
      <div class="panel-head">
        <div><h2>大区集约化回顾明细</h2><span class="muted">按你提供的表格样式展示：第一行指标与区域，第二行对应得分</span></div>
      </div>
      <div class="review-sheet-list">
        ${intensiveGroupedSections(rows).map((level1) => `
          <article class="review-sheet-group">
            <header><strong>${level1.level1}</strong><span>${level1.level2Groups.reduce((sum, group) => sum + group.rows.length, 0)} 项指标</span></header>
            ${level1.level2Groups.map((level2) => `
              <section class="review-sheet-section">
                <div class="review-sheet-section-title">${level2.level2}</div>
                ${level2.rows.map((row) => `
                  <div class="review-sheet-table">
                    <div class="review-sheet-head">
                      <span>三级指标</span><span>权重</span>${regions.map((regionName) => `<span title="${regionName}">${intensiveRegionColumnLabel("review", regionName)}</span>`).join("")}
                    </div>
                    <div class="review-sheet-row">
                      <span title="${intensiveReviewMetricName(row)}">${intensiveReviewMetricName(row)}</span>
                      <span>${intensiveReviewWeightLabel(row.weight)}</span>
                      ${regions.map((regionName) => `<span class="${intensiveMetricClass(row, regionName, mode, month, "review")}">${intensiveDisplayMetric(row, regionName, mode, month, "review")}</span>`).join("")}
                    </div>
                  </div>
                `).join("")}
              </section>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function intensiveAreaDetailMarkup(rows, regions, mode, month, type = "acceptance") {
  if (type === "review") return intensiveReviewAreaDetailMarkup(rows, regions, mode, month);
  const title = type === "review" ? "大区集约化回顾明细" : "大区集约化验收明细";
  return `
    <section class="panel acceptance-detail-panel ${type === "review" ? "review-detail-panel" : ""}">
      <div class="panel-head">
        <div><h2>${title}</h2><span class="muted">按一级、二级指标合并展示，区域列展示${mode === "score" ? "得分" : mode === "delta" ? `较${intensivePreviousMonth(month)}得分变化` : "具体数值"}</span></div>
      </div>
      <div class="acceptance-group-table area ${type === "review" ? "review-area-table" : ""}">
        ${intensiveGroupedSections(rows).map((level1) => `
          <article class="acceptance-indicator-group">
            <header><strong>${level1.level1}</strong><span>${level1.level2Groups.reduce((sum, group) => sum + group.rows.length, 0)} 项指标</span></header>
            ${level1.level2Groups.map((level2) => `
              <section class="acceptance-subgroup">
                <div class="acceptance-subtitle">${level2.level2}</div>
                <div class="acceptance-metric-head">
                  <span>三级评价指标</span><span>权重</span>${regions.map((regionName) => `<span title="${regionName}">${intensiveRegionColumnLabel(type, regionName)}</span>`).join("")}
                </div>
                ${level2.rows.map((row) => `
                  <div class="acceptance-metric-row">
                    <span>${row.metric}</span><span>${row.weight}</span>
                    ${regions.map((regionName) => `<span class="${intensiveMetricClass(row, regionName, mode, month, type)}">${intensiveDisplayMetric(row, regionName, mode, month, type)}</span>`).join("")}
                  </div>
                `).join("")}
              </section>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function intensiveSingleRegionDetailMarkup(rows, region, mode, month, selectedTotal, type = "acceptance") {
  return `
    <section class="panel single-acceptance-panel">
      <div class="panel-head">
        <div><h2>${region} · 单区域维度得分</h2><span class="muted">按一级、二级指标合并展示，当前为${mode === "score" ? "得分展示" : mode === "delta" ? `较${intensivePreviousMonth(month)}得分变化` : "具体数值"}</span></div>
        <b>${selectedTotal.toFixed(1)} 分</b>
      </div>
      <div class="acceptance-group-table single">
        ${intensiveGroupedSections(rows).map((level1) => `
          <article class="acceptance-indicator-group">
            <header><strong>${level1.level1}</strong><span>${level1.level2Groups.reduce((sum, group) => sum + group.rows.length, 0)} 项指标</span></header>
            ${level1.level2Groups.map((level2) => `
              <section class="acceptance-subgroup">
                <div class="acceptance-subtitle">${level2.level2}</div>
                <div class="acceptance-metric-head">
                  <span>三级评价指标</span><span>数值</span><span>${mode === "delta" ? "得分环比" : "得分"}</span>
                </div>
                ${level2.rows.map((row) => `
                  <div class="acceptance-metric-row">
                    <span>${row.metric}</span>
                    <span>${intensiveDisplayValue(valueForRegion(row, region), "value")}</span>
                    <span class="${intensiveMetricClass(row, region, mode === "value" ? "score" : mode, month, type)}">${intensiveDisplayMetric(row, region, mode === "value" ? "score" : mode, month, type)}</span>
                  </div>
                `).join("")}
              </section>
            `).join("")}
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

const intensiveProjectMetrics = [
  { group: "运行转运维", label: "运行总分", key: "opsTotal", threshold: 70 },
  { group: "运行转运维", label: "结果评价", key: "opsResult", threshold: 51 },
  { group: "运行转运维", label: "设备维保计划", key: "maintScore", max: 20 },
  { group: "运行转运维", label: "故障频度", key: "faultScore", max: 20 },
  { group: "运行转运维", label: "运维双证", key: "certScore", max: 10 },
  { group: "运行转运维", label: "维保工时", key: "workHourScore", max: 20 },
  { group: "运行转运维", label: "自控人员", key: "instrumentScore", max: 10 },
  { group: "运行转运维", label: "区域技师", key: "engineerScore", max: 5 },
  { group: "工艺化验转质控", label: "质控总分", key: "qcTotal", threshold: 70 },
  { group: "工艺化验转质控", label: "结果评价", key: "qcResult", threshold: 48 },
  { group: "工艺化验转质控", label: "SED质控", key: "sedScore", max: 60 },
  { group: "工艺化验转质控", label: "质控双证", key: "qcCertScore", max: 20 },
  { group: "数采程控", label: "程控率", key: "programRate", value: true, pass: (value) => value >= 0.85 },
  { group: "数采程控", label: "异常率", key: "dataException", value: true, pass: (value) => value <= 0.05 },
];

function intensiveProjectRowsFor(month = "5月", region = "菏泽区域公司") {
  const rows = (intensiveProjectRows[month] || intensiveProjectRows["5月"]).map((row) => ({
    ...row,
    region: row.region || "菏泽区域公司",
    shortName: row.shortName || row.project.replace(/(污水处理厂|污水厂|水厂)$/g, "").replace("市", ""),
  }));
  return region === "大区" ? rows : rows.filter((row) => row.region === region);
}

function intensiveProjectPrevious(projectName) {
  return (intensiveProjectRows["4月"] || []).find((row) => row.project === projectName);
}

function intensiveProjectMetricDisplay(row, metric, mode) {
  const value = row[metric.key];
  if (value === null || value === undefined) return "-";
  if (mode === "delta") {
    const previous = intensiveProjectPrevious(row.project)?.[metric.key];
    if (typeof value !== "number" || typeof previous !== "number") return "-";
    const delta = Number((value - previous).toFixed(1));
    return `${delta > 0 ? "+" : ""}${delta}`;
  }
  if (mode === "value" && metric.value) {
    if (metric.key === "dataException") return `${(value * 100).toFixed(2)}%`;
    return `${(value * 100).toFixed(1)}%`;
  }
  if (mode === "value") return typeof value === "number" ? value.toFixed(1) : value;
  if (metric.value) return metric.key === "dataException" ? `${(value * 100).toFixed(2)}%` : `${(value * 100).toFixed(1)}%`;
  return typeof value === "number" ? value.toFixed(1) : value;
}

function intensiveProjectMetricClass(row, metric, mode) {
  const value = row[metric.key];
  if (mode === "delta") {
    const previous = intensiveProjectPrevious(row.project)?.[metric.key];
    if (typeof value !== "number" || typeof previous !== "number") return "delta-flat";
    const delta = value - previous;
    if (delta === 0) return "delta-flat";
    if (metric.key === "dataException") return delta < 0 ? "delta-up" : "delta-down";
    return delta > 0 ? "delta-up" : "delta-down";
  }
  if (metric.pass && typeof value === "number") return metric.pass(value) ? "score-pass" : "score-fail";
  if (typeof metric.threshold === "number" && typeof value === "number") return value >= metric.threshold ? "score-pass" : "score-fail";
  if (typeof metric.max === "number" && typeof value === "number") return value >= metric.max ? "score-pass" : "score-fail";
  if (metric.value) return "score-pass";
  if (typeof value !== "number") return "";
  return value >= 70 ? "score-pass" : "score-fail";
}

function intensiveProjectStatusClass(status) {
  return status === "合格" ? "score-pass" : "score-fail";
}

function intensiveProjectAverage(rows, key) {
  const values = rows.map((row) => row[key]).filter((value) => typeof value === "number");
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function intensiveProjectRegionBoardMarkup(type = "acceptance", month = "5月", mode = "score", region = "菏泽区域公司") {
  const selectedRegion = region === "大区" ? "菏泽区域公司" : region;
  const rows = intensiveProjectRowsFor(month, selectedRegion);
  const avgOps = intensiveProjectAverage(rows, "opsTotal");
  const avgQc = intensiveProjectAverage(rows, "qcTotal");
  const passCount = rows.filter((row) => row.opsPass === "合格" && row.qcPass === "合格").length;
  return `
    ${intensiveMonthFilterMarkup(month, type, mode, selectedRegion)}
    <section class="acceptance-kpis project-region-kpis">
      <article><span>当前区域</span><strong>${selectedRegion}</strong><small>${month}项目层级</small></article>
      <article><span>项目数量</span><strong>${rows.length}</strong><small>当前筛选项目</small></article>
      <article><span>运行转运维均分</span><strong>${avgOps.toFixed(1)}</strong><small>合格 ${rows.filter((row) => row.opsPass === "合格").length}/${rows.length}</small></article>
      <article><span>工艺质控均分</span><strong>${avgQc.toFixed(1)}</strong><small>双项合格 ${passCount}/${rows.length}</small></article>
    </section>
    <section class="panel intensive-project-panel">
      <div class="panel-head">
        <div><h2>${selectedRegion} · 项目层级明细</h2><span class="muted">点击项目名称查看整改措施清单；当前展示${mode === "score" ? "得分" : mode === "delta" ? "较4月得分变化" : "具体数值"}</span></div>
      </div>
      <div class="intensive-project-table">
        <div class="intensive-project-head">
          <span class="sticky-project-col">项目</span><span>运行转运维状态</span><span>工艺化验转质控状态</span>
          ${intensiveProjectMetrics.map((metric) => `<span>${metric.label}</span>`).join("")}
        </div>
        ${rows.map((row) => `
          <div class="intensive-project-row">
            <button class="project-name-btn sticky-project-col" data-intensive-project-task="${row.project}" data-intensive-project-region="${row.region}" type="button">
              <strong>${row.shortName}</strong><small>${row.project}</small>
            </button>
            <span class="${intensiveProjectStatusClass(row.opsPass)}">${row.opsPass}</span>
            <span class="${intensiveProjectStatusClass(row.qcPass)}">${row.qcPass}</span>
            ${intensiveProjectMetrics.map((metric) => `<span class="${intensiveProjectMetricClass(row, metric, mode)}">${intensiveProjectMetricDisplay(row, metric, mode)}</span>`).join("")}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderIntensiveProjectTaskModal(projectName, regionName) {
  $("#intensiveProjectTaskModal")?.remove();
  const tasks = [
    ["运行转运维短板", "设备维保计划、故障频度或维保工时存在扣分项", "补齐运行记录、维保计划和工单证据，形成专项整改清单", "6月1日", "6月10日", "设备负责人", "厂站运行班组", "区域集约化负责人", "恢复至合格线以上", "待审核", "未提交"],
    ["工艺质控短板", "质控结果或SED质控得分低于区域要求", "复核化验转质控资料、补充过程照片和复核说明", "6月3日", "6月15日", "资料专员", "资料管理员", "运营管理部", "质控得分较上月不下降", "通过", "待审核"],
    ["数采程控闭环", "程控率或数据异常率需要持续跟踪", "核对数采点位、异常数据和自动化参数，提交月度说明", "6月5日", "6月20日", "项目负责人", "自控专员", "区域技术负责人", "数据质量稳定达标", "返回修改", "未提交"],
  ];
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="intensiveProjectTaskModal">
      <section class="supervision-measure-modal intensive-task-modal">
        <header>
          <div>
            <h2>${projectName} · 整改措施清单</h2>
            <p class="muted">${regionName} · 项目提报后，经区域审核、大区审核通过后进入年度任务池。</p>
          </div>
          <button class="icon-close" data-close-intensive-project-task type="button">×</button>
        </header>
        <div class="supervision-measure-table">
          <div class="measure-head">
            <span>整改原因</span><span>整改措施</span><span>预计开始时间</span><span>预计完成时间</span><span>负责人</span><span>整改人</span><span>协助人</span><span>整改完成目标</span><span>区域审核结果</span><span>大区审核结果</span>
          </div>
          ${tasks.map((task) => `
            <div class="measure-row">
              ${task.map((item, index) => `<span class="${index >= 8 ? "review-state" : ""}">${item}</span>`).join("")}
            </div>
          `).join("")}
        </div>
        <footer>
          <button class="ghost-btn" data-close-intensive-project-task type="button">关闭</button>
          <button class="task-create-btn" data-open-new-supervision-task data-task-project="${projectName}" data-task-region="${regionName}" type="button">新建任务</button>
          <button class="primary-btn" data-close-intensive-project-task type="button">提交审核</button>
        </footer>
      </section>
    </div>
  `);
}

const intensiveTaskMonths = Array.from({ length: 12 }, (_, index) => `${index + 1}月`);
const intensiveTaskToday = new Date("2026-07-05T00:00:00");

function intensiveTasksForType(type = "acceptance") {
  return window.INTENSIVE_TASK_SOURCE?.[type] || [];
}

function intensiveTaskSpecialty(task = {}) {
  const text = `${task.specialty || ""} ${task.task || ""} ${task.metric || ""} ${task.measure || ""} ${task.target || ""}`;
  if (/自控|程控|数采|自动化/.test(text)) return "自控";
  if (/人才|技能|双证|取证|培训|岗位/.test(text)) return "人才技能";
  if (/人效|人均|人员|人数|人事|运营规模|创利/.test(text)) return "人效";
  if (/工单|薪酬|工时/.test(text)) return "工单薪酬";
  if (/夜间|听班/.test(text)) return "夜间听班";
  if (/设备|维保|故障|SED/.test(text)) return "设备质量";
  if (/ROM|厂网|TOM|一体化|云链/.test(text)) return "ROM厂网一体化";
  return "运行质量";
}

function filterIntensiveTasksBySpecialty(tasks, specialty = "全部") {
  if (!specialty || specialty === "全部") return tasks;
  return tasks.filter((task) => intensiveTaskSpecialty(task) === specialty);
}

function parseTaskDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function taskMonthNumber(value, fallback = 7) {
  const date = parseTaskDate(value);
  return date ? date.getMonth() + 1 : fallback;
}

function intensiveTaskStatusKey(task) {
  const status = task.status || "";
  const progress = Number(task.progress || 0);
  const endDate = parseTaskDate(task.end);
  if (status.includes("逾期")) return "overdue";
  if (progress >= 100 || status.includes("完成")) return "done";
  if (endDate && endDate < intensiveTaskToday && progress < 100) return "overdue";
  return "doing";
}

function intensiveTaskStatusLabel(statusKey) {
  return { done: "已完成", doing: "进行中", overdue: "逾期" }[statusKey] || "进行中";
}

function intensiveTaskOwner(task) {
  return (task.owner || "待明确").split("；")[0];
}

function intensiveTaskHoverTip(task, statusKey) {
  return `任务：${task.task}\n当前状态：${intensiveTaskStatusLabel(statusKey)}\n完成进度：${task.progress}%\n负责人：${intensiveTaskOwner(task)}\n计划周期：${task.start} 至 ${task.end}`;
}

function intensiveTaskRegions(type, specialty = "全部") {
  return [...new Set(filterIntensiveTasksBySpecialty(intensiveTasksForType(type), specialty).map((task) => task.region))];
}

function intensiveTasksByRegion(type, regionName, specialty = "全部") {
  return filterIntensiveTasksBySpecialty(intensiveTasksForType(type), specialty).filter((task) => task.region === regionName);
}

function summarizeMonthlyTasks(tasks, monthIndex) {
  const activeTasks = tasks.filter((task) => {
    const start = taskMonthNumber(task.start, 1);
    const end = taskMonthNumber(task.end, start);
    return monthIndex >= start && monthIndex <= end;
  });
  const counts = activeTasks.reduce((acc, task) => {
    acc[intensiveTaskStatusKey(task)] += 1;
    return acc;
  }, { done: 0, doing: 0, overdue: 0 });
  const status = counts.overdue ? "overdue" : counts.doing ? "doing" : counts.done ? "done" : "empty";
  return {
    total: activeTasks.length,
    counts,
    status,
    names: activeTasks.slice(0, 4).map((task) => `· ${task.task}`).join("\n"),
  };
}

function intensiveTaskTooltip(monthLabel, summary) {
  if (!summary.total) return `${monthLabel}\n暂无任务`;
  return `${monthLabel}\n任务总数 ${summary.total} 项\n已完成 ${summary.counts.done} 项\n进行中 ${summary.counts.doing} 项\n逾期 ${summary.counts.overdue} 项\n${summary.names}`;
}

function intensiveTaskStats(tasks) {
  const counts = tasks.reduce((acc, task) => {
    acc[intensiveTaskStatusKey(task)] += 1;
    return acc;
  }, { done: 0, doing: 0, overdue: 0 });
  return {
    total: tasks.length,
    done: counts.done,
    doing: counts.doing,
    overdue: counts.overdue,
  };
}

function intensiveTaskOverviewMarkup(type = "acceptance", specialty = "全部") {
  const rows = intensiveTaskRegions(type, specialty).map((region) => ({ region, tasks: intensiveTasksByRegion(type, region, specialty) }));
  const allTasks = rows.flatMap((row) => row.tasks);
  const stats = intensiveTaskStats(allTasks);
  return `
    <section class="acceptance-kpis intensive-task-kpis">
      <article><span>任务总数</span><strong>${stats.total}</strong><small>${type === "review" ? "回顾评价任务" : "25年集约化建设任务"}</small></article>
      <article><span>进行中</span><strong>${stats.doing}</strong><small>按计划周期跟踪</small></article>
      <article><span>已完成</span><strong>${stats.done}</strong><small>完成度100%或状态完成</small></article>
      <article><span>逾期任务</span><strong>${stats.overdue}</strong><small>逾期或超计划未完成</small></article>
    </section>
    <section class="panel intensive-task-board">
      <div class="panel-head">
        <div>
          <h2>${type === "review" ? "集约化回顾" : "集约化验收"} · 年度任务总览</h2>
          <span class="muted">点击区域名称进入该区域任务清单；鼠标移到月份色块查看当月任务情况。</span>
        </div>
        <div class="task-legend"><span><i class="done"></i>已完成</span><span><i class="doing"></i>进行中</span><span><i class="overdue"></i>逾期</span></div>
      </div>
      <div class="intensive-task-filter-row">
        <label>
          <span>专项筛选</span>
          <select id="intensiveTaskSpecialtySelect" data-intensive-task-type="${safeText(type)}">
            <option value="全部"${specialty === "全部" ? " selected" : ""}>全部专项</option>
            ${intensiveSpecialties.map((item) => `<option value="${item}"${item === specialty ? " selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <strong>${specialty === "全部" ? "当前展示全部任务" : `当前展示：${safeText(specialty)}`}</strong>
      </div>
      <div class="intensive-task-overview-table">
        <div class="intensive-task-overview-head">
          <span>区域</span>${intensiveTaskMonths.map((month) => `<span>${month}</span>`).join("")}
        </div>
        ${rows.map(({ region, tasks }) => {
          const regionStats = intensiveTaskStats(tasks);
          return `
            <div class="intensive-task-overview-row">
              <button class="intensive-region-name" data-intensive-task-region="${safeText(region)}" data-intensive-task-type="${safeText(type)}" data-intensive-task-specialty="${safeText(specialty)}" type="button">
                <strong>${safeText(region)}</strong>
                <small>${regionStats.total}项 · 进行中${regionStats.doing} · 逾期${regionStats.overdue}</small>
              </button>
              ${intensiveTaskMonths.map((month, index) => {
                const summary = summarizeMonthlyTasks(tasks, index + 1);
                const tip = safeText(intensiveTaskTooltip(month, summary));
                return `<span class="task-month-cell ${summary.status}" data-floating-tip="${tip}">${summary.total ? summary.total : ""}</span>`;
              }).join("")}
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function intensiveRegionTaskGanttMarkup(type, regionName, specialty = "全部") {
  const tasks = intensiveTasksByRegion(type, regionName, specialty);
  const stats = intensiveTaskStats(tasks);
  return `
    <section class="panel intensive-task-board region-mode">
      <div class="panel-head">
        <div>
          <h2>${safeText(regionName)} · 年度任务清单</h2>
          <span class="muted">${type === "review" ? "回顾评价任务清单" : "25年集约化建设任务清单"} · ${specialty === "全部" ? "全部专项" : safeText(specialty)} · 点击任务名称查看完整信息。</span>
        </div>
        <div class="task-board-actions">
          <button class="density-btn active" data-task-density="compact" type="button">紧凑</button>
          <button class="density-btn" data-task-density="relaxed" type="button">舒展</button>
          <button class="ghost-btn" data-intensive-task-back="${safeText(type)}" data-intensive-task-back-specialty="${safeText(specialty)}" type="button">返回总览</button>
        </div>
      </div>
      <section class="acceptance-kpis intensive-task-kpis compact">
        <article><span>区域任务</span><strong>${stats.total}</strong><small>当前区域</small></article>
        <article><span>进行中</span><strong>${stats.doing}</strong><small>蓝色任务条</small></article>
        <article><span>已完成</span><strong>${stats.done}</strong><small>绿色任务条</small></article>
        <article><span>逾期</span><strong>${stats.overdue}</strong><small>红色任务条</small></article>
      </section>
      <div class="intensive-region-gantt">
        <div class="intensive-region-gantt-head">
          <span>任务事项</span>${intensiveTaskMonths.map((month) => `<span>${month}</span>`).join("")}
        </div>
        ${tasks.map((task, index) => {
          const start = taskMonthNumber(task.start, 7);
          const end = taskMonthNumber(task.end, start);
          const status = intensiveTaskStatusKey(task);
          const barLeft = ((start - 1) / 12) * 100;
          const barWidth = ((Math.min(12, end) - start + 1) / 12) * 100;
          const taskTip = safeText(intensiveTaskHoverTip(task, status));
          return `
            <div class="intensive-region-gantt-row">
              <button class="intensive-task-name" data-intensive-task-detail="${safeText(task.id)}" data-intensive-task-type="${safeText(type)}" data-floating-tip="${taskTip}" type="button">
                <strong>${safeText(task.task)}</strong>
              </button>
              <div class="intensive-task-month-grid">
                ${intensiveTaskMonths.map(() => "<span></span>").join("")}
                <button class="intensive-task-bar ${status}" data-intensive-task-detail="${safeText(task.id)}" data-intensive-task-type="${safeText(type)}" data-floating-tip="${taskTip}" style="--bar-left:${barLeft}%; --bar-width:${barWidth}%;" type="button">
                  ${task.progress}%
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderIntensiveTaskDetailModal(type, taskId) {
  const task = intensiveTasksForType(type).find((item) => item.id === taskId);
  if (!task) return;
  const status = intensiveTaskStatusKey(task);
  $("#intensiveTaskDetailModal")?.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="intensiveTaskDetailModal">
      <section class="task-detail-modal intensive-task-detail-modal">
        <header>
          <div>
            <h2>${safeText(task.id)} · ${safeText(task.task)}</h2>
            <p class="muted">${safeText(task.region)} · ${safeText(task.project)} · ${safeText(task.metric)}</p>
          </div>
          <button class="icon-close" data-close-intensive-task-detail type="button">×</button>
        </header>
        <div class="task-detail-grid">
          <div><span>计划状态</span><b>${intensiveTaskStatusLabel(status)}</b></div>
          <div><span>完成进度</span><b>${task.progress}%</b></div>
          <div><span>计划开始</span><b>${safeText(task.start)}</b></div>
          <div><span>计划完成</span><b>${safeText(task.end)}</b></div>
          <div><span>当前阶段</span><b>${safeText(task.stage || "计划准备")}</b></div>
          <div><span>责任人</span><b>${safeText(task.owner.split("；")[0])}</b></div>
        </div>
        <div class="task-detail-sections">
          <section><h3>年度目标</h3><p>${safeText(task.target || "暂无")}</p></section>
          <section><h3>主要措施</h3><p>${safeText(task.measure || "暂无")}</p></section>
          <section><h3>关键节点</h3><p>${safeText(task.milestone || "暂无")}</p></section>
          <section><h3>验收标准</h3><p>${safeText(task.acceptance || "暂无")}</p></section>
          <section><h3>风险 / 备注</h3><p>${safeText(task.risk || "暂无")}</p></section>
          <section><h3>复盘改进</h3><p>${safeText(task.review || "待后续复盘填写")}</p></section>
        </div>
        <footer>
          <button class="ghost-btn" data-close-intensive-task-detail type="button">关闭</button>
          <button class="primary-btn" data-close-intensive-task-detail type="button">确认</button>
        </footer>
      </section>
    </div>
  `);
}

function intensiveAcceptanceDashboardMarkup(type = "acceptance", month = "5月", mode = "score", region = "大区") {
  const rows = intensiveMonthRows(type, month);
  const regions = intensiveRegionsForType(type);
  const safeRegion = region === "大区" || regions.includes(region) ? region : "大区";
  const totals = regions.map((regionName) => ({ region: regionName, total: intensiveRegionTotalForType(type, rows, regionName, month) })).sort((a, b) => b.total - a.total);
  const best = totals[0];
  const weak = totals[totals.length - 1];
  const selectedRegions = safeRegion === "大区" ? regions : [safeRegion];
  const selectedTotal = safeRegion === "大区" ? null : intensiveRegionTotalForType(type, rows, safeRegion, month);
  const selectedLowCount = safeRegion === "大区" ? 0 : rows.filter((row) => {
    const score = scoreForRegion(row, safeRegion);
    return typeof score === "number" && score < 4;
  }).length;
  return `
    ${intensiveMonthFilterMarkup(month, type, mode, safeRegion)}
    <section class="acceptance-kpis">
      <article><span>${safeRegion === "大区" ? "参评区域" : "当前区域"}</span><strong>${safeRegion === "大区" ? regions.length : safeRegion}</strong><small>${month}区域层级</small></article>
      <article><span>评价指标</span><strong>${rows.length}</strong><small>覆盖 4 类评价</small></article>
      <article><span>${safeRegion === "大区" ? "最高区域" : "区域总分"}</span><strong>${safeRegion === "大区" ? best.region : selectedTotal.toFixed(1)}</strong><small>${safeRegion === "大区" ? `${best.total.toFixed(1)} 分` : "当前筛选区域"}</small></article>
      <article><span>${safeRegion === "大区" ? "重点关注" : "低分指标"}</span><strong>${safeRegion === "大区" ? weak.region : selectedLowCount}</strong><small>${safeRegion === "大区" ? `${weak.total.toFixed(1)} 分` : "低于4分或为0分"}</small></article>
    </section>
    ${safeRegion === "大区" ? `
      <section class="acceptance-region-summary ${type === "review" ? "review-region-summary" : ""}">
        ${totals.map((item, index) => `
          <article>
            <div class="rank-badge">${index + 1}</div>
            <div class="region-summary-main">
              <strong>${item.region}</strong>
              <span>${month}累计得分</span>
            </div>
            <div class="region-summary-score">
              <b>${item.total.toFixed(1)}</b>
              <i class="${intensiveTotalDelta(item.region, month, type) >= 0 ? "delta-up" : "delta-down"}">${intensiveTotalDelta(item.region, month, type) >= 0 ? "+" : ""}${intensiveTotalDelta(item.region, month, type).toFixed(1)}</i>
            </div>
          </article>
        `).join("")}
      </section>
      ${intensiveAreaDetailMarkup(rows, selectedRegions, mode, month, type)}
    ` : intensiveSingleRegionDetailMarkup(rows, safeRegion, mode, month, selectedTotal, type)}
  `;
}

function intensiveSubjectMarkup(type = "acceptance", subView = "dashboard", month = "5月", mode = "score", region = "大区") {
  let body = "";
  if (subView === "rules") body = intensiveRulesMarkup(type);
  if (subView === "dashboard") body = intensiveAcceptanceDashboardMarkup(type, month, mode, region);
  if (subView === "region") body = intensiveProjectRegionBoardMarkup(type, month, mode, region);
  if (subView === "tasks") body = intensiveTaskOverviewMarkup(type);
  return `<div class="automation-dashboard intensive-subject">${intensiveSubjectHeaderMarkup(type, subView)}${body}</div>`;
}

function intensivePlaceholderMarkup(viewId = "overview") {
  const view = intensiveViews.find((item) => item.id === viewId) || intensiveViews[0];
  if (view.id === "acceptance" || view.id === "review") return intensiveSubjectMarkup(view.id);
  if (view.id === "automation") return automationDashboardMarkup();
  return `
    <section class="panel intensive-empty-panel">
      <div class="empty-state">
        <span>${view.name}</span>
        <h2>${view.name}内容待补充</h2>
        <p>当前先完成集约化调度页面结构搭建，后续可在这里接入指标卡片、任务看板、区域筛选、甘特图或数据分析模块。</p>
      </div>
    </section>
  `;
}

function renderIntensiveInsight(viewId = "overview") {
  const content = $("#intensiveInsightContent");
  if (!content) return;
  $$(".intensive-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.intensiveView === viewId));
  content.innerHTML = intensivePlaceholderMarkup(viewId);
}

function renderIntensiveModule(item) {
  $("#moduleDetail").innerHTML = `
    <div class="star-page intensive-page">
      <div class="star-titlebar">
        <button class="ghost-btn" data-view-jump="cockpit">← 返回驾驶舱</button>
        <h2>${item.name}</h2>
        <div class="star-view-switch intensive-view-switch">
          ${intensiveViews.map((view, index) => `
            <button class="star-view-btn intensive-view-btn ${index === 0 ? "active" : ""}" data-intensive-view="${view.id}" type="button">${view.name}</button>
          `).join("")}
        </div>
      </div>
      <div id="intensiveInsightContent">${intensivePlaceholderMarkup("overview")}</div>
    </div>
  `;
}

function renderStarModule(item) {
  $("#moduleDetail").innerHTML = `
    <div class="star-page">
      <div class="star-titlebar">
        <button class="ghost-btn" data-view-jump="cockpit">← 返回驾驶舱</button>
        <h2>数字化星级调度</h2>
        <div class="star-view-switch">
          <button class="star-view-btn active" data-star-view="area" type="button">大区整体情况</button>
          <button class="star-view-btn" data-star-view="region" type="button">区域整体情况</button>
          <button class="star-view-btn" data-star-view="project" type="button">项目整体情况</button>
          <button class="star-view-btn" data-star-view="gantt" type="button">年度任务</button>
        </div>
      </div>
      <section class="star-metrics">
        <div class="star-score-row">
          ${renderStarMetricCards()}
        </div>
        <div class="star-task-row">
          ${renderStarTaskStatusCards()}
        </div>
      </section>
      <div id="starInsightContent">${starAreaViewMarkup()}</div>
    </div>
  `;
}

function monthGanttMarkup(project, month) {
  const rows = getWeeklyPlan(project.id, Number(month));
  return `
    <div class="panel-head">
      <div>
        <h2>${project.name} · ${month}月周维度甘特图</h2>
        <span class="muted">${project.id} · ${project.owner}</span>
      </div>
      <span class="badge info">按周跟踪</span>
    </div>
    <div class="week-gantt">
      <div class="week-header">
        <div>任务</div>
        <div>第1周</div>
        <div>第2周</div>
        <div>第3周</div>
        <div>第4周</div>
      </div>
      ${rows.map((row, index) => `
        <div class="week-row">
          <div class="week-task">
            <strong>${row[1]}</strong>
            <span>${row[2]}</span>
          </div>
          <div class="week-track">
            <button
              class="week-bar ${row[5] === "已完成" ? "done" : row[5] === "逾期" ? "overdue" : "doing"}"
              style="grid-column:${index + 1} / ${index + 2}"
              data-week-task="${index}"
              data-week-project="${project.id}"
              data-week-month="${month}"
              type="button"
            >
              ${row[0]}
            </button>
          </div>
        </div>
      `).join("")}
    </div>
    <div class="table-wrap weekly-table">
      <table>
        <thead>
          <tr>
            <th>周次</th>
            <th>任务</th>
            <th>措施</th>
            <th>负责人</th>
            <th>任务完成节点</th>
            <th>当前完成情况</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr data-week-task="${index}" data-week-project="${project.id}" data-week-month="${month}">
              <td>${row[0]}</td>
              <td>${row[1]}</td>
              <td>${row[2]}</td>
              <td>${row[3]}</td>
              <td>${row[4]}</td>
              <td><span class="badge ${row[5] === "已完成" ? "good" : row[5] === "逾期" ? "danger" : "warn"}">${row[5]}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProjectAnnualGantt(projectId) {
  const project = annualStarProjects.find((item) => item.id === projectId);
  if (!project) return;
  $("#monthDrilldown").innerHTML = `
    <div class="panel-head">
      <div>
        <h2>${project.name} · 年度星级任务甘特图</h2>
        <span class="muted">${project.owner} · 共 ${(project.tasks || []).length} 项任务</span>
      </div>
      <span class="badge info">任务级甘特图</span>
    </div>
    <div class="task-annual-gantt">
      <div class="task-gantt-header">
        <div>任务事项</div>
        ${Array.from({ length: 12 }, (_, index) => `<div>${index + 1}月</div>`).join("")}
      </div>
      ${(project.tasks || []).map((task, index) => `
        <div class="task-gantt-row">
          <button class="task-gantt-name" data-task-detail="${index}" data-task-project="${project.id}" type="button">
            <strong>${task.item} · ${task.title}</strong>
            <span>${statusLabel(task.status)} · 完成度 ${task.progress}% · ${task.owner}</span>
          </button>
          <div class="task-gantt-months">
            ${Array.from({ length: 12 }, () => `<span></span>`).join("")}
            <button class="task-gantt-bar ${task.status}" data-task-detail="${index}" data-task-project="${project.id}" style="grid-column:${task.start} / ${task.end + 1}" type="button">
              <b>${task.progress}%</b>
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
  $("#monthDrilldown").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderTaskDetailModal(projectId, taskIndex) {
  const project = annualStarProjects.find((item) => item.id === projectId);
  const task = project?.tasks?.[Number(taskIndex)];
  if (!project || !task) return;
  $("#taskDetailModal")?.remove();
  const statusText = statusLabel(task.status);
  const startDate = `2025-${String(task.start).padStart(2, "0")}-01`;
  const endDate = `2025-${String(task.end).padStart(2, "0")}-${task.end === 2 ? "28" : task.end === 4 || task.end === 6 || task.end === 9 || task.end === 11 ? "30" : "31"}`;
  const category = task.category || (task.title.includes("数据") ? "数据治理" : task.title.includes("设备") || task.title.includes("能耗") ? "技改" : "管理提升");
  const problem = task.problem || `当前${task.title}指标存在达标压力，需结合现场运行、数据填报和过程管理开展整改。`;
  const measure = task.measure || `围绕${task.title}制定整改措施，明确责任人、完成节点和过程证据上传要求，按月跟踪闭环。`;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="taskDetailModal">
      <section class="task-detail-modal">
        <header>
          <div>
            <h2>${project.name} · ${task.item}</h2>
            <p class="muted">${project.owner} · ${task.title} · 年度星级任务事项</p>
          </div>
          <button class="icon-close" data-close-task-detail type="button">×</button>
        </header>
        <div class="task-detail-grid">
          <div><span>区域</span><b>${project.owner}</b></div>
          <div><span>水厂名称</span><b>${project.name}</b></div>
          <div><span>星级指标名称</span><b>${task.title}</b></div>
          <div><span>事项名称</span><b>${task.item}</b></div>
          <div><span>事项状态</span><b>${statusText}</b></div>
          <div><span>任务起始时间</span><b>${startDate}</b></div>
          <div><span>任务截止时间</span><b>${endDate}</b></div>
          <div><span>任务完成度</span><b>${task.progress}%</b></div>
          <div><span>项目级措施事项分类</span><b>${category}</b></div>
          <div><span>负责人</span><b>${task.owner}</b></div>
        </div>
        <div class="task-detail-sections">
          <section>
            <h3>问题识别</h3>
            <p>${problem}</p>
          </section>
          <section>
            <h3>项目级具体措施计划</h3>
            <p>${measure}</p>
          </section>
          <section>
            <h3>当前进度</h3>
            <p>当前状态为${statusText}，完成度 ${task.progress}%。系统将按月度看板和任务甘特图持续跟踪，逾期或低完成度事项纳入督办。</p>
          </section>
        </div>
        <footer>
          <button class="ghost-btn" data-close-task-detail type="button">关闭</button>
          <button class="primary-btn" data-close-task-detail type="button">确认</button>
        </footer>
      </section>
    </div>
  `);
}

function renderPdcaModal(projectId, month, weekIndex) {
  const project = starProjects.find((item) => item.id === projectId);
  if (!project) return;
  const row = getWeeklyPlan(projectId, Number(month))[Number(weekIndex)];
  if (!row) return;
  const existing = $("#pdcaModal");
  if (existing) existing.remove();
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-backdrop" id="pdcaModal">
      <section class="pdca-modal" role="dialog" aria-modal="true" aria-labelledby="pdcaTitle">
        <header class="pdca-head">
          <div>
            <h2 id="pdcaTitle">${project.name} · ${month}月${row[0]}任务反馈填报</h2>
            <p>${project.id} · ${project.owner} · 周任务闭环记录</p>
          </div>
          <button class="modal-close" data-close-modal type="button">×</button>
        </header>

        <div class="pdca-tabs" role="tablist">
          <button class="active" data-form-tab="base" type="button">基础信息</button>
          <button data-form-tab="progress" type="button">进度反馈</button>
          <button data-form-tab="files" type="button">资料上传</button>
          <button data-form-tab="review" type="button">复核闭环</button>
        </div>

        <form class="pdca-form">
          <section class="pdca-section active" data-form-panel="base">
            <div class="section-title">
              <h3>基础信息</h3>
              <span>确认本周任务、责任人与节点</span>
            </div>
            <div class="form-card hero-form-card">
              <label class="field-control">
                <span class="field-title">任务名称 <b>*</b></span>
                <span class="input-shell textarea-shell"><i>▣</i><textarea>${row[1]}</textarea><em>0/50</em></span>
              </label>
              <label class="field-control">
                <span class="field-title">任务措施 <b>*</b></span>
                <span class="input-shell textarea-shell"><i>✎</i><textarea>${row[2]}</textarea><em>0/300</em></span>
              </label>
            </div>
            <div class="pdca-grid compact">
              <label class="field-control"><span class="field-title">负责人 <b>*</b></span><span class="input-shell"><i>◎</i><input value="${row[3]}" /></span><small>请选择任务主要负责人</small></label>
              <label class="field-control"><span class="field-title">责任部门</span><span class="input-shell"><i>◇</i><input value="${project.owner}" /></span><small>任务所属区域或部门</small></label>
              <label class="field-control"><span class="field-title">完成节点 <b>*</b></span><span class="input-shell"><i>□</i><input value="${row[4]}" /></span><small>计划完成时间</small></label>
              <label class="field-control"><span class="field-title">优先级</span><span class="input-shell"><i>⚑</i><select><option>一般</option><option selected>重点</option><option>紧急</option></select></span><small>选择任务优先级</small></label>
            </div>
            <label class="field-control">
              <span class="field-title">任务目标</span>
              <span class="input-shell textarea-shell"><i>▤</i><textarea placeholder="填写本周任务目标、验收标准和需要达成的结果"></textarea><em>0/200</em></span>
              <small>明确任务最终交付成果</small>
            </label>
          </section>

          <section class="pdca-section" data-form-panel="progress">
            <div class="section-title">
              <h3>进度反馈</h3>
              <span>记录当前执行情况与偏差原因</span>
            </div>
            <div class="pdca-grid">
              <label class="field-control"><span class="field-title">当前状态 <b>*</b></span><span class="input-shell"><i>◉</i><select><option ${row[5] === "进行中" ? "selected" : ""}>进行中</option><option ${row[5] === "已完成" ? "selected" : ""}>已完成</option><option ${row[5] === "逾期" ? "selected" : ""}>逾期</option><option>未开始</option></select></span></label>
              <label class="field-control"><span class="field-title">完成比例 <b>*</b></span><span class="input-shell"><i>%</i><input value="${row[5] === "已完成" ? "100%" : row[5] === "逾期" ? "40%" : "60%"}" /></span></label>
            </div>
            <div class="progress-editor">
              <span>0%</span>
              <input type="range" min="0" max="100" value="${row[5] === "已完成" ? "100" : row[5] === "逾期" ? "40" : "60"}" />
              <span>100%</span>
            </div>
            <label class="field-control"><span class="field-title">当前进展</span><span class="input-shell textarea-shell"><i>✎</i><textarea placeholder="填写本周已完成动作、现场执行情况、关键节点进展"></textarea><em>0/300</em></span></label>
            <label class="field-control"><span class="field-title">偏差原因</span><span class="input-shell textarea-shell"><i>!</i><textarea placeholder="如存在滞后，填写资源、现场、流程、资料等方面原因"></textarea><em>0/200</em></span></label>
          </section>

          <section class="pdca-section" data-form-panel="files">
            <div class="section-title">
              <h3>资料上传</h3>
              <span>上传过程资料、照片、台账和佐证文件</span>
            </div>
            <div class="upload-zone">
              <strong>拖拽或点击上传资料</strong>
              <span>支持照片、整改台账、验收记录、现场视频、PDF/Excel 等</span>
              <input type="file" multiple />
            </div>
            <div class="pdca-grid compact">
              <label class="field-control"><span class="field-title">资料类型</span><span class="input-shell"><i>▥</i><select><option>现场照片</option><option>整改台账</option><option>验收记录</option><option>会议纪要</option><option>其他资料</option></select></span></label>
              <label class="field-control"><span class="field-title">资料完整性</span><span class="input-shell"><i>✓</i><select><option>完整</option><option>需补充</option><option>待复核</option></select></span></label>
              <label class="field-control"><span class="field-title">上传人</span><span class="input-shell"><i>◎</i><input value="${row[3]}" /></span></label>
              <label class="field-control"><span class="field-title">资料日期</span><span class="input-shell"><i>□</i><input placeholder="如：${month}月${Number(weekIndex) * 7 + 7}日" /></span></label>
            </div>
            <label class="field-control"><span class="field-title">资料说明</span><span class="input-shell textarea-shell"><i>✎</i><textarea placeholder="填写资料名称、台账编号、照片说明或外部链接"></textarea><em>0/200</em></span></label>
          </section>

          <section class="pdca-section" data-form-panel="review">
            <div class="section-title">
              <h3>复核闭环</h3>
              <span>形成复核结论、后续安排和督办动作</span>
            </div>
            <div class="pdca-grid">
              <label class="field-control"><span class="field-title">复核结论</span><span class="input-shell"><i>✓</i><select><option>通过</option><option>退回补充</option><option>需现场复核</option><option>纳入督办</option></select></span></label>
              <label class="field-control"><span class="field-title">复核人</span><span class="input-shell"><i>◎</i><input placeholder="填写复核人" /></span></label>
            </div>
            <label class="field-control"><span class="field-title">复核意见</span><span class="input-shell textarea-shell"><i>✎</i><textarea placeholder="填写复核结论、未完成原因、质量问题或验收意见"></textarea><em>0/300</em></span></label>
            <label class="field-control"><span class="field-title">后续安排</span><span class="input-shell textarea-shell"><i>↻</i><textarea placeholder="填写纠偏措施、下周计划、需协调事项"></textarea><em>0/300</em></span></label>
            <div class="pdca-grid">
              <label class="field-control"><span class="field-title">是否需要督办</span><span class="input-shell"><i>!</i><select><option>否</option><option>是</option></select></span></label>
              <label class="field-control"><span class="field-title">下次复核节点</span><span class="input-shell"><i>□</i><input placeholder="如：${month}月28日" /></span></label>
            </div>
          </section>

          <footer class="pdca-actions">
            <button class="ghost-btn" data-close-modal type="button">取消</button>
            <button class="text-btn" type="button">暂存</button>
            <button class="primary-btn" type="button">提交反馈</button>
          </footer>
        </form>
      </section>
    </div>
  `);
}

function renderProjectProgress(projectId, month) {
  const project = annualStarProjects.find((item) => item.id === projectId) || starProjects.find((item) => item.id === projectId);
  if (!project) return;
  const stats = projectStats(project);
  const selectedMonth = Number(month);
  $("#moduleDetail").innerHTML = `
    <div class="star-page project-progress-page">
      <div class="star-titlebar">
        <button class="ghost-btn" data-module="star">← 返回数字化星级调度</button>
        <div>
          <h2>${project.name}</h2>
          <p class="muted">${project.id} · ${project.owner} · 项目整体进度</p>
        </div>
      </div>
      <section class="star-metrics project-metrics">
        <article class="metric-card"><span>项目整体完成率</span><strong>${stats.progress}%</strong><small>按完成月份测算</small></article>
        <article class="metric-card"><span>年度覆盖月份</span><strong>${stats.activeMonths}</strong><small>全年 12 个月视图</small></article>
        <article class="metric-card"><span>已完成事项</span><strong>${stats.done}</strong><small>绿色任务块</small></article>
        <article class="metric-card"><span>正在开展事项</span><strong>${stats.doing}</strong><small>黄色任务块</small></article>
        <article class="metric-card"><span>逾期事项</span><strong>${stats.overdue}</strong><small>红色任务块</small></article>
        <article class="metric-card"><span>当前查看月份</span><strong>${selectedMonth}月</strong><small>下方细化到周</small></article>
      </section>
      <section class="panel project-year-panel">
        <div class="panel-head">
          <h2>项目年度整体进度</h2>
          <div class="legend">
            <span><i class="legend-done"></i>已完成</span>
            <span><i class="legend-doing"></i>正在开展</span>
            <span><i class="legend-overdue"></i>逾期</span>
          </div>
        </div>
        <div class="project-months">
          ${Array.from({ length: 12 }, (_, index) => {
            const currentMonth = index + 1;
            const segment = projectMonthStatus(project, currentMonth);
            const activeClass = currentMonth === selectedMonth ? "selected" : "";
            const statusClass = segment ? segment.status : "idle";
            return `
              <button class="project-month ${statusClass} ${activeClass}" data-project-month="${currentMonth}" data-project-id="${project.id}" type="button">
                <b>${currentMonth}月</b>
                <span>${segment ? statusLabel(segment.status) : "无任务"}</span>
              </button>
            `;
          }).join("")}
        </div>
      </section>
      <section class="panel month-drilldown" id="projectMonthDetail">
        ${monthGanttMarkup(project, selectedMonth)}
      </section>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProjectMonth(projectId, month) {
  const project = annualStarProjects.find((item) => item.id === projectId) || starProjects.find((item) => item.id === projectId);
  if (!project) return;
  $$(".project-month").forEach((button) => {
    button.classList.toggle("selected", button.dataset.projectMonth === String(month));
  });
  $("#projectMonthDetail").innerHTML = monthGanttMarkup(project, Number(month));
}

function updateProjectDashboard(regionName, projectName) {
  const projects = projectRegionCatalog[regionName] || [];
  const selectedProject = projects.includes(projectName) ? projectName : projects[0];
  if ($("#projectSelect")) {
    $("#projectSelect").innerHTML = projects.map((project) => `<option value="${project}" ${project === selectedProject ? "selected" : ""}>${project}</option>`).join("");
  }
  if ($("#projectDetailContent")) {
    $("#projectDetailContent").outerHTML = renderProjectDetail(regionName, selectedProject);
  }
}

function openView(view) {
  $$(".view").forEach((item) => item.classList.toggle("active", item.id === view));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  if (view === "cockpit") setTopbar("home", "东部智脑-运营管理综合调度平台");
}

function openModule(moduleId) {
  const item = [...modules, ...utilityModules].find((module) => module.id === moduleId) || modules[0];
  setTopbar("module", item.name);
  if (moduleId === "star") {
    renderStarModule(item);
    $$(".nav-item").forEach((nav) => nav.classList.toggle("active", nav.dataset.module === moduleId));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === "moduleDetail"));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (moduleId === "intensive") {
    renderIntensiveModule(item);
    $$(".nav-item").forEach((nav) => nav.classList.toggle("active", nav.dataset.module === moduleId));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === "moduleDetail"));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (moduleId === "data-push") {
    renderDataPushModule(item);
    $$(".nav-item").forEach((nav) => nav.classList.toggle("active", nav.dataset.module === moduleId));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === "moduleDetail"));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (moduleId === "permission") {
    renderPermissionModule(item);
    $$(".nav-item").forEach((nav) => nav.classList.toggle("active", nav.dataset.module === moduleId));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === "moduleDetail"));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  renderGenericTemplate();
  $("#detailEyebrow").textContent = `专题调度 / ${item.summary}`;
  $("#detailTitle").textContent = item.name;
  $("#detailMetrics").innerHTML = item.metrics.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
  $("#detailPlan").innerHTML = item.plan.map(([title, text]) => `
    <article class="plan-item">
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
  $("#taskCount").textContent = `${item.tasks.length} 项`;
  $("#detailRows").innerHTML = item.tasks.map(([name, owner, status, progress, risk]) => `
    <tr>
      <td><strong>${name}</strong></td>
      <td>${owner}</td>
      <td>${status}</td>
      <td><div class="progress"><span style="width:${progress}%"></span></div><small>${progress}%</small></td>
      <td><span class="badge ${badgeClass(risk)}">${risk}</span></td>
    </tr>
  `).join("");
  $("#detailInsight").textContent = item.insight;
  $("#miniChart").innerHTML = item.chart.map((value) => `<div style="height:${value}%"></div>`).join("");
  $("#detailActions").innerHTML = item.tasks
    .filter((task) => task[4] !== "低")
    .map(([name, owner, status, progress, risk]) => `
      <div>
        <strong>${name}</strong>
        <p class="muted">${owner} · ${status} · 当前完成 ${progress}%</p>
        <span class="badge ${badgeClass(risk)}">${risk}风险</span>
      </div>
    `).join("");

  $$(".nav-item").forEach((nav) => nav.classList.toggle("active", nav.dataset.module === moduleId));
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === "moduleDetail"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function hideFloatingTaskTooltip() {
  $("#floatingTaskTooltip")?.remove();
}

function showFloatingTaskTooltip(text, event) {
  if (!text) {
    hideFloatingTaskTooltip();
    return;
  }
  let tooltip = $("#floatingTaskTooltip");
  if (!tooltip) {
    document.body.insertAdjacentHTML("beforeend", `<div id="floatingTaskTooltip" class="floating-task-tooltip"></div>`);
    tooltip = $("#floatingTaskTooltip");
  }
  tooltip.textContent = text;
  const width = Math.min(360, Math.max(260, window.innerWidth * 0.24));
  tooltip.style.width = `${width}px`;
  const height = Math.min(260, tooltip.offsetHeight || 160);
  const left = Math.min(window.innerWidth - width - 18, Math.max(18, event.clientX + 18));
  const top = Math.min(window.innerHeight - height - 18, Math.max(18, event.clientY + 18));
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.classList.add("active");
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const assistantEntry = event.target.closest("#assistantEntry");
    const closeAgent = event.target.closest("[data-close-agent]");
    const agentQuestion = event.target.closest("[data-agent-question]");
    const starView = event.target.closest("[data-star-view]");
    const starTaskMetric = event.target.closest("[data-star-task-metric]");
    const starTaskBoardEntry = event.target.closest("[data-star-task-board-entry]");
    const starTaskBoardView = event.target.closest("[data-star-task-board-view]");
    const starReport = event.target.closest("[data-star-report]");
    const starTaskInteraction = event.target.closest("[data-star-task-interaction]");
    const starProgressTask = event.target.closest("[data-star-progress-task]");
    const starAuditStatus = event.target.closest("[data-star-audit-status]");
    const starAuditTask = event.target.closest("[data-star-audit-task]");
    const intensiveView = event.target.closest("[data-intensive-view]");
    const intensiveSubview = event.target.closest("[data-intensive-subview]");
    const intensiveMode = event.target.closest("[data-intensive-mode]");
    const intensiveProjectTask = event.target.closest("[data-intensive-project-task][data-intensive-project-region]");
    const closeIntensiveProjectTask = event.target.closest("[data-close-intensive-project-task]");
    const intensiveTaskRegion = event.target.closest("[data-intensive-task-region][data-intensive-task-type]");
    const intensiveTaskBack = event.target.closest("[data-intensive-task-back]");
    const intensiveTaskDetail = event.target.closest("[data-intensive-task-detail][data-intensive-task-type]");
    const closeIntensiveTaskDetail = event.target.closest("[data-close-intensive-task-detail]");
    const taskDensity = event.target.closest("[data-task-density]");
    const automationDetailMode = event.target.closest("[data-automation-detail-mode]");
    const automationSubview = event.target.closest("[data-automation-subview]");
    const starAreaMetric = event.target.closest("[data-star-area-metric]");
    const bulletinSort = event.target.closest("[data-bulletin-sort]");
    const regionMetric = event.target.closest("[data-region-metric]");
    const openPermissionModal = event.target.closest("[data-open-permission-modal]");
    const closePermissionModal = event.target.closest("[data-close-permission-modal]");
    const openPermissionRules = event.target.closest("[data-open-permission-rules]");
    const closePermissionRules = event.target.closest("[data-close-permission-rules]");
    const openPushPreview = event.target.closest("[data-open-push-preview]");
    const closePushPreview = event.target.closest("[data-close-push-preview]");
    const supervisionProject = event.target.closest("[data-supervision-project][data-supervision-region]");
    const closeSupervisionModal = event.target.closest("[data-close-supervision-modal]");
    const openNewSupervisionTask = event.target.closest("[data-open-new-supervision-task]");
    const closeNewSupervisionTask = event.target.closest("[data-close-new-supervision-task]");
    const openSupervisionRule = event.target.closest("[data-open-supervision-rule]");
    const closeSupervisionRule = event.target.closest("[data-close-supervision-rule]");
    const openSupervisionRegion = event.target.closest("[data-open-supervision-region]");
    const closeSupervisionRegion = event.target.closest("[data-close-supervision-region]");
    const supervisionRegionFilter = event.target.closest("[data-supervision-region-filter]");
    const projectOverview = event.target.closest("[data-project-overview]");
    const taskDetail = event.target.closest("[data-task-detail][data-task-project]");
    const closeTaskDetail = event.target.closest("[data-close-task-detail]");
    const closeModal = event.target.closest("[data-close-modal]");
    const formTab = event.target.closest("[data-form-tab]");
    const weekTask = event.target.closest("[data-week-task][data-week-project][data-week-month]");
    const monthButton = event.target.closest("[data-project][data-month]");
    const projectMonthButton = event.target.closest("[data-project-month][data-project-id]");
    const moduleButton = event.target.closest("[data-module]");
    const viewButton = event.target.closest("[data-view-jump], [data-view]");
    if (assistantEntry) {
      renderAssistantModal();
      return;
    }
    if (closeAgent || event.target.id === "assistantModal") {
      $("#assistantModal")?.remove();
      return;
    }
    if (agentQuestion) {
      sendAssistantQuestion(agentQuestion.dataset.agentQuestion);
      return;
    }
    if (openPermissionModal) {
      renderPermissionModal();
      return;
    }
    if (closePermissionModal || event.target.id === "permissionModal") {
      $("#permissionModal")?.remove();
      return;
    }
    if (openPermissionRules) {
      renderPermissionRulesModal();
      return;
    }
    if (closePermissionRules || event.target.id === "permissionRuleModal") {
      $("#permissionRuleModal")?.remove();
      return;
    }
    if (openPushPreview) {
      renderPushPreviewModal();
      return;
    }
    if (closePushPreview || event.target.id === "pushPreviewModal") {
      $("#pushPreviewModal")?.remove();
      return;
    }
    if (supervisionProject) {
      renderSupervisionMeasureModal(supervisionProject.dataset.supervisionProject, supervisionProject.dataset.supervisionRegion);
      return;
    }
    if (openNewSupervisionTask) {
      renderNewSupervisionTaskModal(openNewSupervisionTask.dataset.taskProject, openNewSupervisionTask.dataset.taskRegion);
      return;
    }
    if (closeNewSupervisionTask || event.target.id === "newSupervisionTaskModal") {
      $("#newSupervisionTaskModal")?.remove();
      return;
    }
    if (closeSupervisionModal || event.target.id === "supervisionMeasureModal") {
      $("#supervisionMeasureModal")?.remove();
      return;
    }
    if (openSupervisionRule) {
      renderSupervisionRuleModal();
      return;
    }
    if (closeSupervisionRule || event.target.id === "supervisionRuleModal") {
      $("#supervisionRuleModal")?.remove();
      return;
    }
    if (openSupervisionRegion) {
      renderSupervisionRegionModal();
      return;
    }
    if (closeSupervisionRegion || event.target.id === "supervisionRegionModal") {
      $("#supervisionRegionModal")?.remove();
      return;
    }
    if (supervisionRegionFilter) {
      $("#starInsightContent").innerHTML = starAreaReportMarkup("project", supervisionRegionFilter.dataset.supervisionRegionFilter);
      $("#supervisionRegionModal")?.remove();
      return;
    }
    if (starTaskMetric) {
      $("#starInsightContent").innerHTML = starTaskMetricAnalysisMarkup(starTaskMetric.dataset.starTaskMetric);
      $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === "area"));
      $("#starInsightContent").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (starTaskBoardEntry) {
      $("#starInsightContent").innerHTML = starTaskBoardMarkup("region", "count", "doneRate");
      $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === "gantt"));
      $("#starInsightContent").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (starTaskBoardView) {
      const mode = $("#starTaskBoardMode")?.value || "count";
      const rank = $("#starTaskBoardRank")?.value || "doneRate";
      const regionName = $("#starTaskBoardRegionSelect")?.value || "枣庄区域公司";
      $("#starInsightContent").innerHTML = starTaskBoardMarkup(starTaskBoardView.dataset.starTaskBoardView, mode, rank, regionName);
      return;
    }
    if (starReport) {
      $("#starInsightContent").innerHTML = starAreaReportMarkup(starReport.dataset.starReport);
      $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === "area"));
      return;
    }
    if (starTaskInteraction) {
      $("#starInsightContent").innerHTML = starTaskInteractionPageMarkup(starTaskInteraction.dataset.starTaskInteraction);
      $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === "gantt"));
      $("#starInsightContent").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (starProgressTask) {
      updateStarProgressWorkspace(starProgressTask.dataset.starProgressTask);
      return;
    }
    if (starAuditStatus) {
      $("#starInteractionWorkspace").innerHTML = starTaskAuditMarkup(starAuditStatus.dataset.starAuditStatus);
      return;
    }
    if (starAuditTask) {
      const status = starAuditTask.dataset.starAuditCurrentStatus || "全部";
      $("#starInteractionWorkspace").innerHTML = starTaskAuditMarkup(status, starAuditTask.dataset.starAuditTask);
      return;
    }
    if (starAreaMetric) {
      const insightContent = $("#starInsightContent");
      insightContent.innerHTML = starMetricAnalysisMarkup(starAreaMetric.dataset.starAreaMetric);
      $$(".star-view-btn").forEach((button) => button.classList.toggle("active", button.dataset.starView === "area"));
      insightContent.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (bulletinSort) {
      $("#areaBulletinContent").innerHTML = renderAreaBulletin(bulletinSort.dataset.bulletinSort);
      return;
    }
    if (regionMetric) {
      const metricId = regionMetric.dataset.regionMetric;
      const regionName = $("#regionSelect")?.value || "枣庄区域公司";
      $("#regionMetricCards").innerHTML = renderRegionMetricCards(regionName, metricId);
      $("#regionRankingContent").innerHTML = regionMetricAnalysisMarkup(regionName, metricId);
      $("#regionRankingContent").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (projectOverview) {
      renderProjectAnnualGantt(projectOverview.dataset.projectOverview);
      return;
    }
    if (taskDetail) {
      renderTaskDetailModal(taskDetail.dataset.taskProject, taskDetail.dataset.taskDetail);
      return;
    }
    if (closeTaskDetail || event.target.id === "taskDetailModal") {
      $("#taskDetailModal")?.remove();
      return;
    }
    if (starView) {
      renderStarInsight(starView.dataset.starView);
      return;
    }
    if (intensiveView) {
      renderIntensiveInsight(intensiveView.dataset.intensiveView);
      return;
    }
    if (intensiveProjectTask) {
      renderIntensiveProjectTaskModal(intensiveProjectTask.dataset.intensiveProjectTask, intensiveProjectTask.dataset.intensiveProjectRegion);
      return;
    }
    if (closeIntensiveProjectTask || event.target.id === "intensiveProjectTaskModal") {
      $("#intensiveProjectTaskModal")?.remove();
      return;
    }
    if (intensiveTaskRegion) {
      const specialty = intensiveTaskRegion.dataset.intensiveTaskSpecialty || "全部";
      $("#intensiveInsightContent").innerHTML = `<div class="automation-dashboard intensive-subject">${intensiveSubjectHeaderMarkup(intensiveTaskRegion.dataset.intensiveTaskType, "tasks")}${intensiveRegionTaskGanttMarkup(intensiveTaskRegion.dataset.intensiveTaskType, intensiveTaskRegion.dataset.intensiveTaskRegion, specialty)}</div>`;
      $("#intensiveInsightContent").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (intensiveTaskBack) {
      const type = intensiveTaskBack.dataset.intensiveTaskBack;
      const specialty = intensiveTaskBack.dataset.intensiveTaskBackSpecialty || "全部";
      $("#intensiveInsightContent").innerHTML = `<div class="automation-dashboard intensive-subject">${intensiveSubjectHeaderMarkup(type, "tasks")}${intensiveTaskOverviewMarkup(type, specialty)}</div>`;
      return;
    }
    if (intensiveTaskDetail) {
      hideFloatingTaskTooltip();
      renderIntensiveTaskDetailModal(intensiveTaskDetail.dataset.intensiveTaskType, intensiveTaskDetail.dataset.intensiveTaskDetail);
      return;
    }
    if (closeIntensiveTaskDetail || event.target.id === "intensiveTaskDetailModal") {
      $("#intensiveTaskDetailModal")?.remove();
      return;
    }
    if (taskDensity) {
      const board = taskDensity.closest(".intensive-task-board");
      board?.classList.toggle("relaxed-density", taskDensity.dataset.taskDensity === "relaxed");
      board?.classList.toggle("compact-density", taskDensity.dataset.taskDensity === "compact");
      board?.querySelectorAll("[data-task-density]").forEach((button) => {
        button.classList.toggle("active", button === taskDensity);
      });
      return;
    }
    if (intensiveSubview) {
      const type = intensiveSubview.dataset.intensiveType || "acceptance";
      const month = $("#intensiveMonthSelect")?.value || "5月";
      const mode = $(".intensive-inline-switch .active")?.dataset.intensiveMode || "score";
      const region = $("#intensiveRegionSelect")?.value || "大区";
      $("#intensiveInsightContent").innerHTML = intensiveSubjectMarkup(type, intensiveSubview.dataset.intensiveSubview, month, mode, region);
      return;
    }
    if (intensiveMode) {
      const type = intensiveMode.dataset.intensiveType || $(".intensive-subnav .active")?.dataset.intensiveType || "acceptance";
      const subView = $(".intensive-subnav .active")?.dataset.intensiveSubview || "dashboard";
      const month = $("#intensiveMonthSelect")?.value || "5月";
      const region = $("#intensiveRegionSelect")?.value || "大区";
      $("#intensiveInsightContent").innerHTML = intensiveSubjectMarkup(type, subView, month, intensiveMode.dataset.intensiveMode, region);
      return;
    }
    if (automationDetailMode) {
      const month = $("#automationMonthSelect")?.value || "6月";
      const batch = $("#automationBatchSelect")?.value || "全部";
      const region = $("#automationRegionSelect")?.value || "全部";
      $("#intensiveInsightContent").innerHTML = automationDashboardMarkup(month, batch, automationDetailMode.dataset.automationDetailMode, "dashboard", region);
      return;
    }
    if (automationSubview) {
      const month = $("#automationMonthSelect")?.value || "6月";
      const batch = $("#automationBatchSelect")?.value || "全部";
      const region = $("#automationRegionSelect")?.value || "全部";
      const detailMode = $(".automation-mode-switch .active")?.dataset.automationDetailMode || "score";
      $("#intensiveInsightContent").innerHTML = automationDashboardMarkup(month, batch, detailMode, automationSubview.dataset.automationSubview, region);
      return;
    }
    if (closeModal || event.target.id === "pdcaModal") {
      $("#pdcaModal")?.remove();
      return;
    }
    if (formTab) {
      const activeTab = formTab.dataset.formTab;
      $$("#pdcaModal [data-form-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.formTab === activeTab));
      $$("#pdcaModal [data-form-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.formPanel === activeTab));
      return;
    }
    if (weekTask) {
      renderPdcaModal(weekTask.dataset.weekProject, weekTask.dataset.weekMonth, weekTask.dataset.weekTask);
      return;
    }
    if (monthButton) {
      renderProjectProgress(monthButton.dataset.project, monthButton.dataset.month);
      return;
    }
    if (projectMonthButton) {
      updateProjectMonth(projectMonthButton.dataset.projectId, projectMonthButton.dataset.projectMonth);
      return;
    }
    if (moduleButton) {
      openModule(moduleButton.dataset.module);
      return;
    }
    if (viewButton) {
      const view = viewButton.dataset.viewJump || viewButton.dataset.view;
      if (view === "cockpit") {
        $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "cockpit"));
      }
      openView(view);
    }
  });

  document.body.addEventListener("mousemove", (event) => {
    const tooltipTarget = event.target.closest("[data-floating-tip]");
    if (!tooltipTarget) {
      hideFloatingTaskTooltip();
      return;
    }
    showFloatingTaskTooltip(tooltipTarget.dataset.floatingTip, event);
  });

  document.body.addEventListener("mouseleave", hideFloatingTaskTooltip);
  window.addEventListener("scroll", hideFloatingTaskTooltip, true);

  document.body.addEventListener("change", (event) => {
    if (event.target.id === "regionSelect") {
      const regionName = event.target.value;
      $("#regionMetricCards").innerHTML = renderRegionMetricCards(regionName, "quant");
      $("#regionRankingContent").innerHTML = regionMetricAnalysisMarkup(regionName, "quant");
      return;
    }
    if (["starTaskBoardMode", "starTaskBoardRank", "starTaskBoardRegionSelect"].includes(event.target.id)) {
      const view = $(".star-task-board-page .star-report-btn.active")?.dataset.starTaskBoardView || "region";
      const mode = $("#starTaskBoardMode")?.value || "count";
      const rank = $("#starTaskBoardRank")?.value || "doneRate";
      const regionName = $("#starTaskBoardRegionSelect")?.value || "枣庄区域公司";
      $("#starInsightContent").innerHTML = starTaskBoardMarkup(view, mode, rank, regionName);
      return;
    }
    if (event.target.id === "projectRegionSelect") {
      updateProjectDashboard(event.target.value, "");
      return;
    }
    if (event.target.id === "projectSelect") {
      const regionName = $("#projectRegionSelect")?.value || "杭湖区域公司";
      updateProjectDashboard(regionName, event.target.value);
      return;
    }
    if (event.target.id === "resourceAssistSelect") {
      const resourceFields = $("[data-resource-fields]");
      resourceFields?.classList.toggle("active", event.target.value === "是");
      return;
    }
    if (event.target.id === "starResourceNeed") {
      const resourceFields = $("[data-star-resource-fields]");
      resourceFields?.classList.toggle("active", event.target.value === "是");
      return;
    }
    if (event.target.id === "starFillRegionSelect") {
      const projectSelect = $("#starFillProjectSelect");
      if (projectSelect) {
        projectSelect.innerHTML = starTaskProjects(event.target.value).map((project) => `<option>${project}</option>`).join("");
      }
      return;
    }
    if (event.target.matches("[data-star-task-filter='progress']")) {
      updateStarProgressWorkspace();
      return;
    }
    if (event.target.id === "intensiveSpecialtySelect") {
      const ownerInput = $("#intensiveSpecialtyOwner");
      if (ownerInput) ownerInput.value = intensiveSpecialtyOwners[event.target.value] || "";
      return;
    }
    if (event.target.id === "intensiveTaskSpecialtySelect") {
      const type = event.target.dataset.intensiveTaskType || "acceptance";
      $("#intensiveInsightContent").innerHTML = `<div class="automation-dashboard intensive-subject">${intensiveSubjectHeaderMarkup(type, "tasks")}${intensiveTaskOverviewMarkup(type, event.target.value)}</div>`;
      return;
    }
    if (event.target.id === "automationMonthSelect" || event.target.id === "automationBatchSelect" || event.target.id === "automationRegionSelect") {
      const month = $("#automationMonthSelect")?.value || "6月";
      const batch = $("#automationBatchSelect")?.value || "全部";
      const region = $("#automationRegionSelect")?.value || "全部";
      const detailMode = $(".automation-mode-switch .active")?.dataset.automationDetailMode || "score";
      const subView = $(".automation-subnav .active")?.dataset.automationSubview || "dashboard";
      $("#intensiveInsightContent").innerHTML = automationDashboardMarkup(month, batch, detailMode, subView, region);
    }
    if (event.target.id === "intensiveMonthSelect" || event.target.id === "intensiveRegionSelect") {
      const active = $(".intensive-subnav .active");
      const type = active?.dataset.intensiveType || "acceptance";
      const subView = active?.dataset.intensiveSubview || "dashboard";
      const month = $("#intensiveMonthSelect")?.value || "5月";
      const mode = $(".intensive-inline-switch .active")?.dataset.intensiveMode || "score";
      const region = $("#intensiveRegionSelect")?.value || "大区";
      $("#intensiveInsightContent").innerHTML = intensiveSubjectMarkup(type, subView, month, mode, region);
    }
  });

  document.body.addEventListener("input", (event) => {
    if (event.target.matches("[data-star-task-filter='progress']")) {
      updateStarProgressWorkspace();
      return;
    }
    if (!event.target.matches("[data-star-progress-range]")) return;
    const valueInput = event.target.closest(".progress-slider-box")?.querySelector("[data-star-progress-value]");
    if (valueInput) valueInput.value = `${event.target.value}%`;
  });

  document.body.addEventListener("submit", (event) => {
    if (event.target.id !== "agentForm") return;
    event.preventDefault();
    const input = $("#agentQuestion");
    sendAssistantQuestion(input.value);
    input.value = "";
  });
}

renderNavigation();
renderCards();
bindEvents();
