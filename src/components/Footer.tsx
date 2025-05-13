
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-milata-darkGraphite border-t border-milata-darkGreyGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-milata-limeGreen font-bold text-2xl tracking-wider">MILATA</span>
              <span className="text-milata-white font-bold text-xl ml-1">TECH</span>
            </div>
            
            <p className="text-milata-greyGreen mb-6">
              {t('companyDesc')}
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-milata-darkGreyGreen/30 flex items-center justify-center text-milata-white hover:bg-milata-limeGreen hover:text-milata-darkGraphite transition-colors duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-milata-darkGreyGreen/30 flex items-center justify-center text-milata-white hover:bg-milata-limeGreen hover:text-milata-darkGraphite transition-colors duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-milata-darkGreyGreen/30 flex items-center justify-center text-milata-white hover:bg-milata-limeGreen hover:text-milata-darkGraphite transition-colors duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-milata-darkGreyGreen/30 flex items-center justify-center text-milata-white hover:bg-milata-limeGreen hover:text-milata-darkGraphite transition-colors duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-milata-white mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('roadMaintenance')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('treeManagement')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('snowRemoval')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('soilStabilization')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('roadwayRecycling')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('constructionPrep')}</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-milata-white mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('home')}</a>
              </li>
              <li>
                <a href="#about" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('about')}</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('services')}</a>
              </li>
              <li>
                <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('careers')}</a>
              </li>
              <li>
                <a href="#contact" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">{t('contact')}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-milata-darkGreyGreen/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-milata-greyGreen text-sm">
            &copy; {new Date().getFullYear()} MILATA TECHNOLOGY. {t('copyright')}
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">{t('privacyPolicy')}</a>
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">{t('termsOfService')}</a>
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">{t('cookiePolicy')}</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-milata-limeGreen text-milata-darkGraphite flex items-center justify-center hover:bg-milata-limeGreen/80 transition-colors duration-300 z-20"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
