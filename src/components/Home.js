import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import './Home.css';
// import './Timer.css';
import Nav from '../components/Nav'
import AboutUs from '../Me/AboutUs'
import Footer from '../Me/Footer';
import { Link } from 'react-router-dom';

const Home = () => {


  const targetDate = new Date("april 9, 2025 20:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    state:true
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

    return () => clearInterval(interval) ; // Cleanup interval on unmount
  }, [targetDate]);

  if(timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 && timeLeft.seconds===0){
    // setcountdownhide(false)
  }
  // }
  return (
    <>
    <Nav/>
      <div  className="home w-screen h-[90vh] relative">
      {/* <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute translate-x-[${moveahead}] rotate-90`} />
      <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute`} />
      <img src='/assets/rcomedynight.jpg' alt='ff' className={`w-screen h-full absolute`} /> 
      <div className='w-screen flex items-center justify-between bg-yellow-300 p-5 '>
        <button className='relative z-100 top-[50%] hover:text-green-500 transition-all'>Prev</button>
        <button  className='relative z-100 top-[50%] hover:text-green-500 transition-all'>Next</button>
      </div>
    </div>
      <div>*/}
      <motion.div viewport={{once:true}} whileInView={{height:0}} transition={{duration:1}} className='h-full w-full bg-slate-500 absolute grid grid-cols-2 gap-1'>

        {/* <motion.div initial={{translateX:0}} whileInView={{translateX:-100}} transition={{duration:0.4}} className='bg-orange-500 h-full w-full'></motion.div>

        <motion.div initial={{translateY:0}} whileInView={{translateY:-1000}} transition={{duration:0.4}} className='bg-orange-500 h-full w-full'></motion.div>

        <motion.div whileInView={{translateX:30}} className='bg-orange-500 h-full w-full'></motion.div>

        <motion.div whileInView={{translateX:30}} className='bg-orange-500 h-full w-full'></motion.div> */}
</motion.div>
<motion.div initial={{ opacity: 0,translateY:40}} animate={{ opacity: 1,translateY:0}} transition={{ duration: 0.8,delay:1}} class="container mx-auto">
    <svg class="maintextSvg w-full h-72 block" viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%" class="text-white lg:text-[180px] md:text-[160px] sm:text-[170px] mb:text-[170px] vmd:text-[150px]">Wave Craze</text>
        </symbol>

        <g class="g-ants animate-wave">
            <use href="#s-text" class="text-copy"></use>
            <use href="#s-text" class="text-copy"></use>
            <use href="#s-text" class="text-copy"></use>
            <use href="#s-text" class="text-copy"></use>
            <use href="#s-text" class="text-copy"></use>
        </g>
    </svg>
    {/* <img src='/assets/wave craze 2,0 logo copy_enhanced.jpg' className='w-screen  '/> */}
</motion.div>
      {/* <svg className='w-screen  bg-none md:translate-y-[20px] sm:translate-y-[20px] mb:translate-y-[30px] vmd:-translate-y-[20px]'>
    <text className='ssss text-copy lg:text-[100px] md:text-[90px] sm:text-[70px] mb:text-[45px] vmd:text-[32px] vmd:font-light font-bold tracking-widest mb:tracking-[10px] vmd:tracking-[10px] ' text-anchor="middle" x="50%" y="90%">Wave Craze
    </text>
    </svg> */}

    <motion.div initial={{ opacity: 0,translateY:40}} animate={{ opacity: 1,translateY:0}} transition={{ duration: 0.6,delay:1.8 }} className='md:translate-y-[10px] sm:translate-y-[10px] mb:-translate-y-[30px] vmd:-translate-y-[20px]'>
      <p className='text-center lg:text-[18px] md:text-[18px] sm:text-[18px] text-slate-900 font-bold font-mono'>
      Brought to you by Radio Nitroz
      </p>
      <p className='text-center text-slate-900 font-bold font-mono'>The Festival Has Begun!</p>
    </motion.div>
    
    

  
    {timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 && timeLeft.seconds===0 ? 
    (<motion.div initial={{scale:0,translateY:-60}} whileInView={{scale:1,translateY:0}} transition={{delay:2.5,duration:0.4}} 
      className={`countdown sm:mt-[180px] mb:mt-[120px] vmd:mt-[50px] m-auto text-green-600 font-bold mb:text-[25px] vmd:text-[25px]`}>
        Event has started<br/>
        <Link to={"/events"} className='text-[17px] hover:underline underline-offset-4   text-red-600 flex items-center justify-center gap-4'>Register for events 
        <FaRegArrowAltCircleRight className='animate-ping'/>
        </Link>
        </motion.div>) :

    (<motion.div initial={{scale:0,translateY:-60}} whileInView={{scale:1,translateY:0}} transition={{delay:2,duration:0.4}} className={`countdown sm:mt-[180px] mb:mt-[70px] vmd:mt-[50px] m-auto flex flex-col `}>
    <h2 className=' text-black font-bold sm:text-[30px] mb:text-[25px] vmd:text-[20px] animate-pulse bg-cyan-300 tracking-wider '>Event will start
    </h2>
    <div className="flex items-center justify-center">
      <div className="time-item text-cyan-300">
        {timeLeft.days}
        <span>Days</span>
      </div>
      <div className="time-item text-cyan-300">
        {timeLeft.hours}
        <span>Hours</span>
      </div>
      <div className="time-item text-cyan-300">
        {timeLeft.minutes}
        <span>Minutes</span>
      </div>
      <div className="time-item text-cyan-300">
        {timeLeft.seconds}
        <span>Seconds</span>
      </div>
    </div>
    <Link to={"/events"} className='text-[17px] hover:underline underline-offset-4   text-green-600 font-bold flex items-center justify-center gap-4'>Register for events 
        <FaRegArrowAltCircleRight className='animate-ping'/>
        </Link>
  </motion.div>) }
      </div>
      <AboutUs/>
      <Footer />
      </>
  );
}

export default Home;