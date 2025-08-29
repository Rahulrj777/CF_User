import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
// import VfxFAQ from '../../components/VfxFAQ';
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";

//icons
import { RiWhatsappLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/virtualproductionmentor";

const VirtualProduction = () => {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/virtualproductiondiploma")
      .then((res) => setList(res.data));
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/virtualproductionbanner")
      .then((res) => setBanners(res.data))
      .catch((err) => console.log("Error fetching banners:", err));
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/virtualproductionfilmography")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching filmography:", err));
  }, []);

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
      .get("http://localhost:5000/virtualproductionhighlights")
      .then((res) => setHighlights(res.data))
      .catch((err) => console.error(err));
  }, []);
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
                    <img
                      src={banner.url}
                      className="w-full object-cover"
                      alt="CF_banner"
                      title="Virtual Production And VFX Courses In India"
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

        <section className="border-t-4 border-orange-500 pt-16 pb-10 bg-gray-950">
          <div className="w-full px-4 md:w-[85%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white uppercase">
                1 YEAR Courses
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {list.map((c) => (
                <div key={c.id} className="flex flex-col items-center gap-y-4">
                  <img
                    src={`http://localhost:5000${c.image}`}
                    className="w-28 md:w-32 object-cover"
                  />
                  <h3 className="text-white font-bold uppercase">
                    {c.courseTitle}
                  </h3>
                  <h3 className="text-[#ff0000] font-semibold uppercase">
                    {c.timeline}
                  </h3>
                  <h3 className="text-gray-200 font-semibold uppercase">
                    {c.detailTitle}
                  </h3>
                  <p className="text-gray-200 text-sm text-center">
                    {c.description}
                  </p>
                  <Link to={c.link}>
                    <button className="uppercase border border-red-500 px-6 py-2 text-white rounded-md hover:bg-red-600">
                      Explore More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="flex flex-col gap-y-20">
            <div className="w-full px-4 md:w-[85%] mx-auto">
              <div className="flex flex-col gap-y-2 justify-center items-center mb-3 md:mb-16">
                <h3 className="flex items-center font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                  {" "}
                  1 YEAR Courses{" "}
                </h3>
              </div>

              <div className="flex justify-center items-center">
                <div>
                  <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 gap-x-20 ">
                    <div className="flex flex-col items-center gap-y-3 md:gap-y-4 font-[poppins]">
                      <div className="flex justify-center" onClick={topPage}>
                        <Link to="/virtual_production/stage_unreal">
                          <img
                            src={unreal}
                            className="w-28 md:w-32 object-cover"
                            alt="logo"
                            title="Virtual Production Courses "
                            loading="lazy"
                            fetchpriority="auto"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col items-center gap-y-1 md:gap-y-1 ">
                        <h3 className="text-center text-[15px] md:text-[24px] text-white font-bold uppercase mb-1">
                          {" "}
                          VIRTUAL PRODUCTION
                        </h3>
                        <h3 className="text-center text-[20px] md:text-[24px] text-[#ff0000] font-semibold uppercase">
                          1 Year{" "}
                        </h3>
                        <h3 className="text-center text-[14px] md:text-[16px] text-gray-200 font-semibold uppercase">
                          (Includes - 6 Months Stage Unreal Internship)
                        </h3>
                      </div>
                      <p className="text-center text-gray-200 font-[roboto] text-[11px] md:text-[14px]">
                        Stage Unreal is a Virtual production studio based in
                        Chennai. Stage Unreal was founded by Ace and renowned
                        Cinematographer Mr. Manoj Paramahamsa. This one-year
                        program balances equal amounts of practical and
                        theoretical training, complemented by an internship to
                        ensure comprehensive learning and real-world experience.
                      </p>

                      <div>
                        <Link
                          to="/virtual_production/stage_unreal"
                          onClick={topPage}
                        >
                          <button className=" text-[12px] md:text-[14px] hover:scale-105 uppercase group relative inline-flex h-9 md:h-10 items-center justify-center overflow-hidden rounded-md  border border-red-500 hover:bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
                            Explore MOre
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-y-3 md:gap-y-4 font-[poppins]">
                      <div className="flex justify-center">
                        <Link to="/virtual_production/cfa" onClick={topPage}>
                          <img
                            src={cflogo}
                            className="w-28 md:w-32 object-cover"
                            alt="logo"
                            title="Virtual Production Courses "
                            loading="lazy"
                            fetchpriority="auto"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col items-center gap-y1 md:gap-y-1 ">
                        <h1 className="text-center text-[15px] md:text-[24px] text-white font-bold uppercase mb-1">
                          Advanced VIRTUAL PRODUCTION
                        </h1>
                        <h3 className="text-center text-[20px] md:text-[24px] text-[#ff0000] font-semibold uppercase">
                          1 Year Diploma{" "}
                        </h3>
                        <h3 className="text-center text-[14px] md:text-[16px] text-gray-200 font-semibold uppercase">
                          (Includes - Overseas Virtual Production Stage Visit)
                        </h3>
                      </div>
                      <p className="text-center text-gray-200 font-[roboto] text-[11px] md:text-[14px]">
                        This intensive advanced Unreal Engine - virtual
                        production course is meticulously crafted by a team of
                        specialists and technicians who are not only industry
                        experts but are also actively working on cutting-edge
                        virtual production hollywood projects.
                      </p>

                      <div>
                        <Link to="/virtual_production/cfa" onClick={topPage}>
                          <button className=" text-[12px] md:text-[14px] hover:scale-105 uppercase group relative inline-flex h-9 md:h-10 items-center justify-center overflow-hidden rounded-md  border border-red-500 hover:bg-[#ff0000] px-6 md:px-8 font-medium text-neutral-200 duration-500">
                            Explore MOre
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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

export default VirtualProduction;
