import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStory = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const storyChapters = [
    {
      year: "2023",
      title: "The Foundation",
      content: `Solitude Innovation was born from a simple yet powerful belief: that the best innovations come from 
      within, driven by passion rather than external demands. Founded by a team of creative technologists, 
      our startup represents a new approach to innovation - one where self-initiated projects lead to 
      breakthrough solutions.`,
      icon: "Lightbulb",
      milestone: "Company Founded"
    },
    {
      year: "Q2 2023",
      title: "First Projects Launch",
      content: `Within months of our founding, we launched our first series of self-driven projects. These initial 
      endeavors focused on exploring emerging technologies and creating solutions that we believed the world needed, 
      even if the market hadn't yet recognized the demand.`,
      icon: "Rocket",
      milestone: "Initial Project Portfolio"
    },
    {
      year: "Q3 2023",
      title: "Technology Stack Evolution",
      content: `As our projects grew in complexity, we refined our technology stack and development methodologies. 
      This period was marked by rapid learning, experimentation with cutting-edge tools, and the establishment 
      of our core development practices.`,
      icon: "Code",
      milestone: "Technical Foundation"
    },
    {
      year: "Q4 2023",
      title: "Vision Refinement",
      content: `Reflecting on our first year, we crystallized our vision and mission. This introspective period 
      helped us understand our unique value proposition and set the direction for our future self-projects 
      and innovations.`,
      icon: "Target",
      milestone: "Strategic Clarity"
    },
    {
      year: "2024",
      title: "Growth & Innovation",
      content: `As we enter our second year, we continue to push boundaries with new self-initiated projects. 
      Our focus remains on creating solutions that demonstrate what's possible when innovation is driven by 
      passion and vision rather than external constraints.`,
      icon: "TrendingUp",
      milestone: "Continued Innovation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-surface/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
            Our Story
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Innovation Born from
            <span className="text-primary block">Self-Driven Vision</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            From a bold idea to a growing startup, our story is one of self-initiated innovation, 
            creative freedom, and the belief that the best solutions come from within.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {storyChapters.map((chapter, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  activeChapter === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveChapter(index)}
              >
                <div className={`lg:flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className="lg:w-5/12 mb-8 lg:mb-0">
                    <div className={`bg-background rounded-2xl p-8 border-2 transition-all duration-300 ${
                      activeChapter === index 
                        ? 'border-primary shadow-xl shadow-primary/10' 
                        : 'border-border hover:border-primary/50'
                    }`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          activeChapter === index 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          <Icon name={chapter.icon} size={24} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{chapter.year}</div>
                          <div className="text-sm text-text-secondary">{chapter.milestone}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4">
                        {chapter.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {chapter.content}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      activeChapter === index
                        ? 'bg-primary border-primary scale-150 shadow-lg shadow-primary/50'
                        : 'bg-background border-primary/50'
                    }`}></div>
                  </div>

                  {/* Visual Element */}
                  <div className="lg:w-5/12">
                    <div className={`bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border ${
                      index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                    }`}>
                      <div className="text-center">
                        <div className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                          activeChapter === index
                            ? 'bg-gradient-to-br from-primary to-secondary text-white scale-110' : 'bg-primary/10 text-primary'
                        }`}>
                          <Icon name={chapter.icon} size={48} />
                        </div>
                        <div className="text-6xl font-bold text-primary/20 mb-2">{chapter.year}</div>
                        <div className="text-lg font-semibold text-text-primary">{chapter.milestone}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-primary/50 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-text-primary mb-8 leading-relaxed">
              "True innovation comes from within. By focusing on self-driven projects, we create solutions 
              that aren't constrained by current market demands but are shaped by our vision of what 
              the future should hold."
            </blockquote>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">The Founding Team</div>
                <div className="text-text-secondary">Visionaries & Innovators</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-semibold text-text-primary">Solitude Innovation</div>
                <div className="text-text-secondary">Est. 2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;