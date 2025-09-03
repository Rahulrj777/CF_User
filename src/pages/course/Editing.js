import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { GiFilmSpool } from "react-icons/gi";
import EditingFAQ from "../../components/EditingFAQ";
import API_URL from "../../config.js";

const Editing = () => {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [items, setItems] = useState([]);
  const [diploma, setDiploma] = useState({ months: [] });

  useEffect(() => {
    const fetchDiploma = async () => {
      try {
        const res = await axios.get(`${API_URL}/editingdiploma`);
        setDiploma({
          months: res.data.diploma || [], // map backend `diploma` to `months`
          pdf: res.data.diplomaPdf?.url || "", // map backend `diplomaPdf` to `pdf`
        });
      } catch (err) {
        console.error("Error fetching diploma data:", err);
        setDiploma({ months: [], pdf: "" }); // fallback if error occurs
      }
    };

    fetchDiploma();
  }, []);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${API_URL}/editingbanner`);
        // Ensure we always set an array
        const data = Array.isArray(res.data) ? res.data : [];
        setBanners(data);
        console.log("Banners fetched:", data);
      } catch (err) {
        console.error("Error fetching banners:", err);
        setBanners([]); // fallback to empty array
      }
    };

    fetchBanners();
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

  useEffect(() => {
    axios
      .get(`${API_URL}/editingfilmography`)
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
      .get(`${API_URL}/editinghighlights`)
      .then((res) => setHighlights(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/editingmentor`)
      .then((res) => setMentors(res.data?.editing?.mentor || []))
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  if (!diploma || !diploma.months || diploma.months.length === 0) {
    return (
      <p className="text-white text-center mt-10">
        Loading diploma syllabus...
      </p>
    );
  }

  function topPage() {
    window.scroll(0, 0);
  }

  return (
    <>
      <div className="font-kumbh overflow-hidden ">
        <Helmet>
          <title>
            Top Film Editing Courses | Best Editing Institute In India
          </title>
          <meta
            name="description"
            content="Master film editing with our 1-Year Diploma. Learn Avid, Final Cut Pro, and gain real-world experience through a 6-month internship. Start your editing career today"
          />
          <meta
            name="keywords"
            content="Editing Institute in India | Diploma in Editing | Editing Diploma Courses | Diploma in Editing Courses | Editing Courses In India | Best institute for Editing |Editing Courses | Editing Training Institute | best Editing Training Institute | leading Editing Training Institute |  best Editing Institute | leading Editing Institute | Career in Editing | Jobs in Editing | Editing Jobs | Film Editing In"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>

        <section className="slider-container -top-8">
          <Slider {...bannerSliderSettings}>
            {banners.map((banner, idx) => (
              <div key={banner._id || idx}>
                <img
                  src={banner.imageUrl}
                  alt={`Editing Banner ${idx + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </section>

        {/* -------------- course highligts ----------------- */}

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
                                src={item.imageUrl}
                                className="w-14 md:w-20 object-contain mb-2 filter brightness-0"
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

        <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="w-full px-4 md:w-[85%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                1 Year Diploma
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-roboto uppercase tracking-[1px]">
                in Editing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-20 font-poppins">
              {diploma.months && diploma.months.length > 0 ? (
                diploma.months.map((month, i) => (
                  <div key={i} className="flex flex-col gap-y-6">
                    <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                      {month.month}
                    </h3>

                    {month.sections.map((section, j) => (
                      <div key={j} className="flex flex-col gap-y-2">
                        <h4 className="font-semibold text-white text-[14px] md:text-[20px]">
                          {section.name}:
                        </h4>
                        <ul className="flex flex-col gap-y-3 text-gray-200 text-[13px] md:text-[14px]">
                          {section.items.map((item, k) => (
                            <li
                              key={k}
                              className="flex items-center gap-x-3 md:gap-x-5"
                            >
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />
                              <span>{item.title}</span>
                              {item.pdf && (
                                <a
                                  href={`${API_URL}${item.pdf}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-blue-400 underline"
                                >
                                  PDF
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <p className="text-gray-400 col-span-full text-center">
                  Diploma syllabus will be updated soon.
                </p>
              )}
            </div>

            {/* PDF Button */}
            {diploma.pdf && (
              <div className="mt-10 flex justify-center">
                <a
                  href={`${API_URL}${diploma.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase group relative inline-flex h-10 text-[14px] items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-10 font-medium text-neutral-200 duration-500 hover:bg-red-700">
                    View Detailed Syllabus
                  </button>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ------------------ Mentors ------------------ */}

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="px-4 w-full md:w-[80%] mx-auto font-kumbh gap-5">
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
                        src={mentor.imageUrl}
                        className="w-3/5 md:w-2/3 rounded-md object-cover"
                        alt="mentor"
                        title="Learn Editing Courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>

                    <div className="flex flex-col gap-y-5 items-center justify-center mt-5">
                      <div className="w-full md:w-[70%] mx-auto">
                        <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                          {mentor.designation}
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
                          src={item.imageUrl}
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

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]">
          <div className="w-full px-4 md:w-[80%] mx-auto">
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
                    <EditingFAQ />
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

export default Editing;

{
  /* <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className=" w-full px-4 md:w-[85%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                1 Year Diploma{" "}
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] ">
                {" "}
                in Editing
              </p>
            </div>

            <div className="flex justify-center items-center font-[poppins]">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Month 1
                        </h3>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Theory:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            History of film editing{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Shot types, cuts, transitions, non-linear editing
                            (Avid, FCP)
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Editor's role, montage, juxtaposition
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Visual storytelling, 180-degree rule
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Practicals:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Avid: Introduction, interface overview, keyboard
                            shortcuts, native file formats, project and bin
                            management, import types, editing techniques.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Final Cut Pro: Introduction, keyboard shortcuts,
                            film workflow (library, events, project), import
                            types, supported media formats, three-point and
                            timeline editing.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Assignments: Shot types, cuts, transitions,
                            montages, post-production workflow chart, keyboard
                            shortcut chart for Avid Media Composer and FCP.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Month 2
                        </h3>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Theory:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Rule of 6 in Editing, PAL vs NTSC, Principles
                            (continuity, pacing, rhythm), Frame rates, Famous
                            Editing Sequences, Song editing (montage), Assistant
                            editor role.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Practicals:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Avid: Basic tools, shortcuts, song rhythm marking,
                            montage workflow, advertisement and promo editing,
                            title tool.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            FCP: Basic tools, shortcuts, song rhythm marking,
                            montage techniques, advertisement and promo
                            workflow, title tool.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Assignments: Montage songs (2 in Avid, 1 in FCP),
                            advertisement 24 version in both Avid and FCP
                            workflows, movie appreciation submissions.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Practical Test: Written and practical tests for Avid
                            and FCP proficiency.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Month 3
                        </h3>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Theory:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Case studies of emotionally impactful editing
                            sequences, techniques for enhancing emotional
                            impact,
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Introduction to mise-en-scene, editing techniques
                            for continuity and image dynamics, File formats,
                            importance of sound, hardware for editing systems,
                            Camera-operator-editor relationship.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Practicals:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Avid: Introduction to shot and scene order, dialogue
                            scene editing workflow, Advanced tools and
                            shortcuts, export types, basic transitions and
                            effects, Trailer and teaser workflow, special sound
                            effects, audio ducking.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            FCP : Introduction to shot and scene order, dialogue
                            scene editing workflow, advanced tools and
                            shortcuts, export file formats, basic transitions
                            and effects, trailer and teaser workflow, audio
                            tools and techniques.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Assignments: Dialogue scene edits (2 in Avid and
                            FCP), trailer and teaser cuts using selected movies
                            (2 min trailer, 1 min teaser, 30 sec teaser in both
                            Avid and FCP workflows), movie appreciation
                            submissions.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-4 items-start">
                      <div className="flex flex-col gap-y-2 items-start">
                        <div>
                          <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                            Month 4
                          </h3>
                          <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                            Practicals:
                          </h3>
                        </div>

                        <div>
                          <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                            <li className="flex items-center gap-x-3 md:gap-x-5">
                              {" "}
                              <span>
                                <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                              </span>
                              Avid: Choreographed stunt editing, advanced
                              transitions and effects, choreographed song sync,
                              editing techniques, re-link techniques.{" "}
                            </li>
                            <li className="flex items-center gap-x-3 md:gap-x-5">
                              {" "}
                              <span>
                                <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                              </span>
                              FCP: Choreographed stunt editing, advanced
                              transitions and effects, choreographed song sync,
                              auto sync, editing techniques, re-link techniques.{" "}
                            </li>
                            <li className="flex items-center gap-x-3 md:gap-x-5">
                              {" "}
                              <span>
                                <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                              </span>
                              Assignments: Choreographed stunt editing in Avid
                              and FCP, choreographed song editing in Avid and
                              FCP with workflow reference.{" "}
                            </li>
                            <li className="flex items-center gap-x-3 md:gap-x-5">
                              {" "}
                              <span>
                                <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                              </span>
                              Practical Test: Written and practical tests for
                              Avid and FCP proficiency.{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Month 5
                        </h3>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Practicals:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Avid: Choreographed stunt editing, advanced
                            transitions and effects, choreographed song sync,
                            editing techniques, re-link techniques.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            FCP: Choreographed stunt editing, advanced
                            transitions and effects, choreographed song sync,
                            auto sync, editing techniques, re-link techniques.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Assignments: Choreographed stunt editing in Avid and
                            FCP, choreographed song editing in Avid and FCP with
                            workflow reference.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Practical Test: Written and practical tests for Avid
                            and FCP proficiency.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Month 6
                        </h3>
                        <h3 className="font-bold text-white text-[14px]  md:text-[20px]">
                          Practicals:
                        </h3>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Avid : Spot editing workflow, round-tripping to
                            DaVinci Resolve, censor workflow, editor's role in
                            Qube, relationship with post-production technicians,
                            basic color correction.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            FCP : Spot editing workflow, round-tripping to
                            DaVinci Resolve, censor workflow, basic color
                            correction.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Assignments: Multi-cam edited sequence in Avid and
                            FCP, complete short film edited version, green mate
                            removed sequence, sample outputs for dubbing, SFX,
                            DI, and CG.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-4 items-start">
                    <div className="flex flex-col gap-y-2 items-start">
                      <div>
                        <h3 className="font-bold text-white text-[18px]  md:text-[28px]">
                          Months 7 to 12{" "}
                        </h3>
                        <h1 className="font-bold text-white text-[14px]  md:text-[18px]">
                          6 months internship with an industry expert editor
                        </h1>
                      </div>

                      <div>
                        <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Additional Syllabus: Basic conversion workflow in
                            DaVinci Resolve, Premiere Pro basic intro and
                            workflow, AI tools in Premiere Pro, basic color
                            correction in DaVinci Resolve, AI tools in DaVinci
                            Resolve, documentary editing styles.
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>{" "}
                            Practical Test: Written and practical tests for Avid
                            and FCP.{" "}
                          </li>
                          <li className="flex items-center gap-x-3 md:gap-x-5">
                            {" "}
                            <span>
                              <GiFilmSpool className="text-gray-100 text-[16px] md:text-[20px]" />{" "}
                            </span>
                            Final Submission: All projects and practical
                            sections on 7 to 12 months for film editing course.{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
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
        </section> */
}
