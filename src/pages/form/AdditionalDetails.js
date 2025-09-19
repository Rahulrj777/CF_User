import React from "react";

const AdditionalDetails = ({ formData, setFormData }) => {
  return (
    <div className="p-4 space-y-4 md:space-y-6">
      <div>
        <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">
          Age*
        </label>
        <input
          type="number"
          placeholder="Age"
          required
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
        />
      </div>

      <div>
        <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">
          Gender*
        </label>
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          required
          className="w-full p-2 border bmt-1 block border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px] "
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-[14px] md:text-[16px] mb-4 font-medium text-gray-700">
          DOB*
        </label>
        <input
          type="date"
          placeholder="Date of Birth"
          required
          value={formData.dob || ""}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-500 text-[14px]"
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
