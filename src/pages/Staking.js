import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/main.css"; // Assuming your CSS file is here
import Header from "../components/Header";

function PaymentPage() {
  useEffect(() => {
    // GSAP animation to make the second background (overlay) float
    gsap.to(".overlay-background", {
      y: "15px", // Vertical movement for floating effect
      yoyo: true, // Reverse the movement on each loop to make it bounce
      repeat: -1, // Repeat the bounce indefinitely
      duration: 2, // Duration for one full bounce cycle
      ease: "power1.inOut" // Smooth easing for the bounce effect
    });
  }, []);

  return (
    <div
      className="theme-monochrome min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/ryry/image/upload/v1733790212/staking-background-one_juc7v5.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        height: "100vh",
        width: "100%"
      }}
    >
      {/* Header */}
      <Header />

      {/* Second Background (Overlay) */}
      <div
        className="overlay-background absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ryry/image/upload/v1733789207/ry_boi_clear_open_space_for_user_experience_dashboard_e83ec8e8-d9db-4461-99ef-ae6e46c61d3b_2_ju3tbl.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          filter: "blur(0px)",
          zIndex: "1", // Ensure the overlay is behind the content
          pointerEvents: "none" // Make the overlay non-interactive, so it doesn't block clicks
        }}
      ></div>

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center h-2/3 text-center opacity-0 animate-fade-in">
        <div className="h-100 py-50 z-50">
          <h1 className="text-7xl font-bold drop-shadow-md">Staking!</h1>
          <p className="text-lg mt-6 max-w-2xl mx-auto intro">
            Explore our unique collection of NFT scratch cards. Buy using
            cryptocurrency and start collecting today!
          </p>
        </div>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center space-x-2 md:space-x-4">
          <button className="primary-button">Stake</button>
          <button className="secondary-button">Redeem</button>
        </div>
      </main>

      {/* Shop Section */}
    </div>
  );
}

export default PaymentPage;
