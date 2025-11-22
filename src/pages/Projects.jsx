import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/sections/ProjectCard";

export default function Projects() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
