import React, { Component } from 'react';
import Header from './components/header';
import MainMenu from './components/main_menu';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
        <div className="container">
          <MainMenu/>
        </div>
      <Footer/>
      </>
    );
  }
}

export default App;
