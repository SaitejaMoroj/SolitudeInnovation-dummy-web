import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocations = () => {
  const [selectedOffice, setSelectedOffice] = useState(0);

  const offices = [
    {
      id: 0,
      name: 'New York Headquarters',
      address: '123 Business Avenue, Suite 500',
      city: 'New York, NY 10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      email: 'ny@corporate.com',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      description: 'Our flagship office and global headquarters, home to our executive team and core operations.',
      employees: 85,
      established: '2010'
    },
    {
      id: 1,
      name: 'Toronto Office',
      address: '456 King Street West, Floor 12',
      city: 'Toronto, ON M5V 1L7',
      country: 'Canada',
      phone: '+1 (416) 555-0123',
      email: 'toronto@corporate.com',
      coordinates: { lat: 43.6532, lng: -79.3832 },
      description: 'Our Canadian operations center, serving clients across North America with specialized services.',
      employees: 35,
      established: '2019'
    },
    {
      id: 2,
      name: 'London Office',
      address: '789 Canary Wharf, Level 15',
      city: 'London E14 5AB',
      country: 'United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'london@corporate.com',
      coordinates: { lat: 51.5074, lng: -0.1278 },
      description: 'Our European hub, providing strategic consulting services to clients across the UK and EU.',
      employees: 30,
      established: '2019'
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Global Presence
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Strategically located offices to serve our clients worldwide with local expertise and global perspective
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-background border border-border rounded-2xl overflow-hidden h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title={offices[selectedOffice].name}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${offices[selectedOffice].coordinates.lat},${offices[selectedOffice].coordinates.lng}&z=14&output=embed`}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Office Details */}
          <div className="order-1 lg:order-2">
            {/* Office Selector */}
            <div className="flex flex-wrap gap-2 mb-6">
              {offices.map((office, index) => (
                <button
                  key={office.id}
                  onClick={() => setSelectedOffice(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedOffice === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background border border-border text-text-secondary hover:text-primary hover:border-primary'
                  }`}
                >
                  {office.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Selected Office Details */}
            <div className="bg-background border border-border rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {offices[selectedOffice].name}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {offices[selectedOffice].description}
                  </p>
                </div>
                <div className="text-right text-sm text-text-secondary">
                  <div>Est. {offices[selectedOffice].established}</div>
                  <div>{offices[selectedOffice].employees} employees</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-text-primary font-medium">
                      {offices[selectedOffice].address}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {offices[selectedOffice].city}, {offices[selectedOffice].country}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${offices[selectedOffice].phone}`}
                    className="text-text-primary hover:text-primary transition-colors duration-200"
                  >
                    {offices[selectedOffice].phone}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-primary flex-shrink-0" />
                  <a 
                    href={`mailto:${offices[selectedOffice].email}`}
                    className="text-text-primary hover:text-primary transition-colors duration-200"
                  >
                    {offices[selectedOffice].email}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {offices[selectedOffice].employees}
                    </div>
                    <div className="text-sm text-text-secondary">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {new Date().getFullYear() - parseInt(offices[selectedOffice].established)}+
                    </div>
                    <div className="text-sm text-text-secondary">Years Operating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;