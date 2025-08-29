import React from 'react'
import { Outlet } from 'react-router-dom';

import banner from '../images/banner/paper.jpg'

import webinar from '../images/webinar.jpg'

import direction from '../images/course/Direction.jpg'
import cinematography from '../images/course/Cinematography.jpg'
import vfx from '../images/course/vfx.jpg'
import edit from '../images/course/editing.jpg'
import acting from '../images/course/acting.jpg'
import music from '../images/course/music.jpg'
import di from '../images/course/DI.jpg'
import Timer from '../components/Timer'
import { Link } from 'react-router-dom'



const AllCourse = () => {
  return (
    <>

      <div className='overflow-hidden font-kumbh'>

        <div className='relative'>
          <img src={banner} className='fixed top-0 h-screen w-full object-cover -z-20 ' alt="" />
          <div className='backdrop-blur-md bg-black inset-0 absolute top-0'></div>
        </div>


        {/* -------------------------- 14 crafts ----------------------------- */}


        {/* one year course */}

        <section className=''>
          <div className='w-[90%] mx-auto pt-20 pb-20 font-kumbh'>

            <div className='mb-12'>
              <h3 className='text-center font-[parta] text-[40px] mb-4 uppercase font-bold'>one year course</h3>
              <p className='text-center text-[14px] w-[80%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit in blanditiis explicabo nostrum excepturi iusto distinctio esse saepe natus, placeat possimus voluptates incidunt amet maiores aperiam minima molestiae quisquam.</p>
            </div>

            <div className='flex justify-center items-center'>

              <div className='grid grid-cols-4 gap-x-8 gap-y-10'>


                <div>
                  <div className='flex flex-col gap-y-2 '>

                    <div className=''>
                      <Link to='/courses/direction'>
                        <img src={direction} className='w-full object-cover hover:grayscale' alt="Direction" />
                      </Link>

                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[18px] '>Direction</h3>

                      <Link to='/courses/direction'>
                        <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                      </Link>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>

                <div>
                  <div className='flex flex-col gap-y-2'>

                    <div>
                      <img src={direction} className='w-full object-cover hover:grayscale' alt="" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[18px] '>Cinematography</h3>

                      <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>


                <div>
                  <div className='flex flex-col gap-y-2'>

                    <div>
                      <img src={direction} className='w-full object-cover hover:grayscale' alt="" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[18px] '>Visual Effects & CG</h3>

                      <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>


                <div>
                  <div className='flex flex-col gap-y-2'>

                    <div>
                      <img src={direction} className='w-full object-cover hover:grayscale' alt="" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[18px] '>Editing</h3>

                      <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* one month course */}

        <section className='bg-black'>
          <div className='w-[90%] mx-auto pt-20 pb-20'>

            <div className='mb-12'>
              <h3 className='text-center font-[parta] text-[40px] mb-4 uppercase font-bold text-white'>Six Month course</h3>
              <p className='text-center text-[14px] w-[80%] mx-auto text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit in blanditiis explicabo nostrum excepturi iusto distinctio esse saepe natus, placeat possimus voluptates incidunt amet maiores aperiam minima molestiae quisquam.</p>
            </div>

            <div className='flex justify-center items-center'>

              <div className='grid grid-cols-4 gap-x-8 gap-y-10 '>


                <div>
                  <div className='flex flex-col gap-y-2'>

                    <div>
                      <img src={direction} className='w-full object-cover hover:grayscale' alt="" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[20px] text-white'>Acting</h3>

                      <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>


                <div>
                  <div className='flex flex-col gap-y-2'>

                    <div>
                      <img src={direction} className='w-full object-cover hover:grayscale' alt="" />
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h3 className='font-semibold text-[20px] text-white'>Digital Imaging</h3>

                      <button className='hover:border hover:border-gray-950 hover:bg-red-100 hover:text-[#ff0000] font-semibold border border-orange-500 bg-[#ff0000] px-3 py-1 rounded-md font-[roboto] text-white tracking-[1px] uppercase text-[14px]'>Apply Now</button>
                    </div>

                    <div className='border border-[#ff0000] '></div>

                    <div>
                      <p className='font-[roboto] text-[14px] text-justify text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minus sapiente animi autem iusto omnis, quisquam eligendi aliquam nisi nesciunt </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ----------------- Upcoming seminar details ---------------- */}

        <section>

          <div className=" pt-10 pb-20 top-0 z-[-2]  bg-black bg-[radial-gradient(#ff7b00_0.5px,#000207_1px)] bg-[size:20px_20px]" >
            <div className='w-[90%] mx-auto '>

              <div className='flex justify-center items-center '>
                <h3 className='font-bold text-center text-[40px] text-white uppercase'>Upcoming webinar details</h3>
              </div>


              <div className='flex justify-center items-center'>

                <div className='grid grid-cols-3 gap-x-12 mt-20'>

                  <div className=''>

                    <div className='flex flex-col items-center '>

                      <div className='relative group'>
                        <img src={webinar} className='w-full object-cover mx-auto' alt="" />

                        <div className='absolute  right-0  top-0 h-full z-10'>
                          <Timer />
                          {/* <p className='bg-[#ff0000]  py-3 px-5 font-semibold text-white'>03 : 12 : 1 : 10</p> */}
                        </div>

                        <div className='backdrop-blur-sm bg-orange-400/10 group-hover:inset-0 absolute top-0'></div>
                      </div>

                      <div className='mt-6'>
                        <h3 className='uppercase  text-[20px] text-white font-semibold tracking-[2px]'>Direction</h3>
                      </div>


                    </div>
                  </div>

                  <div className=''>

                    <div className='flex flex-col items-center '>

                      <div className='relative group'>
                        <img src={webinar} className='w-full object-cover mx-auto' alt="" />

                        <div className='absolute  right-0  top-0 h-full z-10'>
                          <Timer />
                          {/* <p className='bg-[#ff0000]  py-3 px-5 font-semibold text-white'>03 : 12 : 1 : 10</p> */}
                        </div>

                        <div className='backdrop-blur-sm bg-orange-400/10 group-hover:inset-0 absolute top-0'></div>
                      </div>

                      <div className='mt-6'>
                        <h3 className='uppercase  text-[20px] text-white font-semibold tracking-[2px]'>Acting</h3>
                      </div>


                    </div>
                  </div>

                  <div className=''>

                    <div className='flex flex-col items-center '>

                      <div className='relative group'>
                        <img src={webinar} className='w-full object-cover mx-auto' alt="" />

                        <div className='absolute  right-0  top-0 h-full z-10'>
                          <Timer />
                          {/* <p className='bg-[#ff0000]  py-3 px-5 font-semibold text-white'>03 : 12 : 1 : 10</p> */}
                        </div>

                        <div className='backdrop-blur-sm bg-orange-400/10 group-hover:inset-0 absolute top-0'></div>
                      </div>

                      <div className='mt-6'>
                        <h3 className='uppercase  text-[20px] text-white font-semibold tracking-[2px]'>Visual Effects & CG</h3>
                      </div>


                    </div>
                  </div>


                </div>

              </div>



            </div>
          </div>

        </section>

        {/* <Outlet /> */}
      </div>


    </>
  )
}

export default AllCourse