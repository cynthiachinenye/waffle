import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-container'>
      <div className='content'>
      <div className='form'>
      <form method='POST'>
      <input type="text" name='Name' value='' placeholder='enter your full name' required/>
      <input type="email" name='Email' value='' placeholder='enter your mail' required/>
      <input type="text" name='Subject' value='' placeholder='enter your Subject' required/>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
