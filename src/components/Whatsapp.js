import React from 'react'

import { AiOutlineWhatsApp } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';



const Whatsapp = () => {
    return (
        <div>

            <div className='fixed bottom-14 md:bottom-10 left-5 md:left-8 z-30 flex flex-col gap-y-5 md:gap-y-8'>

                <div className="">
                    <a href="tel:+919884683888" target="_blank" >
                        <div className="relative flex  w-7 md:w-10  h-7 md:h-10">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
                            <div className="relative inline-flex rounded-full w-7 md:w-10  h-7 md:h-10 bg-red-500"></div>
                            <div className="absolute top-0 w-7 md:w-10  h-7 md:h-10 bg-red-500 rounded-full flex justify-center items-center">
                                <BiPhoneCall className="text-white  text-[18px] md:text-[24px]" />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="">
                    <Link to="https://api.whatsapp.com/send?phone=9884683888" target='_blank' className="">
                        <div className="relative flex  w-7 md:w-10  h-7 md:h-10">
                            <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                            <div className="relative inline-flex rounded-full w-7 md:w-10  h-7 md:h-10 bg-green-500"></div>
                            <div className="absolute top-0 w-7 md:w-10  h-7 md:h-10 bg-green-600 rounded-full flex justify-center items-center">
                                <AiOutlineWhatsApp className="text-white  text-[18px] md:text-[24px]" />
                            </div>
                        </div>
                    </Link>

                </div>


            </div>



        </div>
    )
}

export default Whatsapp
