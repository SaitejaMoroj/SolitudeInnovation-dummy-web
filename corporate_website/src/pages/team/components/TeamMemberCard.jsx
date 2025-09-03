import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamMemberCard = ({ member, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-background rounded-xl border border-border hover-shadow hover-lift transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-square">
          <Image
            src={member.image}
            alt={`${member.name} - ${member.title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2">
              {member.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                  aria-label={`${member.name} on ${social.platform}`}
                >
                  <Icon name={social.icon} size={16} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-primary font-medium mb-3">
          {member.title}
        </p>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {member.bio}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 3 && (
            <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
              +{member.skills.length - 3} more
            </span>
          )}
        </div>
        
        <button
          onClick={() => onViewDetails(member)}
          className="w-full px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;