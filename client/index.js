import React from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
// eslint-disable-next-line no-unused-vars
import './styles.scss'; 


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <div className="appContainer" id='appContainer'>
      <App />
    </div>
);