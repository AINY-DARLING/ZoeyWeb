export type Language = 'en' | 'zh';

export type PrimaryColor = 'yellow' | 'blue' | 'sky' | 'rose' | 'orange' | 'purple';

export interface TranslationSet {
  navHome: string;
  navAbout: string;
  navServices: string;
  navPortfolio: string;
  navExperience: string;
  navTimeline: string;
  navContact: string;
  navCart: string;
  navPages: string;
  
  heroBadge: string;
  heroHeadingI: string;
  heroHeadingAm: string;
  heroHeadingA: string;
  heroHeadingDesigner: string;
  heroHeadingFrom: string;
  heroHeadingLocation: string;
  heroSub: string;
  heroCtaContact: string;
  heroCtaPortfolio: string;
  
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
  
  portfolioTitle: string;
  portfolioHighlight: string;
  portfolioSub: string;
  portfolioCta: string;
  portfolioViewCase: string;
  
  experienceTitle: string;
  experienceHighlight: string;
  experienceSub: string;
  experienceCta: string;
  
  testimonialsTitle: string;
  testimonialsHighlight: string;
  testimonialsSub: string;
  
  articlesTitle: string;
  articlesCta: string;
  articlesReadMore: string;
  
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterSuccess: string;
  
  footerContactUs: string;
  footerPhone: string;
  footerRights: string;
  footerSlogan: string;
}

export interface Project {
  id: string;
  title: { en: string; zh: string };
  category: { en: string; zh: string };
  desc: { en: string; zh: string };
  bgColor: string;
  textColor: string;
  accentColor: string;
  mockupType: 'browser' | 'code' | 'dashboard' | 'mobile';
  tags: string[];
  features: { en: string[]; zh: string[] };
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

export interface Testimonial {
  id: string;
  quote: { en: string; zh: string };
  author: string;
  role: { en: string; zh: string };
  avatarSeed: string; // Used to display specific SVG structures
}

export interface Article {
  id: string;
  tag: { en: string; zh: string };
  title: { en: string; zh: string };
  desc: { en: string; zh: string };
  date: string;
  author: string;
  readTime: { en: string; zh: string };
  bgColor: string;
  illustrationType: 'tools' | 'hierarchy' | 'tips';
}
