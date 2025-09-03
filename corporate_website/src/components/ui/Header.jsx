import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import AppImage from '../AppImage';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Services', path: '/services' },
    { label: 'Team', path: '/team' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-minimal' 
            : 'bg-background'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                <AppImage 
                  src="/assets/images/WhatsApp_Image_2025-06-21_at_7.24.35_PM-1750960242682.jpeg"
                  alt="Latitude Innovation Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-semibold text-text-primary">
                Latitude Innovation
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="var(--color-text-primary)" 
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay md:hidden">
          <div 
            className="absolute inset-0" 
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="mobile-menu-content animate-slide-down">
            <div className="flex items-center justify-between mb-8">
              <Link 
                to="/homepage" 
                className="flex items-center space-x-3"
                onClick={closeMobileMenu}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <AppImage 
                    src="/assets/images/WhatsApp_Image_2025-06-21_at_7.24.35_PM-1750960242682.jpeg"
                    alt="Latitude Innovation Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xl font-semibold text-text-primary">
                  Latitude Innovation
                </span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-surface transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={24} color="var(--color-text-primary)" />
              </button>
            </div>

            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-primary/10 text-primary' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;