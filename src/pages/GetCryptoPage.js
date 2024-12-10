import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "../styles/main.css"; // Assuming your CSS file is here
import Header from "../components/Header";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";

function GetCryptoPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // GSAP animation to make the second background (overlay) float
    gsap.to(".overlay-background", {
      y: "15px", // Vertical movement for floating effect
      yoyo: true, // Reverse the movement on each loop to make it bounce
      repeat: -1, // Repeat the bounce indefinitely
      duration: 2, // Duration for one full bounce cycle
      ease: "power1.inOut" // Smooth easing for the bounce effect
    });
    gsap.to("#floatingIntro", {
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
        height: "auto",
        width: "100%"
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative flex flex-col justify-start items-center h-auto text-center opacity-0 animate-fade-in">
        <section className="relative py-20 px-6  text-white  items-center h-auto ">
          <div className="container mx-auto text-center ">
            <button
              id="floatingIntro"
              className="text-4xl md:text-5xl font-extrabold bg-clip-text border-30 drop-shadow-lg text-white leading-tight text-center tracking-wider"
              onClick={() => setVisible(!visible)}
            >
              Your Gateway to Cryptocurrency, just click here!
            </button>

            <MoonPayBuyWidget
              className="test"
              variant="embedded"
              baseCurrencyCode="usd"
              baseCurrencyAmount="100"
              defaultCurrencyCode="eth"
              visible={visible}
            />
          </div>
        </section>
      </main>

      {/* Shop Section */}
    </div>
  );
}

export default GetCryptoPage;
