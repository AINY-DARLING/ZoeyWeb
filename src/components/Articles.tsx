import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, PenTool, Hash, Star } from 'lucide-react';
import { Article, Language, PrimaryColor, TranslationSet } from '../types';
import { ARTICLES } from '../data';

interface ArticlesProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Articles({ lang, accentColor, translations }: ArticlesProps) {
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
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

  // Pre-compiled high fidelity vector illustrations for blog graphics
  const renderBlogIllustration = (type: 'tools' | 'hierarchy' | 'tips') => {
    switch (type) {
      case 'tools':
        return (
          <svg className="w-full h-44 bg-neo-yellow/20 border-b-3 border-black p-4 transition-transform duration-300 group-hover:scale-[1.01]" viewBox="0 0 320 160" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="290" height="130" rx="8" stroke="black" strokeWidth="3" fill="white" />
            
            {/* Drafting grids */}
            <g opacity="0.1" stroke="black" strokeWidth="1">
              <line x1="15" y1="50" x2="305" y2="50" />
              <line x1="15" y1="85" x2="305" y2="85" />
              <line x1="15" y1="120" x2="305" y2="120" />
              <line x1="80" y1="15" x2="80" y2="145" />
              <line x1="160" y1="15" x2="160" y2="145" />
              <line x1="240" y1="15" x2="240" y2="145" />
            </g>

            {/* Bezier Vector Curve Nodes */}
            <path d="M50 110 C80 30, 200 30, 250 110" stroke="black" strokeWidth="3" fill="none" strokeDasharray="3 3By" />
            <circle cx="50" cy="110" r="5" stroke="black" strokeWidth="2.5" fill="#FFD200" />
            <circle cx="250" cy="110" r="5" stroke="black" strokeWidth="2.5" fill="#FFD200" />
            <circle cx="150" cy="50" r="6" stroke="black" strokeWidth="2.5" fill="#FF2E93" />
            
            {/* Vector handles */}
            <line x1="150" y1="50" x2="110" y2="50" stroke="black" strokeWidth="2" />
            <line x1="150" y1="50" x2="190" y2="50" stroke="black" strokeWidth="2" />
            <rect x="105" y="46" width="8" height="8" stroke="black" strokeWidth="2" fill="white" />
            <rect x="186" y="46" width="8" height="8" stroke="black" strokeWidth="2" fill="white" />

            {/* Modern drafting ruler overlays */}
            <g transform="translate(180, 85) rotate(15)">
              <rect x="0" y="0" width="100" height="18" rx="2" stroke="black" strokeWidth="2.5" fill="white" />
              <line x1="10" y1="0" x2="10" y2="8" stroke="black" strokeWidth="1.5" />
              <line x1="20" y1="0" x2="20" y2="5" stroke="black" strokeWidth="1" />
              <line x1="30" y1="0" x2="30" y2="8" stroke="black" strokeWidth="1.5" />
              <line x1="40" y1="0" x2="40" y2="5" stroke="black" strokeWidth="1" />
              <line x1="50" y1="0" x2="50" y2="8" stroke="black" strokeWidth="1.5" />
              <line x1="60" y1="0" x2="60" y2="5" stroke="black" strokeWidth="1" />
              <line x1="70" y1="0" x2="70" y2="8" stroke="black" strokeWidth="1.5" />
              <line x1="80" y1="0" x2="80" y2="5" stroke="black" strokeWidth="1" />
              <line x1="90" y1="0" x2="90" y2="8" stroke="black" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'hierarchy':
        return (
          <svg className="w-24 h-24 bg-neo-rose/20 border-l-2 border-black p-2 shrink-0 hidden sm:block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Typographical scale box diagram */}
            <rect x="8" y="8" width="84" height="84" rx="4" stroke="black" strokeWidth="2" fill="white" />
            <rect x="16" y="18" width="45" height="24" rx="2" stroke="black" strokeWidth="1.5" fill="#FEE2E2" />
            
            {/* The H1 tag symbol */}
            <text x="38" y="34" fontFamily="Space Grotesk" fontWeight="900" fontSize="14" fill="black" textAnchor="middle">H1</text>
            
            {/* Base grid alignments lines */}
            <line x1="16" y1="52" x2="84" y2="52" stroke="black" strokeWidth="1.5" />
            <line x1="16" y1="62" x2="70" y2="62" stroke="black" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="16" y1="72" x2="76" y2="72" stroke="black" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        );

      case 'tips':
        return (
          <svg className="w-24 h-24 bg-neo-sky/20 border-l-2 border-black p-2 shrink-0 hidden sm:block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="84" height="84" rx="4" stroke="black" strokeWidth="2" fill="white" />
            
            {/* Mini Wireframes boxes schema */}
            <rect x="16" y="18" width="30" height="30" rx="3" stroke="black" strokeWidth="1.5" fill="#E0F2FE" />
            <circle cx="31" cy="33" r="5" fill="#3B82F6" stroke="black" strokeWidth="1" />
            
            <rect x="52" y="18" width="32" height="30" rx="3" stroke="black" strokeWidth="1.5" fill="#FAF9F6" />
            <line x1="58" y1="26" x2="78" y2="26" stroke="black" strokeWidth="2" />
            <line x1="58" y1="34" x2="70" y2="34" stroke="black" strokeWidth="1.5" />

            <rect x="16" y="56" width="68" height="26" rx="3" stroke="black" strokeWidth="1.5" fill="#FEE2E2" />
            <circle cx="28" cy="69" r="4" fill="#FF2E93" />
            <line x1="40" y1="69" x2="72" y2="69" stroke="black" strokeWidth="2.5" />
          </svg>
        );

      default:
        return null;
    }
  };

  const mainArticle = ARTICLES[0];
  const stackedArticles = ARTICLES.slice(1);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t-3 border-black">
      <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-[0.2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header segment with dual actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 text-left">
          <div>
            <span className="text-xs font-mono font-black text-neo-blue uppercase tracking-widest block mb-2">
              // DESIGN INTELLIGENTSIA CORNER
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neo-text uppercase">
              {translations.articlesTitle}
            </h2>
          </div>
          <button
            onClick={handleScrollToContact}
            className="neo-btn bg-white hover:bg-gray-100 border-black font-black text-sm"
            id="blog-header-cta-browse"
          >
            ✏ {translations.articlesCta}
          </button>
        </div>

        {/* Bento Grid: Non-uniform blocks (Superb replication of blog bento columns from mockup!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Major Column (Col span 7): Giant primary article card */}
          <div
            className="lg:col-span-7 bg-white text-neo-text neo-border neo-shadow rounded-3xl overflow-hidden group hover:translate-y-[-4px] hover:shadow-[7px_7px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 flex flex-col justify-between"
            id="major-blog-card"
          >
            <div>
              {/* Premium drafting SVG Graphic head */}
              {renderBlogIllustration(mainArticle.illustrationType)}
              
              {/* Card Meta row and description */}
              <div className="p-8 text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="px-2.5 py-0.5 bg-black text-white rounded font-mono text-[10px] font-black uppercase">
                    {mainArticle.tag.zh}
                  </span>
                  <span className="font-mono text-[11px] text-gray-500 font-bold uppercase">
                    {mainArticle.date} • {mainArticle.readTime.zh}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-black mb-3 group-hover:text-neo-blue transition-colors uppercase leading-tight">
                  {mainArticle.title.zh}
                </h3>
                
                <p className="font-sans text-gray-600 text-xs md:text-sm font-medium leading-relaxed">
                  {mainArticle.desc.zh}
                </p>
              </div>
            </div>

            {/* Bottom authors signature bar details */}
            <div className="px-8 pb-6 pt-2 border-t-2 border-dashed border-gray-100 flex items-center justify-between text-left select-none">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-neo-yellow neo-border-thin flex items-center justify-center font-display font-black text-xs">
                  周
                </div>
                <div>
                  <h5 className="font-display font-bold text-xs">{mainArticle.author}</h5>
                  <p className="text-[10px] text-gray-500 font-mono">CHIEF EDITOR</p>
                </div>
              </div>

              {/* Action read indicator */}
              <span className="text-xs font-mono font-black text-neo-rose flex items-center gap-1 group-hover:underline">
                {translations.articlesReadMore}
              </span>
            </div>

          </div>

          {/* Right Secondary Column (Col span 5): Stacked horizontal cards */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            
            {stackedArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white text-neo-text neo-border neo-shadow rounded-2xl overflow-hidden p-6 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 group flex gap-6 items-stretch justify-between text-left"
                id={`secondary-blog-card-${art.id}`}
              >
                
                {/* Text details column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="px-2 py-0.5 bg-neo-sky text-black rounded font-mono text-[9px] font-black uppercase border border-black shadow-sm">
                        {art.tag.zh}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 font-bold uppercase">
                        {art.date}
                      </span>
                    </div>

                    <h4 className="font-display font-black text-base md:text-lg text-black group-hover:text-neo-rose transition-colors uppercase leading-snug">
                      {art.title.zh}
                    </h4>

                    <p className="font-sans text-gray-500 text-xs font-medium leading-relaxed mt-2 line-clamp-2">
                      {art.desc.zh}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono font-black text-neo-blue flex items-center gap-1 mt-4 group-hover:underline">
                    {translations.articlesReadMore}
                  </span>
                </div>

                {/* Right schematic visualization widget */}
                {renderBlogIllustration(art.illustrationType)}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
