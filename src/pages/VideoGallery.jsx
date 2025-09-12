// pages/VideoGallery.jsx
import { Link } from "react-router-dom";
import img1 from "../images/gust.jpg"
import img2 from "../images/newlook.jpg"
import img3 from "../images/highlights.jpg"
import img4 from "../images/webinar.jpg"
import img5 from "../images/review.jpg"

const categories = [
  {
    name: "Guest Lecture",
    slug: "guest-lecture",
    thumb: img1,
  },
  {
    name: "Highlights",
    slug: "highlights",
    thumb: img3,
  },
  {
    name: "New Launches",
    slug: "new-launches",
    thumb: img2,
  },
  {
    name: "Review",
    slug: "review",
    thumb: img5,
  },
  {
    name: "Student Works",
    slug: "student-works",
    thumb: img4,
  },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={`/videos/${cat.slug}`}
            key={cat.slug}
            className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={cat.thumb}
                alt={cat.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">
                  {cat.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
