
import React from 'react';

interface DrawerProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div className="fixed inset-x-0 bottom-0 sm:inset-auto sm:w-full sm:max-w-lg bg-white rounded-t-lg sm:rounded-lg shadow-lg z-10 transform transition-all">
        {children}
      </div>
    </div>
  );
};
