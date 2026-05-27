import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageSquare, Sliders } from 'lucide-react';
import { Service, Language, PrimaryColor, TranslationSet } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function Services({ lang, accentColor, translations }: ServicesProps) {
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
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

  // Modern SVGs reflecting full vector fidelity (Zero larping, fully authentic!)
  const renderServiceIllustration = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-sky/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="180" height="100" rx="6" stroke="black" strokeWidth="3" fill="white" />
            <rect x="10" y="10" width="180" height="25" fill="#171717" />
            <circle cx="25" cy="22" r="4" fill="#FF5E5B" />
            <circle cx="37" cy="22" r="4" fill="#FFD200" />
            <circle cx="49" cy="22" r="4" fill="#10B981" />
            
            {/* Mock Layout Grid */}
            <rect x="25" y="48" width="80" height="50" rx="3" stroke="black" strokeWidth="2.5" fill="#EBF3FF" />
            <rect x="25" y="58" width="50" height="6" rx="1.5" fill="black" />
            <rect x="25" y="70" width="70" height="4" rx="1" fill="#93C5FD" />
            <rect x="25" y="78" width="40" height="4" rx="1" fill="#93C5FD" />
            
            <circle cx="145" cy="73" r="16" stroke="black" strokeWidth="2.5" fill="#FFD200" />
            <line x1="145" y1="57" x2="145" y2="89" stroke="black" strokeWidth="2.5" />
            <line x1="129" y1="73" x2="161" y2="73" stroke="black" strokeWidth="2.5" />
            
            {/* Mouse Pointer Cursor */}
            <path d="M165 85 L180 100 L170 103 Z" fill="black" stroke="black" strokeWidth="1" />
          </svg>
        );
      case 'Smartphone':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-rose/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(68, 5)">
              <rect x="0" y="0" width="64" height="110" rx="10" stroke="black" strokeWidth="3.2" fill="white" />
              <rect x="5" y="8" width="54" height="94" rx="6" fill="#FAF9F6" stroke="black" strokeWidth="2" />
              <rect x="22" y="14" width="20" height="5" rx="2.5" fill="black" />
              <circle cx="32" cy="94" r="5" stroke="black" strokeWidth="2" fill="white" />
              
              {/* Dynamic UI Elements inside Phone */}
              <rect x="12" y="28" width="40" height="24" rx="3" stroke="black" strokeWidth="1.5" fill="#FEE2E2" />
              <circle cx="21" cy="40" r="5" fill="#FF2E93" />
              <rect x="32" y="36" width="14" height="3" fill="black" />
              <rect x="32" y="42" width="10" height="2.5" fill="gray" />

              <rect x="12" y="58" width="40" height="18" rx="3" stroke="black" strokeWidth="1.5" fill="#ECFDF5" />
              <rect x="18" y="64" width="28" height="5" rx="1" fill="#10B981" />
            </g>
            <circle cx="30" cy="50" r="14" stroke="black" strokeWidth="2.5" fill="#FFD200" />
            <circle cx="170" cy="70" r="10" stroke="black" strokeWidth="2.5" fill="#3B82F6" />
          </svg>
        );
      case 'Watch':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-green/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            {/* Wrist Strap */}
            <rect x="85" y="10" width="30" height="100" rx="3" stroke="black" strokeWidth="3.2" fill="#D1D5DB" />
            {/* Watch Body */}
            <rect x="65" y="25" width="70" height="70" rx="16" stroke="black" strokeWidth="3.2" fill="white" />
            <rect x="71" y="31" width="58" height="58" rx="12" stroke="black" strokeWidth="1.5" fill="#ECFDF5" />
            
            {/* Watch Screen Elements */}
            <circle cx="100" cy="60" r="18" stroke="black" strokeWidth="2" fill="#FFFFFF" />
            <path d="M92 60 Q100 70, 108 60 Q100 50, 92 60" fill="#FF2E93" stroke="black" strokeWidth="1" />
            <line x1="100" y1="60" x2="108" y2="52" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="60" x2="100" y2="48" stroke="black" strokeWidth="1.5" strokeLinecap="round" />

            {/* Measuring Scale Ruler on the side (Just like reference!) */}
            <g transform="translate(155, 20)">
              <rect x="0" y="0" width="16" height="80" rx="2" stroke="black" strokeWidth="2.5" fill="white" />
              <line x1="0" y1="10" x2="10" y2="10" stroke="black" strokeWidth="2" />
              <line x1="0" y1="20" x2="6" y2="20" stroke="black" strokeWidth="1.5" />
              <line x1="0" y1="30" x2="10" y2="30" stroke="black" strokeWidth="2" />
              <line x1="0" y1="40" x2="6" y2="40" stroke="black" strokeWidth="1.5" />
              <line x1="0" y1="50" x2="10" y2="50" stroke="black" strokeWidth="2" />
              <line x1="0" y1="60" x2="6" y2="60" stroke="black" strokeWidth="1.5" />
              <line x1="0" y1="70" x2="10" y2="70" stroke="black" strokeWidth="2" />
            </g>
          </svg>
        );
      case 'Search':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-yellow/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="160" height="90" rx="8" stroke="black" strokeWidth="3" fill="white" />
            
            {/* Mini User Profiles inside */}
            <circle cx="50" cy="50" r="14" stroke="black" strokeWidth="2" fill="#E0F2FE" />
            <circle cx="50" cy="46" r="5" stroke="black" strokeWidth="1.5" fill="#3B82F6" />
            <path d="M40 60 C40 54, 60 54, 60 60 Z" fill="#3B82F6" stroke="black" strokeWidth="1.5" />

            <circle cx="150" cy="50" r="10" stroke="black" strokeWidth="2" fill="#FEE2E2" />
            <circle cx="100" cy="75" r="12" stroke="black" strokeWidth="2" fill="#FEF08A" />

            {/* Connecting research line metrics */}
            <path d="M64 50 L90 70 M112 75 L140 55" stroke="black" strokeWidth="2" strokeDasharray="4 4" />
            
            {/* Magnifying Glass overlay */}
            <circle cx="106" cy="46" r="10" stroke="black" strokeWidth="2.5" fill="white" opacity="0.9" />
            <line x1="113" y1="53" x2="124" y2="64" stroke="black" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
        );
      case 'Video':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-purple/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="15" width="170" height="90" rx="8" stroke="black" strokeWidth="3" fill="white" />
            <rect x="15" y="15" width="170" height="20" fill="black" />
            
            {/* Play bar timeline icons */}
            <path d="M30 25 L40 25 M50 25 L65 25" stroke="white" strokeWidth="3" />
            <circle cx="165" cy="25" r="4" fill="#FF2E93" />

            {/* Video Play Widget */}
            <rect x="40" y="48" width="120" height="42" rx="4" stroke="black" strokeWidth="2" fill="#F5F3FF" />
            <polygon points="95,59 95,79 115,69" stroke="black" strokeWidth="2.5" fill="#8B5CF6" />
            
            {/* Timeline Sliders */}
            <circle cx="65" cy="69" r="6" stroke="black" strokeWidth="2" fill="#3B82F6" />
            <circle cx="145" cy="69" r="6" stroke="black" strokeWidth="2" fill="#FF5E5B" />
          </svg>
        );
      case 'Sliders':
        return (
          <svg className="w-full h-32 mb-4 bg-neo-orange/25 border-b-3 border-black p-3 transition-transform duration-300 group-hover:scale-102" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="15" width="150" height="90" rx="10" stroke="black" strokeWidth="3" fill="white" />
            {/* Knob sliders panel representation */}
            <line x1="50" y1="35" x2="150" y2="35" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <circle cx="75" cy="35" r="7" stroke="black" strokeWidth="3" fill="#FF2E93" />
            
            <line x1="50" y1="60" x2="150" y2="60" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <circle cx="125" cy="60" r="7" stroke="black" strokeWidth="3" fill="#10B981" />
            
            <line x1="50" y1="85" x2="150" y2="85" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <circle cx="95" cy="85" r="7" stroke="black" strokeWidth="3" fill="#FFD200" />
            {/* Trend sparkline overlay */}
            <path d="M140 45 L155 35 L170 50 L185 30" fill="none" stroke="#3B82F6" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_bottom,transparent,#faf9f6_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neo-text">
            {translations.servicesTitleRest}{' '}
            <span className="px-3 py-1 bg-neo-orange text-white neo-border inline-block rotate-[-1.5deg] shadow-sm">
              {translations.servicesTitleHighlight}
            </span>
          </h2>
          <p className="font-sans text-gray-600 font-medium text-sm md:text-base leading-relaxed">
            {translations.servicesSub}
          </p>
        </div>

        {/* Services Grid (Matches perfectly the layout grid in original file!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-white text-neo-text neo-border neo-shadow rounded-2xl overflow-hidden group hover:translate-y-[-4px] hover:shadow-[7px_7px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${serv.id}`}
            >
              <div>
                {/* SVG Visual Header illustration */}
                {renderServiceIllustration(serv.iconName)}
                
                {/* Card Title & Content */}
                <div className="p-6 pt-2">
                  <h3 className="font-display font-bold text-lg md:text-xl text-neo-text mb-2 flex items-center justify-between group-hover:text-neo-blue transition-colors">
                    {serv.title[lang]}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-neo-text" />
                  </h3>
                  <p className="font-sans text-gray-600 text-xs md:text-sm font-medium leading-relaxed">
                    {serv.desc[lang]}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
