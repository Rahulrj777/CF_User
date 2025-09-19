import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import Stepper from "./Stepper";
import PersonalDetails from "./PersonalDetails";
import AdditionalDetails from "./AdditionalDetails";
import AddressDetails from "./AddressDetails";
import CourseDetails from "./CourseDetails";

const MultiStepForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    fatherName: "",
    fatherPhone: "",
    age: "",
    gender: "",
    dob: "",
    pan: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    courses: [],
  });

  // Set step & payment status from URL params (after PayPhi redirect)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const step = parseInt(params.get("step"));
    const payment = params.get("payment");

    if (!isNaN(step)) setCurrentStep(step);
    if (payment === "success") setPaymentStatus("success");
    else if (payment === "failed") setPaymentStatus("failed");
  }, [location.search]);

  const handleNext = () => {
    if (validateFields()) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (validateFields()) {
      const url =
        "https://script.google.com/macros/s/AKfycbyvkT7blpr9eG_vnrMkr7OYOzHxoeStAp7ds5cZoYL2ASZLMCzaYVzOm4qqy7JpcpKJ/exec";

      const filteredFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => {
          if (Array.isArray(value)) return value.length > 0;
          return value !== "";
        })
      );

      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filteredFormData),
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
            pan: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            courses: [],
          });
          navigate("/apply"); // back to first page if needed
        })
        .catch((err) => {
          console.error(err);
          toast.error("Submission failed, please try again.");
        });
    }
  };

  const validateFields = () => {
    const { name, email, phone, fatherPhone } = formData;
    if (!name || !email || !phone || !fatherPhone) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const steps = [
    <PersonalDetails formData={formData} setFormData={setFormData} />,
    <AdditionalDetails formData={formData} setFormData={setFormData} />,
    <AddressDetails formData={formData} setFormData={setFormData} />,
    <CourseDetails
      formData={formData}
      setFormData={setFormData}
      paymentStatus={paymentStatus}
      setPaymentStatus={setPaymentStatus}
    />,
  ];

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center pt-10 md:pt-20 pb-10 md:pb-20">
        <Helmet>
          <title>Apply Now</title>
        </Helmet>

        <div className="w-full px-4 md:w-[60%] mx-auto">
          <Stepper currentStep={currentStep} />

          <div className="mt-2 md:mt-8">{steps[currentStep]}</div>

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
                disabled={paymentStatus !== "success"}
                className={`px-8 py-2 text-[12px] md:text-[14px] font-semibold uppercase rounded ${
                  paymentStatus === "success"
                    ? "bg-green-500 text-white"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
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
