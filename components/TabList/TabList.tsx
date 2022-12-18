import React from 'react';

interface TabListProps {
  children: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ children }) => {
  return (
    <div className="flex-grow flex items-center md:space-x-4 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
      {children}
    </div>
  );
};

export default TabList;
