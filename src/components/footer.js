import React from 'react'
import logo from '../default-xs.png'//'../ng_learning_whiteyellow.png';

export default function Footer() {
  const year = new Date().getUTCFullYear()
  return (
    <footer>
      <div>
      <img src={logo} alt="myelt logo"/>
      </div>
      <div>
        <p data-testid="copy">&copy; {year} Cengage Learning</p>
      </div>
    </footer>
  )
}