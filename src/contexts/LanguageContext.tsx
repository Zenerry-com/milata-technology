
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'cz';

type Translations = {
  [key: string]: {
    en: string;
    cz: string;
  };
};

// Main translations
const translations: Translations = {
  // Navbar
  home: { en: 'Home', cz: 'Domů' },
  services: { en: 'Services', cz: 'Služby' },
  about: { en: 'About', cz: 'O nás' },
  contact: { en: 'Contact', cz: 'Kontakt' },
  getQuote: { en: 'Get a Quote', cz: 'Získat nabídku' },
  
  // Hero
  heroTitle1: { en: 'Advanced Solutions for', cz: 'Pokročilá řešení pro' },
  heroTitle2: { en: 'Road & Land Management', cz: 'Správu silnic a pozemků' },
  heroDesc: { 
    en: 'Innovative technology and sustainable practices for highway maintenance, forestry management, and environmental stability.',
    cz: 'Inovativní technologie a udržitelné postupy pro údržbu silnic, lesní hospodářství a ekologickou stabilitu.'
  },
  exploreServices: { en: 'Explore Services', cz: 'Prozkoumat služby' },
  contactUs: { en: 'Contact Us', cz: 'Kontaktujte nás' },
  yearsExp: { en: 'Years of Experience', cz: 'Let zkušeností' },
  projectsCompleted: { en: 'Projects Completed', cz: 'Dokončených projektů' },
  specializedVehicles: { en: 'Specialized Vehicles', cz: 'Specializovaných vozidel' },
  
  // Services
  ourServices: { en: 'Our', cz: 'Naše' },
  services2: { en: 'Services', cz: 'Služby' },
  servicesDesc: { 
    en: 'Leveraging cutting-edge technology and sustainable practices to deliver exceptional results across multiple sectors.',
    cz: 'Využívání špičkových technologií a udržitelných postupů k dosažení výjimečných výsledků v různých odvětvích.'
  },
  learnMore: { en: 'Learn More', cz: 'Více informací' },
  viewAllServices: { en: 'View All Services', cz: 'Zobrazit všechny služby' },
  
  // Services titles
  roadMaintenance: { 
    en: 'Road & Highway Maintenance', 
    cz: 'Údržba silnic a dálnic' 
  },
  treeManagement: { 
    en: 'Tree Management & Forestry', 
    cz: 'Správa stromů a lesnictví' 
  },
  snowRemoval: { 
    en: 'Snow Removal & Winter Services', 
    cz: 'Odstraňování sněhu a zimní služby' 
  },
  soilStabilization: { 
    en: 'Soil Stabilization', 
    cz: 'Stabilizace půdy' 
  },
  roadwayRecycling: { 
    en: 'Roadway Recycling', 
    cz: 'Recyklace vozovek' 
  },
  constructionPrep: { 
    en: 'Construction Preparation', 
    cz: 'Příprava stavby' 
  },
  
  // Services descriptions
  roadMaintenanceDesc: {
    en: 'Comprehensive maintenance solutions including grass cutting, safety monitoring, and surface repairs for highways and roads.',
    cz: 'Komplexní údržbová řešení včetně sekání trávy, bezpečnostního monitorování a oprav povrchů silnic a dálnic.'
  },
  treeManagementDesc: {
    en: 'Professional tree felling, stump milling, and forest maintenance using advanced milling technology.',
    cz: 'Profesionální kácení stromů, frézování pařezů a údržba lesů pomocí pokročilé frézovací technologie.'
  },
  snowRemovalDesc: {
    en: 'Rapid and efficient removal of snow cover from roadways, parking areas, and commercial properties.',
    cz: 'Rychlé a účinné odstraňování sněhové pokrývky z vozovek, parkovišť a komerčních nemovitostí.'
  },
  soilStabilizationDesc: {
    en: 'Innovative soil stabilization using mixed binders to ensure solid foundations for construction projects.',
    cz: 'Inovativní stabilizace půdy pomocí smíšených pojiv pro zajištění pevných základů stavebních projektů.'
  },
  roadwayRecyclingDesc: {
    en: 'Sustainable recycling of road materials, reducing waste and environmental impact while creating new usable materials.',
    cz: 'Udržitelná recyklace silničních materiálů, snižování odpadu a dopadu na životní prostředí při vytváření nových použitelných materiálů.'
  },
  constructionPrepDesc: {
    en: 'Complete land preparation services including deforestation, clearing, and grading for construction projects.',
    cz: 'Kompletní služby přípravy pozemků včetně odlesnění, čištění a terénních úprav pro stavební projekty.'
  },
  
  // About
  aboutTitle: { en: 'About', cz: 'O' },
  aboutTitle2: { en: 'Us', cz: 'nás' },
  
  // Contact
  getInTouch: { en: 'Get In', cz: 'Spojte se' },
  touchTitle2: { en: 'Touch', cz: 's námi' },
  contactDesc: {
    en: 'Have a project in mind or questions about our services? Reach out to our team for professional consultation.',
    cz: 'Máte v plánu projekt nebo otázky ohledně našich služeb? Kontaktujte náš tým pro profesionální konzultaci.'
  },
  contactInfo: { en: 'Contact Information', cz: 'Kontaktní údaje' },
  emailUs: { en: 'Email Us', cz: 'Napište nám' },
  callUs: { en: 'Call Us', cz: 'Zavolejte nám' },
  visitUs: { en: 'Visit Us', cz: 'Navštivte nás' },
  workingHours: { en: 'Working Hours', cz: 'Otevírací doba' },
  workingHoursWeekday: { en: 'Monday - Friday: 8:00 AM - 6:00 PM', cz: 'Pondělí - Pátek: 8:00 - 18:00' },
  workingHoursSaturday: { en: 'Saturday: 9:00 AM - 1:00 PM', cz: 'Sobota: 9:00 - 13:00' },
  workingHoursSunday: { en: 'Sunday: Closed', cz: 'Neděle: Zavřeno' },
  
  // Footer
  companyDesc: {
    en: 'Providing advanced technology solutions for road and land management with a focus on sustainability and innovation.',
    cz: 'Poskytujeme pokročilá technologická řešení pro správu silnic a pozemků se zaměřením na udržitelnost a inovace.'
  },
  quickLinks: { en: 'Quick Links', cz: 'Rychlé odkazy' },
  careers: { en: 'Careers', cz: 'Kariéra' },
  copyright: { en: 'All rights reserved.', cz: 'Všechna práva vyhrazena.' },
  privacyPolicy: { en: 'Privacy Policy', cz: 'Zásady ochrany osobních údajů' },
  termsOfService: { en: 'Terms of Service', cz: 'Obchodní podmínky' },
  cookiePolicy: { en: 'Cookie Policy', cz: 'Zásady používání cookies' },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('cz');

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
