import React from 'react'
import ProductDetail from './components/ProductDetail'
import { BsEye } from 'react-icons/bs'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai'

const Product = () => {
    return (
        <div>
            <h3> # Products</h3>
            <p>Home . products</p>
            <div className='products'>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>categories</h3>
                            <ul>
                                <li>Tablet</li>
                                <li>Smart watch</li>
                                <li>Headphones</li>
                                <li>Camera</li>
                                <li>Gaming</li>
                            </ul>
                        </div>
                    </div>
                    <div className='product-box'>
                        <div className='container'>
                            {
                                ProductDetail.map((product) => {
                                    return (
                                        <div>
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
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
