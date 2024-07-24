import React from 'react';
import './Experience.css';
import lady from '../../assets/lady-pic4.jpg'
import ExperienceSidebar from '../../components/ExperienceSidebar/ExperienceSidebar';

const Experience = () => {
  return (
    <div className='experienceMain'>
        <div className='experienceLeftContainer'>
            <img src={lady} alt='' className='' />
        </div>
        <div className='experienceRightContainer'>
        <ExperienceSidebar/>
        </div>
    </div>
  )
}

export default Experience