import React from 'react';
import logo from '../ng_learning_whiteyellow.png';

export default function Footer() {
  return (
    <footer className="App-footer">
      <img src={logo} alt="myelt logo"/>&nbsp;
        &copy;&nbsp;{new Date().getUTCFullYear()} Cengage Learning
    </footer>
  )
}