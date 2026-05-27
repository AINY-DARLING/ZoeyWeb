import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, ChevronRight, User } from 'lucide-react';
import { Language, PrimaryColor, TranslationSet } from '../types';
// @ts-ignore
import myself1Img from '../assets/images/myself1.jpg';

interface AboutProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function About({ lang, accentColor, translations }: AboutProps) {
  const [imgSrc, setImgSrc] = React.useState(myself1Img);
  
  const handleImageError = () => {
    if (imgSrc !== myself1Img) {
      setImgSrc(myself1Img);
    }
  };
  
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('experience');
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

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t-3 border-black" id="about">
      
      {/* Dynamic Background Grid details */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Circular Avatar representing professional portrait with custom motion styling */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              
              {/* Outer Shadow Offset Circle */}
              <div className="absolute inset-0 bg-black rounded-full translate-x-4 translate-y-4 shadow-lg transition-transform duration-350 hover:translate-x-3 hover:translate-y-3" />
              
              {/* Premium Floating Ring Ornaments */}
              <div className="absolute -inset-3.5 rounded-full border-2 border-dashed border-neo-rose/40 animate-[spin_50s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-5 rounded-full border border-neo-sky/30 pointer-events-none" />
              
              {/* Main Avatar Container Circular Wrapper with hover effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-neo-sky neo-border overflow-hidden flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
              >
                
                {/* Image element referencing user uploaded file 'myself1.jpg' */}
                <div className="w-full h-full relative overflow-hidden bg-neo-yellow/10">
                  <img
                    src={imgSrc}
                    onError={handleImageError}
                    alt={lang === 'en' ? 'Zhou Yu' : '周宇'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Float sticker badges around circle portrait - premium label */}
              <div className="absolute -bottom-1 -right-1 bg-neo-yellow text-black neo-border px-4 py-1.5 rounded-lg font-mono font-black text-[10px] uppercase tracking-wider shadow-md hover:scale-105 transition-transform duration-200">
                {lang === 'en' ? '★ EXPEDITION LEAD ★' : '★ 中外工程多方对接专家 ★'}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Text Description & Metrics */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div>
              <span className="text-xs font-mono font-black text-neo-rose uppercase tracking-widest block mb-2">
                Sunrise, sunset, and you
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neo-text mb-4">
                {translations.aboutTitle}{' '}
                <span className="px-3 py-1 bg-neo-sky text-black neo-border inline-block rotate-[1deg] shadow-sm">
                  {translations.aboutHighlight}
                </span>
              </h2>
              <p className="font-sans text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                {translations.aboutSub}
              </p>
            </div>

            {/* Metrics Checklist blocks (Styled exactly as in original!) */}
            <div className="flex flex-col gap-6 w-full">
              
              <div className="flex gap-4 items-start bg-gray-50 p-4 neo-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-neo-rose outline outline-2 outline-black rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-lg text-black mb-1">
                    {translations.aboutExperienceLabel}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-gray-600 font-medium">
                    {translations.aboutExperienceSub}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-gray-50 p-4 neo-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-neo-blue outline outline-2 outline-black rounded-xl">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-lg text-black mb-1">
                    {translations.aboutProjectsLabel}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-gray-600 font-medium">
                    {translations.aboutProjectsSub}
                  </p>
                </div>
              </div>

            </div>

            {/* Explore Project Navigation Trigger */}
            <button
              onClick={handleScrollToPortfolio}
              className="neo-btn bg-black text-white hover:bg-neutral-900 flex items-center gap-2 mt-2"
              id="about-cta-btn"
            >
              <span>{translations.aboutButton}</span>
              <ChevronRight className="w-4 h-4 text-neo-sky" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
