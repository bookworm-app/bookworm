import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import Home from './components/Home'

// import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss'; 

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // <BrowserRouter> // this is a react router thing
    <div className="appContainer">
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
      {/* <h1>APP WILL GO HERE</h1>
      <h2>Seriously app will go here</h2> */}
    </div>
  //  // this is a react router thing
);