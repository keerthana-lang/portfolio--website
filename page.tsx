"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-8xl flex flex-col justify-center items-center text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      {/* Floating Intro Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
      >
        Welcome to My Portfolio 🚀
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl opacity-90 text-center max-w-xl mb-20"
      >
        I’m <span className="text-fuchsia-400 font-semibold">Keerthana</span>, a
        frontend developer who loves building{" "}
        <span className="text-cyan-400">beautiful</span> and{" "}
        <span className="text-indigo-400">animated</span> web experiences.
      </motion.p>

      {/* Call to Action Buttons */}
      <div className="flex gap-6">
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg font-medium"
          >
            View My Projects
          </motion.button>
        </Link>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-cyan-400 rounded-xl shadow-lg font-medium hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
