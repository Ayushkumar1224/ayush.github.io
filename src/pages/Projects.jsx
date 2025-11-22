import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div className="p-10">
      <h2>Projects Page</h2>
      <div className="grid gap-4 mt-4">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} />
        ))}
      </div>
    </div>
  );
}
