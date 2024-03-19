import { Link } from 'react-scroll';
import './Main.css'
import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='main'>
        <div className='titulos'>
          <h1>Hi, I'm Manuel <br></br><span className='span'>Andrada</span></h1>
          <h2>Full stack Developer</h2>
          <p>Jr. developer passionate about technology, being self-taught I have <br></br> learned programming 
            languages that allow me to develop my own projects <br></br> and fall in love with the world of free
           software.</p>
           <Link to='contact'><button className='button'>Let's Talk</button></Link>
           <Link to='projects'><button className='button2'>Projects</button></Link>
           <Link><button className='button2'>GitHub</button></Link>
           <Link to='projects'><button className='button2'>Linkedin</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Main;