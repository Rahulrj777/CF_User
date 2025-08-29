import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";


// import logo from '../images/64.png'
import logo from '../images/cf_logo.webp'
import black from '../images/footer_logo-1.png'

import icon1 from '../images/header/nsdc.png'
import icon2 from '../images/header/memc.png'
import icon3 from '../images/header/skill_india.png'




const Header = () => {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);


    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };



    //color change
    const [navbarBg, setNavbarBg] = useState('bg-black/90');


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-black/80 shadow-md ');
            } else {
                setNavbarBg('bg-black/90');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    function topPage() {
        window.scroll(0, 0)
    }

    //mobile view click the link hide the navbar

    const [hide, setHide] = useState(true)

    // function clicklink() {
    //     setHide(false)
    // }

    return (
        <>
            <div className='bg-[#ffA500]  overflow-hidden h-8 md:h-11'>
                <div className='flex items-center'>

                    <div className=' w-[35%] md:w-[12%] bg-[#fc4141] mx-auto   py-2 md:py-3 flex justify-center items-center'>
                        <a href="tel:+919884683888" target="_blank" className=" h-full font-semibold font-[poppins] text-[10px] md:text-[14px] text-white hover:text-gray-300">
                            <p className='flex h-auto gap-x-1 justify-center items-center'>  <span className='text-[18px]'><MdOutlinePhoneAndroid className='text-[16px] md:text-[20px]' /></span> +91 9884683888 </p>
                        </a>
                    </div>


                    <div className="overflow-hidden whitespace-nowrap bg-[#ffA500] py-2 px-1 font-[roboto] w-[65%] md:w-[88%]">
                        <div className="animate-marquee">
                            <p className='font-semibold text-[12px]  md:text-[16px]  capitalize text-gray-950 md:tracking-[2px]'>Your <span className='text-[#ff0000]'>filmmaking </span> future starts here!  </p>
                        </div>
                    </div>


                </div>
            </div>

            {/* -------- second navbar ------- */}

            <nav className={` w-full sticky top-0 z-30  py-6  shadow-sm shadow-gray-400  md:py-7 ${navbarBg} `}>
                <div className="max-w-full mx-auto font-kumbh  ">
                    {/* Logo */}
                    <div className='flex justify-between items-center px-3 sm:px-9 w-full xl:w-[95%] mx-auto'>


                        <div className='w-full md:w-fit flex items-center'>
                            <Link to='/' onClick={topPage}>
                                <div className='flex flex-col items-center justify-center'>
                                    <img src={logo} className=' w-80 sm:w-80 md:w-60 object-cover' alt="CF_Logo" title="Cinema Factory Logo" loading="lazy" fetchpriority="high" />
                                    {/* <p className='hidden md:flex text-[12px] text-gray-200  text-center mt-2 font-[roboto] ml-8'>Affiliated By</p> */}
                                </div>
                            </Link>

                        </div>


                        {/* Desktop Navigation */}
                        <ul className='hidden lg:flex w-full md:w-fit font-semibold gap-x-4 xl:gap-x-14' >

                            <li className=' cursor-pointer duration-300 text-white  text-[12px] xl:text-[14px] ' >
                                <Link to="/" smooth={true} duration={500} onClick={topPage}>
                                    <p className="relative group flex items-center">
                                        <button className="hover:text-white/50  focus:text-red-600 tracking-[1px] font-semibold">Home</button>
                                    </p>
                                </Link>
                            </li>

                            <li className='  cursor-pointer duration-300 text-white  text-[12px] xl:text-[14px]' >

                                <div to="" smooth={true} duration={500} onClick={topPage} className='relative group'>

                                    <p className="relative group flex items-center">
                                        <button className="  hover:text-white/50  focus:text-red-600 tracking-[1px] font-semibold">Courses</button>
                                    </p>

                                    <div
                                        className="absolute left-0 w-64 border-t-2 border-red-600  mt-0.5 origin-top-left bg-white divide-y divide-gray-100 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 delay-300">
                                        <div className=" overflow-hidden">
                                            <Link to='direction' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Direction</p>
                                            </Link>
                                            <Link to='cinematography' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Cinematography</p>
                                            </Link>
                                            <Link to='editing' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Editing</p>
                                            </Link>
                                            <Link to='vfx' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Visual Effects</p>
                                            </Link>
                                            <Link to='virtual_production' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Virtual Production</p>
                                            </Link>
                                            <Link to='acting'>
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Acting</p>
                                            </Link>
                                            <Link to='photography' >
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">Photography</p>
                                            </Link>
                                            <Link to='di'>
                                                <p className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white hover:bg-gray-900">DI</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className=' cursor-pointer duration-300 text-white  text-[12px] xl:text-[14px]' >

                                <Link to="contact" smooth={true} duration={500} onClick={topPage}>
                                    <p className="relative group flex items-center">
                                        <button className="  hover:text-white/50  focus:text-red-600 tracking-[1px] font-semibold">Contact Us</button>
                                    </p>
                                </Link>
                            </li>

                        </ul>

                        <div className='cursor-pointer ml- md:ml-0 w-full md:w-fit flex justify-end'>
                           
                            <Link to='/apply' onClick={topPage}>
                                <button className='font-semibold bg-[#ff0000] hover:text-white md:tracking-[1px] px-3 md:px-6  py-1.5 md:py-2.5 uppercase text-[10px] md:text-[15px] rounded-sm text-gray-100  hover:bg-red-600'>Apply Now</button>
                            </Link>
                        </div>


                        {/* Mobile Navigation Icon */}
                        <div onClick={handleNav} className='block lg:hidden pl-4'>
                            {nav ? <AiOutlineClose className='text-[20px] text-gray-50' /> : <AiOutlineMenu className='text-[20px] text-gray-50' />}
                        </div>

                        {/* Mobile Navigation Menu */}
                        {
                            hide &&
                            <ul
                                className={
                                    nav
                                        ? 'fixed lg:hidden left-0 top-0 w-[65%] h-[100%] border-r  bg-gray-50 ease-in-out duration-500'
                                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                                }
                            >
                                {/* Mobile Logo */}

                                <Link to='/' onClick={topPage} className='w-full' >
                                    <img src={black} className=' w-36 sm:w-40  pt-10  ml-10' alt="CF_Logo" title="Cinema Factory Logo" loading="lazy" fetchpriority="high" onClick={handleNav} />
                                </Link>



                                {/* Mobile Navigation Items */}

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-700  text-[13px] mt-8' >
                                    <Link to="/" smooth={true} duration={500} onClick={topPage}>
                                        <p className="relative group flex items-center">
                                            <button className="font-semibold tracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Home</button>
                                        </p>
                                    </Link>
                                </li>

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' onClick={topPage}>
                                    <div to="" smooth={true} duration={500} onClick={topPage} className='relative group'>

                                        <p className="relative group flex items-center">
                                            <button className="  font-semibold  tracking-[.02em]  hover:text-white/50  focus:text-red-600">Courses</button>
                                        </p>

                                        <div
                                            className="absolute left-0 w-52 mt-1 origin-top-left z-10 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                                            <div className="overflow-hidden">
                                                <Link to="direction" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Direction & Screenplay
                                                </Link>
                                                <Link to="cinematography" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Cinematography
                                                </Link>
                                                <Link to="editing" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Editing
                                                </Link>
                                                <Link to="vfx" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Visual Effects
                                                </Link>
                                                <Link to="virtual_production" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Virtual Production
                                                </Link>
                                                <Link to="acting" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Acting
                                                </Link>
                                                <Link to="photography" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    Photography
                                                </Link>
                                                <Link to="di" onClick={handleNav} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    DI
                                                </Link>
                                            </div>
                                        </div>


                                    </div>
                                </li>

                                <li className=' ml-10 cursor-pointer duration-300 text-gray-500  text-[13px] mt-8' >
                                    <Link to="contact" smooth={true} duration={500} onClick={topPage}>

                                        <p className="relative group flex items-center">
                                            <button className="font-semibold  tracking-[.02em]  hover:text-white/50  focus:text-red-600" onClick={handleNav}>Contact Us</button>
                                        </p>
                                    </Link>
                                </li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header