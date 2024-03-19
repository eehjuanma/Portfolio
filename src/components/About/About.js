import React from 'react'
import './About.css'
import CV from '../../Assets/Desarrollador Backend y Frontend - Juan Manuel Andrada.pdf';

const About = () => {
  return (
    

    <div>
        <div className='about'>
            <div className='textoabout'>
                <h1>About <span className='span'>Me</span></h1>
            </div>
            
            <div className='descripcion'>
                <h2>I'm Full <span className='span'>Stack Developer</span></h2>
            </div>
            <div className='descrip'>
              <h2>Welcome to my portfolio. My name is Manuel Andrada, I am 20 years old, and I am from Neuquén, Argentina</h2>
            <p>For over 2 years, I have delved into the realm of programming, dedicating time to self-study and honing my skills in logic and problem-solving.<br></br> 
            In the past year, alongside my independent learning, I had the privilege of working at a consulting firm where I gained valuable experience in PHP and Laravel development.<br></br> This opportunity not only enhanced my technical skills but also exposed me to agile methodologies, emphasizing the significance of teamwork.<br></br>

Initially, I immersed myself in web development using PHP and discovered its potential for crafting dynamic and functional applications. <br></br> However, my expertise extends beyond development; working in an environment that values agile methodologies allowed me to apply principles such as Scrum and Kanban. <br></br> This, in turn, fostered efficiency, close collaboration with my team, and the ability to adapt swiftly to project changes.<br></br> Iterative planning, daily follow-up meetings, and continuous feedback became integral aspects of my daily routine.<br></br>

In addition to my role at a consulting firm, I am also engaged in a startup named Epsiweb, where I work as a freelancer, creating web pages.<br></br> This experience enables me to apply my acquired knowledge while continuously evolving both personally and professionally.<br></br> I am enthusiastic about applying my skills to future projects and furthering my growth in this exciting field.</p>
            </div>
            <div className='button buttondownload'>
              <a className='textbutton' href={CV}>Curriculum</a>
            </div>
        </div>
    </div>
  )
}

export default About