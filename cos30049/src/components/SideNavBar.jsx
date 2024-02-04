import logo from '../assets/logo.png'
import homeIcon from '../assets/house.svg'
import shoppingIcon from '../assets/shopping-cart.svg'
import exploreIcon from '../assets/explore.svg'
import notificationIcon from '../assets/notification.svg'
import settingIcon from '../assets/setting.svg'

import styled from 'styled-components'

import { Link } from 'react-router-dom';

function SideNavBar(){
    const NavigationBar = styled.div `
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;

        align-items: center;
    `;
    
    const Menu = styled.ul `
        list-style: none;
        margin: 0;
        padding: 0;
    `;


    return (
        <>
            <NavigationBar>
                <img src={logo} alt="Logo" className='logo'/>
                <Menu>
                    <li><Link to={'/'}><img src={homeIcon} alt="Home" className='icon'/></Link></li>
                    <li><Link to={'/shopping'}><img src={shoppingIcon} alt="Shopping" className='icon'/></Link></li>
                    <li><Link to={'/explore'}><img src={exploreIcon} alt="Explore" className='icon'/></Link></li>
                    <li><Link to={'/notification'}><img src={notificationIcon} alt="Notifcation" className='icon'/></Link></li>
                    <li><Link to={'/setting'}><img src={settingIcon} alt="Setting" className='icon'/></Link></li>
                </Menu>
            </NavigationBar>
        </>
    );
}

export default SideNavBar