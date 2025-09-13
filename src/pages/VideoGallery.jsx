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
              video.description?.length > 35
                ? video.description.slice(0, 35) + "..."
                : video.description || "";

            return (
              <div
                key={video._id}
                className={`rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 transform ${
                  hoveredId === video._id
                    ? "scale-110 z-30"
                    : hoveredId
                    ? "scale-90 opacity-80"
                    : "scale-100"
                } group`}
                onMouseEnter={() => setHoveredId(video._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* clickable area: video + overlay */}
                <div
                  onClick={() =>
                    navigate(categoryRoutes[video.category] || "/videos")
                  }
                  className="relative"
                >
                  {/* Video: pointer-events-none so clicks go to parent */}
                  <video
                    src={video.videoUrl}
                    className="w-full h-64 md:h-80 object-cover relative z-10 transform transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />

                  {/* overlay gradient + text (animation on hover) */}
                  <div className="absolute inset-0 flex items-end z-30 pointer-events-none">
                    <div
                      className="w-full px-3 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent
                       opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-500 ease-out"
                    >
                      <span className="text-white font-semibold text-lg block truncate">
                        {video.title || video.category}
                      </span>
                    </div>
                  </div>

                  {/* optional center play icon on hover (purely visual) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-60 transition-opacity duration-400">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <svg
                        className="w-6 h-6 text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* description / controls area (still clickable for delete etc) */}
                <div className="bg-white text-black p-4 rounded-b-xl">
                  <p
                    className={`text-sm transition-all duration-300 overflow-hidden ${
                      isExpanded ? "max-h-96" : "max-h-16"
                    }`}
                  >
                    {isExpanded ? video.description : descriptionPreview}
                    {video.description?.length > 35 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // important so click doesn't navigate
                          toggleDescription(video._id);
                        }}
                        className="ml-2 text-blue-600 underline inline"
                      >
                        {isExpanded ? "less" : "more"}
                      </button>
                    )}
                  </p>

                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // so delete doesn't trigger navigate
                        handleDelete(video._id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
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
