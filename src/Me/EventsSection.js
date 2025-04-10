import React from 'react'
import {motion} from 'framer-motion'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom'

function EventsSection() {
  return (
    <>
    {/* <Outlet/> #F5deb3 */}
    <div className='bg-black'>
    <motion.h1 initial={{translateY:30}} whileInView={{translateY:0,opacity:1}} transition={{duration:0.4}} className='sponserText text-center text-[40px] font-bold vmd:leading-[35px]  p-5 hover:tracking-wider duration-200 transition-all shadow-2xl hover:shadow-rose-600'>Events</motion.h1>
    </div>

    <div className='main bg-gradient-to-br from-cyan-600 t overflow-hidden'>

    {/* <div className="first flex flex-col md:flex-row sm:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 sm:space-x-6 py-10 px-6">
  
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 ">
    <img
      src="/assets/dj-night.jpeg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover vmd:h-[40vh]"
    />
  </motion.div>

  
  <motion.div viewport={{once:true}} initial={{translateX:200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}}  className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4">DJ Night
    </h1>
    <p className="text-lg text-slate-400 leading-relaxed">
      Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!
    </p>
    <p className='font-bold text-slate-400 text-center'><mark> Time </mark> : 8:00 PM - 12:00 AM</p>
    <p className='font-bold text-slate-400 text-center -translate-x-[5px]'><mark>Venue </mark> : Main Auditorium</p>
  </motion.div>
   </div> */}


<div className="first flex flex-col sm:flex-row-reverse items-center justify-between gap-3 space-y-6 md:space-y-0 md:space-x-6 sm:space-x-6 py-10 px-6">
  {/* Image Section */}
  <motion.div viewport={{once:true}} initial={{translateX:200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2">
    <img
      src="/assets/GLAM IT UP NEW.png"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </motion.div>
    {/* Text Section */}
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4 text-center">Glam It Up</h1>
    <p className="text-lg text-slate-400 leading-relaxed">Glamour is a gift, and when combined with creativity and artistic expression, it transforms into a breathtaking spectacle.<br/>
    Presenting GLAM IT UP—the show where fashion meets flair, and confidence commands the spotlight. From the runway to the roaring crowd, every stride tells a story, weaving together style, elegance, and individuality.
</p><br/>
    <p className='font-bold text-slate-400 text-center'><mark> Time </mark> : 5:30 PM 10/04/25</p>
    <p className='font-bold text-slate-400 text-center -translate-x-[5px]'><mark>Venue </mark> : New Auditorium</p>
    <p className='text-center flex items-center justify-center gap-x-2 text-green-500'>
    <Link to={"/glamItUpRegister"} className='font-bold no-underline hover:underline underline-offset-4 hover:text-blue-600 transition-all duration-100'>Register for Glam It Up</Link>
    <FaRegArrowAltCircleRight className='animate-ping'/>
    </p>
  </motion.div>

</div>

<div className="first flex flex-col md:flex-row sm:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 sm:space-x-6 py-10 px-6">
  {/* Image Section */}
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2">
    <img
      src="/assets/talent4.jpg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </motion.div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 md:text-left">
    <motion.h1 initial={{translateY:30 , opacity:0.2}} whileInView={{translateY:0 , opacity:1}} transition={{duration:0.}} className="text-4xl font-semibold text-white mb-4 text-center">Talent X</motion.h1>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} className="text-lg leading-relaxed text-slate-400">Talent is just a word until it shines, and we can’t wait to see you taking the spotlight!
      <br/>
      We, the Radio Nitroz team, are thrilled to present Talent X—a stage where your skills in singing, dancing, poetry comes alive. Whether it’s your voice, your moves, your words, or your style, this is your moment to shine!
    </motion.p><br/>
    {/* <div className='flex flex-col '> */}
    <p className='font-bold text-slate-400 text-center'><mark> Time </mark> : 03:00 PM 10/04/24</p>
    <p className='font-bold text-slate-400 text-center -translate-x-[5px]'><mark>Venue </mark> : New Auditorium</p>
    <p className='text-center flex items-center justify-center gap-x-2 text-green-500'>
    <Link to={"/talentXregister"} className='font-bold no-underline hover:underline underline-offset-4  hover:text-blue-600 transition-all duration-100'>Register for Talent X</Link>
    <FaRegArrowAltCircleRight className='animate-ping'/>
    </p>
    {/* </div> */}
  </div>
</div>

<div className="first flex flex-col sm:flex-row-reverse items-center justify-between space-y-6 md:space-y-0 md:space-x-6 sm:space-x-6 py-10 px-6">

  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img
      src="/assets/comedynight.jpeg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </div>
   {/* Text Section */}
   <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4 text-center">
    Comedy Night</h1>
    <p className="text-lg text-slate-400 leading-relaxed">Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!</p>
    <p className='font-bold text-slate-400 text-center'><mark> Time </mark> : 8:00 PM - 12:00 AM</p>
    <p className='font-bold text-slate-400 text-center -translate-x-[5px]'><mark>Venue </mark> : New Auditorium</p>
    </motion.div>
</div>

<div className="first flex flex-col md:flex-row sm:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 sm:space-x-6 py-10 px-6">
  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img
      src="/assets/moviemystic.jpg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </div>

  {/* Text Section */}
  <motion.div viewport={{once:true}} initial={{translateY:60 , opacity:0.2}} whileInView={{translateY:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4 text-center">
    Movie Mystic</h1>
    <p className="text-lg text-slate-400 leading-relaxed">Movie Mystics  is your ticket to a lineup of amazing films that’ll stir your soul, spark your imagination, and leave you buzzing for more. From edge-of-your-seat thrillers to heartwarming classics, we’ve got something for every movie lover. So grab your squad and feel the vibe, only at Movie Mystics!</p>
    <p className='font-bold text-slate-400 text-center'><mark> Time </mark> : 6:00 PM 10/04/25</p>
    <p className='font-bold text-slate-400 text-center -translate-x-[5px]'><mark>Venue </mark> : New Auditorium</p>
    </motion.div>
</div>

    </div>
    </>
  )
}

export default EventsSection
