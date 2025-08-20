
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'cz';

type Translations = {
  [key: string]: string;
};

// Main translations
const translations: Translations = {
  // Navbar
  home: 'Domů',
  services: 'Služby',
  about: 'O nás',
  contact: 'Kontakt',
  getQuote: 'Získat nabídku +420 777 919 642',
  
  // Hero
  heroTitle1: 'Pokročilá řešení pro',
  heroTitle2: 'Správu silnic a pozemků',
  heroDesc: 'Inovativní technologie a udržitelné postupy pro údržbu silnic, lesní hospodářství a ekologickou stabilitu.',
  exploreServices: 'Kontaktujte nás +420 777 919 642',
  contactUs: 'Kontaktujte nás',
  yearsExp: 'Let zkušeností',
  projectsCompleted: 'Dokončených projektů',
  specializedVehicles: 'Specializovaných vozidel',
  
  // Services
  ourServices: 'Naše',
  services2: 'Služby',
  servicesDesc: 'Využívání špičkových technologií a udržitelných postupů k dosažení výjimečných výsledků v různých odvětvích.',
  learnMore: 'Více informací',
  viewAllServices: 'Zobrazit všechny služby',
  
  // Services titles
  roadMaintenance: 'Údržba silnic a dálnic',
  treeManagement: 'Správa stromů a lesnictví',
  snowRemoval: 'Odstraňování sněhu a zimní služby',
  soilStabilization: 'Stabilizace půdy',
  roadwayRecycling: 'Recyklace vozovek',
  constructionPrep: 'Příprava stavby',
  
  // Services descriptions
  roadMaintenanceDesc: 'Komplexní údržbová řešení včetně sekání trávy, bezpečnostního monitorování a oprav povrchů silnic a dálnic.',
  treeManagementDesc: 'Profesionální kácení stromů, frézování pařezů a údržba lesů pomocí pokročilé frézovací technologie.',
  snowRemovalDesc: 'Rychlé a účinné odstraňování sněhové pokrývky z vozovek, parkovišť a komerčních nemovitostí.',
  soilStabilizationDesc: 'Inovativní stabilizace půdy pomocí smíšených pojiv pro zajištění pevných základů stavebních projektů.',
  roadwayRecyclingDesc: 'Udržitelná recyklace silničních materiálů, snižování odpadu a dopadu na životní prostředí při vytváření nových použitelných materiálů.',
  constructionPrepDesc: 'Kompletní služby přípravy pozemků včetně odlesnění, čištění a terénních úprav pro stavební projekty.',
  
  // About
  aboutTitle: 'O',
  aboutTitle2: 'nás',
  
  // Contact
  getInTouch: 'Spojte se',
  touchTitle2: 's námi',
  contactDesc: 'Máte v plánu projekt nebo otázky ohledně našich služeb? Kontaktujte náš tým pro profesionální konzultaci.',
  contactInfo: 'Kontaktní údaje',
  emailUs: 'Napište nám',
  callUs: 'Zavolejte nám',
  visitUs: 'Navštivte nás',
  workingHours: 'Otevírací doba',
  workingHoursWeekday: 'Pondělí - Pátek: 8:00 - 18:00',
  workingHoursSaturday: 'Sobota: 9:00 - 13:00',
  workingHoursSunday: 'Neděle: Zavřeno',
  accountingTitle: 'ÚČETNÍ',
  millingTitle: 'FRÉZOVÁNÍ A STABILIZACE ZEMIN',
  
  // Footer
  companyDesc: 'Poskytujeme pokročilá technologická řešení pro správu silnic a pozemků se zaměřením na udržitelnost a inovace.',
  quickLinks: 'Rychlé odkazy',
  careers: 'Kariéra',
  copyright: 'Všechna práva vyhrazena.',
  privacyPolicy: 'Zásady ochrany osobních údajů',
  termsOfService: 'Obchodní podmínky',
  cookiePolicy: 'Zásady používání cookies',
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language] = useState<Language>('cz');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: () => {}, t }}>
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
