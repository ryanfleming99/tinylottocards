import React, { useState } from "react";
import ScratchCard from "../components/ScratchCard";

const OpenCardPage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const backgroundImages = [
    "url('https://res.cloudinary.com/ryry/image/upload/v1737900512/tiny-lotto-cave_hrjmlv.png')",
    "url('https://res.cloudinary.com/ryry/image/upload/v1737900508/tiny-lotto-cave-3_hfrgwb.png')",
    "url('https://res.cloudinary.com/ryry/image/upload/v1737900512/tiny-lotto-cave-2_ccwrht.png')"
  ];

  const handleNext = () => {
    setIsFading(true); // Start fading out
    setTimeout(() => {
      setBackgroundIndex(prevIndex =>
        Math.min(prevIndex + 1, backgroundImages.length - 1)
      );
      setTimeout(() => setIsFading(false), 800); // Fade back in
    }, 800); // Duration of fade-out
  };

  const handleScratchComplete = () => {
    alert("Congratulations! You've revealed the prize!");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-white`}
      style={{
        backgroundImage: backgroundImages[backgroundIndex],
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        transition: "opacity 5s ease", // Smooth fade with a slower duration
        opacity: isFading ? 0 : 1 // Fade effect
      }}
    >
      {backgroundIndex === 0 && (
        <>
          <h1 className="text-7xl mb-2">Your Journey Begins...</h1>
          <button onClick={handleNext} className="text-2xl mb-4">
            Take the First Step
          </button>
        </>
      )}

      {backgroundIndex === 1 && (
        <>
          <h1 className="text-7xl mb-2">
            You’ve come across ancient treasures
          </h1>
          <button onClick={handleNext} className="text-2xl mb-4">
            Get closer...
          </button>
        </>
      )}

      {backgroundIndex === 2 && (
        <>
          <h1 className="text-7xl mb-2">Unlock the Treasure of Fortune</h1>
          <button onClick={handleNext} className="text-2xl mb-4">
            Reveal Your Prize
          </button>

          <ScratchCard
            width={600}
            height={300}
            image="https://res.cloudinary.com/ryry/image/upload/v1737819315/Black-Card-Unscratched_rtjcxk.jpg" // Replace with your scratch card overlay image
            prizeImage="https://res.cloudinary.com/ryry/image/upload/v1737819314/Black-Card-Scratched_c63yoi.jpg" // Replace with your prize image
            onComplete={handleScratchComplete}
          />
        </>
      )}
    </div>
  );
};

export default OpenCardPage;
