import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styles/main.css";
import { gsap } from "gsap";

function HomePage() {
  const [isMonochrome, setIsMonochrome] = useState(true);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [isMainMoved, setIsMainMoved] = useState(false);
  const [hiddenIntro, setHiddenIntro] = useState(false);
  useEffect(() => {
    gsap.to("#heroBanner", { duration: 2, x: 0, y: 100 });
    gsap.to("#background", { duration: 2, filter: "saturate(120%)" });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isMonochrome;
    setIsMonochrome(newTheme);
    document.body.className = newTheme ? "theme-monochrome" : "theme-colorful";
  };

  const getStarted = () => {
    setIsBannerHidden(true);
    setIsMainMoved(true);
    setHiddenIntro(true);
  };

  return (
    <div className={isMonochrome ? "theme-monochrome" : "theme-colorful"}>
      <main
        id="background"
        className={`mainbg bg-cover bg-no-repeat bg-center ${
          isMainMoved ? "bg-pos-x-10" : "bg-pos-x-0"
        }`}
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ryry/image/upload/v1733573802/tinylotto-background_nuhsmt.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          filter: "saturate(0%)"
        }}
      >
        <Header
          connectWallet={() =>
            alert("Connect Wallet functionality coming soon!")
          }
          toggleTheme={toggleTheme}
        />
        <section className="relative text-center w-full h-auto">
          <div
            id="heroBanner"
            className={`mx-auto relative top-20 md:top-28 left-1/2 transform -translate-x-1/2 ${
              isBannerHidden ? "unstyle-banner" : "banner"
            }`}
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl text-center text-white relative`}
            >
              <span className="block transform skew-y-3 bg-blue-200 bg-opacity-40 px-2 py-1 md:px-4 md:py-2 border-t-4 border-b-4 border-white-200">
                TINY LOTTO!
              </span>
            </h1>

            <p className="text-md md:text-lg mt-4 md:mt-8 max-w-sm md:max-w-2xl mx-auto font-pusab">
              Play, trade, and win cryptocurrency rewards with our exclusive
              NFT-powered scratch cards. The future of gaming is here!
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center space-x-2 md:space-x-4">
              <button onClick={getStarted} className="primary-button">
                Get Started
              </button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
        </section>
        <div
          className={`hiddenIntro mx-auto flex justify-center ${
            hiddenIntro ? "show" : ""
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            Sign-up coming soon!
          </h2>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 z-0 opacity-0 animate-fade-in">
        <div className="container flex flex-wrap justify-between mx-auto px-4 md:px-6 py-4 md:py-6 text-center">
          <p className="text-xs md:text-sm mt-4 md:mt-6">
            © {new Date().getFullYear()} TinyLotto. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-6">
            <a href="#terms" className="footer-link text-xs md:text-sm">
              Terms & Conditions
            </a>
            <a href="#privacy" className="footer-link text-xs md:text-sm">
              Privacy Policy
            </a>
            <a href="#support" className="footer-link text-xs md:text-sm">
              Support
            </a>
            <a href="#faq" className="footer-link text-xs md:text-sm">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
