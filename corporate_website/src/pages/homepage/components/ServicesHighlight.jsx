import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesHighlight = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Software Development",
      description: "Custom software solutions from web applications to enterprise systems, built with modern technologies and best practices.",
      features: ["Custom Web Apps", "Mobile Development", "Enterprise Systems", "API Integration"],
      icon: "Code",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      stats: { projects: "150+", satisfaction: "99%" }
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics, machine learning, and business intelligence.",
      features: ["Data Analysis", "ML Models", "Predictive Analytics", "Business Intelligence"],
      icon: "BarChart3",
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
      stats: { projects: "120+", satisfaction: "98%" }
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions including intelligent automation, NLP, computer vision, and cognitive computing.",
      features: ["AI Chatbots", "Computer Vision", "NLP Solutions", "Automation"],
      icon: "Brain",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      stats: { projects: "85+", satisfaction: "97%" }
    },
    {
      id: 4,
      title: "Cybersecurity & IoT",
      description: "Comprehensive security solutions and IoT development to protect your digital assets and connect smart devices.",
      features: ["Security Audits", "IoT Development", "Penetration Testing", "Smart Automation"],
      icon: "Shield",
      color: "bg-gradient-to-br from-red-500 to-orange-500",
      stats: { projects: "90+", satisfaction: "99%" }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            Our Technology Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Comprehensive Solutions for
            <span className="text-primary"> Digital Innovation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From software development to AI solutions, we provide end-to-end technology services 
            that drive digital transformation and business growth across seven key areas.
          </p>
        </div>

        {/* Interactive Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-xl border-2 ${
                  activeService === index
                    ? 'border-primary bg-primary/5 shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 hover:bg-surface'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.color}`}>
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">
                      {service.description}
                    </p>
                    <div className="flex space-x-4 text-xs text-text-secondary">
                      <span className="flex items-center">
                        <Icon name="CheckCircle" size={14} className="text-primary mr-1" />
                        {service.stats.projects} Projects
                      </span>
                      <span className="flex items-center">
                        <Icon name="Star" size={14} className="text-primary mr-1" />
                        {service.stats.satisfaction} Satisfaction
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-surface rounded-2xl p-8 border border-border shadow-xl">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${services[activeService].color}`}>
                <Icon name={services[activeService].icon} size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {services[activeService].title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  as={Link}
                  to="/contact"
                  className="flex-1"
                >
                  <Icon name="MessageCircle" size={18} className="mr-2" />
                  Get Started
                </Button>
                <Button
                  as={Link}
                  to="/services"
                  variant="outline"
                  className="flex-1"
                >
                  <Icon name="ArrowRight" size={18} className="mr-2" />
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to Transform Your Business with Technology?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join successful companies that have accelerated their digital transformation with our comprehensive technology solutions across software development, AI, cybersecurity, IoT, and R&D.
          </p>
          <Button
            as={Link}
            to="/services"
            size="lg"
            className="px-8 mr-4"
          >
            <Icon name="Rocket" size={20} className="mr-2" />
            Explore All Services
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="outline"
            size="lg"
            className="px-8"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;