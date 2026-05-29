import React, { useState } from 'react';
import { TRANSLATIONS } from './data';
import { Language, PrimaryColor } from './types';

// Importing our modular architectural subcomponents
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Timeline from './components/Timeline';
import ContactFooter from './components/ContactFooter';
import FallingBackground from './components/FallingBackground';

export default function App() {
  // Global interactive states
  const [lang, setLang] = useState<Language>('zh');
  const [accentColor, setAccentColor] = useState<PrimaryColor>('yellow');

  // Load the active language translations
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-neo-yellow selection:text-black">
      
      {/* Global Dynamic Falling Elements background */}
      <FallingBackground />
      
      {/* 1. Floating Capsule Nav Bar */}
      <Navigation
        lang={lang}
        setLang={setLang}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
        translations={t}
      />

      {/* Main landing container layout stack */}
      <main className="flex-1 w-full flex flex-col">
        
        {/* 1. Hero Interactive Stage */}
        <Hero
          lang={lang}
          accentColor={accentColor}
          translations={t}
        />

        {/* 2. About profile with typing illustration caricature */}
        <About
          lang={lang}
          accentColor={accentColor}
          translations={t}
        />

        {/* 3. Past Experience chronological career blocks */}
        <Experience
          lang={lang}
          accentColor={accentColor}
          translations={t}
        />

        {/* 4. Broad capability grids */}
        <Services
          lang={lang}
          accentColor={accentColor}
          translations={t}
        />

        {/* 5. Timeline Tree with funny memory pictures */}
        <Timeline
          lang={lang}
          accentColor={accentColor}
        />

      </main>

      {/* 9. Secure Contact forms, Newsletters, and Multi-Column Footer links */}
      <ContactFooter
        lang={lang}
        accentColor={accentColor}
        translations={t}
      />

    </div>
  );
}
