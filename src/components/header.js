import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import logo from '../MyELT_logo.png';

export default function Header() {
  function returnHome() {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  return (
    <header className="App-header">
      <img src={logo} alt="myelt logo" onClick={returnHome}/>
      <h1>Authoring Companion Tool</h1>
    </header>
  )
}