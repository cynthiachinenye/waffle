import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'
import './nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <div className='icon'>
                <FaTruckMoving />
            </div>
            <p> Free Shiping when shopping upto $1000</p>

        </div>
    )
}

export default Nav
