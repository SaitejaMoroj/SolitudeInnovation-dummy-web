import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import HeroSection from './components/HeroSection';
import ServicesHighlight from './components/ServicesHighlight';
import CompanyOverview from './components/CompanyOverview';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Solitude Innovation - Innovation Through Self-Driven Projects & Solutions</title>
        <meta 
          name="description" 
          content="Solitude Innovation is a dynamic startup focused on developing innovative solutions through self-driven projects. Established in 2023, we're building the future through creative technology solutions." 
        />
        <meta name="keywords" content="startup, innovation, technology, self projects, software development, creative solutions" />
        <meta property="og:title" content="Solitude Innovation - Innovation Through Self Projects" />
        <meta property="og:description" content="A passionate startup creating innovative solutions through self-driven projects and cutting-edge technology." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <div className="pt-16">
            <Breadcrumb />
          </div>
          
          <HeroSection />
          <ServicesHighlight />
          <CompanyOverview />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;