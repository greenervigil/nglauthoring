import React, { Component } from 'react';
import Header from './components/header';
import MainMenu from './components/main_menu';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header/>
        <div className="container">
          <MainMenu/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
