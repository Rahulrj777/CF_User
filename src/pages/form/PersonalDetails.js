import React from 'react';

const PersonalDetails = ({ formData, setFormData }) => {
    return (
        <div className="p-4 space-y-4 md:space-y-6"> 
            <div className='flex flex-col gap-y-4 md:flex-row md:items-center gap-x-6 w-full'>
                <div className='w-full'>
                    <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Name*</label>
                    <input
                        type="text"
                        required
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                    />
                </div>
                <div className='w-full'>
                    <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Email*</label>
                    <input
                        type="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                    />
                </div>
            </div>
            <div>
                <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Phone*</label>
                <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                />
            </div>
            <div>
                <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Father's Name</label>
                <input
                    type="text"
                    placeholder="Father's Name"
                    value={formData.fatherName || ''}
                    onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                />
            </div>
            <div>
                <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Father's Phone Number*</label>
                <input
                    type="tel"
                    required
                    placeholder="Father's Phone Number"
                    value={formData.fatherPhone || ''}
                    onChange={(e) => setFormData({ ...formData, fatherPhone: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                />
            </div>
        </div>
    );
};

export default PersonalDetails;
