import React from 'react';
import './navbar.css';
import logo from "../images/vecteezy_uc-logo-monogram-design-template_16153530.jpg";
import {Link} from 'react-scroll';
// import contactImg from '../images/colorful-chat-logo-template-creative-chat-logo-design-vector.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" />
        <div className="desktopMenu">
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">About</Link>
          <Link className="desktopMenuListItem">Portfolio</Link>
          <Link className="desktopMenuListItem">Clients</Link>

        </div>
        <button className="desktopMenuBtn"><span id="contact">
            Contact Me
            </span>
        </button>
    </nav>
  )
}

export default Navbar