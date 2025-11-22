import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);
  if (!project)
    return (
      <main className="container py-12">
        <h2>Project not found</h2>
      </main>
    );

  return (
    <main className="container py-12">
      <Link to="/projects" className="text-sm mb-4 inline-block">
        ← Back to projects
      </Link>
      <h1 className="text-3xl font-bold mt-2">{project.title}</h1>
      <p className="text-gray-300 mt-3">{project.short}</p>

      <h3 className="mt-6 font-semibold">Tech</h3>
      <ul className="flex gap-3 mt-2 flex-wrap">
        {project.tech.map((t) => (
          <li key={t} className="text-sm bg-white/5 px-3 py-1 rounded">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-4">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} screenshot ${i + 1}`}
            loading="lazy"
            className="rounded-lg"
          />
        ))}
      </div>

      <div className="mt-6">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            View source on GitHub
          </a>
        )}
      </div>
    </main>
  );
}
