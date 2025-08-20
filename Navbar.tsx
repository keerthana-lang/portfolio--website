"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 w-full h-30 z-90 bg-gradient-to-br from-pink-700 via-purple-900 to-black backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-9">
        {/* Logo */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 text-transparent bg-clip-text">
          Keerthana.P
        </h1>

        {/* Nav Links */}
        <nav className="flex gap-12">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className="relative group text-white font-medium"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
