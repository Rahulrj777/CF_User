import { useEffect, useState } from "react";
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
      // Group videos by category
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

  if (loading) return <p className="text-center mt-8">Loading videos...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      {categories.map((cat) => (
        <div key={cat.slug} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{cat.label}</h2>

          {videos[cat.slug] && videos[cat.slug].length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {videos[cat.slug].map((video) => (
                <div
                  key={video._id}
                  className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <video
                    src={video.videoUrl}
                    className="w-full h-80 object-cover"
                    controls
                    preload="metadata"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">
                      {video.title || "Untitled Video"}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No videos available in this category.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
