// pages/VideoGallery.jsx
import { Link } from "react-router-dom";

const categories = [
  { name: "Guest Lecture", slug: "guest-lecture", thumb: "/videos/guest-lecture.mp4" },
  { name: "Highlights", slug: "highlights", thumb: "/videos/highlights.mp4" },
  { name: "New Launches", slug: "new-launches", thumb: "/videos/new-launches.mp4" },
  { name: "Review", slug: "review", thumb: "/videos/review.mp4" },
  { name: "Student Works", slug: "student-works", thumb: "/videos/student-works.mp4" },
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
              <video
                src={cat.thumb}
                className="w-full h-80 object-cover"
                muted
                autoPlay
                loop
                playsInline
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
