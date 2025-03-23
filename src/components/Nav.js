import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
  // // Define state
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [svgtranslateright, setsvgtranslateright] = useState()
  const [svgtranslateleft, setsvgtranslateleft] = useState()
  const [svgrotateUp, setsvgrotateUp] = useState()
  const [svgrotateDown, setsvgrotateDown] = useState()
  const [circleBGcOLOR, setcircleBGcOLOR] = useState("bg-gradient-to-tr from-slate-900 to-blue-600")

 function check(event){
      let x=event.clientX
      let y=event.clientY
      let windowWidth=window.innerWidth
      let windowheight=window.innerHeight
      if(x>windowWidth/2){
        setsvgtranslateright(10)
        setsvgtranslateleft(0)
        setcircleBGcOLOR("bg-gradient-to-br from-cyan-700 to-black")
 }
 console.log(circleBGcOLOR)
      if(x<windowWidth/2){
        setsvgtranslateleft(10)
        setsvgtranslateright(0)
      }
      if(y>windowheight/2){
        setsvgrotateUp(10)
        setsvgrotateDown(0)
        setcircleBGcOLOR("bg-gradient-to-tr from-green-500 to-blue-400")
 }
      if(y<windowheight/2){
        setsvgrotateDown(10)
        setsvgrotateUp(0)
        setcircleBGcOLOR("bg-gradient-to-tl from-rose-600 to-blue-400")
    }
}
  return (
    <>
    <nav className="flex justify-between items-center   p-4  shadow-md sticky top-0 backdrop-blur-[2px]">

{/* Logo */}
<div className="flex items-center rounded-full shadow-2xl hover:shadow-rose-600 duration-200">
    <img src="/assets/rnlogo.jpg" alt="Logo" className="rnlogonavbar sm:w-[50px] sm:h-[50px] vmd:h-[40px] vmd:w-[40px] rounded-full  hover:scale-125 duration-300 transition-all sm:translate-x-5 mb:translate-x-2 " />
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
  <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}>
  <Link to={"/response"} className="link4 no-underline text-white hover:text-blue-500 scale-50">Response</Link></motion.p>
  <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}>
  <Link to={"/aboutUs"} className="link4 no-underline text-white hover:text-blue-500 scale-50">About</Link></motion.p>
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
    <div onMouseMove={check} className={`aaaa w-screen h-1/2 ${circleBGcOLOR}  shadow-md  md:hidden transition-all flex flex-col items-center justify-center py-5 relative`}>
    <motion.div initial={{scale:0,opacity:0.5}} whileInView={{scale:1,opacity:1}} transition={{ duration: 1, }} className={`w-[300px] h-[300px] bg-gradient-to-tr from-white via-blue-600  to-cyan-800  rounded-full flex items-center justify-center`}>
      <svg width={"250px"} height={"250px"} className={`translate-x-${svgtranslateright} -translate-x-${svgtranslateleft} translate-y-${svgrotateUp} -translate-y-${svgrotateDown} transition-all duration-150`}>
        <path fill="rgb(56, 164, 179)" className='' id='curve' d="M 25 125 A 100 100 0 1 1 25 127"></path>
        {/* <circle cx="120" cy="90" r="5" fill="blue" />
        <circle cx="110" cy="90" r="5" fill="white" /> */}

        <text fill='white' className='font-bold text-white'>
          <textPath href='#curve'>
            <Link fill="white" to={"events"} className='text-[30px] text-white vmd:text-[25px]   mb:text-[25px]'>Events  </Link>
            <Link fill="yellow" to={"sponsers"} className='text-[30px] text-white vmd:text-[25px]  mb:text-[25px]     '> Sponsers   </Link>
            <Link fill="blue" to={"team"} className='text-[30px] text-blue-700 vmd:text-[25px]  mb:text-[25px]     '> Team </Link>
            {/* <Link fill="white" className='text-[30px] text-white vmd:text-[25px]  mb:text-[25px]     '> Register  </Link> */}
            <Link fill="white" className='text-[30px] text-white vmd:text-[25px]  mb:text-[25px]     '> Contact Us  </Link>
            <Link fill="blue" to={"response"} className='text-[30px] vmd:text-[25px]  mb:text-[25px]     '>Respose</Link>
            <Link fill="white" to={"aboutUs"} className='text-[30px] vmd:text-[25px]  mb:text-[25px]     '>  About</Link>
          </textPath>
        </text>
      </svg>
    {/* <motion.p animate={{opacity:1}} transition={{duration:1}}><Link  className="link1 no-underline text-white hover:text-blue-500 scale-50">Register</Link></motion.p>

<motion.p animate={{opacity:1}} transition={{duration:1}}>
 <Link  className="link3 no-underline text-white hover:text-blue-500 scale-50">About</Link>
 </motion.p>    
   
<motion.p animate={{}} transition={{duration:1}}><Link className="link4 no-underline text-white hover:text-blue-500 scale-50">Contact</Link></motion.p> */}
    </motion.div>
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