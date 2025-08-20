"use client";
import { motion } from "framer-motion";
import Link from "next/link";


type Props = {
title: string;
description: string;
href?: string;
tags?: string[];
};


export default function ProjectCard({ title, description, href = "#", tags = [] }: Props) {
return (
<motion.div
whileHover={{ y: -4 }}
className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm"
>
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-2 text-sm opacity-80">{description}</p>
{tags.length > 0 && (
<div className="mt-3 flex flex-wrap gap-2">
{tags.map((t) => (
<span key={t} className="rounded-full border border-white/15 px-2 py-0.5 text-xs opacity-80">
{t}
</span>
))}
</div>
)}
<Link
href={href}
className="mt-4 inline-block rounded-xl border border-white/15 px-3 py-1.5 text-sm opacity-90 group-hover:bg-white/10"
>
View repo
</Link>
</motion.div>
);
}