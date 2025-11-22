import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full border-b border-white/6 backdrop-blur sticky top-0 z-40"
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          Ayush Patel
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link to="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link to="/about" className="hover:text-accent">
            About
          </Link>
          <Link to="/contact" className="hover:text-accent">
            Contact
          </Link>
          <a
            href="https://github.com/Ayushkumar1224"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="toggle menu"
        >
          <svg width="24" height="24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-black/70 border-t border-white/5"
        >
          <div className="container flex flex-col gap-3 py-4">
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <a href="https://github.com/Ayushkumar1224">GitHub</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
