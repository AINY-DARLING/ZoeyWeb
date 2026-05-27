import { Project, Service, ExperienceItem, Testimonial, Article, TranslationSet } from './types';

export const TRANSLATIONS: Record<'en' | 'zh', TranslationSet> = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navPortfolio: 'Portfolio',
    navExperience: 'Experience',
    navTimeline: 'Besides',
    navContact: 'Contact',
    navCart: 'Cart',
    navPages: 'Pages',
    
    heroBadge: '✦ OPEN FOR ROLES • MAY 2026 ✦',
    heroHeadingI: 'I\'m',
    heroHeadingAm: '',
    heroHeadingA: 'an',
    heroHeadingDesigner: 'Overseas KD Project Manager',
    heroHeadingFrom: 'from',
    heroHeadingLocation: 'China',
    heroSub: 'Deeply rooted in the automotive industry, working in the Project Management Department. Responsible for managing overseas client requirements, and seamless team docking with domestic engineering squads to complete high-standard solutions. Leading full-lifecycle overseas KD operations and guiding flagship Middle East vehicle line SOP launches.',
    heroCtaContact: 'Get in touch ✉',
    heroCtaPortfolio: 'View case studies ↗',
    
    tickerText: [
      'KD PARTS INTEGRATION', 'OVERSEAS LINE INSTALLATION', 'CLIENT REQUIREMENT INTAKE', 'TECHNICAL TEAM DOCKING', 'AUTO-PAINTING LINES', 'PROJECT DELIVERY', 'FACTORY LAUNCH COLLAB'
    ],
    
    servicesTitleHighlight: 'key proficiencies',
    servicesTitleRest: 'My broad',
    servicesSub: 'Engineered for scalability, precise cross-culture operational alignments, raw order orchestration, and robust manufacturing quality delivery.',
    
    aboutTitle: 'Who\'s behind all this',
    aboutHighlight: 'impactful work?',
    aboutSub: 'I am Zhou Yu, an Master of International Business alumnus from Monash University and Bachelor of Economics alumnus from East China University of Political Science and Law. I currently serve as an Overseas KD Business Manager in the Project Management Department at Glopiv. I manage diverse overseas customer requests, bridging communication gaps and docking with domestic technical teams to resolve product issues, remove plant setup bottlenecks, and secure zero-delay SOP targets.',
    aboutExperienceLabel: 'Overseas Demand Integration',
    aboutExperienceSub: 'Managing diverse overseas client requirements, aligning engineering metrics, SOP schedules, and scope parameters.',
    aboutProjectsLabel: 'Global SOP Factories Launches',
    aboutProjectsSub: 'Heading vehicle lines assembly, test runs, and complete SOP launches in major Middle East centers.',
    aboutButton: 'See my projects & journey ✦',
    
    portfolioTitle: 'Take a look at my',
    portfolioHighlight: 'portfolio cases',
    portfolioSub: 'Real interactive case studies showcasing the intersection of logistics timing, enterprise treasury allocation, and vendor scheduling.',
    portfolioCta: 'Browse all cases ❐',
    portfolioViewCase: 'View case study',
    
    experienceTitle: 'Take a look at my',
    experienceHighlight: 'past experience',
    experienceSub: 'A journey of technical authority, project leadership, and meticulous industrial execution. Consistently driving projects up to success.',
    experienceCta: 'See full resume (PDF) 🗎',
    
    testimonialsTitle: 'What my partners say',
    testimonialsHighlight: 'about my work',
    testimonialsSub: 'Don\'t take my word for it. Here is how worldwide automotive plant operations leaders and finance directors review our collaborations.',
    
    articlesTitle: 'Articles & News',
    articlesCta: 'Browse all articles ✎',
    articlesReadMore: 'Read article ↗',
    
    newsletterTitle: 'Subscribe to my industry letter',
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe',
    newsletterSuccess: 'Awesome! You have subscribed safely.',
    
    footerContactUs: 'Contact us',
    footerPhone: 'Phone & Socials',
    footerRights: 'Made with passion. © 2026 Zhou Yu. All rights reserved.',
    footerSlogan: 'Daring automotive KD leadership. No standard templates. Built to drive Chinese brands across frontiers.'
  },
  zh: {
    navHome: '首页',
    navAbout: '关于我',
    navServices: '专业能力',
    navPortfolio: '核心项目',
    navExperience: '行业经历',
    navTimeline: '此外',
    navContact: '联络我',
    navCart: '购物车',
    navPages: '页面',
    
    heroBadge: '✦ 开放合作机会 • 2026年5月 ✦',
    heroHeadingI: '我是',
    heroHeadingAm: '',
    heroHeadingA: '一位来自',
    heroHeadingDesigner: '汽车KD项目经理',
    heroHeadingFrom: '中国的',
    heroHeadingLocation: '周宇',
    heroSub: '正在深耕汽车制造领域，负责Glopiv集团的海外KD项目统筹。全力承接海外车企客户的多样化需求，端到端对接我司顶尖技术与工程团队完成需求的最佳开发解决。致力于海外KD（散件组装）项目全生命周期策划、跨文化协调与海外基地SOP量产成果的最终落地。',
    heroCtaContact: '即刻联络 ✉',
    heroCtaPortfolio: '浏览项目案例 ↗',
    
    tickerText: [
      '海外客户需求承接', '海外产线安装', '国内技术团队对接', '客户需求深度解决', '海外KD项目统筹', 'SOP量产调试', '工厂投产协同'
    ],
    
    servicesTitleHighlight: '专业核心能力',
    servicesTitleRest: '我深耕多年的',
    servicesSub: '依托项目管理部的系统机制，精准把握海外客户多样需求，桥接并赋能中国雄厚汽车产品技术，实现跨国零缺陷投产。',
    
    aboutTitle: '是谁在统筹这些',
    aboutHighlight: '重磅项目？',
    aboutSub: '我叫周宇，硕士毕业于莫纳什大学国际商务专业，本科毕业于华东政法大学经济学专业。目前在 Glopiv 项目管理部担任海外KD业务经理。主要负责高效对接海外客户需求，协调国内顶尖技术团队进行全生命周期的产品及工艺解决方案开发，破除各链条壁垒，把控核心项目交付与零延误SOP成果落地。',
    aboutExperienceLabel: '海外客户需求承接',
    aboutExperienceSub: '负责全面承接跨国整车客户的多样化工程、材料与工艺要求，梳理形成规范的产品包需求。',
    aboutProjectsLabel: '国内技术团队对接',
    aboutProjectsSub: '端到端组织及对接国内多学科核心技术专家与装配工艺力量，高效推动客户痛点顺利化解。',
    aboutButton: '浏览我的汽车项目 & 履历 ✦',
    
    portfolioTitle: '带您审阅我的',
    portfolioHighlight: '核心实战案例',
    portfolioSub: '真实发生的卓越交付案例：展现海外本地建厂协调、大型供应链排产以及集团资金融通的综合才智。',
    portfolioCta: '浏览全部案例 ❐',
    portfolioViewCase: '查看详细案例',
    
    experienceTitle: '带您回顾我的',
    experienceHighlight: '职业&学业履历',
    experienceSub: '从知名汽车系统、大型工业集团到海外KD项目经理，用技术深度与管理广度推动业务增长。',
    experienceCta: '查看完整简历 (PDF) 🗎',
    
    testimonialsTitle: '同行与合作伙伴对我的',
    testimonialsHighlight: '真实口碑评价',
    testimonialsSub: '不只是自夸。来看看与我并肩作战的各界朋友和项目负责人是如何评价这一路攻坚克难的。',
    
    articlesTitle: '行业洞察与专业文章',
    articlesCta: '阅读全部文章 ✎',
    articlesReadMore: '阅读文章 ↗',
    
    newsletterTitle: '订阅我的行业分享简报',
    newsletterPlaceholder: '输入您的电子邮箱地址',
    newsletterButton: '立即订阅',
    newsletterSuccess: '订阅成功！感谢您的关注。',
    
    footerContactUs: '极速建联',
    footerPhone: '电话与社媒',
    footerRights: '用心造物。© 2026 周宇. 版权所有。',
    footerSlogan: '深耕海外KD技术，杜绝千篇一律的刻板。为中国汽车品牌出海量身定制。'
  }
};

export const SERVICES: Service[] = [
  {
    id: 'kd-project-management',
    iconName: 'Layout',
    title: {
      en: 'Overseas KD Project Management',
      zh: '海外 KD 项目全生命周期统筹'
    },
    desc: {
      en: 'Coordinating cross-border assembly line blueprints, bulk parts (KD) packaging, customs logistics tracking, staging trials, up to flawless SOP launch.',
      zh: '统筹跨国组装产线规划、散件（KD）拆装与集装箱海运、物流进出口跟进，负责海外装配厂全面试跑并成功推进量产 SOP 启动。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  },
  {
    id: 'customer-demand-bridge',
    iconName: 'Watch',
    title: {
      en: 'Technical Liaison & Solution Delivery',
      zh: '海外客户需求承接与技术对接解决'
    },
    desc: {
      en: 'Primary lead in project management office, capturing overseas clients demands and bridging with domestic R&D/technical teams to solve challenges.',
      zh: '项目管理部核心职责，精准承接并梳理海外客户需求，全栈对接国内资深工程技术团队，高质高效完成对客户痛点与技术需求的落地解决。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  },
  {
    id: 'trade-financing-negotiation',
    iconName: 'Smartphone',
    title: {
      en: 'Global Trade Financing & Treasury Strategy',
      zh: '国际贸易融资与集团资金运筹谈判'
    },
    desc: {
      en: 'Formulating multi-tiered funding allocation plans, negotiating credit rates with primary banking desks, and leveraging international credit payments (Letters of Credit) to optimize liquidity.',
      zh: '高效测算编制海量资金结算与划拨预案，与大行谈判博弈存贷价差降低成本，并敏捷落地信用证、国际贸易结算方式，防范用汇风险与供应链资金瓶颈。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  },
  {
    id: 'cross-cultural-collaboration',
    iconName: 'Search',
    title: {
      en: 'Cross-cultural Liaison & Collaboration',
      zh: '跨国跨文化高效协同与沟通'
    },
    desc: {
      en: 'Bridging communication gaps between domestic experts, foreign partners, local staff, and clients, ensuring smooth project momentum.',
      zh: '跨越语言、地缘和文化的阻碍，高效串联中方工程人员、外方高层、本地一线工人及客群，搭建极具凝聚力与本地合作氛围的项目机制。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  },
  {
    id: 'supply-chain-optimization',
    iconName: 'Video',
    title: {
      en: 'Supply Chain & ERP Systems Tuning',
      zh: '敏捷供应链与 SAP 系统跟进'
    },
    desc: {
      en: 'Aligning with buyer procurement orders, allocating production instructions, organizing logistics storage, keeping SAP database synchronized.',
      zh: '密切关注上下游订购需求，敏捷核对物料到货状态，调度分发排产指令；精确定期录入维护 SAP 系统数据，剔除物料流转瓶颈。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  },
  {
    id: 'digital-retail-incubation',
    iconName: 'Sliders',
    title: {
      en: 'Venture Incubation & Scalable Business Modeling',
      zh: '跨界商业孵化与数字化闭环设计'
    },
    desc: {
      en: 'Designing flexible supply chain integrations and digital retail models, driving pitch sessions, and engineering full-lifecycle operational strategies for startup successes.',
      zh: '主导商业闭环方案设计，统筹规划线上数字化零售与线下柔性供应链的深度咬合；主笔核心商业分析，把控项目路演与多方对接，实现全周期商业模型验证。'
    },
    bgColor: '#FAF9F6',
    textColor: '#171717'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'dt-middle-east',
    title: {
      en: 'Middle East Automotive “DT” KD Assembly & SOP Program',
      zh: '中东汽车“DT”海外 KD 拆装组装与 SOP 试跑量产战役'
    },
    category: {
      en: 'Overseas KD Project Management & Tooling',
      zh: '海外 KD 项目管理 & 工艺现场调试'
    },
    bgColor: '#8B5CF6',
    textColor: '#FFFFFF',
    accentColor: '#FFD200',
    desc: {
      en: 'Successfully spearheaded the full bulk parts breakdown, logistics alignment, plant tooling integration, and line verification trials for the flagship DT vehicle lineup in Middle Eastern assembly zones. Acting as the core interface to intake client specifications and bridge with domestic engineering experts.',
      zh: '全权统筹项目管理部旗下中东海外工厂的一线KD项目全生命周期落地。深入理解、承接并转化海外大客户的技术开发与现场组装工艺要求，高效对接国内各车间及产品专家团队给予攻关解决，破除各种物料干涉与装配异常瓶颈。'
    },
    mockupType: 'dashboard',
    tags: ['海外 KD 统筹', '需求承接与解决', 'SOP 量产试跑', '中外团队对接'],
    features: {
      en: [
        'Captured and standardized complex client specifications into actionable engineering deliverables',
        'Coordinated cross-border packing, customs clearances, and marine containers timing pipeline',
        'Bridged communication between domestic floor engineers and foreign regional partners',
        'Eliminated assembly interference issues, verifying a zero-delay local plant commission'
      ],
      zh: [
        '精准承接并模块化梳理海外大客户的多样化技术、工艺与工程规范需求',
        '规划大型海运散装拆解、特种件防护集装箱运输及到岸关检物流链条',
        '端到端无缝对接国内核心技术团队，全生命周期保障解决方案的高规格产出',
        '现场带领中外技术组消减三大现场干涉瓶颈，促成项目 100% 零延误达成 SOP 目标'
      ]
    }
  },
  {
    id: 'kerry-treasury',
    title: {
      en: 'Kerry Oils / Jinlongyu Factory-Chain Capital Management Program',
      zh: '金龙鱼股份（嘉里食品）全国工厂大型账物资金融通计划'
    },
    category: {
      en: 'Enterprise Treasury & Multi-Bank Negotiation',
      zh: '集团资金融通 & 信用证财务套利'
    },
    bgColor: '#3B82F6',
    textColor: '#FFFFFF',
    accentColor: '#FF5E5B',
    desc: {
      en: 'Coordinated macro capital allocation and liquidity funding operations for several premier industrial processing mills in the Kerry Oils portfolio, supporting uninterrupted daily raw-material purchasing power.',
      zh: '掌理金龙鱼（嘉里食品工业）旗下全国多家核心粮油深加工工厂的日常大规模资金需求测算。通过高频汇总，精妙布局资金融通方案：开展大行存贷价差套利、开展信用证等国际信用付款与贸易融资。'
    },
    mockupType: 'browser',
    tags: ['资金融通计划', '利差价格磋商', '信用证融资工具', '制造链条资金保障'],
    features: {
      en: [
        'Synthesized daily multi-mill raw input orders to engineer precision funding allocation models',
        'Negotiated spread terms with tier-1 commercial bank desks to extract financial margins',
        'Utilized Letter of Credit metrics to safely boost working capital structures',
        'Defended complex high-volume trade pipelines against liquidity or shipping cycle disruptions'
      ],
      zh: [
        '实时统计及推算金龙鱼旗下多处重大加工网点物料备货资金流信息，制定资金调度图表',
        '与多家国家大型商业银行金融产品经理直接沟通谈判，最大化压缩中介成本赚取财务收益',
        '熟练操作并落地信用证等国际贸易结算与信用融资工具，化解高频用汇风险',
        '在极度紧凑的贸易交货期下，为一线核心加工厂每日安全平稳划付千万级流转资金'
      ]
    }
  },
  {
    id: 'alfmeier-components',
    title: {
      en: 'Alfmeier Automotive Precision Components Supply Chain Alignment',
      zh: '德系艾福迈 (Alfmeier) 汽车阀体与精密零部件供应链排产跟进'
    },
    category: {
      en: 'Automotive SAP Data & Vendor Synchronization',
      zh: '整车供应链跟进 & SAP ERP 生产指令调度'
    },
    bgColor: '#FF5E5B',
    textColor: '#FFFFFF',
    accentColor: '#5CE1E6',
    desc: {
      en: 'Directly managed purchaser requirements integration, components manufacturing queuing, raw parts stock synchronization, and warehouse dispatch mechanics using optimized SAP configurations.',
      zh: '服务于德系汽车核心系统阀片与管件供应商艾福迈（Alfmeier）。对口全球优选汽车制造客户，合理化分解采购订单并全流程跟进工厂生产排期与现场物流分发。'
    },
    mockupType: 'code',
    tags: ['供应链排程', 'SAP ERP 运行跟进', '仓储精益流转', '跨部门交货闭环'],
    features: {
      en: [
        'Successfully aligned automotive client bill of materials directly into dynamic plant instructions',
        'Optimized SAP master data integrity, reducing warehouse delivery latency parameters',
        'Coordinated with raw vendors and line logistics dispatch to maintain low manufacturing deadlocks',
        'Orchestrated multi-tier emergency containment protocols during shipping and transit lags'
      ],
      zh: [
        '快速承接整车厂采购物料清单（BOM），拆解并下发最优工厂生产线作业任务',
        '深度维护并剔除 SAP 系统中零配件数据偏差，使原材料和成品在仓储与物流阶段流转耗时缩短',
        '跟进配套供应商配送状态、协调仓库备料，杜绝总段组配缺料引发的停工待料事件',
        '针对不确定的出海陆物联，迅速启动跨国联络重排物流组合，完成 100% 协议交货承诺'
      ]
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    timeline: {
      en: 'Jun 2024 - Present',
      zh: '2024年6月 - 至今'
    },
    role: {
      en: 'Overseas KD Project Manager',
      zh: '海外 KD 项目经理'
    },
    company: {
      en: 'Glopiv',
      zh: 'Glopiv'
    },
    desc: {
      en: 'Spearheading vehicle KD assembly and mass-production launches within the Project Management Department. Primarily responsible for receiving diverse overseas client requirements and docking directly with domestic R&D/technical squads to build tailored engineering solutions, resolving bottlenecks and securing Middle East SOP.',
      zh: '当前在项目管理部统筹海外多款车型KD量产项目。主要负责全面承接跨国KD客户的多样化工程与组装工艺需求，端到端高效对接国内技术、试验及制造技术团队协助攻关，解决现场干涉与物料瓶颈，促成整车高分量产并在海外基地成功取得SOP。'
    },
    iconType: 'management'
  },
  {
    id: 'exp-grad',
    timeline: {
      en: 'Jul 2021 - Dec 2023',
      zh: '2021年7月 - 2023年12月'
    },
    role: {
      en: 'Master of International Business (Graduate)',
      zh: '国际贸易硕士研究生'
    },
    company: {
      en: 'Monash University (QS World University Ranking: #37)',
      zh: '莫纳什大学 (当前世界排名：第37位)'
    },
    desc: {
      en: 'Focused study of multinational strategic management, international logistics, supply chain, and cross-cultural communication. Conducted in-depth localization policy and commercial risk research across APAC and Middle East regions, building strong analytical framework for international industrial business. Earned excellent academic distinctions in business negotiation and global team leadership modules.',
      zh: '系统修读跨文化商业沟通、跨国企业战略管理和国际物流供应链管理。深度分析亚太及中东地区新兴市场的准入规则与本地供应链本土化运作模型，撰写多篇高水平市场调研及供应链配置方案报告。主修商业谈判与项目协调课程，获得优秀毕业生评价，为日后主导海外KD项目跨国沟通与供应链统筹打下坚实的国际化商业底蕴。'
    },
    iconType: 'design'
  },
  {
    id: 'exp-2',
    timeline: {
      en: 'Apr 2020 - Apr 2021',
      zh: '2020年4月 - 2021年4月'
    },
    role: {
      en: 'Treasury & Liquidity Specialist',
      zh: '集团资金融通主管'
    },
    company: {
      en: 'Shanghai Kerry Food Industry Co. (Jinlongyu/Arawana)',
      zh: '金龙鱼集团（益海嘉里集团）'
    },
    desc: {
      en: 'Aggregated raw liquidity inputs, orchestrated capital schedules, and ensured smooth production fund flows spanning dozens of domestic food refining complexes. Directly negotiated rates with primary lenders, leveraging spot-spread structures.',
      zh: '汇总集团内全国各分/子工厂的海量资金结算和划拨需求，编制划款预案保障各大园区制造供应链资金正常滚动。结合公司在各行的资金富余及缺口态势，与各大银行直接博弈价差博取财务利润，并熟练运用信用证方式扩充融资额度，为益海嘉里上海企业群赚取直接利润'
    },
    iconType: 'tech'
  },
  {
    id: 'exp-3',
    timeline: {
      en: 'Oct 2019 - Mar 2020',
      zh: '2019年10月 - 2020年3月'
    },
    role: {
      en: 'Automotive Supply Chain Analyst',
      zh: '供应链排产与跟单专员'
    },
    company: {
      en: 'Alfmeier Automotive Systems (Shanghai) Co., Ltd.',
      zh: '艾福迈 (Alfmeier) 汽车系统 (上海) 有限公司'
    },
    desc: {
      en: 'Synchronized buyer orders directly inline with manufacturing quotas. Issued raw routing codes, handled physical stock dispatches, and kept SAP Master Data metrics tightly aligned with zero structural delay.',
      zh: '精准对口核心整车客户的大额采购订单，全程跟踪零部件分发时效，敏捷调度最优车间装配指令并控制在制品库存。主导对接仓配系统（WMS）与现代化TMS，建立异常物流响应机制，闭环保障精益交付流转；同时作为客户端质量响应接口，深度参与产品失效分析，撰写8D报告并推动工艺持续改进，使客户直通率与满意度大幅上升。'
    },
    iconType: 'work'
  },
  {
    id: 'exp-4',
    timeline: {
      en: 'Apr 2018 - May 2019',
      zh: '2018年4月 - 2019年5月'
    },
    role: {
      en: 'Venture Incubation Team Captain',
      zh: '大创“欧克数码”国奖战队队长'
    },
    company: {
      en: 'National Entrepreneurship Competition Award Project',
      zh: '大学生创新创业大赛 (国家级奖项项目)'
    },
    desc: {
      en: 'Formulated cohesive business pitch and logistics logic, aligning tasks across multi-discipline experts. Raised crucial pre-seed backing from corporate partners, pushing the study to achieve a National Tier-1 Certificate.',
      zh: '作为项目负责人组建并领衔跨学科技术与运营核心班底，主导“欧克数码”项目的全生命周期孵化与商业模型设计。统筹规划线上数字化零售与线下柔性供应链深度咬合的商业闭环方案。主导项目推进和答辩，以优异成绩斩获大学生创新创业大赛国家级奖项，展现出卓越的项目统筹、商业敏锐度及项目对接沟通能力。'
    },
    iconType: 'design'
  },
  {
    id: 'exp-5',
    timeline: {
      en: 'Sep 2016 - Jun 2020',
      zh: '2016年9月 - 2020年6月'
    },
    role: {
      en: 'Business School Class President',
      zh: '商学院 1632 班班长'
    },
    company: {
      en: 'East China University of Political Science and Law',
      zh: '华东政法大学'
    },
    desc: {
      en: 'Led class daily education logs and cultural assemblies. Orchestrated freshman induction and team activities, building deep cohesion and forging life-long personal networks with colleagues.',
      zh: '担任 1632 班班长全面主抓教务对接、活动筹办及班子文化建树。顺利协同执行军训、各类文艺演练等集体活动，积累了充沛的群团沟通才能，也结识并收获了在今后事业中的挚友们。度过了人生最美好的四年。'
    },
    iconType: 'design'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: {
      en: 'Zhou Yu possesses a rare, staggering understanding of international project operations. During our overseas DT car plant commission, he did not just coordinate parts and tools; he bridged all cultural and technical barriers, acting as the ideal project manager to channel client requirements and align domestic technical squads. A sheer force of delivery!',
      zh: '周宇 在我们中东“DT”车型散件组装与海外工厂落地调试期间展现出了无与伦比的全局运筹力与现场攻坚深度。他作为项目管理部桥梁，不仅精准承接海外各项紧凑技术指标，更能极其流畅地调配并对接国内顶级技术和工程团队，打破现场瓶颈。绝对一流的项目统筹先锋！'
    },
    author: 'Abdullah Al-Subaie',
    role: {
      en: 'Director of Plant Operations, Middle East Automotive Hub',
      zh: '中东海外汽车组装工厂生产运营总监'
    },
    avatarSeed: 'lily'
  },
  {
    id: 'test-2',
    quote: {
      en: 'Working with Zhou Yu in group treasury was an absolute privilege. His daily cash requirements modeling for dozens of industrial processing factories allowed us to optimize liquidity spread margins with commercial banks and leverage import L/C structures safely under extreme delivery cycles.',
      zh: '在金龙鱼同周宇共事资金融通的岁月里，他的数字敏感度与宏观把控令人折服。通过日常对全中国数十个大型工厂的备货资金进行高保真测算，他与各大行博弈价差博取财务收益，在极度紧凑的贸易结算期内为供应链筑牢了最平稳、最安全的用汇流动防线。'
    },
    author: '李建明 (Jianming Li)',
    role: {
      en: 'Treasury & Funding Director, Kerry Grain & Oil Group',
      zh: '益海嘉里（金龙鱼所属集团）总部资金部副总监'
    },
    avatarSeed: 'marcus'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    tag: {
      en: 'Automotive KD',
      zh: '海外 KD 筹集'
    },
    title: {
      en: 'How to coordinate overseas automotive KD projects: from client requirement integration to multi-party technical docking',
      zh: '如何全流程统筹海外汽车 KD 项目的客户需求承接与跨国多方技术对接及解决？'
    },
    desc: {
      en: 'An in-depth guide from a project management perspective, covering client requirements capture, domestic technical team alignment, and solving cross-border production challenges.',
      zh: '跨国建厂实务：项目管理部视角，详解如何精准对接并承接海外客户痛点、高效协同国内各车间技术专家与进行多语种解决方案开发。'
    },
    date: 'May 18, 2026',
    author: '周宇 (Zhou Yu)',
    readTime: {
      en: '6 min read',
      zh: '阅读时长约 6 分钟'
    },
    bgColor: '#FFD200',
    illustrationType: 'tools'
  },
  {
    id: 'art-2',
    tag: {
      en: 'Supply Chain',
      zh: '供应链排程'
    },
    title: {
      en: 'The complete playbook on SAP ERP and lean materials tracking for industrial lines',
      zh: 'SAP ERP 深度实务：大型汽车与零配件制造产线精益物料跟单与主生产计划跟进'
    },
    desc: {
      en: 'Learn to eliminate parts starvation and reduce inventory dwell time by keeping Bill of Materials (BOM) strictly aligned with shopfloor dispatch triggers.',
      zh: '系统性复盘如何承接整车厂物料清单（BOM）跟单采购，减少在库周转积压，理顺总装车间生产跟进与物流分发的实操干货。'
    },
    date: 'Apr 24, 2026',
    author: '周宇 (Zhou Yu)',
    readTime: {
      en: '4 min read',
      zh: '阅读时长约 4 分钟'
    },
    bgColor: '#FF5E5B',
    illustrationType: 'hierarchy'
  },
  {
    id: 'art-3',
    tag: {
      en: 'Group Treasury',
      zh: '集团资金融通'
    },
    title: {
      en: 'Financing global operations: Letters of Credit and treasury spread arbitrages',
      zh: '大型企业集团全球化资金运营：信用证风险付款、套利与大行存贷利差价深度谈判'
    },
    desc: {
      en: 'Practical methodologies on mapping cash requirements for industrial plants while using Letter of Credit structures to leverage working capital limits.',
      zh: '高含金量案例：拆解如何精准合计全国多家加工实体资金量、向合作银行争取最优汇价，并熟练落地信用额度保障物料付款安全。'
    },
    date: 'Mar 15, 2026',
    author: '周宇 (Zhou Yu)',
    readTime: {
      en: '8 min read',
      zh: '阅读时长约 8 分钟'
    },
    bgColor: '#5CE1E6',
    illustrationType: 'tips'
  }
];
