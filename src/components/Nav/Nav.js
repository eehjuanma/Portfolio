import React from 'react'
import { Link } from 'react-scroll'
import './Nav.css';

const Nav = () => {
  return (
    <div>
       <nav>
            <a href='*' className='titulo'>Manuel</a>
            <div>
              <ul className='navbar'>
                <li><Link href='*' activeClass='active' to='main' spy={true} >Home</Link></li>
                <li><Link href='*' activeClass='active' to='about' spy={true} >About</Link></li>
                <li><Link href='*' activeClass='active' to='skills' spy={true} >Skills</Link></li>
                <li><Link href='*' activeClass='active' to='projects' spy={true} >Projects</Link></li>
                <li><Link href='*' activeClass='active' to='contact' spy={true} >Contact</Link></li>
              </ul>
            </div>
       </nav>
    </div>
  )
}

export default Nav