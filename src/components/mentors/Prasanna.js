import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import banner from '../../images/mentors/Prasanna/prasana_web.png'
import bannerOne from '../../images/mentors/Prasanna/prasana_mobile.png'

import vfx from '../../images/mentors/Prasanna/prasanna_work.png'


import posterOne from '../../images/poster/prasanna/mv1.png'
import posterTwo from '../../images/poster/prasanna/mv2.png'
import posterThree from '../../images/poster/prasanna/mv3.png'
import posterFour from '../../images/poster/prasanna/mv4.png'
import posterFive from '../../images/poster/prasanna/mv5.png'
import posterSix from '../../images/poster/prasanna/mv6.png'
import posterSeven from '../../images/poster/prasanna/mv7.png'
import posterEight from '../../images/poster/prasanna/mv8.png'
import posterNine from '../../images/poster/prasanna/mv9.png'
import posterTen from '../../images/poster/prasanna/mv10.png'


// import video from '../../images/mentors/Prasanna/prasana.mp4'

//icons
import { FaStar } from "react-icons/fa6";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaRocket } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
import { GiTrophyCup } from "react-icons/gi";


const Prasanna = () => {

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
                                <h3 className=' text-[20px] text-center md:text-[45px] font-specialElite font-semibold text-[#ffa500] px-4 md:px-14 '>Learn from the acclaimed master whose expertise and achievements set the gold standard in the industry</h3>
                            </div>
                        </div>


                    </div>


                </section>


                <section className='bg-black pt-10 md:pt-20 pb-10 md:pb-20 '>
                    <div className='px-4 w-full  md:w-[80%] mx-auto'>

                        <div className='flex  flex-col md:flex-row items-center justify-center gap-y-10 gap-x-20  '>
{/* 
                            <div className='w-full md:w-[50%] mx-auto h-full'>

                                <div className='w-full h-full'>
                                    <video className='w-full object-cover h-full rounded-md' autoPlay muted loop playsInline >
                                        <source src={video} type="video/mp4" />
                                    </video>
                                </div>

                            </div> */}

                            <div className='w-full md:w-[50%] mx-auto'>
                                <div className='flex flex-col gap-y-14 justify-center items-start'>

                                    <ul className='ml-3 md:ml-0 list-disc font-semibold text-[12px] md:text-[16px] flex flex-col gap-y-3 md:gap-y-6 text-white'>
                                   
                                   <li>Self-taught professional photographer with 23 years of experience.</li>
                                   <li>Specializes in People and Advertising photography.</li>
                                   <li>Notable clients include Sony India, Phoenix Market City, Velammal Hospitals, and Jeyachandran Gold House.</li>
                                   <li>Certified Master Trainer and Assessor from MEPSC and MESC.</li>
                                   <li>Conducted over 400 photography workshops.</li>
                                   <li>Brand ambassador for Godox and former Brand Influencer for Sony India.</li>
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
                                          <li> Contributed articles to Best Photography Today, Classic Imaging, and Studio News Photography magazines.</li>
                                          <li>Official photographer for Hilary Clinton’s visit to Kalakshetra (2011) and President Pranab Mukherji’s visit (2013).</li>
                                          <li>Photoshoot for Rolls Royce’s Wraith in Chennai (2013).</li>
                                          <li>Five photos published in National Geographic’s Daily Dozen section (2013-2016), including one as editor’s favorite.</li>
                                          <li>Authored two books, Pidhana and Bhuprana , on the flora and fauna of Kalakshetra Foundation.</li>
                                          <li>Awarded Best Mentor in Tamilnadu by Image Today (2016).</li>
                                          <li>Received Best Product and Advertising Photographer award at The International Camera Fair (2016).</li>
                                          <li>Works featured in various national and regional magazines.</li>
                                          
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
                                    <div className='px-2'>
                                        <img src={posterNine} className='w-full object-cover' alt="" />
                                    </div>
                                    <div className='px-2'>
                                        <img src={posterTen} className='w-full object-cover' alt="" />
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

export default Prasanna
