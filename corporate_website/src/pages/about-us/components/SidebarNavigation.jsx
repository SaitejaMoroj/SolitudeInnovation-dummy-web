import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SidebarNavigation = () => {
  const [activeSection, setActiveSection] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'story', label: 'Our Story', icon: 'BookOpen' },
    { id: 'mission', label: 'Mission & Vision', icon: 'Target' },
    { id: 'timeline', label: 'Journey', icon: 'Clock' },
    { id: 'values', label: 'Core Values', icon: 'Heart' },
    { id: 'stats', label: 'Our Impact', icon: 'BarChart3' },
    { id: 'awards', label: 'Awards', icon: 'Award' },
    { id: 'locations', label: 'Global Presence', icon: 'MapPin' },
    { id: 'culture', label: 'Company Culture', icon: 'Users' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past hero section
      setIsVisible(window.scrollY > 200);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      const currentSection = sectionElements.find(element => {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-prominent">
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
              title={section.label}
            >
              <Icon 
                name={section.icon} 
                size={16} 
                className={activeSection === section.id ? 'text-primary-foreground' : 'text-current'} 
              />
              <span className="whitespace-nowrap">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;