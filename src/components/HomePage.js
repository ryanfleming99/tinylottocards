import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/main.css"; // Adjust path to reflect new location
// Assuming you will use a separate CSS file for simplicity

function HomePage() {
  const [isMonochrome, setIsMonochrome] = useState(true);

  const connectWallet = () => {
    alert("Connect Wallet functionality coming soon!");
  };

  const zoom = cardName => {
    alert(`Zooming in on ${cardName}`);
  };

  const btnClick = () => {
    alert("Navigating...");
  };

  const toggleTheme = () => {
    setIsMonochrome(!isMonochrome);
    document.body.className = isMonochrome
      ? "theme-colorful"
      : "theme-monochrome";
  };

  return (
    <div className={isMonochrome ? "theme-monochrome" : "theme-colorful"}>
      {/* Header */}

      {/* Hero Section */}
      <main
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ryry/image/upload/v1733573802/tinylotto-background_nuhsmt.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%"
        }}
      >
        <Header connectWallet={connectWallet} toggleTheme={toggleTheme} />
        <section className="relative  text-center w-screen h-auto opacity-0 animate-fade-in">
          <div className="mx-auto relative top-28 left-1/2 transform -translate-x-1/2">
            <h1 class="text-8xl text-center text-white relative">
              <span class="block transform skew-y-3 bg-blue-200 bg-opacity-40 px-4 py-2 border-t-4 border-b-4 border-white-200">
                TINY LOTTO!
              </span>
            </h1>

            <p className="text-lg mt-6 max-w-2xl mx-auto font-pusab intro">
              Play, trade, and win cryptocurrency rewards with our exclusive
              NFT-powered scratch cards. The future of gaming is here!
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button onClick={btnClick} className="primary-button">
                Get Started
              </button>
              <button className="secondary-button">Learn More</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="absolute bottom-0 left-0 right-0 z-0 opacity-0 animate-fade-in">
        <div className="container flex justify-between mx-auto px-6 py-6 text-center">
          {/* Links */}
          {/* Copyright */}
          <p className="mt-6 text-sm">
            © {new Date().getFullYear()} TinyLotto. All rights reserved.
          </p>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="#terms" className="footer-link">
              Terms & Conditions
            </a>
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="#support" className="footer-link">
              Support
            </a>
            <a href="#faq" className="footer-link">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
