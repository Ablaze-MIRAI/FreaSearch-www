import React from 'react';

export interface prop {
  children: React.ReactNode;
  label: string;
}

const SettingItem: React.FC<prop> = ({ children, label }) => {
  return (
    <div className="flex h-12 items-center">
      <div className="w-56">{label}</div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default SettingItem;
