function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold text-white">Keerthana’s Portfolio</h2>
        <p className="text-sm text-gray-200 mt-2">
          Designed & built with ❤️ using React + Tailwind CSS
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="text-white hover:text-indigo-300 transition"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="mailto:your@email.com"
            className="text-white hover:text-indigo-300 transition"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>

        <p className="text-xs text-gray-200 mt-6">
          © {new Date().getFullYear()} Keerthana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
