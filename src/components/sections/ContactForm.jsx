import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full max-w-xl">
      <h2 className="text-4xl font-bold text-white mb-6">Contact</h2>

      <p className="text-blue-200 mb-8">
        Feel free to reach out for opportunities or collaboration!
      </p>

      {/* Contact Buttons */}
      <div className="flex flex-col gap-4">
        <a
          href="mailto:ayushpatel@gmail.com"
          className="flex items-center gap-3 bg-blue-700 px-6 py-3 rounded-xl text-white hover:bg-blue-600 transition"
        >
          <Mail size={22} />
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/ayush-patell/"
          target="_blank"
          className="flex items-center gap-3 bg-blue-900 border border-blue-600 px-6 py-3 rounded-xl text-blue-200 hover:text-white transition"
        >
          <Linkedin size={22} />
          LinkedIn
        </a>

        <a
          href="https://github.com/Ayushkumar1224"
          target="_blank"
          className="flex items-center gap-3 bg-blue-900 border border-blue-600 px-6 py-3 rounded-xl text-blue-200 hover:text-white transition"
        >
          <Github size={22} />
          GitHub
        </a>
      </div>
    </div>
  );
}
