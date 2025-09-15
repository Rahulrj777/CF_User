import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiWhatsappLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import API_URL from "../../config.js";

const VirtualProduction = () => {
  const [banners, setBanners] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [filmography, setFilmography] = useState([]);
  const [courses, setCourses] = useState([]);

  // Fetch courses
  useEffect(() => {
    axios
      .get(`${API_URL}/virtualproductiondiploma`)
      .then((res) => {
        setCourses(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.error("Error fetching courses:", err));
  }, []);

  // Fetch mentors
  useEffect(() => {
    axios
      .get(`${API_URL}/virtualproductionmentor`)
      .then((res) => {
        const mentorData = res.data?.virtualProduction?.mentor || [];
        setMentors(Array.isArray(mentorData) ? mentorData : []);
      })
      .catch((err) => console.error("Error fetching mentors:", err));
  }, []);

  // Fetch banners
  useEffect(() => {
    axios
      .get(`${API_URL}/virtualproductionbanner`)
      .then((res) => setBanners(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching banners:", err));
  }, []);

  // Fetch filmography
  useEffect(() => {
    axios
      .get(`${API_URL}/virtualproductionfilmography`)
      .then((res) => setFilmography(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching filmography:", err));
  }, []);

  const bannerSettings = {
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

  const filmographySettings = {
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

  return (
    <>
      <div className="font-kumbh overflow-hidden">
        <Helmet>
          {/* Title & Description */}
          <title>
            Virtual Production Course in Chennai | Cinema Factory Academy
          </title>

          <meta
            name="description"
            content="Master Virtual Production at Cinema Factory Academy with hands-on training in Unreal Engine, LED walls, in-camera VFX, and motion capture. Learn from industry experts."
          />

          {/* Robots (Enhanced for SEO Previews) */}
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="https://cinemafactoryacademy.com/virtual_production"
          />

          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Virtual Production Course in Chennai | Cinema Factory Academy"
          />
          <meta
            property="og:description"
            content="Cinema Factory Academy offers hands-on Virtual Production training in Unreal Engine, LED walls, in-camera VFX, and motion capture."
          />
          <meta
            property="og:image"
            content="https://cinemafactoryacademy.com/static/media/VP_1.5413c33daec8ab52245f.png"
          />
          <meta
            property="og:url"
            content="https://cinemafactoryacademy.com/virtual_production"
          />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Virtual Production Course in Chennai | Cinema Factory Academy"
          />
          <meta
            name="twitter:description"
            content="Join the Virtual Production Course at Cinema Factory Academy and master Unreal Engine, LED walls, in-camera VFX, and motion capture."
          />
          <meta
            name="twitter:image"
            content="https://cinemafactoryacademy.com/static/media/VP_1.5413c33daec8ab52245f.png"
          />
          <meta name="twitter:site" content="@CF_academy2024" />

          {/* Schema Markup */}
          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Virtual Production Course",
      "description": "Cinema Factory Academy offers a professional Virtual Production Course with hands-on training in LED walls, Unreal Engine, in-camera VFX, motion capture, and real-time filmmaking.",
      "provider": {
        "@type": "Organization",
        "name": "Cinema Factory Academy",
        "url": "https://cinemafactoryacademy.com",
        "sameAs": [
          "https://www.facebook.com/cinemafactoryacademy",
          "https://www.instagram.com/cinemafactoryacademy",
          "https://twitter.com/CF_academy2024",
          "https://www.youtube.com/@cinemafactoryacademy"
        ]
      },
      "courseMode": "Offline",
      "educationalLevel": "Beginner to Advanced",
      "educationalCredentialAwarded": "Diploma in Virtual Production",
      "url": "https://cinemafactoryacademy.com/virtual_production",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Offline",
        "instructor": [
          {
            "@type": "Person",
            "name": "Manoj Paramahamsa",
            "jobTitle": "Cinematographer & Mentor"
          },
          {
            "@type": "Person",
            "name": "Aravind Naga",
            "jobTitle": "Virtual Production Mentor"
          },
          {
            "@type": "Person",
            "name": "Shiv Sankar",
            "jobTitle": "Virtual Production Mentor"
          }
        ]
      }
    }
  `}
          </script>
        </Helmet>

        {/* ---------- Banner Slider ---------- */}
        <section>
          <div className="slider-container -top-8">
            <Slider {...bannerSettings}>
              {banners.length > 0 ? (
                banners.map((banner, idx) => (
                  <div key={banner.id || idx}>
                    <img
                      src={banner.imageUrl}
                      alt={`Banner ${idx + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-white">No banners available</p>
              )}
            </Slider>
          </div>
        </section>

        {/* ---------- Courses / Syllabus ---------- */}
        <section className="border-t-4 border-orange-500 pt-16 pb-10 bg-black">
          <div className="w-full px-4 md:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 ">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div
                  key={course._id}
                  className="flex flex-col items-center gap-y-4 p-6 rounded-xl shadow-lg"
                >
                  <img
                    src={course.imageUrl}
                    className="w-28 md:w-32 object-cover rounded-md shadow"
                    alt={course.course}
                  />
                  <h3 className="text-white font-bold uppercase">
                    {course.course}
                  </h3>
                  <h3 className="text-[#ff0000] font-semibold uppercase">
                    {course.time}
                  </h3>
                  <h3 className="text-gray-200 font-semibold uppercase">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 text-sm text-center">
                    {course.description}
                  </p>
                  <Link to={course.link}>
                    <button className="uppercase border border-red-500 px-6 py-2 text-white rounded-md hover:bg-red-600">
                      Explore More
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 col-span-full">
                No courses available
              </p>
            )}
          </div>
        </section>

        {/* Mentors */}
        {mentors.length > 0 && (
          <section className="pt-20 pb-20 bg-white">
            <div className="w-full md:w-[80%] mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-10">
                FilmMaker As Mentor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-5">
                {mentors.map((mentor) => (
                  <div key={mentor._id} className="flex flex-col items-center">
                    <img
                      src={mentor.imageUrl}
                      alt="mentor"
                      className="w-3/5 md:w-2/3 rounded-md object-cover"
                    />
                    <p className="mt-4 text-center text-gray-800">
                      {mentor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ---------- Filmography Slider ---------- */}

        <section className="bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14 pb-6 md:pb-10">
          <div className="w-full mx-auto">
            <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white mb-8 md:mb-12 text-center">
              Mentor's Filmography
            </h3>
            <div className="slider-container">
              <Slider {...filmographySettings}>
                {filmography.length > 0 ? (
                  filmography.map((item, idx) => (
                    <div key={item.id || idx} className="px-2">
                      <img
                        src={item.imageUrl}
                        className="w-full object-cover"
                        alt="mentor work"
                      />
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
                  <Link to="/apply">
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

{
  /* <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
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
        </section> */
}
