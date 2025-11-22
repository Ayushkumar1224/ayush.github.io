import React from "react";

export default function About() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-gray-300">
        Honours IT graduate with hands-on experience in networking, systems
        administration, and cloud fundamentals. Comfortable with Linux, Windows,
        Cisco devices, scripting in Python and PowerShell, and small home-lab
        automation.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Experience & Education</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-300">
          <li>Hands-on networking labs (Packet Tracer / GNS3)</li>
          <li>System administration: Windows & Linux</li>
          <li>Microsoft Intune & device management basics</li>
        </ul>
      </section>
    </main>
  );
}
