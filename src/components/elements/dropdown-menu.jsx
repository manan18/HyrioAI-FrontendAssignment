import React from "react";
export const DropdownMenu = ({ children, isOpen, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {isOpen && (
        <div
          className="absolute right-0 mt-10 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-10"
        >
          {children}
        </div>
      )}
    </div>
  );
};
  
  export const DropdownMenuTrigger = ({ children, className = "", ...props }) => {
    return (
      <button
        className={`flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  
  export const DropdownMenuContent = ({ children, className = "", ...props }) => {
    return (
      <div
        className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export const DropdownMenuItem = ({ children, className = "", ...props }) => {
    return (
      <div
        className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  