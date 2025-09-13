import { useEffect, useState } from "react"
import axios from "axios"
import API_BASE from "../../config.js"
import { X, ArrowLeft, ArrowRight } from "lucide-react"

const GuestLecture = () => {
  const category = "guestLecture"

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchVideos = async () => {
      try {
        setLoading(true)
        // 👇 hardcode guestLecture category here
        const res = await axios.get(`${API_BASE}/videos/${category}`)
        setVideos(res.data)
        setError(null)
      } catch (err) {
        console.error("Error fetching videos:", err)
        setError("Failed to load videos")
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300">Loading videos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 text-white">⚠️</div>
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-[24px] md:text-[40px] mb-2">🎬 Guest Lecture Video Gallery</h1>
          <p className="text-gray-400">Watch and enjoy our video collection</p>
        </div>

        {videos.length === 0 ? (
          <div className="bg-gray-900 rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📹</div>
            <h2 className="text-2xl font-semibold mb-2">No Videos Available</h2>
            <p className="text-gray-400">Videos will appear here once uploaded by admin</p>
          </div>
        ) : (
          <>
            {/* Video Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {videos.map((video) => (
                <div
                  key={video._id}
                  className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative bg-gray-800">
                    <video
                      className="w-full h-80 object-cover"
                      preload="metadata"
                      muted
                      onError={(e) => {
                        e.target.style.display = "none"
                        e.target.nextSibling.style.display = "flex"
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
                      <div className="bg-white rounded-full p-4 shadow-lg">
                        <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
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
                    <h3 className="font-semibold truncate text-lg">{video.title || "Unknown Video"}</h3>
                    <p className="text-gray-400 text-sm mt-1">Click to watch full video</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Video Modal */}
            {selectedVideo && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
                <div className="bg-gray-900 rounded-xl w-full h-full sm:max-w-6xl sm:w-full sm:h-[80vh] flex flex-col sm:flex-row overflow-hidden shadow-2xl relative">
                  <div className="flex justify-between items-center p-3 sm:hidden bg-gray-800 border-b border-gray-700">
                    <h3 className="text-lg font-semibold truncate flex-1 mr-4">
                      {selectedVideo.title || "Unknown Video"}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => setShowPanel(!showPanel)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                      >
                        {showPanel ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Video Container */}
                  <div className="flex-1 flex items-center justify-center p-2 sm:p-4 relative bg-black">
                    <video
                      className="w-full h-full rounded-lg shadow-lg object-contain max-h-[60vh] sm:max-h-full"
                      controls
                      autoPlay
                      controlsList="nodownload"
                      onError={(e) => {
                        console.error("Video playback error:", e)
                        alert("Error playing video. Please try again or contact admin.")
                      }}
                    >
                      <source src={selectedVideo.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <div className="hidden sm:flex absolute top-4 right-4 gap-2 z-50">
                      <button
                        onClick={() => setShowPanel(!showPanel)}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 text-white transition-colors backdrop-blur-sm"
                      >
                        {showPanel ? <ArrowRight className="w-6 h-6" /> : <ArrowLeft className="w-6 h-6" />}
                      </button>
                      <button
                        onClick={() => setSelectedVideo(null)}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 text-white transition-colors backdrop-blur-sm"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`
                      bg-gray-800 p-6 flex-col overflow-y-auto transition-all duration-300 ease-in-out
                      ${showPanel ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                      hidden sm:flex w-80 lg:w-96 border-l border-gray-700
                    `}
                  >
                    <h3 className="text-xl font-semibold break-words mb-4 text-white">
                      {selectedVideo.title || "Unknown Video"}
                    </h3>

                    {selectedVideo.description && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Description</h4>
                        <p className="text-gray-300 leading-relaxed">{selectedVideo.description}</p>
                      </div>
                    )}
                  </div>

                  {showPanel && (
                    <div className="sm:hidden bg-gray-800 w-full max-h-[35vh] overflow-y-auto border-t border-gray-700">
                      {/* Drag handle */}
                      <div className="flex justify-center py-3">
                        <div className="w-12 h-1.5 rounded-full bg-gray-600"></div>
                      </div>

                      <div className="px-4 pb-4">
                        {selectedVideo.description && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Description</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">{selectedVideo.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default GuestLecture
