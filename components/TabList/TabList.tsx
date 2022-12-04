import React from 'react';

interface TabListProps {
  children: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ children }) => {
  return <div className="flex-grow flex items-center space-x-4">{children}</div>;
};

export default TabList;
