import '../styles/navbar.css'
import react, { StrictMode } from 'react';
import menuIcon from '../assets/menu.png'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search.png'
import uploadIcon from '../assets/upload.png'
import moreIcon from '../assets/more.png'
import notificationIcon from '../assets/notification.png'
import profileIcon from '../assets/jack.png'
export default function Navbar({setSidebar}){



    
    return (
        <>
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img src={menuIcon} alt="" onClick={()=>{setSidebar(prev => !prev)}} />
                <img className='logo' src={logo} alt="" />
            </div>

            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                    <input type="text" placeholder="search" />
                    <img src={searchIcon} alt="" />
                </div>
            </div>

            <div className='nav-right flex-div'>
                <img src={uploadIcon} alt="" />
                <img src={moreIcon} alt="" />
                <img src={notificationIcon} alt="" />
                <img src={profileIcon} className='user-icon' alt="" />
            </div>
        </nav>
        </>
    );
}