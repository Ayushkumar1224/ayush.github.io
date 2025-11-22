import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article whileHover={{ translateY: -6 }} className="card">
      <div className="h-44 w-full rounded-md overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 mb-3"></div>
      <h4 className="text-lg font-semibold">{project.title}</h4>
      <p className="text-sm text-gray-300 my-2">{project.short}</p>
      <div className="flex items-center gap-3">
        <Link to={`/projects/${project.id}`} className="text-accent text-sm">
          View →
        </Link>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-300"
          >
            Source
          </a>
        )}
      </div>
    </motion.article>
  );
}
