import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="card">
      <div className="flex flex-col gap-3">
        <div className="h-40 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900"></div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-300">{project.short}</p>
        <div className="mt-3 flex gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="text-sm font-medium text-accent"
          >
            View →
          </Link>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-sm"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
