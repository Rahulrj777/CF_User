import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { PiMaskHappyBold } from "react-icons/pi";
import banner from "../../images/course/banner/pattern.jpg";
import API_URL from "../../config.js";
import { RiWhatsappLine } from "react-icons/ri";

const Acting = () => {
  const [banners, setBanners] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [contents, setContents] = useState([]);
  const [globalPdf, setGlobalPdf] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Diploma
        const diplomaRes = await axios.get(`${API_URL}/actingdiploma`);
        setContents(diplomaRes.data.items || []);
        setGlobalPdf(
          diplomaRes.data.diplomaPdf?.pdfName
            ? `${API_URL}/actingdiploma/pdf/view`
            : null
        );

        // Mentors
        const mentorRes = await axios.get(`${API_URL}/actingmentor`);
        setMentors(mentorRes.data.acting?.mentor || []);

        // Banners
        const bannerRes = await axios.get(`${API_URL}/actingbanner`);
        setBanners(Array.isArray(bannerRes.data) ? bannerRes.data : []);
      } catch (err) {
        console.error("Error fetching acting data:", err);
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

  function topPage() {
    window.scroll(0, 0);
  }

  return (
    <>
      <div className="font-kumbh overflow-hidden">
        <Helmet>
          {/* Title & Description */}
          <title>Acting Course in India - Cinema Factory Academy</title>
          <meta
            name="description"
            content="Join Cinema Factory Academy's Acting Course to learn voice control, body language, improvisation, and on-camera performance. Expert mentors Chandra & Nassar."
          />

          {/* Robots */}
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          {/* Canonical */}
          <link
            rel="canonical"
            href="https://cinemafactoryacademy.com/acting"
          />

          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Acting Course | Cinema Factory Academy"
          />
          <meta
            property="og:description"
            content="Professional Acting Course to train in voice, body language, improvisation, and on-camera performance."
          />
          <meta
            property="og:image"
            content="https://cinemafactoryacademy.com/static/media/acting.9572f777927f421571fc.png"
          />
          <meta
            property="og:url"
            content="https://cinemafactoryacademy.com/acting"
          />
          <meta property="og:type" content="website" />

          {/* Twitter Cards */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Acting Course | Cinema Factory Academy"
          />
          <meta
            name="twitter:description"
            content="Learn acting from professional mentors with hands-on training at Cinema Factory Academy."
          />
          <meta
            name="twitter:image"
            content="https://cinemafactoryacademy.com/static/media/acting.9572f777927f421571fc.png"
          />
          <meta name="twitter:site" content="@CF_academy2024" />

          {/* Schema Markup */}
          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Acting Course",
      "description": "Professional Acting Course to train in voice, body language, improvisation, and on-camera performance.",
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
      "educationalCredentialAwarded": "Diploma in Acting",
      "url": "https://cinemafactoryacademy.com/acting"
    }
    `}
          </script>
        </Helmet>

        {/* ---------- Background Banner ---------- */}
        <div>
          <img
            src={banner}
            className="blur-[2px] w-full fixed top-0 object-cover h-screen -z-30"
            alt="main banner"
            title="Learn Acting Courses In India"
            loading="lazy"
            fetchpriority="auto"
          />
        </div>

        {/* ---------- Banner Slider ---------- */}
        <section>
          <div className="slider-container">
            <Slider {...bannerSettings}>
              {banners.length > 0 ? (
                banners.map((bannerItem, idx) => (
                  <div key={bannerItem.id || idx}>
                    <img
                      src={bannerItem.imageUrl}
                      className="w-full object-cover"
                      alt={`Banner ${idx + 1}`}
                      title="Acting Courses In India"
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

        {/* ---------- Syllabus / Courses ---------- */}
        <section className="border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="w-full px-4 md:w-[80%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                {contents.length} Month Course
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                in Acting
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
                          <PiMaskHappyBold className="text-gray-100 text-[16px] md:text-[20px] flex-shrink-0 mt-1" />
                          {child}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

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

        {/* ---------- Mentors ---------- */}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="px-4 w-full md:w-[80%] mx-auto font-kumbh">
            <h2 className="font-bold text-black text-[20px] md:text-[40px] text-center uppercase md:tracking-[2px] mb-10">
              FilmMaker As Mentor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20">
              {mentors.length > 0 ? (
                mentors.map((mentors, idx) => (
                  <div
                    key={mentors.id || idx}
                    className="flex flex-col items-center gap-y-5"
                  >
                    <img
                      src={mentors.imageUrl || ""}
                      alt="mentors"
                      className="w-3/5 md:w-2/3 rounded-md object-cover"
                    />
                    <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                      {mentors.description}
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
