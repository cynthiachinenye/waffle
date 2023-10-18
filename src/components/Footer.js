import React from 'react'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import './footer.css'


const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src='./images/logo.png' alt='' />
                        </div>
                        <div className='detail'>
                            <p>We are a team of designers and developers that create high quality WordPress</p>
                            <div className='icon'>
                                <li><FaFacebookF /></li>
                                <li><BsInstagram /></li>
                                <li><BsTwitter /></li>
                                <li><FaLinkedin /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className='page'>
                    <h3>Pages</h3>
                       <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>

                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
