import { JobView } from './types'

export const jobs: JobView[] = [
  { id:'job-1', slug:'bytedance-ai-product-manager', title:'AI 产品经理（校招）', company:'字节跳动', companySlug:'bytedance', companyLogo:'字', recruitmentStatus:'OPEN', city:'北京', cities:['北京','上海'], category:'产品', education:'本科及以上', salary:'25–40K · 15薪', publishedAt:'今天 09:20', deadline:'09月30日', isNew:true, matchScore:94, tags:['AI 应用','数据分析','产品策略'], description:'参与 AI 产品从洞察、规划到落地的完整过程，为亿级用户打造更智能的内容与创作体验。', responsibilities:['研究用户需求与行业趋势，形成产品路线图','协同算法、研发与设计团队推进产品落地','建立核心指标体系并持续迭代体验'], requirements:['2027 届本科及以上学历','对 AI 产品有强烈兴趣与实践经历','具备结构化分析和跨团队沟通能力'], highlights:['核心 AI 业务','导师制培养','转正通道明确'] },
  { id:'job-2', slug:'meituan-backend-engineer', title:'后端开发工程师', company:'美团', companySlug:'meituan', companyLogo:'美', recruitmentStatus:'OPEN', city:'上海', cities:['北京','上海','深圳'], category:'技术', education:'本科及以上', salary:'28–45K · 15.5薪', publishedAt:'今天 08:45', deadline:'10月15日', isNew:true, matchScore:89, tags:['Java','分布式','高并发'], description:'参与本地生活核心交易系统研发，用工程技术改善数亿用户的消费体验。', responsibilities:['负责高可用服务设计与开发','优化大规模分布式系统性能','参与技术方案评审和质量建设'], requirements:['计算机相关专业本科及以上','熟悉 Java、Go 或 C++ 中至少一种','掌握数据结构、网络和数据库基础'], highlights:['核心交易场景','技术成长快','多城市可选'] },
  { id:'job-3', slug:'xiaohongshu-content-strategy', title:'内容策略运营', company:'小红书', companySlug:'xiaohongshu', companyLogo:'红', recruitmentStatus:'PARTIALLY_OPEN', city:'上海', cities:['上海'], category:'运营', education:'本科及以上', salary:'18–28K · 15薪', publishedAt:'昨天 17:30', deadline:'09月20日', isNew:true, matchScore:86, tags:['内容生态','用户增长','策略运营'], description:'深入理解社区内容与用户，设计可规模化的内容策略，推动社区生态健康增长。', responsibilities:['分析内容生态问题并制定运营策略','策划创作者活动并跟进效果','沉淀策略方法与运营工具'], requirements:['热爱内容社区并有深度使用经验','数据敏感、逻辑清晰','有校园媒体或内容运营经历优先'], highlights:['社区核心业务','年轻团队','内容影响力'] },
  { id:'job-4', slug:'tencent-data-analyst', title:'商业数据分析师', company:'腾讯', companySlug:'tencent', companyLogo:'腾', recruitmentStatus:'OPEN', city:'深圳', cities:['深圳'], category:'数据', education:'硕士优先', salary:'22–35K · 16薪', publishedAt:'07月26日', deadline:'09月28日', isNew:false, matchScore:82, tags:['SQL','商业分析','可视化'], description:'通过数据洞察业务机会，支持产品和商业团队做出更高质量的决策。', responsibilities:['搭建业务指标与分析框架','完成专题分析与策略评估','推动数据产品和看板建设'], requirements:['统计、数学、计算机或商科背景','熟练使用 SQL 和一种分析工具','具备良好的业务理解与表达能力'], highlights:['业务视野广','数据体系成熟','学习资源丰富'] },
  { id:'job-5', slug:'ant-risk-algorithm', title:'风控算法工程师', company:'蚂蚁集团', companySlug:'ant', companyLogo:'蚂', recruitmentStatus:'OPEN', city:'杭州', cities:['杭州'], category:'算法', education:'硕士及以上', salary:'30–48K · 16薪', publishedAt:'07月25日', deadline:'10月08日', isNew:false, matchScore:77, tags:['机器学习','图学习','风控'], description:'利用机器学习和图技术解决金融风险问题，守护全球用户的资金与交易安全。', responsibilities:['构建风险识别与决策模型','研究图学习和大模型在风控中的应用','持续优化模型效果和线上稳定性'], requirements:['计算机相关硕士及以上','具备机器学习与概率统计基础','有 Kaggle、论文或相关实习经验优先'], highlights:['前沿算法场景','海量数据','专家指导'] },
  { id:'job-6', slug:'nio-user-researcher', title:'用户研究专员', company:'蔚来', companySlug:'nio', companyLogo:'蔚', recruitmentStatus:'CLOSED', city:'合肥', cities:['上海','合肥'], category:'设计', education:'本科及以上', salary:'16–25K · 14薪', publishedAt:'07月22日', deadline:'已截止', isNew:false, matchScore:71, tags:['用户研究','汽车','体验设计'], description:'围绕智能汽车全旅程开展用户研究，让真实用户声音参与产品决策。', responsibilities:['执行定性与定量用户研究','输出洞察并推动产品改进','建设用户体验知识库'], requirements:['心理学、社会学或设计相关专业','掌握访谈、问卷和可用性测试','对智能汽车有持续关注'], highlights:['实车体验','用户驱动文化','跨学科协作'] }
]

export const companyStats = [
  { name:'字节跳动', logo:'字', status:'开放中', roles:128, deadline:'09/30', tone:'amber' },
  { name:'美团', logo:'美', status:'开放中', roles:96, deadline:'10/15', tone:'yellow' },
  { name:'腾讯', logo:'腾', status:'开放中', roles:85, deadline:'09/28', tone:'blue' },
  { name:'小红书', logo:'红', status:'部分开放', roles:42, deadline:'09/20', tone:'rose' },
]

export const applications = [
  { id:'a1', job:'AI 产品经理', company:'字节跳动', stage:'SAVED' as const, score:94, next:'完善作品集' },
  { id:'a2', job:'后端开发工程师', company:'美团', stage:'APPLIED' as const, score:89, next:'等待笔试通知' },
  { id:'a3', job:'商业数据分析师', company:'腾讯', stage:'WRITTEN_TEST' as const, score:82, next:'08/02 19:00 笔试' },
  { id:'a4', job:'内容策略运营', company:'小红书', stage:'INTERVIEW' as const, score:86, next:'08/04 14:30 一面' },
]
