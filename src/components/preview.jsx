import React, { createContext, useState, useContext } from "react";
import { useContent } from "./contentContext";
import { MessageCircle, Share, Send } from 'lucide-react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { PhonePreview } from './atoms/phone';
import { TabletPreview } from './atoms/tablet';
import { DesktopPreview } from './atoms/desktop';

const LinkedInPost = () => {
  const [activeDevice, setActiveDevice] = useState('phone');
  const { globalContent } = useContent();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const fullContent = globalContent ? globalContent : 'Content creation is important for digital marketing as it involves creating and sharing various types of content to attract and engage the target audience, improve SEO, and drive traffic and conversions. This helps build brand authority and customer trust.';
  const truncatedContent = `${fullContent.slice(0, 198)}`;
  const isTruncated = fullContent.length > 198;
 

  const DeviceWrapper = ({ children }) => {
    switch (activeDevice) {
      case 'phone':
        return <PhonePreview>{children}</PhonePreview>;
      case 'tablet':
        return <TabletPreview>{children}</TabletPreview>;
      case 'desktop':
        return <DesktopPreview>{children}</DesktopPreview>;
      default:
        return children;
    }
  };
  
  const PostContent =()=>(
    <div className="mx-4 bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Profile Section */}
        <div className="p-4 flex flex-col justify-between">
          <div className="flex gap-2">
            <img
              src=''
              className="w-12 h-12 rounded-full"
            />
            
            <div className='text-left'>
              <h4 className="font-semibold text-gray-900 ">Cody Fisher</h4>
              <p className="text-gray-500 text-xs">UI/UX Design | Web & Mobile Design | Front-end | UI Developer</p>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <span>Now</span>
                <span>·</span>
                <span>🌐</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <p className="mt-3 text-sm  text-justify font-normal">
          {isExpanded ? fullContent : truncatedContent}
          {isTruncated && (<span
            className="text-gray-600 cursor-pointer text-right"
            onClick={toggleContent}
          >
            {isExpanded ? ' see less' : '  ...see more'}
          </span>)}
        </p>

          {/* Reactions */}
          <div className="flex items-center mt-3">
            <div className="flex -space-x-1">
              <span className="text-lg">👍</span>
              <span className="text-lg">❤️</span>
              <span className="text-lg">👏</span>
              <span className="text-lg">😊</span>
            </div>
            <span className="text-sm text-gray-500 ml-1">88</span>
            <div className="ml-auto text-sm text-gray-500">
              4 comments · 1 repost
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between px-2 py-1 border-t border-gray-200">
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded text-gray-500">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Comment</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded text-gray-500">
            <Share className="w-5 h-5" />
            <span className="text-sm">Share</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded text-gray-500">
            <Send className="w-5 h-5" />
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
  );
  
  
  return (
    <div className="max-w-screen mx-auto bg-gray-50 h-screen flex flex-col gap-2">
      {/* Header */}
      <div className="p-3 border-b bg-white flex justify-between items-center">
      <h1 className="text-l font-semibold font-gray-50 ">Post Preview</h1>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Devices:</span>
          <div className="flex gap-1 p-1">
            <button
              onClick={() => setActiveDevice('phone')}
              className={`p-1 rounded ${activeDevice === 'phone' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Smartphone size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('tablet')}
              className={`p-1 rounded ${activeDevice === 'tablet' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Tablet size={20} />
            </button>
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`p-1 rounded ${activeDevice === 'desktop' ? 'text-blue-500' : 'text-gray-400'}`}
            >
              <Monitor size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Copy Text Button */}
      <div className="flex justify-center py-3">
        <button className="px-4 py-1 text-sm text-gray-600 bg-white py-2 border border-gray-400 rounded-full hover:bg-gray-50">
          Copy Text
        </button>
      </div>

      {/* Post Card */}
      <DeviceWrapper>
      <PostContent />
    </DeviceWrapper>
    </div>
  );

 
};



export default LinkedInPost;