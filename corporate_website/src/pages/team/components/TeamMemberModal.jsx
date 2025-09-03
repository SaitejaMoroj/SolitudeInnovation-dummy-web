import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamMemberModal = ({ member, isOpen, onClose }) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-2xl shadow-prominent max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-text-primary">
            Team Member Profile
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface rounded-lg transition-colors duration-200"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Contact Information
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <span className="text-text-secondary text-sm">
                        {member.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <span className="text-text-secondary text-sm">
                        {member.phone}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Social Links
                  </h3>
                  <div className="flex space-x-2">
                    {member.socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-200"
                        aria-label={`${member.name} on ${social.platform}`}
                      >
                        <Icon name={social.icon} size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-text-primary mb-2">
                    {member.name}
                  </h1>
                  <p className="text-xl text-primary font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {member.fullBio}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Expertise Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Project Highlights
                  </h3>
                  <div className="space-y-3">
                    {member.projects.map((project, index) => (
                      <div key={index} className="p-4 bg-surface rounded-lg">
                        <h4 className="font-medium text-text-primary mb-1">
                          {project.name}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {member.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-medium text-text-primary">
                          {exp.position}
                        </h4>
                        <p className="text-primary text-sm font-medium">
                          {exp.company}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {exp.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;