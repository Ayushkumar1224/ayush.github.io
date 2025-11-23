import { motion } from "framer-motion";
import { PROFILE_IMAGE, personal } from "../../data/personal";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 w-full">
      <motion.img
        src={PROFILE_IMAGE}
        alt={personal.name}
        className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-xl object-cover"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-left"
      >
        <h1 className="text-5xl font-extrabold text-white">{personal.name}</h1>
        <p className="text-blue-300 mt-2 text-xl">{personal.title}</p>

        <p className="mt-5 text-blue-200 max-w-xl">{personal.bio}</p>

        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-lg text-white font-medium"
        >
          View My Work
        </a>
      </motion.div>
    </div>
  );
}
