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

const ActingFAQ = () => {
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
                            What will I learn in the Film Acting courses?
                            <Icon id={1} open={open} />
                        </div>
                        {open === 1 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <div className="flex flex-col gap-y-1">

                                    <p className="text-gray-300  text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                        Our courses cover various aspects of film acting, including scene study, character development, and audition techniques.                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(2)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What is the duration of the Film Acting courses?

                            <Icon id={2} open={open} />
                        </div>
                        {open === 2 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    We offer both 3-month and 6-month courses, held on weekends (Saturday and Sunday, 9:30 am - 5:00 pm).                                </p>
                            </div>
                        )}
                    </div>
                </div>



                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(3)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Who can apply for the Film Acting courses?
                            <Icon id={3} open={open} />
                        </div>
                        {open === 3 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    Our courses are designed for everyone, whether you're a beginner or an experienced actor looking to enhance your skills.

                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(4)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                        Will I get to work on real projects during the course?
                            <Icon id={4} open={open} />
                        </div>
                        {open === 4 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                Yes, our 6-month program offers the opportunity to work on a web series produced by Cinema Factory Academy.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(5)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                        What is the certification process?
                            <Icon id={5} open={open} />
                        </div>
                        {open === 5 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                Upon successful completion of the course, you will receive a certificate from Cinema Factory Academy.
                                </p>
                            </div>
                        )}
                    </div>
                </div>




            </div>
        </div>
    );
};

export default ActingFAQ;
