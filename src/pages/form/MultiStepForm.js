import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Stepper from './Stepper';
import PersonalDetails from './PersonalDetails';
import AdditionalDetails from './AdditionalDetails';
import AddressDetails from './AddressDetails';
import CourseDetails from './CourseDetails';

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        fatherName: '',
        fatherPhone: '',
        age: '',
        gender: '',
        dob: '',
        pan: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        courses: [],
    });
    const navigate = useNavigate(); // Hook for navigation

    const handleNext = () => {
        if (validateFields()) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => setCurrentStep((prev) => prev - 1);

    const handleSubmit = () => {
        if (validateFields()) {
            const url = "https://script.google.com/macros/s/AKfycbyvkT7blpr9eG_vnrMkr7OYOzHxoeStAp7ds5cZoYL2ASZLMCzaYVzOm4qqy7JpcpKJ/exec";

            // Filter out empty fields from formData
            const filteredFormData = Object.fromEntries(
                Object.entries(formData).filter(([key, value]) => {
                    // Handle empty arrays (for courses)
                    if (Array.isArray(value)) {
                        return value.length > 0;
                    }
                    return value !== ''; // Keep fields that are not empty
                })
            );

            fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(filteredFormData), // Send filtered data
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success:', data);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        fatherName: '',
                        fatherPhone: '',
                        age: '',
                        gender: '',
                        dob: '',
                        pan: '',
                        address: '',
                        city: '',
                        state: '',
                        zip: '',
                        courses: [],
                    });
                    navigate('/payment');
                })
                .catch(error => {
                    console.error('Error:', error);
                    navigate('/payment');
                });
        }
    };

    const validateFields = () => {
        const { name, email, phone, fatherPhone, } = formData;
        if (!name || !email || !phone || !fatherPhone) {
            toast.error('Please fill in all required fields.');
            return false;
        }
        return true;
    };

    const steps = [
        <PersonalDetails formData={formData} setFormData={setFormData} />,
        <AdditionalDetails formData={formData} setFormData={setFormData} />,
        <AddressDetails formData={formData} setFormData={setFormData} />,
        <CourseDetails formData={formData} setFormData={setFormData} />
    ];

    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-center pt-10 md:pt-20 pb-10 md:pb-20'>

                <Helmet>
                    <title>Apply Now</title>
                    <meta
                        name="description"
                        content="Enhance your skills in direction, cinematography, editing, and VFX with our expert-led workshops. Hands-on training for aspiring professionals. Join now!"
                    />
                    <meta
                        name="keywords"
                        content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>


                <div className="w-full px-4 md:w-[60%] mx-auto">
                    <div className='flex justify-center items-center w-full'>
                        <div className='w-full mx-auto'>
                            <Stepper currentStep={currentStep} />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2 md:mt-8">{steps[currentStep]}</div>
                    </div>

                    <div className="mt-3 md:mt-8 flex justify-between font-[poppins]">
                        {currentStep > 0 && (
                            <button
                                onClick={handlePrev}
                                className="bg-black text-white px-8 py-2 text-[12px] md:text-[14px] font-semibold uppercase rounded"
                            >
                                Previous
                            </button>
                        )}
                        {currentStep === steps.length - 1 ? (
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white px-8 py-2 text-[12px] md:text-[14px] font-semibold uppercase rounded"
                            >
                                Submit
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                className="bg-[#ff0000] text-white px-8 py-2 text-[12px] md:text-[14px] font-semibold uppercase rounded"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiStepForm;
