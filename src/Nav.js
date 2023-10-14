
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'

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
                        <img src='./images/logo.png' alt='logo' />
                    </div>
                    <div className='search-box'>
                        <input type="text" value='' placeholder='Enter The Product Name' autoComplete='off' />
                        <button>Search</button>
                        </div>
                        <div className='icon'>
                            <div className='account'>
                                <div className='user-icon'>
                                    <AiOutlineUser />
                                </div>
                                <AiOutlineHeart />
                                <p>Hello User</p>
                                <BsBagCheck />
                            </div>
                        </div>
                  
                </div>

            </div>

        </>

    )
}

export default Nav
