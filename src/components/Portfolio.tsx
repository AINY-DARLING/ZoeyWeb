import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Sliders, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Project, Language, PrimaryColor, TranslationSet } from '../types';
import { PROJECTS } from '../data';

interface PortfolioProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Portfolio({ lang, accentColor, translations }: PortfolioProps) {
  // States of mock interactivity inside mockups
  const [activeMetricTab, setActiveMetricTab] = useState<'DAU' | 'MAU' | 'CONV'>('DAU');
  const [isWorkspaceVerified, setIsWorkspaceVerified] = useState(false);
  const [stakeAmount, setStakeAmount] = useState<number>(100);
  const [activeCaseStudyModal, setActiveCaseStudyModal] = useState<Project | null>(null);

  // Helper calculating mock crypto staking returns
  const mockStakingYield = (stakeAmount * 1.54).toFixed(1);

  // Custom rendering of interactive graphic templates per project
  const renderInteractiveMockup = (mockupType: string, index: number) => {
    switch (mockupType) {
      case 'dashboard':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl neo-border text-black">
            {/* Header row to simulate telemetry controller */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-[#8B5CF6] rounded-full inline-block" /> Live Telemetry
              </span>
              <div className="flex gap-1.5">
                {(['DAU', 'MAU', 'CONV'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMetricTab(tab)}
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border border-black uppercase tracking-tighter ${
                      activeMetricTab === tab ? 'bg-neo-yellow text-black font-black' : 'bg-gray-50 text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Data Charts and Grid visualization */}
            <div className="flex-1 flex flex-col justify-between gap-2.5">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-50 p-2 border border-black rounded shadow-sm text-center">
                  <span className="text-[8px] uppercase text-gray-400 font-mono block">Volume</span>
                  <span className="font-display font-black text-xs md:text-sm">
                    {activeMetricTab === 'DAU' ? '450K' : activeMetricTab === 'MAU' ? '3,120K' : '12.4%'}
                  </span>
                </div>
                <div className="bg-gray-50 p-2 border border-black rounded shadow-sm text-center">
                  <span className="text-[8px] uppercase text-gray-400 font-mono block">Latency</span>
                  <span className="font-display font-black text-xs md:text-sm text-neo-rose">
                    {activeMetricTab === 'DAU' ? '12ms' : activeMetricTab === 'MAU' ? '14ms' : '11ms'}
                  </span>
                </div>
                <div className="bg-gray-50 p-2 border border-black rounded shadow-sm text-center">
                  <span className="text-[8px] uppercase text-gray-400 font-mono block">Stiffness</span>
                  <span className="font-display font-black text-xs md:text-sm text-neo-blue">
                    99.8%
                  </span>
                </div>
              </div>

              {/* Dynamic SVG Plotting chart reacting to selected telemetry tab */}
              <div className="relative h-20 bg-black/5 rounded-lg border border-black overflow-hidden flex items-end">
                <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                  {activeMetricTab === 'DAU' ? (
                    <path d="M0 40 Q25 10, 50 35 T100 15 T150 25 T200 8" fill="none" stroke="#FF2E93" strokeWidth="2.5" />
                  ) : activeMetricTab === 'MAU' ? (
                    <path d="M0 35 C30 15, 60 45, 90 20 C120 10, 150 45, 200 5" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                  ) : (
                    <path d="M0 45 L40 38 L80 42 L120 30 L160 32 L200 10" fill="none" stroke="#2ECC71" strokeWidth="2.5" />
                  )}
                  {/* Scatter plot marker points */}
                  <circle cx="100" cy="20" r="3" fill="black" />
                  <circle cx="200" cy="10" r="3" fill="black" />
                </svg>
                <div className="absolute top-1 left-2 font-mono text-[8px] text-gray-400">
                  REALTIME FLUX FEED
                </div>
              </div>
            </div>

            {/* Bottom mock console status alerts */}
            <div className="mt-2 text-[8px] font-mono text-gray-500 flex items-center justify-between">
              <span>SYS_STABLE: 100%</span>
              <span className="animate-pulse text-green-500 font-black">● LIVE UPDATING</span>
            </div>
          </div>
        );

      case 'browser':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl neo-border text-black">
            {/* Mock Web browser head (buttons & address input) */}
            <div className="flex items-center gap-1.5 border-b-2 border-black pb-2 mb-2">
              <span className="w-2.5 h-2.5 bg-neo-rose rounded-full" />
              <span className="w-2.5 h-2.5 bg-neo-yellow rounded-full" />
              <span className="w-2.5 h-2.5 bg-[#5CE1E6] rounded-full" />
              <div className="flex-1 ml-2 bg-gray-100 rounded border border-black/30 px-2 py-0.5 font-mono text-[8px] text-gray-400 text-left">
                https://venture.workspace/v/reboot
              </div>
            </div>

            {/* Simulated Collaborative Workspace module */}
            <div className="flex-1 flex flex-col justify-center items-stretch gap-2.5">
              <span className="text-[10px] font-display font-extrabold text-left">
                🚀 Dynamic Onboarding System
              </span>
              
              <div className="flex flex-col gap-2">
                <label className="text-[8px] font-mono text-gray-500 text-left">TEAM ACCESS IDENTIFIER</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="VENTURE_INC_NY@MEMBER"
                    className="flex-1 text-[10px] font-mono px-2 py-1 bg-white border border-black rounded shadow-[2px_2px_0px_rgba(0,0,0,1)] text-gray-400 text-left"
                  />
                  <button
                    onClick={() => setIsWorkspaceVerified(!isWorkspaceVerified)}
                    className={`px-3 py-1 text-[9px] font-display font-bold border border-black rounded shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform active:translate-y-0.5 flex items-center justify-center gap-1 cursor-pointer ${
                      isWorkspaceVerified ? 'bg-neo-green text-white' : 'bg-neo-yellow text-black'
                    }`}
                  >
                    {isWorkspaceVerified ? <Check className="w-2.5 h-2.5" /> : 'VERIFY'}
                  </button>
                </div>
              </div>

              {/* Verified Badge Success Popup */}
              <div className={`p-2 border border-black rounded transition-all text-left flex items-center gap-2 ${
                isWorkspaceVerified 
                  ? 'bg-emerald-50 text-emerald-800 border-black' 
                  : 'bg-amber-50 text-amber-800 border-black/40'
              }`}>
                <div className="w-2.5 h-2.5 rounded-full bg-current" />
                <span className="text-[8px] font-mono font-black">
                  {isWorkspaceVerified 
                    ? 'TOKEN_BOUND: SUCCESSFUL VALIDATED CLIENT' 
                    : 'AWAITING USER VERIFY COMMAND SIGNATURE'}
                </span>
              </div>
            </div>
          </div>
        );

      case 'code':
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl neo-border text-black">
            {/* Header section simulating Crypto staking terms */}
            <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-2">
              <span className="text-[10px] font-display font-black tracking-tighter uppercase flex items-center gap-1.5">
                ✨ Staking Simulator
              </span>
              <span className="text-[9px] font-mono py-0.5 px-2 bg-neo-blue text-white rounded border border-black">
                154% APY
              </span>
            </div>

            {/* Calculator dynamic visual sliders */}
            <div className="flex-1 flex flex-col justify-between items-stretch gap-2 my-1">
              <div className="flex flex-col gap-1 text-left">
                <div className="flex justify-between items-center">
                  <label className="text-[8px] font-mono text-gray-500 uppercase font-black">STAKING AMOUNT</label>
                  <span className="font-mono text-[10px] font-bold text-neo-rose">{stakeAmount} AETH</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  className="w-full accent-neo-rose h-1 bg-gray-200 rounded-lg cursor-pointer border border-black/30"
                />
              </div>

              {/* Calculated Outputs representation */}
              <div className="bg-gray-50 p-3 border-2 border-dashed border-black rounded-lg text-center flex items-center justify-between gap-2">
                <div className="text-left">
                  <span className="text-[8px] font-mono text-gray-400 block uppercase">PREDICTED RETURN (1 YR)</span>
                  <span className="font-display font-black text-base md:text-xl text-black">
                    {mockStakingYield} <span className="text-xs text-gray-500 font-mono font-medium">SAETH</span>
                  </span>
                </div>
                
                {/* Visual feedback mini badge */}
                <span className="text-[9px] font-mono py-1 px-1.5 bg-neo-rose text-white border border-black font-black">
                  +{(stakeAmount * 0.54).toFixed(0)} PROFIT
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section className="py-24 relative overflow-hidden border-t-3 border-black bg-transparent" id="portfolio">
        
        {/* Dynamic mesh accents */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header block with outstanding visual highlight */}
          <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center gap-4">
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neo-text">
              {translations.portfolioTitle}{' '}
              <span className="px-3.5 py-1 bg-neo-yellow text-black neo-border inline-block rotate-[1deg] shadow-sm">
                {translations.portfolioHighlight}
              </span>
            </h2>
            <p className="font-sans text-gray-600 font-medium text-sm md:text-base leading-relaxed">
              {translations.portfolioSub}
            </p>
          </div>

          {/* Stacking Project cards stack - High Visual Rigorous design! */}
          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            
            {PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-white text-neo-text neo-border neo-shadow-lg rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 hover:translate-y-[-3px] hover:shadow-[10px_10px_0px_0px_rgba(17,17,17,1)] transition-all duration-300"
                id={`project-card-${proj.id}`}
              >
                
                {/* Details Side (Col span 1-6) */}
                <div className="p-8 md:p-10 md:col-span-6 flex flex-col justify-between items-start text-left">
                  <div className="flex flex-col items-start gap-4">
                    {/* Tiny visual capsule with category */}
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-neo-rose" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700">
                        {proj.category.zh}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight uppercase hover:text-neo-blue transition-colors">
                      {proj.title.zh}
                    </h3>
                    
                    <p className="font-sans text-gray-600 text-xs md:text-sm font-medium leading-relaxed">
                      {proj.desc.zh}
                    </p>

                    {/* Web dev tech stack pill badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-800 text-[10px] font-mono font-bold px-2.5 py-1 border border-black shadow-[1.5px_1.5px_0px_0px_rgba(17,17,17,1)] rounded"
                        >
                          #{tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* See Case Study Link button triggering detail modal */}
                  <div className="w-full mt-8 md:mt-12">
                    <button
                      onClick={() => setActiveCaseStudyModal(proj)}
                      className="neo-btn bg-black text-white hover:bg-neutral-800 px-5 py-2.5 text-xs text-left inline-flex items-center gap-2"
                    >
                      <span>{translations.portfolioViewCase} ✎</span>
                      <ArrowRight className="w-3.5 h-3.5 text-neo-yellow" />
                    </button>
                  </div>
                </div>

                {/* Interactive Visual Canvas Side (Col span 7-12) */}
                <div
                  className="p-6 md:p-8 md:col-span-6 flex items-center justify-center border-t-3 md:border-t-0 md:border-l-3 border-black relative select-none"
                  style={{ backgroundColor: proj.bgColor }}
                >
                  <div className="w-full max-w-[320px] aspect-square flex items-center justify-center">
                    {renderInteractiveMockup(proj.mockupType, idx)}
                  </div>
                  
                  {/* Small tag icon denoting user interactivity inside mockup */}
                  <div className="absolute top-3.5 right-3.5 bg-black text-white px-2 py-1 text-[8px] font-mono font-black uppercase rounded flex items-center gap-1 shadow">
                    <Sparkles className="w-2.5 h-2.5 text-neo-yellow animate-pulse" /> Interactive Canvas
                  </div>
                </div>

              </div>
            ))}

          </div>

          {/* Bottom browse button */}
          <div className="text-center mt-16">
            <button
              onClick={() => {
                // Smooth scrolls to contact or highlights works
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="neo-btn bg-white hover:bg-gray-100 border-black px-8 py-3.5 text-sm md:text-base font-black shadow-lg"
              id="portfolio-grid-browse-all"
            >
              ❐ {translations.portfolioCta}
            </button>
          </div>

        </div>
      </section>

      {/* Modern Case Study detailed overlay Modal (Fully detailed with features lists!) */}
      {activeCaseStudyModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white neo-border max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-150">
            {/* Header highlight row */}
            <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-neo-yellow" />
                <span className="font-display font-black text-sm uppercase tracking-widest text-[#FFD200]">
                  核心案例分析报告
                </span>
              </div>
              <button
                onClick={() => setActiveCaseStudyModal(null)}
                className="text-white hover:text-neo-rose font-mono font-black text-base cursor-pointer px-2 py-0.5 border border-white hover:border-neo-rose rounded"
              >
                ESC X
              </button>
            </div>

            {/* Modal Contents */}
            <div className="p-6 md:p-8 text-left max-h-[80vh] overflow-y-auto">
              <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-wider block mb-2">
                {activeCaseStudyModal.category.zh}
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-black mb-4 uppercase">
                {activeCaseStudyModal.title.zh}
              </h3>

              <div className="p-4 bg-gray-50 border-2 border-dashed border-black rounded-xl mb-6">
                <span className="text-[10px] uppercase font-mono font-black text-gray-400 block mb-1">
                  CASE OVERVIEW BRIEF
                </span>
                <p className="font-sans text-xs md:text-sm text-gray-700 font-medium leading-relaxed">
                  {activeCaseStudyModal.desc.zh}
                </p>
              </div>

              {/* Core Deliverable bullets */}
              <div className="mb-6">
                <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-black mb-3.5 flex items-center gap-1.5">
                  <span className="text-neo-rose text-lg">✦</span>
                  核心技术成果与设计实施
                </h4>
                <ul className="flex flex-col gap-2.5 pl-1">
                  {activeCaseStudyModal.features.zh.map((item, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start font-sans text-xs md:text-sm text-gray-700 font-medium">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-neo-yellow neo-border-thin flex items-center justify-center text-[9px] font-black shrink-0">
                        {idx + 1}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Token tag indicators */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                {activeCaseStudyModal.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-800 text-[10px] font-mono px-2 py-0.5 border border-black rounded">
                    #{tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom close panel */}
            <div className="bg-gray-50 px-6 py-4 border-t-2 border-black flex gap-3 justify-end">
              <button
                onClick={() => setActiveCaseStudyModal(null)}
                className="neo-btn bg-black text-white hover:bg-neutral-800 py-1.5 px-4 text-xs"
              >
                关闭分析报告
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
