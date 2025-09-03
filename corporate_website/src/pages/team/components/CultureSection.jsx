import React from 'react';
import Image from '../../../components/AppImage';

const CultureSection = () => {
  const cultureImages = [
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      alt: "Team collaboration in modern office"
    },
    {
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=400&h=400&fit=crop",
      alt: "Creative brainstorming session"
    },
    {
      src: "https://images.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg?w=400&h=250&fit=crop",
      alt: "Team celebrating success"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=350&fit=crop",
      alt: "Office workspace environment"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to deliver cutting-edge solutions."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty and transparency."
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Our Culture
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We foster an environment where creativity thrives, collaboration flourishes, 
            and every team member can reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {cultureImages.map((image, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-xl ${
                  index === 1 ? 'mt-8' : index === 2 ? '-mt-8' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Our Core Values
            </h3>
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h4>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;