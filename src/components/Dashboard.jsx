import { useState } from 'react';
import React from 'react'

const Dashboard = () => {
  const [applications, setApplications] = useState([
    {
      name: 'Lewis S. Cunningham',
      role: 'IOS Developer',
      status: 'Applied',
    },
    {
      name: 'Danny Nelson',
      role: 'Node.js Developer',
      status: 'Applied',
    },
    {
      name: 'Jennifer Patterson',
      role: 'Marketing Manager',
      status: 'Applied',
    },
    {
      name: 'Timothy Watson',
      role: 'IOS Developer',
      status: 'Applied',
    },
    {
      name: 'Kimberly Rutledge',
      role: 'Junior UX Designer',
      status: 'Applied',
    },
  ]);

  const [candidates, setCandidates] = useState([
    {
      name: 'John Doe',
      role: 'UI Designer',
      status: 'Tech interview',
    },
    {
      name: 'Ella Clintion',
      role: 'Content Designer',
      status: 'Task',
    },
    {
      name: 'Mike Tyler',
      role: 'Node.js Developer',
      status: 'Resume review',
    },
    {
      name: 'Marie Arch',
      role: 'Node.js Developer',
      status: 'Task',
    },

  ]);

  const [jobs, setJobs] = useState([
    {
      title: 'Content Designers',

      percentage: 75,
      candidates: 5,
    },
    {
      title: 'Senior UI Designer',

      percentage: 0,
      candidates: 0,
    },
    {
      title: 'Node.js Developers',

      percentage: 25,
      candidates: 12,
    },
    {
      title: 'Marketing Managers',

      percentage: 45,
      candidates: 10,
    },
  ]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center justify-between bg-white py-4 px-6 shadow-md">
        <div className="flex items-center">
          <h1 className="text-lg font-bold text-gray-900">
            HexaHire
          </h1>
          <h2 className="ml-4 text-lg font-bold text-gray-700">
            Dashboard
          </h2>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z"
              />
            </svg>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 18.228l7.997-12.344" />
            </svg>
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 rounded-full p-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004.414 11H6a5 5 0 015 5v3.586l.707.707a1 1 0 001.414-1.414L11 15.586V12a6 6 0 006-6z" />
            </svg>
          </button>
          <img
            src="https://i.pravatar.cc/30"
            alt="User avatar"
            className="rounded-full ml-2"
          />
        </div>
      </div>
      <div className="flex h-screen">
        {/* Side Menu */}
        <div className="flex flex-col w-1/4 h-full gap-4 p-8 bg-white shadow-lg border-r">
          <div className="flex items-center gap-3 pb-4 border-b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 00-.894.553L7.383 4H4a1 1 0 000 2v10a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1h-3.383l-.724-1.447A1 1 0 009 2zM11 18a1 1 0 01-1-1v-5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800">Dashboard</h3>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { label: "Dashboard", link: "dashboard" },
              { label: "Recruitment", link: "recruitment" },
              { label: "Onboarding", link: "onboarding" },
              { label: "Recruitment tasks", link: "recruitment-tasks" },
              { label: "Calendar", link: "calendar" },
              { label: "Settings", link: "settings" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md px-4 py-3 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  window.location.hash = item.link;
                }}
              >
                <span className="text-gray-800 font-medium">{item.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.293 15.707a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414l-3-3a1 1 0 011.414-1.414l3.707 3.707a1 1 0 010 1.414l-3.707 3.707z" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4 p-6">
          {/* Add your other components here */}
          {/* Example */}
          <div className="flex flex-col gap-4 bg-white border rounded-md p-4">
            <div className="bg-blue-500 rounded-md p-4 text-white">
              <h2 className="text-xl font-bold">Hello Katie!</h2>
              <p className="text-gray-300 text-sm">
                You have 16 new applications. It is a lot of
                work for today! So let's start. 😉
              </p>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-md mt-2">
                review it!
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                Your Progress
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                {jobs.map((job) => (
                  <div
                    key={job.title}
                    className="flex flex-col bg-white border rounded-md p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-gray-900">
                        {job.count}
                      </h3>
                      <span className="text-gray-500 text-sm">
                        {job.title}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-col items-center">
                      <span className="text-gray-500 text-sm">
                        ({job.candidates} candidates)
                      </span>
                      <div className="w-24 h-24 rounded-full flex items-center justify-center border border-gray-300">
                        <span className="text-gray-500 text-lg font-bold">
                          {job.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* calander */}
          <div className=" gap-4 bg-white border rounded-md p-4 w-[400px] ">
            <h2 className="text-xl font-bold text-gray-900">
              March 2020
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">MON</span>
                <span className="text-gray-500 text-sm">TUE</span>
                <span className="text-gray-500 text-sm">WED</span>
                <span className="text-gray-500 text-sm">THU</span>
                <span className="text-gray-500 text-sm">FRI</span>
                <span className="text-gray-500 text-sm">SAT</span>
                <span className="text-gray-500 text-sm">SUN</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">2</span>
                  <span className="text-gray-500 text-sm">3</span>
                  <span className="text-gray-500 text-sm">4</span>
                  <span className="text-gray-500 text-sm">5</span>
                  <span className="text-gray-500 text-sm">6</span>
                  <span className="text-gray-500 text-sm">7</span>
                  <span className="text-gray-500 text-sm">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">9</span>
                  <span className="text-gray-500 text-sm">10</span>
                  <span className="text-gray-500 text-sm">11</span>
                  <span className="text-gray-500 text-sm">12</span>
                  <span
                    className="text-gray-500 text-sm bg-yellow-200 rounded-full px-2 py-1"
                  >
                    13
                  </span>
                  <span className="text-gray-500 text-sm">14</span>
                  <span className="text-gray-500 text-sm">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">16</span>
                  <span className="text-gray-500 text-sm">17</span>
                  <span className="text-gray-500 text-sm">18</span>
                  <span className="text-gray-500 text-sm">19</span>
                  <span className="text-gray-500 text-sm">20</span>
                  <span className="text-gray-500 text-sm">21</span>
                  <span className="text-gray-500 text-sm">22</span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-gray-500 text-sm bg-yellow-200 rounded-full px-2 py-1"
                  >
                    23
                  </span>
                  <span className="text-gray-500 text-sm">24</span>
                  <span
                    className="text-gray-500 text-sm bg-yellow-200 rounded-full px-2 py-1"
                  >
                    25
                  </span>
                  <span className="text-gray-500 text-sm">26</span>
                  <span className="text-gray-500 text-sm">27</span>
                  <span className="text-gray-500 text-sm">28</span>
                  <span className="text-gray-500 text-sm">29</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">30</span>
                  <span className="text-gray-500 text-sm">31</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                  <span className="text-gray-500 text-sm">&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
          {/* Recruitment progress */}
          <div className="flex md:flex-row gap-4">
            <div className="flex flex-col gap-4 bg-white border rounded-md p-4 ml-[250px]">
              <h2 className="text-xl font-bold text-gray-900">
                Recruitment progress
              </h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Full name</span>
                  <span className="text-gray-500 text-sm">
                    Profession
                  </span>
                  <span className="text-gray-500 text-sm">Status</span>
                </div>
                {candidates.map((candidate) => (
                  <div
                    key={candidate.name}
                    className="flex items-center justify-between rounded-md p-2 bg-blue-100 hover:bg-blue-200 cursor-pointer mb-1"
                  >
                    <span className="text-gray-700">
                      {candidate.name}
                    </span>
                    <span className="text-gray-700">
                      {candidate.role}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full ${candidate.status === 'Tech interview'
                          ? 'bg-blue-500'
                          : candidate.status === 'Task'
                            ? 'bg-green-500'
                            : candidate.status === 'Resume review'
                              ? 'bg-teal-500'
                              : candidate.status === 'Task'
                                ? 'bg-red-500'
                                : candidate.status === 'Final interview'
                                  ? 'bg-yellow-500'
                                  : ''
                          }`}
                      ></div>
                      <span className="text-gray-700">
                        {candidate.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
                See all
              </button>
            </div>
          

          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Dashboard
