import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router for navigation

const Header = ({ connectWallet, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-container bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={toggleTheme}
          className="theme-switcher-button text-2xl"
        >
          TL
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link to="/staking" className="nav-link">
            Staking (coming soon)
          </Link>
          <Link to="/how-it-works" className="nav-link">
            How It Works
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        <nav
          className={`absolute top-16 right-4 bg-white rounded-md shadow-lg p-4 space-y-4 transition-transform duration-300 ${
            isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } md:hidden`}
        >
          <Link
            to="/dashboard"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/staking"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Staking (coming soon)
          </Link>
          <Link
            to="/how-it-works"
            className="nav-link block"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
        </nav>

        {/* Connect Wallet Button */}
        <div className="hidden md:flex space-x-4">
          <button onClick={connectWallet} className="connect-wallet-button">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
