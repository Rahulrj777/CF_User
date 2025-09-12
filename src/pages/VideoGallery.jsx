import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE from "../config.js";

const categories = [
  { label: "Guest Lecture", slug: "guest-lecture" },
  { label: "Highlights", slug: "highlights" },
  { label: "New Launches", slug: "new-launches" },
  { label: "Review", slug: "review" },
  { label: "Student Works", slug: "student-works" },
];

const VideoGallery = () => {
  const [videos, setVideos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/videogallerybanner/all`);
      const grouped = res.data.reduce((acc, video) => {
        acc[video.category] = acc[video.category] || [];
        acc[video.category].push(video);
        return acc;
      }, {});
      setVideos(grouped);
      setError(null);
    } catch (err) {
      console.error("Error fetching videos:", err);
      setError("Failed to load videos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) return <p className="text-center mt-8 text-white">Loading videos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={`/videos/${cat.slug}`}
            key={cat.slug}
            className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={
                  videos[cat.slug]?.[0]?.videoUrl ||
                  `/videos/${cat.slug}.jpg` // fallback image
                }
                alt={cat.label}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">
                  {cat.label}
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
