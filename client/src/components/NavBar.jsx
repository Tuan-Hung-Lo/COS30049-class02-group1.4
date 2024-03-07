import logo from '../assets/nifty-logo/svg/logo-no-background-white.svg'
import ProfilePic from "../assets/Capture.jpg" 
import SearchIcon from '@mui/icons-material/Search';

import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Box, Button, Menu, MenuItem, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import '../index.css'

// NavBar component
function NavBar() {
    // Get the current location using useLocation hook
    const location = useLocation()
    // Check if the screen size is mobile
    const isMobile = useMediaQuery('(max-width:900px)');

    // State for anchor element of the menu
    const [anchorEl, setAnchorEl] = useState(null);

    // Function to handle opening the main menu
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing the main menu
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Styled components for the navigation bar elements
    const NavigationBar = styled(Box) `
        height: 90px;
        width: 100vw;
        top: 0;
        z-index: 10;
        position: fixed;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        backdrop-filter: blur(15px);
        background-color: #101010a0;
        ${isMobile &&
        `
            justify-content: space-between;
        `}
    `;

    const NavLink = styled(Link)`
        font-size: larger;
        text-decoration: none;

        color: #ffffff;

        &:hover{
        text-decoration: underline;
        }

        // eslint-disable-next-line react/prop-types
        ${(props) => props.isSelected &&
        `
        text-decoration: underline;
        `}
    `;

    const MenuFull = styled.ul `
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        gap: 2.5vw;
        align-items: center;
        ${isMobile &&
        `
            gap: 1vw;
        `}
    `;

    const Hr = styled.hr`
        height: 70%;
        border: 1px solid white;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0));
    `;

    const ProfilePicture = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 50%;
    `;

    const SearchContainer = styled.div `
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 50px;
        input{
            font-size: 16px;
            border: none;
            outline: none;
            background-color: transparent;
        }
        input::placeholder{
            color: #3A3A3A;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100vw;
        }
        border: 1px solid #3A3A3A;
        background-color: #101010;
        max-width: 80vw;
        width: 40vw;
    `;

    // Prop types for NavLink component
    NavLink.propTypes = {
        isSelected: PropTypes.bool,
        to: PropTypes.string.isRequired,
    };

    return (
        <>
            {/* Main navigation bar */}
            <NavigationBar>
                {!isMobile ? (
                    // Render full menu for desktop
                    <MenuFull>
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" className='logo'/>
                        </Link>
                        <Hr />
                        <li><NavLink to={'/'} isSelected={location.pathname === '/'} >
                            Home
                            </NavLink></li>
                        <li><NavLink to={'/explore'} isSelected={location.pathname === '/explore'} >
                            Explore
                            </NavLink></li>
                        <li><NavLink to={'/wallet'} isSelected={location.pathname === '/wallet'}>
                            Wallet
                            </NavLink></li>
                    </MenuFull>
                ) : (
                    // Render menu icon for mobile
                    <>
                    <MenuFull>
                        <Button variant="text" color="primary" onClick={handleMenuOpen}>
                            <MenuIcon />
                        </Button>
                        <Link to={'/'}>
                            <img src={logo} alt="Logo" className='logo'/>
                        </Link>
                    </MenuFull>
                    </>
                )}
                
                {!isMobile ? (
                    // Render search box, logout button, and profile picture for desktop
                    <Box sx={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                        <SearchContainer>
                            <SearchIcon />
                            <input type="text" className="search-box" placeholder="Search for art"/>
                        </SearchContainer>
                        <Link to={'/login'} alt="Login Page" style={{textDecoration: "none"}}>
                            <Button variant="outlined" color="primary">
                                Log Out
                            </Button>
                        </Link>

                        <Link to={'/profile'} alt="Profile Page" style={{textDecoration: "none"}}>
                            <Button style={{width: "60px" , height: "60px"}}>
                                <ProfilePicture src={ProfilePic} alt="avatar"/>
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    // Render search box and profile picture with profile menu for mobile
                    <Box sx={{display: 'flex', alignItems: 'center', gap: "15px"}}>
                        <Link to={'/profile'} alt="Profile Page" style={{textDecoration: "none"}}>
                            <Button style={{width: "60px" , height: "60px"}}>
                                <ProfilePicture src={ProfilePic} alt="avatar"/>
                            </Button>
                        </Link>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            slotProps={{
                                paper: {
                                  sx: {
                                    color: 'red',
                                    width: '100%',
                                    maxWidth: '100%',
                                    left: '0px',
                                    right: '0px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  },
                                }
                              }}
                            marginThreshold={0}
                        >
                            <SearchContainer>
                                <SearchIcon />
                                <input type="text" className="search-box MenuMobile" placeholder="Search for art"/>
                            </SearchContainer>
                            <MenuItem onClick={handleMenuClose}>
                                <NavLink to={'/'} isSelected={location.pathname === '/'}>
                                    Home
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <NavLink to={'/explore'} isSelected={location.pathname === '/explore'}>
                                    Explore
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <NavLink to={'/wallet'} isSelected={location.pathname === '/wallet'}>
                                    Wallet
                                </NavLink>
                            </MenuItem>
                            <Link to={'/login'} alt="Login Page" style={{textDecoration: "none"}}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Button variant="outlined" color="primary">
                                        Log Out
                                    </Button>
                                </Box>
                            </Link>
                        </Menu>
                    </Box>
                )}
            </NavigationBar>
        </>
    )
}

export default NavBar
