import 'contact.css'

const Contact = () => {
  return (
    <div>
      <div className='contact-container'>
      <div className='content'>
      <h2>#Contact Us</h2>
      <div className='form'>
      <form method='POST'>
      <input type="text" name='Name' value='' placeholder='enter your full name' required/>
      <input type="email" name='Email' value='' placeholder='enter your mail' required/>
      <input type="text" name='Subject' value='' placeholder='enter your Subject' required/>
      <textarea name='Message' value='' placeholder='Your Message' required></textarea>
      <button type='submit'> Send</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
