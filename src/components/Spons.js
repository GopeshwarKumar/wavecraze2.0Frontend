import React from 'react';
import {motion} from 'framer-motion'

const Spons = () => {  
  return (/*
    <>
      <div className='w-screen gap-2 grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-4'>
        <motion.div initial={{translateX:-150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/Adda1658929478.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/cropped-MENTORx-logo-black-with-white-tag-line-Round-small-2.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/doorstep.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/images (1).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/images (2).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/images (3).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/images (4).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0021[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0022[1].jpg' alt='wavecraze'  className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0023[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0024[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0025[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0026[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0027[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0028[1]7.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0029[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0030[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0031[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IMG-20250117-WA0033[1].jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/img456.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75' />
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/IndianOil-Preview.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/InGroupCreative_mainlogo_CMYK.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/lgcybaw.jpg-300x300.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/revup (1).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{translateX:-150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/Screenshot_2024-06-18_at_12.06.05_PM-removebg-preview.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/state-bank-india-sbi-indian-260nw-2359928535.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/techBrain.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/unnamed.png' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500'>
            <img src='/Unstop-Logo.jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div>
      </div>
    </>
  */
 <div></div>);
}

export default Spons;

