import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute inset-0 z-0 bg-gray-800 text-white opacity-80">
      <div className="container mx-auto px-6 text-center">
        {/* Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link href="/support" className="footer-link">
            Support
          </Link>
          <Link href="/faq" className="footer-link">
            FAQ
          </Link>
        </div>

        {/* Social Icons */}
        <div className="">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </Link>
          <Link
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-discord text-2xl"></i>
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github text-2xl"></i>
          </Link>
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
