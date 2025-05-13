
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-milata-darkGreyGreen/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-milata-limeGreen/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-milata-greyGreen/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">{t('getInTouch')} <span className="text-milata-limeGreen">{t('touchTitle2')}</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            {t('contactDesc')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-milata-white mb-10 text-center">{t('contactInfo')}</h3>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-milata-limeGreen/10 p-4 rounded-lg mr-6">
                  <Mail className="h-7 w-7 text-milata-limeGreen" />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('emailUs')}</h4>
                  <p className="text-milata-greyGreen text-lg">info@milatatechnology.com</p>
                  <p className="text-milata-greyGreen text-lg">support@milatatechnology.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-milata-limeGreen/10 p-4 rounded-lg mr-6">
                  <Phone className="h-7 w-7 text-milata-limeGreen" />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('callUs')}</h4>
                  <p className="text-milata-greyGreen text-lg">+1 (555) 123-4567</p>
                  <p className="text-milata-greyGreen text-lg">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-milata-limeGreen/10 p-4 rounded-lg mr-6">
                  <MapPin className="h-7 w-7 text-milata-limeGreen" />
                </div>
                <div>
                  <h4 className="text-milata-white font-medium text-lg mb-2">{t('visitUs')}</h4>
                  <p className="text-milata-greyGreen text-lg">
                    123 Technology Drive<br />
                    Suite 400<br />
                    Business Park, NY 10001
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-milata-greyGreen/20">
              <h4 className="text-milata-white font-medium text-lg mb-4">{t('workingHours')}</h4>
              <p className="text-milata-greyGreen text-lg">{t('workingHoursWeekday')}</p>
              <p className="text-milata-greyGreen text-lg">{t('workingHoursSaturday')}</p>
              <p className="text-milata-greyGreen text-lg">{t('workingHoursSunday')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
