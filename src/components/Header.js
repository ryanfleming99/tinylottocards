import React, { useState } from "react";
import Link from "next/link";
import Ethers from "./Ethers";

const Header = ({ connectWallet, toggleTheme, isBackButton }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-center">
        {/* Logo */}
        <button
          onClick={
            isBackButton
              ? () => {
                  window.location.href = "/";
                }
              : toggleTheme
          }
          className="theme-switcher-button text-2xl"
        >
          TL
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 px-24">
          <Link href="/Dashboard" className="nav-link font-nunito ">
            Dashboard
          </Link>
          <Link href="/Staking" className="nav-link font-nunito ">
            Staking (coming soon)
          </Link>
          <Link href="/how-it-works" className="nav-link font-nunito ">
            How It Works
          </Link>
          <Link href="/get-crypto" className="nav-link font-nunito ">
            Get Crypto!
          </Link>
          <Link href="/open-pack" className="nav-link font-nunito ">
            Open Packs!
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl focus:outline-none flex justify-end w-full text-white"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        <div className="static">
          {" "}
          <nav
            className={`absolute top-20 right-0 left-0 bg-gray-500 rounded-md shadow-lg p-4 space-y-4 transition-transform duration-300 ${
              isMobileMenuOpen
                ? "scale-100 opacity-100 z-999"
                : "scale-0 opacity-0 z-0"
            } md:hidden`}
          >
            <Link
              href="/Dashboard"
              className="nav-link block sm:text-white text-white font-pusab"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/Staking"
              className="nav-link block sm:text-white text-white font-pusab"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Staking (coming soon)
            </Link>
            <Link
              href="/how-it-works"
              className="nav-link block sm:text-white text-white font-pusab"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/get-crypto"
              className="nav-link block sm:text-white text-white font-pusab"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buy Crypto
            </Link>
          </nav>
        </div>

        {/* Connect Wallet Button */}
        <div id="walletButton" className="hidden md:flex space-x-4">
          <Ethers />
        </div>
      </div>
    </header>
  );
};

export default Header;
