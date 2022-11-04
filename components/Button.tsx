import React from 'react';

type props = {
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
};

const Button: React.FC<props> = ({ children, ...props }) => {
  return (
    <button
      className="flex items-center border border-[#C41B1B] hover:bg-gray-100/50 h-12 px-4 rounded-md transition"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
