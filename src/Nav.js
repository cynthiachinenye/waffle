import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import { BsBagCheck} from 'react-icons/bs'

import './nav.css';

const Nav = () => {
    return (
        <>
        <div className='free'>
            <div className='icon'>
                <FaTruckMoving />
            </div>
            <p> FREE Shipping when shopping upto $1000</p>
            </div>
            <div className='main-header'>
           <div className='container'>
           <div className='logo'>
           <img src='./images/logo.png' alt='logo'/>
           </div>
           <div className='search-box'>
           <input type="text" value='' placeholder='Enter The Product Name' autoComplete='off'/>
           <button>Search</button>
           <AiOutlineHeart/>
           <BsBagCheck/>

           </div>
           </div>
        
        </div>

        </>  
        
        )
}

export default Nav
