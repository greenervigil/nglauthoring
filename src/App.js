import React, { Component } from 'react';
import Header from './header/header.js';
import MainMenu from './main_menu/main_menu.js';
import Footer from './footer/footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header name="Authoring Resources"/>
        <div>
          <MainMenu/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
