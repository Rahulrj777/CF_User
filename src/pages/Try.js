// Try.js
import React, { useState } from 'react';

import banner1 from '../images/banner/camera.jpg';



const Try = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = 6;
    const visibleCards = 4;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - visibleCards : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalCards - visibleCards ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full mx-auto">
            <div className="flex overflow-hidden">
                <div className={`flex-none w-1/4 p-2 card ${currentIndex === 0 || currentIndex === totalCards - visibleCards ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 0</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`flex-none w-1/4 p-2 card ${currentIndex <= 1 || currentIndex === totalCards - visibleCards + 1 ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 1</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
                <div className={`flex-none w-1/4 p-2 card ${currentIndex <= 2 || currentIndex === totalCards - visibleCards + 2 ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 2</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
                <div className={`flex-none w-1/4 p-2 card ${currentIndex <= 3 || currentIndex === totalCards - visibleCards + 3 ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 3</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
                <div className={`flex-none w-1/4 p-2 card ${currentIndex >= 1 && currentIndex <= 4 ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 4</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                </div>
                <div className={`flex-none w-1/4 p-2 card ${currentIndex >= 2 && currentIndex <= 5 ? '' : 'hidden'}`}>
                    <div className="w-[30%] h-[30rem] m-2 group  bg-white/10  flex flex-col items-center justify-center gap-2 relative overflow-hidden cursor-pointer transition-all duration-300 ease-in shadow-lg -mt-6">

                        <div className="absolute inset-0 bg-white  transition-transform duration-500 ease-in-out -translate-x-full group-hover:translate-x-0 z-10"></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0 z-20">
                            <p className="font-semibold text-gray-900 tracking-wider text-xl ">Discover Our Collection</p>
                            <button className="mt-4 bg-[#ff0000] hover:bg-transparent hover:border-2 hover:border-[#ff0000] hover:text-[#ff0000]  text-white rounded-md shadow-md cursor-pointer py-2.5 px-6 text-sm font-semibold ">Explore More</button>
                        </div>

                        <div className="w-full">

                            <div className="w-full h-full relative" >
                                <img src={banner1} className="w-full h-[30rem] object-cover" alt="" />

                                <div className="absolute bottom-0 bg-[#ff0000]/30 py-4 w-full">
                                    <div className="flex justify-center items-center">
                                        <p className="font-semibold text-[16px]  uppercase text-white  tracking-[1px]">Direction 5</p>
                                        {/* <button className="uppercase text-[14px] font-semibold border border-white rounded-md px-5 py-2 text-white  ">Appy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePrev}
                    className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Prev
                </button>
                <button
                    onClick={handleNext}
                    className="px-4 py-2 mx-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Try;
