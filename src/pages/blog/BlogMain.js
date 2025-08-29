import React from 'react'
import banner from '../../images/banner/1.jpg'
import { Helmet } from 'react-helmet';

const BlogMain = () => {
    return (
        <div className='overflow-hidden'>

            <Helmet>
                <title>Best Courses in Direction, Cinematography, Editing, & VFX</title>
                <meta
                    name="description"
                    content="Explore the latest industry trends, expert insights, and updates on direction, cinematography, editing, VFX, and more in the Cinema Factory Academy Blog"
                />
                <meta
                    name="keywords"
                    content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
                />
                <meta name="author" content="Cinema Factory Academy" />
                <meta charSet="utf-8" />
                {/* Add other meta tags here if needed */}
            </Helmet>


            <section>
                <div className='w-full'>
                    <div>
                        <img src={banner} className='w-full object-cover' />
                    </div>
                </div>
            </section>

            <section className='pt-20 pb-20'>

                <div className='w-[80%] mx-auto'>

                    <div className='flex justify-center items-center'>

                        <div className='grid grid-cols-3 gap-x-8 gap-y-11'>

                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>
                            <div>
                                <img src={banner} className='w-full object-cover' />
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default BlogMain
