import Slider from "react-slick"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import "../text.css"
import axios from "axios"
import { useState, useEffect } from "react"
import banner from "../../images/course/banner/pattern.jpg"
import { RiWhatsappLine } from "react-icons/ri"
import { FaComputer } from "react-icons/fa6"
import API_URL from "../../config.js"

const DI = () => {
  const [banners, setBanners] = useState([])
  const [highlights, setHighlights] = useState([])
  const [mentors, setMentors] = useState([])
  const [items, setItems] = useState([])
  const [contents, setContents] = useState([])
  const [globalPdf, setGlobalPdf] = useState(null)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        console.log("[v0] Starting data fetch...")

        // Diploma
        const diplomaRes = await axios.get(`${API_URL}/didiploma`)
        console.log("[v0] Diploma response:", diplomaRes.data)
        setContents(diplomaRes.data.items || [])
        setGlobalPdf(diplomaRes.data.pdf || null)

        // Mentors - Fixed data path handling
        const mentorRes = await axios.get(`${API_URL}/dimentor`)
        console.log("[v0] Mentor response:", mentorRes.data)

        let mentorData = []
        if (mentorRes.data.di?.mentor) {
          mentorData = Array.isArray(mentorRes.data.di.mentor) ? mentorRes.data.di.mentor : [mentorRes.data.di.mentor]
        } else if (mentorRes.data.mentor) {
          mentorData = Array.isArray(mentorRes.data.mentor) ? mentorRes.data.mentor : [mentorRes.data.mentor]
        } else if (Array.isArray(mentorRes.data)) {
          mentorData = mentorRes.data
        } else if (mentorRes.data.items) {
          mentorData = Array.isArray(mentorRes.data.items) ? mentorRes.data.items : []
        }

        console.log("[v0] Processed mentor data:", mentorData)
        setMentors(mentorData)

        // Highlights - Fixed data path handling
        const highlightsRes = await axios.get(`${API_URL}/dihighlights`)
        console.log("[v0] Highlights response:", highlightsRes.data)

        let highlightsData = []
        if (highlightsRes.data.items) {
          highlightsData = Array.isArray(highlightsRes.data.items) ? highlightsRes.data.items : []
        } else if (highlightsRes.data.highlights) {
          highlightsData = Array.isArray(highlightsRes.data.highlights) ? highlightsRes.data.highlights : []
        } else if (Array.isArray(highlightsRes.data)) {
          highlightsData = highlightsRes.data
        } else if (highlightsRes.data.di?.highlights) {
          highlightsData = Array.isArray(highlightsRes.data.di.highlights) ? highlightsRes.data.di.highlights : []
        }

        console.log("[v0] Processed highlights data:", highlightsData)
        setHighlights(highlightsData)

        // Filmography (if needed)
        const filmographyRes = await axios.get(`${API_URL}/difilmography`)
        console.log("[v0] Filmography response:", filmographyRes.data)
        setItems(Array.isArray(filmographyRes.data) ? filmographyRes.data : [])

        // Banners
        const bannerRes = await axios.get(`${API_URL}/dibanner`)
        console.log("[v0] Banner response:", bannerRes.data)
        setBanners(Array.isArray(bannerRes.data) ? bannerRes.data : [])

        console.log("[v0] All data fetched successfully")
      } catch (err) {
        console.error("[v0] Error fetching di data:", err)
        if (err.response) {
          console.error("[v0] Error response:", err.response.data)
          console.error("[v0] Error status:", err.response.status)
        }
      }
    }

    fetchAll()
  }, [])

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
  }

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
  }

  return (
    <>
      <div className="font-kumbh overflow-hidden">
        <Helmet>
          <title>Color Grading Courses India | Color Grading Institute India</title>
          <meta
            name="description"
            content="Transform your visuals with our 3-month color grading course. Learn color correction, mood creation, and effects integration with hands-on training from industry experts"
          />
          <meta
            name="keywords"
            content="Digital Imaging courses | Color Grading courses | Best Digital Imaging courses | Best Color Grading courses | Digital Imaging Institute | Color Grading Institute | Film editing Courses | film institute in india"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
        </Helmet>

        {/* Background banner */}
        <img
          src={banner || "/placeholder.svg"}
          className="blur-[2px] w-full fixed top-0 object-cover h-screen -z-30"
          alt="banner"
          title="Color Grading Courses India"
          loading="lazy"
        />

        {/* Banner Slider */}
        <section>
          <div className="font-playfair relative w-full -top-12">
            <div className="slider-container">
              <Slider {...bannerSliderSettings}>
                {Array.isArray(banners) && banners.length > 0 ? (
                  banners.map((bannerItem, idx) => (
                    <div key={bannerItem.id || bannerItem._id || idx}>
                      <img
                        src={bannerItem.imageUrl || ""}
                        className="w-full object-cover"
                        alt={`CF_banner_${idx + 1}`}
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-white">No banners available</p>
                )}
              </Slider>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="w-full md:w-[90%] mx-auto">
            <div className="font-[Prata] flex flex-col items-center">
              <h1 className="font-bold text-[24px] md:text-[40px] uppercase font-[poppins] text-black text-center mb-10 md:mb-20">
                Course Highlights
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-16 gap-y-8 md:gap-y-14 mt-1 font-kumbh">
                {Array.isArray(highlights) && highlights.length > 0 ? (
                  highlights.map((item, index) => (
                    <div key={item._id || item.id || index}>
                      <div className="flex flex-col items-center gap-y-3">
                        <img
                          src={item.imageUrl || item.image || ""}
                          className="w-14 md:w-20 object-contain mb-2 filter brightness-0"
                          alt={item.titleLine || item.title || "Highlight"}
                          loading="lazy"
                          onError={(e) => {
                            console.log("[v0] Image failed to load:", item.imageUrl || item.image)
                            e.target.style.display = "none"
                          }}
                        />
                        <h3 className="uppercase font-semibold text-center text-[10px] md:text-[14px] text-black tracking-[1px] leading-snug">
                          {item.titleLine || item.title || "N/A"}
                        </h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 md:col-span-4 text-center">
                    <p className="text-gray-500">No highlights available</p>
                    <p className="text-xs text-gray-400 mt-2">
                      Debug: highlights array length = {highlights?.length || 0}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus */}
        <section className="border-t-4 border-orange-500 pt-10 pb-16 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="w-full px-4 md:w-[80%] mx-auto">
            <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
              <h3 className="font-bold text-center text-[24px] md:text-[40px] text-white font-kumbh uppercase">
                3 Month Course
              </h3>
              <p className="font-semibold text-[18px] md:text-[24px] text-[#ff0000] font-[roboto] uppercase tracking-[1px]">
                in Color Grading
              </p>
            </div>

            {/* Content */}
            <div className="flex justify-center items-center font-[poppins]">
              <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-60 w-full">
                {Array.isArray(contents) && contents.length > 0 ? (
                  contents.map((month, idx) => (
                    <div key={month.id || month._id || idx} className="flex flex-col gap-y-6">
                      <h3 className="font-bold text-white text-[18px] md:text-[28px]">
                        {month.title || `Month ${idx + 1}`}
                      </h3>
                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-4 text-gray-200">
                        {Array.isArray(month.children) &&
                          month.children.map((child, i) => (
                            <li key={i} className="flex items-start gap-x-3 md:gap-x-5">
                              <FaComputer className="text-gray-100 text-[16px] md:text-[20px] flex-shrink-0 mt-1" />
                              {child}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">No syllabus content available</p>
                )}
              </div>
            </div>

            {/* PDF / WhatsApp CTA */}
            <div className="flex justify-center items-center mt-8 md:mt-20 font-[poppins]">
              {globalPdf ? (
                <a href={`${API_URL}${globalPdf}`} target="_blank" rel="noopener noreferrer">
                  <button className="uppercase hover:scale-105 group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
                    View Detailed Syllabus
                  </button>
                </a>
              ) : (
                <a href="https://api.whatsapp.com/send?phone=9884683888" target="_blank" rel="noopener noreferrer">
                  <button className="uppercase hover:scale-105 group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500 text-[14px] md:text-[16px]">
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
              {Array.isArray(mentors) && mentors.length > 0 ? (
                mentors.map((mentor, index) => (
                  <div key={mentor._id || mentor.id || index} className="flex flex-col items-center gap-y-5">
                    <img
                      src={mentor.imageUrl || mentor.image || ""}
                      alt={mentor.description || mentor.name || "mentor"}
                      className="w-3/5 md:w-2/3 rounded-md object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.log("[v0] Mentor image failed to load:", mentor.imageUrl || mentor.image)
                        e.target.style.display = "none"
                      }}
                    />
                    <p className="text-[13px] md:text-[14px] text-gray-900 text-center">
                      {mentor.description || mentor.bio || "No description available"}
                    </p>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p className="text-gray-400">No mentors available</p>
                  <p className="text-xs text-gray-400 mt-2">Debug: mentors array length = {mentors?.length || 0}</p>
                </div>
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
              <Slider {...filmographySliderSettings}>
                {Array.isArray(items) && items.length > 0 ? (
                  items.map((item, idx) => (
                    <div key={item.id || item._id || idx} className="px-2">
                      <img
                        src={item.imageUrl || "/placeholder.svg"}
                        className="w-full object-cover"
                        alt="mentor work"
                        loading="lazy"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center">No filmography uploaded yet.</p>
                )}
              </Slider>
            </div>
          </div>
        </section>

        {/* --------------------- how to appply  -------------------*/}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950">
          <div className="px-4 w-full md:w-[80%] mx-auto">
            <div>
              <h3 className="text-white font-bold text-[20px] md:text-[30px] mb-3 md:mb-3 uppercase">How to apply?</h3>

              <div className="flex flex-col gap-y-2 text-[14px] text-gray-200">
                <p className="font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4">
                  To join Cinema Factory Academy:
                </p>
                <ul className="font-[roboto] text-[12px] md:text-[14px] list-disc space-y-1 md:space-y-3 ml-4 md:ml-4 ">
                  <li>Fill out our enquiry form or call us.</li>
                  <li>Speak with our student counselor to finalize your chosen craft.</li>
                  <li>Complete the application form and attend an interview.</li>
                  <li>Upon acceptance, you'll receive an acceptance letter.</li>
                </ul>
              </div>

              <div className="flex items-center gap-x-4 md:gap-x-10 mt-4 md:mt-10 font-[poppins] text-[12px] md:text-[14px]">
                <div>
                  <Link to="/apply">
                    <button className="uppercase  group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500">
                      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">Apply now</div>
                      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Apply Now</div>
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
  )
}

export default DI
