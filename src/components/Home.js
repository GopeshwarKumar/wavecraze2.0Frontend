import React from 'react';
import './Home.css';
import Nav from './Nav';
import Event from './Events';
import Footer from './Footer';
import WavecrazeSponser from './Me/WavecrazeSponser'
import Entertainment from './Me/Entertainment';

const Home = () => {  
  return (
    <div>
      <div className="home">
        <Nav />
        <div className='head'>
        <h1>Wave craze</h1>
        <h3>we radionitroz</h3>
        <a>Srinagar: In a big feat for Jammu and Kashmir and India, the Indian Railways on Saturday started the trial run of the first Vande Bharat train from Shri Mata Vaishno Devi Railway Station Katra to Srinagar.
        The train will also pass through Anji Khad Bridge which is India's first cable-stayed rail bridge. The train has been specially designed for seamless travel in the cold climate of Kashmir valley. </a>
        </div>
      </div>
      <div>
        <Event /> 
      </div>
      <div>
         <Entertainment/>
         <WavecrazeSponser/>
         <Footer/>
      </div>
    </div>
  );
}

export default Home;
