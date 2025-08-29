import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Custom arrows
import 'swiper/css';

const reelsData = [
    {
        id: 1,
        title: 'Reel 1',
        src: 'https://www.instagram.com/reel/DHIO-2Fzgh2/embed',
    },
    {
        id: 2,
        title: 'Reel 2',
        src: 'https://www.instagram.com/reel/DHFrK0gTg_t/embed',
    },
    {
        id: 3,
        title: 'Reel 3',
        src: 'https://www.instagram.com/reel/DGhlqJaT08T/embed',
    },
    {
        id: 4,
        title: 'Reel 4',
        src: 'https://www.instagram.com/reel/DGfShknTsqI/embed',
    },
];

const Workshop = () => {
    const swiperRef = React.useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (


        <>
            <div className='relative font-[poppins]'>

                <div>

                    <div className='flex items-center mb-16'>

                        <div>
                            <h2 className='text-center'>New Mentor</h2>
                        </div>

                        <div>
                            <div className=" top-4 right-4 z-10 flex space-x-2">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 bg-black/60 text-white rounded-full hover:bg-black transition"
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 bg-black/60 text-white rounded-full hover:bg-black transition"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="relative w-full  font-sans">
                    {/* Arrows */}


                    {/* Slider */}
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Autoplay]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reelsData.map((reel) => (
                            <SwiperSlide key={reel.id}>
                                <div className="overflow-hidden rounded-xl shadow-md transition duration-300 border border-gray-400 drop-shadow-md">
                                    <iframe
                                        title={reel.title}
                                        className="w-full aspect-[9/16] border-0"
                                        src={reel.src}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        scrolling="no"
                                        style={{ overflow: 'hidden' }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


        </>


    );
};

export default Workshop;
