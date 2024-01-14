import logo from '../assets/nifty-logo/svg/logo-no-background.svg'
import homeIcon from '../assets/icon/house.svg'
import shoppingIcon from '../assets/icon/shopping-cart.svg'
import exploreIcon from '../assets/icon/explore.svg'
import notificationIcon from '../assets/icon/notification.svg'
import settingIcon from '../assets/icon/setting.svg'

import styled from 'styled-components'

import { Link } from 'react-router-dom';

function SideNavBar(){
    const NavigationBar = styled.div `
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .logo{
            margin-top: 20px;
        }
    `;
    
    const Menu = styled.ul `
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 40px;
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