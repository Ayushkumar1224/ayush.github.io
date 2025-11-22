import React from "react";
import Hero from "../components/Hero";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container py-10">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
