import React from 'react'
import {motion} from 'framer-motion'

function EventsSection() {
  return (
    <>
    <div className='bg-black'>
    <motion.h1 initial={{translateY:30}} whileInView={{translateY:0,opacity:1}} transition={{duration:0.4}} className='sponserText text-center text-[40px] font-bold vmd:leading-[35px]  p-5 hover:tracking-wider duration-200 transition-all shadow-2xl hover:shadow-rose-600'>Entertainment</motion.h1>
    </div>

    <div className='main bg-gradient-to-br from-cyan-600 t overflow-hidden'>

    <div className="first flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 py-10 px-6">
  {/* Image Section */}
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 ">
    <img
      src="/assets/dj-night.jpeg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover vmd:h-[40vh]"
    />
  </motion.div>

  {/* Text Section */}
  <motion.div viewport={{once:true}} initial={{translateX:200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}}  className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4">DJ Night
    </h1>
    <p className="text-lg text-slate-400 leading-relaxed">
      Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!
    </p>
  </motion.div>
</div>


<div className="second flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 py-10 px-6">
    {/* Text Section */}
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4 text-center">Glam It Up</h1>
    <p className="text-lg text-slate-400 leading-relaxed">Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!</p>
  </motion.div>

  {/* Image Section */}
  <motion.div viewport={{once:true}} initial={{translateX:200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2">
    <img
      src="/assets/glam.jpg"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </motion.div>
</div>

<div className="third flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 py-10 px-6">
  {/* Image Section */}
  <motion.div viewport={{once:true}} initial={{translateX:-200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2">
    <img
      src="/assets/talentx.avif"
      alt="DJ Night"
      loading="lazy"
      className="w-full rounded-lg shadow-lg object-cover"
    />
  </motion.div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <motion.h1 initial={{translateY:20 , opacity:0.2}} whileInView={{translateY:0 , opacity:1}} transition={{duration:0.5}} className="text-4xl font-semibold text-white mb-4 text-center">Talent X</motion.h1>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}} className="text-lg leading-relaxed text-slate-400">Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!</motion.p>
  </div>
</div>

<div className="forth flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6 py-10 px-6">
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
  <motion.div viewport={{once:true}} initial={{translateX:200 , opacity:0.2}} whileInView={{translateX:0 , opacity:1}} transition={{duration:0.5}} className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-4xl font-semibold text-white mb-4 text-center">
    Comedy Night</h1>
    <p className="text-lg text-slate-400 leading-relaxed">Get ready for an electrifying experience with live bands and performances from Radio NITroz artists. Feel the beats and groove all night long!</p>
  </motion.div>
</div>

    </div>
    </>
  )
}

export default EventsSection