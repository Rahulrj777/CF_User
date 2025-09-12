import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE from "../config.js";

const categoryRoutes = {
  "guest-lecture": "/videos/guest-lecture",
  highlights: "/videos/highlights",
  "new-launches": "/videos/new-launches",
  review: "/videos/review",
  "student-works": "/videos/student-works",
};

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/videogallerybanner/all`);
      setVideos(res.data);
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

  if (loading) return <p className="text-center mt-8">Loading videos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      {videos.length === 0 ? (
        <p className="text-gray-400 text-center">No videos available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div
              key={video._id}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() =>
                navigate(categoryRoutes[video.category] || "/videos")
              }
            >
              <video
                src={video.videoUrl}
                className="w-full h-64 md:h-80 object-cover"
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-center py-2">
                <span className="text-white font-semibold text-lg">
                  {video.title || video.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
