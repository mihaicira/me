import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import StarfieldAnimation from "react-starfield-animation";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKziCa2opfS83LWNLnkmrBONv4J0OZGi8",
    authDomain: "personal-f27c7.firebaseapp.com",
    projectId: "personal-f27c7",
    storageBucket: "personal-f27c7.appspot.com",
    messagingSenderId: "735277845592",
    appId: "1:735277845592:web:72fe0b250a3074d3a28e2d",
    measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
      <BrowserRouter>
          <StarfieldAnimation
              style={{
                  position: 'fixed',
                  width: '100%',
                  height: '100%',
                  zIndex:'-100'
              }}
              lineWidth={3}
              numParticles={500}
          />

          <App />

      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
