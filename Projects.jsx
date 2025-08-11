import ProjectCard from "./ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "Weather App",
      description: "Weather forecast using OpenWeatherMap API.",
      link: "https://github.com/keerthana-lang/weather-app",
    },
    {
  title: "Task Management System",
  description: "A full-featured task manager with create, edit, and delete functionality. Built using React, Tailwind CSS, and local storage for data persistence.",
  link: "https://github.com/keerthana-lang/TASK_MANAGER", // 🔁 Replace with your real live link
},
   {
  title: "Translator Random",
  description: "A fun project that combines a translator with a random generator offering quotes, jokes, and words for daily inspiration and entertainment.",
  link: "https://github.com/keerthana-lang/translator", // 🔁 Replace with your real live link
},
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Vite.",
      link: "https://example.com/portfolio",
    },
  ];

  return (
    <section className="py-16 px-7 bg-gradient-to-r from-indigo-200 via-blue-400 to-purple-400 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
