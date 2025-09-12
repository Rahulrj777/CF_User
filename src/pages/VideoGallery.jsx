// pages/VideoGallery.jsx
import { Link } from "react-router-dom";
import vid1 from "../images/Video/🎬 Learn Screenplay & Direction from Master Filmmaker P.S. VinothrajInternationally Acclaimed Di.mp4";
import vid2 from "../images/Video/🎬 Cinema Factory Academy – Special Session✨ Showcasing Flex Bot 2.0 – Motion Control Robotic Ar.mp4";
import vid3 from "../images/Video/Cyber Gaffing in India for Virtual Production🎬 Cyber Gaffer – Virtual Production Module at Stag.mp4";
import vid4 from "../images/Video/“Vehicle Rigging – A Unique Training at Cinema Factory Academy”At CFA, students learn vehicle ri.mp4";
import vid5 from "../images/Video/Spot frame composition and shot design. with Flexbot 2.0 robotic arm and red komodo 🎥🔥Shot des.mp4";

const categories = [
  { name: "Guest Lecture", slug: "guest-lecture", thumb: vid1 },
  { name: "Highlights", slug: "highlights", thumb: vid3 },
  { name: "New Launches", slug: "new-launches", thumb: vid2 },
  { name: "Review", slug: "review", thumb: vid5 },
  { name: "Student Works", slug: "student-works", thumb: vid4 },
];

const VideoGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🎬 Video Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link
            to={`/videos/${cat.slug}`}
            key={cat.slug}
            className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <div className="relative">
              <video
                src={cat.thumb}
                className="w-full h-80 object-cover"
                muted
                autoPlay
                loop
                playsInline
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">
                  {cat.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
