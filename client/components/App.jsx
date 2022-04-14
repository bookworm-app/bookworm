import React, { Component } from "react";
import Menu from './Menu';
import Main from './Main';
import Other from './Other';

function App(){

// ---- APP COMPONENT DISPLAYS... -------------- 
  return (
    <div>
      <Menu />
        <div id="mainHeader">
          <h2>My Reads:</h2>
        </div>
      <Main />
        <div id="otherHeader">
          <h2>My Friends Reads:</h2>
        </div>
      <Other />
      
    </div>
  );
};

export default App;


