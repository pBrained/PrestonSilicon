import React, { useEffect } from 'react';
import './App.css';
import logo from './img/logo.svg';
import background from './img/BG-01.svg';
import linkedinL from './img/LI-In-Bug.png'

function App() {
  return (
    <div className="App">
      <div className="background" style={{ backgroundImage: `url(${background})`}}>
          {
            <div>
              <img src={logo} className="App-logo" alt="logo"/>
              <img src={linkedinL} className="App-logo" alt="logo" />
            </div>
          }
      </div>
    </div>
  );
}

export default App;
