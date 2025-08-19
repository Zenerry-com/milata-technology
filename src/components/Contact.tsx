
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast.success(`${type} copied to clipboard!`);
    
    setTimeout(() => {
      setCopied(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-milata-darkGreyGreen/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-milata-limeGreen/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-milata-greyGreen/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">{t('getInTouch')} <span className="text-milata-limeGreen">{t('touchTitle2')}</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            {t('contactDesc')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 shadow-lg hover:shadow-[0_0_25px_rgba(153,252,3,0.1)] transition-all duration-500">
            <h3 className="text-2xl font-semibold text-milata-white mb-10 text-center">{t('contactInfo')}</h3>
            
            <div className="space-y-10">
              <div 
                className={`flex items-start p-4 rounded-lg transition-all duration-300 ${hoveredItem === 0 ? 'bg-milata-darkGreyGreen/10' : ''}`}
                onMouseEnter={() => setHoveredItem(0)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`bg-milata-limeGreen/10 p-4 rounded-lg mr-6 transition-all duration-300 ${hoveredItem === 0 ? 'bg-milata-limeGreen/20 scale-110' : ''}`}>
                  <Mail className={`h-7 w-7 text-milata-limeGreen transition-all duration-300 ${hoveredItem === 0 ? 'animate-pulse' : ''}`} />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('emailUs')}</h4>
                  <p 
                    className="text-milata-greyGreen text-lg cursor-pointer hover:text-milata-limeGreen/80 transition-colors"
                    onClick={() => copyToClipboard('info@milatatechnology.com', 'Email')}
                  >
                    info@milatatechnology.com {copied === 'Email' && <span className="text-milata-limeGreen text-sm ml-2">✓ Copied</span>}
                  </p>
                  <p 
                    className="text-milata-greyGreen text-lg cursor-pointer hover:text-milata-limeGreen/80 transition-colors"
                    onClick={() => copyToClipboard('support@milatatechnology.com', 'Support email')}
                  >
                    support@milatatechnology.com {copied === 'Support email' && <span className="text-milata-limeGreen text-sm ml-2">✓ Copied</span>}
                  </p>
                </div>
              </div>
              
              <div 
                className={`flex items-start p-4 rounded-lg transition-all duration-300 ${hoveredItem === 1 ? 'bg-milata-darkGreyGreen/10' : ''}`}
                onMouseEnter={() => setHoveredItem(1)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`bg-milata-limeGreen/10 p-4 rounded-lg mr-6 transition-all duration-300 ${hoveredItem === 1 ? 'bg-milata-limeGreen/20 scale-110' : ''}`}>
                  <Phone className={`h-7 w-7 text-milata-limeGreen transition-all duration-300 ${hoveredItem === 1 ? 'animate-pulse' : ''}`} />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('callUs')}</h4>
                  <p 
                    className="text-milata-greyGreen text-lg cursor-pointer hover:text-milata-limeGreen/80 transition-colors"
                    onClick={() => copyToClipboard('+1 (555) 123-4567', 'Phone number')}
                  >
                    +1 (555) 123-4567 {copied === 'Phone number' && <span className="text-milata-limeGreen text-sm ml-2">✓ Copied</span>}
                  </p>
                  <p 
                    className="text-milata-greyGreen text-lg cursor-pointer hover:text-milata-limeGreen/80 transition-colors"
                    onClick={() => copyToClipboard('+1 (555) 765-4321', 'Alternative phone')}
                  >
                    +1 (555) 765-4321 {copied === 'Alternative phone' && <span className="text-milata-limeGreen text-sm ml-2">✓ Copied</span>}
                  </p>
                </div>
              </div>
              
              <div 
                className={`flex items-start p-4 rounded-lg transition-all duration-300 ${hoveredItem === 2 ? 'bg-milata-darkGreyGreen/10' : ''}`}
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={`bg-milata-limeGreen/10 p-4 rounded-lg mr-6 transition-all duration-300 ${hoveredItem === 2 ? 'bg-milata-limeGreen/20 scale-110' : ''}`}>
                  <MapPin className={`h-7 w-7 text-milata-limeGreen transition-all duration-300 ${hoveredItem === 2 ? 'animate-pulse' : ''}`} />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('visitUs')}</h4>
                  <p 
                    className="text-milata-greyGreen text-lg cursor-pointer hover:text-milata-limeGreen/80 transition-colors"
                    onClick={() => copyToClipboard('123 Technology Drive, Suite 400, Business Park, NY 10001', 'Address')}
                  >
                    123 Technology Drive<br />
                    Suite 400<br />
                    Business Park, NY 10001
                    {copied === 'Address' && <span className="text-milata-limeGreen text-sm ml-2">✓ Copied</span>}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-milata-greyGreen/20">
              <h4 className="text-milata-white font-medium text-lg mb-4">{t('workingHours')}</h4>
              <p className="text-milata-greyGreen text-lg hover:text-milata-greyGreen/80 transition-colors">{t('workingHoursWeekday')}</p>
              <p className="text-milata-greyGreen text-lg hover:text-milata-greyGreen/80 transition-colors">{t('workingHoursSaturday')}</p>
              <p className="text-milata-greyGreen text-lg hover:text-milata-greyGreen/80 transition-colors">{t('workingHoursSunday')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
