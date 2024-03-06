import React from 'react'
import './About.css'
import img1 from '../../Assets/DSC_0673-2.jpg'

const About = () => {
  return (
    

    <div>
        <div className='about'>
            <div className='textoabout'>
                <h1>About <span className='span'>Me</span></h1>
            </div>
            <div className='img'>
              <img src={img1} className='foto'/>
            </div>
            <div className='descripcion'>
                <h2>Full Stack Developer</h2>
            </div>
            <div className='descrip'>
            <p>I am a university technical student in systems administration and free software. 
                  I use different OS (Windows, Linux), also chatGPT <br></br> and I find it a very interesting
                   tool. I would like to learn more technologies! In my free time I usually to
                    design <br></br> with Illustrator and read.</p>
            </div>
            <button className='button'>Read more</button>
        </div>
    </div>
  )
}

export default About