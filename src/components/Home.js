import React, { useRef } from 'react';
import './Home.css';
import Nav from './Nav';
// import Footer from './Footer';
import WavecrazeSponser from './Me/WavecrazeSponser'
import Entertainment from './Me/Entertainment';
import Events from '../components/Events'

import FirstyearRN from './Me/FirstyearRN'
import SeconYearRN from './Me/SeconYearRN'
import ThirdyearRn from './Me/ThirdyearRn'
import FinalyearRN from './Me/FinalyearRN'
import Footer from './Me/Footer'

const Home = () => {  
  // const [moveahead, setmoveahead] = useState(10)
  const abb = useRef(null);

  // useEffect(() => {
  //   console.log(abb.current);
  //   const movenext=()=>{
  //     console.log("first")
  //   }
  //   setmoveahead("100vw")
  // }, []);
  return (
    <>
    <Nav/>
      <div ref={abb} className="home min-w-screen h-screen relative">
      {/* <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute translate-x-[${moveahead}] rotate-90`} />
      <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute`} />
      <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute`} /> 
      <div className='w-screen flex items-center justify-between bg-yellow-300 p-5 '>
        <button className='relative z-100 top-[50%] hover:text-green-500 transition-all'>Prev</button>
        <button  className='relative z-100 top-[50%] hover:text-green-500 transition-all'>Next</button>
      </div>
    </div>
      <div>*/}
      <svg className='w-screen bg-none md:translate-y-[50px] sm:translate-y-[20px] mb:translate-y-[30px] vmd:-translate-y-[20px]'>
    <text className='text-copy xl:text-[120px] lg:text-[120px] md:text-[90px] sm:text-[70px] mb:text-[55px] vmd:text-[35px] vmd:font-extralight font-bold tracking-widest mb:tracking-[10px] vmd:tracking-[10px] ' text-anchor="middle" x="50%" y="90%">Wave Craze</text>
    </svg>

    <div className='md:translate-y-[100px] sm:translate-y-[50px] mb:translate-y-[30px] vmd:-translate-y-[20px]'>
      <p className='text-center font-bold lg:text-[25px] md:text-[20px] sm:text-[18px] '>
      "Brought to you by Radio Nitroz"
      </p>
      <p className='text-center '>The Festival Has Begun!</p>
    </div>
        
      </div>
      <div>
         <Events/>
         <Entertainment/>
         <WavecrazeSponser/>
          <FinalyearRN/>
          <ThirdyearRn/>
          <SeconYearRN/>
          <FirstyearRN/>
         <Footer/>
      </div>
      </>
  );
}

export default Home;

// <div class="wrapper w-screen">
// 	<svg className='bg-slate-900'>
// 		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
//     Wave Craze
// 		</text>
// 	</svg>
// </div>



// <Nav />
//       <div className='w-screen h-screen flex items-center flex-col lg:mt-[15%] sm:mt-[15%] vmd:mt-[25%]'>

//         <h1 className='lg:text-[90px] sm:text-[60px] mb:text-[50px] vmd:text-[40px] font-extrabold sticky top-20'>Wave Craze</h1>
//         <div class="wrapper w-screen">
// 	<svg className='bg-slate-900'>
// 		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
//     Wave Craze
// 		</text>
// 	</svg>
// </div>

//         <h3 className='text-[25px] vmd:text-[25px] font-extrabold'>We Radionitroz</h3>
//         <p className='lg:px-40 sm:px-20 vmd:px-5 vmd:py-10 py-14 lg:text-[22px] mb:text-[20px]'>Srinagar: In a big feat for Jammu and Kashmir and India, the Indian Railways on Saturday started the trial run of the first Vande Bharat train from Shri Mata Vaishno Devi Railway Station Katra to Srinagar.
//         The train will also pass through Anji Khad Bridge which is India's first cable-stayed rail bridge. The train has been specially designed for seamless travel in the cold climate of Kashmir valley. </p>
//         </div>
