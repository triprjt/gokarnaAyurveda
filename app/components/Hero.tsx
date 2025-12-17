"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    setShowFirstText(true);
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video autoplays
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.controls = false;
      
      // Play the video
      video.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          id="background-video"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-full h-full object-cover pointer-events-none"
        >
          <source src="https://res.cloudinary.com/daydyqxdw/video/upload/sunset_mqfjnr.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/daydyqxdw/video/upload/sunset_mqfjnr.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>
      <div className="relative z-10 text-right h-40vh px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl sm:gap-1 lg:gap-8 font-bold text-white mb-6 leading-tight">
          <span
            className={`block transition-opacity duration-1000 ${showFirstText ? 'opacity-100' : 'opacity-0'
              }`}
          >
            Discover Serenity at
          </span>
          <span
            className={`inline-flex items-center gap-2 text-emerald-300 mt-2 transition-opacity duration-1000 ${showSecondText ? 'opacity-100' : 'opacity-0'
              }`}
          >
            Ayurveda Gokarna
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={() => {
                const url = 'https://maps.app.goo.gl/ZaaHKu2h4mpLufxG8';
                window.open(url, '_blank');
              }}
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 cursor-pointer"
            >
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </span>
        </h1>
        {/* <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
          Experience authentic Ayurvedic healing in the tranquil beauty of Gokarna
        </p> */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#book"
            className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Stay
          </a>
          <a
            href="#services"
            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
          >
            Explore Services
          </a>
        </div> */}
      </div>
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScrollDown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 animate-bounce"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
