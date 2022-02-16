import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';
import './Navbar.css'


function Navbar(){
    const [click,setClick] = useState(false);
    const handleClick = ()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);
    const [button,setButton] = useState(true)
    const showButton = () =>{
        if (Window.innerWidth <= 900){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
    window.addEventListener('resize',showButton);
    return( 
        <>
        <nav className="Navbar">
            <div className="navbar-container">
            <Link to ="/" className="navbar-logo">
                TRVL<i className="fab fa-typo3"/> 
            </Link>
            <div className='manu-icon' onClick={handleClick}>
                <i className={click ?'fas fa-times':'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active':'nav-manu'}>
                <li className='nav-item'>
                    <Link to = '/' className='nav-link' onClick={closeMobileMenu}>
                        HOME
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to = '/' className='nav-link' onClick={closeMobileMenu}>
                        PRODUCTS
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to = '/' className='nav-link' onClick={closeMobileMenu}>
                        MARKET
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to = 'sign up' className='nav-link-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button &&<Button buttonStyle= 'btn--outline ' >SIGN UP</Button>}
            </div>
        </nav>


        </>

    )
}
export default Navbar