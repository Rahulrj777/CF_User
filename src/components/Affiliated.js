import React from 'react'
import Slider from "react-slick";

import logoOne from '../images/clients/nsdc.png'
import logoTwo from '../images/clients/memc.png'
import logoThree from '../images/clients/skill_india.png'



import { LuLogOut } from 'react-icons/lu';


const Affiliated = () => {

    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        slidesToScroll: 1,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 3000,
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
                    slidesToShow: 4,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
                    slidesToShow: 2,
                    centerPadding: "15px",
                }
            }
        ]
    };

    return (
        <>
            <div>
                {/* <div className="slider-container font-[poppins]">
                    <Slider {...settings}> */}

                <div className='grid grid-cols-3 md:grid-cols-3  gap-x-14 md:gap-x-2 gap-y-2 '>


                    <div className='p-2 flex flex-col justify-center items-center' >

                        <div className='flex justify-center items-center'  >
                            <img src={logoOne} className=' w-20 sm:w-28 md:w-28  object-cover  drop-shadow-lg' alt="clients" title="Filmmaking" loading="lazy" fetchpriority="auto" />
                        </div>

                    </div>


                    <div className='p-2 flex flex-col justify-center items-center' >

                        <div className='flex justify-center items-center'  >
                            <img src={logoTwo} className=' w-20 sm:w-28 md:w-28  object-cover  drop-shadow-lg' alt="clients" title="Filmmaking" loading="lazy" fetchpriority="auto" />
                        </div>


                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' >

                        <div className='flex justify-center items-center'  >
                            <img src={logoThree} className=' w-20 sm:w-28 md:w-28  object-cover  drop-shadow-lg' alt="clients" title="Filmmaking" loading="lazy" fetchpriority="auto" />
                        </div>
                    </div>


                    


                </div>
            </div>

        </>
    )
}

export default Affiliated