import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Nav />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
