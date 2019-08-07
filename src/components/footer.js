import React from 'react';
import logo from '../ng_learning_whiteyellow.png';

const Footer = () => (
  <footer className="App-footer">
    <img src={logo} alt="myelt logo"/>&nbsp;
    &copy;&nbsp;{new Date().getUTCFullYear()} Cengage Learning
  </footer>
);

  export default Footer;