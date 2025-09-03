import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamHero = () => {
  const achievements = [
    { 
      icon: "Users", 
      number: "50+", 
      label: "Expert Professionals",
      description: "Certified consultants across all domains"
    },
    { 
      icon: "Award", 
      number: "25+", 
      label: "Industry Awards",
      description: "Recognition for excellence in consulting"
    },
    { 
      icon: "Globe", 
      number: "15+", 
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    { 
      icon: "TrendingUp", 
      number: "98%", 
      label: "Success Rate",
      description: "Proven track record of client satisfaction"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Meet Our Team
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            The Minds Behind
            <span className="text-primary block">Your Success</span>
          </h1>
          
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
            Our diverse team of industry experts, innovative thinkers, and dedicated professionals 
            work together to deliver exceptional results that exceed expectations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span className="text-text-secondary text-sm">Global Team</span>
            </div>
            <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-text-secondary text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border">
              <Icon name="Shield" size={16} className="text-primary" />
              <span className="text-text-secondary text-sm">Certified Experts</span>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={achievement.icon} size={28} className="text-primary" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-2">
                  {achievement.label}
                </div>
                <p className="text-text-secondary text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Culture Preview */}
        <div className="bg-surface/50 rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Built on Trust, Innovation & Excellence
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our team culture is built on collaboration, continuous learning, and a shared commitment 
                to delivering exceptional value to our clients. We believe that diverse perspectives and 
                innovative thinking drive the best solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Heart" size={18} className="text-primary" />
                  <span className="text-text-secondary">Passionate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lightbulb" size={18} className="text-primary" />
                  <span className="text-text-secondary">Innovative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={18} className="text-primary" />
                  <span className="text-text-secondary">Result-Driven</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users2" size={18} className="text-primary" />
                  <span className="text-text-secondary">Collaborative</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 text-center">
                <Icon name="Quote" size={48} className="text-primary/50 mx-auto mb-4" />
                <blockquote className="text-lg text-text-primary font-medium mb-4 italic">
                  "Working here isn't just about delivering projects – it's about creating lasting 
                  impact and building meaningful relationships with our clients and each other."
                </blockquote>
                <div className="text-text-secondary">
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm">Chief Executive Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;