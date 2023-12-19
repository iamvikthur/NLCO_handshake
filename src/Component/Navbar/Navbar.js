import React, { useEffect, useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoCloseCircleOutline, IoLogoFacebook, IoLogoTwitter, IoMenu } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { PiArrowUpRightBold } from "react-icons/pi";
import { Box, Drawer, Divider, List, ListItem, IconButton } from '@mui/material';
import './Navbar.css'

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const [hoverStates, setHoverStates] = useState({
    about: false,
    events: false,
    speakers: false,
    whyAttend: false,
    contacts: false,
  });

  const socialIcons = [
    { icon: <IoLogoFacebook />, href: '#facebook' },
    { icon: <IoLogoTwitter />, href: '#twitter' },
    { icon: <RiInstagramFill />, href: '#instagram' },
    { icon: <FaLinkedinIn />, href: '#linkedin' },
  ];

  const menuItems = [
    { id: 'about', label: 'About', state: hoverStates.about, setState: setHoverStates },
    { id: 'events', label: 'Events', state: hoverStates.events, setState: setHoverStates },
    { id: 'speakers', label: 'Speakers', state: hoverStates.speakers, setState: setHoverStates },
    { id: 'whyAttend', label: 'Why Attend', state: hoverStates.whyAttend, setState: setHoverStates },
    { id: 'contacts', label: 'Contacts', state: hoverStates.contacts, setState: setHoverStates },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
         setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg pt-4 ${scrolling ? 'scrolled' : ''}`}>
      <div className='container' id='nav-a'>
        <div id='mobileNav'>
        <button className='d-lg-none'>
          <IoMenu onClick={() => setMobileMenu(true)} />
        </button>
        <Drawer open={MobileMenu} onClose={() => setMobileMenu(false)} anchor='top'>
          <Box
          sx={{ width: 100}}
          role='presentation'
          onClick={() => setMobileMenu(false)}
          onKeyDown={() => setMobileMenu(false)}
          >
          
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setMobileMenu(false)}
            sx={{ position: 'absolute', right: 0, top: 0 }}
          >
          <IoCloseCircleOutline />
          </IconButton>
            <List>
            {menuItems.map(item => (
              <ListItem key={item.id}>
                <a
                  href={`#${item.id}`}
                  onMouseEnter={() => item.setState(prevState => ({ ...prevState, [item.id]: true }))}
                  onMouseLeave={() => item.setState(prevState => ({ ...prevState, [item.id]: false }))}
                >
                  <PiArrowUpRightBold className={`${item.state ? '' : 'd-none'}`} id='icon' />
                  {item.label}
                </a>
              </ListItem>
            ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
        <a href='#home' className='title navbar-brand'>
          <img src={require('../../logo.svg')} alt='logo' />
        </a>
        </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navigator'>
            {menuItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onMouseEnter={() => item.setState(prevState => ({ ...prevState, [item.id]: true }))}
                  onMouseLeave={() => item.setState(prevState => ({ ...prevState, [item.id]: false }))}
                >
                  <PiArrowUpRightBold className={`${item.state ? '' : 'd-none'}`} id='icon' />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          </div>
          <div className='social d-none d-lg-block' id='nav-b'>
              <ul>
                {socialIcons.map((social, index) => (
                  <li key={index}>
                    <a href={`social.href`}>{social.icon}</a>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar