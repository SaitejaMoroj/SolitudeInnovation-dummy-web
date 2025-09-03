import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ServicesHero from './components/ServicesHero';
import ServicesList from './components/ServicesList';
import ServicesCTA from './components/ServicesCTA';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Latitude Innovation | Technology Solutions & Innovation</title>
        <meta 
          name="description" 
          content="Comprehensive technology solutions including software development, data science, machine learning, AI, cybersecurity, IoT, and R&D services by Latitude Innovation." 
        />
        <meta name="keywords" content="software development, data science, machine learning, AI, cybersecurity, IoT, R&D, technology solutions, innovation" />
        <meta property="og:title" content="Services - Latitude Innovation Technology Solutions" />
        <meta property="og:description" content="Expert technology services across software development, AI, cybersecurity, IoT and more." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/services" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <div className="pt-16">
            <Breadcrumb />
          </div>
          
          <ServicesHero />
          <ServicesList />
          <ServicesCTA />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;