import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = ({cart, setCart}) => {
  return (
    <div>
    <div className='container'>
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
