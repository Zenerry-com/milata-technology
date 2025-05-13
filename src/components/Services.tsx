
import { Route, Snowflake, TreePine, Globe, Recycle, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Route className="h-10 w-10 text-milata-limeGreen" />,
      title: "Road & Highway Maintenance",
      description: "Comprehensive maintenance solutions including grass cutting, safety monitoring, and surface repairs for highways and roads."
    },
    {
      icon: <TreePine className="h-10 w-10 text-milata-limeGreen" />,
      title: "Tree Management & Forestry",
      description: "Professional tree felling, stump milling, and forest maintenance using advanced milling technology."
    },
    {
      icon: <Snowflake className="h-10 w-10 text-milata-limeGreen" />,
      title: "Snow Removal & Winter Services",
      description: "Rapid and efficient removal of snow cover from roadways, parking areas, and commercial properties."
    },
    {
      icon: <Globe className="h-10 w-10 text-milata-limeGreen" />,
      title: "Soil Stabilization",
      description: "Innovative soil stabilization using mixed binders to ensure solid foundations for construction projects."
    },
    {
      icon: <Recycle className="h-10 w-10 text-milata-limeGreen" />,
      title: "Roadway Recycling",
      description: "Sustainable recycling of road materials, reducing waste and environmental impact while creating new usable materials."
    },
    {
      icon: <Construction className="h-10 w-10 text-milata-limeGreen" />,
      title: "Construction Preparation",
      description: "Complete land preparation services including deforestation, clearing, and grading for construction projects."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-milata-limeGreen/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-milata-greyGreen/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our <span className="text-milata-limeGreen">Services</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            Leveraging cutting-edge technology and sustainable practices to deliver exceptional results across multiple sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:border-milata-limeGreen/30"
            >
              <div className="bg-milata-darkGraphite p-4 inline-block rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-milata-white mb-3">{service.title}</h3>
              <p className="text-milata-greyGreen mb-4">{service.description}</p>
              <a 
                href="#" 
                className="text-milata-limeGreen hover:text-milata-limeGreen/80 text-sm font-medium inline-flex items-center"
              >
                Learn More 
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-transparent hover:bg-milata-limeGreen/10 text-milata-limeGreen border border-milata-limeGreen">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
