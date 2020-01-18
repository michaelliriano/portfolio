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

function SmokeEffect() {
  if (
    navigator.userAgent.search('Safari') >= 0 &&
    navigator.userAgent.search('Chrome') < 0
  ) {
    function removeColor() {
      const element = document.getElementById('homepage');
      element.classList.add('safari');
      element.classList.remove('homepage');
      console.log(
        'If you would like to see Colored Smoke, pleasee use Google Chrome. There is a Pseudo Selector Bug with Safari that will not let you see the colors'
      );
    }
    removeColor();
  } else {
    function AddColor() {
      const color = document.getElementById('homepage');
      color.classList.add('homepage');
    }
    AddColor();
  }
}
SmokeEffect();
