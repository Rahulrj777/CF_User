import { useState } from "react";
import axios from "axios";

const CourseDetails = ({ formData, setFormData, paymentStatus, setPaymentStatus }) => {
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

  const handlePayment = async (amount) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://cf-server-tr24.onrender.com/api/payphi/initiate",
        { amount }
      );

      // Redirect with step query (last step = 3)
      window.location.href = `${data.redirectURI}?tranCtx=${data.tranCtx}&step=3`;
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

      {paymentStatus === "success" && <p className="text-green-600">Payment Successful! You can now submit.</p>}
      {paymentStatus === "failed" && <p className="text-red-600">Payment Failed. Please try again.</p>}
    </div>
  );
};

export default CourseDetails;
