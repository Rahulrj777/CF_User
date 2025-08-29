import React from 'react'
import { Helmet } from 'react-helmet-async';

const Terms = () => {
    return (
        <>
            <section className='bg-gray-50 flex px-3 py-3 md:p-8 font-[roboto]'>

                <Helmet>
                    <title>Cinema Factory - Terms & Conditions</title>
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

                    <div className='my-1 sm:my-2 md:my-3'>
                        <h3 className='text-gray-900 font-bold uppercase text-center font-[poppins] text-[14px] sm:text-[16px] md:text-[22px]'>terms & conditions</h3>
                    </div>

                    <div className='mt-8 flex flex-col  gap-y-4 md:gap-y-6 px-1 md:px-5'>
                        <div className='flex flex-col gap-y-3 '>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600 '>Introduction</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] '>Welcome to Cinema Factory Academy. These Terms and Conditions ("Terms") govern your use of our website and services.
                                By accessing or using our website and services, you agree to comply with and be bound by these Terms.
                                If you do not agree with these Terms, please do not use our website or services.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>1. Acceptance of Terms</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>By accessing or using our website, you agree to these Terms and any additional terms and conditions that may apply to specific sections
                                of the website or to products and services available through the website.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>2. Use of Our Services</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Eligibility: You must be at least 13 years old to use our website and services. By using our website, you represent and warrant that you meet this age requirement.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Account Registration: To access certain features of our website, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>User Responsibilities: You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Prohibited Conduct: You agree not to use our website for any unlawful purpose or in any way that could harm, disable, overburden, or impair the website. You also agree not to use any automated means to access the website, including robots, spiders, or similar tools.</p>
                        </div>


                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>3. Course Enrollment and Payments</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Enrollment: By enrolling in a course, you agree to pay the applicable fees and to comply with any additional terms and conditions that may apply to the course. </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Payments: All payments must be made through our authorized payment methods. You agree to provide accurate and complete payment information and to keep your payment information up to date.</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Refunds: Our refund policy is detailed on our website. Please review it carefully before enrolling in a course.</p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>4. Intellectual Property</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Ownership: All content on our website, including text, graphics, logos, images, and software, is the property of Cinema Factory Academy or its licensors and is protected by copyright, trademark, and other intellectual property laws.    </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Limited License: You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the website for your personal, non-commercial use. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as permitted by these Terms.    </p>
                        </div>



                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>5. Disclaimers and Limitation of Liability</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>No Warranty: Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Cinema Factory Academy disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.  </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Limitation of Liability: To the fullest extent permitted by law, Cinema Factory Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the website; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from our website; (d) any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website by any third party; (e) any errors or omissions in any content; and/or (f) any other matters relating to the website, whether based on warranty, contract, tort, or any other legal theory, and whether or not Cinema Factory Academy has been advised of the possibility of such damages.  </p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>6. Indemnification</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>You agree to indemnify, defend, and hold harmless Cinema Factory Academy, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, demands, liabilities, and settlements, including, without limitation, reasonable legal and accounting fees, arising out of or resulting from your violation of these Terms or your use of the website, including, but not limited to, any use of the website's content, services, and products other than as expressly authorized in these Terms.  </p>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>7. Changes to Terms</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on our website. You are advised to review these Terms periodically for any changes. Your continued use of our website and services after the posting of changes constitutes your acceptance of such changes.  </p>
                        </div>


                        <div className='flex flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>8. Governing Law</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>These Terms and your use of our website shall be governed by and construed in accordance with the laws of the jurisdiction in which Cinema Factory Academy operates, without regard to its conflict of law principles.  </p>
                        </div>

                        <div className='flex justify-start items-start flex-col gap-y-3'>
                            <p className='font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600'>9. Contact Us</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>If you have any questions or concerns about these Terms or our services, please contact us at:</p>
                        </div>




                        <div className='flex flex-col gap-y-2'>

                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] font-medium'> BigBay Cinema Factory Private Limited</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018 India </p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>contact@cinemafactoryacademy.com</p>
                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>+91 9884683888</p>

                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>Thank you for using Cinema Factory Academy. We hope you enjoy your experience with us.</p>

                            <p className='text-gray-600 text-[11px] sm:text-[12px] md:text-[14px]'>This website is operated by BigBay Cinema Factory</p>


                        </div>





                    </div>



                </div>
            </section>
        </>
    )
}

export default Terms