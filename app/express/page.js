"use client"
import React from 'react'
import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'

const install = [
  { 
    language: 'javascript', 
    code: `npm i express` 
  },
]
const express = [
  { 
    language: 'javascript', 
    code: `const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
` 
  },
]

const Page = () => {
  return (
  <main className="mx-auto w-3/4 bg-white p-6">
    <h1 className="text-2xl font-bold mb-4">How to create a server using node.js</h1>
      <p className="mb-4 text-lg font-bold">First install express</p>
      <p className="mb-4">Run this command in VsCode Project terminal</p>
      <div style={{ padding: '20px' }}>
      {install.map((install, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={install.language} code={install.code} />
        </div>
      ))}
    </div>

    <p className="mb-4  text-lg font-bold">To create server Create server.js in your root folder</p>
    <div style={{ padding: '20px' }}>
      {express.map((express, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={express.language} code={express.code} />
        </div>
      ))}
    </div>
    <p className="mb-4  text-lg font-bold">Detail explanation is upcoming...</p>
    <button className="bg-green-600 text-white px-4 py-2 rounded mt-2"><Link href={'/'}>learn more »</Link></button>
        </main>
      );
    }

export default Page
