
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'road', name: 'Road Maintenance' },
    { id: 'forestry', name: 'Forestry' },
    { id: 'stabilization', name: 'Soil Stabilization' },
    { id: 'recycling', name: 'Recycling' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Highway E-95 Maintenance',
      category: 'road',
      description: 'Comprehensive maintenance including grass cutting and tree management for 120km of highway.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    },
    {
      id: 2,
      title: 'Forest Clearing for Solar Farm',
      category: 'forestry',
      description: 'Specialized forest clearing and stump removal for 50-acre solar energy installation.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    },
    {
      id: 3,
      title: 'Industrial Park Soil Stabilization',
      category: 'stabilization',
      description: 'Advanced soil stabilization using proprietary mixed binders for commercial development.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    },
    {
      id: 4,
      title: 'Urban Road Recycling Project',
      category: 'recycling',
      description: 'Innovative recycling of road materials for sustainable urban infrastructure renewal.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    },
    {
      id: 5,
      title: 'Mountain Highway Snow Removal',
      category: 'road',
      description: 'Winter maintenance and snow removal services for critical mountain transportation routes.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    },
    {
      id: 6,
      title: 'Commercial Property Land Preparation',
      category: 'stabilization',
      description: 'Complete land preparation including deforestation and grading for commercial development.',
      imageClass: 'bg-gradient-to-br from-milata-darkGreyGreen to-milata-earthyBrown/50'
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Featured <span className="text-milata-limeGreen">Projects</span></h2>
          <p className="text-milata-greyGreen max-w-2xl mx-auto text-lg">
            Explore our portfolio of completed projects showcasing our expertise and technological capabilities.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-milata-limeGreen text-milata-darkGraphite'
                  : 'bg-milata-darkGreyGreen/20 text-milata-white hover:bg-milata-darkGreyGreen/40'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div 
                className={`h-48 ${project.imageClass} flex items-center justify-center`}
              >
                <div className="bg-milata-darkGraphite/50 backdrop-blur-sm w-full h-full flex items-center justify-center">
                  <span className="text-milata-limeGreen text-lg font-medium">{project.category.toUpperCase()}</span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-milata-white mb-2">{project.title}</h3>
                <p className="text-milata-greyGreen mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="text-milata-limeGreen hover:text-milata-limeGreen/80 text-sm font-medium inline-flex items-center"
                >
                  View Project Details
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-transparent hover:bg-milata-limeGreen/10 text-milata-limeGreen border border-milata-limeGreen">
            Browse All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
