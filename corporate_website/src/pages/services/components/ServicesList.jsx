import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesList = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "Software Development",
      category: "development",
      description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
      features: ["Custom Web Applications", "Mobile App Development", "Enterprise Software", "API Development", "System Integration"],
      icon: "Code",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      technologies: ["React", "Node.js", "Python", "Java", ".NET"],
      projects: "150+"
    },
    {
      id: 2,
      title: "Data Science",
      category: "analytics",
      description: "Transform raw data into actionable insights with advanced analytics and statistical modeling.",
      features: ["Data Analysis", "Statistical Modeling", "Data Visualization", "Business Intelligence", "Predictive Analytics"],
      icon: "BarChart3",
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
      technologies: ["Python", "R", "SQL", "Tableau", "Power BI"],
      projects: "120+"
    },
    {
      id: 3,
      title: "Machine Learning",
      category: "ai",
      description: "Build intelligent systems that learn and adapt, from recommendation engines to automation solutions.",
      features: ["ML Model Development", "Natural Language Processing", "Computer Vision", "Recommendation Systems", "Automation"],
      icon: "Brain",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras"],
      projects: "80+"
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      category: "ai",
      description: "Cutting-edge AI solutions including chatbots, intelligent automation, and cognitive computing.",
      features: ["AI Chatbots", "Cognitive Computing", "Intelligent Automation", "AI Strategy", "AI Ethics & Governance"],
      icon: "Zap",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      technologies: ["OpenAI", "Hugging Face", "LangChain", "GPT Models", "Claude"],
      projects: "65+"
    },
    {
      id: 5,
      title: "Cybersecurity",
      category: "security",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response", "Security Training"],
      icon: "Shield",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      technologies: ["SIEM", "Vulnerability Scanners", "Encryption", "Firewalls", "IAM"],
      projects: "90+"
    },
    {
      id: 6,
      title: "Internet of Things (IoT)",
      category: "iot",
      description: "Connected device solutions that bridge the physical and digital worlds for smart operations.",
      features: ["IoT Device Development", "Sensor Networks", "Edge Computing", "IoT Platforms", "Smart Automation"],
      icon: "Wifi",
      color: "bg-gradient-to-br from-indigo-500 to-blue-500",
      technologies: ["Arduino", "Raspberry Pi", "AWS IoT", "Azure IoT", "MQTT"],
      projects: "45+"
    },
    {
      id: 7,
      title: "Research & Development",
      category: "research",
      description: "Innovation-driven research projects that push the boundaries of technology and create breakthrough solutions.",
      features: ["Technology Research", "Proof of Concepts", "Innovation Labs", "Patent Development", "Emerging Tech"],
      icon: "Lightbulb",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      technologies: ["Emerging Tech", "Blockchain", "Quantum Computing", "AR/VR", "5G"],
      projects: "30+"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: 'Grid3x3' },
    { id: 'development', label: 'Development', icon: 'Code' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart3' },
    { id: 'ai', label: 'AI & ML', icon: 'Brain' },
    { id: 'security', label: 'Security', icon: 'Shield' },
    { id: 'iot', label: 'IoT', icon: 'Wifi' },
    { id: 'research', label: 'Research', icon: 'Lightbulb' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Our Technology
            <span className="text-primary"> Expertise</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions across seven key areas, delivered by our expert team 
            with proven track record of successful project implementations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-surface hover:bg-primary/10 text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${service.color}`}>
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">Projects</div>
                  <div className="text-lg font-semibold text-primary">{service.projects}</div>
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-text-primary mb-3">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Key Services
                </h4>
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-primary flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-text-secondary text-sm">
                      +{service.features.length - 3} more services
                    </div>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                as={Link}
                to="/contact"
                variant="outline"
                className="w-full"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Get Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;