export type Language = 'en' | 'zh';

export type PrimaryColor = 'yellow' | 'blue' | 'sky' | 'rose' | 'orange' | 'purple';

export interface TranslationSet {
  navHome: string;
  navAbout: string;
  navServices: string;
  navExperience: string;
  navTimeline: string;

  heroBadge: string;
  heroSub: string;

  tickerText: string[];

  servicesTitleHighlight: string;
  servicesTitleRest: string;
  servicesSub: string;

  aboutTitle: string;
  aboutHighlight: string;
  aboutSub: string;
  aboutExperienceLabel: string;
  aboutExperienceSub: string;
  aboutProjectsLabel: string;
  aboutProjectsSub: string;
  aboutButton: string;

  experienceTitle: string;
  experienceHighlight: string;
  experienceSub: string;
  experienceCta: string;

  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterSuccess: string;

  footerRights: string;
  footerSlogan: string;
}

export interface Service {
  id: string;
  iconName: 'Layout' | 'Smartphone' | 'Watch' | 'Search' | 'Video' | 'Mail' | 'Sliders';
  title: { en: string; zh: string };
  desc: { en: string; zh: string };
  bgColor: string;
  textColor: string;
}

export interface ExperienceItem {
  id: string;
  timeline: { en: string; zh: string };
  role: { en: string; zh: string };
  company: { en: string; zh: string };
  desc: { en: string; zh: string };
  iconType: 'work' | 'design' | 'management' | 'tech';
}
