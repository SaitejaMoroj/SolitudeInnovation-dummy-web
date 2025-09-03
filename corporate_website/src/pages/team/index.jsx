import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import TeamHero from './components/TeamHero';
import DepartmentFilter from './components/DepartmentFilter';
import TeamSearch from './components/TeamSearch';
import TeamMemberCard from './components/TeamMemberCard';
import TeamMemberModal from './components/TeamMemberModal';
import CultureSection from './components/CultureSection';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const departments = [
    { id: 'all', name: 'All Team' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'sales', name: 'Sales' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      department: "leadership",
      bio: "Visionary leader with 15+ years of experience in driving business growth and innovation.",
      fullBio: `Sarah Johnson is a seasoned executive with over 15 years of experience in leading high-growth technology companies. She has a proven track record of scaling businesses from startup to enterprise level, with expertise in strategic planning, team building, and market expansion.

Before joining our company, Sarah served as VP of Operations at TechCorp, where she led a team of 200+ employees and drove revenue growth of 300% over four years. She holds an MBA from Stanford Business School and a Bachelor's degree in Computer Science from MIT.

Sarah is passionate about fostering innovation and creating inclusive work environments where every team member can thrive. She believes in leading by example and is known for her collaborative leadership style and commitment to excellence.`,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      email: "sarah.johnson@corporate.com",
      phone: "+1 (555) 123-4567",
      skills: ["Strategic Planning", "Leadership", "Business Development", "Team Building", "Innovation Management"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "Twitter", icon: "Twitter", url: "#" }
      ],
      projects: [
        {
          name: "Digital Transformation Initiative",
          description: "Led company-wide digital transformation resulting in 40% efficiency improvement"
        },
        {
          name: "Market Expansion Strategy",
          description: "Developed and executed strategy to enter 3 new international markets"
        }
      ],
      experience: [
        {
          position: "Chief Executive Officer",
          company: "Corporate Solutions",
          duration: "2020 - Present"
        },
        {
          position: "VP of Operations",
          company: "TechCorp",
          duration: "2016 - 2020"
        }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Chief Technology Officer",
      department: "leadership",
      bio: "Technology visionary specializing in scalable architecture and emerging technologies.",
      fullBio: `Michael Chen is a technology leader with deep expertise in building scalable systems and driving technical innovation. With over 12 years in the industry, he has architected solutions that serve millions of users and led engineering teams through complex technical challenges.

Michael's background spans full-stack development, cloud architecture, and emerging technologies including AI/ML and blockchain. He has a strong track record of translating business requirements into robust technical solutions while maintaining high standards for code quality and system reliability.

He holds a Master's degree in Computer Science from Carnegie Mellon University and is a frequent speaker at technology conferences. Michael is passionate about mentoring junior developers and promoting best practices in software engineering.`,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "michael.chen@corporate.com",
      phone: "+1 (555) 123-4568",
      skills: ["System Architecture", "Cloud Computing", "AI/ML", "Team Leadership", "DevOps"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" },
        { platform: "Twitter", icon: "Twitter", url: "#" }
      ],
      projects: [
        {
          name: "Cloud Migration Project",
          description: "Architected and led migration of legacy systems to cloud infrastructure"
        },
        {
          name: "AI-Powered Analytics Platform",
          description: "Developed machine learning platform for predictive business analytics"
        }
      ],
      experience: [
        {
          position: "Chief Technology Officer",
          company: "Corporate Solutions",
          duration: "2019 - Present"
        },
        {
          position: "Senior Software Architect",
          company: "InnovateTech",
          duration: "2015 - 2019"
        }
      ]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Head of Design",
      department: "design",
      bio: "Creative director passionate about user-centered design and brand storytelling.",
      fullBio: `Emily Rodriguez is a creative leader with a passion for crafting exceptional user experiences and compelling brand narratives. With 10+ years in design, she has worked with startups and Fortune 500 companies to create digital products that users love.

Emily's expertise spans UX/UI design, brand strategy, and design systems. She believes in the power of design thinking to solve complex business problems and is known for her collaborative approach to working with cross-functional teams.

She holds a Master's in Design from RISD and has won several industry awards for her work. Emily is also a mentor for emerging designers and regularly speaks at design conferences about the intersection of creativity and technology.`,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "emily.rodriguez@corporate.com",
      phone: "+1 (555) 123-4569",
      skills: ["UX/UI Design", "Brand Strategy", "Design Systems", "Prototyping", "User Research"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "Dribbble", icon: "Dribbble", url: "#" },
        { platform: "Behance", icon: "Behance", url: "#" }
      ],
      projects: [
        {
          name: "Mobile App Redesign",
          description: "Led complete redesign of mobile application, improving user engagement by 60%"
        },
        {
          name: "Design System Implementation",
          description: "Created comprehensive design system used across all company products"
        }
      ],
      experience: [
        {
          position: "Head of Design",
          company: "Corporate Solutions",
          duration: "2018 - Present"
        },
        {
          position: "Senior UX Designer",
          company: "DesignStudio",
          duration: "2014 - 2018"
        }
      ]
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Senior Full Stack Developer",
      department: "development",
      bio: "Full-stack engineer with expertise in modern web technologies and scalable applications.",
      fullBio: `David Thompson is a seasoned full-stack developer with 8+ years of experience building robust web applications and scalable backend systems. He has a deep understanding of modern JavaScript frameworks, cloud technologies, and database optimization.

David is passionate about writing clean, maintainable code and following best practices in software development. He has experience working in agile environments and collaborating with cross-functional teams to deliver high-quality products on time.

He holds a Bachelor's degree in Computer Science and is constantly learning new technologies to stay current with industry trends. David enjoys mentoring junior developers and contributing to open-source projects in his spare time.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "david.thompson@corporate.com",
      phone: "+1 (555) 123-4570",
      skills: ["React", "Node.js", "Python", "AWS", "Database Design", "API Development"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" }
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Built scalable e-commerce platform handling 10K+ concurrent users"
        },
        {
          name: "Real-time Analytics Dashboard",
          description: "Developed real-time dashboard for business intelligence and reporting"
        }
      ],
      experience: [
        {
          position: "Senior Full Stack Developer",
          company: "Corporate Solutions",
          duration: "2020 - Present"
        },
        {
          position: "Software Developer",
          company: "WebTech Solutions",
          duration: "2016 - 2020"
        }
      ]
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "UX/UI Designer",
      department: "design",
      bio: "User experience designer focused on creating intuitive and accessible digital experiences.",
      fullBio: `Lisa Wang is a talented UX/UI designer with 6+ years of experience creating user-centered digital experiences. She specializes in user research, interaction design, and accessibility, ensuring that products are not only beautiful but also usable by everyone.

Lisa has worked on a wide range of projects, from mobile apps to enterprise software, always putting the user at the center of the design process. She is skilled in design tools like Figma, Sketch, and Adobe Creative Suite, and has experience with front-end development.

She holds a Bachelor's degree in Graphic Design and is certified in UX Design from Google. Lisa is passionate about inclusive design and regularly volunteers to teach design skills to underrepresented communities.`,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      email: "lisa.wang@corporate.com",
      phone: "+1 (555) 123-4571",
      skills: ["User Research", "Interaction Design", "Prototyping", "Accessibility", "Figma", "HTML/CSS"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "Dribbble", icon: "Dribbble", url: "#" }
      ],
      projects: [
        {
          name: "Accessibility Audit & Redesign",
          description: "Conducted accessibility audit and redesigned interface to meet WCAG standards"
        },
        {
          name: "User Research Initiative",
          description: "Led user research project that informed major product decisions"
        }
      ],
      experience: [
        {
          position: "UX/UI Designer",
          company: "Corporate Solutions",
          duration: "2019 - Present"
        },
        {
          position: "Junior Designer",
          company: "Creative Agency",
          duration: "2017 - 2019"
        }
      ]
    },
    {
      id: 6,
      name: "James Wilson",
      title: "Sales Director",
      department: "sales",
      bio: "Results-driven sales leader with a track record of exceeding targets and building client relationships.",
      fullBio: `James Wilson is an accomplished sales professional with 12+ years of experience in B2B sales and business development. He has consistently exceeded sales targets and built lasting relationships with clients across various industries.

James specializes in consultative selling and has a deep understanding of how to identify client needs and present solutions that drive business value. He has experience managing large sales teams and developing sales strategies that align with company objectives.

He holds an MBA in Marketing and is known for his analytical approach to sales and his ability to coach and develop sales talent. James is passionate about helping businesses grow and believes in building partnerships rather than just making sales.`,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "james.wilson@corporate.com",
      phone: "+1 (555) 123-4572",
      skills: ["B2B Sales", "Business Development", "Client Relations", "Sales Strategy", "Team Management", "CRM"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" }
      ],
      projects: [
        {
          name: "Enterprise Client Acquisition",
          description: "Secured 5 major enterprise clients worth $2M+ in annual revenue"
        },
        {
          name: "Sales Process Optimization",
          description: "Redesigned sales process resulting in 30% improvement in conversion rates"
        }
      ],
      experience: [
        {
          position: "Sales Director",
          company: "Corporate Solutions",
          duration: "2018 - Present"
        },
        {
          position: "Senior Sales Manager",
          company: "SalesTech Inc",
          duration: "2014 - 2018"
        }
      ]
    },
    {
      id: 7,
      name: "Anna Martinez",
      title: "Frontend Developer",
      department: "development",
      bio: "Frontend specialist creating responsive and performant web applications with modern frameworks.",
      fullBio: `Anna Martinez is a skilled frontend developer with 5+ years of experience building responsive, performant web applications. She specializes in React, Vue.js, and modern CSS frameworks, with a keen eye for detail and user experience.

Anna is passionate about writing clean, maintainable code and staying up-to-date with the latest frontend technologies and best practices. She has experience working closely with designers to implement pixel-perfect interfaces and with backend developers to integrate APIs.

She holds a Bachelor's degree in Web Development and is active in the developer community, regularly attending meetups and contributing to open-source projects. Anna enjoys solving complex UI challenges and optimizing application performance.`,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      email: "anna.martinez@corporate.com",
      phone: "+1 (555) 123-4573",
      skills: ["React", "Vue.js", "JavaScript", "CSS/SASS", "Responsive Design", "Performance Optimization"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" }
      ],
      projects: [
        {
          name: "Progressive Web App",
          description: "Built PWA with offline capabilities and 90+ Lighthouse score"
        },
        {
          name: "Component Library",
          description: "Created reusable component library used across multiple projects"
        }
      ],
      experience: [
        {
          position: "Frontend Developer",
          company: "Corporate Solutions",
          duration: "2020 - Present"
        },
        {
          position: "Junior Frontend Developer",
          company: "WebDev Studio",
          duration: "2018 - 2020"
        }
      ]
    },
    {
      id: 8,
      name: "Robert Kim",
      title: "Backend Developer",
      department: "development",
      bio: "Backend engineer specializing in scalable APIs and database optimization.",
      fullBio: `Robert Kim is a dedicated backend developer with 7+ years of experience building scalable server-side applications and APIs. He specializes in Node.js, Python, and database design, with expertise in cloud platforms and microservices architecture.

Robert is passionate about writing efficient, secure code and optimizing system performance. He has experience with various databases including PostgreSQL, MongoDB, and Redis, and is skilled in implementing robust authentication and authorization systems.

He holds a Master's degree in Computer Science and is certified in AWS cloud services. Robert enjoys tackling complex technical challenges and is always looking for ways to improve system reliability and performance.`,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      email: "robert.kim@corporate.com",
      phone: "+1 (555) 123-4574",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Microservices", "API Design"],
      socialLinks: [
        { platform: "LinkedIn", icon: "Linkedin", url: "#" },
        { platform: "GitHub", icon: "Github", url: "#" }
      ],
      projects: [
        {
          name: "Microservices Migration",
          description: "Led migration from monolithic to microservices architecture"
        },
        {
          name: "High-Performance API",
          description: "Built API handling 1M+ requests per day with 99.9% uptime"
        }
      ],
      experience: [
        {
          position: "Backend Developer",
          company: "Corporate Solutions",
          duration: "2019 - Present"
        },
        {
          position: "Software Engineer",
          company: "DataTech Solutions",
          duration: "2016 - 2019"
        }
      ]
    }
  ];

  const filteredMembers = useMemo(() => {
    let filtered = teamMembers;
    
    if (activeFilter !== 'all') {
      filtered = filtered.filter(member => member.department === activeFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [activeFilter, searchTerm]);

  const memberCounts = useMemo(() => {
    const counts = { all: teamMembers.length };
    departments.forEach(dept => {
      if (dept.id !== 'all') {
        counts[dept.id] = teamMembers.filter(member => member.department === dept.id).length;
      }
    });
    return counts;
  }, []);

  const handleViewDetails = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb />
        </div>
        
        <TeamHero />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  Our Team Members
                </h2>
                <p className="text-text-secondary">
                  Get to know the talented individuals who make our success possible
                </p>
              </div>
              <TeamSearch 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            
            <DepartmentFilter
              departments={departments}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              memberCounts={memberCounts}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
            
            {filteredMembers.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No team members found
                </h3>
                <p className="text-text-secondary">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </section>
        
        <CultureSection />
      </main>
      
      <Footer />
      
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Team;