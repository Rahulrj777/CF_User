import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";

import cflogo from "../../images/head_logo.png";
import unreal from "../../images/unreal.png";
import manojOne from "../../images/poster/manoj/mv1.png";
import manojTwo from "../../images/poster/manoj/mv2.png";
import manojThree from "../../images/poster/manoj/mv3.png";
import manojFour from "../../images/poster/manoj/mv4.png";
import manojFive from "../../images/poster/manoj/mv5.png";
import manojSix from "../../images/poster/manoj/mv6.png";
import manojSeven from "../../images/poster/manoj/mv7.png";
import manojEight from "../../images/poster/manoj/mv8.png";

import shivOne from "../../images/poster/shiv/1.png";
import shivTwo from "../../images/poster/shiv/2.png";
import shivThree from "../../images/poster/shiv/3.png";
import shivFour from "../../images/poster/shiv/4.png";
import shivFive from "../../images/poster/shiv/5.png";
import shivSix from "../../images/poster/shiv/6.png";

import aravindOne from "../../images/poster/aravind/1.png";
import aravindTwo from "../../images/poster/aravind/2.png";
import aravindThree from "../../images/poster/aravind/3.png";
import aravindFour from "../../images/poster/aravind/4.png";
import aravindFive from "../../images/poster/aravind/5.png";
import aravindSix from "../../images/poster/aravind/6.png";
import aravindSeven from "../../images/poster/aravind/7.png";
import aravindEight from "../../images/poster/aravind/8.png";
import aravindNine from "../../images/poster/aravind/9.png";
import aravindTen from "../../images/poster/aravind/10.png";
import aravindTwele from "../../images/poster/aravind/11.png";
import aravindElven from "../../images/poster/aravind/12.png";
import aravindThrtieen from "../../images/poster/aravind/13.png";
import aravindFourteen from "../../images/poster/aravind/14.png";

import { RiWhatsappLine } from "react-icons/ri";

const API_URL = "http://localhost:5000/virtualproductionmentor";
const API = "http://localhost:5000/stageunrealbanner";

const StageUnreal = () => {
  const [mentors, setMentors] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/stageunrealbanner")
      .then((res) => setBanners(res.data))
      .catch((err) => console.log("Error fetching banners:", err));
  }, []);

  const setting = {
    dots: false,
    infinite: banners.length > 1, // loop only if more than 1 banner
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1, // autoplay only if more than 1 banner
    speed: 1000, // transition speed
    autoplaySpeed: 5000, // time each slide is shown
    cssEase: "ease-in-out",
    pauseOnHover: false,
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
    afterChange: function (index) {},
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
          <title>
            Virtual Production Courses | Virtual Production Institute
          </title>
          <meta
            name="description"
            content="Explore our Virtual Production courses. Master Unreal Engine, blend real and digital worlds, and gain hands-on experience with industry experts for a stellar career."
          />
          <meta
            name="keywords"
            content="Learn Virtual production courses | Best Virtual production courses | Virtual production training | Virtual productiontraining institute | Virtual production institute | Best Virtual production institute | Virtual production courses | Virtual production courses online | best Virtual production courses | learn diploma Virtual production courses in India | want to study Virtual production courses | Virtual production course fees | Jobs in Virtual production| career in Virtual production | Virtual production institute near me | Virtual production training near me | best institute to learn Virtual production | best institute to study Virtual production | best institute for Virtual production certification courses"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>

        <section>
          <div className="font-playfair relative w-full">
            <div className="slider-container">
              <Slider {...setting}>
                {banners.map((banner) => (
                  <div key={banner.id || banner.fileName}>
                    <video
                      src={banner.url}
                      className="w-full h-[500px] object-cover" // taller height
                      autoPlay
                      loop
                      muted
                      playsInline
                      title="Virtual Production And VFX Courses In India"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* -------------- Syllabus ----------------- */}

        <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="flex flex-col gap-y-20">
            <div className="w-full px-4 md:w-[85%] mx-auto">
              <div className="flex flex-col gap-y-2 justify-center items-center mb-4 md:mb-4">
                <div className="flex items-center gap-x-10 md:gap-x-20 mb-2 md:mb-4 ">
                  <div>
                    <img
                      src={cflogo}
                      className="w-20 md:w-24 object-cover"
                      alt="logo"
                      title="best institute Virtual production"
                      loading="lazy"
                      fetchpriority="auto"
                    />
                  </div>

                  <div className="border-2 border-white h-20"></div>
                  <div>
                    <img
                      src={unreal}
                      className="w-24 md:w-28 object-cover"
                      alt="logo"
                      title="best institute Virtual production"
                      loading="lazy"
                      fetchpriority="auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
                  <p className=" font-bold text-center text-[24px] md:text-[34px] text-white  uppercase">
                    {" "}
                    VIRTUAL PRODUCTION
                  </p>
                  <h3 className="font-semibold text-[16px] md:text-[28px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] text-center ">
                    1 Year certification
                  </h3>
                  <h3 className="text-center text-[14px] md:text-[16px] text-gray-200 font-semibold uppercase">
                    (Includes - 6 Months Stage Unreal Internship)
                  </h3>
                  <p className="text-center w-full md:w-[70%]  text-gray-200 text-[12px]  md:text-[14px]">
                    This 1-year program balances equal amounts of practical and
                    theoreticaltraining, complemented by an internship to ensure
                    comprehensive learningand real-world experience.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center ">
                <div className="w-full">
                  <div>
                    <h2 className="text-[18px] md:text-[26px] font-semibold  text-white text-center mb-2 md:mb-4">
                      Course Overview
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-y-10 gap-x-2 md:gap-x-64 ">
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Module 1{" "}
                      </h3>

                      <ul className=" text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li> Unreal Fundamentals </li>
                        <li> Asset Import Pipeline</li>
                        <li> Sequencer Fundamentals</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 2{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Materials Fundamentals</li>
                        <li>Lighting Fundamentals</li>
                        <li>Level Design</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 3{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Previsualisation</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 4{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Technical-visualisation</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 5{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Post-visualization</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 6{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Performance Capture</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Module 7{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Metahumans</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 8{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li> Blueprint Fundamentals</li>
                        <li> Animations Fundamentals</li>
                        <li> Niagara Fundamentals</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 9{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>Control Rig Fundamentals </li>
                        <li> Hair and Fur Fundamentals</li>
                        <li> Rendering and Post-Processing</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Module 10{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li> Real Time - Compositing</li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Module 11 & 12{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>ICVFX + Stage Unreal Internship</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-5 md:mt-10 flex justify-center items-center font-[poppins]">
                <a
                  href="https://api.whatsapp.com/send?phone=9884683888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="uppercase  group relative inline-flex h-8 md:h-10 text-[14px] items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500">
                    Request Detailed Syllabus
                  </button>
                </a>
              </div>
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

        {/* -------------- Our Mentors have Worked In ------------------------ */}

        <section className="bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 ">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-12">
              <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white">
                Mentor's Filmography
              </h3>
            </div>

            <div>
              <div className="slider-container">
                <Slider {...settings} className="">
                  <div className="px-2">
                    <div>
                      <img
                        src={manojOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojTwo}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojThree}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojFour}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojFive}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojSix}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojSeven}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={manojEight}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={aravindOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTwo}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindThree}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFour}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFive}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindSix}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindSeven}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={aravindEight}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindNine}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTen}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindElven}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTwele}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindThrtieen}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFourteen}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={shivOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivTwo}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivThree}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivFour}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivFive}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivSix}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Virtual Production Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                </Slider>
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

export default StageUnreal;
