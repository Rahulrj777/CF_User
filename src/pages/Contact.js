import React from 'react'
import { Helmet } from 'react-helmet-async';

import ContactForm from '../components/ContactForm'

import contact from '../images/contact.png'




const Contact = () => {
  return (
    <>

      <div className=''>

        <Helmet>
          <title>Top Courses in Direction, Cinematography, Editing, & VFX</title>
          <meta
            name="description"
            content="Master direction, cinematography, editing, VFX, acting, photography, and virtual production with expert-led courses at Cinema Factory Academy. Join now!"
          />
          <meta
            name="keywords"
            content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>


        {/* contact form */}

        <section>
          <div className='pt-10 md:pt-20 pb-10 md:pb-20 '>

            <div className='mb-6 md:mb-16'>
              <h1 className='text-center font-bold text-[18px] md:text-[28px] uppercase '>Learn, Explore & Grow with Us!</h1>
            </div>

            <div className='w-full px-4 md:w-[80%] mx-auto flex flex-col gap-y-10 md:flex-row items-center'>

              <div className='w-full md:w-[50%]'>

                <div>
                  <img src={contact} alt='contact' title="cinema factory academy" loading="lazy" fetchpriority="auto" />
                </div>

              </div>

              <div className='w-full md:w-[50%]'>
                <div className=' md:px-16'>
                  <ContactForm />
                </div>

              </div>

            </div>

          </div>
        </section>
      </div>

    </>
  )
}

export default Contact
