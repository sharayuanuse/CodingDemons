import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import LogIn from './Login.js';
// import Home from './home.js';
// import SignUp from './SignUp.js';
import Graduation from './Graduation.js';
// import PostGraduation from './PostGraduation.js';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LogIn /> */}
    {/* <SignUp /> */}
    <Graduation />
    {/* <PostGraduation /> */}
    {/* <Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

