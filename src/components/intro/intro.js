import React from 'react';
import './intro.css';
import bg from "../images/WhatsApp Image 2023-08-21 at 06.41.13.jpg";
import {Link} from 'react-scroll';
import { PiSuitcaseSimpleFill } from "react-icons/pi";
 

const Intro = () => {
  return (
      <div id="intro"> 
      <div className="introcontent">
      <span className="hello">Hello</span>
      <span className="introText">I'm {' '}<span className="introName">Channaveer</span><br/>Passionate Developer</span>
      <p className="introPara">I am a skilled Software developer and Tech enthusiast </p>
      <Link><button className="btn">
      <span className="icon"><PiSuitcaseSimpleFill/></span><span className="hire">Hire Me</span></button></Link>

      </div>
      <img src={bg} alt="profile" className="bg" />
      </div>
  )
}

export default Intro