
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

const About = () => {
  const { language, t } = useLanguage();
  const [inView, setInView] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    
    const section = document.getElementById('about');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const advantages = [
    "Advanced machinery and specialized equipment",
    "Environmentally sustainable practices", 
    "Experienced technical teams", 
    "Innovative solutions for complex challenges", 
    "Commitment to safety and quality", 
    "Cost-effective operation approaches"
  ];

  // Czech version of advantages
  const advantagesCz = [
    "Pokročilé stroje a specializované vybavení", 
    "Ekologicky udržitelné postupy", 
    "Zkušené technické týmy", 
    "Inovativní řešení pro složité výzvy", 
    "Závazek k bezpečnosti a kvalitě", 
    "Nákladově efektivní provozní přístupy"
  ];

  // Choose which advantages to display based on language
  const displayAdvantages = language === 'cz' ? advantagesCz : advantages;

  return (
    <section id="about" className="py-20 bg-milata-darkGreyGreen/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Tech-inspired image container */}
              <div className="w-full h-[500px] rounded-xl overflow-hidden relative group">
                {/* Main image */}
                <div className="w-full h-full bg-gradient-to-br from-milata-darkGraphite/80 to-milata-darkGreyGreen/50 rounded-xl flex items-center justify-center p-6 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-milata-darkGraphite/90 group-hover:to-milata-darkGreyGreen/60">
                  {/* Hexagon grid overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDBoMHY0MCIgc3Ryb2tlPSIjOTlGQzAzIiBzdHJva2Utb3BhY2l0eT0iLjIiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMjAgMjBMMCAwTDQwIDBMMjAgMjB6TTIwIDIwTDAgNDBMNDAgNDBMMjAgMjB6IiBzdHJva2U9IiM5OUZDMDMiIHN0cm9rZS1vcGFjaXR5PSIuMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"></div>
                  
                  {/* Company visuals - could be replaced with actual company image */}
                  <div className="relative z-10 w-3/4 h-3/4 border-2 border-milata-limeGreen/30 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-[1.03] group-hover:border-milata-limeGreen/50">
                    <div className="text-center p-8">
                      <div className="text-milata-limeGreen font-bold text-4xl mb-2 transition-transform duration-700 hover:scale-110 inline-block">MILATA</div>
                      <div className="text-milata-white font-bold text-xl mb-4">TECHNOLOGY</div>
                      <p className="text-milata-greyGreen">
                        {language === 'cz' 
                          ? 'Inovativní řešení pro správu silnic a pozemků od roku 2008'
                          : 'Innovative solutions for road & land management since 2008'}
                      </p>
                    </div>
                    
                    {/* Glowing elements - now with animation */}
                    <div className="absolute top-1/4 left-0 w-4 h-4 bg-milata-limeGreen rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-milata-limeGreen rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-milata-limeGreen rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute top-0 right-1/4 w-3 h-3 bg-milata-limeGreen rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg transition-all duration-500 group-hover:border-milata-limeGreen/70 group-hover:w-20 group-hover:h-20"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-milata-limeGreen/40 rounded-lg transition-all duration-500 group-hover:border-milata-limeGreen/70 group-hover:w-20 group-hover:h-20"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-milata-limeGreen/10 rounded-bl-3xl group-hover:bg-milata-limeGreen/20 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-milata-limeGreen/10 rounded-tr-3xl group-hover:bg-milata-limeGreen/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 ease-out delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="section-heading">
              {language === 'cz' ? 'O ' : 'About '}
              <span className="text-milata-limeGreen">MILATA TECHNOLOGY</span>
            </h2>
            
            <p className="text-milata-greyGreen mb-6">
              {language === 'cz' 
                ? 'Ve společnosti MILATA TECHNOLOGY kombinujeme špičková technologická řešení s ohledem na životní prostředí, abychom poskytovali výjimečné služby v oblasti správy silnic a pozemků. Náš komplexní přístup integruje pokročilé strojní zařízení s inovativními technikami pro řešení složitých infrastrukturních výzev.'
                : 'At MILATA TECHNOLOGY, we combine cutting-edge technological solutions with environmental responsibility to deliver exceptional road and land management services. Our comprehensive approach integrates advanced machinery with innovative techniques to solve complex infrastructure challenges.'}
            </p>
            
            <p className="text-milata-greyGreen mb-8">
              {language === 'cz'
                ? 'S odborností zahrnující údržbu silnic, správu lesů, stabilizaci půdy a přípravu staveb jsme se etablovali jako lídři v oboru, kteří se zavazují k bezpečnosti, kvalitě a udržitelnosti.'
                : 'With expertise spanning road maintenance, forestry management, soil stabilization, and construction preparation, we\'ve established ourselves as industry leaders committed to safety, quality, and sustainability.'}
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-milata-white mb-4">
                {language === 'cz' ? 'Naše výhody' : 'Our Advantages'}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {displayAdvantages.map((advantage, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-2 rounded-md transition-all duration-300 ${activeAdvantage === index ? 'bg-milata-darkGreyGreen/20 scale-105' : 'hover:bg-milata-darkGreyGreen/10'}`}
                    onMouseEnter={() => setActiveAdvantage(index)}
                    onMouseLeave={() => setActiveAdvantage(null)}
                  >
                    <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 transition-all duration-300 ${activeAdvantage === index ? 'text-milata-limeGreen scale-125' : 'text-milata-limeGreen/80'}`} />
                    <span className={`text-milata-white transition-all duration-300 ${activeAdvantage === index ? 'font-medium' : ''}`}>{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
