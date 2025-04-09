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


  const targetDate = new Date("april 10, 2025 20:00:00").getTime();
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
      <motion.div viewport={{once:true}} whileInView={{height:0}} transition={{duration:1}} className='h-full w-full bg-slate-500 flex flex-col items-center'>

<div className='w-screen flex items-center justify-center'>
<motion.div initial={{ opacity: 0,translateY:40}} animate={{ opacity: 1,translateY:0}} transition={{ duration: 0.6 ,delay:1}} className='lg:w-[60vw] md:w-[80vw] sm:w-[45vw] mb:w-[50vw] vmd:w-[60vw] h-[30vh] flex sm:flex-row vmd:flex-col vmd:gap-y-1 sm:gap-y-0 items-center justify-center  '>
<img src='/assets/wave.png' className='w-full h-full sm:-translate-x-0 mb:-translate-x-8 vmd:-translate-x-3'/>
<img src='/assets/craze.png' className='w-full h-full sm:translate-x-0 mb:translate-x-8 vmd:translate-x-3'/>
</motion.div>
</div>

    <motion.div initial={{ opacity: 0,translateY:40}} animate={{ opacity: 1,translateY:0}} transition={{ duration: 0.6,delay:1.6 }} className='md:translate-y-[10px] sm:translate-y-[10px] mb:-translate-y-[30px] vmd:-translate-y-[20px]'>
      <p className='text-center lg:text-[18px] md:text-[18px] sm:text-[18px] text-slate-900 font-bold font-mono'>
      Brought to you by Radio Nitroz
      </p>
      <p className='text-center text-slate-900 font-bold font-mono'>The Festival Has Begun!</p>
    </motion.div>

    {timeLeft.days===0 && timeLeft.hours===0 && timeLeft.minutes===0 && timeLeft.seconds===0 ? 
    (<motion.div initial={{scale:0,translateY:-60}} whileInView={{scale:1,translateY:0}} transition={{delay:2.2,duration:0.4}} 
      className={`countdown sm:mt-[180px] mb:mt-[120px] vmd:mt-[50px] m-auto text-green-600 font-bold mb:text-[25px] vmd:text-[25px]`}>
        Event has started<br/>
        <Link to={"/events"} className='text-[17px] hover:underline underline-offset-4   text-red-600 flex items-center justify-center gap-4'>Register for events 
        <FaRegArrowAltCircleRight className='animate-ping'/>
        </Link>
        </motion.div>) :

    (<motion.div initial={{scale:0,translateY:-60}} whileInView={{scale:1,translateY:0}} transition={{delay:2,duration:0.4}} className={`countdown sm:mt-[100px] mb:mt-[70px] vmd:mt-[50px] m-auto flex flex-col `}>
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
</motion.div>
 
      </div>
      <AboutUs/>
      <Footer />
      </>
  );
}

export default Home;