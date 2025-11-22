import React from "react";

export default function About() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-300">
        Honours IT graduate focused on networking, systems administration and
        cloud fundamentals. I enjoy hands-on labs, automation, and practical
        projects that solve real problems.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          <li className="text-xs bg-white/5 px-3 py-1 rounded">Linux</li>
          <li className="text-xs bg-white/5 px-3 py-1 rounded">
            Windows Admin
          </li>
          <li className="text-xs bg-white/5 px-3 py-1 rounded">
            Cisco / Networking
          </li>
          <li className="text-xs bg-white/5 px-3 py-1 rounded">Python</li>
          <li className="text-xs bg-white/5 px-3 py-1 rounded">
            Cloud (Azure/AWS)
          </li>
        </ul>
      </section>
    </main>
  );
}
