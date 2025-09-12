import { useEffect, useState, useRef } from "react";
import axios from "axios";
import API_BASE from "../config.js";

const categories = [
  { label: "Guest Lecture", slug: "guest-lecture" },
  { label: "Highlights", slug: "highlights" },
  { label: "New Launches", slug: "new-launches" },
  { label: "Review", slug: "review" },
  { label: "Student Works", slug: "student-works" },
];

const VideoGalleryBanner = () => {
  const [videos, setVideos] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0].slug);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`${API_BASE}/videogallerybanner/all`);
      setVideos(res.data); // Array of all uploaded video objects
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleUpload = async () => {
    const existing = videos.find((v) => v.category === category);
    if (existing) {
      return alert(`A video for "${category}" already exists! Delete it first.`);
    }
    if (!file) return alert("Please select a video");
    if (!title.trim()) return alert("Please enter a title");

    setUploading(true);
    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title.trim());
    formData.append("category", category);

    try {
      await axios.post(`${API_BASE}/videogallerybanner/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchVideos();
      setFile(null);
      setTitle("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      alert("Video uploaded successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert(`Upload failed: ${err.response?.data?.error || err.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      await axios.delete(`${API_BASE}/videogallerybanner/${_id}`);
      await fetchVideos();
      alert("Video deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert(`Delete failed: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🎬 Video Gallery Banner
      </h1>

      {/* Upload New Video Section */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          📤 Upload New Banner Video
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border-2 border-dashed cursor-pointer border-indigo-300 rounded-lg p-4 bg-white focus:border-indigo-500"
          />

          <input
            type="text"
            placeholder="Enter video title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-4 bg-white focus:border-indigo-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md p-3"
          >
            {categories.map((cat) => (
              <option
                key={cat.slug}
                value={cat.slug}
                disabled={videos.some((v) => v.category === cat.slug)}
              >
                {cat.label}{" "}
                {videos.some((v) => v.category === cat.slug)
                  ? "(Already Uploaded)"
                  : ""}
              </option>
            ))}
          </select>

          <button
            onClick={handleUpload}
            disabled={!file || !title || uploading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold"
          >
            {uploading ? "Uploading..." : "Upload Video"}
          </button>

          {file && (
            <p className="mt-2 text-sm text-gray-600">
              Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>
      </div>

      {/* Display All Videos */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        📹 All Uploaded Videos ({videos.length})
      </h2>

      {videos.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-4xl mb-4">📹</div>
          <p className="text-gray-500">No videos uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
            >
              <video
                src={video.videoUrl}
                controls
                muted
                loop
                className="w-full rounded-lg shadow-md mb-3"
                preload="metadata"
              />

              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {video.title || "Untitled Video"}
              </h3>

              <p className="text-sm text-gray-600 mb-3">
                📂 Category: <span className="font-medium">{video.category}</span>
              </p>

              <button
                onClick={() => handleDelete(video._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium"
              >
                🗑️ Delete Video
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGalleryBanner;
