import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageSquare, Check, Copy, Heart, Inbox } from 'lucide-react';
import { Language, PrimaryColor, TranslationSet } from '../types';

interface ContactFooterProps {
  lang: Language;
  accentColor: PrimaryColor;
  translations: TranslationSet;
}

export default function ContactFooter({ lang, accentColor, translations }: ContactFooterProps) {
  // Form submission and newsletters state handlers
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const [activeCopiedLabel, setActiveCopiedLabel] = useState<string | null>(null);

  const handleCopyClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setActiveCopiedLabel(label);
    setTimeout(() => setActiveCopiedLabel(null), 2500);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setNewsSuccess(true);
      setTimeout(() => {
        setNewsSuccess(false);
        setNewsEmail('');
      }, 5000);
    }
  };

  const colorsHex: Record<PrimaryColor, string> = {
    yellow: 'bg-neo-yellow',
    blue: 'bg-neo-blue',
    sky: 'bg-neo-sky',
    rose: 'bg-neo-rose',
    orange: 'bg-neo-orange',
    purple: 'bg-neo-purple',
  };

  return (
    <footer className="bg-[#171717] text-white pt-24 pb-12 relative overflow-hidden border-t-3 border-black" id="contact">
      
      {/* Dynamic graphic particles */}
      <div className="absolute top-1/4 right-[5%] w-16 h-16 rounded-full border-4 border-dashed border-white/5 animate-spin [animation-duration:30s] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-20">
        
        {/* Section 1: Dynamic Contact centered block */}
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Left Block: Info, Copiables and Social networks */}
          <div className="text-left flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono font-black text-neo-yellow uppercase tracking-widest block">
                {lang === 'zh' ? '请通过以下方式联系我.' : 'PLEASE CONTACT ME THROUGH THE FOLLOWING CHANNELS:'}
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl leading-tight tracking-tight uppercase">
                即刻快速建联
              </h2>

              {/* Multi-copiable connections links */}
              <div className="flex flex-col gap-3.5 pt-4">
                
                {/* Email address copier */}
                <div
                  onClick={() => handleCopyClipboard('zhouyuid@gmail.com', 'email')}
                  className="bg-[#262626] border-2 border-transparent hover:border-neo-rose p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors group select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-neo-rose flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono font-black block uppercase">DIRECT CONTACT EMAIL</span>
                      <span className="font-mono text-xs md:text-sm font-semibold text-white">zhouyuid@gmail.com</span>
                    </div>
                  </div>
                  <button className="p-2 bg-black hover:bg-neo-rose text-white rounded border border-white/10 shrink-0">
                    {activeCopiedLabel === 'email' ? <Check className="w-3.5 h-3.5 text-neo-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp Copier */}
                <div
                  onClick={() => handleCopyClipboard('+86 15300755797', 'phone')}
                  className="bg-[#262626] border-2 border-transparent hover:border-neo-blue p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors group select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-neo-blue flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono font-black block uppercase">PHONE DIRECT CONTACT</span>
                      <span className="font-mono text-xs md:text-sm font-semibold text-white">+86 15300755797</span>
                    </div>
                  </div>
                  <button className="p-2 bg-black hover:bg-neo-blue text-white rounded border border-white/10 shrink-0">
                    {activeCopiedLabel === 'phone' ? <Check className="w-3.5 h-3.5 text-neo-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WeChat ID copier */}
                <div
                  onClick={() => handleCopyClipboard('AINY_DARLING', 'wechat')}
                  className="bg-[#262626] border-2 border-transparent hover:border-neo-green p-3.5 rounded-xl flex items-center justify-between cursor-pointer transition-colors group select-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-neo-green flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono font-black block uppercase">WECHAT</span>
                      <span className="font-mono text-xs md:text-sm font-semibold text-white">AINY_DARLING</span>
                    </div>
                  </div>
                  <button className="p-2 bg-black hover:bg-neo-green text-white rounded border border-white/10 shrink-0">
                    {activeCopiedLabel === 'wechat' ? <Check className="w-3.5 h-3.5 text-neo-green" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Micro warning sticker */}
            <div className="bg-stone-800 text-stone-400 p-3.5 rounded-xl font-mono text-[9px] uppercase tracking-wide border border-white/5">
              🚀 GLOBAL COVERAGE: Thailand, Kuala Lumpur & Beijing/Shanghai timezone compliant operations.
            </div>
          </div>
        </div>

        {/* Section 2: Dark Newsletter subscribe capsule (Perfect mirror of the original black subscribe container!) */}
        <div
          className="bg-black text-white rounded-3xl p-6 md:p-10 neo-border flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative"
          id="newsletter-capsule-box"
        >
          {/* Left info description column */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#262626] rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
              <Inbox className="w-7 h-7 text-[#FFD200]" />
            </div>
            <div>
              <h3 className="font-display font-black text-lg md:text-2xl uppercase tracking-tight text-white m-0">
                {translations.newsletterTitle}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-sans mt-0.5">
                独家提供汽车KD装配技术分享、供应链管理体系更新、及项目跟单干货简报。
              </p>
            </div>
          </div>

          {/* Right Input row column */}
          <form onSubmit={handleNewsletterSubmit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3.5 items-stretch relative">
            <input
              type="email"
              required
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              placeholder={translations.newsletterPlaceholder}
              className="px-4 py-3 rounded-lg bg-stone-900 border-2 border-stone-700 text-white font-serif text-xs md:text-sm focus:outline-none focus:border-neo-rose min-w-[240px] shadow"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#FFD200] hover:bg-yellow-400 text-black font-display font-extrabold text-xs md:text-sm uppercase tracking-wider rounded border border-black cursor-pointer shadow active:translate-y-0.5"
            >
              {translations.newsletterButton}
            </button>

            {/* Simple Inline Newsletter Success message */}
            <AnimatePresence>
              {newsSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-6 left-2 text-[10px] text-green-400 font-mono"
                >
                  ★ {translations.newsletterSuccess}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>


        {/* Section 3: Fine Footer block */}
        <div className="pt-8 border-t-2 border-stone-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-neo-yellow neo-border-thin flex items-center justify-center font-display font-extrabold text-black text-xs">
                周
              </div>
              <span className="font-display font-black tracking-tight text-base text-white">
                周宇<span className="text-neo-rose">.</span>
              </span>
            </div>
            <p className="font-sans text-xs text-stone-500 max-w-sm mt-0.5">
              {translations.footerSlogan}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2.5">
            <p className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider">
              {translations.footerRights}
            </p>
            
            <div className="flex gap-2 text-stone-500 text-xs">
              <span>AUTOMOTIVE KD SYSTEMS • SOP V2.6</span>
              <span>•</span>
              <span className="text-neo-rose flex items-center gap-0.5 font-bold">
                CRAFTED WITH <Heart className="w-3 h-3 fill-current inline text-neo-rose animate-pulse" />
              </span>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}
