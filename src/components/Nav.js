import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  // // Define state
  const [isOpen, setIsOpen] = useState(false)
  // const [translateNav, settranslateNav] = useState("-translate-y-[450px]")

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
    <nav className="flex justify-between items-center p-4  shadow-md sticky top-0 backdrop-blur-[2px]">

{/* Logo */}
<div className="flex items-center rounded-full shadow-2xl hover:shadow-rose-600 duration-200">
    <img src="/assets/rnlogo.jpg" alt="Logo" className="rnlogonavbar sm:w-[70px] sm:h-[70px] vmd:h-[40px] vmd:w-[40px] rounded-full  hover:scale-125 duration-300 transition-all sm:translate-x-5 mb:translate-x-2 " />
    {/* <h1 className='text-pink-600 font-extrabold text-4xl'>R<sup className='font-bold'>N</sup></h1> */}
  </div>


  {/* Links big screen*/}
  <div className="hidden md:flex space-x-4 md:space-x-6 shadow-2xl hover:shadow-rose-600 duration-200">
    <motion.p animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}>
    <Link to={"/events"}  className="link1 no-underline text-white hover:text-blue-500 scale-50">Events</Link></motion.p>

   <motion.p animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}>
    <Link to={"/sponsers"} className="link3 no-underline text-white hover:text-blue-500 scale-50">Sponsers</Link>
    </motion.p>    
      
  <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}>
  <Link to={"/team"} className="link4 no-underline text-white hover:text-blue-500 scale-50">Team</Link></motion.p>
  {/* <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}>
  <Link to={"/contact"} className="link4 no-underline text-white hover:text-blue-500 scale-50">Contact Us</Link></motion.p> */}
  <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}>
  <Link to={"/register"} className="link4 no-underline text-white hover:text-blue-500 scale-50">Register</Link></motion.p>
  </div>

  {/* Mobile Menu Button */}
  <motion.div className="md:hidden shadow-2xl hover:shadow-rose-600 duration-200">
    <button onClick={toggleMenu} className="text-white text-[30px] hover:text-blue-500">
      {isOpen ? '✖' : '☰'}
    </button>
  </motion.div>

  
</nav>
{/* Mobile Links  */}
{isOpen && (
    <div className={`w-screen h-1/2 md:hidden transition-all flex flex-col items-center justify-center gap-[10px] py-5 rounded-l-full rounded-r-full border-t-2 border-red-700`}>
      {/* <svg width={"250px"} height={"250px"} className={``}>
        <path fill="rgb(56, 164, 179)" className='' id='curve' d="M 25 125 A 80 80 0 1 1 25 127"></path>
        <text fill='blue' className='font-bold text-white'>
          <textPath href='#curve'>
            
          </textPath>
        </text>
      </svg> */}
      <motion.p viewport={{once:true}} whileInView={{translateY:0,scale:1,opacity:1}} initial={{scale:0,translateY:20,opacity:0}} transition={{delay:0,duration:0.3}}><Link to={"/events"} className='text-white vmd:text-[15px] mb:text-[18px] hover:text-blue-700 transition-all'>Events</Link></motion.p>
      <motion.p viewport={{once:true}} whileInView={{translateY:0,scale:1,opacity:1}} initial={{scale:0,translateY:20,opacity:0}} transition={{delay:0.3,duration:0.3}}><Link to={"/sponsers"} className='text-white vmd:text-[15px] mb:text-[18px] hover:text-blue-700 transition-all'>Sponsers   </Link></motion.p>
      <motion.p viewport={{once:true}} whileInView={{translateY:0,scale:1,opacity:1}} initial={{scale:0,translateY:20,opacity:0}} transition={{delay:0.5,duration:0.3}}><Link to={"/team"}className='text-white vmd:text-[15px] mb:text-[18px] hover:text-blue-700 transition-all'>Team </Link></motion.p>
      <motion.p viewport={{once:true}} whileInView={{translateY:0,scale:1,opacity:1}} initial={{scale:0,translateY:20,opacity:0}} transition={{delay:0.7,duration:0.3}}><Link to={"/contact"} className='text-white vmd:text-[15px] mb:text-[18px] hover:text-blue-700 transition-all'>Respose</Link></motion.p>
      <motion.p whileInView={{translateY:0,scale:1,opacity:1}} initial={{scale:0,translateY:20,opacity:0}} transition={{delay:0.9,duration:0.3}}><Link to={"/events"} className='text-white vmd:text-[15px] mb:text-[18px] hover:text-blue-700 transition-all'>Register</Link></motion.p>
    </div>
    )}
    </>
  );
};

export default Nav;

// <div className="navbar sticky top-0">
//       <div className="nav">RADIO NITROZ</div>
//       <div className="hamburger" onClick={toggleMenu}>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//         <div className={`bar ${isOpen ? 'open' : ''}`}></div>
//       </div>
//       <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//         <li><Link to="/">HOME</Link></li>
//         <li><Link to="/">EVENTS</Link></li>
//       </ul>
//     </div>