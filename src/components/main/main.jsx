import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

  return (
    <div className='main'>
      <div className='nav'>
        <p>AI Chat App</p>
        <img src={assets.user_icon} alt=' '/>
      </div>
      <div className='main-container'>
        {!showResult ? 
        <>
          <div className='greet'>
            <p><span>Hello, User's Name.</span></p>
            <p>How can I assist you today?</p>
          </div>
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
            <div className='search-box'>
                <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Type Here.....' />
                <div>
                    <img onClick={() => onSent()} src={assets.send_icon} alt='' />
                </div>
            </div>
            <p className='bottom-info'>AI chat App may resolve your quries.</p>
        </div>
      </div>
    </div>
  )
}

export default main
