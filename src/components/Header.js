import React from "react";

const Header = ({ connectWallet, toggleTheme }) => {
  return (
    <header className="header-container opacity-0 animate-fade-in">
      <div className="container mx-auto px-6 py-10 flex items-center justify-between items-center">
        {/* Logo */}
        <button onClick={toggleTheme} className="theme-switcher-button">
          {"TL"}
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/dashboard" className="nav-link ">
            Dashboard
          </a>
          <a href="/staking" className="nav-link">
            Staking (coming soon)
          </a>
          <a href="/how-it-works" className="nav-link">
            How It Works
          </a>
        </nav>

        {/* Connect Wallet Button and Theme Switcher */}
        <div className="flex space-x-4">
          <button onClick={connectWallet} className="connect-wallet-button">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
