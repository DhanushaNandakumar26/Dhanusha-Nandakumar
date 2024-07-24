import React from 'react';
import './Banner.css';
import ladyPic from '../../assets/lady-pic1.jpeg';

const Banner = () => {
  return (
    <div><section className="banner">
    <div className='contentSection'>
    <div className="content">
       {/* <h1>About</h1> */}
       <div className='aboutSection'>
     <h1>Dhanusha Nandakumar</h1>
     <span>Software Engineer</span>
    </div>
       {/* <p>Scroll down to see more</p>
       <Link to="next-section" smooth={true} duration={1000} className="scroll-down">
         ↓
       </Link> */}
     </div>
     <div className='description'>
         <span>
         Hello! I'm Dhanusha Nandakumar, a passionate and dedicated software developer with over 2+ years of experience in creating dynamic, responsive, and user-friendly web applications. My journey in software development has been fueled by a deep love for technology and a constant desire to learn and grow in this ever-evolving field.
         <br/> <br/>
         After completing my masters in computer applications, I embarked on my professional journey as a software developer. Over the past two years, I've had the privilege of working with talented teams and contributing to various exciting projects. Each project has provided me with invaluable learning experiences and the opportunity to apply my skills in real-world scenarios.

I am continuously inspired by the possibilities that technology offers to solve problems and improve lives.
         </span>
     </div>
    </div>
    
     <div className='shape' />
     <img src={ladyPic} alt="Avatar" className="avatar" />
   </section></div>
  )
}

export default Banner