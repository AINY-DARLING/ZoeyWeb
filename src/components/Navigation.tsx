import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Menu, X, Mail, Sparkles, Sliders, Phone } from 'lucide-react';
import { Language, PrimaryColor, TranslationSet } from '../types';
// @ts-ignore
import zhouYuAvatar from '../assets/images/zhou_yu_q_style_avatar_1779863013292.png';

interface NavigationProps {
  lang: Language;
  setLang: (l: Language) => void;
  accentColor: PrimaryColor;
  setAccentColor: (color: PrimaryColor) => void;
  translations: TranslationSet;
}

export default function Navigation({
  lang,
  setLang,
  accentColor,
  setAccentColor,
  translations,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
      setMobileMenuOpen(false);
    }
  };

  const colors: { name: PrimaryColor; hex: string; leading: string }[] = [
    { name: 'yellow', hex: 'bg-neo-yellow', leading: 'text-neo-yellow' },
    { name: 'blue', hex: 'bg-neo-blue', leading: 'text-neo-blue' },
    { name: 'sky', hex: 'bg-neo-sky', leading: 'text-neo-sky' },
    { name: 'rose', hex: 'bg-neo-rose', leading: 'text-neo-rose' },
    { name: 'orange', hex: 'bg-neo-orange', leading: 'text-neo-orange' },
    { name: 'purple', hex: 'bg-neo-purple', leading: 'text-neo-purple' },
  ];

  return (
    <>
      {/* Floating Pill Capsule Bar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl neo-border rounded-full bg-white text-neo-text px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] py-2' : 'shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]'
        }`}
        id="navbar-capsule"
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Carter Icon */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2.5 group cursor-pointer pl-2"
          >
            <div className="w-10 h-10 rounded-full bg-neo-yellow border-2 border-black flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-transform group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={zhouYuAvatar} 
                alt="Zhou Yu" 
                className="w-full h-full object-cover scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display font-black tracking-tight text-base hidden sm:flex items-center gap-0.5">
              <span>{lang === 'zh' ? '周宇' : 'Zhou Yu'}</span>
              <span className="h-2 w-2 rounded-full bg-neo-rose border border-black animate-pulse" />
            </span>
          </a>

          {/* Desktop Navigation Links (Centered style like original) */}
          <nav className="hidden md:flex items-center gap-6 font-display font-bold text-xs lg:text-sm">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="hover:text-neo-rose hover:underline decoration-2 transition-all"
            >
              {translations.navHome}
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:text-neo-blue hover:underline decoration-2 transition-all"
            >
              {translations.navAbout}
            </a>
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, 'experience')}
              className="hover:text-neo-yellow hover:underline decoration-2 transition-all"
            >
              {translations.navExperience}
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="hover:text-neo-rose hover:underline decoration-2 transition-all"
            >
              {translations.navServices}
            </a>
            <a
              href="#timeline"
              onClick={(e) => handleNavClick(e, 'timeline')}
              className="hover:text-neo-blue hover:underline decoration-2 transition-all"
            >
              {translations.navTimeline}
            </a>
          </nav>

          {/* Controls & Mini Toggles */}
          <div className="flex items-center gap-2.5 pr-1">
            
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-1 bg-white hover:bg-[#FAF9F6] text-black px-2.5 py-1.5 rounded-full neo-border-thin shadow-[2px_2px_0px_rgba(0,0,0,1)] text-xs font-mono font-black transition-all hover:scale-105 active:scale-95 cursor-pointer text-neo-text"
              id="lang-toggle-button"
              title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
            >
              <Globe className="w-3.5 h-3.5 text-neo-rose animate-[spin_20s_linear_infinite]" />
              <span>{lang === 'zh' ? 'EN' : '中文'}</span>
            </button>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+8615300755797"
              className="hidden sm:flex items-center gap-1.5 bg-neo-yellow hover:bg-[#fcee35] text-black px-3 py-1.5 rounded-full neo-border-thin shadow-sm text-xs font-mono font-black transition-all hover:scale-105 active:scale-95"
              id="phone-contact-pill"
            >
              <Phone className="w-3 h-3 text-black animate-pulse" />
              <span>+86 15300755797</span>
            </a>

            {/* Let's talk Mail trigger */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="hidden sm:inline-flex items-center justify-center p-1.5 rounded-full bg-black hover:bg-white text-white hover:text-black neo-border-thin transition-colors cursor-pointer"
              title="Get in touch"
              id="contact-nav-capsule"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Mobile Burger Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 neo-border-thin hover:bg-gray-100 cursor-pointer text-neo-text"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation (Neo-Brutalist design drawer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden neo-border bg-white text-neo-text p-6 shadow-lg rounded-2xl"
          >
            <div className="flex flex-col gap-4 font-display font-extrabold text-lg">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="py-2 border-b border-gray-200 hover:text-neo-rose transition-colors"
              >
                {translations.navHome}
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="py-2 border-b border-gray-200 hover:text-neo-blue transition-colors"
              >
                {translations.navAbout}
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, 'experience')}
                className="py-2 border-b border-gray-200 hover:text-neo-yellow transition-colors"
              >
                {translations.navExperience}
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="py-2 border-b border-gray-200 hover:text-neo-rose transition-colors"
              >
                {translations.navServices}
              </a>
              <a
                href="#timeline"
                onClick={(e) => handleNavClick(e, 'timeline')}
                className="py-2 border-b border-gray-200 hover:text-neo-blue transition-colors"
              >
                {translations.navTimeline}
              </a>

              {/* Language Settings for Mobile */}
              <div className="mt-2 pt-4 border-t-2 border-dashed border-gray-250">
                <span className="text-xs uppercase font-mono text-gray-500 block mb-2 font-black flex items-center gap-1">
                  <Globe className="w-3 h-3 text-neo-rose" /> {lang === 'zh' ? '切换语言 / LANGUAGE' : 'CHANGE LANGUAGE'}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setLang('zh'); setMobileMenuOpen(false); }}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-black border-2 border-black ${
                      lang === 'zh' ? 'bg-neo-yellow shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-white'
                    }`}
                  >
                    中文简体
                  </button>
                  <button
                    onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-black border-2 border-black ${
                      lang === 'en' ? 'bg-neo-yellow shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'bg-white'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Theme Settings for Mobile */}
              <div className="mt-4 pt-4 border-t-2 border-dashed border-black">
                <span className="text-xs uppercase font-mono text-gray-500 block mb-2 font-black flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-neo-yellow" /> CHANGE BRAND ACCENT
                </span>
                <div className="flex items-center gap-2.5">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setAccentColor(c.name)}
                      className={`w-6 h-6 rounded-full ${c.hex} border-2 border-black cursor-pointer shadow-sm relative ${
                        accentColor === c.name ? 'scale-110 ring-2 ring-black ring-offset-2' : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
