import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactDetails = [
    {
      title: "Main Office",
      address: "123 Business Street\nCorporate City, CC 12345\nUnited States",
      phone: "+1 (555) 123-4567",
      email: "info@corporate.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed"
    },
    {
      title: "Regional Office",
      address: "456 Commerce Avenue\nBusiness District, BD 67890\nUnited States",
      phone: "+1 (555) 987-6543",
      email: "regional@corporate.com",
      hours: "Mon - Fri: 8:30 AM - 5:30 PM\nSat - Sun: Closed"
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/corporate', color: 'text-blue-600' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/corporate', color: 'text-sky-500' },
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/corporate', color: 'text-blue-700' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/corporate', color: 'text-pink-600' }
  ];

  const emergencyContact = {
    title: "Emergency Support",
    description: "For urgent matters outside business hours",
    phone: "+1 (555) 911-HELP",
    email: "emergency@corporate.com",
    available: "24/7 Emergency Line"
  };

  return (
    <div className="space-y-6">
      {/* Office Locations */}
      <div className="bg-background rounded-xl p-6 card-moderate">
        <h3 className="text-xl font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MapPin" size={24} className="text-primary mr-2" />
          Office Locations
        </h3>
        <div className="space-y-6">
          {contactDetails.map((office, index) => (
            <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
              <h4 className="font-semibold text-text-primary mb-3">{office.title}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-text-secondary text-sm whitespace-pre-line">
                    {office.address}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={18} className="text-text-secondary flex-shrink-0" />
                  <a 
                    href={`tel:${office.phone}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors duration-200"
                  >
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={18} className="text-text-secondary flex-shrink-0" />
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-text-secondary text-sm hover:text-primary transition-colors duration-200"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={18} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <div className="text-text-secondary text-sm whitespace-pre-line">
                    {office.hours}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-error/5 border border-error/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-error mb-2 flex items-center">
          <Icon name="AlertTriangle" size={20} className="mr-2" />
          {emergencyContact.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          {emergencyContact.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={16} className="text-error flex-shrink-0" />
            <a 
              href={`tel:${emergencyContact.phone}`}
              className="text-error font-medium text-sm hover:underline"
            >
              {emergencyContact.phone}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={16} className="text-error flex-shrink-0" />
            <a 
              href={`mailto:${emergencyContact.email}`}
              className="text-error font-medium text-sm hover:underline"
            >
              {emergencyContact.email}
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={16} className="text-error flex-shrink-0" />
            <span className="text-error font-medium text-sm">
              {emergencyContact.available}
            </span>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-background rounded-xl p-6 card-moderate">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Share2" size={20} className="text-primary mr-2" />
          Connect With Us
        </h3>
        <p className="text-text-secondary text-sm mb-4">
          Follow us on social media for the latest updates and insights.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-surface hover:border-primary/20 transition-all duration-200 hover-lift"
            >
              <Icon name={social.icon} size={20} className={social.color} />
              <span className="text-text-primary font-medium text-sm">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-background rounded-xl p-6 card-moderate">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Response Times
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary text-sm">Email Inquiries</span>
            <span className="text-text-primary font-medium text-sm">Within 4 hours</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary text-sm">Phone Calls</span>
            <span className="text-text-primary font-medium text-sm">Immediate</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary text-sm">Project Proposals</span>
            <span className="text-text-primary font-medium text-sm">Within 24 hours</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary text-sm">Emergency Support</span>
            <span className="text-error font-medium text-sm">24/7 Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;