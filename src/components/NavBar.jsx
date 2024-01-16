import logo from '../assets/nifty-logo/svg/logo-no-background.svg'
import homeIcon from '../assets/icon/house.svg'
import shoppingIcon from '../assets/icon/shopping-cart.svg'
import exploreIcon from '../assets/icon/explore.svg'
import notificationIcon from '../assets/icon/notification.svg'
import ProfilePic from "../assets/Capture.jpg" 
import searchIcon from '../assets/icon/search.svg'

import styled from 'styled-components'

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

function NavBar(){
    const NavigationBar = styled.div `
        height: 90px;
        width: 100%;
        top: 0;
        z-index: 10;
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        backdrop-filter: blur(10px);
        background-color: #161616a6;
    `;
    
    const Menu = styled.ul `
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: center;
    `;

    const Hr = styled.hr`
    height: 70%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
    `;

    const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    `;

    const SearchContainer = styled.div `
    display: flex;
    img{
        margin-right: 5px;
        width:20px;
        height:20px;
    }
    align-items: center;
    padding: 10px 20px;
    border-radius: 50px;
    input {
        font-size: 16px;
        border: none;
        outline: none;
        background-color: transparent;
    }
    input::placeholder {
        color: #2A2A2A;
    }
    border: 1px solid #2A2A2A;
    background-color: #1C1C1C;
    max-width: 275px;

    `;

    return (
        <>
            <NavigationBar>
                <Menu>
                    <img src={logo} alt="Logo" className='logo'/>
                    <Hr />
                    <li><Link to={'/'}><img src={homeIcon} alt="Home" className='icon'/></Link></li>
                    <li><Link to={'/explore'}><img src={exploreIcon} alt="Explore" className='icon'/></Link></li>
                    <li><Link to={'/shopping'}><img src={shoppingIcon} alt="Shopping" className='icon'/></Link></li>
                    <li><Link to={'/notification'}><img src={notificationIcon} alt="Notifcation" className='icon'/></Link></li>
                </Menu>
                <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                    <SearchContainer>
                        <img src={searchIcon} alt="Search" />
                        <input type="text" className="search-box" placeholder="Search for art"/>
                    </SearchContainer>
                    <Button variant="contained" color="primary">
                    Logout
                    </Button>
                    <Button style={{width: "60px", height: "60px"}}>
                        <ProfilePicture src={ProfilePic} alt="avatar"/>
                    </Button>
                </div>
            </NavigationBar>
        </>
    );
}

export default NavBar