import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import InteractiveMap from './components/InteractiveMap';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Breadcrumb />
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-text-secondary mb-8">
                Ready to transform your business? We're here to help you achieve your goals 
                with our expert consulting services and strategic solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span>Response within 4 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={18} className="text-primary" />
                  <span>Confidential consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={18} className="text-primary" />
                  <span>Expert team support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Form */}
              <div className="order-1 lg:order-1">
                <ContactForm />
              </div>

              {/* Right Column - Contact Information */}
              <div className="order-2 lg:order-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Visit Our Offices
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                We have multiple locations to serve you better. Find the office nearest 
                to you and get directions for your visit.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <InteractiveMap />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Common Questions
              </h2>
              <p className="text-text-secondary">
                Get quick answers to frequently asked questions about our services and processes.
              </p>
            </div>
            
            <FAQSection />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business. Our expert team is standing by 
                to provide the strategic guidance you need to succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-all duration-200 hover-lift font-medium"
                >
                  <Icon name="Phone" size={20} />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@corporate.com"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-all duration-200 hover-lift font-medium"
                >
                  <Icon name="Mail" size={20} />
                  <span>Send Email</span>
                </a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} />
                    <span>Certified Consultants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} />
                    <span>Proven Results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={16} />
                    <span>Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;