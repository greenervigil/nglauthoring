import React from 'react'
import logo from '../MyELT_logo.png'

export default function Header() {
  return (
    <header className="App-header">
      <a href="/"><img src={logo} alt="myelt logo" /></a>
      <h1>Authoring Companion Tool</h1>
    </header>
  )
}