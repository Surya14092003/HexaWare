import React from 'react'
import { useState } from 'react';
import rec1 from '../assets/rec1.jpg'
import rec2 from '../assets/rec2.jpg'
import rec3 from '../assets/rec3.jpg'

const Hero2 = () => {
    const [showMore, setShowMore] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleExpand2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const handleExpand3 = () => {
    setIsExpanded3(!isExpanded3);
  };
  return (
    <div className="bg-white">
      {/* <header className="py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://www.smartrecruiters.com/wp-content/uploads/2021/10/SmartRecruiters-Logo-Black.svg" alt="SmartRecruiters Logo" className="w-24 h-6" />
        </div>
        <nav className="flex gap-6">
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
              Product
            </button>
            <div className={`absolute z-10 hidden bg-white shadow-md rounded-lg text-gray-700 mt-2 w-48 ${showMore ? 'block' : 'hidden'}`}>
              <ul className="p-2 text-sm">
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 1
                </li>
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 2
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
              Solutions
            </button>
            <div className={`absolute z-10 hidden bg-white shadow-md rounded-lg text-gray-700 mt-2 w-48 ${showMore ? 'block' : 'hidden'}`}>
              <ul className="p-2 text-sm">
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 1
                </li>
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 2
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
              Resources
            </button>
            <div className={`absolute z-10 hidden bg-white shadow-md rounded-lg text-gray-700 mt-2 w-48 ${showMore ? 'block' : 'hidden'}`}>
              <ul className="p-2 text-sm">
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 1
                </li>
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 2
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
              Company
            </button>
            <div className={`absolute z-10 hidden bg-white shadow-md rounded-lg text-gray-700 mt-2 w-48 ${showMore ? 'block' : 'hidden'}`}>
              <ul className="p-2 text-sm">
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 1
                </li>
                <li className="hover:bg-gray-100 rounded-md px-3 py-2">
                  Item 2
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg" onClick={handleToggle}>
            Get started
          </button>
          <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg">
            Login
          </button>
        </nav>
      </header> */}
      <main className="py-12 px-6">
        <h2 className="text-4xl font-bold mb-8">
          What's new at HexaHire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
            <img src={rec3} className="w-full h-auto" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                Future-Proof Talent Acquisition
              </h3>
              <p className="text-gray-700">
                Get thought-provoking data and perspectives from global talent leaders on five key trends for 2024.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mt-4" onClick={handleExpand}>
                Get eBook
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
            <img src={rec2} className="w-full h-auto" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                The Definitive Guide to Hiring Success
              </h3>
              <p className="text-gray-700">
                Get the essential guide to talent acquisition effectiveness, updated for 2024.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mt-4" onClick={handleExpand2}>
                Get eBook
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <img src={rec1} className="w-full h-auto" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">
                Human-Centric Hiring in the Age of Automation and Integration
              </h3>
              <p className="text-gray-700">
                Learn how to harness automation, AI, and integrations for efficient, personalized hiring experiences.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mt-4" onClick={handleExpand3}>
                Watch Webinar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero2
