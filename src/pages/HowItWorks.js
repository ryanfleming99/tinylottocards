import React, { useState } from "react";

import Header from "../components/Header";
import "../styles/main.css";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";

function HowItWorks() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="theme-monochrome">
      {/* Main Background */}
      <main
        className="mainbg bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/ryry/image/upload/v1733573802/tinylotto-background_nuhsmt.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%"
        }}
      >
        {/* Header */}
        <Header
          connectWallet={() =>
            alert("Connect Wallet functionality coming soon!")
          }
        />

        {/* Hero Section */}
        <section className="relative text-center py-20 px-4 md:py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">
            <span className="block  px-4 py-2 border-t-4 border-b-4 border-white">
              How It Works
            </span>
          </h1>
          <p className="text-md md:text-lg mt-6 md:mt-8 max-w-lg md:max-w-3xl mx-auto font-pusab text-white">
            Discover the revolutionary TinyLotto ecosystem! Learn how to buy,
            trade, and win with our unique NFT-powered cryptocurrency scratch
            cards....
          </p>
        </section>

        {/* Steps Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b text-white bg-black bg-opacity-50">
          <div className="container mx-auto">
            <h2 className="text-4xl text-sky-100 font-bold text-center mb-12">
              Step-by-Step Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-bright-yellow text-charcoal text-2xl font-bold">
                  1
                </div>
                <h3 className="text-4xl text-sky-100 font-bold mb-4">
                  Connect Your Wallet
                </h3>
                <p className="text-md text-sky-100">
                  Use your MetaMask wallet to securely connect to TinyLotto and
                  access your account.
                </p>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-rich-blue text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-4xl text-sky-100 font-bold mb-4">
                  Purchase Scratch Cards
                </h3>
                <p className="text-md text-sky-100">
                  Choose from a variety of scratch cards loaded with prizes,
                  including crypto, NFTs, and more.
                </p>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center bg-white justify-center rounded-full text-charcoal text-2xl font-bold">
                  3
                </div>
                <h3 className="text-4xl font-bold mb-4 text-sky-100">
                  Win Big!
                </h3>
                <p className="text-md text-sky-100">
                  Scratch your cards and reveal prizes instantly! Trade or hold
                  your NFT cards for even more rewards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-6  text-white bg-black bg-opacity-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why TinyLotto?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">
                  Secure & Transparent
                </h3>
                <p className="text-lg text-white font-bold">
                  All transactions are powered by blockchain technology,
                  ensuring fairness and transparency.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Exciting Prizes</h3>
                <p className="text-lg text-white font-bold">
                  From cryptocurrencies to NFTs, every card holds the potential
                  for big wins.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-4">Tradeable Assets</h3>
                <p className="text-lg text-white font-bold">
                  Your NFT scratch cards can be traded, collected, or held for
                  staking rewards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 px-6  text-white bg-black bg-opacity-50">
          <div className="container mx-auto text-center">
            <button className="text-7xl" onClick={() => setVisible(!visible)}>
              Need crypto? Click here
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

      {/* Footer */}
      <footer className=" text-soft-white py-8">
        <div className="container mx-auto px-6 text-center">
          <button
            className="bg-bright-yellow text-charcoal px-6 py-3 rounded-lg shadow-md font-bold hover:bg-rich-blue hover:text-white transform transition"
            onClick={() => alert("Coming soon!")}
          >
            Join Now
          </button>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#support" className="hover:text-white transition">
              Support
            </a>
            <a href="#faq" className="hover:text-white transition">
              FAQ
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} TinyLotto. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HowItWorks;
