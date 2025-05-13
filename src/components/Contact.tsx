
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show toast notification
    toast({
      title: "Message Sent",
      description: "Thanks for contacting us. We'll respond shortly.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-milata-darkGreyGreen/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-milata-limeGreen/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-milata-greyGreen/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Get In <span className="text-milata-limeGreen">Touch</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            Have a project in mind or questions about our services? Reach out to our team for professional consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-milata-white mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-milata-limeGreen/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-milata-limeGreen" />
                  </div>
                  <div>
                    <h4 className="text-milata-white font-medium mb-1">Email Us</h4>
                    <p className="text-milata-greyGreen">info@milatatechnology.com</p>
                    <p className="text-milata-greyGreen">support@milatatechnology.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-milata-limeGreen/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-milata-limeGreen" />
                  </div>
                  <div>
                    <h4 className="text-milata-white font-medium mb-1">Call Us</h4>
                    <p className="text-milata-greyGreen">+1 (555) 123-4567</p>
                    <p className="text-milata-greyGreen">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-milata-limeGreen/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-milata-limeGreen" />
                  </div>
                  <div>
                    <h4 className="text-milata-white font-medium mb-1">Visit Us</h4>
                    <p className="text-milata-greyGreen">
                      123 Technology Drive<br />
                      Suite 400<br />
                      Business Park, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-milata-greyGreen/20">
                <h4 className="text-milata-white font-medium mb-4">Working Hours</h4>
                <p className="text-milata-greyGreen">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-milata-greyGreen">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-milata-greyGreen">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-milata-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-milata-white mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-milata-darkGraphite/50 border border-milata-greyGreen/30 rounded-lg focus:outline-none focus:border-milata-limeGreen text-milata-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-milata-white mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-milata-darkGraphite/50 border border-milata-greyGreen/30 rounded-lg focus:outline-none focus:border-milata-limeGreen text-milata-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-milata-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-milata-darkGraphite/50 border border-milata-greyGreen/30 rounded-lg focus:outline-none focus:border-milata-limeGreen text-milata-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-milata-white mb-2">Service Needed</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-milata-darkGraphite/50 border border-milata-greyGreen/30 rounded-lg focus:outline-none focus:border-milata-limeGreen text-milata-white"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Road Maintenance">Road Maintenance</option>
                      <option value="Tree Management">Tree Management</option>
                      <option value="Snow Removal">Snow Removal</option>
                      <option value="Soil Stabilization">Soil Stabilization</option>
                      <option value="Roadway Recycling">Roadway Recycling</option>
                      <option value="Construction Preparation">Construction Preparation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-milata-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-milata-darkGraphite/50 border border-milata-greyGreen/30 rounded-lg focus:outline-none focus:border-milata-limeGreen text-milata-white"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-milata-limeGreen hover:bg-milata-limeGreen/80 text-milata-darkGraphite font-medium py-6"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
