// import React from 'react'
// import { FcContacts } from 'react-icons/fc'

// function TeamRN() {
//   return (
//     <>
//     <div className=''>
//         <h2>Final Yrs.</h2>
//         <div className='w-screen h-[30vh] bg-slate-700 flex items-center gap-4 overflow-x-scroll p-1'>
//             <div className=' bg-slate-100'>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <div className='relative bottom-0'>
//             <p className='vmd:text-[15px] sm:text-[18px] text-yellow-300 font-bold '>Gopeshwar</p>
//             <p className='text-[10px] text-yellow-300 font-bold '>Web Developer</p>
//             <p className='text-[10px] px-3 font-bold text-green-500'><FcContacts className='text-[20px]'/> 9897656775</p>
//             </div>
//             </div>
            
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//         </div>
//     </div>
//     <div>
//         <h2>3rd Yrs.</h2>
//         <div className='w-screen h-[30vh] bg-slate-700 flex items-center gap-4 overflow-x-scroll p-2'>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//         </div>
//     </div>
//     <div><h2>2nd Yrs.</h2>
//     <div className='w-screen h-[30vh] bg-slate-700 flex items-center gap-4 overflow-x-scroll p-2'>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//         </div>
//     </div>
//     <div>
//         <h2>1st Yrs.</h2>
//         <div className='w-screen h-[30vh] bg-slate-700 flex items-center gap-4 overflow-x-scroll p-2'>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//             <img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/><img src="/firstyearImages/gopeshwar.jpg" alt='sj' className='h-full w-full'/>
//         </div>
//     </div>
//     </>
//   )
// }

// export default TeamRN
import React from 'react';
import { motion } from 'framer-motion';
import { FcContacts } from 'react-icons/fc';

// Sample data
const people = [
  {
    id: 1,
    name: 'Gopeshwar kumar',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 234 567 8901',
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 987 654 3210',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 555 123 4567',
  },
  {
    id: 1,
    name: 'John Doe',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 234 567 8901',
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 987 654 3210',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 555 123 4567',
  },
  {
    id: 1,
    name: 'John Doe',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 234 567 8901',
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 987 654 3210',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    imageUrl: 'https://images.pexels.com/photos/27584944/pexels-photo-27584944/free-photo-of-fnnmadethis.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    mobile: '+1 555 123 4567',
  },
  // Add more people here
];

const FirstyearRN = () => {
  return (
    <>
    <div className="mainmain flex overflow-x-scroll gap-6 p-6 bg-gradient-to-tr from-blue-600 via-gray-900 to-slate-800">
      {people.map((person) => (
        <motion.div initial={{scale:0}} viewport={{ once: true }} whileInView={{scale:1}}
                  key={person.id}
                  className="abcdef w-40 p-4 bg-slate-950 rounded-lg text-center "
                >
                  <div className='w-32 h-32'>
                  <img src={person.imageUrl} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4  transition-all hover:skew-x-3 hover:skew-y-3"
                  />
                  </div>
                  <h3 className="text-xl text-white mt-[20px] font-semibold">{person.name}</h3>
                  <p className="text-yellow-500 ">
                    {person.mobile}</p>
                </motion.div>
      ))}
    </div>
    </>
  );
};

export default FirstyearRN;
