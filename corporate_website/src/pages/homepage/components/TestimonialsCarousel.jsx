import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: `Working with this team has been transformational for our business. Their strategic insights and innovative approach helped us increase our market share by 40% within just 18 months. The level of professionalism and expertise they bring is unmatched.`,
      rating: 5,
      project: "Digital Transformation Strategy"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Manufacturing Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: `The consulting services provided exceeded our expectations. They not only identified key operational inefficiencies but also implemented solutions that resulted in 25% cost savings. Their team's dedication and expertise made all the difference.`,
      rating: 5,
      project: "Operational Excellence Program"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder & CTO",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: `As a startup, we needed guidance on scaling our technology infrastructure. Their team provided invaluable insights and hands-on support that helped us successfully launch our platform to over 10,000 users in the first quarter.`,
      rating: 5,
      project: "Technology Infrastructure Scaling"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "VP of Strategy",
      company: "RetailMax Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: `The strategic consulting we received was game-changing. They helped us navigate a complex market transition and develop a roadmap that positioned us as an industry leader. Their insights were both practical and visionary.`,
      rating: 5,
      project: "Market Expansion Strategy"
    }
  ];

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-warning fill-current" : "text-border"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-surface via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            What Our Clients
            <span className="text-primary block">Say About Us</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about 
            their experience working with our team.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12 shadow-moderate">
            <div className="max-w-4xl mx-auto">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={32} className="text-primary" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed font-medium">
                  "{testimonials[currentSlide].content}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  {/* Avatar and Info */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[currentSlide].avatar}
                      alt={`${testimonials[currentSlide].name} - ${testimonials[currentSlide].position}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-border"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-text-primary">
                        {testimonials[currentSlide].name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonials[currentSlide].position}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonials[currentSlide].company}
                      </div>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentSlide].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-moderate"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-moderate"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon 
              name={isAutoPlaying ? "Play" : "Pause"} 
              size={16} 
              className={isAutoPlaying ? "text-success" : "text-warning"} 
            />
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;