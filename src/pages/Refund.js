import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Refund = () => {
  return (
    <>
      <section className="bg-gray-50 flex  px-3 py-3 md:p-8 font-[roboto]">
        <Helmet>
          <title>Cinema Factory - Cancellation & Refund Policy</title>
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

        <div className="w-full  md:w-[85%] bg-white p-4 rounded-md border-2 border-gray-100 drop-shadow-md shadow-lg mx-auto">
          <div className="my-3">
            <h3 className="text-gray-900 font-bold uppercase text-center font-[poppins] text-[14px] sm:text-[16px] md:text-[22px]">
              Cancellation and Refund Policy
            </h3>
          </div>

          <div className="mt-8 flex flex-col  gap-y-4 md:gap-y-6 px-1 md:px-5">
            <div className="flex flex-col gap-y-3 ">
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600">
                Non-Refundable Policy
              </p>
              <p className="text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] ">
                All payments made for courses, workshops, and other programs at
                BigBay Cinema Factory are non-refundable. This includes tuition
                fees, registration fees, and any other associated costs.
              </p>
            </div>

            <div className="flex flex-col gap-y-3 ">
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600">
                Transfer of Enrollment
              </p>
              <p className="text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] ">
                Students cannot transfer their enrollment to another course or
                defer their start date once fee is paid.{" "}
              </p>
            </div>

            <div className="flex flex-col gap-y-3 ">
              <p className="font-bold text-[14px] sm:text-[16px] md:text-[20px] text-gray-600">
                Missed Classes
              </p>
              <p className="text-gray-600 text-[11px] sm:text-[12px] md:text-[14px] ">
                No refunds or credits will be given for missed classes. By
                enrolling in a course at BigBay Cinema Factory, students agree
                to adhere to the terms of this non-refundable policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Refund;
