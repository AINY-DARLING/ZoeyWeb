import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowUpRight, GraduationCap, Calendar, Star, FileText, Check, Globe, ZoomIn, ZoomOut, Printer, Copy, RotateCcw, Download } from 'lucide-react';
import { ExperienceItem, Language, PrimaryColor, TranslationSet } from '../types';
import { EXPERIENCE } from '../data';
import zhouYuPhoto from '../assets/images/myself1.jpg';

interface ExperienceProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Experience({ lang, accentColor, translations }: ExperienceProps) {
  const [showMockResume, setShowMockResume] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);
  const [resumeLang, setResumeLang] = useState<Language>(lang);
  const [zoom, setZoom] = useState(100);

  // Sync resume language with global state when the modal opens
  React.useEffect(() => {
    if (showMockResume) {
      setResumeLang(lang);
    }
  }, [showMockResume, lang]);

  const handleCopySecretKey = () => {
    const textZH = `周宇 — 个人求职简历
邮箱: zhouyuid@gmail.com | 电话: +86 15300755797 | 工作地：北京
海外汽车 KD 项目经理 | 汽车制造与海外量产落地专家

【教育背景】
- 莫纳什大学马来西亚校区 (Monash University Malaysia, QS #37) | 国际商务硕士 (在马来西亚吉隆坡完成两年硕士学业) (2021.07 - 2023.12)
- 华东政法大学 | 经济学学士 (2016.09 - 2020.06)

【专业摘要】
硕士毕业于百强名校莫纳什大学马来西亚校区（在吉隆坡完成了两年的硕士学业），深耕汽车整车制造及散件出口组装（KD）全生命周期项目管理。不仅具备海外基地现场工艺调试协调、多方中外工程团队技术需求端到端无缝对接解决的实战经验，还曾盘配大型工业集团全国主力工厂千万级流转资金调度，熟练跟单 SAP ERP。英语流利，跨文化沟通效率高。

【工作履历】
1. Glopiv | 海外 KD 项目经理 (2024.06 - 至今)
- 统筹多车间与泰国生产基地现场，对接顶级R&D专家消化大客户诉求，突破装配干涉并 100% 达成零延误SOP。
2. 上海嘉里食品工业有限公司（益海嘉里/金龙鱼总部） | 集团资金融通主管 (2020.04 - 2021.04)
- 测算子公司每日多点现金流，多方银行价格博弈压减流转成本，熟练运用信用证融资工具。
3. 艾福迈（Alfmeier）汽车系统有限公司 | 供应链排产与跟单专员 (2019.10 - 2020.03)
- 拆解物料BOM发布德系原厂排期指令，对接看板(Kanban)消减停工待料积压，主笔8D报告改善直通率。
4. 国家大学生级级创新创业大赛项目 | 战队负责人队长 (2018.04 - 2019.05)
- 主控柔性供应设计并拿下国家级大创奖项目。

【专业技能】
- KD 制造统筹、多车间现场装配干涉解决、全球物流跟关
- 贸易融资、信用证安全付汇测算、商务利差价格博弈
- SAP/MRP 生产排期数据操作、 lean 精益看板流转、8D产品品质改善
- 语言能级：中文普通话（母语）、东北话（熟练）、湖北话（熟练）；英语工作语言级（日常流利沟通，专业零部件工程图纸全自研翻译）`;

    const textEN = `Zhou Yu (Executive CV)
Email: zhouyuid@gmail.com | Phone: +86 15300755797 | Location: Beijing, CN
Automotive KD Project Manager | Global Operations & Capital Coordinator

[Education]
- Monash University Malaysia, Kuala Lumpur Campus (QS World University Ranking #37) | Master of International Business (completed two years of master's studies in Kuala Lumpur, Malaysia) (2021.07 - 2023.12)
- East China University of Political Science and Law | Bachelor of Economics (2016.09 - 2020.06)

[Executive Summary]
Honors MIB graduate from Monash University Malaysia campus in Kuala Lumpur, deeply rooted in automotive industrial planning, PMO operations, and Knocked-Down (KD) factory project management. Outstanding track record in Thailand SOP launches, serving as primary team liaison bridging overseas client requirements with domestic R&D engineering teams. Direct experience handling massive multi-factory treasury budgeting for Fortune-500 equivalent grains enterprise (Kerry Group), manipulating letters of credit (L/C), bank negotiations, and executing SAP-driven lean material scheduling inside German automotive component factories (Alfmeier). Fully bilingual (Mandarin & fluent English) team leader.

[Professional Experience]
1. Glopiv | Overseas KD Project Manager (Jun 2024 - Present)
- Supervise vehicle KD packing assemblies, line layouts, and flawless SOP execution. Convert overseas requirements into floor instructions.
2. Shanghai Kerry Food Industry Co. | Treasury Specialist (Apr 2020 - Apr 2021)
- Map cash allocations across multi-factory sites, negotiate margin spread options with tier-1 banks, and manage Letter of Credit workflows.
3. Alfmeier Automotive Systems | Supply Chain Analyst (Oct 2019 - Mar 2020)
- Oversee BOM-to-routing allocations in SAP, eliminate supplier starvation bottlenecks, and manage client-side 8D quality corrective actions.
4. National Entrepreneurship Project "Ok Digital" | Project Captain (Apr 2018 - May 2019)
- Led team design on digital retail and flexible logistics workflows, winning the prestigious National First-Tier Entrepreneurship Prize.

[Core Competencies]
- PMO Liaison, Assembly interference resolution, Cross-border technical coordination
- Trade operations, L/C payment management, FX treasury option review
- SAP/MRP data sequence tracking, lean operations, JIT warehousing
- Languages: Fluent in English & Mandarin, with native-level proficiency in Dongbei & Hubei Chinese dialects`;

    const resumeText = resumeLang === 'zh' ? textZH : textEN;
    navigator.clipboard.writeText(resumeText);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'design':
        return <Star className="w-5 h-5 text-white" />;
      case 'management':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'tech':
        return <Briefcase className="w-5 h-5 text-white" />;
      default:
        return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'design':
        return 'bg-neo-rose';
      case 'management':
        return 'bg-neo-blue';
      case 'tech':
        return 'bg-neo-purple';
      default:
        return 'bg-neo-orange';
    }
  };

  return (
    <>
      <section className="py-24 bg-transparent text-black relative overflow-hidden border-t-3 border-black" id="experience">
        
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5 pointer-events-none" />
        
        {/* Glowing Retro Slanted Background Accents */}
        <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-neo-sky/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-neo-rose/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Title & Resume Downloader sticker */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6 text-left lg:sticky lg:top-28">
              <span className="text-xs font-mono font-black text-neo-rose uppercase tracking-widest block mb-1">
                // PROFESSIONAL CHRONOLOGICAL LOG
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight tracking-tight text-neutral-900">
                {translations.experienceTitle}{' '}
                <span className="px-3.5 py-1.5 bg-neo-blue text-white neo-border inline-block rotate-[-1deg] shadow-sm">
                  {translations.experienceHighlight}
                </span>
              </h2>
              <p className="font-sans text-neutral-600 font-medium text-sm md:text-base leading-relaxed">
                {translations.experienceSub}
              </p>

              {/* Outstanding solid white neo-button with hover offsets */}
              <button
                onClick={() => setShowMockResume(true)}
                className="neo-btn bg-white hover:bg-[#FFFDF9] text-black border-black mt-2 font-black flex items-center gap-2"
                id="experience-full-resume-btn"
              >
                <span>🗎 {translations.experienceCta}</span>
              </button>
            </div>

            {/* Right Column: High-contrast detailed cards timeline (Highly aligned grid structure!) */}
            <div className="lg:col-span-8 flex flex-col gap-8 w-full">
              
              {EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white text-black neo-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(255,210,0,1)] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]"
                  id={`experience-timeline-card-${exp.id}`}
                >
                  
                  {/* Left block dates tag badge */}
                  <div className="md:w-1/3 flex flex-col items-start gap-2.5">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg border border-black/30 font-mono text-[10px] md:text-xs font-black">
                      <Calendar className="w-3.5 h-3.5 text-neo-rose" />
                      <span>{exp.timeline[lang]}</span>
                    </div>

                    {/* Circle icon decoration representing industry field color */}
                    <div className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center shadow-sm ${getColorClass(exp.iconType)}`}>
                      {getIcon(exp.iconType)}
                    </div>
                  </div>

                  {/* Right block: Title Details and bullet logs */}
                  <div className="md:w-2/3 text-left">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-mono font-black text-black bg-neo-yellow border-2 border-black rounded-lg shadow-[3px_3px_0px_rgba(17,17,17,1)] mb-3 tracking-wide transform hover:scale-[1.03] transition-transform duration-150 select-none">
                      💼 {exp.company[lang]}
                    </span>
                    <h3 className="font-display font-black text-xl md:text-2xl text-black hover:text-neo-blue transition-colors block mt-1">
                      {exp.role[lang]}
                    </h3>

                    {/* Horizontal Divider line */}
                    <div className="my-3 border-t-2 border-dashed border-black/10" />

                    <p className="font-sans text-gray-700 text-xs md:text-sm font-medium leading-relaxed">
                      {exp.desc[lang]}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* State-of-the-art Dual-Language Resume PDF Interactive Workspace */}
      <AnimatePresence>
        {showMockResume && (
          <div className="fixed inset-0 bg-[#1e1e1e]/95 z-50 flex flex-col justify-between overflow-hidden print-modal-overlay">
            
            {/* Inject print-specific style parameters to assure pixel-perfect A4 printing */}
            <style dangerouslySetInnerHTML={{ __html: `
              @media print {
                html, body {
                  background-color: #ffffff !important;
                  color: #000000 !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  height: auto !important;
                  width: 100% !important;
                  overflow: visible !important;
                }
                
                /* Hide everything in the body except the root */
                body > *:not(#root) {
                  display: none !important;
                }
                
                /* Hide navbar, footer, falling background, and buttons */
                #falling-elements-bg, 
                header:not(.print-modal-overlay header), 
                footer, 
                nav, 
                button, 
                .no-print-toolbar,
                .no-print-footer,
                .absolute.top-0.left-0.right-0.h-1.5.bg-neo-rose.no-print-toolbar {
                  display: none !important;
                  visibility: hidden !important;
                  height: 0 !important;
                  overflow: hidden !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  border: none !important;
                }

                /* Inside #root, hide non-main segments */
                #root > div > *:not(main) {
                  display: none !important;
                }
                
                /* Inside main, hide all sections except experience section */
                main > *:not(#experience) {
                  display: none !important;
                  visibility: hidden !important;
                  height: 0 !important;
                  overflow: hidden !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  border: none !important;
                }

                /* Inside #experience, hide all items except our print overlay */
                #experience > *:not(.print-modal-overlay) {
                  display: none !important;
                  visibility: hidden !important;
                  height: 0 !important;
                  overflow: hidden !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  border: none !important;
                }

                /* Make print overlay a regular positioned element, visible and taking full page width */
                .print-modal-overlay {
                  position: absolute !important;
                  left: 0 !important;
                  top: 0 !important;
                  width: 100% !important;
                  height: auto !important;
                  background-color: #ffffff !important;
                  color: #000000 !important;
                  display: block !important;
                  overflow: visible !important;
                  z-index: auto !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }

                /* Frame container hosting the printable panel */
                .print-container-parent {
                  position: relative !important;
                  left: 0 !important;
                  top: 0 !important;
                  width: 100% !important;
                  height: auto !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  background-color: #ffffff !important;
                  display: block !important;
                  overflow: visible !important;
                }

                /* Force the printable document sheet to take standard printable layout margins without zoom/scale limits */
                .printable-document-sheet {
                  border: none !important;
                  box-shadow: none !important;
                  margin: 0 !important;
                  padding: 2cm !important;
                  width: 100% !important;
                  max-width: 100% !important;
                  transform: scale(1) !important;
                  display: block !important;
                  background-color: #ffffff !important;
                  overflow: visible !important;
                }
              }
            ` }} />

            {/* Top Toolbar - PDF Viewer Theme Style */}
            <header className="bg-[#2a2a2a] border-b border-[#3e3e3e] px-4 py-3 text-white flex flex-col sm:flex-row items-center justify-between gap-3 no-print-toolbar z-20 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-neo-rose flex items-center justify-center font-mono font-black text-black">
                  PDF
                </div>
                <div>
                  <h3 className="font-display font-black text-sm tracking-tight text-white flex items-center gap-1.5 text-left">
                    <span>zhou_yu_resume_{resumeLang === 'zh' ? 'cn' : 'en'}.pdf</span>
                    <span className="text-[10px] bg-neo-sky text-black font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                      Executive Draft
                    </span>
                  </h3>
                  <p className="text-[10px] font-mono text-gray-400 text-left">
                    Pages: 1 / 1 (A4 Layout Vectors)
                  </p>
                </div>
              </div>

              {/* Action Toggles Inside Document Panel */}
              <div className="flex flex-wrap items-center gap-2">
                
                {/* Language Switch Pills */}
                <div className="flex bg-[#1e1e1e] rounded-lg p-1 border border-[#3e3e3e] mr-2">
                  <button
                    onClick={() => setResumeLang('zh')}
                    className={`px-3 py-1 text-xs font-mono font-black rounded-md transition-all cursor-pointer ${
                      resumeLang === 'zh'
                        ? 'bg-neo-yellow text-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    中文简体
                  </button>
                  <button
                    onClick={() => setResumeLang('en')}
                    className={`px-3 py-1 text-xs font-mono font-black rounded-md transition-all cursor-pointer ${
                      resumeLang === 'en'
                        ? 'bg-neo-yellow text-black'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                </div>

                {/* Zoom Tuning Buttons */}
                <div className="flex bg-[#1e1e1e] rounded-lg border border-[#3e3e3e] mr-2 overflow-hidden">
                  <button
                    onClick={() => setZoom(Math.max(75, zoom - 10))}
                    className="p-1.5 hover:bg-[#333] text-gray-300 transition-colors cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="px-2.5 flex items-center justify-center text-xs font-mono font-bold text-gray-300 min-w-[50px] bg-transparent border-x border-[#3e3e3e]">
                    {zoom}%
                  </span>
                  <button
                    onClick={() => setZoom(Math.min(125, zoom + 10))}
                    className="p-1.5 hover:bg-[#333] text-gray-300 transition-colors cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoom(100)}
                    className="p-1.5 hover:bg-[#333] text-gray-300 hover:text-neo-sky transition-colors cursor-pointer border-l border-[#3e3e3e]"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Action Handlers */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopySecretKey}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#444] hover:bg-[#555] active:scale-95 text-white rounded-lg text-xs font-mono font-black transition-all cursor-pointer border border-[#555]"
                    title="Copy plain-text to clipboard"
                  >
                    {copiedResume ? <Check className="w-3.5 h-3.5 text-neo-green animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedResume ? (resumeLang === 'zh' ? '已复制文字' : 'Copied!') : (resumeLang === 'zh' ? '复制文字' : 'Copy Text')}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neo-yellow hover:bg-[#f1cd1b] text-black active:scale-95 rounded-lg text-xs font-mono font-black transition-all cursor-pointer shadow-sm"
                    title="Download / Save PDF in standard print size"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{resumeLang === 'zh' ? '保存为 PDF' : 'Save/Print PDF'}</span>
                  </button>

                  <button
                    onClick={() => setShowMockResume(false)}
                    className="flex items-center justify-center px-3 py-1.5 border border-[#fc5c5c]/40 bg-[#fc5c5c]/10 text-neo-rose hover:bg-[#fc5c5c]/25 active:scale-95 text-xs font-mono font-black rounded-lg transition-all cursor-pointer"
                  >
                    CLOSE [X]
                  </button>
                </div>

              </div>
            </header>

            {/* Document body viewport wrapper */}
            <div className="flex-1 bg-[#1e1e1e] overflow-y-auto p-4 sm:p-8 flex justify-center items-start print-container-parent">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                className="w-full max-w-[800px] bg-white text-black p-8 sm:p-11 rounded-sm shadow-2xl relative printable-document-sheet transition-all duration-200 direct-resume-section text-left"
                id="resume-printable-area"
              >
                {/* Decorative PDF Sheet Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-neo-rose no-print-toolbar" />

                {/* Simulated Grid or Double-Collumn Template Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-sans">
                  
                  {/* Executive Header Box across 12-columns */}
                  <div className="md:col-span-12 border-b-2 border-black pb-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4.5">
                      {/* Premium Profile Image */}
                      <img 
                        src={zhouYuPhoto} 
                        alt="Zhou Yu Profile" 
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-neutral-100 shrink-0"
                      />
                      <div>
                        <h1 className="font-display font-black text-3.5xl tracking-tight text-neutral-900 uppercase">
                          {resumeLang === 'zh' ? '周 宇' : 'Zhou Yu'}
                        </h1>
                        <p className="text-xs font-mono font-bold uppercase text-neo-rose mt-1 tracking-wider">
                          {resumeLang === 'zh' 
                            ? '海外汽车 KD 项目经理 | 汽车制造与海外量产投产落地专家' 
                            : 'Overseas Automotive KD Project Manager | Manufacturing SOP Delivery Expert'}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-left md:text-right font-mono text-[10px] sm:text-xs text-neutral-600 font-bold">
                      <div className="flex items-center md:justify-end gap-1.5">
                        <span className="text-neutral-400">EMAIL:</span>
                        <a href="mailto:zhouyuid@gmail.com" className="text-neo-blue underline">zhouyuid@gmail.com</a>
                      </div>
                      <div className="flex items-center md:justify-end gap-1.5">
                        <span className="text-neutral-400">PHONE:</span>
                        <span>+86 15300755797</span>
                      </div>
                      <div className="flex items-center md:justify-end gap-1.5">
                        <span className="text-neutral-400">LOC:</span>
                        <span>{resumeLang === 'zh' ? '中国 • 北京 • 上海 / 吉隆坡 / 泰国项目基地' : 'Beijing • Shanghai, CN | Kuala Lumpur, MY | Thailand PMO Sites'}</span>
                      </div>
                    </div>
                  </div>

                  {/* LEFT SIDEBAR (Col-span 4): Contact, Education, and Skills */}
                  <div className="md:col-span-4 flex flex-col gap-6 md:border-r border-gray-200 md:pr-6">
                    
                    {/* Education block */}
                    <div>
                      <h3 className="font-display font-black text-xs uppercase tracking-wider text-neo-blue border-b border-black pb-1 mb-3 flex items-center gap-1 font-black">
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{resumeLang === 'zh' ? '学术科班背景' : 'Education'}</span>
                      </h3>
                      <div className="flex flex-col gap-3 text-left">
                        <div>
                          <p className="text-xs font-black text-neutral-900">
                            {resumeLang === 'zh' ? '莫纳什大学马来西亚校区 (QS #37)' : 'Monash University Malaysia (Kuala Lumpur)'}
                          </p>
                          <p className="text-[10px] font-mono font-black text-neo-rose">
                            {resumeLang === 'zh' ? '国际商务专业硕士 (完成了两年硕士学业)' : 'Master of International Business (completed 2-year studies in KL)'}
                          </p>
                          <p className="text-[9px] font-mono text-neutral-500 font-bold">
                            {resumeLang === 'zh' ? '2021.07 - 2023.12 | 吉隆坡' : '2021.07 - 2023.12 | Kuala Lumpur, MY'}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-black text-neutral-900">
                            {resumeLang === 'zh' ? '华东政法大学' : 'East China University of Law'}
                          </p>
                          <p className="text-[10px] font-mono font-black text-neo-rose">
                            {resumeLang === 'zh' ? '经济学专业学士' : 'Bachelor of Economics'}
                          </p>
                          <p className="text-[9px] font-mono text-neutral-500 font-bold">
                            {resumeLang === 'zh' ? '2016.09 - 2020.06 | 上海' : '2016.09 - 2020.06 | Shanghai, CN'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Highly Targeted Professional Skills */}
                    <div>
                      <h3 className="font-display font-black text-xs uppercase tracking-wider text-neo-blue border-b border-black pb-1 mb-3 flex items-center gap-1 font-black">
                        <Star className="w-3.5 h-3.5" />
                        <span>{resumeLang === 'zh' ? '核心技术硬核技能' : 'Professional Skills'}</span>
                      </h3>
                      <div className="flex flex-col gap-3 font-sans text-xs">
                        
                        <div>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-700 font-black uppercase text-left block mb-1">
                            PM & ENGINEERING
                          </span>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 pl-1 flex flex-col gap-1">
                            <li>{resumeLang === 'zh' ? 'KD 拆装全案周转统筹' : 'Full KD planning & breakdown'}</li>
                            <li>{resumeLang === 'zh' ? '跨国制造基地 SOP 前瞻规划' : 'Overseas vehicle SOP launch'}</li>
                            <li>{resumeLang === 'zh' ? '多学科国内高级技术团队对接' : 'Multi-discipline engineering sync'}</li>
                            <li>{resumeLang === 'zh' ? '生产现场干涉协调与优化' : 'On-site assembly interference fix'}</li>
                          </ul>
                        </div>

                        <div>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-700 font-black uppercase text-left block mb-1">
                            TREASURY & FINANCE
                          </span>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 pl-1 flex flex-col gap-1">
                            <li>{resumeLang === 'zh' ? '信用证 (L/C) 结算管理' : 'Letters of Credit & trade instruments'}</li>
                            <li>{resumeLang === 'zh' ? '多工厂流动千万级资金调拨' : 'Consolidated cash flow scheduling'}</li>
                            <li>{resumeLang === 'zh' ? '银行存贷汇差、利息谈判博弈' : 'Interbank margin negotiations'}</li>
                            <li>{resumeLang === 'zh' ? '进出口供应链财管退税' : 'Cross-border trade tax clearance'}</li>
                          </ul>
                        </div>

                        <div>
                          <span className="font-mono text-[9px] px-1.5 py-0.5 bg-neutral-100 rounded text-neutral-700 font-black uppercase text-left block mb-1">
                            LOGISTICS & ERP
                          </span>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 pl-1 flex flex-col gap-1">
                            <li>{resumeLang === 'zh' ? 'SAP / MRP 计划精排调度' : 'SAP ERP / MRP systems sequence'}</li>
                            <li>{resumeLang === 'zh' ? '精益排线在制品管控' : 'Lean materials WIP management'}</li>
                            <li>{resumeLang === 'zh' ? '8D 客户质量异常改善闭环' : '8D complaint closed-loop fix'}</li>
                            <li>{resumeLang === 'zh' ? '集装箱包装防护与多式联运' : 'Container tracking & JIT logistic'}</li>
                          </ul>
                        </div>

                      </div>
                    </div>

                    {/* Language capacities */}
                    <div>
                      <h3 className="font-display font-black text-xs uppercase tracking-wider text-neo-blue border-b border-black pb-1 mb-2.5 flex items-center gap-1 font-black">
                        <Globe className="w-3.5 h-3.5" />
                        <span>{resumeLang === 'zh' ? '语言沟通底能' : 'Languages'}</span>
                      </h3>
                      <div className="text-[10px] font-sans text-neutral-700 pl-1 flex flex-col gap-1.5 font-medium">
                        <div className="flex justify-between">
                          <span className="font-bold">{resumeLang === 'zh' ? '英语 (Fluent English)' : 'English (Fluent)'}</span>
                          <span className="font-mono font-bold text-neo-rose">{resumeLang === 'zh' ? '硕士工作语言' : 'Work Language'}</span>
                        </div>
                        <p className="text-[9px] text-neutral-500 leading-relaxed">
                          {resumeLang === 'zh' 
                            ? '精通流畅的外商大客户技术对接、产品方案英文书面开发汇报及谈判协调。' 
                            : 'Fluent in client negotiations, technical R&D package sync, and writing executive reports.'}
                        </p>
                        <div className="flex justify-between border-t border-dashed border-gray-100 mt-1 pt-1.5">
                          <span className="font-bold">{resumeLang === 'zh' ? '中文普通话 / 东北话 / 湖北话' : 'Mandarin, Dongbei & Hubei Dialects'}</span>
                          <span className="font-mono font-bold text-neutral-400">{resumeLang === 'zh' ? '母语及熟练方言' : 'Native & Fluent Dialects'}</span>
                        </div>
                        <p className="text-[9px] text-neutral-500 leading-relaxed">
                          {resumeLang === 'zh' 
                            ? '标准普通话，并且能自如切换东北方言与湖北方言，极具亲和力，有利于现场车间不同地区班组的高效融通。' 
                            : 'Standard Mandarin with native-level fluency in Dongbei and Hubei regional dialects, significantly improving relations and assembly desk sync.'}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN (Col-span 8): Career Experience details */}
                  <div className="md:col-span-8 flex flex-col gap-5">
                    
                    {/* Professional summary box */}
                    <div>
                      <h3 className="font-display font-black text-xs uppercase tracking-wider text-neo-blue border-b border-black pb-1 mb-2.5 flex items-center gap-1 font-black">
                        <FileText className="w-3.5 h-3.5" />
                        <span>{resumeLang === 'zh' ? '专业履历摘要' : 'Executive Overview'}</span>
                      </h3>
                      <p className="text-[10px] sm:text-xs leading-relaxed text-neutral-700 font-medium bg-neutral-50 p-3 rounded rounded-l-md border-l-3 border-neo-rose">
                        {resumeLang === 'zh'
                          ? '硕士毕业于百强名校莫纳什大学马来西亚校区（在马来西亚吉隆坡完成了两年的硕士学业），深耕汽车整车制造及散件出口组装（KD）全生命周期项目管理。不仅具备海外大客户技术开发与制造工艺技术需求端到端精准承接，协助国内顶级技术与车间研发力量给予最佳攻关解决的实战历练；亦擅长集团资金融通规划（信用证）及利差套利，具备极富韧性的跨文化多方中外沟通协作力。'
                          : 'Honors MIB alumnus from Monash University Malaysia campus in Kuala Lumpur (having completed two years of master\'s studies in Malaysia), deeply rooted in automotive industrial planning, manufacturing engineering logistics, and Knocked-Down (KD) assembly project management. Proven expertise inside global R&D circles, successfully bridging overseas customer specifications with domestic floor experts. Skilled in multi-mill liquidity consolidation, L/C instruments, spread negotiations, and SAP-driven material scheduling. Highly fluent in English.'}
                      </p>
                    </div>

                    {/* Timeline experiences */}
                    <div>
                      <h3 className="font-display font-black text-xs uppercase tracking-wider text-neo-blue border-b border-black pb-1 mb-3.5 flex items-center gap-1 font-black">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{resumeLang === 'zh' ? '职业年表与核心战果' : 'Professional Record'}</span>
                      </h3>
                      
                      <div className="flex flex-col gap-4 font-sans text-xs">
                        
                        {/* EXPERIENCE 1 */}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-neutral-900">
                            <span className="text-sm font-black">{resumeLang === 'zh' ? '海外 KD 项目经理' : 'Overseas KD Project Manager'}</span>
                            <span className="font-mono text-neutral-500 text-[10px]">{resumeLang === 'zh' ? '2024.06 - 至今' : 'Jun 2024 - Present'}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-mono font-black text-neo-rose uppercase">Glopiv (汽车整车 KD 生产调试管理部)</span>
                          </div>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 mt-1.5 flex flex-col gap-1 pl-1">
                            <li>
                              {resumeLang === 'zh' 
                                ? '主力负责多款车型在泰国组装厂的一线全生命周期KD量产落实。' 
                                : 'Direct end-to-end KD project coordinates, tooling launches, and line layouts inside Thailand centers.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '担任大客户需求核心承接枢纽，精准拆包其组装工艺技术方案，对接并协同国内顶级工程试验、车间排班团队完成高水准交付。' 
                                : 'Act as primary PMO interface intaking client specifications and structuring action packages for domestic R&D lines.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '带领技术骨干冲锋解决现场重大物料干涉和空难组装工艺纠结，促成本地量产 100% 达成 SOP 控制期。' 
                                : 'Spearheaded on-site troubleshooting, resolving critical material interference glitches to lock in 100% on-time local SOP.'}
                            </li>
                          </ul>
                        </div>

                        {/* EXPERIENCE 2 */}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-neutral-900">
                            <span className="text-sm font-black">{resumeLang === 'zh' ? '集团资金融通主管' : 'Treasury & Liquidity Specialist'}</span>
                            <span className="font-mono text-neutral-500 text-[10px]">{resumeLang === 'zh' ? '2020.04 - 2021.04' : 'Apr 2020 - Apr 2021'}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-mono font-black text-neo-rose uppercase">上海嘉里食品工业有限公司 (金龙鱼所属益海嘉里集团)</span>
                          </div>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 mt-1.5 flex flex-col gap-1 pl-1">
                            <li>
                              {resumeLang === 'zh' 
                                ? '高频汇总并测算金龙鱼旗下全国多家核心粮油精炼工厂及网点的海量用款数据。' 
                                : 'Consolidated cash requirements across national crop-processing plants, formulating liquidity forecasts.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '与多家大行直接博弈存贷利息。压制借款价差博取直接财务利得。' 
                                : 'Negotiated spread parameters with premier commercial bank desks to harvest liquidity profits.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '熟练操作并完成信用证及多种跟国外流动物流贸易融资，平抑用汇及支付危机。' 
                                : 'Optimized credit profiles, managing Letters of Credit (L/C) and international trade settlement channels.'}
                            </li>
                          </ul>
                        </div>

                        {/* EXPERIENCE 3 */}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-neutral-900">
                            <span className="text-sm font-black">{resumeLang === 'zh' ? '汽车供应链排产跟单专员' : 'Automotive Supply Chain Analyst'}</span>
                            <span className="font-mono text-neutral-500 text-[10px]">{resumeLang === 'zh' ? '2019.10 - 2020.03' : 'Oct 2019 - Mar 2020'}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-mono font-black text-neo-rose uppercase">艾福迈 (Alfmeier) 汽车系统 (上海) 有限公司</span>
                          </div>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 mt-1.5 flex flex-col gap-1 pl-1">
                            <li>
                              {resumeLang === 'zh' 
                                ? '分析消化全球主机客群大批采购 BOM，运用 SAP ERP 编制分度排料和产线装配排程。' 
                                : 'Analyzed client Bill of Materials (BOM), running custom SAP master-sequences to dispatch floor instructions.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '跟进看板配送与现场仓库流转，杜绝因配套缺货引起的总线待料。' 
                                : 'Coordinated warehouse JIT logistics and packaging bins to prevent workshop assembly starvation.'}
                            </li>
                            <li>
                              {resumeLang === 'zh' 
                                ? '协助配合完成车辆产品失效反馈答辩，编制8D报告，推动产线在制品缺陷攻坚。' 
                                : 'Interfaced on components failure complaints, contributing to 8D analysis to upgrade core valve quality.'}
                            </li>
                          </ul>
                        </div>

                        {/* EXPERIENCE 4 */}
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-neutral-900">
                            <span className="text-sm font-black">{resumeLang === 'zh' ? '国家级大创“欧克数码”项目负责人' : 'National Venture Project Captain'}</span>
                            <span className="font-mono text-neutral-500 text-[10px]">{resumeLang === 'zh' ? '2018.04 - 2019.05' : 'Apr 2018 - May 2019'}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-mono font-black text-neo-rose uppercase">大学生创新创业团队主导人 (国家级大创卓越奖)</span>
                          </div>
                          <ul className="list-disc list-inside text-[10px] text-neutral-600 mt-1.5 flex flex-col gap-1 pl-1">
                            <li>
                              {resumeLang === 'zh' 
                                ? '领衔多学科联合团队，主笔并向企业导师答辩数字化零售柔性物流闭环。' 
                                : 'Led commercial strategy, presenting innovative digital shipping proposals to gain pre-seed backing.'}
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>

                {/* Professional document metadata marker stamp */}
                <div className="mt-8 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between text-[9px] font-mono text-gray-400 no-print-toolbar">
                  <span>✦ COMPILED DIGITALLY ON {new Date().toLocaleDateString('zh-CN', {year: 'numeric', month: '2-digit', day: '2-digit'})} ✦</span>
                  <span className="uppercase">VALID TRANSMISSION CODE: ZZ_CV_2026_A4</span>
                </div>

              </motion.div>
            </div>

            {/* Bottom Panel - Safe Transceiver Controls */}
            <footer className="bg-[#2a2a2a] border-t border-[#3e3e3e] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 no-print-footer z-20">
              <span className="text-[10px] text-gray-400 font-mono font-black tracking-wider flex items-center gap-1 uppercase">
                ⚙️ SECURED TRANSCEIVER • LOCAL MACHINE PRINTING VIA CHROME & SAFARI SYSTEM PDF PRINT ENGINES
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySecretKey}
                  className="px-4 py-2 border-2 border-black font-display font-black text-xs bg-neo-yellow text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] transition-transform active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-1"
                >
                  {copiedResume ? <Check className="w-3.5 h-3.5 text-neo-green inline" /> : <Copy className="w-3.5 h-3.5 inline" />}
                  <span>{copiedResume ? (resumeLang === 'zh' ? '已复制文字' : 'COPIED TO CLIPBOARD!') : (resumeLang === 'zh' ? '复制纯文字' : 'COPY PLAIN TEXT')}</span>
                </button>
                <button
                  onClick={() => setShowMockResume(false)}
                  className="px-4 py-2 border-2 border-black font-display font-black text-xs bg-white hover:bg-neutral-50 hover:translate-y-[-1px] text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 cursor-pointer"
                >
                  {resumeLang === 'zh' ? '关闭预览' : 'CLOSE DOCUMENT'}
                </button>
              </div>
            </footer>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

