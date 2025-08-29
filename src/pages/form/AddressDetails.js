import React from 'react';

const AddressDetails = ({ formData, setFormData }) => {
    return (
        <div className="p-4 space-y-4 md:space-y-6">
            <div>
                <label htmlFor="address" className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Address*</label>
                
                <textarea id="address" type="text" name="" placeholder="Enter your address" cols="30" rows="4"   required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                ></textarea>
            </div>
            <div>
                <label htmlFor="city" className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">City*</label>
                <input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                />
            </div>

            <div className='flex flex-col gap-y-4 md:flex-row md:items-center gap-x-6 w-full'>
                <div className='w-full'>
                    <label htmlFor="state" className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">State*</label>
                    <input
                        id="state"
                        type="text"
                        placeholder="Enter your state"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                    />
                </div>
                <div className='w-full'>
                    <label htmlFor="zip" className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">Country*</label>
                    <input
                        id="zip"
                        type="text"
                        required
                        placeholder="Enter your Country"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
                    />
                </div>
            </div>
        </div >
    );
};

export default AddressDetails;