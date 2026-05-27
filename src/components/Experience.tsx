import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ArrowUpRight, GraduationCap, Calendar, Star, FileText, Check } from 'lucide-react';
import { ExperienceItem, Language, PrimaryColor, TranslationSet } from '../types';
import { EXPERIENCE } from '../data';

interface ExperienceProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Experience({ lang, accentColor, translations }: ExperienceProps) {
  const [showMockResume, setShowMockResume] = useState(false);
  const [copiedResume, setCopiedResume] = useState(false);

  const handleCopySecretKey = () => {
    navigator.clipboard.writeText('zoeyzhou_cv_2026@gmail.com');
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2500);
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

      {/* Elite Virtual Resume Quick Sandbox Overlay */}
      <AnimatePresence>
        {showMockResume && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white text-black neo-border max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
            >
              
              {/* Header capsule element */}
              <div className="bg-[#171717] text-white px-6 py-4 flex items-center justify-between">
                <span className="font-display font-black text-sm uppercase tracking-wider text-neo-sky">
                  💼 Professional Dossier / CV Console
                </span>
                <button
                  onClick={() => setShowMockResume(false)}
                  className="font-mono text-xs font-black hover:text-neo-orange px-2 py-0.5 border border-white/40 cursor-pointer"
                >
                  CLOSE [X]
                </button>
              </div>

              {/* Printable PDF format container */}
              <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto text-left">
                
                {/* Simulated Executive Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b-3 border-black pb-6 mb-6">
                  <div>
                    <h1 className="font-display font-black text-3xl tracking-tight">周宇</h1>
                    <p className="text-xs font-mono font-bold uppercase text-neo-rose mt-1 tracking-wider">
                      海外汽车 KD 项目经理 | 汽车制造与海外量产落地专家
                    </p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-[10px] text-gray-500 font-bold">
                    <p>zhouyuid@gmail.com</p>
                    <p>+86 15300755797</p>
                    <p>中国 • 上海 / 墨尔本 / 中东项目驻地</p>
                  </div>
                </div>

                {/* Resume Summary section */}
                <div className="mb-6">
                  <h3 className="font-display font-black text-sm uppercase tracking-widest text-[#4A6CFA] mb-2 font-black">// 专业简历摘要</h3>
                  <p className="font-sans text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                    精通汽车制造全工艺流水线（冲压、焊接、涂装、总装四大车间）。具备出色的海外工厂筹建与装配线调试能力、复杂的国际订单供应链排产以及卓越的大型企业资金融通与财务控制才干。熟练进行跨文化协同沟通，并成功协调了中东多款旗舰车型的 SOP 量产试跑工作。
                  </p>
                </div>

                {/* Mini Career entries */}
                <div className="mb-6">
                  <h3 className="font-display font-black text-sm uppercase tracking-widest text-neo-rose mb-3.5 font-black">// 职业历程高光时刻</h3>
                  
                  <div className="flex flex-col gap-3.5 pl-1 text-xs">
                    <div>
                      <div className="flex justify-between font-bold">
                        <span>海外 KD 项目经理</span>
                        <span className="font-mono text-gray-500 text-[10px]">2024 - 至今</span>
                      </div>
                      <p className="text-gray-600 font-mono text-[10px] mt-0.5">Glopiv (中东工厂等整车 KD 生产调试统筹)</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold">
                        <span>集团资金融通主管</span>
                        <span className="font-mono text-gray-500 text-[10px]">2020 - 2021</span>
                      </div>
                      <p className="text-gray-600 font-mono text-[10px] mt-0.5">上海嘉里食品工业有限公司 (金龙鱼所属益海嘉里集团总部资金计划)</p>
                    </div>
                    <div>
                      <div className="flex justify-between font-bold">
                        <span>汽车系统供应链排产专员</span>
                        <span className="font-mono text-gray-500 text-[10px]">2019 - 2020</span>
                      </div>
                      <p className="text-gray-600 font-mono text-[10px] mt-0.5">艾福迈 (Alfmeier) 汽车系统 (上海) 有限公司 (精密管件与阀板组装 SAP 跟单)</p>
                    </div>
                  </div>
                </div>

                {/* Education segment */}
                <div>
                  <h3 className="font-display font-black text-sm uppercase tracking-widest text-[#10B981] mb-2 font-black">// 学术与科班底蕴</h3>
                  <div className="flex flex-col gap-2 text-xs pl-1 font-sans">
                    <div className="flex justify-between font-bold">
                      <span>莫纳什大学 (Monash University) — 国际商务专业硕士</span>
                      <span className="font-mono text-gray-500 text-[10px]">墨尔本, 澳大利亚</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>华东政法大学 — 经济学专业学士</span>
                      <span className="font-mono text-gray-500 text-[10px]">上海, 中国</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Drawer actions button bar */}
              <div className="bg-gray-50 px-6 py-4 border-t-3 border-black flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono">
                <span className="text-[10px] text-gray-400 text-left uppercase font-black">
                  🛡️ SAFE TRANSMISSION TUNNEL KEY: ZZ_CV_2026
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySecretKey}
                    className="px-4 py-2 border-2 border-black font-display font-extrabold text-xs bg-neo-yellow text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-1"
                  >
                    {copiedResume ? <Check className="w-3 h-3 text-neo-green" /> : <FileText className="w-3 h-3" />}
                    <span>{copiedResume ? 'COPIED TO CLIPBOARD' : 'COPY CONTACT EMAIL'}</span>
                  </button>
                  <button
                    onClick={() => setShowMockResume(false)}
                    className="px-4 py-2 border-2 border-black font-display font-extrabold text-xs bg-black text-white shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 cursor-pointer"
                  >
                    CLOSE BRIEF
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
