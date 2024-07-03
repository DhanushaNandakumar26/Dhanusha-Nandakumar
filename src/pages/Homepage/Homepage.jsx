import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import WelcomeText from '../../components/WelcomeText/WelcomeText'
import ImageBanner from '../../components/ImageBanner/ImageBanner'
import './HomePage.css'
import BannerSection from '../../components/BannerSection/BannerSection'

const Homepage = () => {
  return (
    <div>
       <div className='HomePageTopSection'>
       <Navbar/>
       <div className='Banner'>
          <BannerSection/>
       </div>
       {/* <div className='BannerSection'>
     <WelcomeText/>
       <ImageBanner/>

     </div> */}
       </div>
    
    </div>
  )
}

export default Homepage