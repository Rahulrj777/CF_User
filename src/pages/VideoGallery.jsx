import { useEffect, useState } from "react";
import axios from "axios";
import API_BASE from "../config.js";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_BASE}/videos`);
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
          <h1 className="text-4xl font-bold mb-2">🎬 Video Gallery</h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {videos.map((video, index) => (
                <div
                  key={video.fileName || index}
                  className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative bg-gray-800">
                    <video
                      className="w-full h-48 object-cover"
                      preload="metadata"
                      muted
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    >
                      <source
                        src={`${API_BASE}${video.url}`}
                        type="video/mp4"
                      />
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
                      <div className="bg-white rounded-full p-4 shadow-lg">
                        <svg
                          className="w-8 h-8 text-black"
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

                  <div className="p-4">
                    <h3 className="font-semibold truncate text-lg">
                      {video.title
                        ? video.title
                            .replace(/^\d+-/, "")
                            .replace(/\.[^/.]+$/, "")
                        : "Unknown Video"}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Click to watch full video
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                <div className="bg-gray-900 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                  <div className="flex justify-between items-center p-6 border-b border-gray-700">
                    <h3 className="text-xl font-semibold">
                      {selectedVideo.fileName
                        ? selectedVideo.fileName
                            .replace(/^\d+-/, "")
                            .replace(/\.[^/.]+$/, "")
                        : "Unknown Video"}
                    </h3>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="text-gray-400 hover:text-white text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="p-6">
                    <video
                      className="w-full max-h-[70vh] rounded-lg shadow-lg"
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
                      <source src={selectedVideo.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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

export default VideoGallery;
