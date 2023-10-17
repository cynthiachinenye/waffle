import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className='top-banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The Best Note Book Collection 2023</h2>

            <Link to='/product' className='link'> Shop Now <BsArrowRightShort /></Link>

          </div>
          <div className='img-box'>
            <img src='./images/ipad.png' alt='slider' />
          </div>
        </div>
      </div>
      <div className='product-type'>
        <div className='container'>
          <div className='box'>
            <div className='img-box'>
              <img src='./images/mobile.png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>23 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/phone (1).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>18 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/phone (3).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>20 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/phone (2).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>13 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/headset.png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>21 products</p>
            </div>
          </div>

          <div className='box'>
          <div className='img-box'>
            <img src='./images/watch.png' alt='watch' />
          </div>
          <div className='detail'>
            <p>15 products</p>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Home
