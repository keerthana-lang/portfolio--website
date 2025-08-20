import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export const metadata: Metadata = {
title: "Keerthana | Frontend Developer",
description: "Animated portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen">
<Navbar />
<Background />
<main className="pt-20">{children}</main>
<Footer />
</body>
</html>
);
}