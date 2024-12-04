import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
const AuthForm = () => {
  return (
    <div>
      <div className='container mx-auto justify-center min-h-screen p-4'>
        {/* Header */}
        <div className='flex flex-col gap-4 mb-8'>
          <h1 className='text-4xl font-bold text-white'>Create an account</h1>
          <div>
            <p className='text-gray-400'>Already have an account? <Link className='text-purple-600 underline' href="/login">Log in</Link></p>
          </div>
        </div>

        {/* Form */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl'>
          <div>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-input-purple text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-input-purple text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              className="w-full p-2 rounded-md bg-input-purple text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              placeholder="Email"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <input
              type="email"
              className="w-full p-2 rounded-md bg-input-purple text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className='flex items-center'>
              <input
                type="checkbox"
                className="w-4 h-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-600"
              />
              <p className='text-gray-400 ml-2'>I agree to the <a className='text-purple-600 underline' href="/">Tearms & Conditions</a></p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <button className='bg-button-purple w-full p-2 rounded-md text-white'>Create Account</button>
          </div>
          <div className="col-span-1 md:col-span-2 text-center text-gray-400">
            Or register with
          </div>
          <div className="col-span-1 md:col-span-2 text-center text-gray-400">
            <div className='flex justify-center gap-4 '>
              <button className='border-white border py-3  px-5 rounded-md flex items-center gap-2'>
                <FcGoogle className='text-2xl' />
                Google</button><button className='border-white border py-2 px-6 rounded-md flex items-center gap-2'>
                <FaApple className='text-2xl' />
                Apple</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
