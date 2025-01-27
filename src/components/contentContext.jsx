import React, { createContext, useState, useContext } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [globalContent, setGlobalContent] = useState("");

  return (
    <ContentContext.Provider value={{ globalContent, setGlobalContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
