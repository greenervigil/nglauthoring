import React from 'react'
import App from '../App'
import Header from '../components/header'
import Footer from '../components/footer'
import ReturnHome from '../components/main_menu/return_home'
import Home from '../components/home'
import MainMenu from '../components/main_menu/main_menu'

export default {
  title: 'Components',
}

export const Main = () => <App />

export const Head = () => <Header />

export const Foot = () => <Footer />

export const Return = () => <ReturnHome />

export const TestHome = () => <Home />

export const MainHome = () => <MainMenu />