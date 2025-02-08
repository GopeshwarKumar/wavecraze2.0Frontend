import React from 'react';
import {motion} from 'framer-motion'

function WavCrazeSponser() {
  return (
    <>
    <h1 className='sponserText text-center lg:text-[60px] vmd:text-[40px] font-bold vmd:leading-[35px]  p-10 '>Event's Sponser</h1>
      <div className='w-screen gap-7 grid lg:grid-cols-4 sm:grid-cols-2 mb:grid-cols-1 vmd:grid-cols-1 grid-cols-1 p-5'>
        <motion.div initial={{translateX:-150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/Adda1658929478.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 '/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3hover:opacity-75 duration-100'>
            <img src='/cropped-MENTORx-logo-black-with-white-tag-line-Round-small-2.jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 '/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/doorstep.jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/images (1).jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/images (2).jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/images (3).jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        {/* <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='bg-red-500 overflow-hidden'>
            <img src='/images (4).jpg' alt='wavecraze' className='h-full w-full hover:scale-110 duration-75'/>
        </motion.div> */}
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0021[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0022[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0023[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0024[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0025[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
        <img src='/IMG-20250117-WA0027[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0027[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0028[1]7.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0029[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0030[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 '/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0031[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IMG-20250117-WA0033[1].jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/img456.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        {/* <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IndianOil-Preview.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div> */}
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/InGroupCreative_mainlogo_CMYK.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/lgcybaw.jpg-300x300.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{translateX:150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/IndianOil-Preview.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75 rounded-full'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{translateX:-150}} whileInView={{translateX:0}} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/Screenshot_2024-06-18_at_12.06.05_PM-removebg-preview.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/state-bank-india-sbi-indian-260nw-2359928535.jpg'  alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/techBrain.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}} className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/unnamed.png' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
        <motion.div initial={{scale:0}} whileInView={{scale:1 }} transition={{duration:0.5}}  className='laida overflow-hidden flex items-center justify-center flex-col border-b-4 border-b-yellow-300 p-3 hover:opacity-75 duration-100'>
            <img src='/Unstop-Logo.jpg' alt='wavecraze' className='h-[50%] w-[50%] hover:scale-110 duration-75'/><br/>
            <p className='lg:p-10 sm:p-5 mb:p-10 vmd:p-5 sm:text-yellow-200 mb:text-yellow-200 p-10 sm:text-[15px] vmd:text-[13px]'>lorem I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
        </motion.div>
      </div>
    </>
  );
}

export default WavCrazeSponser;
