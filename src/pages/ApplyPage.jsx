// src/pages/ApplyPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyPage = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(0); // ✅ must be declared

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    fatherPhone: "",
    age: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    courses: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const payment = params.get("payment"); // success or failed
    if (payment) {
      setPaymentStatus(payment);
      setCurrentStep(3);

      if (payment === "success") {
        // reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          fatherName: "",
          fatherPhone: "",
          age: "",
          gender: "",
          dob: "",
          address: "",
          city: "",
          state: "",
          country: "",
          courses: [],
        });
      }

      // 🔑 remove query param so it won’t show again on refresh
      params.delete("payment");
      window.history.replaceState({}, "", `${window.location.pathname}`);
    } 
  }, []);

  const handleCheckboxChange = (course) => {
    setFormData({ ...formData, courses: [course] });
  };

  const handlePayment = async (amount) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://cf-server-tr24.onrender.com/api/payphi/initiate",
        { amount }
      );
      // Redirect to PayPhi; after payment, your server should redirect to /apply?payment=success
      window.location.href = `${data.redirectURI}?tranCtx=${data.tranCtx}&returnUrl=/apply`;
    } catch (err) {
      console.error(err);
      alert("Payment init failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    // simple required check
    const { name, email, phone, fatherPhone } = formData;
    if (!name || !email || !phone || !fatherPhone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (formData.courses.length === 0) {
      toast.error("Please select a course.");
      return;
    }
    if (paymentStatus !== "success") {
      toast.error("Please complete payment first.");
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbyvkT7blpr9eG_vnrMkr7OYOzHxoeStAp7ds5cZoYL2ASZLMCzaYVzOm4qqy7JpcpKJ/exec";

    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          fatherName: "",
          fatherPhone: "",
          age: "",
          gender: "",
          dob: "",
          address: "",
          city: "",
          state: "",
          country: "",
          courses: [],
        });
        setPaymentStatus(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Something went wrong.");
      });
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

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Apply Now</h1>

      {/* Personal Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name*"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="email"
          placeholder="Email*"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="tel"
          placeholder="Phone*"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Father's Name"
          value={formData.fatherName}
          onChange={(e) =>
            setFormData({ ...formData, fatherName: e.target.value })
          }
          className="border p-2 rounded w-full"
        />
        <input
          type="tel"
          placeholder="Father's Phone*"
          value={formData.fatherPhone}
          onChange={(e) =>
            setFormData({ ...formData, fatherPhone: e.target.value })
          }
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Age*"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className="border p-2 rounded w-full"
        >
          <option value="">Select Gender*</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          placeholder="DOB*"
          value={formData.dob}
          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Address */}
      <textarea
        placeholder="Address*"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        className="border p-2 rounded w-full mt-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        <input
          type="text"
          placeholder="City*"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="State*"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Country*"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Courses */}
      <p className="mt-6 mb-2 font-semibold">Select Course*</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {courses.map((course) => (
          <label key={course} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.courses.includes(course)}
              onChange={() => handleCheckboxChange(course)}
              className="h-4 w-4"
            />
            <span>{course}</span>
          </label>
        ))}
      </div>

      {/* Payment */}
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

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={paymentStatus !== "success"} // only enabled if success
        className={`mt-6 px-6 py-2 rounded ${
          paymentStatus === "success"
            ? "bg-black text-white"
            : "bg-gray-400 text-gray-700 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
    </div>
  );
};

export default ApplyPage;
