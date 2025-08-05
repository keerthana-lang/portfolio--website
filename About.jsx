function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Optional Image / Avatar */}
        <div className="w-40 h-40 bg-indigo-100 rounded-full flex items-center justify-center text-4xl font-bold text-indigo-600">
          K
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">About Me</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hey! I'm <span className="font-semibold text-indigo-600">Keerthana</span>, a frontend developer who enjoys creating clean, responsive user interfaces using <span className="font-medium text-indigo-500">React</span> and <span className="font-medium text-indigo-500">Tailwind CSS</span>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm passionate about building projects that solve real problems. Currently, I'm learning advanced frontend tools like <span className="text-indigo-500 font-medium">React Router</span>, <span className="text-indigo-500 font-medium">Firebase</span>, and focusing on deploying full websites.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            My long-term goal is to become a full-time frontend engineer and contribute to open-source or startup teams. I’m always open to collaborating on exciting web projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
