import React from 'react';

type props = {
  children: React.ReactNode;
};

const TabList: React.FC<props> = ({ children }) => {
  return <div className="flex-grow flex items-center space-x-4">{children}</div>;
};

export default TabList;
