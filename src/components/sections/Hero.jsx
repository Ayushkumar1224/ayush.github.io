import { motion } from "framer-motion";
import HeroCard from "../components/sections/HeroCard"; // adjust path if needed

function FloatingShapes() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
        className="floating"
        style={{
          width: 260,
          height: 260,
          left: 80,
          top: 40,
          background: "rgba(14,165,233,0.08)",
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="floating"
        style={{
          width: 160,
          height: 160,
          right: 120,
          top: 120,
          background: "rgba(6,95,155,0.14)",
        }}
      ></motion.div>
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-start justify-center min-h-screen px-10">
      {/* Floating shapes */}
      <FloatingShapes />

      {/* Intro text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-bold text-white">Hi — I'm Ayush</h1>
        <p className="text-gray-300 mt-2 text-lg">
          I build infrastructure projects: networking, systems administration,
          cloud, and home lab automation.
        </p>
      </motion.div>

      {/* Hero cards */}
      <div className="mt-8 w-full">
        <HeroCard />
      </div>
    </section>
  );
}
