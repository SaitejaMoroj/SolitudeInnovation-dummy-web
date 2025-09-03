import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      year: '2023',
      title: 'Solitude Innovation Founded',
      description: 'Started with a vision to create through self-driven innovation',
      details: `Solitude Innovation was established by passionate technologists who believed in the power of self-initiated projects. Starting as a lean startup, we focused on building a foundation for innovative development without the constraints of traditional client work.`,
      icon: 'Rocket'
    },
    {
      year: 'Q2 2023',
      title: 'First Project Portfolio',
      description: 'Launched our initial series of self-driven projects',
      details: `We began development on our first batch of innovative projects, each designed to explore different aspects of technology and user experience. These projects became the foundation of our development methodology and creative approach.`,
      icon: 'Folder'
    },
    {
      year: 'Q3 2023',
      title: 'Technology Stack Mastery',
      description: 'Established our core development technologies and processes',
      details: `Through our self-projects, we refined our technology stack and development processes. This period was crucial for establishing our technical capabilities and defining our approach to rapid prototyping and innovation.`,
      icon: 'Code'
    },
    {
      year: 'Q4 2023',
      title: 'Innovation Milestone',
      description: 'Achieved key breakthroughs in our project development',
      details: `Our dedication to self-driven innovation began showing results as we completed several groundbreaking projects. These achievements validated our approach and provided valuable insights for future development.`,
      icon: 'Award'
    },
    {
      year: '2024',
      title: 'Continued Growth',
      description: 'Expanding our project portfolio and capabilities',
      details: `As we enter our second year, we continue to push boundaries with new technologies and innovative approaches. Our focus remains on creating impactful solutions through self-initiated projects that demonstrate the future of technology.`,
      icon: 'TrendingUp'
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Key milestones in our first year of innovation and self-driven project development
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`${index % 2 === 0 ? 'mb-16' : 'mt-16'} bg-surface border border-border rounded-xl p-6 hover-shadow transition-all duration-300 cursor-pointer`}
                       onClick={() => toggleExpanded(index)}>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Icon name={item.icon} size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                    
                    {expandedItem === index && (
                      <div className="border-t border-border pt-3 mt-3">
                        <p className="text-sm text-text-secondary leading-relaxed">{item.details}</p>
                      </div>
                    )}
                    
                    <button className="flex items-center text-xs text-primary hover:text-primary/80 transition-colors duration-200">
                      <span>{expandedItem === index ? 'Show Less' : 'Learn More'}</span>
                      <Icon 
                        name={expandedItem === index ? 'ChevronUp' : 'ChevronDown'} 
                        size={14} 
                        className="ml-1" 
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 bg-surface border border-border rounded-xl p-6 hover-shadow transition-all duration-300 cursor-pointer w-full"
                       onClick={() => toggleExpanded(index)}>
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Icon name={item.icon} size={16} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                    
                    {expandedItem === index && (
                      <div className="border-t border-border pt-3 mt-3">
                        <p className="text-sm text-text-secondary leading-relaxed">{item.details}</p>
                      </div>
                    )}
                    
                    <button className="flex items-center text-xs text-primary hover:text-primary/80 transition-colors duration-200">
                      <span>{expandedItem === index ? 'Show Less' : 'Learn More'}</span>
                      <Icon 
                        name={expandedItem === index ? 'ChevronUp' : 'ChevronDown'} 
                        size={14} 
                        className="ml-1" 
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;