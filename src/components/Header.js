import React from 'react'
import './Header.css';
import QBTLogo from '../assets/QBTLogo.png';

function Header() {
  return (
    <div className='header'>
        <img src={QBTLogo} alt="QBT Logo" />

        <button>Contact Us</button>
    </div>
  )
}

export default Header