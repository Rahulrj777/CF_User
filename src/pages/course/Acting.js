import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { PiMaskHappyBold } from "react-icons/pi";
import banner from "../../images/course/banner/pattern.jpg";

//icons
import { RiWhatsappLine } from "react-icons/ri";
const API_URL = "http://localhost:5000/actingmentor";
const Acting = () => {
  const [banners, setBanners] = useState([]);
  const [mentors, setMentors] = useState([]);

  const [contents, setContents] = useState([]);
  const [globalPdf, setGlobalPdf] = useState(null);

  const API_BASE =
    (typeof process !== "undefined" &&
      process.env &&
      process.env.NEXT_PUBLIC_API_BASE) ||
    (typeof window !== "undefined" &&
    window.location &&
    window.location.port === "5173"
      ? "http://localhost:5000"
      : "http://localhost:5000");

  const API = `${API_BASE}/actingdiploma`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API);
      setContents(res.data.items || res.data); // support both formats
      setGlobalPdf(res.data.pdf || null);
    } catch (err) {
      console.error("fetchData error:", err);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const res = await axios.get(API_URL);
      setMentors(res.data);
    } catch (err) {
      console.error("Error fetching mentors:", err);
    }
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get("http://localhost:5000/actingbanner");
        setBanners(res.data);
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };

    fetchBanners();
  }, []);

  const setting = {
    dots: false,
    infinite: banners.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  function topPage() {
    window.scroll(0, 0);
  }

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <>
      <div className="font-kumbh overflow-hidden ">
        <Helmet>
          <title>Learn Acting Courses In India | Acting Institute India</title>
          <meta
            name="description"
            content="Step into acting with our 6-month course. Learn from experts, gain hands-on experience, and build a professional portfolio. Apply now to start your acting career"
          />
          <meta
            name="keywords"
            content="Acting Institute in India | Diploma in Acting | Acting Diploma Courses | Certification in Acting Courses | Acting Courses In India | Best institute for Acting | Acting Courses | Acting Training Institute | best Acting Training Institute | leading Acting Training Institute |  best Acting Institute | leading Acting Institute | Career in Acting | Jobs in Acting | Acting Jobs | Film Acting Institute in India| Film Acting Courses | Film Acting institute | Diploma in Film Acting | Salary for film Acting"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>

        <div className="  ">
          <img
            src={banner}
            className=" blur-[2px] w-full fixed top-0 object-cover h-screen -z-30"
            alt="main banner"
            title="Learn Acting Courses In India "
            loading="lazy"
            fetchpriority="auto"
          />
        </div>

        <section>
          <div className="font-playfair relative w-full">
            <div className="slider-container">
              <Slider {...setting}>
                {banners.map((banner) => (
                  <div key={banner.id}>
                    <img
                      src={banner.url}
                      alt={banner.title || "CF_banner"}
                      title={
                        banner.title ||
                        "Virtual Production And VFX Courses In India"
                      }
                      className="w-full object-cover"
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* -------------- Syllabus ----------------- */}

        <section className="border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="w-full px-4 md:w-[80%] mx-auto">
            {/* Heading */}
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                {contents.length} Month Course
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                in Acting
              </p>
            </div>

            {/* Content */}
            <div className="flex justify-center items-center font-[poppins]">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60 w-full">
                {contents.map((month, index) => (
                  <div key={month.id} className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-4 items-start">
                      <div className="flex flex-col gap-y-2 items-start">
                        <div>
                          <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                            {month.title || `Month ${index + 1}`}
                          </h3>
                        </div>
                        <div>
                          <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                            {month.children?.map((child, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-x-3 md:gap-x-5"
                              >
                                <span>
                                  <PiMaskHappyBold className="text-gray-100 text-[16px] md:text-[20px]" />
                                </span>
                                {child}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global PDF link OR WhatsApp fallback */}
            <div className="flex justify-center items-center mt-8 md:mt-20 font-[poppins]">
              {globalPdf ? (
                <a
                  href={`${API_BASE}${globalPdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase hover:scale-105 group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
                    View Detailed Syllabus
                  </button>
                </a>
              ) : (
                <a
                  href="https://api.whatsapp.com/send?phone=9884683888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase hover:scale-105 group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
                    Request Detailed Syllabus
                  </button>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* ------------------ Mentors ------------------ */}

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="px-4 w-full md:w-[80%] mx-auto font-kumbh">
            <div className="flex items-center justify-center mb-6 md:mb-10">
              <h2 className="font-bold text-black text-[20px] md:text-[40px] text-center uppercase md:tracking-[2px]">
                FilmMaker As Mentor
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20">
                {mentors.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="flex flex-col items-center justify-center"
                  >
                    <div className="flex justify-center items-center">
                      <img
                        src={mentor.url}
                        className="w-[80%] rounded-md object-cover"
                        alt="mentor"
                        title="Learn cinematography Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>

                    <div className="flex flex-col gap-y-5 items-center justify-center mt-5">
                      <div className="w-full md:w-[70%] mx-auto">
                        <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                          {mentor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --------------------- how to appply  -------------------*/}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950">
          <div className="px-4 w-full md:w-[80%] mx-auto">
            <div>
              <h3 className="text-white font-bold text-[20px] md:text-[30px] mb-3 md:mb-3 uppercase">
                How to apply?
              </h3>

              <div className="flex flex-col gap-y-2 text-[14px] text-gray-200">
                <h1 className="font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4">
                  To join Cinema Factory Academy:
                </h1>
                <ul className="font-[roboto] text-[12px] md:text-[14px] list-disc space-y-1 md:space-y-3 ml-4 md:ml-4 ">
                  <li>Fill out our enquiry form or call us.</li>
                  <li>
                    Speak with our student counselor to finalize your chosen
                    craft.
                  </li>
                  <li>
                    Complete the application form and attend an interview.
                  </li>
                  <li>Upon acceptance, you'll receive an acceptance letter.</li>
                </ul>
              </div>

              <div className="flex items-center gap-x-4 md:gap-x-10 mt-4 md:mt-10 font-[poppins] text-[12px] md:text-[14px]">
                <div>
                  <Link to="/apply" onClick={topPage}>
                    <button className="uppercase  group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500">
                      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                        Apply now
                      </div>
                      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                        Apply Now
                      </div>
                    </button>
                  </Link>
                </div>

                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=9884683888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <button className="bg-transparent border border-white text-white shadow-md drop-shadow-md h-10 md:h-12 pl-3 rounded-md flex items-center gap-x-3 font-[poppins] text-[12px] md:text-[14px] hover:scale-105 duration-500">
                      Request Syllabus
                      <div className="px-3 bg-green-600 rounded-r-md">
                        <RiWhatsappLine className="text-white h-10 md:h-12 text-[22px] font-bold" />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Acting;
