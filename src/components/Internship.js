import React from 'react'
import Slider from "react-slick";

import logoOne from '../images/internship/vishnu_ads_logo.png'
import logoTwo from '../images/internship/stage_unreal.png'
import logoThree from '../images/internship/PaperRocket.png'
import logoFour from '../images/internship/Mango_Post.png'
import logoFive from '../images/internship/Editree.png'
import logoSix from '../images/internship/Kolam.png'
import logoSeven from '../images/internship/Vizha.png'
import logoEight from '../images/internship/WildSparrows.png'
import logoNine from '../images/internship/Yaazhi.png'
import logoTen from '../images/internship/Simple_Pictures.png'
import logoElven from '../images/internship/TransImage.png'




import { LuLogOut } from 'react-icons/lu';


const Internhip = () => {

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

                <div className='grid grid-cols-3 md:grid-cols-5  gap-x-12 md:gap-x-2  gap-y-4 md:gap-y-8 '>


                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoOne} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>

                    </div>


                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoTwo} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>


                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoThree} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>


                    </div>

                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoFour} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>

                    </div>

                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoFive} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>

                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoSix} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoSeven} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoEight} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoNine} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoTen} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div>
                    {/* <div className='p-2 flex flex-col justify-center items-center' data-aos-delay='100'>

                        <div className='flex justify-center items-center'  >
                            <img src={logoElven} className=' w-20 sm:w-28 md:w-32  object-cover  drop-shadow-lg' alt="" />
                        </div>
                    </div> */}


                </div>

            </div>

        </>
    )
}

export default Internhip