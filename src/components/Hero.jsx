import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold"
      >
        Ayush Patel
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
      >
        Honours IT graduate — networking, systems administration, cloud, and IoT
        security. I build practical infrastructure tools and lab projects.
      </motion.p>
    </section>
  );
}
