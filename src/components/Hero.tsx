
import { Button } from '@/components/ui/button';
import { ChevronRight, Tractor, TreePine, Globe, Axe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-milata-darkGraphite via-milata-darkGreyGreen/40 to-milata-darkGraphite z-0"></div>
      
      {/* Nature-inspired Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zOCAxMEw0MCA1TS0yMCAyMkwyMiAtMjBNNDAgMTVMMTUgNDBNNDAgMzBMMzAgNDBNMjAgMzVMMzUgMjBNMjUgMTBMMTAgMjVNMjAgMTBMMTAgMjBNMzAgNUw1IDMwTTM1IDE1TDE1IDM1IiBzdHJva2U9InJnYmEoMTUzLCAxNzUsIDE3NiwgMC4xNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-5 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-milata-white">{t('heroTitle1')} </span>
              <span className="text-milata-limeGreen">{t('heroTitle2')}</span>
            </h1>
            
            <p className="text-milata-greyGreen text-lg md:text-xl mb-8 max-w-lg">
              {t('heroDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+420777919642" className="inline-block">
                <Button className="bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite text-lg px-6 py-6 w-full">
                  {t('contactUs')} +420 777 919 642
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full max-w-[500px]">
              {/* Improved Tractor Image with Aspect Ratio */}
              <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <AspectRatio ratio={16/12} className="bg-gradient-to-t from-milata-darkGreyGreen/30 to-transparent">
                  <img 
                    src="/lovable-uploads/ba69f968-a5eb-4522-ad85-e601a0b4fe75.png" 
                    alt="Modern Fendt tractor for land management" 
                    className="w-full h-full object-contain bg-gradient-to-b from-transparent via-milata-darkGreyGreen/10 to-milata-darkGraphite/80"
                  />
                </AspectRatio>

                {/* Color transition overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-milata-darkGraphite via-milata-darkGreyGreen/30 to-transparent opacity-60 pointer-events-none"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Client Logos or Stats */}
        <div className="mt-20 border-t border-milata-greyGreen/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-milata-limeGreen text-4xl font-bold mb-2">15+</h3>
              <p className="text-milata-greyGreen">{t('yearsExp')}</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-milata-limeGreen text-4xl font-bold mb-2">300+</h3>
              <p className="text-milata-greyGreen">{t('projectsCompleted')}</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-milata-limeGreen text-4xl font-bold mb-2">50+</h3>
              <p className="text-milata-greyGreen">{t('specializedVehicles')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
