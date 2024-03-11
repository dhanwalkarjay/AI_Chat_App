import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/context.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-sgtcrcbdfixuw4e8.us.auth0.com"
    clientId="LLWZfmRm0l10YLnjwfusJ63O2HiBqCzt"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <ContextProvider>
      <App />
    </ContextProvider>,
  </Auth0Provider>
)
