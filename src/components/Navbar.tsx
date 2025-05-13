
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <nav className="fixed w-full z-50 bg-milata-darkGraphite/90 backdrop-blur-md border-b border-milata-greyGreen/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-milata-limeGreen font-bold text-2xl tracking-wider">MILATA</span>
                <span className="text-milata-white font-bold text-2xl">TECHNOLOGY</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#home" className="text-milata-white hover:text-milata-limeGreen transition-colors duration-300">Home</a>
              
              <div className="relative">
                <button 
                  onClick={toggleServices}
                  className="flex items-center text-milata-white hover:text-milata-limeGreen transition-colors duration-300"
                >
                  Services
                  {servicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {servicesOpen && (
                  <div className="absolute z-10 mt-2 w-48 bg-milata-darkGreyGreen/90 backdrop-blur-md rounded-md shadow-lg py-1">
                    <a href="#services" className="block px-4 py-2 text-sm text-milata-white hover:bg-milata-limeGreen/20 hover:text-milata-limeGreen">Road Maintenance</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-milata-white hover:bg-milata-limeGreen/20 hover:text-milata-limeGreen">Tree Management</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-milata-white hover:bg-milata-limeGreen/20 hover:text-milata-limeGreen">Soil Stabilization</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-milata-white hover:bg-milata-limeGreen/20 hover:text-milata-limeGreen">Roadway Recycling</a>
                    <a href="#services" className="block px-4 py-2 text-sm text-milata-white hover:bg-milata-limeGreen/20 hover:text-milata-limeGreen">Construction Prep</a>
                  </div>
                )}
              </div>
              
              <a href="#about" className="text-milata-white hover:text-milata-limeGreen transition-colors duration-300">About</a>
              <a href="#projects" className="text-milata-white hover:text-milata-limeGreen transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-milata-white hover:text-milata-limeGreen transition-colors duration-300">Contact</a>
              
              <Button className="bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite font-medium">Get a Quote</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-milata-greyGreen hover:text-milata-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-milata-darkGreyGreen/90 backdrop-blur-md">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-milata-white hover:text-milata-limeGreen">Home</a>
            
            <div>
              <button 
                onClick={toggleServices}
                className="flex items-center w-full px-3 py-2 text-base font-medium text-milata-white hover:text-milata-limeGreen"
              >
                Services
                {servicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>
              
              {servicesOpen && (
                <div className="pl-6 space-y-1">
                  <a href="#services" className="block px-3 py-1 text-sm text-milata-white hover:text-milata-limeGreen">Road Maintenance</a>
                  <a href="#services" className="block px-3 py-1 text-sm text-milata-white hover:text-milata-limeGreen">Tree Management</a>
                  <a href="#services" className="block px-3 py-1 text-sm text-milata-white hover:text-milata-limeGreen">Soil Stabilization</a>
                  <a href="#services" className="block px-3 py-1 text-sm text-milata-white hover:text-milata-limeGreen">Roadway Recycling</a>
                  <a href="#services" className="block px-3 py-1 text-sm text-milata-white hover:text-milata-limeGreen">Construction Prep</a>
                </div>
              )}
            </div>
            
            <a href="#about" className="block px-3 py-2 text-base font-medium text-milata-white hover:text-milata-limeGreen">About</a>
            <a href="#projects" className="block px-3 py-2 text-base font-medium text-milata-white hover:text-milata-limeGreen">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-milata-white hover:text-milata-limeGreen">Contact</a>
            
            <div className="px-3 py-2">
              <Button className="w-full bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite font-medium">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
