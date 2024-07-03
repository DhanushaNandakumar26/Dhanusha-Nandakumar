import React from 'react';
import './Navbar.css';
import NavbarLogo from '../../assets/portfolio-logo.png';
import backgroundImage from "../../assets/bg.jpg"

const Navbar = () => {
  return (
  //   <div className="navbar">
  //   <div className="navbar-logo"></div>
  //   <div className="navbar-menu">
    //  <ul className="navbar-list">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Resume</li>
    //   </ul>
  //   </div>
  // </div>
  <div>
    <nav>
  <a href="#">No mask</a>
  <ul className="navbar-list">
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
      </ul>
  {/* <ul class="list">
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Contact</a></li>
  </ul> */}
  {/* <button class="search">Search</button>
  <button class="menu">Menu</button> */}
</nav>
<img src={backgroundImage} alt=""></img>
  </div>
  )
}

export default Navbar