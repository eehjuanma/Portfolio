import React from 'react';
import './Project.css';
import { Link } from 'react-scroll';

const Projects = () => {
  return (
    <div>
        <div className='projects'>
            <h1>My <span className='span'>Projects</span></h1>
            <div className='container'>
              <div className='box1'>
                <h2>E-commerce</h2>
                <Link to='ecommerce'><button className='button'>Ver mas</button></Link>
              </div>
              <div className='box1'>
                <h2>LandingPage</h2>
                <button className='button'>Ver mas</button>
              </div>
              <div className='box1'>
                <h2>App Movile</h2>
                <button className='button'>Ver mas</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects