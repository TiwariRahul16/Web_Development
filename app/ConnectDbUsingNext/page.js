"use client"
import React from 'react'
import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'

const install = [
  { 
    language: 'javascript', 
    code: `npm i mongoose` 
  },
]
const ConnectDB = [
  { 
    language: 'javascript', 
    code: `//  /app/db/connectDB.js 
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      // or replace process.env.MONGO_URI with mongodb://localhost:27017/Your_Collection_name
      console.log("MongoDB Connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  export default connectDB;
` 
  },
]

const Page = () => {
  return (
  <main className="mx-auto w-3/4 bg-white p-6">
    <h1 className="text-2xl font-bold mb-4">How to connect MongoDB to your project in next.js</h1>
      <p className="mb-4 text-lg font-bold">First install mongoose</p>
      <p className="mb-4">Run this command in VsCode Project terminal</p>
      <div style={{ padding: '20px' }}>
      {install.map((install, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={install.language} code={install.code} />
        </div>
      ))}
    </div>

    <p className="mb-4  text-lg font-bold">To Connect mongoDB Create ConnectDB.js in your root folder</p>
    <div style={{ padding: '20px' }}>
      {ConnectDB.map((ConnectDB, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={ConnectDB.language} code={ConnectDB.code} />
        </div>
      ))}
    </div>
    <p className="mb-4  text-lg font-bold">Now just import ConnectDB to your api folder use it.</p>
    <button className="bg-green-600 text-white px-4 py-2 rounded mt-2"><Link href={'/HandleFormInNext'}>Try Using form »</Link></button>
        </main>
      );
    }

export default Page
