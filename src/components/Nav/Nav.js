import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div>
       <nav>
            <a href='*' className='titulo'>Manuel</a>
            <div>
              <ul className='navbar'>
                <li><a href='/'>Home</a></li>
                <li><a href='*'>About</a></li>
                <li><a href='*'>Skills</a></li>
                <li><a href='*'>Projects</a></li>
                <li><a href='*'>Contact</a></li>
              </ul>
            </div>
       </nav>
    </div>
  )
}

export default Nav