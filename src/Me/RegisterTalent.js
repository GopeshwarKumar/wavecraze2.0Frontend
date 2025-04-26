import React, { useState } from 'react';
import Loader from './Loader';
import axios from 'axios'

const RegisterTalent=() => {
  const [name, setname] = useState()
  const [year, setyear] = useState()
  const [mob, setmob] = useState()
  const [email, setemail] = useState()
  const [roll, setroll] = useState()
  const [Department, setDepartment] = useState()
  const [event, setevent] = useState()
  const [message, setmessage] = useState()
  const [loaderform, setloaderform] = useState(false)

    const handleSubmit =async (e) => {
    e.preventDefault();
    setloaderform(true)

    if(mob.length>10){
      // alert("Invalid Mobile Number")
      setloaderform(false)
      setmessage("Invalid Mob No.")
      return
    }

   await axios.post("https://wavecraze.onrender.com/eventregister" ,{name,mob,email,roll,year,Department,event}).then(res =>{
      // console.log(res)
      if(res.status===200){
        setmessage(res.data.message)
      }
    }).catch(err =>{
      console.log("err",err)
    }).finally(final =>{
      setloaderform(false)
    })
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-blue-600 via-gray-900 bg-slate-800">
      <h2 className="text-2xl text-white font-bold text-center mt-[5%]">Register For <mark>Talent</mark> X</h2>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[70vw] md:w-[80vw] sm:w-[90vw] mb:w-[80vw] vmd:w-[95vw] grid sm:grid-cols-2 vmd:grid-cols-1  sm:gap-x-[30px]  p-8 rounded-lg shadow-lg bg-gradient-to-tr from-blue-600 via-gray-900"
      >

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-white">Year</label>
          <input
            type="number"
            name="number1"
            value={year}
            onChange={(e)=>{setyear(e.target.value)}}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="2023/2024"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-white">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mob}
            onChange={(e)=>{setmob(e.target.value)}}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Mob No."
            required
          />
        </div> 

        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-white">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="abcd@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Roll No.</label>
          <input
            type="text"
            value={roll}
            onChange={(e)=>{setroll(e.target.value)}}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="24X800YZ"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Department</label>
          <select onChange={(e)=>{setDepartment(e.target.value)}} className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Select Depart</option>
            <option value="Dancing">CSE</option>
            <option value="Singing">M & C</option>
            <option value="Poetry/Shayari">ECE</option>
            <option value="Instrument Cover">CH</option>
            <option value="Stand-up Comedy">CE</option>
            <option value="Other">BT</option>
            <option value="Other">MME</option>
            <option value="Other">CHEM</option>
            <option value="Other">OTHER</option>
          </select>
        </div>

        <div className="mb-4">
        <label htmlFor="event" className="block text-sm font-medium text-white">What would you like to perform ?</label>
          <select onChange={(e)=>{setevent(e.target.value)}} className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="">Select</option>
            <option value="Dancing">Dancing</option>
            <option value="Singing">Singing</option>
            <option value="Poetry/Shayari">Poetry/Shayari</option>
            <option value="Instrument Cover">Instrument Cover</option>
            <option value="Stand-up Comedy">Stand-up Comedy</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          {loaderform === false ? (<button
            type="submit"
            className="w-1/2 px-6 py-2 bg-indigo-500 hover:bg-white hover:text-blue-700  text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-150 hover:bg-opacity-70"
          >
            Register
          </button>) : (<Loader></Loader>)}
          <p className='text-green-500 text-center font-bold'>{message}</p>
        </div>
      </form>
    </div>
  );
};

export default RegisterTalent;
