import React from 'react';

const DepartmentFilter = ({ departments, activeFilter, onFilterChange, memberCounts }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {departments.map((department) => (
        <button
          key={department.id}
          onClick={() => onFilterChange(department.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
            activeFilter === department.id
              ? 'bg-primary text-primary-foreground shadow-moderate'
              : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
          }`}
        >
          <span>{department.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs ${
            activeFilter === department.id
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-text-secondary/10 text-text-secondary'
          }`}>
            {memberCounts[department.id] || 0}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DepartmentFilter;