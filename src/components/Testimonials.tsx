import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Testimonial, Language, PrimaryColor, TranslationSet } from '../types';
import { TESTIMONIALS } from '../data';

interface TestimonialProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Testimonials({ lang, accentColor, translations }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTest = TESTIMONIALS[currentIndex];

  const renderClientCaricature = (seed: string) => {
    if (seed === 'lily') {
      return (
        <svg className="w-full h-full p-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Circular vector avatar backdrop details */}
          <circle cx="100" cy="100" r="88" fill="#FFE8D6" stroke="black" strokeWidth="4.5" />
          
          {/* Hair back group (Female style with rounded buns) */}
          <ellipse cx="100" cy="56" rx="48" ry="24" fill="#171717" stroke="black" strokeWidth="4" />
          <circle cx="56" cy="110" r="18" fill="#171717" stroke="black" strokeWidth="4" />
          <circle cx="144" cy="110" r="18" fill="#171717" stroke="black" strokeWidth="4" />

          {/* Neck */}
          <rect x="86" y="115" width="28" height="40" fill="#F8C39E" stroke="black" strokeWidth="4.5" />
          
          {/* Collar/Shirt - Red/Purple stripes */}
          <path d="M54 150 C70 142, 130 142, 146 150 L156 195 H44 Z" fill="#8B5CF6" stroke="black" strokeWidth="4.5" />
          <line x1="80" y1="145" x2="80" y2="195" stroke="black" strokeWidth="2.5" />
          <line x1="100" y1="145" x2="100" y2="195" stroke="black" strokeWidth="2.5" />
          <line x1="120" y1="145" x2="120" y2="195" stroke="black" strokeWidth="2.5" />
          
          {/* Face */}
          <circle cx="100" cy="100" r="48" fill="#FFE8D6" stroke="black" strokeWidth="4" />
          
          {/* Glasses or large stylish modern designer frames */}
          <rect x="68" y="88" width="28" height="20" rx="3" stroke="black" strokeWidth="4.5" fill="none" />
          <rect x="104" y="88" width="28" height="20" rx="3" stroke="black" strokeWidth="4.5" fill="none" />
          <line x1="96" y1="98" x2="104" y2="98" stroke="black" strokeWidth="5" />

          {/* Hair bangs */}
          <path d="M52 100 C52 75, 148 75, 148 100" stroke="black" strokeWidth="4" fill="none" />

          {/* Lips smiling */}
          <path d="M88 122 Q100 134, 112 122" stroke="black" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    } else {
      return (
        <svg className="w-full h-full p-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {/* Circular vector backdrop */}
          <circle cx="100" cy="100" r="88" fill="#ECFDF5" stroke="black" strokeWidth="4.5" />
          
          {/* Neck and shirt (Blue corporate polo) */}
          <rect x="85" y="118" width="30" height="40" fill="#F3BF95" stroke="black" strokeWidth="4" />
          <path d="M52 150 C70 144, 130 144, 148 150 L158 195 H42 Z" fill="#3B82F6" stroke="black" strokeWidth="4" />
          
          {/* Masculine short beard and hair drawing */}
          <circle cx="100" cy="95" r="44" fill="#F3BF95" stroke="black" strokeWidth="4" />
          <path d="M58 84 C48 40, 152 40, 142 84 Z" fill="#4B5563" stroke="black" strokeWidth="4" />
          <path d="M72 120 C72 144, 128 144, 128 120" stroke="#4B5563" strokeWidth="6" fill="none" />
          
          {/* Big smart corporate frames */}
          <circle cx="82" cy="94" r="13" stroke="black" strokeWidth="4" fill="none" />
          <circle cx="118" cy="94" r="13" stroke="black" strokeWidth="4" fill="none" />
          <line x1="95" y1="94" x2="105" y2="94" stroke="black" strokeWidth="5.5" />
          
          {/* Lips smiled */}
          <path d="M86 116 Q100 128, 114 116" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      );
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-transparent border-t-3 border-black" id="testimonials">
      
      {/* Decorative accents */}
      <div className="absolute top-1/2 left-4 w-12 h-12 bg-neo-yellow/10 rounded-full flex items-center justify-center font-display font-black text-neo-yellow text-lg">
        ✦
      </div>
      <div className="absolute top-1/3 right-8 w-8 h-8 bg-neo-rose/10 rounded-full flex items-center justify-center font-display font-black text-neo-rose text-base">
        ★
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neo-text">
            {translations.testimonialsTitle}{' '}
            <span className="px-3.5 py-1.5 bg-neo-rose text-white neo-border inline-block rotate-[-1.5deg] shadow-sm">
              {translations.testimonialsHighlight}
            </span>
          </h2>
          <p className="font-sans text-gray-600 font-medium text-sm md:text-base leading-relaxed">
            {translations.testimonialsSub}
          </p>
        </div>

        {/* Master layout block (Fidelity structure based on client block layout in reference) */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white text-black neo-border neo-shadow-lg rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-10 items-stretch">
            
            {/* Left/Main Side: Citation Quote texts */}
            <div className="md:w-2/3 select-none flex flex-col justify-between items-start text-left">
              
              <div>
                {/* Quotation vector icon bubble */}
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm">
                  <Quote className="w-6 h-6 text-[#FFD200]" />
                </div>

                <p className="font-sans text-gray-800 text-sm md:text-base lg:text-lg font-bold leading-relaxed mb-8 italic">
                  "{activeTest.quote.zh}"
                </p>
              </div>

              {/* Client Profile details */}
              <div className="mt-2">
                <h4 className="font-display font-black text-base md:text-lg text-black uppercase">
                  {activeTest.author}
                </h4>
                <p className="font-mono text-xs text-gray-500 font-bold mt-1 uppercase flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-neo-blue inline" />
                  {activeTest.role.zh}
                </p>
              </div>

            </div>

            {/* Right Side: Caricature Circle drawing (Replicated precisely from layout!) */}
            <div className="md:w-1/3 flex items-center justify-center bg-neo-rose/10 outline-3 outline-dashed outline-black/30 rounded-2xl p-4 relative min-h-[220px]">
              <div className="w-40 h-40 relative">
                {/* Visual shadow offset */}
                <div className="absolute inset-0 bg-black rounded-full translate-x-3.5 translate-y-3.5" />
                <div className="absolute inset-0 rounded-full bg-[#FF2E93] border-3 border-black overflow-hidden flex items-center justify-center">
                  {renderClientCaricature(activeTest.avatarSeed)}
                </div>
              </div>
            </div>

          </div>

          {/* Stepper Chevron Left/Right navigation (Centered below or positioned at flanks) */}
          <div className="flex justify-end gap-3.5 mt-8 max-w-4xl mx-auto pr-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 bg-white hover:bg-gray-100 border-3 border-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black cursor-pointer"
              title="Previous testimony"
              id="testimonial-prev-arrow"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 bg-white hover:bg-gray-100 border-3 border-black rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[1px_1px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black cursor-pointer"
              title="Next testimony"
              id="testimonial-next-arrow"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
