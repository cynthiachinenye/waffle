import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({ cart, setCart }) => {
  // add to cart
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    setCart(cart.map((prod) => {
      return (
        prod.id === product.id ? {
          ...exist, qty: exist.qty + 1
        } : product
      )
    }))
  }
  //decrease from cart

  const inc = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    setCart(cart.map((prod) => {
      return (
        prod.id === product.id ? {
          ...exist, qty: exist.qty - 1
        } : product
      )
    }))
    // remove cart
  }
  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })

    if (exist.qty > 0) {
      setCart(cart.filter((x) => {
        return x.id !== product.id
      }))
    }
  }
  // total price
  const Totalprice = cart.reduce((price, items) => price + items.qty * items.price, 0)

  return (
    <div>
      <div className='cart-container'>

        {cart.length === 0 &&
          <div className='empty-cart'>
            <h2 className='empty'> Cart is Empty</h2>
            <Link to='/product' className='link'> Shop Now </Link>
          </div>

        }
        <div className='contain'>
          {
            cart.map((product) => {
              return (
                <div className='cart-item' key={product.id}>
                  <div className='img-box'>
                    <img src={product.Img} alt={product.Title} />
                  </div>
                  <div className='detail'>
                    <div className='info'>
                      <h4>{product.Cat}</h4>
                      <h3>{product.Title}</h3>
                      <p>Price: ${product.Price}</p>
                      <div className='qty'>
                        <button className='in-qty' onClick={() => incqty(product)}>+</button>
                        <input type='text' value={product.qty} />
                        <button className='in-qty' onClick={() => inc(product)}>-</button>
                      </div>
                      <h4 className='subtotal'>sub total: ${product.Price * product.qty}</h4>

                    </div>
                    <div className='close'>
                      <button onClick={() => removeProduct(product)}><AiOutlineClose /></button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {
          cart.length > 0 &&
          <div>
            <h2 className='totalprice'>${Totalprice} </h2>
            <button className='checkout'>Checkout</button>
          </div>
        }

      </div>

    </div>
  )
}

export default Cart
