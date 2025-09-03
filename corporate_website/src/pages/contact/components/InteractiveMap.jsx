import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const locations = [
    {
      id: 0,
      name: "Main Office",
      address: "123 Business Street, Corporate City, CC 12345",
      lat: 40.7128,
      lng: -74.0060,
      phone: "+1 (555) 123-4567",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM"
    },
    {
      id: 1,
      name: "Regional Office",
      address: "456 Commerce Avenue, Business District, BD 67890",
      lat: 34.0522,
      lng: -118.2437,
      phone: "+1 (555) 987-6543",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM"
    }
  ];

  const handleLocationSelect = (locationId) => {
    setSelectedLocation(locationId);
  };

  const handleMapLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const getDirectionsUrl = (location) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
  };

  return (
    <div className="bg-background rounded-xl overflow-hidden card-moderate">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-text-primary mb-2 flex items-center">
          <Icon name="Map" size={24} className="text-primary mr-2" />
          Find Our Offices
        </h3>
        <p className="text-text-secondary text-sm">
          Click on the location buttons below to view different office locations on the map.
        </p>
      </div>

      {/* Location Selector */}
      <div className="p-4 bg-surface border-b border-border">
        <div className="flex flex-wrap gap-2">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationSelect(location.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedLocation === location.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="h-80 relative overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-surface flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-text-secondary text-sm">Loading map...</p>
              </div>
            </div>
          )}
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={locations[selectedLocation].name}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${locations[selectedLocation].lat},${locations[selectedLocation].lng}&z=14&output=embed`}
            onLoad={handleMapLoad}
            className="border-0"
          />
        </div>

        {/* Location Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 card-minimal">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-text-primary mb-1">
                {locations[selectedLocation].name}
              </h4>
              <p className="text-text-secondary text-sm mb-2">
                {locations[selectedLocation].address}
              </p>
              <div className="flex items-center space-x-4 text-xs text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Phone" size={14} />
                  <span>{locations[selectedLocation].phone}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{locations[selectedLocation].hours}</span>
                </div>
              </div>
            </div>
            <a
              href={getDirectionsUrl(locations[selectedLocation])}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 flex-shrink-0"
              title="Get Directions"
            >
              <Icon name="Navigation" size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="p-4 bg-surface">
        <div className="flex flex-wrap gap-2">
          <a
            href={`tel:${locations[selectedLocation].phone}`}
            className="flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 text-sm"
          >
            <Icon name="Phone" size={16} className="text-primary" />
            <span className="text-text-primary">Call Office</span>
          </a>
          <a
            href={getDirectionsUrl(locations[selectedLocation])}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 text-sm"
          >
            <Icon name="Navigation" size={16} className="text-primary" />
            <span className="text-text-primary">Get Directions</span>
          </a>
          <button
            onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${locations[selectedLocation].lat},${locations[selectedLocation].lng}`, '_blank')}
            className="flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-primary/5 hover:border-primary/20 transition-all duration-200 text-sm"
          >
            <Icon name="ExternalLink" size={16} className="text-primary" />
            <span className="text-text-primary">View in Maps</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;