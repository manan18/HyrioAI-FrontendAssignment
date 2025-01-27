import React, { useState, useRef } from "react";
import { useContent } from "./contentContext";
import { Button } from "./atoms/button";
import Toolbar from "./atoms/toolbar";
import { X } from "lucide-react";
import FormattingTooltip from "./atoms/tooltip";


export default function PostEditor() {
  const { setGlobalContent } = useContent();
  const editorRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);
  const [lastSaved, setLastSaved] = useState("Jan 27, 2025, 02:05 PM");

  // Store the cursor range
  const savedRange = useRef(null);

  const saveCursorPosition = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      savedRange.current = selection.getRangeAt(0);
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
    saveCursorPosition(); // Save cursor position before changes
    if (editorRef.current) {
      const plainText = editorRef.current.textContent; // Extract plain text
      setGlobalContent(plainText); // Save plain text to global content
    }
    restoreCursorPosition(); // Restore cursor position after changes
  };

  const handleFormat = (type) => {
    saveCursorPosition(); // Save cursor position before formatting
    document.execCommand(type, false);
    restoreCursorPosition(); // Restore cursor position after formatting
    setTooltipPosition(null); // Hide tooltip
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
      const plainText = editorRef.current.textContent; // Extract plain text
      setGlobalContent(plainText); // Save plain text content
    }
  };

  return (
    <div className="flex flex-col h-screen border-r border-l">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-semibold">Write Post</h1>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-4 overflow-hidden">
        <div className="flex-1 relative">
          <div
            className="w-full h-full min-h-[400px] p-2 border rounded-md focus-within:ring-2 focus-within:ring-blue-500"
            contentEditable
            ref={editorRef}
            onInput={handleInput}
            onMouseUp={handleTextSelection}
            onKeyUp={handleTextSelection}
            dangerouslySetInnerHTML={{ __html: "" }} // Start with empty content
          />

          <FormattingTooltip
            position={tooltipPosition}
            onClose={() => setTooltipPosition(null)}
            onFormat={handleFormat}
          />

          <div>
            <div className="absolute bottom-4 left-4 mt-2 text-sm text-gray-500">
              Last saved at {lastSaved}
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
