import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import logo from '../MyELT_logo.png';

const Header = () => {
  const returnHome = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  }

    return (
      <div className="App-header">
        <img src={logo} alt="myelt logo" onClick={returnHome}/>
        <h1>Authoring Companion Tool</h1>
      </div>
    );
  }

  export default Header;