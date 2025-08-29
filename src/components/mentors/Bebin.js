import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import banner from '../../images/mentors/bebin/antony bebin.png'
import bannerOne from '../../images/mentors/bebin/antony_phone.png'

import vfx from '../../images/mentors/bebin/antony_work.jpg'


import posterOne from '../../images/poster/bebin/1.jpg'
import posterTwo from '../../images/poster/bebin/2.jpg'
import posterThree from '../../images/poster/bebin/3.jpg'
import posterFour from '../../images/poster/bebin/4.jpg'
import posterFive from '../../images/poster/bebin/5.jpg'
import posterSix from '../../images/poster/bebin/6.jpg'
import posterSeven from '../../images/poster/bebin/8.jpg'
import posterEight from '../../images/poster/bebin/7.jpg'



// import video from '../../images/mentors/stanly/stanley_video.mp4'



const Bebin = () => {

    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        responsive: [
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "20px",
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "15px",
                }
            }
        ]
    };

    function topPage() {
        window.scroll(0, 0)
    }

    return (
        <>

            <div className='font-kumbh overflow-hidden'>

                <section>

                    <div className='relative'>

                        <div className='hidden md:flex'>
                            <img src={banner} className='w-full  object-cover' alt="" />
                        </div>

                        <div className='flex md:hidden'>
                            <img src={bannerOne} className='w-full h-screen md:h-auto object-cover' alt="" />
                        </div>

                        <div className='absolute bottom-14 w-full'>
                            <div className='flex justify-center items-center'>
                                <h3 className=' text-[24px] text-center md:text-[45px] font-specialElite font-semibold text-[#ffa500] '>Learn from Antony Bebin: Precision in color</h3>
                            </div>
                        </div>


                    </div>


                </section>


                <section className='bg-black pt-10 md:pt-20 pb-10 md:pb-20 '>
                    <div className='px-4 w-full  md:w-[80%] mx-auto'>

                        <div className='flex  flex-col md:flex-row items-center justify-center gap-y-10 gap-x-20  '>

                            <div className='w-full md:w-[50%] mx-auto h-full'>

                                <div className='w-full h-full'>
                                    {/* <video className='w-full object-cover h-full rounded-md' autoPlay muted loop playsInline >
                                        <source src={video} type="video/mp4" />
                                    </video> */}
                                    <div className='flex justify-center md:justify-end'>
                                        <img src={vfx} className='w-full md:w-[90%] object-cover' alt="" />
                                    </div>
                                </div>

                            </div>

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex flex-col gap-y-14 justify-center items-start'>

                                    <ul className='ml-3 md:ml-0 list-disc font-semibold text-[12px] md:text-[16px] flex flex-col gap-y-3 md:gap-y-6 text-white'>
                                        <li>Over 10 years as a Color Specialist and Editor at TRANSIMAGE PRODUCTIONS, TONE STUDIO, Ria Digital Solutions, and DIGITAL MAGIC VISUALS in Chennai.</li>
                                        <li>Proficient in DaVinci Resolve, Baselight 4.4, Adobe Premiere Pro, and Adobe Photoshop.</li>
                                        <li>Expert in digital imaging, including Laser Graphics Scanner ‘The Director’ and Arri Laser Recorder, with skills in Arri Raw, Red Raw, and ProRes.</li>
                                        <li>Effective collaborator with VFX teams, editors, and cinematographers, ensuring smooth post-production integration.</li>
                        
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className=' '>
                    <div className="pt-10 md:pt-20 pb-10 md:pb-20 top-0 z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" >


                        <div className='w-full px-4 md:w-[80%] mx-auto '>

                            <div className='flex flex-col md:flex-row gap-y-10 items-center '>

                                <div className='w-full md:w-[50%] mx-auto'>
                                    <div>
                                        <h3 className='font-bold text-[#ff0000] uppercase text-center md:text-start text-[24px] md:text-[30px] md:tracking-[3px]'>His best Recognition</h3>

                                        <ul className='list-disc text-[12px] md:text-[14px] mt-6 md:mt-8 ml-4 space-y-3 md:space-y-5 text-gray-200'>
                                        <li>Recognized for exceptional color grading and digital imaging, contributing to high-profile project success.</li>                                       
                                        <li>Pioneered advanced color grading techniques, enhancing visual storytelling and adapting to industry standards.</li>                                       
                                        <li>Demonstrated leadership in guiding post-production teams to achieve high-quality results under tight deadlines.</li>                                       
                                        <li>Committed to professional growth through ongoing certifications and experience with the latest tools.</li>                                       
                                                                        
                                       
                                         </ul>
                                    </div>
                                </div>



                                <div className='w-full md:w-[50%] mx-auto'>

                                    <div className='flex justify-center md:justify-end'>
                                        <img src={vfx} className='w-full md:w-[90%] object-cover' alt="" />
                                    </div>

                                    <div>

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section >


                <section className='pt-10 md:pt-20 pb-10 md:pb-20 bg-black'>

                    <div className='w-full mx-auto'>

                        <div className='flex justify-center items-center mb-10 px-4 '>
                            <h3 className='text-center font-bold uppercase text-white text-[20px] md:text-[35px] md:tracking-[2px]'>Learn from the Director Behind these Films</h3>
                        </div>

                        <div className=''>

                            <div className="slider-container  mx-auto">
                                <Slider {...settings} className="">
                                    <div className='px-2'>
                                        <img src={posterOne} className='w-full object-cover' alt="" />
                                    </div>
                                    <div className='px-2'>
                                        <img src={posterTwo} className='w-full object-cover' alt="" />
                                    </div>
                                    <div className='px-2'>
                                        <img src={posterThree} className='w-full object-cover' alt="" />
                                    </div>
                                    <div className='px-2'>
                                        <img src={posterFour} className='w-full object-cover' alt="" />
                                    </div>

                                    <div className='px-2'>
                                        <img src={posterFive} className='w-full object-cover' alt="" />
                                    </div>

                                    <div className='px-2'>
                                        <img src={posterSix} className='w-full object-cover' alt="" />
                                    </div>

                                    <div className='px-2'>
                                        <img src={posterSeven} className='w-full object-cover' alt="" />
                                    </div>

                                    <div className='px-2'>
                                        <img src={posterEight} className='w-full object-cover' alt="" />
                                    </div>




                                </Slider>
                            </div>

                        </div>

                    </div>

                </section>



                {/* ----------------- how to apply ------------------------ */}

                <section className='pt-8 md:pt-20 pb-10 md:pb-20 bg-black'>
                    <div className='w-full px-4 md:w-[80%] mx-auto'>

                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='mb-4 md:mb-6 font-bold text-white text-[18px] md:text-[30px] uppercase'>How To Apply?</h3>
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



            </div >


        </>
    )
}

export default Bebin
