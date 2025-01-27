import React from 'react';
import { 
  Bold, 
  Italic,
  Repeat2,
  Smile,
  Sparkle,
  FileText,
  Image,
  Link
} from 'lucide-react';

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        {/* Left side icons */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Bold size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Italic size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Repeat2 size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Smile size={20} />
        </button>
        {/* AI Feature Button */}
        <button className="p-2 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-purple-100 rounded-full"></div>
          <Sparkle size={20} className="text-purple-600 relative z-10" />
          <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs px-1 rounded-sm">
            AI
          </span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        {/* Right side icons */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <FileText size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Image size={20} />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
          <Link size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;