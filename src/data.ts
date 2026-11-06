import { Service, ExperienceItem, TranslationSet } from './types';

export const TRANSLATIONS: Record<'en' | 'zh', TranslationSet> = {
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navExperience: 'Experience',
    navTimeline: 'Besides',
    
    heroBadge: '✦ OPEN FOR ROLES • MAY 2026 ✦',
    heroSub: 'Deeply rooted in the automotive industry, working in the Project Management Department. Responsible for managing overseas client requirements, and seamless team docking with domestic engineering squads to complete high-standard solutions. Leading full-lifecycle overseas KD operations and guiding flagship Thailand vehicle line SOP launches.',
    
    tickerText: [
      'KD PARTS INTEGRATION', 'OVERSEAS LINE INSTALLATION', 'CLIENT REQUIREMENT INTAKE', 'TECHNICAL TEAM DOCKING', 'AUTO-PAINTING LINES', 'PROJECT DELIVERY', 'FACTORY LAUNCH COLLAB'
    ],
    
    servicesTitleHighlight: 'key proficiencies',
    servicesTitleRest: 'My broad',
    servicesSub: 'Engineered for scalability, precise cross-culture operational alignments, raw order orchestration, and robust manufacturing quality delivery.',
    
    aboutTitle: 'Who\'s behind all this',
    aboutHighlight: 'impactful work?',
    aboutSub: 'I am Zhou Yu, an Master of International Business alumnus from Monash University Malaysia campus (where I completed two years of master\'s studies in Kuala Lumpur, Malaysia) and Bachelor of Economics alumnus from East China University of Political Science and Law. I currently serve as an Overseas KD Business Manager in the Project Management Department at Glopiv. I manage diverse overseas customer requests, bridging communication gaps and docking with domestic technical teams to resolve product issues, remove plant setup bottlenecks, and secure zero-delay SOP targets.',
    aboutExperienceLabel: 'Overseas Demand Integration',
    aboutExperienceSub: 'Managing diverse overseas client requirements, aligning engineering metrics, SOP schedules, and scope parameters.',
    aboutProjectsLabel: 'Global SOP Factories Launches',
    aboutProjectsSub: 'Heading vehicle lines assembly, test runs, and complete SOP launches in major Thailand centers.',
    aboutButton: 'See my projects & journey ✦',
    
    
    experienceTitle: 'Take a look at my',
    experienceHighlight: 'past experience',
    experienceSub: 'A journey of technical authority, project leadership, and meticulous industrial execution. Consistently driving projects up to success.',
    experienceCta: 'See full resume (PDF) 🗎',
    
    
    
    newsletterTitle: 'Subscribe to my industry letter',
    newsletterPlaceholder: 'Enter your email address',
    newsletterButton: 'Subscribe',
    newsletterSuccess: 'Awesome! You have subscribed safely.',
    
    footerRights: 'Made with passion. © 2026 Zhou Yu. All rights reserved.',
    footerSlogan: 'Daring automotive KD leadership. No standard templates. Built to drive Chinese brands across frontiers.'
  },
  zh: {
    navHome: '首页',
    navAbout: '关于我',
    navServices: '专业能力',
    navExperience: '行业经历',
    navTimeline: '此外',
    
    heroBadge: '✦ 开放合作机会 • 2026年5月 ✦',
    heroSub: '正在深耕汽车制造领域，负责Glopiv集团的海外KD项目统筹。全力承接海外车企客户的多样化需求，端到端对接我司顶尖技术与工程团队完成需求的最佳开发解决。致力于海外KD（散件组装）项目全生命周期策划、跨文化协调与海外基地SOP量产成果的最终落地。',
    
    tickerText: [
      '海外客户需求承接', '海外产线安装', '国内技术团队对接', '客户需求深度解决', '海外KD项目统筹', 'SOP量产调试', '工厂投产协同'
    ],
    
    servicesTitleHighlight: '专业核心能力',
    servicesTitleRest: '我深耕多年的',
    servicesSub: '依托项目管理部的系统机制，精准把握海外客户多样需求，桥接并赋能中国雄厚汽车产品技术，实现跨国零缺陷投产。',
    
    aboutTitle: '是谁在统筹这些',
    aboutHighlight: '重磅项目？',
    aboutSub: '我叫周宇，硕士毕业于莫纳什大学马来西亚校区国际商务专业（在马来西亚吉隆坡完成了两年的硕士学业），本科毕业于华东政法大学经济学专业。目前在 Glopiv 项目管理部担任海外KD业务经理。主要负责高效对接海外客户需求，协调国内顶尖技术团队进行全生命周期的产品及工艺解决方案开发，破除各链条壁垒，把控核心项目交付与零延误SOP成果落地。',
    aboutExperienceLabel: '海外客户需求承接',
    aboutExperienceSub: '负责全面承接跨国整车客户的多样化工程、材料与工艺要求，梳理形成规范的产品包需求。',
    aboutProjectsLabel: '国内技术团队对接',
    aboutProjectsSub: '端到端组织及对接国内多学科核心技术专家与装配工艺力量，高效推动客户痛点顺利化解。',
    aboutButton: '浏览我的汽车项目 & 履历 ✦',
    
    
    experienceTitle: '带您回顾我的',
    experienceHighlight: '职业&学业履历',
    experienceSub: '从知名汽车系统、大型工业集团到海外KD项目经理，用技术深度与管理广度推动业务增长。',
    experienceCta: '查看完整简历 (PDF) 🗎',
    
    
    
    newsletterTitle: '订阅我的行业分享简报',
    newsletterPlaceholder: '输入您的电子邮箱地址',
    newsletterButton: '立即订阅',
    newsletterSuccess: '订阅成功！感谢您的关注。',
    
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
      en: 'Spearheading vehicle KD assembly and mass-production launches within the Project Management Department. Primarily responsible for receiving diverse overseas client requirements and docking directly with domestic R&D/technical squads to build tailored engineering solutions, resolving bottlenecks and securing Thailand SOP.',
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
      en: 'Monash University Malaysia (Kuala Lumpur | QS #37)',
      zh: '莫纳什大学马来西亚校区 (马来西亚吉隆坡 | 当前世界排名第37位)'
    },
    desc: {
      en: 'Completed two years of intensive master\'s studies at the Kuala Lumpur campus under Monash University (QS #37), focusing on strategic study of multinational strategic management, international logistics, supply chain, and cross-cultural communication. Conducted in-depth localization policy and commercial risk research across APAC and Southeast Asia (including Thailand) regions, building strong analytical framework for international industrial business. Earned excellent academic distinctions in business negotiation and global team leadership modules.',
      zh: '在马来西亚吉隆坡校区完成了两年的硕士学业。系统修读跨文化商业沟通、跨国企业战略管理和国际物流供应链管理。深度分析亚太及东南亚（包括泰国）新兴市场的准入规则与本地供应链本土化运作模型，撰写多篇高水平市场调研及供应链配置方案报告。主修商业谈判与项目协调课程，获得优秀毕业生评价，为日后主导海外KD项目跨国沟通与供应链统筹打下坚实的国际化商业底蕴。'
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

