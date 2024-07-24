import React from 'react';
import { Link } from 'react-scroll';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Overview from '../../components/Overview/Overview';
// import { ProfilePic } from '../../assets/dhanusha.jpg'

const Homepage = () => {
  return (
    <div>
         <Navbar />
        <div className='contentSectionContainer'>
        <Banner/>
        <Overview/>
        </div>
    </div>
  );
};

export default Homepage;
