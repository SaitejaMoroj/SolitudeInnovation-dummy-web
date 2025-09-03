import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AppImage from '../../../components/AppImage';

const ServicesHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <AppImage 
                  src="/assets/images/WhatsApp_Image_2025-06-21_at_7.24.35_PM-1750960242682.jpeg"
                  alt="Latitude Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Latitude Innovation Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Comprehensive
              <span className="text-primary block">Technology Solutions</span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              From cutting-edge software development to advanced AI solutions, we deliver 
              innovative technology services that drive digital transformation and business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                as={Link}
                to="/contact"
                size="lg"
                className="px-8"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Get Started
              </Button>
              <Button
                as={Link}
                to="/about-us"
                variant="outline"
                size="lg"
                className="px-8"
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Learn More
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">7+</div>
                <div className="text-sm text-text-secondary">Technology Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Technology Icons */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="Code" size={24} className="text-primary" />
                      <span className="text-sm font-medium">Software Dev</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="BarChart3" size={24} className="text-primary" />
                      <span className="text-sm font-medium">Data Science</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="Brain" size={24} className="text-primary" />
                      <span className="text-sm font-medium">AI & ML</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="Shield" size={24} className="text-primary" />
                      <span className="text-sm font-medium">Cybersecurity</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="Wifi" size={24} className="text-primary" />
                      <span className="text-sm font-medium">IoT Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-background rounded-lg shadow-sm">
                      <Icon name="Lightbulb" size={24} className="text-primary" />
                      <span className="text-sm font-medium">R&D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;