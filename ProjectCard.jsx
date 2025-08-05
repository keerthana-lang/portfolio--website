// src/components/ProjectCard.jsx
function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} target="_blank" className="text-sm text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
