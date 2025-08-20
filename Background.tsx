"use client";
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-50">
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff" },
            move: { enable: true, speed: 1 },
            number: { value: 50 },
            opacity: { value: 0.5 },
            size: { value: 2 },
          },
        }}
      />
    </div>
  );
}
