import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import CompanyStory from './components/CompanyStory';
import MissionVision from './components/MissionVision';
import CompanyTimeline from './components/CompanyTimeline';
import CompanyValues from './components/CompanyValues';
import CompanyStats from './components/CompanyStats';
import AwardsCertifications from './components/AwardsCertifications';
import OfficeLocations from './components/OfficeLocations';
import CompanyCulture from './components/CompanyCulture';
import SidebarNavigation from './components/SidebarNavigation';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>

        {/* Sidebar Navigation */}
        <SidebarNavigation />

        {/* Page Sections */}
        <div id="story">
          <CompanyStory />
        </div>

        <div id="mission">
          <MissionVision />
        </div>

        <div id="timeline">
          <CompanyTimeline />
        </div>

        <div id="values">
          <CompanyValues />
        </div>

        <div id="stats">
          <CompanyStats />
        </div>

        <div id="awards">
          <AwardsCertifications />
        </div>

        <div id="locations">
          <OfficeLocations />
        </div>

        <div id="culture">
          <CompanyCulture />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;