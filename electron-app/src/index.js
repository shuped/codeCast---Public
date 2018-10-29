import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';
import store from './redux/store/index.js';
import './styles/css/index.css';

ReactDOM.render(
  <Root store={ store } />, 
  document.getElementById('root')
);
