import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathMap = {
    '/homepage': 'Home',
    '/about-us': 'About Us',
    '/services': 'Services',
    '/team': 'Team',
    '/contact': 'Contact',
  };

  const generateBreadcrumbs = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];

    if (location.pathname !== '/homepage') {
      const currentPath = location.pathname;
      const currentLabel = pathMap[currentPath];
      
      if (currentLabel) {
        breadcrumbs.push({ label: currentLabel, path: currentPath });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumb py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={16} 
                className="breadcrumb-separator mx-2" 
              />
            )}
            {index === breadcrumbs.length - 1 ? (
              <span 
                className="text-text-primary font-medium"
                aria-current="page"
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="breadcrumb-item"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;