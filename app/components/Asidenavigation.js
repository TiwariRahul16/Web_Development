import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Asidenavigation = () => {
  const [navigation, setnavigation] = useState(true)

  const handletoggle = () =>{
    setnavigation(!navigation)
  }

  return (
    <>

{/* <div className=' mt-9' > */}
    {/* <div className='flex gap-1'>
    <span className='text-2xl font-bold mb-4'>Tutorial</span>
    <button onClick={handletoggle} className='text-3xl font-bold mb-4'><GiHamburgerMenu /></button>
    </div> */}
     {/* <ul className= {`${navigation?"flex":"hidden"} space-y-2  grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-16 mt-10`}> */}
        {/* <li><Link href="#" className="block text-green-600 font-bold">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700">Upcoming... Started </Link></li>
    </ul>
  </div> */}
<div>
  <button onClick={handletoggle} className='relative top-0  text-3xl font-bold mb-4'><GiHamburgerMenu /></button>
    <div className={`${navigation?"block":"hidden"} px-2 py-4 bg-slate-200  max-h-screen overflow-y-auto overflow-x-auto`}>
     <h2 className=" text-xl font-bold mb-4">Tutorial</h2>
     <ul className="space-y-2 text-lg">
        <li><Link href={'/html'} className="block text-gray-700 hover:text-green-600">Html</Link></li>
        <li><Link href={'/css'} className="block text-gray-700 hover:text-green-600">Css</Link></li>
        <li><Link href={'/tailwindcss'} className="block text-gray-700 hover:text-green-600">Tailwind Css</Link></li>
        <li><Link href={'/connection'} className="block text-gray-700 hover:text-green-600">Connect mongodb using node.js</Link></li>
         <li><Link href={'/express'} className="block text-gray-700 hover:text-green-600">Express server</Link></li>
        <li><Link href={'/ConnectDbUsingNext'} className="block text-gray-700 hover:text-green-600">Connect mongodb in next.js</Link></li>
        <li><Link href={'/HandleFormInNext'} className="block text-gray-700 hover:text-green-600">Handling form in next.js using serevr action</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming......</Link></li>
         <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming... </Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
        <li><Link href="#" className="block text-gray-700 hover:text-green-600">Upcoming...</Link></li>
    </ul>
    </div>
    </div>
 
    </>
  )
}

export default Asidenavigation
