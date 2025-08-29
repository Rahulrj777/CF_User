import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const DirectionFAQ = () => {
    const [open, setOpen] = useState(null);

    const handleOpen = (value) => {
        setOpen(open === value ? null : value);
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-transparent   w-full  mx-auto font-[poppins]">
            <div className="grid grid-cols-1 md:grid-cols-1  gap-y-8 md:gap-y-10">

                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(1)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-4 py-6 font-semibold">
                            What does the curriculum consist of?
                            <Icon id={1} open={open} />
                        </div>
                        {open === 1 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <div className="flex flex-col gap-y-1">

                                    <p className="text-gray-300  text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                        The first six months focus on learning programs including screenplay and direction, while the second six months are dedicated to making a film or web series.
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(2)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Who is the Course Director?

                            <Icon id={2} open={open} />
                        </div>
                        {open === 2 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Popular film maker SS Stanly is the Course Director and Head of the Department.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(3)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What topics are covered in Semester 1?
                            <Icon id={3} open={open} />
                        </div>
                        {open === 3 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Semester 1 includes numerous exercises in screenplay writing, creating two theme-based short films, and covering the basics of editing, cinematography, and VFX.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(4)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What will I learn during the Introduction to Filmmaking months?
                            <Icon id={4} open={open} />
                        </div>
                        {open === 4 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    You will learn about the history of cinema, different film genres, and film language and techniques.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(5)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                        How is the weekly schedule structured?
                            <Icon id={5} open={open} />
                        </div>
                        {open === 5 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                The schedule includes a mix of lectures, workshops, practical exercises, guest lectures, film analysis, and project work from Monday to Friday, 9:30 am - 5:00 pm.

                                </p>
                            </div>
                        )}
                    </div>
                </div>




            </div>
        </div>
    );
};

export default DirectionFAQ;
