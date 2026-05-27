import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDownRight, ExternalLink, MessageCircle } from 'lucide-react';
import { Language, PrimaryColor, TranslationSet } from '../types';
// @ts-ignore
import zhouYuImg from '../assets/images/zhou_yu_original.png';

interface HeroProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Hero({ lang, accentColor, translations }: HeroProps) {
  const [imgSrc, setImgSrc] = useState(zhouYuImg);
  
  const handleImageError = () => {
    // Fallback to the imported compiled asset URL with a cache buster if it fails
    if (imgSrc !== zhouYuImg) {
      setImgSrc(zhouYuImg + '?t=' + Date.now());
    }
  };

  const handleConsultClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Helper colors for mapping active highlight states
  const accentHexList: Record<PrimaryColor, string> = {
    yellow: 'bg-neo-yellow text-black',
    blue: 'bg-neo-blue text-white',
    sky: 'bg-neo-sky text-black',
    rose: 'bg-neo-rose text-white',
    orange: 'bg-neo-orange text-white',
    purple: 'bg-neo-purple text-white',
  };

  const activeBadgeColor = accentHexList[accentColor];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden" id="home">

      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Decorative Accent Shapes */}
      <div className="absolute top-44 left-[5%] w-12 h-12 rounded-full border-4 border-black/10 hidden xl:flex items-center justify-center font-display font-black text-black/10 text-xl rotate-[-12deg]">
        ✦
      </div>
      <div className="absolute bottom-16 right-[3%] w-20 h-20 rounded-full border-[6px] border-dashed border-black/10 hidden xl:block animate-spin [animation-duration:40s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`neo-border-thin px-4 py-1.5 rounded-full font-mono text-[10px] md:text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm ${activeBadgeColor}`}
            >
              <span className="w-2.5 h-2.5 bg-green-400 border border-black rounded-full animate-pulse" />
              {translations.heroBadge}
            </motion.div>

            {/* Main Interactive Headline (Perfect replica of the reference image lettering highlights!) */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl leading-[1.05] tracking-tighter text-neo-text">
              {lang === 'en' ? (
                <>
                  I am{' '}
                  <span className="px-4 py-1.5 bg-neo-rose text-white neo-border inline-block rotate-[-1.5deg] shadow-sm hover:rotate-0 transition-transform">
                    Zhou Yu
                  </span>
                  ,<br className="hidden sm:inline" />
                  an{' '}
                  <span className="px-4 py-1.5 bg-neo-blue text-white neo-border inline-block rotate-[1.5deg] shadow-sm hover:rotate-0 transition-transform">
                    Overseas KD
                  </span>{' '}
                  Business Manager deeply rooted in the{' '}
                  <span className="relative inline-block hover:scale-105 transition-transform">
                    China Auto Industry
                    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-neo-orange/30 rounded-full -z-10" />
                  </span>
                </>
              ) : (
                <>
                  我是{' '}
                  <span className="px-4 py-1.5 bg-neo-rose text-white neo-border inline-block rotate-[-1.5deg] shadow-sm hover:rotate-0 transition-transform">
                    周宇
                  </span>
                  ，<br className="hidden sm:inline" />
                  一个深耕{' '}
                  <span className="px-4 py-1.5 bg-neo-blue text-white neo-border inline-block rotate-[1.5deg] shadow-sm hover:rotate-0 transition-transform">
                    中国汽车行业
                  </span>{' '}
                  的{' '}
                  <span className="relative inline-block hover:scale-105 transition-transform">
                    海外KD业务经理
                    <span className="absolute -bottom-1 left-0 right-0 h-2 bg-neo-orange/30 rounded-full -z-10" />
                  </span>
                </>
              )}
            </h1>

            {/* Sub-text paragraph */}
            <p className="font-sans text-gray-700 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              {translations.heroSub}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={(e) => handleConsultClick(e, 'contact')}
                className="neo-btn bg-white text-black hover:bg-stone-50 border-black flex items-center justify-center gap-3 transition-colors group"
                id="hero-cta-btn-1"
              >
                <span>{lang === 'en' ? 'Get in Touch' : '即刻联络'}</span>
                <span className="w-6.5 h-6.5 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center transition-colors group-hover:bg-neo-yellow group-hover:border-black group-hover:text-black">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
              </button>
              <button
                onClick={(e) => handleConsultClick(e, 'experience')}
                className="neo-btn bg-white text-black hover:bg-stone-50 border-black flex items-center justify-center gap-3 transition-colors group"
                id="hero-cta-btn-2"
              >
                <span>{lang === 'en' ? 'View Case Studies' : '浏览项目案例'}</span>
                <span className="w-6.5 h-6.5 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center transition-colors group-hover:bg-neo-yellow group-hover:border-black group-hover:text-black">
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

          </div>

          {/* Right Image/Avatar Column (The massive golden cartoon box from reference image) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square"
            >
              {/* Retro Graphic background shadow offset */}
              <div className="absolute inset-0 bg-black rounded-3xl translate-x-4 translate-y-4 shadow-[0px_0px_15px_rgba(0,0,0,0.1)]" />

              {/* Yellow Portrait Container with bold borders */}
              <div className="absolute inset-0 bg-neo-yellow neo-border rounded-3xl overflow-hidden flex flex-col justify-end group cursor-pointer">
                
                {/* Photo Image - Professional side-profile matching user upload with no referrer policy */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={imgSrc}
                    onError={handleImageError}
                    alt={lang === 'en' ? 'Zhou Yu - Overseas KD Project Manager' : '周宇 - 海外KD项目经理'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Graphic strip sticker */}
                <div className="bg-black text-white text-[10px] font-mono font-black text-center py-2 border-t-3 border-black uppercase tracking-widest">
                  {lang === 'en' ? '★ OVERSEAS KD SPECIALIST ★' : '★ 汽车制造与海外量产落地专家 ★'}
                </div>
              </div>

              {/* Neo-brutalist Floating Visual elements around character */}
              <div className="absolute -top-3 -right-3 bg-neo-rose hover:bg-neo-yellow text-white hover:text-black neo-border p-2.5 rounded-xl neo-shadow-sm transition-transform duration-300 hover:rotate-12 cursor-pointer font-display font-extrabold text-xs flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {lang === 'en' ? 'AUTO KD' : '汽车 KD'}
              </div>
              <div className="absolute bottom-12 -left-8 bg-neo-sky text-black neo-border px-3.5 py-1.5 rounded-lg font-mono font-black text-xs rotate-[-6deg] shadow-md">
                SOP_READY: TRUE
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Slanted Infinite Scrolling Marquee Ribbon (Perfect replication of the diagonal partner ribbon from reference image) */}
      <div className="relative mt-24 py-5 bg-black text-white overflow-hidden rotate-[-2.5deg] scale-105 z-10 border-y-4 border-black shadow-[0px_4px_12px_rgba(0,0,0,0.15)] flex items-center">
        <div className="animate-marquee flex items-center gap-12 text-xs md:text-sm font-display font-black tracking-widest text-white uppercase whitespace-nowrap">
          {translations.tickerText.concat(translations.tickerText).map((partner, index) => (
            <React.Fragment key={index}>
              <span className="flex items-center gap-2">
                <span className="text-neo-yellow text-base">✦</span>
                {partner}
              </span>
              <span className="text-gray-500">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
    </section>
  );
}
