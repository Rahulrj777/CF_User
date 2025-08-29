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

const EditingFAQ = () => {
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
                            What is the duration of the Editing course at Cinema Factory?
                            <Icon id={1} open={open} />
                        </div>
                        {open === 1 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <div className="flex flex-col gap-y-1">

                                    <p className="text-gray-300  text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                        The course duration is one year, with the first six months focused on learning and the next six months dedicated to internships and web series production.
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(2)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What will I learn in the first six months of the course?

                            <Icon id={2} open={open} />
                        </div>
                        {open === 2 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    You will learn comprehensive editing skills, including spot editing, data transfers, and creative editing, as well as cinematography, screenplay direction, VFX, and the role of a colorist.
                                </p>
                            </div>
                        )}
                    </div>
                </div>



                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(3)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            What practical experience will I gain during the second six months?
                            <Icon id={3} open={open} />
                        </div>
                        {open === 3 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    You will participate in an internship, involve in web series production, and apply your skills in real-world scenarios, including spot editing during shoots.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-left' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(4)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Who will be mentoring the course?
                            <Icon id={4} open={open} />
                        </div>
                        {open === 4 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    The course will be mentored by national award winner Raja Mohammud.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


                <div data-aos='fade-down-right' data-aos-delay="50" data-aos-duration="1000">
                    <div className="  border border-gray-500  rounded-md cursor-pointer" onClick={() => handleOpen(5)}>
                        <div className="flex justify-between items-center text-[11px] sm:text-[14px] md:text-[16px] text-white px-3 py-4 font-semibold">
                            Which software will I master during the course?
                            <Icon id={5} open={open} />
                        </div>
                        {open === 5 && (
                            <div className=" font-normal text-blue-gray-800  border-b border-gray-500 rounded-md px-3">
                                <p className="text-gray-300 text-[11px] sm:text-[13px] md:text-[14px] font-normal pb-3">
                                    You will master editing software such as Final Cut Pro (FCP), Avid, and Adobe.
                                </p>
                            </div>
                        )}
                    </div>
                </div>




            </div>
        </div>
    );
};

export default EditingFAQ;
