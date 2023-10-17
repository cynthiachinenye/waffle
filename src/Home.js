import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRightShort, BsCurrencyDollar } from 'react-icons/bs'
import { FiTruck } from "react-icons/fi";
import {HiOutlineReceiptPercent}from  'react-icons/hi'
 import {BiHeadphone} from  'react-icons/bi'
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
            <img src='./images/tablet.png' alt='slider' />
          </div>
        </div>
      </div>
      <div className='product-type'>
        <div className='container'>
          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (1).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>23 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (2).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>18 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (3).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>20 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (4).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>13 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (5).png' alt='mobile' />
            </div>
            <div className='detail'>
              <p>21 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (6).png' alt='watch' />
            </div>
            <div className='detail'>
              <p>15 products</p>
            </div>
          </div>


          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (7).png' alt='watch' />
            </div>
            <div className='detail'>
              <p>15 products</p>
            </div>
          </div>

          <div className='box'>
            <div className='img-box'>
              <img src='./images/set (8).png' alt='watch' />
            </div>
            <div className='detail'>
              <p>15 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
            <div className='icon'>
              <FiTruck />
            </div>
            <div className='detail'>
              <h3>Free Shopping</h3>
              <p>Order above $1000</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <HiOutlineReceiptPercent />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BsCurrencyDollar/>
            </div>
            <div className='detail'>
              <h3>Free Shopping</h3>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Free Shopping</h3>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home
