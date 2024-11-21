import Link from 'next/link'
import React from 'react'

const Asidenavigation = () => {
  return (
    <aside className="w-1/4 bg-gray-200 p-4">
     <h2 className="text-lg font-bold mb-4">Java Tutorial</h2>
     <ul className="space-y-2">
        <li><Link href="#" className="block text-green-600 font-bold">Java HOME</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Intro</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Get Started</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Syntax</Link></li>
         <li><Link href="#" className="block text-gray-700">Java Output</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Comments</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Variables</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Data Types</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Type Casting</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Operators</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Strings</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Math</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Booleans</Link></li>
        <li><Link href="#" className="block text-gray-700">Java If...Else</Link></li>
         <li><Link href="#" className="block text-gray-700">Java Switch</Link></li>
        <li><Link href="#" className="block text-gray-700">Java While Loop</Link></li>
        <li><Link href="#" className="block text-gray-700">Java For Loop</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Break/Continue</Link></li>
        <li><Link href="#" className="block text-gray-700">Java Arrays</Link></li>
    </ul>
    <h2 className="text-lg font-bold mt-6 mb-4">Java Methods</h2>
    <ul className="space-y-2">
          <li><Link href="#" className="block text-gray-700">Java Methods</Link></li>
          <li><Link href="#" className="block text-gray-700">Java Method Parameters</Link></li>
    </ul>
 </aside>
  )
}

export default Asidenavigation
