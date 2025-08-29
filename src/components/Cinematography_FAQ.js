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

const CinematographyFAQ = () => {
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
                            What courses does Cinema Factory offer?
                            <Icon id={1} open={open} />
                        </div>
                        {open === 1 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <div className="flex flex-col gap-y-1">

                                    <p className="text-gray-300  text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                        Cinema Factory offers a one-year course in Screenplay and Direction, Digital Cinematography, Film Editing
                                        and VFX, Acting, and Choreography as weekend courses. Cinema Factory will offer special one-month
                                        professional filmmaking courses soon at various parts of South India.
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(2)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            How is the course structured?

                            <Icon id={2} open={open} />
                        </div>
                        {open === 2 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    The first six months cover the major portions of the syllabus, while the second term focuses on industry
                                    visits and filming a web series.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(3)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Are there placement opportunities available for graduates?
                            <Icon id={3} open={open} />
                        </div>
                        {open === 3 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Cinema Factory strives to offer placements in the film and media industry on a requirement basis.                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(4)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What  opportunities do students have for practical experience?
                            <Icon id={4} open={open} />
                        </div>
                        {open === 4 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Students have the opportunity to shoot a web series while studying and participate in a 3-day overseas trip.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(5)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Who teaches the courses at Cinema Factory?
                            <Icon id={5} open={open} />
                        </div>
                        {open === 5 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Our regular faculties include award-winning filmmakers who bring their expertise to the classroom.
                                </p>
                            </div>
                        )}
                    </div>
                </div>




            </div>
        </div>
    );
};

export default CinematographyFAQ;
