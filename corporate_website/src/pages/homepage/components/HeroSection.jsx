import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      title: "Innovation Through Self-Driven Excellence",
      subtitle: "Building Tomorrow\'s Solutions Today",
      description: "Solitude Innovation is a passionate startup dedicated to creating cutting-edge solutions through self-initiated projects and innovative thinking.",
      ctaText: "Explore Our Projects",
      ctaLink: "/services",
      backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Self Projects, Infinite Possibilities",
      subtitle: "From Vision to Reality",
      description: "We believe in the power of self-driven innovation. Every project we undertake is an opportunity to push boundaries and create something extraordinary.",
      ctaText: "Discover Our Work",
      ctaLink: "/services",
      backgroundImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Young Startup, Bold Vision",
      subtitle: "1 Year of Innovation",
      description: "Established in 2023, we're a young startup with ambitious goals, focusing on developing innovative self projects that make a difference.",
      ctaText: "Learn Our Story",
      ctaLink: "/about-us",
      backgroundImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ background: currentHero.backgroundImage }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
              {currentHero.subtitle}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {currentHero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            {currentHero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              as={Link}
              to={currentHero.ctaLink}
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-xl"
            >
              <Icon name="ArrowRight" size={20} className="ml-2" />
              {currentHero.ctaText}
            </Button>
            
            <Button
              as={Link}
              to="/team"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Meet Our Team
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10+", label: "Self Projects" },
              { number: "1", label: "Year Established" },
              { number: "100%", label: "Innovation Focus" },
              { number: "24/7", label: "Dedication" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;