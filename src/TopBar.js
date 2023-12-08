import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './TopBar.css'; // Assuming you have a separate CSS file for styling
import body from './body'
import logoAia from "./images/logo-no-background.png";
import ContactUs from './contact_us';

const { Header } = Layout;

const TopBar = () => {
  // Define CSS styles for the top bar
  const topBarStyles = {
    height: '160px', // Increase the height by 40px
    display: 'flex',
    justifyContent: 'space-between', // Add space between logo and menu
    alignItems: 'center', // Center items vertically
    backgroundColor: 'transparent', // Set background color to none
    padding: '0 20px', // Add 20px padding to the left and right
  };

  // Define CSS styles for the logo
  const logoStyles = {
    filter: 'brightness(0) invert(0)', // Change the logo color to white
    width: '120px', // Increase the logo size by 10px
    height: 'auto', // Allow the height to adjust proportionally
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle menu item hover
  const handleMenuItemHover = (key) => {
    setHoveredItem(key);
  };

  // Handle menu item mouse leave
  const handleMenuItemLeave = () => {
    setHoveredItem(null);
  };

  // Define CSS styles for the menu items
  const menuItemStyles = {
    color: 'black', // Set menu item text color to white
    marginLeft: '20px', // Add spacing between menu items
    textDecoration: 'none', // Remove underline from links
    fontSize: '18px', // Set font size for menu items
    position: 'relative', // Position for reflection
    background: hoveredItem === null ? 'none' : 'inherit', // Disable background color change on hover
  };

  const reflectionStyles = {
    position: 'absolute',
    bottom: '-5px', // Adjust the distance below the menu item
    left: '0',
    width: '100%',
    height: '2px', // Adjust the height of the reflection
    background: 'rgba(255, 255, 255, 0.5)', // Adjust the reflection color and opacity
    transformOrigin: 'center top',
    transform: hoveredItem === null || hoveredItem !== 'reflection' ? 'scaleY(0)' : 'scaleY(1)', // Show the reflection when hovered on 'reflection'
    transition: 'transform 0.2s ease', // Add a transition for the reflection
  };

  return (
    <Header className="top-bar" style={topBarStyles}>
      <div className="logo">
        <img src={logoAia} alt="Website Logo" style={logoStyles} />
      </div>
      <div className="menu-container" style={{ flex: 1, display: 'flex', justifyContent: 'center', background: 'none' }}>
        <Menu theme="dark" mode="horizontal" selectedKeys={hoveredItem ? [hoveredItem] : []}>
          <Menu.Item
            key="home"
            onMouseEnter={() => handleMenuItemHover('home')}
            onMouseLeave={handleMenuItemLeave}
            style={menuItemStyles}
          >
            <a className='hoverable' href={body} style={{ color: 'black' }}>Home</a>
            <div className={hoveredItem === 'home' ? 'reflection' : ''} style={reflectionStyles}></div>
          </Menu.Item>
          <Menu.Item
            key="contact"
            onMouseEnter={() => handleMenuItemHover('contact')}
            onMouseLeave={handleMenuItemLeave}
            style={menuItemStyles}
          >
            <a className='hoverable' href= './contact_us.jsx' style={{ color: 'black' }}>Contact</a>
            <div className={hoveredItem === 'contact' ? 'reflection' : ''} style={reflectionStyles}></div>
          </Menu.Item>
          <Menu.Item
            key="youtube"
            onMouseEnter={() => handleMenuItemHover('youtube')}
            onMouseLeave={handleMenuItemLeave}
            style={menuItemStyles}
          >
            <a className='hoverable' href="#youtube" style={{ color: 'black' }}>YouTube</a>
            <div className={hoveredItem === 'youtube' ? 'reflection' : ''} style={reflectionStyles}></div>
          </Menu.Item>
          <Menu.Item
            key="patreon"
            onMouseEnter={() => handleMenuItemHover('patreon')}
            onMouseLeave={handleMenuItemLeave}
            style={menuItemStyles}
          >
            <a className='hoverable' href="#patreon" style={{ color: 'black' }}>Patreon</a>
            <div className={hoveredItem === 'patreon' ? 'reflection' : ''} style={reflectionStyles}></div>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  );
}

export default TopBar;
