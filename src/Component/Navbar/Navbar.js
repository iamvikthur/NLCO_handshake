import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className='title'>
        <img src={require('../../logo.svg')} alt='logo' />
      </Link>
      <ul className='Navigator'>
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
        <div className='social'>
          <Link>
            <IoLogoFacebook />
          </Link>
          <Link>
            <IoLogoTwitter />
          </Link>
          <Link>
            <RiInstagramFill />
          </Link>
          <Link>
            <FaLinkedinIn />
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar