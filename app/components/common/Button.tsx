import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  extrStyles?: string;
}

const Button: React.FC<ButtonProps> = ({ children, color, extrStyles }) => {
  return (
    <button className={`${color} p-2 rounded-lg px-4 text-xl ${extrStyles}`}>
      {children}
    </button>
  );
};

export default Button;
