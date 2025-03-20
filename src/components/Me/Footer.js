import React from 'react'
import Contact from '../Contact';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <>
    <motion.h1 initial={{translateY:40}} whileInView={{translateY:0,opacity:1}} transition={{duration:0.4}} className='organisingcomitee opacity-5 p-3 m-3 rounded-s-full font-bold text-center sm:text-[50px] vmd:text-[30px] mb:text-[40px] hover:tracking-wider duration-200 transition-all shadow-2xl hover:shadow-rose-600'>Contact</motion.h1>
    <div className='w-screen h-[50vh] grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 bg-slate-100'>
    <div className='w-full h-full bg-[#FF4E01] bg-gradient-to-tl from-blue-600 via-gray-900 to-slate-800  flex flex-col items-center justify-center p-3 rounded-br-full'>
            <h3 className='font-extrabold lg:text-[30px] sm:text-[27px] mb:text-[22px] '>Thoughts about our Event ?</h3>
            <p className='font-bold'>Just ask… if you dare<mark>!</mark></p><br/>
            <form className='flex flex-col items-center justify-center gap-2'>
                <div>
                {/* <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>Name</p>
                <input type="text" placeholder='Enter your name' name="" id="" className='w outline-none bg-slate-900 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px] placeholder:px-2 placeholder:text-[15px]' /> */}
                <label for="inputField" class="block text-lg font-medium text-emerald-700 mb-2">Enter your Name</label>
                <input type="text" id="inputField" class="w-full p-3 border-b-4 rounded-lg outline-none hover:border-b-dotted hover:border-blue-400 text-gray-900 transition-all duration-100" placeholder="Type something..."/>
                </div>
                <div>
                {/* <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>E-mail</p>
                <input type="text" placeholder='Enter your E-mail' name="" id="" className='outline-none bg-slate-900 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px] placeholder:px-2 placeholder:text-[15px] ' /> */}
                <label for="inputField" class="block text-lg font-medium text-emerald-700 mb-2">Enter your Email</label>
                <input type="text" id="inputField" class="w-full p-3 border-b-4 rounded-lg outline-none hover:border-b-dotted hover:border-blue-400 text-gray-900 transition-all duration-100" placeholder="Type something..."/>
                </div>
                <div>
                {/* <p className='text-[15px] vmd:px-3 sm:p-0 sm:text-[20px]'>About</p>
                    <textarea type="text" placeholder='Write somethings related to fest' name="" id="" className='outline-none bg-slate-900 px-3 rounded-lg py-1 border-2 hover:border-white border-yellow-400 hover:opacity-90 focus:bg-slate-950 text-[#FF4E01] placeholder:text-[#FF4E01] sm:placeholder:text-[20px]  placeholder:text-[15px]' /> */}
                    <label for="inputField" class="text-emerald-600 block text-lg font-medium  mb-2">Text</label>
                    <textarea type="text" id="inputField" class="w-full p-3 border-b-4 rounded-lg outline-none hover:border-b-dotted hover:border-blue-400 text-black transition-all duration-100" placeholder="Type something..."/>
                </div>
                <button class="relative px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg overflow-hidden group">
        <span class="absolute inset-0 bg-blue-300 transition-all duration-500 ease-in-out group-hover:w-full w-0"></span>
        <span class="relative">Send</span>
    </button>
            </form>
        </div>

        <div className='w-full h-full bg-gradient-to-t from-sky-800  to-indigo-950 flex items-center justify-center rounded-ss-full'>

        <Contact/>
        </div>

    </div>
    </>
  )
}

export default Footer