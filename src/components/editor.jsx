import React, { useState, useRef } from "react";
import { useContent } from "./contentContext";
import { Button } from "./elements/atoms/button";
import Toolbar from "./elements/atoms/toolbar";
import { X, Plus } from "lucide-react";
import FormattingTooltip from "./elements/atoms/tooltip";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./elements/dropdown-menu";
import { ChevronUp, ChevronDown, LineChart } from 'lucide-react';

export default function PostEditor() {
  const { setGlobalContent } = useContent();
  const editorRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);
  const [lastSaved, setLastSaved] = useState("Jan 27, 2025, 02:05 PM");
  const [cursorPosition, setCursorPosition] = useState(null);
  const [charCount, setCharCount] = useState(0);

  
  const savedRange = useRef(null);

  const saveCursorPosition = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedRange.current = selection.getRangeAt(0);      
      
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setCursorPosition({
        x: rect.right,
        y: rect.top + (rect.height / 2)-100
      });
    }
  };

  const restoreCursorPosition = () => {
    const selection = window.getSelection();
    if (savedRange.current) {
      selection.removeAllRanges();
      selection.addRange(savedRange.current);
    }
  };

  const handleInput = () => {
    saveCursorPosition(); 
    if (editorRef.current) {
      const plainText = editorRef.current.textContent; 
      setGlobalContent(plainText); 
      setCharCount(plainText.length); 
    }
    restoreCursorPosition(); 
  };

  const handleFormat = (type) => {
    saveCursorPosition(); 
    document.execCommand(type, false);
    restoreCursorPosition(); 
    setTooltipPosition(null); 
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 5,
      });
    } else {
      setTooltipPosition(null);
    }
  };

  const insertHeadline = () => {
    if (savedRange.current) {
      const selection = window.getSelection();
      // selection.removeAllRanges();
      // selection.addRange(savedRange.current);      
    
      const headlineElement = document.createElement('h4');
      headlineElement.className = 'text-2xl font-bold my-4';
      headlineElement.textContent = 'New Headline';
      window.getSelection().getRangeAt(0).insertNode(headlineElement);
      
      const range = document.createRange();
      range.setStartAfter(headlineElement);
      range.collapse(true);
      
      selection.removeAllRanges();
      selection.addRange(range);
      
      editorRef.current.focus();
      handleInput();
    }
  };

  const changeLastSaved = () => {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = now.toLocaleString("en-US", options);
    setLastSaved(formattedDate);

    if (editorRef.current) {
      const plainText = editorRef.current.textContent; 
      setGlobalContent(plainText); 
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="flex flex-col h-screen border-r border-l">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-semibold">Write Post</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50">
            <LineChart size={18} className="text-gray-600" />
            <span className="text-gray-600 font-medium">Check Score</span>
          </button>
          <div className="relative flex ps-3 border-l">
            <button className="flex items-center space-x-1" onClick={toggleDropdown}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0FpBg5Myb9CQ-bQpFou9BY9JXoRG6208_Q&s"
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-200"
              />
              <div className="flex flex-col">
                <ChevronUp size={16} className="text-gray-400" />
                <ChevronDown size={16} className="text-gray-400 -mt-1" />
              </div>
            </button>
            <DropdownMenu isOpen={isDropdownOpen}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex-1 relative">
          <div
            className="w-full h-full min-h-[400px] text-left p-2 border rounded-md focus-within:ring-2 focus-within:ring-blue-500"
            contentEditable
            ref={editorRef}
            onInput={handleInput}
            onMouseUp={handleTextSelection}
            onKeyUp={handleTextSelection}
            dangerouslySetInnerHTML={{ __html: "" }} 
          />

          {cursorPosition && (
            <button
              onClick={insertHeadline}
              className="absolute w-8 h-8 bg-white left-2 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors transform -translate-y-1/2"
              style={{
                top: `${cursorPosition.y}px`
              }}
            >
              <Plus className="w-5 h-5 text-blue-500" />
            </button>
          )}

          <FormattingTooltip
            position={tooltipPosition}
            onClose={() => setTooltipPosition(null)}
            onFormat={handleFormat}
          />

<div>
            <div className="absolute bottom-4 left-4 mt-2 text-sm text-gray-500">
              Last saved at {lastSaved}
            </div>
            <div className="absolute bottom-4 right-4 text-sm text-gray-500">
              {charCount} characters
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-4 bg-white">
        <div className="flex justify-between items-center max-w-full mx-auto">
          <Button
            onClick={changeLastSaved}
            variant="outline"
            className="text-gray-600 bg-white border border-gray-200 hover:bg-gray-50"
          >
            Save as Draft
          </Button>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="text-gray-600 bg-white border border-gray-200 hover:bg-gray-50"
            >
              Schedule
            </Button>
            <Button className="bg-[#0ba5ed] text-white hover:bg-blue-600">
              Publish
            </Button>
          </div>
        </div>
      </div>

      
    </div>
  );
}
