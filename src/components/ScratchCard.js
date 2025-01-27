import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const ScratchCard = ({
  width,
  height,
  background,
  image,
  prizeImage,
  onComplete
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Load and draw the overlay image
    const overlayImage = new Image();
    overlayImage.crossOrigin = "anonymous"; // Allow cross-origin access
    overlayImage.src = image;
    overlayImage.onload = () => {
      ctx.drawImage(overlayImage, 0, 0, width, height);
    };

    const scratch = (x, y) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const checkCompletion = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const totalPixels = imageData.data.length / 4;
      let clearedPixels = 0;

      // Count transparent pixels
      for (let i = 3; i < imageData.data.length; i += 4) {
        if (imageData.data[i] === 0) {
          clearedPixels++;
        }
      }

      const clearedPercentage = (clearedPixels / totalPixels) * 100;

      // Trigger onComplete when more than 70% of the card is cleared
      if (clearedPercentage > 70 && !isScratched) {
        setIsScratched(true);
        if (onComplete) {
          onComplete();
        }
      }
    };

    const handleInteraction = e => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

      scratch(x, y);
      checkCompletion();
    };

    canvas.addEventListener("mousemove", handleInteraction);
    canvas.addEventListener("touchmove", handleInteraction);

    return () => {
      canvas.removeEventListener("mousemove", handleInteraction);
      canvas.removeEventListener("touchmove", handleInteraction);
    };
  }, [image, width, height, isScratched, onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        perspective: "1000px"
      }}
    >
      {/* Prize Image (Background) */}
      <img
        src={prizeImage}
        alt="Prize"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none" // Ensure canvas gets the mouse events
        }}
      />

      {/* Scratchable Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2
        }}
      />
    </div>
  );
};

export default ScratchCard;
