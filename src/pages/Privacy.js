import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async';

const Privacy = () => {



    return (
        <>
            <section className='bg-gray-50 flex  px-3 py-3 md:p-8 font-[roboto]' >

                <Helmet>
                    <title>Cinema Factory - Privacy & Policy</title>
                    <meta
                        name="description"
                        content="Enhance your skills in direction, cinematography, editing, and VFX with our expert-led workshops. Hands-on training for aspiring professionals. Join now!"
                    />
                    <meta
                        name="keywords"
                        content="Filmmaking, Virtual Production, VFX Courses, Direction, Cinematography, Editing, Media Career, Cinema Factory Academy"
                    />
                    <meta name="author" content="Cinema Factory Academy" />
                    <meta charSet="utf-8" />
                    {/* Add other meta tags here if needed */}
                </Helmet>


                <div className='w-full  md:w-[85%] bg-white p-4 rounded-md border-2 border-gray-100 drop-shadow-md shadow-lg mx-auto'>

                    <div className='my-3'>
                        <h3 className='text-gray-900 font-bold uppercase text-center font-[poppins] text-[14px] sm:text-[16px] md:text-[22px]'>privacy & policy</h3>
                    </div>

                    <div className='mt-8 flex flex-col  gap-y-4 md:gap-y-6 px-1 md:px-5'>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>Introduction</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Welcome to Cinema Factory Academy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, enroll in our courses, or use our services.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>1. Information We Collect</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Personal Information: When you register on our site, subscribe to our newsletter, enroll in courses, or interact with us in other ways, we may collect personal information, including but not limited to your name, email address, phone number, postal address, payment information, and any other details you provide. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Non-Personal Information: We may collect non-personal information such as your browser type, operating system, IP address, and browsing behavior on our website. </p>
                        </div>


                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>2. How We Use Your Information</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>To Provide Services: We use your information to process your enrollment, provide course materials, facilitate payment, and offer customer support.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Communication: We may use your information to send you newsletters, promotional materials, updates about our courses, and other information that may interest you. You can opt-out of these communications at any time.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Improvement of Services: We use the information to understand how our services are used, to improve our website and course offerings, and to develop new services and features.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Compliance and Protection: We may use your information to comply with legal obligations, resolve disputes, enforce our terms of service, and protect the rights, property, or safety of Cinema Factory Academy, our users, and others.</p>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>3. Sharing Your Information</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Third-Party Service Providers: We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Legal Requirements: We may disclose your information when required by law or in response to lawful requests from government authorities or other public entities. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Business Transfers: In the event of a merger, acquisition, reorganization, or sale of our assets, your information may be transferred as part of the transaction. </p>
                        </div>


                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>4. Data Security</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. </p>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>5. Your Rights</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Access and Update: You have the right to access and update your personal information. You can do this by logging into your account or contacting us directly. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Opt-Out: You can opt-out of receiving promotional communications from us by following the unsubscribe instructions included in those communications or by contacting us. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Data Deletion: You can request the deletion of your personal information by contacting us. We will take reasonable steps to delete your information, except where we are required to retain it for legal or legitimate business purposes.</p>


                        </div>


                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>6. Third-Party Links</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these websites. We encourage you to review the privacy policies of any third-party sites you visit. </p>

                        </div>


                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>7. Children's Privacy </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records. </p>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>8. Changes to This Privacy Policy</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes. Your continued use of our website and services after the posting of changes constitutes your acceptance of such changes. </p>
                        </div>

                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>9. Contact Us </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: </p>
                        </div>

                        <div className='flex flex-col gap-y-2'>

                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] font-medium'> BigBay Cinema Factory Private Limited</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>contact@cinemafactoryacademy.com</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>+91 9884683888</p>


                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Thank you for trusting Cinema Factory Academy with your information.</p>



                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Privacy