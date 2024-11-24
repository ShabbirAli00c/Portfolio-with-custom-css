import React from 'react'

function Contact() {
  return (
    <section className='contact'>
    <div className='container'>
      <h2>Contact Us</h2>
      <div className='contat-wrap'>
      <div className='contact-form'>
        <h3>Send us a message</h3>
        <form>
          <div className='from-group'>
          <input type='text' name='name' placeholder='Your Name'></input>
          </div>
          <div className='from-group'>
          <input type='email' name='email' placeholder='Your Email'></input>
          </div>
          <div className='from-group'>
          <textarea name='message' placeholder='Your Message'></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </div>
      <div className='contact-info'>
      <h3>Contact Information</h3>
      <p>+92 3418353604</p>
      <p>+92 3418353604</p>
      <p>3D 9/2 Nazimabad Karachi</p>
      </div>
      </div>
    </div>
   </section>
  )
}

export default Contact
