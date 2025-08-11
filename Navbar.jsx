import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex-col items-center text-center px-4 py-3 bg-gradient-to-r from-white/50 via-purple-200 to-white/80">
      <div className="max-w-8xl md-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold text-black p-3 ">My Portfolio Website</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black font-medium p-4 text-xl">
          <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-600">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-2 px-4 text-gray-700 font-medium">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

