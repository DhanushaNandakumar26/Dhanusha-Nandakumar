import React from 'react';
import { Link } from 'react-scroll';
import './Homepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Overview from '../../components/Overview/Overview';
// import { ProfilePic } from '../../assets/dhanusha.jpg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
      };
      
  return (
    <div>
         <Navbar />
        {/* <div className='contentSectionContainer'>
        <Banner/>
        <Overview/>
        </div> */}
         <div className='contentSectionContainer'>
     <Slider {...settings}>
        <div>
          <Banner/>
        </div>
        <div>
          <Overview/>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Homepage;
