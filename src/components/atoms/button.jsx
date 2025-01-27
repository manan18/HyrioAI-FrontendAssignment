import React, { useState } from "react";

export const Button = ({ children, variant = "default", className = "", ...props }) => {
    const baseStyles = "px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none focus:ring-2";
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    };
    return (
      <button
        className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };