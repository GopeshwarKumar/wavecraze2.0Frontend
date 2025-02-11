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
    
    <div className="mainmain bg-slate-900 flex overflow-x-scroll gap-6 p-6 bg-gradient-to-r from-cyan-500 to-pink-900">
      {people.map((person) => (
        <div
          key={person.id}
          className="abcdef w-40 p-4 bg-slate-950 rounded-lg text-center "
        >
          <div className='w-32 h-32'>
          <img src={person.imageUrl} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4  transition-all hover:skew-x-3 hover:skew-y-3"
          />
          </div>
          <h3 className="text-xl text-white mt-[20px] font-semibol">{person.name}</h3>
          <p className="text-yellow-500 ">
            <FcContacts/>{person.mobile}</p>
        </div>
      ))}
    </div>
    <div className='w-screen shadow-2xl shadow-amber-400 h-[1px] animate-ping  duration-200 bg-red-500'></div>    </>
  );
};

export default FirstyearRN;
