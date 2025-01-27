import React from 'react';
import Sidebar from './components/sidebar';
import PostEditor from './components/editor';
import LinkedInPost from './components/preview';
import { ContentProvider } from "../src/components/contentContext";

import './App.css';

function App() {
  return (
    <ContentProvider>
    <div className="App flex">
      <div  style={{ width: '17%' }}>
      <Sidebar />
      </div>
      <div  style={{ width: '41.5%' }}>
      <PostEditor />
      </div>
      <div  style={{ width: '41.5%' }}>
      <LinkedInPost />
      </div>

      
    </div>
    </ContentProvider>
  );
}

export default App;
