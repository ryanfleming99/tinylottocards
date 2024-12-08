import React from "react";

const Footer = () => {
  return (
    <footer className="absolute inset-0 z-0 bg-gray-800 text-white opacity-80">
      <div className="container mx-auto px-6 text-center">
        {/* Links */}
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

        {/* Social Icons */}
        <div className="">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-discord text-2xl"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6">
          © {new Date().getFullYear()} TinyLotto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
