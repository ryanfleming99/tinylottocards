import React, { useState, useRef } from "react";
import ScratchCard from "../components/ScratchCard";
import confetti from "canvas-confetti";

const OpenCardPage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showPrizeText, setShowPrizeText] = useState(false);
  const [scratchCardVisible, setScratchCardVisible] = useState(false);
  const containerRef = useRef(null);

  const backgroundImages = [
    "url('https://res.cloudinary.com/ryry/image/upload/v1737900512/tiny-lotto-cave_hrjmlv.png')",
    "url('https://res.cloudinary.com/ryry/image/upload/v1737900512/tiny-lotto-cave-2_ccwrht.png')"
  ];

  const handleNext = () => {
    setIsFading(true);
    setShowText(false);

    setTimeout(() => {
      setBackgroundIndex(prevIndex =>
        Math.min(prevIndex + 1, backgroundImages.length - 1)
      );

      setTimeout(() => {
        setIsFading(false);
        setShowText(true);
      }, 300); // Fade-in duration
    }, 300); // Fade-out duration
  };

  const handleScratchComplete = () => {
    const duration = 2 * 1000; // 2 seconds
    const end = Date.now() + duration;

    const colors = ["#FFD700", "#FF4500", "#00FF7F", "#1E90FF"];

    const frame = () => {
      confetti({
        particleCount: 5,
        spread: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame(); // Start the confetti animation
    setScratchCardVisible(false); // Hide scratch card
    setShowPrizeText(true); // Show prize text
    setScratchCardVisible(true);
  };

  const handleRevealClick = () => {
    setScratchCardVisible(true);
  };

  const fetchPrizes = () => {
    // Simulate fetching prize data
    setTimeout(() => {
      // Redirect to the collect-prize page
      window.location.href = "/collect-prize";
    }, 1000); // Simulate delay (e.g., API response time)
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-800 ease-in-out"
        style={{
          backgroundImage: backgroundImages[backgroundIndex],
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: isFading ? 0 : 1
        }}
      />

      {/* Content Layer */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white transition-opacity duration-300 ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        {backgroundIndex === 0 && (
          <>
            <h1 className="text-7xl mb-6">Your Journey Begins...</h1>
            <button
              onClick={handleNext}
              className="animated-button gold-button px-6 py-3 rounded-md text-xl font-bold"
            >
              Get Started
            </button>
          </>
        )}

        {backgroundIndex === 1 && (
          <>
            {!scratchCardVisible && !showPrizeText && (
              <>
                <h1 className="text-7xl mb-6">
                  Unlock the Treasure of Fortune
                </h1>
                <button
                  onClick={handleRevealClick}
                  className="animated-button text-xl px-6 py-3 rounded-md"
                >
                  Reveal Your Prize
                </button>
              </>
            )}
            {scratchCardVisible && (
              <>
                <h2 className="mb-4 text-4xl">Scratch below!</h2>
                <ScratchCard
                  width={564}
                  height={346}
                  image="https://res.cloudinary.com/ryry/image/upload/v1737985793/Black-Card-UnScratched_sb4caa.webp"
                  prizeImage="https://res.cloudinary.com/ryry/image/upload/v1737985792/Black-Card-Scratched_qzbafk.webp"
                  onComplete={handleScratchComplete}
                />
              </>
            )}
          </>
        )}
      </div>

      {/* Prize Text Layer */}
      {showPrizeText && (
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center bg-black bg-opacity-80">
          <div className="p-6 rounded-lg">
            <h1 className="mb-4 text-6xl text-yellow-500 font-bold">
              YOU'VE WON 0.1 Eth!
            </h1>
            <p className="text-4xl text-white">Congratulations!</p>
            <button
              onClick={fetchPrizes}
              className="animated-button text-xl px-6 py-3 rounded-md"
            >
              Claim your prizes!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenCardPage;
