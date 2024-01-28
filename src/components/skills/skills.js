import React from 'react';
import './skills.css';
import cp from '../images/competitive_coding_logo_by_dollarakshay_dc5ov3v-fullview-1692604700.png';
import web from '../images/Get-the-Most-Fancied-Web-Development-Services-min-scaled-2877767772.jpg';

const Skills = () => {
  return (
    <div className="skills">
        <span className="skillTitle">what I do</span>
        <span className="skillDesc"> I am an undergraduate student pursuing B.Tech in Computer science and engineering in PES University, Bangalore. A technology enthusiast and growing developer.

I would like to acquire a great opportunity and to be a part of innovation and creation!!!</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={cp} alt="cp" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Competitive Programmer</h2>
            <p>Passionate coder thriving in the dynamic realm of competitive programming, adept at unraveling complex algorithmic puzzles with precision and efficiency</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={web} alt="web" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Web developer</h2>
            <p>Dedicated web developer with a flair for crafting seamless digital experiences through innovative coding and design </p>
        </div>
    </div>
</div>
    </div>
  )
}

export default Skills