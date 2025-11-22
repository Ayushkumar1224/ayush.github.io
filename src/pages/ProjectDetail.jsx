import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);
  if (!project)
    return (
      <main>
        <h2>Project not found</h2>
      </main>
    );
  return (
    <main>
      <Link to="/projects" className="text-sm text-gray-300">
        ← Back
      </Link>
      <h1 className="text-3xl font-bold mt-3">{project.title}</h1>
      <p className="text-gray-300 mt-2">{project.short}</p>

      <h3 className="mt-6 font-semibold">Tech</h3>
      <ul className="flex gap-2 mt-2 flex-wrap">
        {project.tech.map((t) => (
          <li key={t} className="text-xs bg-white/5 px-2 py-1 rounded">
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
            className="rounded-md"
            loading="lazy"
          />
        ))}
      </div>

      {project.repo && (
        <p className="mt-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-accent"
          >
            View source
          </a>
        </p>
      )}
    </main>
  );
}
