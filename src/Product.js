import React, { useState } from 'react'
import ProductDetail from './components/ProductDetail'
import { BsEye } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import './components/product.css'

const Product = () => {
    const [product,setProduct] = useState(ProductDetail)
    const filterProduct = (product) =>{
        const update = ProductDetail.filter((s) =>
        {
            return s.Cat === product
        })
        setProduct(update);

    }
    const AllProducts = () =>{
           setProduct(ProductDetail);
    }
    return (
        <div>

            <div className='products'>
                <h2> # Products</h2>
                <p>Home . products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>categories</h3>
                            <ul>
                            <li onClick={() => AllProducts()}>AllProducts</li>
                                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                                <li onClick={() => filterProduct("Smart Watch")}>Smart watch</li>
                                <li  onClick={() => filterProduct("Headphones")}>Headphones</li>
                                <li  onClick={() => filterProduct("Camera")}>Camera</li>
                                <li  onClick={() => filterProduct("Gaming")}>Gaming</li>
                            </ul>
                        </div>
                    </div>
                    <div className='product-box'>
                        <div className='contain'>
                            {
                                product.map((product) => {
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
