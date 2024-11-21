"use client"
import React from 'react'
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
    code: `npm i mongoose` 
  },
]

const page = () => {
  return (
  <main className="w-3/4 bg-white p-6">
    <h1 className="text-2xl font-bold mb-4">How to connect MongoDB to your project using node.js</h1>
      <p className="mb-4 text-lg font-bold">First install mongoose</p>
      <p className="mb-4">Run this command in VsCode Project terminal</p>
      <div style={{ padding: '20px' }}>
      {install.map((install, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={install.language} code={install.code} />
        </div>
      ))}
    </div>

    <p className="mb-4  text-lg font-bold">Create ConnectDB.js</p>
    <div style={{ padding: '20px' }}>
      {ConnectDB.map((ConnectDB, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={ConnectDB.language} code={ConnectDB.code} />
        </div>
      ))}
    </div>
        </main>
      );
    }

export default page
