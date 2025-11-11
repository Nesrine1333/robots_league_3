
"use client"
import { useState , useEffect} from "react";
import aalt from "../../../public/robotsLeague.png"
import fl from "../../../public/challenge1.svg"
import jun from "../../../public/robotsLeague.png"

import "./challenge.css"

import Image from 'next/image';
import { JSX } from "react/jsx-runtime";

interface Challenge {
  title: string;
  description: string;
  background: string;
  spbook:string
}

const challenges: Challenge[] = [
  {
    title: "Line Follower",
    description: "In the Line Follower challenge, teams design robots capable of detecting and following a marked path with speed and accuracy. This test of precision, sensor integration, and control pushes participants to balance agility with stability as their robots race to the finish.",
    background: 'https://res.cloudinary.com/dytybjqwb/image/upload/f_auto,q_auto,w_1200/challenge1_tvrfi8.png',
    spbook:'https://shorturl.at/Wsapr'
  },
  {
    title: "Junior",
    description: "Challenge for beginners to explore basic robotics concepts.",
    background: 'https://res.cloudinary.com/dytybjqwb/image/upload/f_auto,q_auto,w_1200/challenge2_tx6u8n.png',
    spbook:'https://online.fliphtml5.com/suiveur/entn/#p=1'
  },
  {
    title: "All Terrain", 
    description: "Navigate rough terrains with your robot and show your engineering skills.",
    background: 'https://res.cloudinary.com/dytybjqwb/image/upload/f_auto,q_auto,w_1200/challenge3_qwpx3o.png',
    spbook:'https://shorturl.at/CEa0Z'
  },
];

export default function Challenges(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // SAFE preloading - using browser's native Image
  useEffect(() => {
    const preloadImages = (): void => {
      let loadedCount = 0;
      
      challenges.forEach((challenge: Challenge) => {
        const img = new window.Image();
        img.src = challenge.background;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === challenges.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === challenges.length) {
            setImagesLoaded(true);
          }
        };
      });
    };

    preloadImages();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === challenges.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, challenges.length]);

  const handleChallengeClick = (index: number): void => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        setActiveIndex(prev => 
          prev === challenges.length - 1 ? 0 : prev + 1
        );
      } else {
        setActiveIndex(prev => 
          prev === 0 ? challenges.length - 1 : prev - 1
        );
      }
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  return (
    <div
      id="challenges"
      className="w-full py-8 md:py-20 lg:py-24 flex flex-col items-center justify-center text-white"
    >
      {/* Header Section */}
      <div className="w-full max-w-6xl px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-6 md:py-8">
          <h1 className="fontheader font-color text-4xl md:text-5xl lg:text-6xl">
            Challenges
          </h1>
          <p className="paragrapgch text-lg md:text-xl lg:text-2xl text-white font-light max-w-3xl leading-relaxed">
            From precision to power, explore the exciting challenges that test
            creativity, skill, and engineering.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section 
        className="w-full"   
        style={{
          backgroundImage: `url(${challenges[activeIndex].background})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.5s ease-in-out",
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
          {/* Mobile Carousel */}
          <div className="min-sm:hidden relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex-none w-full flex flex-col items-center justify-center text-center space-y-8 px-4"
                >
                  <h1 className="fontheader font-color text-5xl md:text-6xl lg:text-7xl leading-tight shadow-white text-with-gradient-border" style={{
    color: 'white',
    paintOrder: 'stroke fill',
    WebkitTextStroke: '3px',
    WebkitTextStrokeColor: '#495092',
    textShadow: `
      0 0 2px #16182C,
      0 0 4px #16182C
    `,       animation: 'colorCycle 3s ease-in-out infinite',

  }}>
                    {challenge.title}
                  </h1>
                  <p className="fonttext text-xs sm:text-sm md:text-2xl lg:text-3xl text-white font-light leading-relaxed max-w-2xl">
                    {challenge.description}
                  </p>
                  <a 
                    href={challenge.spbook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="boxnav fonttext paragrapg text-white text-xl md:text-2xl lg:text-3xl py-4 px-12 rounded-lg mt-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    Register
                  </a>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots with Glow and Scale */}
            <div className="flex justify-center mt-8 space-x-4 m-4">
              {challenges.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChallengeClick(idx)}
                  className={`
                    w-2 h-1 rounded-full transition-all duration-300
                    ${activeIndex === idx 
                      ? "bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.8)] shadow-white" 
                      : "bg-gray-500 hover:bg-gray-300 hover:scale-110"
                    }
                  `}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            {/* */}
          </div>

          {/* Desktop / Tablet layout */}
          <div className="max-sm:hidden sm:flex flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left space-y-6 flex-1">
              <h1 className="fontheader font-color text-3xl md:text-4xl lg:text-8xl">
                {challenges[activeIndex].title}
              </h1>
              <p className="paragrapg text-base md:text-lg lg:text-xl text-white font-light leading-relaxed">
                {challenges[activeIndex].description}
              </p>
              <a 
                className="boxnav fonttext paragrapg text-white text-lg md:text-xl lg:text-2xl py-3 px-8 md:px-10 rounded-lg mt-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                href={challenges[activeIndex].spbook} 
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>

            {/* Right Challenge Buttons with Active Glow Effect */}
            <div className="flex flex-col gap-4 md:gap-6 lg:w-auto justify-center">
              {challenges.map((challenge, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChallengeClick(idx)}
                  className={`
                    button py-4 px-8 md:py-5 md:px-10 paragrapg text-white text-center text-lg md:text-xl lg:text-2xl rounded-lg min-w-[200px] md:min-w-[250px] transition-all duration-300
                    ${activeIndex === idx 
                      ? "scale-105 shadow-[0_0_25px_rgba(255,255,255,0.4)] shadow-white border border-white/30" 
                      : "hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    }
                  `}
                >
                  {challenge.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}