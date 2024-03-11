import React, { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import './App.css';

import { useAuth0 } from "@auth0/auth0-react";

const Splash = () => {
  return (
    <div className='splash-container'>
      <div className='splash-content'>
        <img src='./logo_img.png' alt='' />
        <h1>AI Chat Bot</h1>
      </div>
    </div>
  );
}

const App = () => {

  const [appInitialized, setAppInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppInitialized(true);
    }, 2000); 
  }, []);

  const { isAuthenticated } = useAuth0();

  if (!appInitialized) {
    return <Splash />;
  }

  return (
    <>
    {isAuthenticated ? <><Sidebar /><Main /></> : <>
      <Main /></> }
    </>
  )
}

export default App
