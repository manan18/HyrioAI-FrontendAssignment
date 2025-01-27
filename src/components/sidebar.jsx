import React from 'react';
import { 
  PenSquare, 
  Sparkles, 
  Lightbulb, 
  LayoutGrid, 
  ThumbsUp, 
  Zap, 
  Calendar,
  Settings,
  Plus,
  Info
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white min-h-screen mx-auto border-gray-100 py-4 px-3 flex flex-col">
      {/* Write Post Button */}
      <button className="bg-[#0ba5ed] text-white py-3 px-16 mt-16 rounded-full mb-4  flex items-center justify-center gap-2 mx-auto">
        <PenSquare size={18} />
        <span className="text-sm font-semibold">Write Post</span>
      </button>

      {/* Main Navigation */}
      <nav className="space-y-1 text-sm font-semibold">
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Sparkles size={20} className="mr-3" />
          <span>Post Generator</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Lightbulb size={20} className="mr-3" />
          <span>Ideas Generator</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <LayoutGrid size={20} className="mr-3" />
          <span>Carousel Maker</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <ThumbsUp size={20} className="mr-3" />
          <span>Posts</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Zap size={20} className="mr-3" />
          <span>Content Inspiration</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Calendar size={20} className="mr-3" />
          <span>Posts for You</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Calendar size={20} className="mr-3" />
          <span>Schedule</span>
        </a>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-4 border-t border-gray-100 space-y-1 text-sm font-semibold">
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Settings size={20} className="mr-3" />
          <span>Preferences</span>
        </a>
        <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 py-2 px-3 rounded-lg">
          <Plus size={20} className="mr-3" />
          <span>Feature Request</span>
        </a>

        {/* Usage Stats */}
        <div className="mt-4 p-4 bg-gray-100 border-2  border-gray-300 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex font-semibold items-center gap-1 text-xs text-gray-600">
              Words generated
              <Info size={14} />
            </div>
            <span className="text-xs font-semibold text-gray-600">12.5k / 50k</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1 mb-2">
            <div 
              className="bg-[#0ba5ed] h-1 rounded-full" 
              style={{ width: '25%' }}
            ></div>
          </div>
          
          <p className="text-xs text-left text-gray-500 mb-3">Monthly usage resets in 29 days</p>
          
          <button className="w-full bg-white font-semibold text-sm border-2 border-gray-300 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-3xl flex items-center justify-center gap-2">
            <Zap size={16} />
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;