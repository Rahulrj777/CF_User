import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import DirectionFAQ from "../../components/Direction_FAQ";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";

// Icons
import { RiWhatsappLine } from "react-icons/ri";
import { PiFilmSlateDuotone } from "react-icons/pi";

import API_URL from "../../config.js";

const Direction = () => {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [diplomas, setDiplomas] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [filmography, setFilmography] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch banners
  useEffect(() => {
    axios
      .get(`${API_URL}/directionbanner`)
      .then((res) => {
        setBanners(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching banners:", err));
  }, []);

  // Fetch highlights
  useEffect(() => {
    axios
      .get(`${API_URL}/directionhighlights`)
      .then((res) => setHighlights(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching highlights:", err));
  }, []);

  // Fetch diplomas
  useEffect(() => {
    axios
      .get(`${API_URL}/directiondiploma`)
      .then((res) => {
        const diplomaData = res.data.direction?.diploma?.[0] || null;
        setDiplomas(diplomaData); // save the first diploma object directly
      })
      .catch((err) => console.error("Error fetching diplomas:", err));
  }, []);

// Fetch mentors
useEffect(() => {
  axios
    .get(`${API_URL}/directionmentor`)
    .then((res) => {
      console.log("Mentor API response:", res.data); // 👈 add this
      const mentorData = res.data?.direction?.mentor || [];
      setMentors(Array.isArray(mentorData) ? mentorData : []);
    })
    .catch((err) => console.error("Error fetching mentors:", err));
}, []);

  // Fetch filmography
  useEffect(() => {
    axios
      .get(`${API_URL}/directionfilmography`)
      .then((res) => setFilmography(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching filmography:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-white text-center mt-20">Loading...</p>;

  // Slider settings
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

  const filmographySliderSettings = {
    className: "center",
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 2500,
        settings: { slidesToShow: 5, centerPadding: "30px" },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, centerPadding: "30px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, centerPadding: "20px" },
      },
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: "15px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  function topPage() {
    window.scroll(0, 0);
  }

  return (
    <>
      <div className="font-kumbh overflow-hidden">
        <Helmet>
          <title>Top Direction & Screenplay Courses | Cinema Factory</title>
          <meta
            name="description"
            content="Master direction & screenplay at Cinema Factory Academy. Learn from experts with hands-on training."
          />
        </Helmet>

        {/* Banner Slider */}
        {banners.length > 0 && (
          <section className="slider-container -top-10">
            <Slider {...bannerSliderSettings}>
              {banners.map((banner) => (
                <div key={banner._id}>
                  <img
                    src={banner.imageUrl}
                    alt="Direction Banner"
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </section>
        )}

        {/* Highlights */}
        {highlights.length > 0 && (
          <section className="pt-20 pb-20 bg-white">
            <div className="w-full md:w-[90%] mx-auto text-center">
              <h2 className="font-bold text-3xl md:text-5xl mb-10">
                Course Highlights
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {highlights.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col items-center gap-3"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.titleLine}
                      className="w-16 md:w-20 object-contain"
                    />
                    <h3 className="text-center font-semibold text-sm md:text-base">
                      {item.titleLine}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Diploma / Syllabus */}
        {diplomas && (
          <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950">
            <div className="px-4 w-full md:w-[85%] mx-auto">
              {/* Heading */}
              <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
                <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                  1 Year Diploma
                </h3>
                <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                  in Direction & Screenplay
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
                      {diplomas?.semester1?.length > 0 ? (
                        diplomas.semester1.map((line, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-x-3 md:gap-x-5"
                          >
                            <PiFilmSlateDuotone className="text-gray-100 text-[16px] md:text-[20px]" />
                            {line.title}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-400">No items yet</li>
                      )}
                    </ul>
                  </div>

                  {/* Semester 2 */}
                  <div className="flex flex-col gap-y-5 items-start">
                    <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                      Semester 2
                    </h3>
                    <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                      {diplomas?.semester2?.length > 0 ? (
                        diplomas.semester2.map((line, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-x-3 md:gap-x-5"
                          >
                            <PiFilmSlateDuotone className="text-gray-100 text-[16px] md:text-[20px]" />
                            {line.title}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-400">No items yet</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* PDF Button */}
              {diplomas.pdfUrl && (
                <div className="mt-10 flex justify-center">
                  <a
                    href={diplomas.pdfUrl} // Use the full Cloudinary URL
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
        )}

        {/* Mentors */}
        {mentors.length > 0 && (
          <section className="pt-20 pb-20 bg-white">
            <div className="w-full md:w-[80%] mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-10">
                FilmMaker As Mentor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {mentors.map((mentor) => (
                  <div key={mentor._id} className="flex flex-col items-center">
                    <img
                      src={mentor.imageUrl}
                      alt="mentor"
                      className="w-4/5 md:w-full rounded-md object-cover"
                    />
                    <p className="mt-4 text-center text-gray-800">
                      {mentor.designation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filmography Slider */}
        {filmography.length > 0 && (
          <section className="bg-black py-14">
            <div className="w-full md:w-[90%] mx-auto">
              <h3 className="text-center text-white text-3xl md:text-4xl font-bold mb-10">
                Mentor's Filmography
              </h3>
              <Slider {...filmographySliderSettings}>
                {filmography.map((item) => (
                  <div key={item._id} className="px-2">
                    <img
                      src={item.imageUrl}
                      alt="Filmography"
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        )}

        {/* <section className="bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14  pb-6 md:pb-10 ">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center  mb-8 md:mb-12">
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
                        src={posterOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Film Director courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={posterTwo}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Film Director courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={posterThree}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Film Director courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={posterFour}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Film Director courses"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section> */}

        {/* ------------------------------ FAQ ----------------------- */}

        <section className=" pt-8 md:pt-20 pb-10 md:pb-20 bg-[#1f2228]  font-[parta]">
          <div className="w-full px-4 md:w-[80%] mx-auto">
            <div className="flex flex-col gap-y-10 md:flex-row justify-center items-start">
              <div className="w-full md:w-[30%]">
                <div className=" px-2 md:px-6 flex flex-col gap-y-2 md:gap-y-12 items-center font-[poppins]">
                  <h1 className="font-bold text-[35px] md:text-[3.5rem] text-center flex flex-wrap items-center justify-center md:flex-col gap-x-3   md:gap-y-2 md:items-start text-white font-kumbh">
                    <span>Frequently</span>
                    <span>Asked</span>
                    <span className="text-[#ff0000]">Question</span>
                  </h1>

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
                    <DirectionFAQ />
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

export default Direction;
