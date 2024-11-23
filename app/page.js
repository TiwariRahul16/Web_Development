"use client"
import React from 'react';
import Link from 'next/link'; 
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Asidenavigation from './components/Asidenavigation';

export default function Home() {
  const [navigation, setnavigation] = useState(false)

  const handletoggle = () =>{
    if (navigation==false) {
      setnavigation(true)
    } else {
      setnavigation(false)
    }
  }

  return (
    <>
   <h1 className='mt-10 text-center text-2xl sm:text-6xl'>Welcome to Skill Development journey</h1>

    {/* <nav className='flex bg-slate-100 px-3 gap-1 mt-10'>
    <ul className= {`flex gap-16 mt-5 mb-5 rounded-lg`}>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java HOME </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Intro </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Get Started </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Get Started </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Get Started </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Get Started </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600 font-bold">Java Get Started </Link></li>
    </ul>
    </nav> */}
    <div className='flex sm:gap-2 '>
    <Asidenavigation/>
   <main className='w-full md:w-3/4 bg-white p-6 max-h-screen overflow-y-auto'>
   
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-7 md:gap-14 mt-20'>
   <div className="bg-gray-100 w-full p-2 md:p-4">
      <div className="bg-white p-2 md:p-4 rounded-lg shadow-md">
        <img className='sm:w-40 sm:h-12 mb-2' src="mongodb.png" alt="" />
        <h1 className="text-sm sm:text-xl font-bold">Jump back in!</h1>
        <Link href={'/connection'}>
        <button className="bg-orange-400 py-1 px-2 sm:py-3 sm:px-3 mb-4 mt-4 rounded text-wrap text-sm sm:font-semibold hover:bg-opacity-75">
        Go to lesson
        </button>
        </Link>
      </div>
    </div>
   <div className="bg-gray-100 w-full p-2 md:p-4">
      <div className="bg-white p-2 md:p-4 rounded-lg shadow-md">
        <img className='sm:w-40 sm:h-12 mb-2' src="mongodb.png" alt="" />
        <h1 className="text-sm sm:text-xl font-bold">Jump back in!</h1>
        <Link href={'/connection'}>
        <button className="bg-orange-400 py-1 px-2 sm:py-3 sm:px-3 mb-4 mt-4 rounded text-wrap text-sm sm:font-semibold hover:bg-opacity-75">
        Go to lesson
        </button>
        </Link>
      </div>
    </div>
   <div className="bg-gray-100 w-full p-2 md:p-4">
      <div className="bg-white p-2 md:p-4 rounded-lg shadow-md">
        <img className='sm:w-40 sm:h-12 mb-2' src="mongodb.png" alt="" />
        <h1 className="text-sm sm:text-xl font-bold">Jump back in!</h1>
        <Link href={'/connection'}>
        <button className="bg-orange-400 py-1 px-2 sm:py-3 sm:px-3 mb-4 mt-4 rounded text-wrap text-sm sm:font-semibold hover:bg-opacity-75">
        Go to lesson
        </button>
        </Link>
      </div>
    </div>
   </div>
    

   </main>
   </div>
   </>
  );
}
