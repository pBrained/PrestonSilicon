import React from 'react';
import logo from './img/logo.svg';
import './App.css';
import background from './img/BG-01.svg';

function App() {
  return (
    <div className="App">
      <div className="background" style={{ backgroundImage: `url(${background})`}}>
          {
            <img src={logo} className="App-logo" alt="logo"/>
          }
      </div>
    </div>
  );
}

export default App;
