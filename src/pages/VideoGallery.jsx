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
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [hoveredId, setHoveredId] = useState(null);
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

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <p className="text-center mt-8">Loading videos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="font-bold text-[24px] md:text-[40px] text-center mb-12">
        🎬 Video Gallery
      </h1>

      {videos.length === 0 ? (
        <p className="text-gray-400 text-center">No videos available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => {
            const isExpanded = expandedDescriptions[video._id];
            const descriptionPreview =
              video.description.length > 50
                ? video.description.slice(0, 50) + "..."
                : video.description;

            return (
              <div
                key={video._id}
                className={`rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${
                  hoveredId === video._id
                    ? "scale-110 z-10"
                    : hoveredId
                    ? "scale-90 opacity-80"
                    : "scale-100"
                }`}
                onMouseEnter={() => setHoveredId(video._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  onClick={() =>
                    navigate(categoryRoutes[video.category] || "/videos")
                  }
                  className="relative group"
                >
                  {/* Animated overlay */}
                  <div
                    className="
    absolute bottom-3 left-0 w-full 
    bg-black/50 text-center py-2
    translate-y-4 opacity-0
    group-hover:translate-y-0 group-hover:opacity-100
    transition-all duration-500
    overflow-hidden
  "
                  >
                    <span
                      className="
      inline-block whitespace-nowrap
      text-white font-semibold text-lg tracking-wide
      lg:group-hover:animate-marquee  /* fade+scroll on large screens */
      sm:animate-marquee md:animate-marquee  /* always scroll on small/medium */
    "
                    >
                      {video.title || video.category}
                    </span>
                  </div>

                  <video
                    src={video.videoUrl}
                    className="w-full h-64 md:h-80 object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                </div>

                <div className="bg-white text-black p-4 rounded-b-xl">
                  <p
                    className={`text-sm transition-all duration-300 overflow-hidden ${
                      isExpanded ? "max-h-96" : "max-h-16"
                    }`}
                  >
                    {isExpanded ? video.description : descriptionPreview}
                    {video.description.length > 50 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDescription(video._id);
                        }}
                        className="ml-2 text-blue-600 underline inline"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
