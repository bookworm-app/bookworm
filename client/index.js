import React from 'react';
import { createRoot } from 'react-dom/client';

// import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss'; 

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  // <BrowserRouter> // this is a react router thing
    <div className="appContainer">
      <App/>
      {/* <h1>APP WILL GO HERE</h1>
      <h2>Seriously app will go here</h2> */}
    </div>
  // </BrowserRouter> // this is a react router thing
);