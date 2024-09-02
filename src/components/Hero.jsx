import React from 'react'
import logo1 from '../assets/logo1.png'
import crm from '../assets/crm.png'
import sourcing from '../assets/sourcing.png'
import { MdOutlineNetworkCheck, MdCampaign } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { TbComet } from "react-icons/tb";
import Hero2 from './Hero2'
import Register from './Register'


const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo1} alt="SmartRecruiters Logo" className="h-8 rounded-full" />
          <span className="text-white font-bold ml-4">HexaHire</span>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="text-white hover:underline">Product</a>
          <a href="#" className="text-white hover:underline">Solutions</a>
          <a href="#" className="text-white hover:underline">Resources</a>
          <a href="#" className="text-white hover:underline">Company</a>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100">
            Get started
          </button>
          <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100">
            Login
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hire Smart, Hire Right™</h1>
          <p className="text-lg text-gray-600 mb-8">
          Smart Recruitment for a Smarter Workforce
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
              Learn how
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
              Watch video
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
            <MdCampaign className='bg-green-200 h-10 w-10 p-3 rounded-full text-black'/>
              <h2 className="text-xl font-bold ml-4">Custom CRM Campaign</h2>
            </div>
            <ul className="list-disc list-inside py-3">
              <li className='flex flex-row justify-between text-center'>Audience <TiTick className=' bg-green-200 text-green-600 p-1 rounded-full w-7 h-7'/></li>
              <li className='flex flex-row justify-between text-center'>Location <TiTick className=' bg-green-200 text-green-600 p-1 rounded-full w-7 h-7'/></li>
              <li className='flex flex-row justify-between text-center'>Proximity <TiTick className=' bg-green-200 text-green-600 p-1 rounded-full w-7 h-7'/></li>
              <li className='flex flex-row justify-between text-center'>Application Status <TiTick className=' bg-green-200 text-green-600 p-1 rounded-full w-7 h-7'/></li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div className="flex items-center mb-4">
            <MdOutlineNetworkCheck className='bg-green-200 h-10 w-10 p-3 rounded-full text-black'/>
            <h2 className="text-xl font-bold ml-4">Hiring Velocity</h2>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 rounded-full h-2" style={{ width: '80%' }}></div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 rounded-full h-2" style={{ width: '60%' }}></div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 rounded-full h-2" style={{ width: '40%' }}></div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 rounded-full h-2" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
            <div className="flex items-center mb-4">
            <FiPieChart className='bg-green-200 h-10 w-10 p-3 rounded-full text-black' />
            <h2 className="text-xl font-bold ml-4">Sourcing</h2>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row gap-5 relative w-24 h-24">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                >
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#ccc" strokeWidth="10" />
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#4CAF50" strokeWidth="10" strokeDasharray="141.3716694115407" strokeDashoffset="141.3716694115407" />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-gray-800 font-bold text-2xl">
                    120
                  </text>
                </svg>
                
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4  flex flex-col justify-between">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 rounded-full h-30 w-40 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">97%</span>
                <span className="text-white font-normal text-sm">MATCH</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-center mb-2">
                <img src={crm} alt="Avatar" className="h-30 w-30 rounded-full" />
                <span className="ml-4 font-medium">Hannah Mollison</span>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Recommendation
              </button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
            <TbComet className='bg-green-200 h-10 w-10 p-3 rounded-full text-black'/>
            <h2 className="text-xl font-bold ml-4">Welcome to SmartRecruiters!</h2>
              <p className="text-gray-600 ml-4">How can we help today?</p>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded">
                Live Chat with our AI Sales Agent
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded">
                Request a Custom Demo
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded">
                I'm a Job Applicant
              </button>
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded">
                Product Support
              </button>
              <p className="text-gray-600 text-sm mt-4">
                This chat may be recorded for quality and training purposes. Privacy policy.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600">A Trusted Partner for 4,000+ Businesses Around The World</p>
        </div>
      </main>
      <Hero2 />
      <Register />

      <footer className="bg-gray-800 text-white py-4 px-8 mt-16">
        <p className="text-center">© 2023 SmartRecruiters</p>
      </footer>
    </div>
  )
}

export default Hero
