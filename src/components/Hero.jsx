import React from "react";

export default function Hero() {
  return (
    <div className="card max-w-md mx-auto p-6 flex items-center gap-4">
      <img
        src="/assets/images/profile/profile.jpg"
        alt="Ayush Patel"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">Ayush Patel</h3>
        <p className="text-sm text-gray-300">
          System Admin • Cloud • Networking
        </p>
        <p className="text-xs mt-2 text-muted">
          Honours graduate — hands-on labs and infrastructure tooling.
        </p>
      </div>
    </div>
  );
}
