import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import './Timer.css';
import Nav from '../components/Nav'
import Footer from '../Me/Footer'

const Home = () => {  

  const abb = useRef(null);

  const targetDate = new Date("april 01, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the countdown when the target date is reached
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [targetDate]);

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
      <div ref={abb} className="home w-screen h-[90vh] relative">
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
    <text className='text-copy xl:text-[120px] lg:text-[120px] md:text-[90px] sm:text-[70px] mb:text-[65px] vmd:text-[35px] vmd:font-extralight font-bold tracking-widest mb:tracking-[10px] vmd:tracking-[10px] ' text-anchor="middle" x="50%" y="90%">Wave Craze</text>
    </svg>

    <div className='md:translate-y-[100px] sm:translate-y-[50px] mb:translate-y-[30px] vmd:-translate-y-[20px]'>
      <p className='text-center lg:text-[25px] md:text-[20px] sm:text-[18px] text-slate-900 font-bold'>
      Brought to you by Radio Nitroz
      </p>
      <p className='text-center text-slate-900 font-bold'>The Festival Has Begun!</p>
    </div>
    

  
    <div className="countdown sm:mt-[180px] mb:mt-[120px] vmd:mt-[50px] m-auto ">
      <h2 className='text-black font-bold sm:text-[40px] vmd:text-[35px] animate-pulse'>CountDown
      </h2>
      <div className="time-container">
        <div className="time-item">
          {timeLeft.days}
          <span>Days</span>
        </div>
        <div className="time-item ">
          {timeLeft.hours}
          <span>Hours</span>
        </div>
        <div className="time-item">
          {timeLeft.minutes}
          <span>Minutes</span>
        </div>
        <div className="time-item ">
          {timeLeft.seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
        
      </div>
      <Footer/>
      </>
  );
}

export default Home;