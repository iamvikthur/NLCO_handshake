import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='title'>
        <img alt='logo' />
      </Link>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/events'>Events</Link>
        </li>
        <li>
          <Link to='speakers'>Speakers</Link>
        </li>
        <li>
          <Link to='/whyAttend'>Why Attend</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link>
            <IoLogoFacebook />
          </Link>
        </li>
        <li>
          <Link>
            <IoLogoTwitter />
          </Link>
        </li>
        <li>
          <Link>
            <IoLogoInstagram />
          </Link>
        </li>
        <li>
          <Link>
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar