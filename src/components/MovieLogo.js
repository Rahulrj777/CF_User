import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import API_BASE from "../config.js"

const MovieLogo = () => {
  const [logos, setLogos] = useState([]);

  // fetch filmography data from backend
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(`${API_BASE}/homefilmography  `);
        setLogos(res.data); // backend should return [{ id, image }]
      } catch (err) {
        console.error("Error fetching filmography:", err);
      }
    };
    fetchLogos();
  }, []);

  // slick slider settings
  const settings = {
    className: "center",
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    responsive: [
      { breakpoint: 2500, settings: { slidesToShow: 5, centerPadding: "30px" } },
      { breakpoint: 2000, settings: { slidesToShow: 6, centerPadding: "30px" } },
      { breakpoint: 1280, settings: { slidesToShow: 5, centerPadding: "30px" } },
      { breakpoint: 1024, settings: { slidesToShow: 4, centerPadding: "30px" } },
      { breakpoint: 768, settings: { slidesToShow: 3, centerPadding: "20px" } },
      { breakpoint: 640, settings: { slidesToShow: 2, centerPadding: "15px" } },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((item) => (
          <div key={item.id} className="px-4">
            <img
              src={item.imageUrl} // serve from backend uploads
              alt="mentor works"
              title="Mentor's Filmography"
              className="w-24 md:w-36 object-cover"
              loading="lazy"
              fetchpriority="auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieLogo;
