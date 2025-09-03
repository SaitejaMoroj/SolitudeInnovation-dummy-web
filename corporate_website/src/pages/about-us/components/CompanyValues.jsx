import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyValues = () => {
  const values = [
    {
      icon: 'Shield',
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards, building trust through transparency and honest communication in every interaction.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking approaches, constantly seeking new ways to solve complex challenges and deliver exceptional results.'
    },
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, fostering partnerships that leverage diverse perspectives and expertise to achieve shared success.'
    },
    {
      icon: 'Target',
      title: 'Excellence',
      description: 'We are committed to delivering superior quality in everything we do, setting high standards and continuously improving our performance.'
    },
    {
      icon: 'Heart',
      title: 'Respect',
      description: 'We value every individual, treating colleagues, clients, and partners with dignity while celebrating diversity and inclusion.'
    },
    {
      icon: 'Zap',
      title: 'Agility',
      description: 'We adapt quickly to changing market conditions, embracing flexibility and responsiveness to meet evolving client needs effectively.'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            The fundamental principles that guide our decisions, shape our culture, and define who we are as an organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-8 hover-shadow hover-lift transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon 
                  name={value.icon} 
                  size={28} 
                  className="text-primary group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;