import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";
import './Nav.css';

const Nav = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div>
       <nav ref={navRef}>
            <a href='*' className='titulo'>Manuel</a>
            <div>
              <ul className='navbar'>
                <li><Link href='*' activeClass='active' to='main' spy={true} >Home</Link></li>
                <li><Link href='*' activeClass='active' to='about' spy={true} >About</Link></li>
                <li><Link href='*' activeClass='active' to='skills' spy={true} >Skills</Link></li>
                <li><Link href='*' activeClass='active' to='projects' spy={true} >Projects</Link></li>
                <li><Link href='*' activeClass='active' to='contact' spy={true} >Contact</Link></li>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                  <FaTimes/>
                </button>
              </ul>
              <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
            </div>
       </nav>   
    </div>
  )
}

export default Nav