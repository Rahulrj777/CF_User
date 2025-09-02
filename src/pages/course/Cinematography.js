import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";

import banner from "../../images/course/banner/pattern.jpg";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import { RiWhatsappLine } from "react-icons/ri";
import CinematographyFAQ from "../../components/Cinematography_FAQ";
import API_URL from "../../config.js";

const Cinematography = () => {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [data, setData] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [items, setItems] = useState([]);

    useEffect(() => {
    axios
      .get(`${API_URL}/cinematographybanner`)
      .then((res) => {
        setBanners(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching banners:", err));
  }, []);

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

  function topPage() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/cinematographyfilmography`)
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching filmography:", err));
  }, []);

  const bannerSliderSettings = {
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

  const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 3000, // slow continuous movement
    autoplaySpeed: 0, // no delay between slides
    cssEase: "linear", // makes it smooth like water
    slidesToShow: 4, // default visible items
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false, // optional: hides prev/next arrows
    responsive: [
      {
        breakpoint: 2500,
        settings: { slidesToShow: 5, centerPadding: "30px" },
      },
      {
        breakpoint: 2000,
        settings: { slidesToShow: 5, centerPadding: "30px" },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, centerPadding: "30px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "30px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "20px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "15px" } },
    ],
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`/cinematographyhighlights")
      .then((res) => setHighlights(res.data))
      .catch((err) => console.error(err));
  }, []);

  axios
    .get(`${API_URL}/cinematographydiploma`)
    .then((res) => {
      const diplomaData = Array.isArray(res.data) ? res.data : [res.data];
      setData(diplomaData);
    })
    .catch((err) => console.error(err));

  if (!data) return <p className="text-white">Loading...</p>;

  return (
    <>
      <div className="font-kumbh overflow-hidden ">
        <Helmet>
          <title>
            Cinematography Courses | Best Cinematography Institute In India!
          </title>
          <meta
            name="description"
            content="Master cinematography with our 1-Year Diploma. Learn from experts, gain hands-on experience, and secure your career in film with 100% placement assistance."
          />
          <meta
            name="keywords"
            content="Cinematography Institute in India | Diploma in Cinematography | Cinematography Diploma Courses | Diploma in Cinematography Courses | Cinematography Courses In India | Best institute for cinematography | Cinematography Courses | Cinematography Training Institute | best Cinematography Training Institute | leading Cinematography Training Institute |  best Cinematography Institute | leading Cinematography Institute | Career in Cinematography| Jobs in Cinematography"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>

        <div className="  ">
          <img
            src={banner}
            className=" blur-[2px] w-full fixed top-0 object-cover h-screen -z-30"
            alt="banner"
            title="Diploma in Cinematography"
            loading="lazy"
            fetchpriority="auto"
          />
        </div>

        {/* ------- Banner ------- */}

        {banners.length > 0 && (
          <section className="slider-container">
            <Slider {...bannerSliderSettings}>
              {banners.map((banner) => (
                <div key={banner._id}>
                  <img
                    src={banner.imageUrl}
                    alt="Cinematography Banner"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </section>
        )}

        {/* ------------------- Course ------------------ */}

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="w-full md:w-[90%] mx-auto">
            <div className="font-[Prata]">
              <div>
                <div className="flex justify-center items-center w-[90%] mx-auto">
                  <div>
                    {/* Title */}
                    <div className="mb-10 md:mb-20">
                      <h1 className="font-bold text-[24px] md:text-[40px] uppercase font-[poppins] text-black text-center">
                        Course Highlights
                      </h1>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-16 gap-y-8 md:gap-y-14 mt-1 font-kumbh">
                      {highlights.length > 0 ? (
                        highlights.map((item) => (
                          <div key={item.id}>
                            <div className="flex flex-col items-center gap-y-3">
                              {/* Image */}
                              <img
                                src={`http://localhost:5000${item.image}`}
                                className="w-14 md:w-20 object-contain mb-2 filter"
                                alt={item.titleLine}
                                loading="lazy"
                              />

                              {/* Text */}
                              <div className="flex flex-col items-center">
                                <h3 className="uppercase font-semibold text-center text-[10px] md:text-[14px] text-black tracking-[1px] leading-snug">
                                  {item.titleLine}
                                </h3>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 col-span-2 md:col-span-4 text-center">
                          No highlights items available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------- Syllabus ----------------- */}

        {Array.isArray(data) &&
          data.map((diploma) => (
            <section
              key={diploma._id}
              className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950"
            >
              <div className="px-4 w-full md:w-[85%] mx-auto">
                {/* Heading */}
                <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
                  <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                    1 Year Diploma
                  </h3>
                  <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                    in Cinematography
                  </p>
                </div>

                {/* Semester Blocks */}
                <div className="flex justify-center items-center font-[poppins]">
                  <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60">
                    {/* Semester 1 */}
                    <div className="flex flex-col gap-y-5 items-start">
                      <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                        Semester 1
                      </h3>
                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                        {(diploma.semester1 || []).map((line, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-x-3 md:gap-x-5"
                          >
                            <VscDeviceCameraVideo className="text-gray-100 text-[16px] md:text-[20px]" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Semester 2 */}
                    <div className="flex flex-col gap-y-5 items-start">
                      <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                        Semester 2
                      </h3>
                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                        {(diploma.semester2 || []).map((line, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-x-3 md:gap-x-5"
                          >
                            <VscDeviceCameraVideo className="text-gray-100 text-[16px] md:text-[20px]" />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* PDF Button */}
                {diploma.pdf && (
                  <div className="flex justify-center items-center mt-8 md:mt-20 font-[poppins]">
                    <a
                      href={`http://localhost:5000${diploma.pdf}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="uppercase hover:scale-105 group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
                        Download Detailed Syllabus
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </section>
          ))}

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

        {/* -------------- Our Mentors have Worked In ------------------------ */}

        <section className="bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14 pb-6 md:pb-10">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-8 md:mb-12">
              <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white">
                Mentor's Filmography
              </h3>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="px-2">
                      <div>
                        <img
                          src={`http://localhost:5000${item.image}`}
                          className="w-full object-cover"
                          alt="mentor work"
                          loading="lazy"
                          fetchpriority="auto"
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center">
                    No filmography uploaded yet.
                  </p>
                )}
              </Slider>
            </div>
          </div>
        </section>

        {/* ------------------------------ FAQ ----------------------- */}

        <section className=" pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]">
          <div className=" w-full px-4 md:w-[80%] mx-auto">
            <div className="flex flex-col gap-y-10 md:flex-row justify-center items-start">
              <div className="w-full md:w-[30%]">
                <div className=" px-2 md:px-6 flex flex-col gap-y-2 md:gap-y-12 items-center font-[poppins]">
                  <h3 className="font-bold text-[35px] md:text-[3.5rem] text-center flex flex-wrap items-center justify-center md:flex-col gap-x-3   md:gap-y-2 md:items-start text-white font-kumbh">
                    <span>Frequently</span>
                    <span>Asked</span>
                    <span className="text-[#ff0000]">Question</span>
                  </h3>

                  <div className="font-kumbh w-full flex flex-col justify-center items-center md:items-start">
                    <p className="font-semibold text-start text-[22px] md:text-[20px] text-gray-200">
                      Still more doubts?
                    </p>
                    <div className="flex justify-center items-center mt-6 md:mt-10 w-full">
                      <button className="hover:scale-105 duration-300 w-full bg-gradient-to-r from-blue-700 to-[#ff0000] px-6 py-2 rounded-md font-semibold text-white uppercase tracking-[1px]">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[80%]">
                <div className="w-full flex justify-center items-center  ">
                  <div className="w-full md:px-10">
                    <CinematographyFAQ />
                  </div>
                </div>
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
                <p className="font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4">
                  To join Cinema Factory Academy:
                </p>
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

export default Cinematography;
