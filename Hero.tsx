"use client";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Hero() {
return (
<section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
{/* background gradient blob */}
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-600 blur-3xl opacity-20" />
</div>


<div className="mx-auto max-w-3xl px-4 text-center">
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-4xl font-black leading-tight md:text-6xl"
>
Hi, I'm <span className="text-fuchsia-400">Keerthana</span> —
<br className="hidden md:block" /> Frontend Developer
</motion.h1>
<motion.p
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.6 }}
className="mx-auto mt-4 max-w-xl text-base opacity-90 md:text-lg"
>
I build fast, animated web apps with Next.js, Tailwind CSS, and Framer Motion.
</motion.p>
<motion.div
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.35, duration: 0.5 }}
className="mt-8 flex items-center justify-center gap-4"
>
<Link href="/projects" className="rounded-2xl bg-white px-5 py-2.5 text-neutral-900 hover:bg-white/90">
View Projects
</Link>
<Link
href="/contact"
className="rounded-2xl border border-white/20 px-5 py-2.5 hover:bg-white/10"
>
Contact Me
</Link>
</motion.div>
</div>
</section>
);
}