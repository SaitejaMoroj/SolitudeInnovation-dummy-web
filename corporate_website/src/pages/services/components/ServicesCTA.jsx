import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import AppImage from '../../../components/AppImage';

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface rounded-3xl p-8 md:p-12 border border-border shadow-xl">
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
                <span>Ready to Innovate?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Let's Transform Your
                <span className="text-primary block">Vision into Reality</span>
              </h2>
              
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Partner with Latitude Innovation to leverage cutting-edge technology solutions 
                that drive growth, efficiency, and competitive advantage for your business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Fast Delivery</div>
                    <div className="text-sm text-text-secondary">Agile development process</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Expert Team</div>
                    <div className="text-sm text-text-secondary">Certified professionals</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Secure & Reliable</div>
                    <div className="text-sm text-text-secondary">Enterprise-grade security</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="HeadphonesIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">24/7 Support</div>
                    <div className="text-sm text-text-secondary">Ongoing maintenance</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  to="/contact"
                  size="lg"
                  className="px-8"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Start Your Project
                </Button>
                <Button
                  as={Link}
                  to="/team"
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Meet Our Team
                </Button>
              </div>
            </div>

            {/* Visual Stats */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    Trusted by Industry Leaders
                  </h3>
                  <p className="text-text-secondary">
                    Join our growing list of satisfied clients
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-text-secondary">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-text-secondary">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-text-secondary">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-text-secondary">Years Experience</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-background rounded-full">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Star" size={14} className="text-primary-foreground" />
                      </div>
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Icon name="Star" size={14} className="text-secondary-foreground" />
                      </div>
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Star" size={14} className="text-primary-foreground" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-text-primary ml-2">
                      4.9/5 Average Rating
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;