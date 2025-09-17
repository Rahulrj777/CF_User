import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../../config.js";
import { X, ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";

const StudentWorks = () => {
  const category = "studentWorks";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchVideos = async () => {
      try {
        setLoading(true);
        console.log(
          "[v0] Fetching videos from:",
          `${API_BASE}/videos/${category}`
        );
        const res = await axios.get(`${API_BASE}/videos/${category}`);
        console.log("[v0] API response:", res.data);

        if (Array.isArray(res.data)) {
          setVideos(res.data);
        } else if (res.data && Array.isArray(res.data.videos)) {
          setVideos(res.data.videos);
        } else if (res.data && Array.isArray(res.data.data)) {
          setVideos(res.data.data);
        } else {
          console.warn("[v0] Unexpected API response structure:", res.data);
          setVideos([]);
        }
        setError(null);
      } catch (err) {
        console.error("[v0] Error fetching videos:", err);
        setError("Failed to load videos");
        setVideos([]);
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-2xl md:text-4xl mb-2">
            🎬 Student Work Video Gallery
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
              {Array.isArray(videos) &&
                videos.map((video) => (
                  <div
                    key={video._id}
                    className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative bg-gray-800">
                      <video
                        className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover"
                        preload="metadata"
                        muted
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      >
                        <source src={video.videoUrl} type="video/mp4" />
                      </video>

                      {/* Fallback */}
                      <div
                        className="absolute inset-0 bg-gray-700 flex items-center justify-center"
                        style={{ display: "none" }}
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎥</div>
                          <p className="text-gray-300 text-sm">Video Preview</p>
                        </div>
                      </div>

                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="bg-white rounded-full p-3 md:p-4 shadow-lg">
                          <svg
                            className="w-6 h-6 md:w-8 md:h-8 text-black"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 md:p-4">
                      <h3 className="truncate text-sm md:text-lg">
                        {video.title || "Unknown Video"}
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">
                        Click to watch full video
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {selectedVideo && (
              <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
                <div className="w-full h-full flex flex-col md:max-w-7xl md:max-h-[90vh] md:rounded-xl md:overflow-hidden md:shadow-2xl bg-gray-900">
                  {/* Mobile header */}
                  <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700 md:hidden">
                    <h3 className="text-sm text-white flex-1 mr-4 line-clamp-2 leading-tight text-justify">
                      {selectedVideo.title || "Unknown Video"}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      {/* Toggle info panel (bottom sheet) */}
                      <button
                        onClick={() => setShowPanel(!showPanel)}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                        aria-label="Toggle info panel"
                      >
                        {showPanel ? (
                          <ArrowDown className="w-5 h-5" />
                        ) : (
                          <ArrowUp className="w-5 h-5" />
                        )}
                      </button>
                      {/* Close video */}
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                        aria-label="Close video"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                    {/* Video player */}
                    <div className="flex-1 flex items-center justify-center bg-black relative">
                      <video
                        className="w-full h-full max-h-[60vh] md:max-h-full object-contain"
                        controls
                        autoPlay
                        controlsList="nodownload"
                        onError={(e) => {
                          console.error("Video playback error:", e);
                          alert(
                            "Error playing video. Please try again or contact admin."
                          );
                        }}
                      >
                        <source src={selectedVideo.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Desktop controls (top-right) */}
                      <div className="hidden md:flex absolute top-6 right-6 gap-3 z-50">
                        <button
                          onClick={() => setShowPanel(!showPanel)}
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-gray-600"
                          aria-label="Toggle info panel"
                        >
                          {showPanel ? (
                            <ArrowRight className="w-6 h-6" />
                          ) : (
                            <ArrowLeft className="w-6 h-6" />
                          )}
                        </button>
                        <button
                          onClick={() => setSelectedVideo(null)}
                          className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm border border-gray-600"
                          aria-label="Close video"
                        >
                          <X className="w-6 h-6" />
                        </button>
                      </div>
                    </div>

                    {/* Desktop side panel */}
                    <div
                      className={`
            hidden md:flex flex-col bg-gray-800 border-l border-gray-700 transition-all duration-300 ease-in-out overflow-hidden
            ${showPanel ? "w-96 opacity-100" : "w-0 opacity-0"}
          `}
                    >
                      <div className="p-6 overflow-y-auto">
                        <h3 className="text-sm text-white mb-6 leading-tight text-justify">
                          {selectedVideo.title || "Unknown Video"}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Mobile bottom sheet */}
                  <div
                    className={`md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 rounded-t-2xl max-h-[60vh] overflow-y-auto transform transition-transform duration-300 ease-in-out ${
                      showPanel ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    <div className="flex items-center justify-center py-3 relative">
                      {/* Drag handle */}
                      <div className="w-12 h-1.5 rounded-full bg-gray-600"></div>
                    </div>

                    <div className="px-4 pb-6">
                      <h3 className="text-sm text-white mb-4 text-justify">
                        {selectedVideo.title || "Unknown Video"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default StudentWorks;
