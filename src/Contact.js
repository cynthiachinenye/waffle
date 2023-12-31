import React,{ useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

import './contact.css'

const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated, } = useAuth0()

    const [users, setUser] = useState(

        {
            Name:'',
            Email:"",
            Subject:"",
            Message:"",
        }
    )
    let name, value
    const data = (e) => {
         name= e.target.name;
         value =e.target.value;
         setUser({...users,[name]:value})
    }
     const sendData = async(e) => {
        const {Name, Email, Subject, Message} = users
        e.preventDefault();
        const options ={
            method:'POST',
            Headers: {
                "Content-Type" : "aplication/json"
            },
            body:JSON.stringify({
                Name, Email, Subject, Message
            })

        }
        const res = await fetch('https://e-commerce-df21b-default-rtdb.firebaseio.com/Message.json', options)
           console.log(res)
           if(res)
           {
            alert('Your Message sent')
           }
           else {
            alert('An error Occured')
           }
     }
  return (
    <div>
      <div className='contact-container'>
      <div className='content'>
      <h2>#Contact Us</h2>
      <div className='form'>
      <form method='POST'>
      <input type="text" name='Name' value={users.Name} placeholder='enter your full name' required autoComplete='off' onChange={data}/>
      <input type="email" name='Email' value={users.Email} placeholder='enter your mail' required autoComplete='off' onChange={data}/>
      <input type="text" name='Subject' value={users.Subject} placeholder='enter your Subject' required autoComplete='off' onChange={data}/>
      <textarea name='Message' value={users.Message} placeholder='Your Message' required autoComplete='off' onChange={data}></textarea>
      {
        isAuthenticated?
        <button type='submit' onClick={sendData }> Send</button>
        :
        <button type='submit' onClick={() => loginWithRedirect() }> Login</button>
      }
   
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
