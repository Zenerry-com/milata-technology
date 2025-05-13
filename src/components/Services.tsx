
import { Route, Snowflake, TreePine, Globe, Recycle, Construction, Tractor, Axe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Tractor className="h-10 w-10 text-milata-limeGreen" />,
      title: t('roadMaintenance'),
      description: t('roadMaintenanceDesc')
    },
    {
      icon: <Axe className="h-10 w-10 text-milata-limeGreen" />,
      title: t('treeManagement'),
      description: t('treeManagementDesc')
    },
    {
      icon: <Snowflake className="h-10 w-10 text-milata-limeGreen" />,
      title: t('snowRemoval'),
      description: t('snowRemovalDesc')
    },
    {
      icon: <Globe className="h-10 w-10 text-milata-limeGreen" />,
      title: t('soilStabilization'),
      description: t('soilStabilizationDesc')
    },
    {
      icon: <Recycle className="h-10 w-10 text-milata-limeGreen" />,
      title: t('roadwayRecycling'),
      description: t('roadwayRecyclingDesc')
    },
    {
      icon: <Construction className="h-10 w-10 text-milata-limeGreen" />,
      title: t('constructionPrep'),
      description: t('constructionPrepDesc')
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Natural Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-milata-limeGreen/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-milata-greyGreen/5 rounded-full blur-3xl -z-10"></div>
      
      {/* Wood Texture Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zMCAwdjYwTTYwIDMwSDMwIiBzdHJva2U9InJnYmEoMTA3LCA3OSwgNTksIDAuNCkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMzAgMzBMMCAwaDF2NjBoMzRsMjYtMzB6IiBzdHJva2U9InJnYmEoMTA3LCA3OSwgNTksIDAuNCkiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">{t('ourServices')} <span className="text-milata-limeGreen">{t('services2')}</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            {t('servicesDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:border-milata-limeGreen/30 overflow-hidden relative"
            >
              {/* Tech Grid Lines - Subtle background pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDEwdjEwSDB6TTEwIDEwaDEwdjEwSDEwek0wIDIwaDEwdjEwSDB6TTIwIDBoMTB2MTBIMjB6TTEwIDIwaDEwdjEwSDEwek0zMCAxMGgxMHYxMEgzMHpNMjAgMjBoMTB2MTBIMjB6TTMwIDMwaDEwdjEwSDMwek0wIDMwaDEwdjEwSDB6TTIwIDMwaDEwdjEwSDIweiIgc3Ryb2tlPSIjNEE1QzVFIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
              
              <div className="bg-milata-darkGraphite p-4 inline-block rounded-lg mb-4 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-milata-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-milata-greyGreen mb-4 relative z-10">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
