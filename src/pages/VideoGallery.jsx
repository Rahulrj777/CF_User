// pages/VideoGallery.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import API_BASE from "../config.js";

const categories = [
  { name: "Guest Lecture", slug: "guest-lecture" },
  { name: "Highlights", slug: "highlights" },
  { name: "New Launches", slug: "new-launches" },
  { name: "Review", slug: "review" },
  { name: "Student Works", slug: "student-works" },
];

const VideoGallery = () => {
  const [categoryVideos, setCategoryVideos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const allVideos = {};
        for (const cat of categories) {
          const res = await axios.get(`${API_BASE}/videogallerybanner/${cat.slug}`);
          allVideos[cat.slug] = res.data; // Array of videos per category
        }
        setCategoryVideos(allVideos);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => {
          const videos = categoryVideos[cat.slug] || [];
          const thumbVideo = videos[0]?.videoUrl || "/videos/placeholder.mp4";
          const title = videos[0]?.title || cat.name;

          return (
            <Link
              to={`/videos/${cat.slug}`}
              key={cat.slug}
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative">
                <video
                  src={thumbVideo}
                  className="w-full h-80 object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-xl font-semibold">{title}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoGallery;
