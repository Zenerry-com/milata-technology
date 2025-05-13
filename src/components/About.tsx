
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const advantages = [
    "Advanced machinery and specialized equipment",
    "Environmentally sustainable practices",
    "Experienced technical teams",
    "Innovative solutions for complex challenges",
    "Commitment to safety and quality",
    "Cost-effective operation approaches"
  ];

  return (
    <section id="about" className="py-20 bg-milata-darkGreyGreen/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Tech-inspired image container */}
              <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
                {/* Main image */}
                <div className="w-full h-full bg-gradient-to-br from-milata-darkGraphite/80 to-milata-darkGreyGreen/50 rounded-xl flex items-center justify-center p-6">
                  {/* Hexagon grid overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDBoMHY0MCIgc3Ryb2tlPSIjOTlGQzAzIiBzdHJva2Utb3BhY2l0eT0iLjIiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMjAgMjBMMCAwTDQwIDBMMjAgMjB6TTIwIDIwTDAgNDBMNDAgNDBMMjAgMjB6IiBzdHJva2U9IiM5OUZDMDMiIHN0cm9rZS1vcGFjaXR5PSIuMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"></div>
                  
                  {/* Company visuals - could be replaced with actual company image */}
                  <div className="relative z-10 w-3/4 h-3/4 border-2 border-milata-limeGreen/30 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-milata-limeGreen font-bold text-4xl mb-2">MILATA</div>
                      <div className="text-milata-white font-bold text-xl mb-4">TECHNOLOGY</div>
                      <p className="text-milata-greyGreen">Innovative solutions for road & land management since 2008</p>
                    </div>
                    
                    {/* Glowing elements */}
                    <div className="absolute top-1/4 left-0 w-4 h-4 bg-milata-limeGreen rounded-full blur-sm"></div>
                    <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-milata-limeGreen rounded-full blur-sm"></div>
                    <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-milata-limeGreen rounded-full blur-sm"></div>
                    <div className="absolute top-0 right-1/4 w-3 h-3 bg-milata-limeGreen rounded-full blur-sm"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-milata-limeGreen/10 rounded-bl-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-milata-limeGreen/10 rounded-tr-3xl"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="section-heading">About <span className="text-milata-limeGreen">MILATA TECHNOLOGY</span></h2>
            
            <p className="text-milata-greyGreen mb-6">
              At MILATA TECHNOLOGY, we combine cutting-edge technological solutions with environmental responsibility to deliver exceptional road and land management services. Our comprehensive approach integrates advanced machinery with innovative techniques to solve complex infrastructure challenges.
            </p>
            
            <p className="text-milata-greyGreen mb-8">
              With expertise spanning road maintenance, forestry management, soil stabilization, and construction preparation, we've established ourselves as industry leaders committed to safety, quality, and sustainability.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-milata-white mb-4">Our Advantages</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-milata-limeGreen mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-milata-white">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite font-medium">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
