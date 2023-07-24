
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';



const clientId = import.meta.env.VITE_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={'1059141661272-' + clientId + '.apps.googleusercontent.com'}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

