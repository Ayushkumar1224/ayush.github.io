import { motion } from "framer-motion";
import { PROFILE_IMAGE } from "../../data/personal";

export default function About() {
  const skills = [
    "Networking",
    "TCP/IP",
    "Routing",
    "Switching",
    "Linux",
    "Windows Admin",
    "Active Directory",
    "Azure",
    "AWS Basics",
    "Docker",
    "Python",
    "Automation",
    "Security",
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-16">
      {/* Image */}
      <motion.img
        src={PROFILE_IMAGE}
        className="w-56 h-56 rounded-2xl object-cover shadow-xl border border-blue-500"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Text */}
      <div>
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-blue-200 leading-relaxed max-w-xl">
          I'm Ayush Patel, an IT specialist with hands-on experience in
          networking, system administration, cloud environments and security. I
          enjoy solving real-world problems with automation, scripting and smart
          architecture.
        </p>

        {/* Skills Grid */}
        <h3 className="text-2xl font-semibold text-white mt-8">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 bg-blue-900/40 border border-blue-700 rounded-xl text-blue-200"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
