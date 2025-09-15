import Slider from "react-slick";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import VfxFAQ from "../../components/VfxFAQ";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";
import API_URL from "../../config.js";
import { RiWhatsappLine } from "react-icons/ri";

const Vfx = () => {
  const [banners, setBanners] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState(null);
  const [mentor, setmentor] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchmentor();
  }, []);

  const fetchmentor = async () => {
    try {
      const res = await axios.get(`${API_URL}/vfxmentor`);
      const mentorData = res.data?.vfx?.mentor || []; // ✅ match backend
      setmentor(Array.isArray(mentorData) ? mentorData : []);
    } catch (err) {
      console.error("Error fetching mentor:", err);
      setmentor([]);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}/vfxdiploma`);
      const data = res.data;
      setImages(Array.isArray(data.images) ? data.images : []);
      setPdf(
        data.diplomaPdf?.pdfName
          ? { pdfUrl: `${API_URL}/vfxdiploma/pdf/view` }
          : null
      );
    } catch (err) {
      console.error("Error fetching diploma files", err);
      setImages([]);
      setPdf(null);
    }
  };

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get(`${API_URL}/vfxbanner`);
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

  function topPage() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/vfxfilmography`)
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
      .get(`${API_URL}/vfxhighlights`)
      .then((res) => setHighlights(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="font-kumbh overflow-hidden ">
        <Helmet>
          {/* Title & Description */}
          <title>VFX Course in chennai | Cinema Factory Academy</title>
          <meta
            name="description"
            content="Join the VFX Course at Cinema Factory Academy, Chennai. Learn compositing, rotoscoping, motion graphics, 3D, and CGI with hands-on training for careers in films, gaming, and digital media."
          />

          {/* Robots */}
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />

          {/* Canonical URL */}
          <link rel="canonical" href="https://cinemafactoryacademy.com/vfx" />

          {/* Viewport */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="VFX Course in chennai | Cinema Factory Academy"
          />
          <meta
            property="og:description"
            content="Cinema Factory Academy offers a professional VFX Course with training in compositing, rotoscoping, motion graphics, 3D, and CGI. Build industry-ready skills for a successful career in visual effects."
          />
          <meta
            property="og:image"
            content="https://cinemafactoryacademy.com/static/media/vfx.8218d3c030b0afb96145.jpg"
          />
          <meta
            property="og:url"
            content="https://cinemafactoryacademy.com/vfx"
          />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="VFX Course in chennai | Cinema Factory Academy"
          />
          <meta
            name="twitter:description"
            content="Join the VFX Course at Cinema Factory Academy. Learn compositing, motion graphics, CGI & more with hands-on training for careers in visual effects."
          />
          <meta
            name="twitter:image"
            content="https://cinemafactoryacademy.com/static/media/vfx.8218d3c030b0afb96145.jpg"
          />
          <meta name="twitter:site" content="@CF_academy2024" />

          {/* Schema Markup */}
          <script type="application/ld+json">
            {`
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "VFX Course in chennai",
    "description": "Cinema Factory Academy offers a professional VFX Course with hands-on training in compositing, rotoscoping, motion graphics, 3D, and CGI. Students gain practical experience with industry-standard tools to build a successful career in visual effects.",
    "provider": {
      "@type": "Organization",
      "name": "Cinema Factory Academy",
      "url": "https://cinemafactoryacademy.com"
    },
    "educationalCredentialAwarded": "Diploma in Visual Effects",
    "courseMode": "Offline",
    "url": "https://cinemafactoryacademy.com/vfx",
    
  }
  `}
          </script>
        </Helmet>

        {/* Course Images */}
        <img
          src="https://cinemafactoryacademy.com/static/media/vfx.8218d3c030b0afb96145.jpg"
          alt="VFX Course Diploma in Visual Effects Training at Cinema Factory Academy Chennai"
          loading="lazy"
        />
        <img
          src="https://cinemafactoryacademy.com/static/media/Aravind.3fa132f903ab7b6145c4.jpg"
          alt="Aravind - Mentor for VFX Course at Cinema Factory Academy"
          loading="lazy"
        />
        <img
          src="https://cinemafactoryacademy.com/static/media/shiv.20cb06d42babe5f2aa0c.png"
          alt="Shiv - Mentor for Visual Effects Training at Cinema Factory Academy"
          loading="lazy"
        />
        <img
          src="https://cinemafactoryacademy.com/static/media/muniraj.3fabc87312c52f08bcb7.jpg"
          alt="Muniraj - VFX Faculty at Cinema Factory Academy"
          loading="lazy"
        />

        {/* Page Content */}
        <h1>VFX Course – Visual Effects Training at Cinema Factory Academy</h1>
        <h2>Master the Art of Visual Effects</h2>
        <p>
          Cinema Factory Academy offers a professional{" "}
          <strong>VFX Course</strong> designed for students passionate about
          creating stunning visual effects for films, television, and digital
          media. Visual effects play a vital role in modern storytelling,
          blending imagination with technology to bring impossible scenes to
          life. Our course provides the perfect platform to gain both creative
          and technical expertise in this high-demand field.
        </p>
        <p>
          The <strong>Visual Effects Course</strong> covers every essential
          aspect of VFX production, including compositing, rotoscoping, motion
          graphics, 3D modeling, animation, match moving, and CGI integration.
          Students learn how to use industry-standard software and tools to
          produce realistic effects that enhance storytelling. With a balance of
          theory and practice, the program ensures that learners are prepared
          for professional post-production environments.
        </p>
        <p>
          At Cinema Factory Academy, we believe in learning by doing. Students
          gain hands-on experience through real-world projects, workshops, and
          studio simulations. Guided by experienced mentors and industry
          professionals, you will develop practical skills while also nurturing
          your artistic vision. This approach ensures that graduates leave with
          both technical confidence and a creative edge.
        </p>
        <p>
          Our <strong>Diploma in Visual Effects</strong> prepares students for
          careers as VFX artists, compositors, motion graphics designers, and 3D
          specialists in films, advertising, gaming, and OTT platforms. With the
          growing demand for high-quality visual effects in global
          entertainment, completing the <strong>VFX Course</strong> at Cinema
          Factory Academy opens the door to exciting and rewarding career
          opportunities. Many VFX learners also pursue our{" "}
          <a href="/virtual_production">Virtual Production Course</a> to explore
          real-time workflows, <a href="/editing">Video Editing Course</a> to
          sharpen storytelling, and{" "}
          <a href="/photography">Photography Course</a> to strengthen their
          creative eye.
        </p>

        <Slider {...bannerSliderSettings}>
          {Array.isArray(banners) && banners.length > 0 ? (
            banners.map((banner, idx) => (
              <div key={banner._id || idx}>
                <img
                  src={banner?.imageUrl || ""}
                  alt={`Vfx Banner ${idx + 1}`}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-white">No banners available</p>
          )}
        </Slider>

        {/* -------------- Highlinghts ----------------- */}

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
                      {Array.isArray(highlights) && highlights.length > 0 ? (
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
            {/* Header */}
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-10">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                1 Year Diploma Course{" "}
              </h3>
              <p className="font-semibold text-[18px] md:text-[28px] text-[#ff0000] font-[roboto] uppercase tracking-[3px]">
                in Visual Effects
              </p>
            </div>

            {/* Images Grid */}
            <div className="flex flex-col md:flex-row items-center gap-y-8">
              <div className="w-full flex justify-center">
                <div className="w-full">
                  <div>
                    <h2 className="text-[18px] md:text-[26px] font-semibold text-white text-center mb-2 md:mb-10">
                      Softwares Covered
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 md:gap-x-14 gap-y-6 md:gap-y-10">
                    {Array.isArray(images) && images.length > 0 ? (
                      images.map((img) => (
                        <div
                          key={img._id || img.id}
                          className="flex justify-center items-center"
                        >
                          <img
                            src={img.imageUrl}
                            className="w-16 md:w-28 object-cover"
                            alt="software"
                            title="Best Visual Effects Institute"
                            loading="lazy"
                            fetchpriority="auto"
                          />
                        </div>
                      ))
                    ) : (
                      <p className="col-span-full text-center text-gray-400">
                        No software images uploaded yet.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button (PDF Download or WhatsApp) */}
            {pdf ? (
              <div className="flex justify-center items-center mt-8 md:mt-20 font-[poppins]">
                <a href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <button className="uppercase hover:scale-105 inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
                    Download Detailed Syllabus
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center mt-8 md:mt-20 font-[poppins]">
                <a
                  href="https://api.whatsapp.com/send?phone=919884683888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="uppercase hover:scale-105 inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-green-600 border border-white px-6 md:px-10 font-medium text-white duration-500 text-[14px] md:text-[16px]">
                    Request Detailed Syllabus via WhatsApp
                  </button>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ------------------ mentor ------------------ */}

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="px-4 w-full md:w-[80%] mx-auto font-kumbh">
            <div className="flex items-center justify-center mb-6 md:mb-10">
              <h2 className="font-bold text-black text-[20px] md:text-[40px] text-center uppercase md:tracking-[2px]">
                FilmMaker As Mentor
              </h2>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-20">
                {Array.isArray(mentor) && mentor.length > 0 ? (
                  mentor.map((mentor) => (
                    <div
                      key={mentor.id || mentor._id}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="flex justify-center items-center">
                        <img
                          src={mentor.imageUrl || ""}
                          className="w-3/5 md:w-2/3 rounded-md object-cover"
                          alt="mentor"
                          title="Learn cinematography Courses"
                          loading="lazy"
                          fetchpriority="auto"
                        />
                      </div>

                      <div className="flex flex-col gap-y-5 items-center justify-center mt-5">
                        <div className="w-full md:w-[70%] mx-auto">
                          <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                            {mentor.description || "No description available"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">
                    No mentor available
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* -------------- Our mentor have Worked In ------------------------ */}

        <section className="bg-black overflow-hidden flex justify-center items-center pt-8 md:pt-14 pb-6 md:pb-10">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-8 md:mb-12">
              <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white">
                Mentor's Filmography
              </h3>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
                {Array.isArray(items) && items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="px-2">
                      <div>
                        <img
                          src={item.imageUrl || ""}
                          className="w-full max-w-xs rounded-md object-cover object-top"
                          alt="mentor"
                          title="Learn cinematography Courses"
                          loading="lazy"
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

        {/* <section className="bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 ">
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
                        src={aravindOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={munirajOne}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={munirajTwo}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={munirajThree}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={munirajFour}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={munirajFive}
                        className="w-full object-cover"
                        alt="mentor work"
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                        title="Top-Rated VFX Training Institute"
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
                    <VfxFAQ />
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

export default Vfx;
