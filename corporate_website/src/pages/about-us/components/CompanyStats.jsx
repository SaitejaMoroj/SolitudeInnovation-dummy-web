import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    year: 0,
    projects: 0,
    technologies: 0,
    innovations: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      key: 'year',
      icon: 'Calendar',
      value: 1,
      label: 'Year Established',
      suffix: ''
    },
    {
      key: 'projects',
      icon: 'Folder',
      value: 12,
      label: 'Self Projects',
      suffix: '+'
    },
    {
      key: 'technologies',
      icon: 'Code',
      value: 8,
      label: 'Technologies Mastered',
      suffix: '+'
    },
    {
      key: 'innovations',
      icon: 'Lightbulb',
      value: 100,
      label: 'Innovation Focus',
      suffix: '%'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let startValue = 0;
        const endValue = stat.value;
        const duration = 2000; // 2 seconds
        const increment = endValue / (duration / 16); // 60fps

        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => ({
            ...prev,
            [stat.key]: Math.floor(startValue)
          }));
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Journey in Numbers
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Though we're a young startup, our dedication to innovation and self-driven projects speaks volumes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-colors duration-300">
                <Icon 
                  name={stat.icon} 
                  size={32} 
                  className="text-primary-foreground group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">
                {animatedStats[stat.key]}{stat.suffix}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;