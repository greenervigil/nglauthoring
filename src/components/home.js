import React from 'react'
import Header from './header'
import MainMenu from './main_menu'
import Footer from './footer'

const Home = () => {
    return (
      <>
        <Header/>
          <div className="container">
            <MainMenu/>
          </div>
        <Footer/>
      </>
    )
}

export default Home