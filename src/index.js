import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// Pseudo Element Error on Safari
function smokeEffect() {
  var isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  let isFirefox = navigator.userAgent.search('Firefox');

  if (!isChrome && !isFirefox) {
    console.log('not chrome');
    let landingPage = document.getElementById('homepage');
    landingPage.classList.remove('homepage');
  }
}
smokeEffect();
