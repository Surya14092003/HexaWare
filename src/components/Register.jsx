import React from 'react'
import { useState } from 'react';
import fem from '../assets/fem.jpg'

const Register = () => {
    const [formData, setFormData] = useState({
        workEmail: '',
        phone: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        companyName: '',
        numberOfEmployees: '',
        country: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 bottom-2">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">See SmartRecruiters in action</h1>
            <div className="flex items-center mb-6">
              <div className="relative mr-4">
                <img src={fem} alt="Team member" className="rounded-full w-20 h-20 object-cover" />
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-xl">Our Team Is Ready To Answer Any Questions You May Have</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="workEmail"
                  placeholder="Work Email*"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title*"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <select
                name="numberOfEmployees"
                value={formData.numberOfEmployees}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value=""># of Employees*</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201+">201+</option>
              </select>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Country*</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Get started
              </button>
            </form>
          </div>
        </div>
  )
}

export default Register
