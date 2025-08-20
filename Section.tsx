"use client";
import { motion } from "framer-motion";


export default function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
return (
<motion.section
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5 }}
className={className}
>
{children}
</motion.section>
);
}