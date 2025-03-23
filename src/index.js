import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Loader from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter fallback={<Loader/>}>
    <App />
  </BrowserRouter>
);
