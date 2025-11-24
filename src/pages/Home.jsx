import React from "react";
import { motion } from "framer-motion";
import HeroCard from "../components/sections/Hero";
import projects from "../data/projects";
import ProjectCard from "../components/sections/ProjectCard";

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

export default function Home() {
  return (
    <main id="home" className="relative">
      <FloatingShapes />

      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold">Hi — I'm Ayush</h1>
          <p className="text-gray-300 mt-2 max-w-2xl">
            I build infrastructure projects: networking, systems administration,
            cloud, and home lab automation.
          </p>
        </motion.div>

        <div className="mt-8">
          <HeroCard />
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
