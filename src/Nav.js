
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin, CiLogout } from 'react-icons/ci'
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import './nav.css';

const Nav = () => {
    const {loginwithRedirect} = useAuth0()
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
                        <input type="text" value='' placeholder='Enter Your Products' autoComplete='off' />
                        <button>Search</button>
                    </div>
                    <div className='icon'>
                        <div className='account'>
                            <div className='user-icon'>
                                <AiOutlineUser />

                            </div>
                            <p>Hello, User</p>
                        </div>
                        <div className='second-icon'>
                            <Link to='/' className='link'> <p><AiOutlineHeart /></p></Link>
                            <Link to='/cart' className='link'> <p> <BsBagCheck /> </p> </Link>

                        </div>
                    </div>

                </div>

            </div>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Product</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='auth'>
                        <button onClick={loginwithRedirect()}><CiLogin /></button>
                       <button onClick={loginwithRedirect()}><CiLogout /></button>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Nav
