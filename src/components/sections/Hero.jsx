import React from "react";
import { PROFILE_IMAGE } from "../../data/personal";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center">
      <img
        src={PROFILE_IMAGE}
        alt="Ayush Patel"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl object-cover"
      />

      <h1 className="mt-6 text-4xl font-bold text-white">Ayush Patel</h1>

      <p className="text-blue-200 mt-2">
        IT Specialist • Networking • Cloud • Automation
      </p>
    </section>
  );
}
