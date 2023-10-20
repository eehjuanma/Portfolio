import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div>
        <div className='skills'>
            <div className='textitulo'>
                <h1>My <span className='span'>Skills</span></h1>
            </div>
            <div className='habilidades'>
                <div className='habil'>
                    <h2 className='skillstexto'>Skills</h2>

                    <div className='skillhabilidades'>
                        <p>Node.js</p>
                        <p>React</p>
                        <p>Java</p>
                        <p>Python</p>
                        <p>Mongodb</p>
                        <p>Php</p>
                        <p>Css</p>
                        <p>Mysql</p>
                    </div>
                </div>
                <div className='tools'>
                    <h2 className='skillstexto'>tools</h2>
                    <div className='skillhabilidades'>
                        <p>Node.js</p>
                        <p>React</p>
                        <p>Java</p>
                        <p>Python</p>
                        <p>Mongodb</p>
                        <p>Php</p>
                        <p>Css</p>
                        <p>Mysql</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills