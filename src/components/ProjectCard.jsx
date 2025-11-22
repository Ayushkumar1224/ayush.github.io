export default function ProjectCard({ title }) {
  return (
    <div className="p-4 border rounded">
      <h3>{title || "Project Placeholder"}</h3>
    </div>
  );
}
