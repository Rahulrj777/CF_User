import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    fatherPhone: '',
    motherName: '',
    pan: '',
    dob: '',
    gender: '',
    age: '',
    mobilePhone: '',
    bloodGroup: '',
    homeTelephone: '',
    email: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    postalCode: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbznfrEltZh-gImHaJU89FSA_dKBuPA9UTqMBX4XoXBWQAt9jcMNXGwgeX_QFJwz8q7a/exec', {
        method: 'POST',
        mode: 'no-cors', // Note: This might prevent you from receiving a response
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFormData({
        firstName: '',
        lastName: '',
        fatherName: '',
        fatherPhone: '',
        motherName: '',
        pan: '',
        dob: '',
        gender: '',
        age: '',
        mobilePhone: '',
        bloodGroup: '',
        homeTelephone: '',
        email: '',
        nationality: '',
        address: '',
        city: '',
        state: '',
        postalCode: ''
      });

      
      handleNext(); // Move to the payment step
      navigate('/payment')
      toast.success("Email Send Successfully")
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something Went Wrong")
    }
  };

  const PersonalDetails = () => (
    <div>
      <h1 className="text-[20px] font-semibold text-gray-900 md:mb-6">Personal Details</h1>
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 mb-4">
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Father's Mobile Number</label>
          <input
            type="text"
            name="fatherPhone"
            value={formData.fatherPhone}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">PAN</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
      </div>
    </div>
  );

  const AdditionalDetails = () => (
    <div>
      <h1 className="text-[20px] font-semibold text-gray-900 md:mb-6">Additional Details</h1>
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 mb-4">
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Date of Birth</label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Gender</label>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                className="mr-2"
              /> Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                className="mr-2"
              /> Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Others"
                checked={formData.gender === 'Others'}
                onChange={handleChange}
                className="mr-2"
              /> Others
            </label>
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Mobile Phone</label>
          <input
            type="text"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Home Telephone</label>
          <input
            type="text"
            name="homeTelephone"
            value={formData.homeTelephone}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
          />
        </div>
      </div>
    </div>
  );

  const ContactDetails = () => (
    <div>
      <h1 className="text-[20px] font-semibold text-gray-900 md:mb-6">Contact Details</h1>
      <div className="grid grid-cols-2 gap-y-10 gap-x-8 mb-4">
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Nationality</label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-[16px] mb-3">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full py-2 px-3 rounded-md border border-gray-400 focus:outline-none focus:border-gray-700"
            required
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-[80%] mx-auto p-6">
      {/* Stepper */}
      <div className="w-full md:w-[60%] px-4 md:px-14 py-4 md:py-4 mx-auto md:mt-10">
        <div className="flex items-center justify-between mb-6 md:mb-4">
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="flex-1 relative">
              <div
                className={`z-30 flex items-center justify-center w-10 h-10 mx-auto rounded-full transition duration-500 ${currentStep >= item
                  ? 'bg-[#ffa500] text-white'
                  : 'bg-gray-300 text-gray-600'
                  }`}
              >
                {item}
              </div>
              {index < 2 && (
                <div
                  className={`absolute left-16 md:left-52 top-5 transform -translate-x-1/2 h-1 -z-10 transition-all duration-500 ${currentStep > item ? 'bg-[#ffa500]' : 'bg-gray-300'
                    }`}
                  style={{ width: 'calc(120% - 40px)' }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className='w-[80%] mx-auto'>
        {currentStep === 1 && <PersonalDetails />}
        {currentStep === 2 && <AdditionalDetails />}
        {currentStep === 3 && <ContactDetails />}

        <div className="flex justify-between mt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevious}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiForm;
