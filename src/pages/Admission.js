import React from 'react'
import admission from '../images/chair.jpg'
import first from '../images/arv.jpg'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'


import one from '../images/admission/1.png'
import two from '../images/admission/2.png'
import three from '../images/admission/3.png'
import four from '../images/admission/4.png'
import five from '../images/admission/5.png'

const Admission = () => {

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <>
            <div className='overflow-hidden font-kumbh'>

                <Helmet>
                    <title>Apply Now</title>
                    <meta
                        name="description"
                        content="Enhance your skills in direction, cinematography, editing, and VFX with our expert-led workshops. Hands-on training for aspiring professionals. Join now!"
                    />
                    <meta
                        name="keywords"
                        content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>

                <section>

                    <div className='relative'>

                        <div className='relative'>
                            <img src={admission} className='w-full object-cover' alt="" />
                            <div className='absolute backdrop-blur-sm bg-black/30 inset-0 top-0'></div>
                        </div>

                        <div className='absolute w-full h-full top-4 flex justify-center items-center'>

                            <h1 className='uppercase text-[white] text-[20px] md:text-[50px] text-center font-bold'>Admission Open</h1>

                        </div>
                    </div>
                </section>


                {/* ----------------- how to apply ------------------------ */}

                <section className='pt-8 md:pt-20 pb-10 md:pb-20 bg-black'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='mb-4 md:mb-6 font-bold text-white text-[18px] md:text-[30px]'>How To Apply?</h3>
                            <div className='flex flex-col gap-y-3'>
                                <p className='text-center text-[12px]  md:text-[14px] md:font-semibold text-gray-200 font-[roboto]'>
                                    To join Cinema Factory Film Academy, first, fill out the enquiry form or call us. Next, speak with our student counselor to finalize your chosen craft.
                                    Then, complete the application form and attend an interview. Upon acceptance, you'll receive an acceptance letter.
                                </p>
                            </div>
                            <div className='flex justify-center items-center mt-4 md:mt-6'>
                                <Link to='/contact' onClick={topPage}>
                                    <button className=' text-[14px] md:text-[16px] px-8 md:px-10 py-2 rounded-md  bg-[#ff0000] text-white font-[poppins] font-semibold uppercase hover:scale-105 duration-300 hover:bg-transparent hover:border hover:border-white'>Apply Now</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>


                {/* --------------------------------- process --------------------- */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-20'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex justify-center items-center mb-8 md:mb-12'>
                            <h3 className='font-bold text-[20px] text-center md:text-[30px] text-black uppercase '> Here's the process to join Cinema Factory Film Academy </h3>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid  grid-col-1 md:grid-cols-3 gap-x-2 gap-y-8 md:gap-y-10'>


                                <div className='w-full md:w-[80%] bg-white border border-gray-400 rounded-md group'>
                                    <div>
                                        <div>
                                            <img src={one} className='w-full object-cover rounded-t-md' alt="" />
                                        </div>
                                        <div className='px-4 py-4 group-hover:bg-black group-hover:rounded-b-md'>
                                            <h3 className='font-semibold text-[16px] md:text-[18px] uppercase group-hover:text-white  mb-4'>First Process</h3>
                                            <p className='text-[14px] font-[roboto] text-justify group-hover:text-gray-200'>
                                                <span className='font-bold'>Enquiry:</span>  Start by filling out the enquiry form or calling us.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[80%] bg-white border border-gray-400 rounded-md group'>
                                    <div>
                                        <div>
                                            <img src={two} className='w-full object-cover rounded-t-md' alt="" />
                                        </div>
                                        <div className='px-4 py-4 group-hover:bg-black group-hover:rounded-b-md'>
                                            <h3 className='font-semibold text-[16px] md:text-[18px] uppercase group-hover:text-white  mb-4'>Second Process</h3>
                                            <p className='text-[14px] font-[roboto] text-justify group-hover:text-gray-200'>
                                                <span className='font-bold'>Counseling:  </span> Session with our counselor to explore interests and choose your craft.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[80%] bg-white border border-gray-400 rounded-md group'>
                                    <div>
                                        <div>
                                            <img src={three} className='w-full object-cover rounded-t-md' alt="" />
                                        </div>
                                        <div className='px-4 py-4 group-hover:bg-black group-hover:rounded-b-md'>
                                            <h3 className='font-semibold text-[16px] md:text-[18px] uppercase group-hover:text-white  mb-4'>Thrid Process</h3>
                                            <p className='text-[14px] font-[roboto] text-justify group-hover:text-gray-200'>
                                                <span className='font-bold'>Application:   </span> Submit your completed application form.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[80%] bg-white border border-gray-400 rounded-md group'>
                                    <div>
                                        <div>
                                            <img src={four} className='w-full object-cover rounded-t-md' alt="" />
                                        </div>
                                        <div className='px-4 py-4 group-hover:bg-black group-hover:rounded-b-md'>
                                            <h3 className='font-semibold text-[16px] md:text-[18px] uppercase group-hover:text-white  mb-4'>Fourth Process</h3>
                                            <p className='text-[14px] font-[roboto] text-justify group-hover:text-gray-200'>
                                                <span className='font-bold'>Interview:   </span>  Participate in an interview with our admissions team.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                                <div className='w-full md:w-[80%] bg-white border border-gray-400 rounded-md group'>
                                    <div>
                                        <div>
                                            <img src={five} className='w-full object-cover rounded-t-md' alt="" />
                                        </div>
                                        <div className='px-4 py-4 group-hover:bg-black group-hover:rounded-b-md'>
                                            <h3 className='font-semibold text-[16px] md:text-[18px] uppercase group-hover:text-white  mb-4'>Fifth Process</h3>
                                            <p className='text-[14px] font-[roboto] text-justify group-hover:text-gray-200'>
                                                <span className='font-bold'>Admission:    </span>  Receive your acceptance letter upon selection.
                                            </p>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </section>


                {/*----------------------- Connect with our academic counsellor ----------------------------*/}

                <section className=' '>

                    <div className="pt-10 md:pt-20 pb-10 md:pb-20 inset-0 -z-10 size-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

                        <div className='w-full px-4 md:w-[80%] mx-auto'>

                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='font-bold text-[18px] md:text-[30px] text-white text-center'>Connect with our academic counsellor</h3>
                                <p className=' text-[12px] font-[roboto] md:text-[14px] text-gray-200 text-center mt-4 '>
                                    To join Cinema Factory Film Academy, start by filling out the enquiry form or calling us. Once you've reached out, you'll connect with our academic counselor,
                                    who will guide you in exploring your interests and help you choose your preferred craft. Click the button below to connect with us.
                                </p>

                                <div className='mt-6 md:mt-10'>
                                    <Link to='/contact' onClick={topPage}>
                                        <button className='hover:scale-105 duration-300 hover:bg-[#ff0000]/10 hover:border hover:border-white font-semibold bg-[#ff0000] px-8 py-2 rounded-md text-white text-[14px] md:text-[16px] '>Communicate with Us</button>
                                    </Link>
                                </div>
                            </div>


                            <div className=' mt-8 md:mt-20'>

                                <div>
                                    <h3 className='font-bold text-[18px] md:text-[26px] text-white mb-2 text-center'>Admissions are now open for the Advanced Certification 1 year course in 2024 Batch</h3>

                                    <p className='text-[12px] md:text-[14px] text-gray-200 text-center mt-4 font-[roboto]'>
                                        Admission open for 2024 batch in 1 yr diploma in Direction, Cinematography, Editing, VFX. Click below to secure your spots with paying application fee
                                    </p>

                                    <div className='flex flex-col justify-center items-center mt-6 gap-y-6'>
                                        <p className='font-bold text-white text-[16px] md:text-[18px]'>Application Fee - ₹5000</p>
                                        <div>
                                            <Link to='/contact' onClick={topPage}>
                                                <button className='font-bold text-[10px] md:text-[12px] border border-red-500 hover:bg-[#ff0000]/40 duration-500 rounded-md px-8 py-2 text-white '>PROCEED TO PAY</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </section >

            </div >

        </>

    )
}

export default Admission
