import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IoT Blocker Web UI",
      description:
        "A full system to block IoT device websites using Python, Flask, networking and custom filtering logic.",
      tech: ["Python", "Flask", "Networking"],
      link: "",
      github: "https://github.com/Ayushkumar1224",
    },
    {
      title: "Router MAC Filter Script",
      description:
        "Script that allows filtering website access based on MAC address routing.",
      tech: ["Linux", "Shell", "Networking"],
      link: "",
      github: "https://github.com/Ayushkumar1224",
    },
    {
      title: "Portfolio Website",
      description:
        "Animated responsive React portfolio website using Tailwind + Vite.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "",
      github: "https://github.com/Ayushkumar1224",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-blue-900/30 border border-blue-700 rounded-2xl shadow-lg hover:shadow-blue-700/20 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-blue-100">
              {proj.title}
            </h3>
            <p className="text-blue-300 mt-2">{proj.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-800/50 border border-blue-700 text-blue-200 rounded-lg text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-6">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  className="text-blue-300 hover:text-white transition"
                >
                  <Github size={22} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
