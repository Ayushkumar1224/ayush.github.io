import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/6">
      <div className="container py-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Ayush Patel — Built with React & Vite
      </div>
    </footer>
  );
}
