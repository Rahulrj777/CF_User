import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../text.css";
import axios from "axios";
import { useState, useEffect } from "react";

import banner from "../../images/course/banner/pattern.jpg";
import aravind from "../../images/mentors/Aravind.jpg";
import shiv from "../../images/mentors/shiv vfx.jpg";

import aravindOne from "../../images/poster/aravind/1.png";
import aravindTwo from "../../images/poster/aravind/2.png";
import aravindThree from "../../images/poster/aravind/3.png";
import aravindFour from "../../images/poster/aravind/4.png";
import aravindFive from "../../images/poster/aravind/5.png";
import aravindSix from "../../images/poster/aravind/6.png";
import aravindSeven from "../../images/poster/aravind/7.png";
import aravindNine from "../../images/poster/aravind/9.png";
import aravindTen from "../../images/poster/aravind/10.png";
import aravindTwele from "../../images/poster/aravind/11.png";
import aravindElven from "../../images/poster/aravind/12.png";
import aravindThrtieen from "../../images/poster/aravind/13.png";
import aravindFourteen from "../../images/poster/aravind/14.png";

import shivOne from "../../images/poster/shiv/1.png";
import shivTwo from "../../images/poster/shiv/2.png";
import shivThree from "../../images/poster/shiv/3.png";
import shivFour from "../../images/poster/shiv/4.png";
import shivFive from "../../images/poster/shiv/5.png";
import shivSix from "../../images/poster/shiv/6.png";

//icons
import { RiWhatsappLine } from "react-icons/ri";


const CFA = () => {
      const [banners, setBanners] = useState([]);
    
  function topPage() {
    window.scroll(0, 0);
  }

    useEffect(() => {
    axios
      .get("http://localhost:5000/cfabanner")
      .then((res) => setBanners(res.data))
      .catch((err) => console.log("Error fetching banners:", err));
  }, []);

  const setting = {
    dots: false,
    infinite: banners.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: banners.length > 1,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
  };

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <>
      <div className="font-kumbh overflow-hidden ">
        <Helmet>
          <title>
            Virtual Production Courses | Virtual Production Institute
          </title>
          <meta
            name="description"
            content="Explore our Virtual Production courses. Master Unreal Engine, blend real and digital worlds, and gain hands-on experience with industry experts for a stellar career."
          />
          <meta
            name="keywords"
            content="Learn Virtual production courses | Best Virtual production courses | Virtual production training | Virtual productiontraining institute | Virtual production institute | Best Virtual production institute | Virtual production courses | Virtual production courses online | best Virtual production courses | learn diploma Virtual production courses in India | want to study Virtual production courses | Virtual production course fees | Jobs in Virtual production| career in Virtual production | Virtual production institute near me | Virtual production training near me | best institute to learn Virtual production | best institute to study Virtual production | best institute for Virtual production certification courses"
          />
          <meta name="author" content="Cinema Factory Academy" />
          <meta charSet="utf-8" />
          {/* Add other meta tags here if needed */}
        </Helmet>

        <div className="  ">
          <img
            src={banner}
            className=" blur-[2px] w-full fixed top-0 object-cover h-screen -z-30"
            alt="mentor"
            title="Advance Virtual Production "
            loading="lazy"
            fetchpriority="auto"
          />
        </div>

        <section>
          <div className="font-playfair relative w-full">
            <div className="slider-container">
              <Slider {...setting}>
                {banners.map((banner) => (
                  <div key={banner.id || banner.fileName}>
                    <img
                      src={banner.url}
                      className="w-full object-cover"
                      alt="CF_banner"
                      title="Virtual Production And VFX Courses In India"
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* -------------- Syllabus ----------------- */}

        <section className="border-t-4 border-orange-500 pt-16 pb-10 md:pt-20 md:pb-20 bg-gray-950 -mt-6">
          <div className="flex flex-col gap-y-20">
            {/* ------------------------------------------------------------------------------- */}

            <div className="w-full px-4 md:w-[85%] mx-auto">
              <div className="flex flex-col gap-y-2 justify-center items-center mb-6 md:mb-16">
                <h1 className=" font-bold text-center text-[24px] md:text-[34px] text-white  uppercase">
                  {" "}
                  Advanced VIRTUAL PRODUCTION
                </h1>
                <h3 className="font-semibold text-[16px] md:text-[28px] text-[#ff0000]  font-[roboto] uppercase tracking-[1px] text-center ">
                  1 Year Diploma{" "}
                </h3>
                <h3 className="text-center text-[14px] md:text-[16px] text-gray-200 font-semibold uppercase">
                  (Includes - Overseas Virtual Production Stage Visit)
                </h3>
              </div>

              <div className="w-full flex justify-center ">
                <div className="w-full">
                  <div>
                    <h2 className="text-[18px] md:text-[26px] font-semibold  text-white text-center mb-2 md:mb-4">
                      Course Overview
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-y-10 gap-x-2 md:gap-x-6 ">
                    <div className="flex flex-col gap-y-3">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        3D Modeling and Asset Preparation{" "}
                      </h3>

                      <ul className=" text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students start by learning to build the foundational
                          assets needed for virtual production, including
                        </li>
                        <li>
                          Hard surface modeling (props, environments, set
                          pieces) using Maya/Blender{" "}
                        </li>
                        <li>
                          Environment modeling focused on modular, game-ready
                          assets{" "}
                        </li>
                        <li>
                          Clean topology practices for real-time performance
                          (including LODS and UV unwrapping){" "}
                        </li>
                        <li>
                          Best practices for organizing large scenes to be
                          optimized for Unreal Engine workflows{" "}
                        </li>
                        <li>
                          Export pipeline: Preparing models, materials, and
                          assets for smooth transfer into UE{" "}
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Texturing and Material Workflow
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Once modeling fundamentals are in place, students move
                          into texturing using:
                        </li>
                        <li>
                          Adobe Substance Painter: Creating PBR (Physically
                          Based Rendering) materials and baking high-to-low
                          details
                        </li>
                        <li>
                          Smart material systems, procedural masks, and layered
                          material workflows
                        </li>
                        <li>
                          Optimizing texture exports specifically for real-time
                          rendering constraints
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Cinematography Sessions:{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students study the cinematic aspects of VP and how to
                          translate real-worl cinematography into virtual
                          scenes:{" "}
                        </li>
                        <li>
                          Understanding real-world camera physics - focal
                          length, aperture, sensor formats, depth of field
                        </li>
                        <li>
                          Replicating real lenses and camera setups inside
                          Unreal Engine for cinematic fidelity Learning virtual
                          camera rigs: crane, dolly, handheld, multi-camera
                          setups
                        </li>
                        <li>
                          Exploring multi-cam setups and advanced camera
                          language for narrative and commercial work
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Camera Tracking and Match Moving{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          {" "}
                          Students explore how to align real-world camera
                          movement with virtual scenes:{" "}
                        </li>
                        <li>
                          {" "}
                          3DEqualizer and PFTrack for solving nodal and
                          free-camera motion{" "}
                        </li>
                        <li>
                          {" "}
                          Matching live-action camera movement with Unreal
                          camera rigs{" "}
                        </li>
                        <li>
                          {" "}
                          Using geometry match move to ensure realistic
                          integration of virtual elements in post{" "}
                        </li>
                        <li>
                          Exporting and integrating tracked data into Unreal
                          Engine
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Previz, Green Screen, and Indie Virtual Production{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          This section introduces both large-scale and indie VP
                          workflows:
                        </li>
                        <li>
                          Shot blocking and camera staging for previs inside
                          Unreal Engine Green screen lighting, setup, and keying
                          techniques
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Indie Virtual Production with JetSet Pro:{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Understanding JetSet Pro as an affordable, portable
                          solution for small studios:
                        </li>
                        <li>
                          Setting up JetSet Pro for in-camera VFX without
                          expensive LED walls
                        </li>
                        <li>
                          Integrating JetSet Pro’s real-time camera tracking
                          into Unreal
                        </li>
                        <li>
                          Using JetSet Pro for hybrid setups (green screen +
                          virtual environments)
                        </li>
                        <li>
                          Conducting practical exercises where students design
                          and execute small-scale VP shots using JetSet Pro
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Postviz and Motion Capture Integration{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students learn how to combine live-action & CG
                          elements:
                        </li>
                        <li>
                          Setting up Move Al for motion capture without suits or
                          sensors
                        </li>
                        <li>
                          Capturing mocap data, cleaning it, and retargeting
                          onto digital characters
                        </li>
                        <li>
                          Integrating live-action footage with CG animation for
                          postvisualization
                        </li>
                        <li>
                          Editing timelines and sequencing in Unreal Engine to
                          create fast previz and postviz renders
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Intermediate Unreal Engine Techniques{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          {" "}
                          Once foundational skills are built, students advance
                          to Unreal Engine mastery:
                        </li>
                        <li>
                          {" "}
                          Blueprints for camera control, interactivity, and live
                          triggers
                        </li>
                        <li>
                          Advanced Sequencer workflows for multi-layered shot
                          control{" "}
                        </li>
                        <li>
                          Niagara particle system basics for real-time visual
                          effects (e.g., fog, sparks, rain, dust){" "}
                        </li>
                        <li>
                          {" "}
                          Scene optimization techniques for maximizing
                          performance in complex environments
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Al-Driven Environments and Terrain Creation{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students explore cutting-edge Al tools and procedural
                          generation:{" "}
                        </li>
                        <li>
                          {" "}
                          Al-based landscape, prop, and lighting generation
                          using text/image prompts
                        </li>
                        <li>
                          Ethical guidelines, creative control, and limits of Al
                          in production pipelines{" "}
                        </li>
                        <li>
                          {" "}
                          World Creator plugin: Procedural terrain design,
                          height map generation, and exporting to Unreal
                        </li>
                        <li>
                          {" "}
                          Combining Al-generated elements with hand-modeled
                          assets for photorealistic, scalable environments
                        </li>
                        <li>
                          {" "}
                          Set extension workflows, 2D/3D matte painting, and
                          seamless blending into LED wall setups
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Live Compositing and On-Set Execution{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students apply everything in real-time production
                          scenarios:
                        </li>
                        <li>Multi-screen setup management using Display</li>
                        <li>
                          Live compositing workflows: Chroma keying using Black
                          Magic Ultimatte, LED walls
                        </li>
                        <li>
                          Real-time color pipelines, LUT application, and
                          exposure matching
                        </li>
                        <li>
                          On-the-fly creative adjustments and collaborative
                          decision-making during live shoots
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        Virtual Production Tracking Systems{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students are exposed to a range of professional camera
                          tracking systems:
                        </li>
                        <li>
                          Introduction to Portal Tracker, HTC Vive Mars, nCam,
                          Stype, Mo-Sys, Zeiss CinCraft tracking systems
                        </li>
                        <li>
                          Understanding timecode, genlock, lens encoder
                          integration
                        </li>
                        <li>
                          Hands-on calibration exercises syncing real-world
                          camera data to Unreal rigs
                        </li>
                        <li>
                          Comparing the strengths, costs, and application scales
                          of each tracking system (indievs. studio)
                        </li>
                        <li>
                          Hands-on experience with Portal Tracker & HTC Vive
                          Mars with detailed practical case studies.
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Techviz, LIDAR, and Virtual Scouting{" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          Students explore advanced prep techniques for VP:
                        </li>
                        <li>
                          Capturing photogrammetry and LIDAR scans to create
                          digital twins
                        </li>
                        <li>
                          Technical visualization (techviz) — camera arcs, crane
                          measurements, rig setup planning
                        </li>
                        <li>
                          Virtual location scouting and director walkthroughs
                          inside Unreal
                        </li>
                        <li>
                          Preparing both large and indie sets for efficient VP
                          shooting
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <h3 className="font-semibold text-[16px] md:text-[20px] text-gray-200">
                        {" "}
                        Student Project: Complete Virtual Production Short Film
                        (3 Days of LED Wall Access){" "}
                      </h3>

                      <ul className="text-[13px] md:text-[14px] font-[roboto] flex flex-col gap-y-1 text-gray-400">
                        <li>
                          The final section synthesizes all learned skills into
                          a real-world production challenge:
                        </li>
                        <li>
                          Final planning, script breakdown, and detailed
                          storyboarding
                        </li>
                        <li>
                          Executing a full VP shoot using LED wall, green
                          screen, indie setups (JetSet Pro), or a combination
                        </li>
                        <li>
                          Incorporating mocap, Al environments, camera tracking,
                          and set extensions
                        </li>
                        <li>
                          Final grading, editing, and delivery of a polished
                          short film
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mt-5 md:mt-10 flex justify-center items-center font-[poppins]">
                <a
                  href="https://api.whatsapp.com/send?phone=9884683888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="uppercase  group relative inline-flex h-8 md:h-10 text-[14px] items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500">
                    Request Detailed Syllabus
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------ Mentors ------------------ */}

        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-white">
          <div className="w-full px-4 md:w-[80%] mx-auto font-kumbh">
            <div className="flex items-center justify-center mb-6 md:mb-16">
              <h3 className="font-bold text-black text-[20px] md:text-[40px] text-center uppercase tracking-[2px]">
                FilmMakers As Mentors
              </h3>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-16 gap-x-28 ">
                <div className="flex flex-col  items-center justify-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={aravind}
                      className="w-[80%] rounded-md  object-cover"
                      alt="mentor"
                      title="Advance Virtual Production courses"
                      loading="lazy"
                      fetchpriority="auto"
                    />
                  </div>

                  <div className="flex flex-col gap-y-5 items-center justify-center mt-5">
                    <div className=" mx-auto ">
                      <p className="text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]">
                        Aravind Naga, an award-winning VFX and Post Production
                        Supervisor, excels in film, advertising, and digital
                        content creation, passionately mentoring future VFX
                        professionals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  items-center justify-center">
                  <div className="flex justify-center items-center">
                    <img
                      src={shiv}
                      className=" w-[80%] rounded-md object-cover"
                      alt="mentor"
                      title="Advance Virtual Production courses"
                      loading="lazy"
                      fetchpriority="auto"
                    />
                  </div>

                  <div className="flex flex-col gap-y-5 items-center justify-center mt-5">
                    <div className=" ">
                      <p className="text-[13px] md:text-[14px] text-gray-900 text-center font-[roboto]">
                        Shiv Shankar stands out as a talented Senior VFX &
                        Unreal Engine artist, specializing in Virtual Production
                        with abundant experience in the visual effects industry.
                        His proficiency in ICVFX has resulted in impressive
                        outcomes across a range of notable projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------- Our Mentors have Worked In ------------------------ */}

        <section className="bg-black overflow-hidden flex justify-center items-center pt-14 pb-10 ">
          <div className="w-full mx-auto">
            <div className="flex justify-center items-center mb-12">
              <h3 className="font-bold uppercase text-[20px] md:text-[28px] text-white">
                Mentor's Filmography
              </h3>
            </div>

            <div>
              <div className="slider-container">
                <Slider {...settings} className="">
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindOne}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTwo}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindThree}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFour}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFive}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindSix}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindSeven}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindNine}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTen}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindElven}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindTwele}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindThrtieen}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={aravindFourteen}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>

                  <div className="px-2">
                    <div>
                      <img
                        src={shivOne}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivTwo}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivThree}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivFour}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivFive}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                  <div className="px-2">
                    <div>
                      <img
                        src={shivSix}
                        className="w-full object-cover"
                        alt="mentor works"
                        title="Advance Virtual Production "
                        loading="lazy"
                        fetchpriority="auto"
                      />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------- how to appply  -------------------*/}
        <section className="pt-10 md:pt-20 pb-10 md:pb-20 bg-gray-950">
          <div className="px-4 w-full md:w-[80%] mx-auto">
            <div>
              <h3 className="text-white font-bold text-[20px] md:text-[30px] mb-3 md:mb-3 uppercase">
                How to apply?
              </h3>

              <div className="flex flex-col gap-y-2 text-[14px] text-gray-200">
                <p className="font-[roboto] text-[13px] md:text-[14px] font-semibold mb-2 md:mb-4">
                  To join Cinema Factory Academy:
                </p>
                <ul className="font-[roboto] text-[12px] md:text-[14px] list-disc space-y-1 md:space-y-3 ml-4 md:ml-4 ">
                  <li>Fill out our enquiry form or call us.</li>
                  <li>
                    Speak with our student counselor to finalize your chosen
                    craft.
                  </li>
                  <li>
                    Complete the application form and attend an interview.
                  </li>
                  <li>Upon acceptance, you'll receive an acceptance letter.</li>
                </ul>
              </div>

              <div className="flex items-center gap-x-4 md:gap-x-10 mt-4 md:mt-10 font-[poppins] text-[12px] md:text-[14px]">
                <div>
                  <Link to="/apply" onClick={topPage}>
                    <button className="uppercase  group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-md bg-[#ff0000] border border-white px-6 md:px-10 font-medium text-neutral-200 duration-500">
                      <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
                        Apply now
                      </div>
                      <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
                        Apply Now
                      </div>
                    </button>
                  </Link>
                </div>

                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=9884683888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <button className="bg-transparent border border-white text-white shadow-md drop-shadow-md h-10 md:h-12 pl-3 rounded-md flex items-center gap-x-3 font-[poppins] text-[12px] md:text-[14px] hover:scale-105 duration-500">
                      Request Syllabus
                      <div className="px-3 bg-green-600 rounded-r-md">
                        <RiWhatsappLine className="text-white h-10 md:h-12 text-[22px] font-bold" />
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CFA;
