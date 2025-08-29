import React from 'react'

import logo from '../images/cf_logo.webp'


//icons

import { FaSquareXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { TbBrandWhatsapp } from "react-icons/tb";
import { FaThreads } from "react-icons/fa6";

import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";


import { Link } from 'react-router-dom';


const Footer = () => {

    function topPage() {
        window.scroll(0, 0)
    }


    return (
        <div className='font-[poppins]'>

            <section>
                <div className="bg-gray-950 pt-5 md:pt-0">
                    <div className="w-full px-4  md:w-[90%] mx-auto  sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 md:gap-x-6 ">
                        <div className=" px-2 md:px-5 py-2 md:py-10">
                            <div>
                                <img src={logo} className='w-52  md:w-60 object-cover'  alt="CF Logo" title="Filmmaking Academy" loading="lazy" fetchpriority="auto" />
                            </div>

                            <div>
                                <p className='font-[roboto] text-[11px] md:text-[12px] text-gray-300 font-light  mt-4 text-justify'>
                                    At Cinema Factory Academy, we are committed to helping you turn your passion into a career.
                                    Our courses are designed to be both practical and theoretical, ensuring you leave with a strong
                                    foundation and the confidence to pursue your dreams.
                                </p>
                            </div>
                        </div>

                        <div className="px-2 md:px-5 py-2 md:py-10">
                            <div className=" text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Quick Links</div>
                            <Link to='/' onClick={topPage} >
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Home </a>
                            </Link>
                            {/* <Link to='/about' onClick={topPage}>
                                <a className="my-3 block text-[14px] text-white hover:text-gray-300" href="/#"> About </a>
                            </Link> */}
                            <Link to='/workshops' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Workshops </a>
                            </Link>
                            <Link to='/contact' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Contact </a>
                            </Link>

                        </div>
                        <div className="px-2 md:px-5 py-2 md:py-10">
                            <div className=" text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Courses</div>
                            <Link to='/direction' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Direction & Screenplay </a>
                            </Link>
                            <Link to='/cinematography' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Cinematography</a>
                            </Link>
                            <Link to='/editing' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Editing </a>
                            </Link>
                            <Link to='/vfx' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Visual Effects </a>
                            </Link>
                            <Link to='/virtual_production' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Virtual Production </a>
                            </Link>
                            <Link to='/photography' onClick={topPage}>
                                <a className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#"> Photography </a>
                            </Link>
                        </div>
                        <div className="px-2 md:px-5 py-2 md:py-10">
                            <div className=" text-[14px] md:text-[16px] uppercase text-[#ff0000] font-bold">Contact us</div>
                            <p className="my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300" href="/#">No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India</p>

                            <a href="mailto:contact@cinemafactoryacademy.com" target="_blank" className=" my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                                <p className='flex items-center gap-x-1 '>  <span className='text-[18px]'><MdOutlineMail /></span>  contact@cinemafactoryacademy.com </p>
                            </a>

                            <a href="tel:+919884683888" target="_blank" className=" my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                                <p className='flex items-center gap-x-1 '>  <span className='text-[18px]'><MdOutlinePhoneAndroid /></span> +91 9884683888 </p>
                            </a>

                            <a href="tel:+919884428688" target="_blank" className=" my-3 block text-[12px] md:text-[14px] text-white hover:text-gray-300">
                                <p className='flex items-center gap-x-1 '>  <span className='text-[18px]'><MdOutlinePhoneAndroid /></span> +91 9345309632 </p>
                            </a>


                        </div>
                    </div>
                </div>

                <div className="bg-gray-950 md:pt-2">
                    <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col w-[90%] mx-auto items-center">



                        <div className=' flex flex-col md:flex-row  items-start gap-y-5 md:items-center justify-between w-full mt-4 md:mt-5 mb-2 md:mb-5 '>

                            <div>
                                <div className='flex items-center gap-x-5 md:gap-x-9  text-gray-200'>
                                    <section className="flex justify-center items-center">
                                        <Link to='https://www.facebook.com/profile.php?id=61559751436051' target='_blank'>
                                            <button
                                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100 text-gray-900  font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                            >
                                                <FiFacebook className="text-[12px] sm:text-[14px] group-hover:text-[#f15b2d]" />
                                                <span
                                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                                >
                                                    <p className=' text-[10px] md:text-[12px] text-gray-200'>Facebook</p>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                    <section className="flex justify-center items-center">
                                        <Link to="https://www.instagram.com/cinema_factory_academy/" target='_blank'>
                                            <button

                                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100  text-gray-900 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                            >
                                                <BsInstagram className="text-[12px] sm:text-[14px] group-hover:text-[#f15b2d]" />
                                                <span
                                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-12 duration-700 text-[14px] md:text-[16px]"
                                                >
                                                    <p className=' text-[10px] md:text-[12px] text-gray-200'>Instagram</p>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                    <section className="flex justify-center items-center">
                                        <Link to='https://x.com/CF_academy2024?t=50Xz_jo1R8-TMc3gVJnwwQ&s=09' target='_blank'>
                                            <button

                                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100  text-gray-900 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                            >
                                                <FaSquareXTwitter className="text-[12px] sm:text-[14px] group-hover:text-[#f15b2d]" />
                                                <span
                                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-[14px] md:text-[16px]"
                                                >
                                                    <p className=' text-[10px] md:text-[12px] text-gray-200'>Twitter</p>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                    <section className="flex justify-center items-center">
                                        <Link to="https://www.threads.net/@cinema_factory_academy" target='_blank'>
                                            <button
                                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100  text-gray-900  font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                            >
                                                <FaThreads className="text-[12px] sm:text-[14px] group-hover:text-[#f15b2d]" />
                                                <span
                                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-[14px] md:text-[16px]"
                                                >
                                                    <p className=' text-[10px] md:text-[12px] text-gray-200'>Threads</p>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                    <section className="flex justify-center items-center">
                                        <Link to="https://api.whatsapp.com/send?phone=9884683888" target='_blank' className="">
                                            <button
                                                className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gray-100 text-gray-900 font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                            >
                                                <TbBrandWhatsapp className="text-[12px] sm:text-[14px] group-hover:text-[#f15b2d]" />
                                                <span
                                                    className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-[14px] md:text-[16px]"
                                                >
                                                    <p className=' text-[10px] md:text-[12px] text-gray-200 '>Whatsapp</p>
                                                </span>
                                            </button>
                                        </Link>
                                    </section>
                                </div>
                            </div>

                            <div>
                                <ul className='text-gray-200  text-[12px] md:text-[12px]  flex flex-col md:flex-row items-start md:items-center gap-y-3 gap-x-3 '>
                                    <li> <Link to='/terms&conditions' onClick={topPage}> Terms & Conditions </Link> </li>
                                    <li> <Link to='/privacy_policy' onClick={topPage}> Privacy Policy </Link> </li>
                                    <li> <Link to='/cancellation&refund' onClick={topPage}> Cancellation & Refund </Link> </li>
                                    {/* <li> <Link to='/cancellation&refund' onClick={topPage}> Pricing </Link> </li> */}
                                </ul>

                            </div>

                        </div>

                        <div className="text-[10px] md:text-[12px] my-5 text-gray-300">© Vishnu Ads and Ventures 2024. All Rights Reserved.</div>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default Footer
