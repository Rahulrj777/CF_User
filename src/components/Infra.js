import React, { useEffect } from 'react'


import kit from '../images/place/kit.webp'
import vfx from '../images/place/lab.webp'
import room from '../images/place/class.webp'
import dubbing from '../images/place/dubbing.webp'
import that from '../images/place/theater.webp'
import pantry from '../images/place/pantry.webp'
import park from '../images/place/park.webp'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Infra = () => {

  const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 3,
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
          slidesToShow: 1,
          centerPadding: "15px",
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings} className='px-4 py-4 md:py-3 font-kumbh '>

        <div className='flex ' >
          <div className='flex flex-col items-center'>

            <div className='flex '>
              <div className='w-full'>
                <img src={kit} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md ' alt="" />
              </div>
            </div>

            <div>
              <div className='mt-1 md:mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px] text-center '>PROFESSIONAL FILMMAKING EQUIPMENT</h3>
              </div>
            </div>

          </div>
        </div>



        <div className='flex ' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col items-center '>

            <div className='flex items-center'>
              <div>
               <img src={vfx} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />
              </div>
            </div>

            <div>
              <div className=' flex flex-col mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px] text-center'>LARGE SHOOTING FLOOR</h3>
              </div>
            </div>

          </div>
        </div>

        <div className='flex' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col  items-center'>

            <div className='flex items-center'>
              <div className='w-full'>
                     <img src={room} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />
              </div>
            </div>

            <div>
              <div className='mt-1 md:mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px]'>CLASS ROOMS</h3>
              </div>
            </div>

          </div>
        </div>



        <div className='flex ' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col items-center'>

            <div className='flex items-center'>
              <div>
               <img src={pantry} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />
              </div>
            </div>

            <div>
              <div className=' flex flex-col mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px]'>PANTRY</h3>
              </div>
            </div>

          </div>
        </div>


        <div className='flex ' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col items-center'>

            <div className='flex items-center'>
              <div className='w-full'>
                <img src={dubbing} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />

              </div>
            </div>

            <div>
              <div className='mt-1 md:mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px]'>DUBBING STUDIO </h3>
              </div>
            </div>

          </div>
        </div>


        <div className='flex ' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col items-center'>

            <div className='flex items-center'>
              <div className='w-full'>
                   <img src={that} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />
              </div>
            </div>

            <div>
              <div className='mt-1 md:mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px]'>PREVIEW THEATRE  </h3>
              </div>
            </div>

          </div>
        </div>

        <div className='flex ' data-aos='fade-up' data-aos-duration='3000'>
          <div className='flex flex-col items-center'>

            <div className='flex items-center'>
              <div className='w-full'>
                  <img src={park} className='object-cover w-56 sm:w-64 md:w-80 drop-shadow-md' alt="" />
              </div>
            </div>

            <div>
              <div className='mt-1 md:mt-2'>
                <h3 className='text-[#55595c] font-bold text-[12px] md:text-[14px]'>PARKING FACILITY  </h3>
              </div>
            </div>

          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Infra
