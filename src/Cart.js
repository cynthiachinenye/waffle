import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({cart, setCart}) => {
   
  console.log(cart)
  return (
    <div>
    <div className='cart-container'>
    
    {cart.length === 0 &&
      <div className='empty-cart'>
      <h2 className='empty'>Cart is Empty</h2>
      <Link to ='/product' className='link'>Shop Now</Link>
      </div>
     
    }
    <div className='contain'>
    {
        cart.map((product)=>{
            return(
                <div className='cart-item' key={product.id}>
                <div className='img-box'>
                <img src={product.Img} alt={product.Title}/>
                </div>
                <div className='detail'>
                <h4>{product.Cat}</h4>
                <h3>{product.Title}</h3>
                <p>{product.Price}</p>
                <button><AiOutlineClose/></button>
                </div>
                </div>
            )
        })
    }
    </div>
    </div>
      
    </div>
  )
}

export default Cart
