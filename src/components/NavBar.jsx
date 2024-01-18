import logo from '../assets/nifty-logo/svg/logo-no-background.svg'
import ProfilePic from "../assets/Capture.jpg" 
import searchIcon from '../assets/icon/search.svg'

import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom';

import { Button , Popover } from '@mui/material'

import { useState } from 'react';

function NavBar(){
    const location = useLocation();

    const NavigationBar = styled.div `
        height: 90px;
        width: 100vw;
        top: 0;
        z-index: 10;
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        backdrop-filter: blur(10px);
        background-color: #161616a6;
    `;

    const NavLink = styled(Link)`
        font-size: larger;
        text-decoration: none;

        &:hover {
        text-decoration: underline;
        }

        ${(props) => props.isSelected &&
            `
            text-decoration: underline;
            `
        }
        
        @media (max-width: 1000px) {
            visibility: hidden;
        }
    `;
    
    const Menu = styled.ul `
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 40px;
        align-items: center;
        @media (max-width: 1000px) {
            margin-top: 1vh;
			display: flex;
            flex-direction: column;
            align-items: center;
		}
    `;

    const Hr = styled.hr`
        height: 70%;
        border: 1px solid white;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
        @media (max-width: 1000px) {
            visibility: hidden;
        }
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
        max-width: 20vw;
    `;


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <NavigationBar>
                <Menu>
                    <img src={logo} alt="Logo" className='logo'/>
                    <Hr />
                    <li><NavLink to={'/'} isSelected={location.pathname === '/'}>
                        Home
                        </NavLink></li>
                    <li><NavLink to={'/explore'} isSelected={location.pathname === '/explore'}>
                        Explore
                        </NavLink></li>
                    <li><NavLink to={'/shopping'} isSelected={location.pathname === '/shopping'}>
                        Transactions History
                        </NavLink></li>
                </Menu>
                <div style={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                    <SearchContainer>
                        <img src={searchIcon} alt="Search" />
                        <input type="text" className="search-box" placeholder="Search for art"/>
                    </SearchContainer>
                    <Link to={'/login'} alt="Login Page" style={{textDecoration: "none"}}>
                        <Button variant="outlined" color="primary">
                            Log Out
                        </Button>
                    </Link>
                    
                    <Button style={{width: "60px", height: "60px"}} onClick={handleClick}>
                        <ProfilePicture src={ProfilePic} alt="avatar"/>
                    </Button>
                    <Popover 
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    >
                    </Popover>

                </div>
            </NavigationBar>
        </>
    );
}

export default NavBar
