import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseDetails = ({ formData, setFormData }) => {
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', 'failed'
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (course) => {
    setFormData({ ...formData, courses: [course] });
  };

  const courses = [
    "Direction & Screenplay",
    "Cinematography",
    "Editing",
    "Visual Effects",
    "Virtual Production",
    "Acting",
    "Photography",
  ];

  // After PayPhi redirect back, check URL params for success
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("payment") === "success") {
      setPaymentStatus("success");
    } else if (params.get("payment") === "failed") {
      setPaymentStatus("failed");
    }
  }, []);

  const handlePayment = async (amount) => {
    try {
      setLoading(true);
      // call your backend to initiate PayPhi sale
      const res = await axios.post(
        "https://cf-server-tr24.onrender.com/api/payphi/initiate",
        { amount }
      );
      // backend returns redirectURL+tranCtx
      window.location.href = `${res.data.redirectURI}?tranCtx=${res.data.tranCtx}`;
    } catch (err) {
      console.error(err);
      alert("Payment init failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold mb-4">Select Course</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {courses.map((course) => (
          <label key={course} className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              checked={formData.courses.includes(course)}
              onChange={() => handleCheckboxChange(course)}
              className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">{course}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 space-x-4">
        <button
          type="button"
          disabled={loading}
          onClick={() => handlePayment(5000)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Pay ₹5,000
        </button>
        <button
          type="button"
          disabled={loading}
          onClick={() => handlePayment(45000)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Pay ₹45,000
        </button>
      </div>

      {paymentStatus === "success" && (
        <p className="text-green-600">
          Payment Successful! You can now submit.
        </p>
      )}
      {paymentStatus === "failed" && (
        <p className="text-red-600">Payment Failed. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={paymentStatus !== "success"}
        className={`mt-4 px-4 py-2 rounded ${
          paymentStatus === "success"
            ? "bg-indigo-600 text-white"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Submit Form
      </button>
    </div>
  );
};

export default CourseDetails;
