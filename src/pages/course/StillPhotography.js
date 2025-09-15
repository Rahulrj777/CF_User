import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import PhotographyFAQ from "../../components/PhotographyFAQ";
import API_URL from "../../config.js";

const StillPhotography = () => {
  const [banners, setBanners] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [items, setItems] = useState([]);
  const [contents, setContents] = useState([]);
  const [globalPdf, setGlobalPdf] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Diploma
        const diplomaRes = await axios.get(`${API_URL}/photographydiploma`);
        setContents(diplomaRes.data.items || []);
        setGlobalPdf(
          diplomaRes.data.diplomaPdf?.pdfName
            ? `${API_URL}/photographydiploma/pdf/view`
            : null
        );

        // Mentors
        const mentorRes = await axios.get(`${API_URL}/photographymentor`);
        setMentors(mentorRes.data.photography?.mentor || []);

        // Filmography (if needed)
        const filmographyRes = await axios.get(
          `${API_URL}/photographyfilmography`
        );
        setItems(Array.isArray(filmographyRes.data) ? filmographyRes.data : []);

        // Banners
        const bannerRes = await axios.get(`${API_URL}/photographybanner`);
        setBanners(Array.isArray(bannerRes.data) ? bannerRes.data : []);
      } catch (err) {
        console.error("Error fetching photography data:", err);
      }
    };

    fetchAll();
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

  function topPage() {
    window.scroll(0, 0);
  }

  return (
    <>
      <div className="font-kumbh overflow-hidden">
        <Helmet>
          <title>
            Professional Photography Course in Chennai | Cinema Factory Academy
          </title>
          <meta
            name="description"
            content="Join the Professional Photography Course in Chennai at Cinema Factory Academy. Learn photography with expert training in lighting, composition, editing, and camera techniques. Build a successful career in media, fashion, and creative industries."
          />

          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link
            rel="canonical"
            href="https://cinemafactoryacademy.com/photography"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            property="og:title"
            content="Professional Photography Course in Chennai | Cinema Factory Academy"
          />
          <meta
            property="og:description"
            content="Cinema Factory Academy offers a Professional Photography Course in Chennai with hands-on training in camera techniques, lighting, composition, and editing."
          />
          <meta
            property="og:image"
            content="https://cinemafactoryacademy.com/static/media/still.9a1ac95f5e86ad30a2b7.png"
          />
          <meta
            property="og:url"
            content="https://cinemafactoryacademy.com/photography"
          />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Professional Photography Course in Chennai | Cinema Factory Academy"
          />
          <meta
            name="twitter:description"
            content="Join the Professional Photography Course in Chennai at Cinema Factory Academy."
          />
          <meta
            name="twitter:image"
            content="https://cinemafactoryacademy.com/static/media/still.9a1ac95f5e86ad30a2b7.png"
          />
          <meta name="twitter:site" content="@CF_academy2024" />

          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Professional Photography Course in Chennai",
      "description": "Cinema Factory Academy offers a Professional Photography Course in Chennai with expert training in camera operation, lighting, composition, and editing.",
      "provider": {
        "@type": "Organization",
        "name": "Cinema Factory Academy",
        "url": "https://cinemafactoryacademy.com"
      },
      "courseMode": "Offline",
      "educationalCredentialAwarded": "Professional Certification in Photography",
      "url": "https://cinemafactoryacademy.com/photography"
    }
    `}
          </script>
        </Helmet>

        {/* Banner Slider */}
        <section className="font-playfair relative w-full -top-8">
          <div className="slider-container">
            <Slider {...bannerSettings}>
              {banners.length > 0 ? (
                banners.map((bannerItem, idx) => (
                  <div key={bannerItem.id || idx}>
                    <img
                      src={bannerItem.imageUrl}
                      className="w-full object-cover"
                      alt={`Banner ${idx + 1}`}
                      title="Photography Courses In India"
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-white">No banners available</p>
              )}
            </Slider>
          </div>
        </section>

        {/* Syllabus / Course Content */}
        <section className="border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="w-full px-4 md:w-[80%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                {contents.length} Month Course
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                in Photography
              </p>
            </div>

            <div className="flex justify-center items-center font-[poppins]">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60 w-full">
                {contents.map((month, index) => (
                  <div
                    key={month.id || index}
                    className="flex flex-col gap-y-6"
                  >
                    <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                      {month.title || `Month ${index + 1}`}
                    </h3>
                    <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                      {month.children?.map((child, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-x-3 md:gap-x-5"
                        >
                          <MdOutlinePhotoCamera className="text-gray-100 text-[16px] md:text-[20px] flex-shrink-0 mt-1" />
                          {child}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Global PDF / WhatsApp */}
            <div className="flex justify-center items-center mt-8 md:mt-16 font-[poppins]">
              {globalPdf ? (
                <a href={globalPdf} target="_blank" rel="noopener noreferrer">
                  <button className="uppercase hover:scale-105 inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 text-[14px] md:text-[16px]">
                    View Detailed Syllabus
                  </button>
                </a>
              ) : (
                <a
                  href="https://api.whatsapp.com/send?phone=919884683888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase hover:scale-105 inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 text-[14px] md:text-[16px]">
                    Request Detailed Syllabus
                  </button>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Mentors */}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="px-4 w-full md:w-[80%] mx-auto font-kumbh">
            <h2 className="font-bold text-black text-[20px] md:text-[40px] text-center uppercase md:tracking-[2px] mb-10">
              FilmMaker As Mentor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20">
              {mentors.length > 0 ? (
                mentors.map((mentor, idx) => (
                  <div
                    key={mentor.id || idx}
                    className="flex flex-col items-center gap-y-5"
                  >
                    <img
                      src={mentor.imageUrl}
                      alt="mentor"
                      className="w-3/5 md:w-2/3 rounded-md object-cover"
                    />
                    <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                      {mentor.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-400 col-span-full">
                  No mentors available
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Filmography */}
        <section className="bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14 pb-6 md:pb-10">
          <div className="w-full mx-auto">
            <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white text-center mb-8 md:mb-12">
              Mentor's Filmography
            </h3>
            <div className="slider-container">
              <Slider {...filmographySettings}>
                {items.length > 0 ? (
                  items.map((item, idx) => (
                    <div key={item.id || idx} className="px-2">
                      <img
                        src={item.imageUrl}
                        className="w-full object-cover"
                        alt="mentor work"
                        loading="lazy"
                        fetchpriority="auto"
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
                <div className="flex justify-center items-center  w-full">
                  <div className="w-full md:px-10">
                    <PhotographyFAQ />
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

export default StillPhotography;
