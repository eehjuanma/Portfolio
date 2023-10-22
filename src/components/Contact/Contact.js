import React, { useRef } from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kld9tdn', 'template_wsky6nv', form.current, 'nsV834DLlmj_VlNgH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
        <div className='contact'>
            <h1>Contact <span className='span'>Me</span></h1>
            <div className='formulariocaja'>
              <form ref={form} onSubmit={sendEmail}>
                <label htmlFor='name' >Nombre</label>
                <input type='text' name='from_name' required></input>
                <label htmlFor='name' >Email</label>
                <input type='email' name='email_id' required></input>
                <label htmlFor='name' >Mensaje</label>
                <input type='text' name='message' required></input>
                <button className='button3' type='submit'>Enviar</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact