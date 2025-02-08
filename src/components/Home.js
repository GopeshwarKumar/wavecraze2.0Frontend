import React from 'react';
import './Home.css';
import Nav from './Nav';
import Event from './Events';
import Footer from './Footer';
import WavecrazeSponser from './Me/WavecrazeSponser'
import Entertainment from './Me/Entertainment';

import FirstyearRN from './Me/FinalyearRN'
import SeconYearRN from './Me/SeconYearRN'
import ThirdyearRn from './Me/ThirdyearRn'
import FinalyearRN from './Me/FinalyearRN'

const Home = () => {  
  return (
    <div>
      <div className="home">
        <Nav />
        <div className='w-screen h-screen flex items-center flex-col lg:mt-[5%] sm:mt-[15%] vmd:mt-[25%]'>
        <h1 className='lg:text-[90px] sm:text-[60px] mb:text-[50px] vmd:text-[40px] font-extrabold sticky top-20'>Wave Craze</h1>
        <h3 className='text-[25px] vmd:text-[25px] font-extrabold'>We Radionitroz</h3>
        <p className='lg:px-40 sm:px-20 vmd:px-5 vmd:py-10 py-14 lg:text-[22px] mb:text-[20px]'>Srinagar: In a big feat for Jammu and Kashmir and India, the Indian Railways on Saturday started the trial run of the first Vande Bharat train from Shri Mata Vaishno Devi Railway Station Katra to Srinagar.
        The train will also pass through Anji Khad Bridge which is India's first cable-stayed rail bridge. The train has been specially designed for seamless travel in the cold climate of Kashmir valley. </p>
        </div>
      </div>
      <div>
        <Event /> 
      </div>
      <div>
         <Entertainment/>
         <WavecrazeSponser/>
         <>
         <h1 className='organisingcomitee mt-[50px] font-bold text-center sm:text-[50px] vmd:text-[30px] mb:text-[40px]'>Organising Comitee</h1>
          <FinalyearRN/>
          <ThirdyearRn/>
          <SeconYearRN/>
          <FirstyearRN/>
         </>
         <Footer/>
      </div>
    </div>
  );
}

export default Home;
