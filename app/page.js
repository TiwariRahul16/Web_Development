import React from 'react';
import Link from 'next/link';
import Asidenavigation from './components/Asidenavigation';

export default function Home() {
  return (
   <main className=''>
   <Asidenavigation/>
   <Link href={'/connection'}>Connection</Link>
   </main>
  );
}
