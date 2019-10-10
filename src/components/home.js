import React from 'react'
import Header from './header'
import MainMenu from './main_menu'
import Footer from './footer'

export default function Home() {
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