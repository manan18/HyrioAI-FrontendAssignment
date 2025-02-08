import React from "react";
import { X } from 'lucide-react';

const FormattingTooltip = ({ position, onClose, onFormat }) => {
  if (!position) return null;

  return (
    <div
      className="fixed bg-white rounded-lg shadow-lg border border-gray-200 flex items-center gap-1 p-1 z-50"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, -120%)'
      }}
    >
      <button 
      onClick={() => onFormat('bold')}
      className="p-2 hover:bg-gray-100 rounded font-bold text-gray-700">
        B
      </button>
      <button 
      onClick={() => onFormat('italic')}
      className="p-2 hover:bg-gray-100 rounded italic text-gray-700">
        I
      </button>
      <button
        onClick={() => onFormat('underline')}
        className="p-2 hover:bg-gray-100 rounded underline text-gray-700"
      >
        U
      </button>
      <button className="p-2 hover:bg-gray-100 rounded text-gray-700">
        ≡
      </button>
      <button className="p-2 hover:bg-gray-100 rounded text-gray-700">
        🔗
      </button>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded text-gray-400"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default FormattingTooltip;