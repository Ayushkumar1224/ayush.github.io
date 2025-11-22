import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const icons = {
  home: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  about: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  projects: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
  contact: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 8V7a2 2 0 0 0-2-2h-6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  ),
};

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-lg card flex items-center justify-center">
          {/* small logo/profile icon */}
          <img
            src="/assets/images/profile/profile.jpg"
            alt="Ayush"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        <nav className="flex flex-col items-center gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `p-2 ${isActive ? "text-accent" : "text-gray-300"}`
            }
            aria-label="Home"
          >
            {icons.home}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `p-2 ${isActive ? "text-accent" : "text-gray-300"}`
            }
            aria-label="Projects"
          >
            {icons.projects}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `p-2 ${isActive ? "text-accent" : "text-gray-300"}`
            }
            aria-label="About"
          >
            {icons.about}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `p-2 ${isActive ? "text-accent" : "text-gray-300"}`
            }
            aria-label="Contact"
          >
            {icons.contact}
          </NavLink>
        </nav>

        <div className="mt-auto pb-2 space-y-2">
          <a
            href="https://github.com/Ayushkumar1224"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-gray-300 text-xs"
          >
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
}
