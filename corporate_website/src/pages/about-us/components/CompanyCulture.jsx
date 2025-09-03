import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CompanyCulture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const cultureImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team collaboration in modern office space',
      title: 'Collaborative Workspace',
      description: 'Our open office design promotes collaboration and innovation'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team meeting and brainstorming session',
      title: 'Innovation Sessions',
      description: 'Regular brainstorming sessions drive creative solutions'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Team celebration and company event',
      title: 'Team Celebrations',
      description: 'We celebrate achievements and milestones together'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional development and training session',
      title: 'Learning & Development',
      description: 'Continuous learning opportunities for professional growth'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Diverse team working together',
      title: 'Diversity & Inclusion',
      description: 'Embracing diverse perspectives and inclusive practices'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern office amenities and break area',
      title: 'Work-Life Balance',
      description: 'Creating spaces for relaxation and personal well-being'
    }
  ];

  const cultureHighlights = [
    {
      icon: 'Users',
      title: 'Collaborative Environment',
      description: 'We foster teamwork and open communication across all levels of the organization.'
    },
    {
      icon: 'TrendingUp',
      title: 'Growth Mindset',
      description: 'Continuous learning and professional development are at the core of our culture.'
    },
    {
      icon: 'Heart',
      title: 'Work-Life Balance',
      description: 'We prioritize employee well-being with flexible work arrangements and wellness programs.'
    },
    {
      icon: 'Award',
      title: 'Recognition & Rewards',
      description: 'Outstanding contributions are celebrated and rewarded through various recognition programs.'
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Company Culture
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A vibrant workplace where innovation thrives, relationships flourish, and every team member contributes to our shared success
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cultureHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl p-6 text-center hover-shadow transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={highlight.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-text-secondary">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Life at Corporate
          </h3>
          
          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {cultureImages.map((image, index) => (
              <div
                key={image.id}
                className={`break-inside-avoid cursor-pointer group ${
                  index % 3 === 0 ? 'h-80' : index % 3 === 1 ? 'h-64' : 'h-72'
                }`}
                onClick={() => openImageModal(image)}
              >
                <div className="relative overflow-hidden rounded-2xl h-full hover-shadow hover-lift transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-semibold mb-1">{image.title}</h4>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Join Our Team
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Be part of a culture that values innovation, collaboration, and personal growth. 
            Discover exciting career opportunities and help us shape the future of business consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
              View Open Positions
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200">
              Learn About Benefits
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              <Icon name="X" size={20} />
            </button>
            <div className="bg-background rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-text-secondary">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompanyCulture;