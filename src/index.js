import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyA3oBknkKmPDmcbQD6ElKn3FUahj0v3MPA",
  authDomain: "react-app-63013.firebaseapp.com",
  projectId: "react-app-63013",
  storageBucket: "react-app-63013.appspot.com",
  messagingSenderId: "72796768674",
  appId: "1:72796768674:web:39d448627cf65549548afb"
};

initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
