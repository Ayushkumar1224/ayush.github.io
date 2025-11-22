import React from "react";

export default function Contact() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-300">
        Email:{" "}
        <a href="mailto:ayush23404@gmail.com" className="text-accent">
          ayush23404@gmail.com
        </a>
      </p>
      <p className="mt-2 text-gray-300">
        GitHub:{" "}
        <a
          href="https://github.com/Ayushkumar1224"
          target="_blank"
          rel="noreferrer"
          className="text-accent"
        >
          github.com/Ayushkumar1224
        </a>
      </p>
    </main>
  );
}
