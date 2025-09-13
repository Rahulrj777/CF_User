import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../../config.js";

const Highlights = () => {
  const category = "highlights";
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // 👇 hardcode guestLecture category here
        const res = await axios.get(`${API_BASE}/videos/${category}`);
        setVideos(res.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300">Loading videos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 text-white">⚠️</div>
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-bold  text-[24px] md:text-[40px] mb-2">
            🎬 Highlights Gallery
          </h1>
          <p className="text-gray-400">Watch and enjoy our video collection</p>
        </div>

        {videos.length === 0 ? (
          <div className="bg-gray-900 rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📹</div>
            <h2 className="text-2xl font-semibold mb-2">No Videos Available</h2>
            <p className="text-gray-400">
              Videos will appear here once uploaded by admin
            </p>
          </div>
        ) : (
          <>
            {/* Video Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {videos.map((video) => {
                // title handling
                const isTitleExpanded =
                  expandedDescriptions[`title-${video._id}`];
                const titlePreview =
                  video.title?.length > 30
                    ? video.title.slice(0, 30) + "..."
                    : video.title;

                // description handling
                const isDescriptionExpanded =
                  expandedDescriptions[`desc-${video._id}`];
                const descriptionPreview =
                  video.description?.length > 50
                    ? video.description.slice(0, 50) + "..."
                    : video.description;

                return (
                  <div key={video._id}>
                    …
                    <h3 className="font-semibold text-lg leading-snug break-words">
                      {isTitleExpanded ? video.title : titlePreview}
                      {video.title?.length > 30 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(`title-${video._id}`);
                          }}
                          className="ml-2 text-blue-400 underline text-sm"
                        >
                          {isTitleExpanded ? "less" : "more"}
                        </button>
                      )}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {isDescriptionExpanded
                        ? video.description
                        : descriptionPreview}
                      {video.description?.length > 50 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDescription(`desc-${video._id}`);
                          }}
                          className="ml-2 text-blue-400 underline inline"
                        >
                          {isDescriptionExpanded ? "less" : "more"}
                        </button>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-4 break-words">
                      {selectedVideo.title || "Unknown Video"}
                    </h3>
                    <video
                      className="w-full max-h-[70vh] rounded-lg shadow-lg"
                      controls
                      autoPlay
                      controlsList="nodownload"
                    >
                      <source src={selectedVideo.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Highlights;
