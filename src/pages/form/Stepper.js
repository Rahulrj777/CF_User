import React from "react";

const Stepper = ({ currentStep }) => {
  const steps = [
    "Personal Details",
    "Additional Details",
    "Address Details",
    "Course Details",
  ];

  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center space-x-0">
          {" "}
          {/* Reduced the gap */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full
                        ${
                          currentStep > index || index === currentStep
                            ? "bg-[#ffa500] text-white"
                            : "bg-white text-gray-500"
                        }
                        border-2 ${
                          currentStep > index || index === currentStep
                            ? "border-[#ffa500]"
                            : "border-gray-300"
                        }`}
          >
            <span className="font-bold">{index + 1}</span>
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`h-1 w-14 md:w-44 ${
                currentStep > index ? "bg-[#ffa500]" : "bg-gray-300"
              } transition-all duration-300`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
