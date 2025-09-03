import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CompanyOverview = () => {
  const achievements = [
    {
      id: 1,
      icon: "Calendar",
      number: "1",
      label: "Year Established",
      description: "Founded in 2023"
    },
    {
      id: 2,
      icon: "Folder",
      number: "10+",
      label: "Self Projects",
      description: "Innovative solutions"
    },
    {
      id: 3,
      icon: "Code",
      number: "5+",
      label: "Technologies",
      description: "Cutting-edge stack"
    },
    {
      id: 4,
      icon: "Zap",
      number: "100%",
      label: "Innovation Focus",
      description: "Future-oriented approach"
    }
  ];

  const differentiators = [
    {
      icon: "Lightbulb",
      title: "Innovation First",
      description: "Every project we undertake pushes the boundaries of what\'s possible with creative solutions."
    },
    {
      icon: "Target",
      title: "Self-Driven Excellence",
      description: "We create projects based on our vision of what the future needs, not just current demands."
    },
    {
      icon: "Rocket",
      title: "Startup Agility",
      description: "Fast iteration, rapid prototyping, and quick adaptation to new technologies and ideas."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Building" size={16} />
                <span>About Solitude Innovation</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Building Innovation
                <span className="text-primary block">Since 2023</span>
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                Solitude Innovation is a dynamic startup founded with the vision of creating impactful 
                solutions through self-initiated projects. As a young company, we focus on innovation, 
                creativity, and pushing technological boundaries without the constraints of traditional client work.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6 border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-text-primary mb-3">Our Mission</h3>
              <p className="text-text-secondary">
                To pioneer innovative solutions through self-driven projects that anticipate future needs 
                and demonstrate the potential of creative technology applications in solving real-world challenges.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={item.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/about-us">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="ArrowRight" 
                  iconPosition="right"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image and Stats */}
          <div className="space-y-8">
            {/* Company Image */}
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Young startup team brainstorming innovative project ideas in modern workspace"
                className="w-full h-[400px] object-cover rounded-2xl shadow-moderate"
              />
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-prominent">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-success" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-text-primary">Innovation First</div>
                    <div className="text-sm text-text-secondary">Self-driven projects</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className="bg-surface border border-border rounded-xl p-6 text-center hover:shadow-moderate transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {achievement.description}
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

export default CompanyOverview;