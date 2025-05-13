
import { Button } from '@/components/ui/button';
import { ChevronRight, Tractor, TreePine, Globe, Axe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-milata-darkGraphite via-milata-darkGreyGreen/40 to-milata-darkGraphite z-0"></div>
      
      {/* Nature-inspired Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zOCAyMEw0MCA1TS0yMCAyMkwyMiAtMjBNNDAgMTVMMTUgNDBNNDAgMzBMMzAgNDBNMjAgMzVMMzUgMjBNMjUgMTBMMTAgMjVNMjAgMTBMMTAgMjBNMzAgNUw1IDMwTTM1IDE1TDE1IDM1IiBzdHJva2U9InJnYmEoMTUzLCAxNzUsIDE3NiwgMC4xNSkiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-5 z-0"></div>
      
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
              <Button className="bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite text-lg px-6 py-6">
                {t('exploreServices')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="border-milata-greyGreen text-milata-white hover:bg-milata-greyGreen/20 text-lg px-6 py-6">
                {t('contactUs')}
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Image/Graphic with Forest & Tech Theme */}
              <div className="w-[500px] h-[400px] bg-gradient-to-br from-milata-darkGreyGreen/30 to-milata-darkGraphite rounded-xl glass-card p-6 flex items-center justify-center">
                {/* Wood texture overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiLz48cGF0aCBkPSJNMCAwQzUwIDI1IDUwIDc1IDAgMTAwYzUwIDI1IDUwIDc1IDAgMTAwaDIwMGMtNTAtMjUtNTAtNzUgMC0xMDBDMTUwIDc1IDE1MCAyNSAyMDAgMEgweiIgc3Ryb2tlPSIjNkI0RjNCIiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-10 rounded-xl"></div>
                
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-milata-limeGreen/20 flex items-center justify-center">
                  <Tractor className="w-12 h-12 text-milata-limeGreen" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-milata-limeGreen/20 flex items-center justify-center">
                  <TreePine className="w-12 h-12 text-milata-limeGreen" />
                </div>
                
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-milata-limeGreen/10 flex items-center justify-center border border-milata-limeGreen/30">
                  <Axe className="w-10 h-10 text-milata-limeGreen" />
                </div>
                
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-milata-limeGreen/10 flex items-center justify-center border border-milata-limeGreen/30">
                  <Axe className="w-10 h-10 text-milata-limeGreen" />
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-milata-limeGreen/10 flex items-center justify-center border border-milata-limeGreen/30">
                  <Globe className="w-16 h-16 text-milata-limeGreen" />
                </div>
                
                {/* Tech grid lines */}
                <div className="absolute inset-0 border border-milata-greyGreen/20 rounded-xl"></div>
                <div className="absolute inset-8 border border-milata-greyGreen/10 rounded-lg"></div>
                
                {/* Animated pulse */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-milata-limeGreen/5 animate-pulse"></div>
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
