import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        district: '',
        message: '',
        course: '' // Added field for course selection
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://script.google.com/macros/s/AKfycbxXbBHAsSq8DDxX1kJIsNFgJBooSziCN4uEaQ5THHnt_XXZK6x_24-l6bYs_W5Cn-Nl/exec', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            toast.success("Email Sent Successfully");
            setFormData({
                name: '',
                email: '',
                phone: '',
                state: '',
                district: '',
                message: '',
                course: '' // Reset course field
            });
        } else {
            toast.error("Something Went Wrong");
        }
    };
    
    return (
        <>
            <ToastContainer />
            <div>
                <div className=''>
                    <div>
                        <div className="">
                            <form onSubmit={handleSubmit} className="">
                                <div className="px-3 py-2 ">
                                    <div className="w-full  mx-auto">
                                        <div className="mt-5 mb-4">
                                            <div className='flex flex-col md:flex-row items-center gap-x-4'>
                                                <div className='w-full'>
                                                    <label className="font-semibold text-[12px] md:text-[14px] text-gray-900  pb-1 block" htmlFor="name">Name</label>
                                                    <input className="border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" id="name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange} />
                                                        
                                                </div>

                                                <div className='w-full'>
                                                    <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="email">E-mail</label>
                                                    <input className="border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" id="email"
                                                        name="email"
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="phone">Phone</label>
                                                <input className="border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" id="phone"
                                                    name="phone"
                                                    required
                                                    type="text"
                                                    value={formData.phone}
                                                    onChange={handleChange} />
                                            </div>

                                            <div className='w-full'>
                                                <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="course">Choose Your Course</label>
                                                <select name="course" id="course" value={formData.course} onChange={handleChange} required className='border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full'>
                                                    <option value="">Select a course</option>
                                                    <option value="Direction">Direction</option>
                                                    <option value="Cinematography">Cinematography</option>
                                                    <option value="Editing">Editing</option>
                                                    <option value="Visual_Efftects">Visual Effects</option>
                                                    <option value="virtual_Proudcion">Virtual Production</option>
                                                    <option value="Acting">Acting</option>
                                                    <option value="Photography">Photography</option>
                                                    <option value="di">DI</option>
                                                </select>
                                            </div>

                                            <div className='w-full'>
                                                <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="state">State</label>
                                                <input className="border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" id="state"
                                                    name="state"
                                                    type="text"
                                                    required
                                                    value={formData.state}
                                                    onChange={handleChange} />
                                            </div>

                                            <div className='w-full'>
                                                <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="district">District</label>
                                                <input className="border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full" id="district"
                                                    name="district"
                                                    type="text"
                                                    required
                                                    value={formData.district}
                                                    onChange={handleChange} />
                                            </div>

                                            <div className='w-full'>
                                                <label className="font-semibold text-[12px] md:text-[14px] text-gray-900 pb-1 block" htmlFor="message">Message</label>
                                                <textarea name="message" required id="message" rows="3" value={formData.message} onChange={handleChange} className='border border-gray-500 rounded-md px-3 py-2 mt-1 mb-5 text-sm w-full'></textarea>
                                            </div>

                                            

                                            <div className='flex justify-center items-center w-full'>
                                                <button className='uppercase font-semibold w-full hover:scale-105 duration-500 text-[12px] md:text-[14px] bg-gray-800 text-white rounded-md px-5 py-2'>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
