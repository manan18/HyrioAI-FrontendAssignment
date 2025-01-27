import React from 'react';

const ProgressBar = ({ value, max, color, className }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={`w-full bg-gray-200 rounded-full ${className}`}>
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;