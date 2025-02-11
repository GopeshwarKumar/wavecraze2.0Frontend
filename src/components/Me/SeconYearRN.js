import React from 'react';
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
<<<<<<< HEAD
    
=======
>>>>>>> 2d6dcdcc65c32e472f1831c3783c12e19173bfb3
    <div className="mainmain bg-slate-800 flex overflow-x-scroll gap-6 p-6">
      {people.map((person) => (
        <div
          key={person.id}
          className="abcdef w-40 p-4 border border-gray-200 rounded-lg text-center shadow-md "
        >
          <div className='w-32 h-32'>
          <img src={person.imageUrl} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4  transition-all hover:skew-x-3 hover:skew-y-3"
          />
          </div>
          <h3 className="text-xl mt-[20px] font-semibold text-white
    ">{person.name}</h3>
          <p className="text-yellow-500 ">
            <FcContacts/>{person.mobile}</p>
        </div>
      ))}
    </div>
    <div className='w-screen h-[1px] shadow-2xl shadow-amber-400 animate-ping  duration-200 bg-red-500'></div>
    </>
  );
};

export default FirstyearRN;
