import React, { createContext, useState, useContext } from "react";

// Create Context
const ContentContext = createContext();

// Provider Component
export const ContentProvider = ({ children }) => {
  const [globalContent, setGlobalContent] = useState(""); // Define the state and setter

  return (
    <ContentContext.Provider value={{ globalContent, setGlobalContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Hook to use Context
export const useContent = () => useContext(ContentContext);
