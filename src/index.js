import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// You can specify which plugins you need
// import { Tooltip, Toast, Popover, Grid } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//Importaciones de firabase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBND8iCvHDiFQz2MLqlCokakyC4BXulqko",
//   authDomain: "solomotos-c2024.firebaseapp.com",
//   projectId: "solomotos-c2024",
//   storageBucket: "solomotos-c2024.appspot.com",
//   messagingSenderId: "873948640025",
//   appId: "1:873948640025:web:53e7a246b8f72b4ff54b88"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaWXC9XQE2im-MIf8kGwolcXg5NFJc4FI",
  authDomain: "solomotos-df038.firebaseapp.com",
  projectId: "solomotos-df038",
  storageBucket: "solomotos-df038.appspot.com",
  messagingSenderId: "918090559805",
  appId: "1:918090559805:web:665909b545993fd3255554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
