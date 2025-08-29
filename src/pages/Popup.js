import React, { useState, useEffect } from 'react';
import banner from '../images/banner/image8.jpg';
import { IoClose } from "react-icons/io5";

const Popup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 2 seconds
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 2000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 w-full font-[poppins]">
          <div className="relative w-[90%] max-w-lg bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setIsPopupVisible(false)}
              className="absolute top-1 md:top-2 right-1 md:right-2 bg-black text-white  p-1 rounded-full hover:bg-red-600"
            >
              <IoClose className="text-white text-[16px] md:text-2xl" />
            </button>
            {/* Image */}
            <img src={banner} alt="Banner" className="w-full h-auto object-cover" />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
