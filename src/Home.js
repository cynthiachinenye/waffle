import React from 'react'
import { Link } from 'react-router-dom'

import { BsArrowRightShort, BsCurrencyDollar, BsEye } from 'react-icons/bs'
import { FiTruck } from "react-icons/fi";
import { CiPercent } from "react-icons/ci"
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import HomeProduct from './HomeProduct';

import './home.css'

const Home = () => {
  // const [homeProduct, setHomeProduct] = useState(HomeProduct)
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
              <CiPercent />
            </div>
            <div className='detail'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>

          <div className='box'>
            <div className='icon'>
              <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support </p>
            </div>
          </div>

        </div>

      </div>

      <div className='product'>
      <h2>Top Products</h2>
        <div className='contanier'>
          {
            HomeProduct.map((product) => {
              return (
                <>
                  <div className='box' key={product.id}>
                    <div className='img-box'>
                      <img src={product.Img} alt={product.Title} />
                      <div className='icon'>
                      <li> <AiOutlineShoppingCart /></li>
                      <li>  <BsEye /></li>
                      <li> <AiOutlineHeart /></li>
                       
                       
                       

                      </div>
                    </div>

                    <div className='detail'>

                      <p>{product.Cat}</p>
                      <h3>{product.Title}</h3>
                      <h4>{product.Price}</h4>
                    </div>

                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Home
