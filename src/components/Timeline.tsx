import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, MapPin, Calendar, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, PrimaryColor } from '../types';

// Import images so Vite compiles them into dist/assets correctly for production
// @ts-ignore
import mygirlImg from '../assets/images/mygirl.jpg';
// @ts-ignore
import chenImg from '../assets/images/chen.jpg';
// @ts-ignore
import wangqingbinImg from '../assets/images/wangqingbin.jpg';
// @ts-ignore
import whcImg from '../assets/images/WHC.jpg';

interface TimelineEvent {
  id: string;
  year: string;
  location: string;
  title: string;
  description: string;
  defaultImage: string;
  images?: string[];
  themeColor: string;
  isPlaceholder?: boolean;
}

interface TimelineProps {
  accentColor: PrimaryColor;
}

function PolaroidPhoto({
  ev,
  lang,
}: {
  ev: TimelineEvent;
  lang: Language;
}) {
  const images = ev.images || (ev.defaultImage ? [ev.defaultImage] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentDisplayImage = images[currentIndex];

  const getSlideLabel = (url: string) => {
    if (url && url.includes('chen')) {
      return lang === 'zh'
        ? '陈 (Chen) ✦ 红线系起的南半球眷侣'
        : 'Chen ✦ Soulmates coupled in the Southern Hemisphere';
    }
    if (url && url.includes('wangqingbin')) {
      return lang === 'zh'
        ? '阿虫 ✦ 执火并肩的温暖守护者'
        : 'Ah Chong ✦ The devoted guardian standing with us';
    }
    if (url && url.includes('WHC')) {
      return lang === 'zh'
        ? 'WHC ✦ Monash 见证官 & 黄金神助攻'
        : 'WHC ✦ Monash witness & golden wingman';
    }
    return '';
  };

  const labelText = ev.images ? getSlideLabel(currentDisplayImage) : '';

  // Calculate back indices for film frame stacking
  const nextIdx = (currentIndex + 1) % images.length;
  const subsequentIdx = (currentIndex + 2) % images.length;

  return (
    <div className="relative w-full">
      {/* Background stack layer 2 (deepest, slightly rotated and shifted) */}
      {images.length > 2 && (
        <div className="absolute inset-0 bg-[#e7e5e4] border-2 border-black rounded-xl translate-x-3.5 translate-y-3.5 rotate-[-3deg] scale-[0.98] -z-20 shadow-[1px_1px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500">
          <img 
            src={images[subsequentIdx]} 
            alt="stack placeholder 2" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85 blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-stone-900/10" />
        </div>
      )}

      {/* Background stack layer 1 (middle stack sheet, rotated and shifted) */}
      {images.length > 1 && (
        <div className="absolute inset-0 bg-[#f5f5f4] border-2 border-black rounded-xl translate-x-2 translate-y-2 rotate-[2deg] scale-[0.99] -z-10 shadow-[2px_2px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-500">
          <img 
            src={images[nextIdx]} 
            alt="stack placeholder 1" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-90 blur-[0.2px]"
          />
          <div className="absolute inset-0 bg-stone-900/50 mix-blend-overlay opacity-20" />
        </div>
      )}

      {/* Main active frame */}
      {ev.isPlaceholder ? (
        <div 
          className="relative aspect-[4/3] bg-stone-100/50 rounded-xl overflow-hidden border-2 border-dashed border-stone-300 transition-all flex flex-col items-center justify-center p-6 text-center"
        >
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-stone-300 flex items-center justify-center text-stone-400 mb-3">
            <Camera className="w-5 h-5" />
          </div>
          <p className="text-xs font-sans font-bold text-stone-400">
            {lang === 'zh' ? '待续写的高光岁月' : 'Bright chapters await'}
          </p>
          <span className="text-[9px] font-mono text-stone-400 mt-1 uppercase tracking-wider block">
            ✦ Chapter is Reserved ✦
          </span>
        </div>
      ) : (
        <div 
          className="relative aspect-[4/3] bg-stone-100 rounded-xl overflow-hidden border-2 border-black transition-all group"
        >
          <div className="w-full h-full relative">
            <img 
              src={currentDisplayImage} 
              alt={ev.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none transition-all duration-700 ease-in-out"
              key={currentIndex}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  type="button"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-neo-yellow text-black border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
                  title={lang === 'zh' ? '上一张' : 'Previous'}
                >
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-neo-yellow text-black border-2 border-black flex items-center justify-center shadow-[1px_1px_0px_rgba(0,0,0,1)] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10"
                  title={lang === 'zh' ? '下一张' : 'Next'}
                >
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </>
            )}

            {labelText && (
              <div className="absolute bottom-2 left-2 bg-black/85 text-white/95 py-0.5 px-2 rounded font-mono text-[9px] uppercase tracking-wider font-extrabold flex items-center gap-1 z-10 backdrop-blur-xs select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-neo-rose animate-ping" />
                <span>{labelText}</span>
              </div>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-2 right-2 flex gap-1.5 bg-black/60 p-1.5 rounded-lg backdrop-blur-xs z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-neo-yellow scale-125' : 'bg-white/60 hover:bg-white'
                    }`}
                    title={lang === 'zh' ? `第 ${idx + 1} 页` : `Page ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="absolute top-2 left-2 bg-[#1c1c1c] text-white py-1 px-2.5 rounded font-mono text-[9px] uppercase tracking-wider font-extrabold flex items-center gap-1 z-10">
            <MapPin className="w-3 h-3 text-neo-rose" />
            <span>{ev.location}</span>
          </div>
        </div>
      )}
    </div>
  );
}

interface TimelineProps {
  lang: Language;
  accentColor: PrimaryColor;
}

export default function Timeline({ lang, accentColor }: TimelineProps) {
  // Preset list of warm, highly human milestones matched with Zhou Yu's genuine life path
  const events: TimelineEvent[] = [
    {
      id: 'event-my-girlfriend',
      year: '2026',
      location: lang === 'zh' ? '浪漫旅程' : 'Romantic Journey',
      title: lang === 'zh' ? '心动时刻：与她的温柔时光 ✦ Sweet Romance' : 'Heartbeats: Tender Times with Her ✦ Sweet Romance',
      description: lang === 'zh'
        ? '岁月温柔，有你相伴。手心传来的温热，和煦微风里的嫣然一笑，皆是生命底章中，最明媚动人、闪闪发光的耀眼时刻。'
        : 'Years grow gentle with you by my side. The warmth of holding hands, the sweet smile in the soft breeze, these are the most luminous, sparkling moments in the chapters of life.',
      defaultImage: mygirlImg,
      themeColor: 'bg-neo-rose',
    },

    {
      id: 'placeholder-2',
      year: 'Future',
      location: lang === 'zh' ? '奔赴未来的旅途' : 'Journey into the Future',
      title: lang === 'zh' ? '极客浩瀚，未完待续 ✦ To Be Continued' : 'Boundless Horizons, To Be Continued ✦',
      description: lang === 'zh'
        ? '岁月在时光树中安静舒展，此篇章正留白静候。诸君请期待'
        : 'As years unfold gently upon the timeline tree, this chapter remains as white space, awaiting the future. Stay tuned.',
      defaultImage: '',
      isPlaceholder: true,
      themeColor: 'bg-neo-sky',
    },
  ];

  const colors = {
    yellow: 'border-neo-yellow',
    blue: 'border-neo-blue',
    sky: 'border-neo-sky',
    rose: 'border-neo-rose',
    orange: 'border-neo-orange',
    purple: 'border-neo-purple',
  };

  return (
    <section className="py-24 bg-transparent border-t-3 border-black relative overflow-hidden" id="timeline">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[#000000] opacity-[0.02] bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Neo-Brutalist Sticker Style */}
        <div className="text-center mb-16">
          <div className="inline-block bg-neo-purple text-white neo-border px-4 py-1.5 rounded-lg font-mono font-black text-xs uppercase tracking-widest mb-4 rotate-[-1deg]">
            {lang === 'zh' ? '✦ 此外 • 岁月时光隧道 ✦' : '✦ Besides • Voyage through Time ✦'}
          </div>
          <h2 className="font-display font-black text-3.5xl sm:text-5xl tracking-tight text-neo-text mb-4 uppercase">
            {lang === 'zh' ? '岁月碎片与 ' : 'Fragments of Time & '}
            <span className="px-4 py-1 bg-neo-yellow text-black neo-border inline-block rotate-[1.5deg]">
              {lang === 'zh' ? '死党合影' : 'Close Buddies'}
            </span>
          </h2>
          <p className="font-sans text-stone-600 text-sm md:text-base font-medium max-w-2xl mx-auto mt-3 leading-relaxed">
            {lang === 'zh'
              ? '“在齿轮啮合与数字跳动的缝隙里，那些与挚友并肩执火的岁月，滚烫而又纯粹。星光落入酒杯，时光凝在底片。”'
              : '“Between the interlocking gears and the pulse of digital numbers, the days of stepping forward carrying fire beside dear friends were hot and pure. Starlights fell into wine glasses, as time was frozen in the film negative.”'}
          </p>
        </div>

        {/* The Timeline Line Container (Left aligned for more contents area) */}
        <div className="relative mt-12 pl-2">
          
          {/* Left Aligned Vertical Stem Line */}
          <div className="absolute left-8 sm:left-10 top-4 bottom-4 w-1.5 bg-black rounded-full -translate-x-1/2" />

          <div className="space-y-16">
            {events.map((ev, index) => {
              return (
                <div 
                  key={ev.id} 
                  className="relative flex flex-col items-stretch"
                >
                  
                  {/* Outer Timeline dot with index number - Left Aligned */}
                  <div className="absolute left-8 sm:left-10 w-10 h-10 rounded-full bg-black border-3 border-white flex items-center justify-center text-white z-20 -translate-x-1/2 shadow-[2px_2px_0px_rgba(0,0,0,1)] top-8">
                    <span className="font-mono font-black text-[11px] tracking-tight">{ev.year}</span>
                  </div>

                  {/* Content Card placed fully to the right with extra spacing */}
                  <div className="w-full pl-16 sm:pl-20 flex flex-col items-stretch">
                    
                    {/* Polaroid Styled Photo Card - Side-by-side grid structure with larger image space */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl neo-border shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-[1.005] hover:-translate-y-0.5 relative group">
                      
                      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
                        
                        {/* Polaroid stacked images section - taking 48% on widescreen for larger visual impact */}
                        <div className="w-full lg:w-[48%] shrink-0 pb-3 pr-3 relative">
                          <PolaroidPhoto
                            ev={ev}
                            lang={lang}
                          />
                        </div>

                        {/* Copy story details on the right */}
                        <div className="flex-grow flex flex-col justify-between pt-2">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-3.5 h-3.5 text-stone-400" />
                              <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider">
                                {ev.year} • {ev.location}
                              </span>
                            </div>
                            
                            <h4 className="font-display font-black text-xl sm:text-2xl text-black tracking-tight leading-snug hover:text-neo-blue transition-colors">
                              {ev.title}
                            </h4>
                            
                            {/* Accent separator */}
                            <div className="w-16 h-1.5 my-4 bg-black rounded-full" />
                            
                            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed font-semibold">
                              {ev.description}
                            </p>
                          </div>

                          {/* Footer with playful micro-element */}
                          <div className="mt-8 pt-4 border-t border-dashed border-stone-100 flex items-center justify-between">
                            <span className="font-mono text-[9px] text-stone-400 font-black uppercase tracking-wider">
                              {!ev.isPlaceholder 
                                ? (lang === 'zh' ? '✦ 莫纳什之恋与挚友情谊' : '✦ Love and memories in Monash Malaysia') 
                                : (lang === 'zh' ? '✦ 等待续写的空白篇章' : '✦ Static chapter pending')}
                            </span>
                            <span className="inline-flex items-center gap-2 text-rose-500">
                              <Heart className="w-4 h-4 fill-current animate-pulse" />
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* Spark decorator flower pin */}
                      <div className="absolute top-[-10px] right-3 transform rotate-6 z-20">
                        <div className={`neo-border px-3 py-1 rounded-md ${ev.themeColor} text-black font-mono font-black text-[9px] uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]`}>
                          {!ev.isPlaceholder 
                            ? (lang === 'zh' ? '回忆时光 📷' : 'MEMORIES 📷') 
                            : (lang === 'zh' ? '未来篇章 ✦' : 'FUTURE ✦')}
                        </div>
                      </div>
                      
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
