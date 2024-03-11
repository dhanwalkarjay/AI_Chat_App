import React, { useContext, useEffect, useState } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

import { useAuth0 } from "@auth0/auth0-react";

const main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');

  useEffect(() => {
    const text1 = 'AII Chat App';
    const text2 = 'IIt is an AI assistant. It reduces your workload. It is a computer program that simulates and processes human conversation (written), allowing humans to interact with digital devices as if they were communicating with a real person.';
    const speed = 50; 

    let k = 0;
    const typingInterval1 = setInterval(() => {
      if (k < text1.length) {
        setTypedText1(prevTypedText => prevTypedText + text1.charAt(k));
        k++;
      } else {
        clearInterval(typingInterval1);
      }
    }, speed);

    let j = 0;
    const typingInterval2 = setInterval(() => {
      if (j < text2.length) {
        setTypedText2(prevTypedText => prevTypedText + text2.charAt(j));
        j++;
      } else {
        clearInterval(typingInterval2);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval1);
      clearInterval(typingInterval2);
    };
  }, []);

  return (
    <div className='main'>
      <div className='nav'>
        <img src='../../../public/logo_img.png' alt='' /><p>AI Chat App</p>
        { isAuthenticated ? ( <>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button></>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log In</button>
        )}
      </div>
      <div className='main-container'>
        {!showResult ? 
        <>
          <div className='greet'>
            {isAuthenticated ? <><p><span>Hello, {user.name}.</span></p> <p>How can I assist you today?</p></> : <p>Please<span> Login </span>To Use.</p> }
          </div>
          {isAuthenticated ? 
          <>
            <div className='cards'>
              <div className='card'>
                  <p>Compare Design Principles</p>
                  <img src={assets.bulb_icon} alt='' />
              </div>
              <div className='card'>
                  <p>Plan a tour</p>
                  <img src={assets.compass_icon} alt='' />
              </div>
              <div className='card'>
                  <p>Help me pick</p>
                  <img src={assets.message_icon} alt='' />
              </div>
              <div className='card'>
                  <p>Explain this code</p>
                  <img src={assets.code_icon} alt='' />
              </div>
            </div>
          </> : <>

            <div className='greet1'>
              <p>Meet The <span>"{typedText1}"</span></p>
              <p>{typedText2}</p>
            </div>
            
          </>}
        </> 
        : 
          <div className='result'>
            <div className='result-title'>
              <img src={assets.user_icon} alt='' />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt='' />
              {loading ? 
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }
        
        <div className='main-bottom'>
          {isAuthenticated ? (<>
            <div className='search-box'>
                <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Type Here.....' />
                <div>
                    <img onClick={() => onSent()} src={assets.send_icon} alt='' />
                </div>
            </div>
          </>) : (null)}
            <p className='bottom-info'>AI chat App may resolve your quries.</p>
        </div>
      </div>
    </div>
  )
}

export default main
