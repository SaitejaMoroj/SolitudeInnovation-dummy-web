import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AwardsCertifications = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'Best Consulting Firm 2023',
      organization: 'Business Excellence Awards',
      year: '2023',
      logo: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Recognized for outstanding performance in strategic consulting and client satisfaction. This award acknowledges our innovative approach to solving complex business challenges and our commitment to delivering measurable results for our clients.`,
      category: 'Industry Recognition'
    },
    {
      id: 2,
      title: 'Innovation Leader Award',
      organization: 'Tech Innovation Council',
      year: '2023',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Honored for pioneering digital transformation solutions and breakthrough technology implementations. This recognition highlights our ability to leverage cutting-edge technology to drive business growth and operational efficiency.`,
      category: 'Technology'
    },
    {
      id: 3,
      title: 'ISO 9001:2015 Certification',
      organization: 'International Organization for Standardization',
      year: '2022',
      logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Certified for maintaining the highest standards in quality management systems. This certification demonstrates our commitment to consistent quality delivery, continuous improvement, and customer satisfaction across all our services.`,
      category: 'Quality Assurance'
    },
    {
      id: 4,
      title: 'Workplace Excellence Award',
      organization: 'HR Leadership Forum',
      year: '2022',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Recognized for creating an exceptional workplace culture that promotes employee growth, diversity, and innovation. This award reflects our commitment to building a supportive environment where talent thrives.`,
      category: 'Human Resources'
    },
    {
      id: 5,
      title: 'Sustainability Champion',
      organization: 'Green Business Council',
      year: '2021',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Awarded for implementing comprehensive sustainability practices and helping clients achieve their environmental goals. This recognition underscores our dedication to responsible business practices and environmental stewardship.`,
      category: 'Sustainability'
    },
    {
      id: 6,
      title: 'Client Choice Award',
      organization: 'Industry Review Board',
      year: '2021',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      description: `Selected by clients as the preferred consulting partner based on service quality, reliability, and results delivery. This award is particularly meaningful as it comes directly from the clients we serve.`,
      category: 'Client Satisfaction'
    }
  ];

  const openModal = (award) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Awards & Certifications
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Recognition from industry leaders and certification bodies that validate our commitment to excellence
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {awards.map((award) => (
            <div
              key={award.id}
              onClick={() => openModal(award)}
              className="bg-surface border border-border rounded-xl p-6 hover-shadow hover-lift transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <Image
                  src={award.logo}
                  alt={`${award.title} logo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-text-primary text-sm mb-1 line-clamp-2">
                  {award.title}
                </h3>
                <p className="text-xs text-text-secondary">
                  {award.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Industry Recognition', 'Technology', 'Quality Assurance'].map((category) => (
            <div key={category} className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon name="Award" size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">{category}</h3>
              </div>
              <div className="space-y-2">
                {awards
                  .filter(award => award.category === category)
                  .map(award => (
                    <div key={award.id} className="text-sm text-text-secondary">
                      • {award.title} ({award.year})
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 overflow-hidden rounded-xl">
                    <Image
                      src={selectedAward.logo}
                      alt={`${selectedAward.title} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {selectedAward.title}
                    </h3>
                    <p className="text-text-secondary">
                      {selectedAward.organization} • {selectedAward.year}
                    </p>
                    <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mt-2">
                      {selectedAward.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-surface rounded-lg transition-colors duration-200"
                >
                  <Icon name="X" size={20} className="text-text-secondary" />
                </button>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-text-secondary leading-relaxed">
                  {selectedAward.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsCertifications;