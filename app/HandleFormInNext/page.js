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
const models = [
    { 
      language: 'javascript', 
      code: `// /app/models/User.js
import mongoose from "mongoose";
import { Schema,model } from "mongoose";


const formdataSchema = new Schema({
    UserName: { type: String},
    Name:{type: String},
    email: { type: String },
    // you can add more..
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.models.User || model("User", formdataSchema);
  
` 
    },
  ]

  const form = [
    { 
      language: `javascript ,html, tailwindcss`, 
      code: `// /app/AddUser/page.js
"use client"
import React from "react";
import { submitEvent } from "@/actions/UserAction";

const AddUser = () => {

    const handleSubmit = async (formData) => {
        try {
          const response = await submitEvent({
            UserName: formData.get("UserName"),
            Name: formData.get("Name"),
            email: formData.get("email"),  
          });
        } catch (error) {
          console.log("Error:", error);
        }
      alert("User detail Added Successfully")
    };
  
    return (
      <>
  <div className="p-8 rounded border w-[80%] pt-20 pb-40 mx-auto  border-gray-200">
          <h1 className="font-medium text-2xl sm:text-3xl">Add User Details</h1>
          <form action={handleSubmit}>
            <div className="mt-6 gap-4">
              <div>
                <label htmlFor="UserName" className="text-sm  text-gray-900 sm:text-xl block mb-1 font-medium">User Name</label>
                <input type="text" name="UserName" id="UserName" className="bg-gray-100 border border-gray-200 rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-xl w-full" placeholder="Enter User Name" />
              </div>
              <div>
                <label htmlFor="Name" className="text-sm  text-gray-900 sm:text-xl block mb-1 font-medium">Name</label>
                <input type="text" name="Name" id="Name" className="bg-gray-100 border border-gray-200 rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-xl w-full" placeholder="Enter Name" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm  text-gray-900 sm:text-xl block mb-1 font-medium">User email</label>
                <input type="email" name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-3 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-900 sm:text-xl w-full" placeholder="Enter User email" />
              </div>
            </div>
            <div className="space-x-4 mt-8">
              <button type="submit" className="sm:py-4 sm:px-10 text-lg py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
            </div>
          </form>
        </div>
      </>
    )
}

export default AddUser` 
    },
  ]

  const action = [
    { 
      language: 'javascript', 
      code: `// /app/actions/UserAction.js
"use server"
import connectDB from "@/db/connectDB"
import User from "@/app/models/User"

export const submitEvent = async (data) => {
    try {
      await connectDB();
      const newUser = await User.create(data);
      return { status: "OK", message: "User data added Successfully" };
    } catch (error) {
      return { status: "Error", message: error.message };
    }
  };` 
    },
  ]

const HandleFormInNext = () => {
  return (
   <>
    <main className="mx-auto w-3/4 bg-white p-6">
    <h1 className="text-2xl font-bold mb-4">How to Store Form Data in a Database Using MongoDB in next.js</h1>
    <p className="mb-2 text-lg font-bold">First Connect MongoDB using below link (file location &quot;/app/db/connectDB.js&quot;)</p>
    <button className=" mb-9 bg-green-600 text-white px-4 py-2 rounded mt-2">
        <Link href={'/connection'}>ConnectDB »</Link>
    </button>
      <p className="mb-2 text-lg font-bold">Create Models folder at &quot;/app/models/User.js&quot;</p>
      <div style={{ padding: '20px' }}>
      {models.map((models, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={models.language} code={models.code} />
        </div>
      ))}
    </div>

    <p className="mb-4  text-lg font-bold">Create a form folder at &quot;/app/AddUser/page.js&quot;</p>
    <div style={{ padding: '20px' }}>
      {form.map((form, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={form.language} code={form.code} />
        </div>
      ))}
    </div>
    <p className="mb-4 text-lg font-bold">Store data using server action &quot;/app/actions/UserAction.js&quot;</p>
    <div style={{ padding: '20px' }}>
      {action.map((action, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CodeBlock language={action.language} code={action.code} />
        </div>
      ))}
    </div>
    {/* <button className="bg-green-600 text-white px-4 py-2 rounded mt-2"><Link href={'/HandleFormInNext'}>Try Using form »</Link></button> */}
        </main>

   </>
  )
}

export default HandleFormInNext
