import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVision = () => {
  const cards = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: 'Target',
      content: `To empower businesses with innovative solutions that drive growth, efficiency, and sustainable success. We are committed to delivering exceptional value through strategic expertise, cutting-edge technology, and personalized service that transforms challenges into opportunities.`,
      bgColor: 'bg-primary/5',
      iconColor: 'text-primary'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: 'Eye',
      content: `To be the global leader in business transformation, recognized for our ability to anticipate market trends, deliver breakthrough solutions, and create lasting partnerships that shape the future of industry. We envision a world where every business can achieve its full potential.`,
      bgColor: 'bg-accent/5',
      iconColor: 'text-accent'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Mission & Vision
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our guiding principles that drive every decision and shape our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} rounded-2xl p-8 border border-border hover-shadow transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                  <Icon 
                    name={card.icon} 
                    size={24} 
                    className={card.iconColor}
                  />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">
                  {card.title}
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-lg">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;