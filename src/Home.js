import React from 'react'
import {  Link } from 'react-router-dom'
import{BsArrowRightShort} from 'react-icons/bs'
const Home = () => {
  return (
    <div>
      <div className='top-banner'>
      <div className='container'>
      <div className='detail'>
      <h2>The Best Note Book Collection 2023</h2>
    
      <Link to='/product'>Shop Now<BsArrowRightShort/></Link>
    
      </div>
      <div className='img-box'>
      <img src='./images/ipad.png' alt='slider'/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
