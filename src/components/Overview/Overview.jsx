import React from 'react';
import './Overview.css';
import ladyPic from '../../assets/lady-pic2.jpg';
import ProfessionalBackground from '../ProfessionalBackground/ProfessionalBackground';

const Overview = () => {
  return (
    <div className='overviewMain'> 
       <div className='overviewLeftContainer'>
        <ProfessionalBackground/>
        {/* <h1>Professional Background</h1>
        Front-End Development: Creating aesthetically pleasing and highly functional interfaces using HTML, CSS, JavaScript, and React.js.
Back-End Development: Building robust and scalable server-side applications with Node.js, Express, and databases like MongoDB and MySQL.
State Management: Utilizing Redux and Redux Toolkit to manage complex application states, ensuring a seamless user experience.
Version Control: Mastering Git and GitHub for efficient project management and collaboration.
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span> */}
       </div>
       <section id="overviewRightContainer" className="overviewRightContainer">
    <div className='overViewImageContainer'>
        <img src={ladyPic} alt=''/>
    </div>
  </section>
  
  </div>
  )
}

export default Overview