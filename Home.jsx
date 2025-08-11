function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-400 to-purple-400 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black-700 mb-4">
          Hi, I'm Keerthana
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          I'm a frontend developer building modern and responsive web apps with React & Tailwind CSS.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;
