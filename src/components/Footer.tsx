
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-milata-darkGraphite border-t border-milata-darkGreyGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-milata-limeGreen font-bold text-2xl tracking-wider">MILATA</span>
              <span className="text-milata-white font-bold text-xl ml-1">TECH</span>
            </div>
            
            <p className="text-milata-greyGreen mb-6">
              Providing advanced technology solutions for road and land management with a focus on sustainability and innovation.
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
            <h3 className="text-lg font-semibold text-milata-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Road & Highway Maintenance</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Tree Management & Forestry</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Snow Removal & Winter Services</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Soil Stabilization</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Roadway Recycling</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Construction Preparation</a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-milata-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Projects</a>
              </li>
              <li>
                <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Careers</a>
              </li>
              <li>
                <a href="#contact" className="text-milata-greyGreen hover:text-milata-limeGreen transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-milata-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-milata-limeGreen mr-3 mt-0.5" />
                <span className="text-milata-greyGreen">
                  123 Technology Drive, Suite 400<br />
                  Business Park, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-milata-limeGreen mr-3" />
                <span className="text-milata-greyGreen">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-milata-limeGreen mr-3" />
                <span className="text-milata-greyGreen">info@milatatechnology.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-milata-darkGreyGreen/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-milata-greyGreen text-sm">
            &copy; {new Date().getFullYear()} MILATA TECHNOLOGY. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-milata-greyGreen hover:text-milata-limeGreen text-sm transition-colors duration-200">Cookie Policy</a>
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
