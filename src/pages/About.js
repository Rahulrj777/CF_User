import React from 'react'

import red from '../images/banner/red_background.jpg'


import banner from '../images/about/banner.jpg'
import founder from '../images/founder.jpg'
import bussiness from '../images/about/bussiness.png'




const About = () => {
    return (
        <>

            <div className='overflow-hidden font-kumbh'>

                <div className=''>
                    <img src={red} className='w-full h-screen fixed top-0 -z-20' alt="" />
                </div>

                <section>

                    <div className='relative top-0'>

                        <div className='relative'>
                            <img src={banner} className='w-full  object-cover' alt="" />
                            <div className='backdrop-blur-sm bg-black/55 inset-0 w-full absolute top-0 '></div>

                        </div>

                        <div className='absolute flex flex-col justify-center items-center w-full h-full top-0'>
                            <h3 className='text-[16px]  md:text-[50px] text-white font-semibold tracking-[4px] uppercase font-specialElite'>Behind The Scene Of  </h3>
                            <h1 className='text-[#ff0000] font-[poppins] text-[20px] md:text-[55px]  font-bold tracking-[1px] uppercase'>Cinema Factory</h1>
                        </div>
                    </div>
                </section>


                {/* ------------------- our mission & vission -------------------- */}

                <section className='bg-[#F2F0EF]   ' >

                    <div className='w-full mx-auto  md:px-0'>


                        <div className='flex flex-col gap-y-4 md:gap-y-10 md:flex-row items-center'>

                            <div className='w-full md:w-[50%] mx-auto px-4'>

                                <div className='md:px-20 py-6 md:py-10'>

                                    <div>
                                        <h3 className='text-[#ff0000] mb-2 md:mb-4 text-[20px] md:text-[32px] font-bold uppercase'>Our Story</h3>

                                        <div className='flex flex-col gap-y-2 '>
                                            <p className='text-[12px]  md:text-[14px] text-gray-800 '> The idea of "Cinema factory" started booming, when the whole world was doomed during the COVID days by its founder Mr.Rajesh Ravindran, with over a decade of experience in cinema industry and his never ending thirst to upbring cinema industry has led to the idea of " Cinema Factory". </p>
                                            <p className='text-[12px]  md:text-[14px] text-gray-800 '> Your next question is "What does cinema factory means, right?" " Cinema factory means "A core hub that produces the master minds of cinema industry" </p>
                                            <p className='text-[12px]  md:text-[14px] text-gray-800 '> Accompained with Mrs. Priya Rajesh and Mr. Umapathy the journey of cinema factory got a glory in the year 2021. </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>

                                <div className='flex justify-center '>
                                    <img src={founder} className='w-full object-cover ' alt="" />
                                </div>

                            </div>

                        </div>
                    </div>

                </section>



                <section className=' pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950'>
                    <div className='w-[90%] mx-auto '>

                        <div className='flex justify-center items-center  mb-6 md:mb-16'>
                            <h3 className='text-[18px] md:text-[28px] text-white text-center tracking-[2px] font-bold uppercase '>Our Brand Story</h3>
                        </div>

                        <div className='flex justify-center items-center'>

                            <div className='grid grid-cols-1 md:grid-cols-4 gap-y-5 md:gap-y-24  gap-x-14 h-full w-full'>

                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>The idea of Cinema Factory Film Academy boomed in 2021 </p>
                                </div>


                                <div className='flex justify-center items-center drop-shadow-lg border border-orange-500 hover:border hover:border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>With the guidance of FEFSI President RK Selvamani sir, we made a significant agreement with the Makeup Union.  </p>
                                </div>


                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>Our first batch of Makeup Union students started in November 2021.  </p>
                                </div>

                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center' >Convocation Ceremony in June 2022!  </p>
                                </div>


                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>Partnered with Franchisee at Kanyakumari  </p>
                                </div>


                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>Partnered with Bangalore franchisee </p>
                                </div>


                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>Officially launched Cinema Factory in Bangalore in 2022! </p>
                                </div>


                                <div className='w-full flex justify-center items-center drop-shadow-lg border border-orange-500 h-full border-dashed rounded-md px-2 py-8'>
                                    <p className='font-[roboto] text-[12px] md:text-[14px] text-gray-50 text-center'>Signed new venue agreement with Mr. Manoj Bharathi with the blessings of Iyakkunar Imayam Bharathiraja </p>
                                </div>

                            </div>

                        </div>


                    </div>
                </section>

                {/* ------------------------ Meet the team --------------------------  */}

                <section className='pt-10 md:pt-20 pb-10 md:pb-20'>
                    <div className=' w-full px-4 md:w-[80%] mx-auto'>




                        <div className='flex flex-col gap-y-10 md:gap-y-6 md:flex-row justify-center items-start mt-6 md:mt-14'>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div>
                                    <div className='flex flex-col items-center justify-center'>
                                        <div className='flex justify-center'>
                                            <img src={bussiness} className='w-full md:w-[80%] rounded-md object-cover' alt="" />
                                        </div>

                                        <div className='flex flex-col justify-center items-center gap-y-3 mt-4'>
                                            <h3 className='font-bold text-white font-[poppins] uppercase text-[22px]'>Mr.Rajesh Ravindran</h3>
                                            <p className='text-yellow-400 text-[14px] font-[roboto]'> Managing Director </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full md:w-[50%] mx-auto'>
                                <div className='px-2 '>

                                    <div className='flex flex-col gap-y-2 md:gap-y-10'>

                                        <div className='flex flex-col gap-y-3 justify-center items-center'>

                                            <h3 className='font-bold text-white tracking-[1px] uppercase text-[18px] md:text-[38px] text-center'>Our Founder Says</h3>

                                        </div>

                                        <p className='text-gray-200 text-[14px] md:text-[16px]  text-center font-[roboto]  md:leading-7'>
                                            <span className='text-[30px]'>"</span>  Our aim is to establish ourselves as Asia's top film institute, and I am committed to going to any length to support my students, mentors, and crew in achieving this vision. <span className='text-[30px]'>"</span>
                                        </p>


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

export default About
