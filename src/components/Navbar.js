import React from 'react'
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <span className='nav-logo'>HELLO</span>
        <div className='nav-item'>
            <a href='home'> Home</a>
            <a href='products'>Products</a>
            <a href='Market'>Market</a>
            <a href='Contact'>Contact</a>
            <a href='Farmerz'>Farmerz</a>
        </div>
    </div>
  )
}
