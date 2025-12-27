import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery & Solution Planning" },
  { number: "02", title: "UX / UI & System Design" },
  { number: "03", title: "Development & Quality Testing" },
  { number: "04", title: "Deployment & Continuous Support" },
];

export default function HowWeBuild() {
  const containerRef = useRef(null);
  const nodeRefs = useRef([]);
  const [pathD, setPathD] = useState("");

  useLayoutEffect(() => {
    const buildPath = () => {
      if (!containerRef.current) return;

      const containerBox = containerRef.current.getBoundingClientRect();

      const points = nodeRefs.current
        .map((el) => {
          if (!el) return null;
          const box = el.getBoundingClientRect();
          return {
            x: box.left + box.width / 2 - containerBox.left,
            y: box.top + box.height / 2 - containerBox.top,
          };
        })
        .filter(Boolean);

      if (points.length < 2) return;

      let d = `M ${points[0].x} ${points[0].y}`;

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const dx = curr.x - prev.x;

        d += `
          C ${prev.x + dx * 0.5} ${prev.y - 120},
            ${curr.x - dx * 0.5} ${curr.y + 120},
            ${curr.x} ${curr.y}
        `;
      }

      setPathD(d);
    };

    buildPath();
    window.addEventListener("resize", buildPath);
    return () => window.removeEventListener("resize", buildPath);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#2E2B44] py-32 overflow-hidden"
      id="technologies"
    >
      {/* SVG CURVE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={pathD}
          fill="none"
          stroke="#8B7CFF"
          strokeWidth="4"
          filter="url(#glow)"
        />

        <motion.path
          d={pathD}
          fill="none"
          stroke="#B8AFFF"
          strokeWidth="2"
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: [0, -200] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <motion.circle r="6" fill="#E4DEFF" filter="url(#glow)">
          <animateMotion dur="6s" repeatCount="indefinite" path={pathD} />
        </motion.circle>
      </svg>

      {/* STEPS */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 px-6">
        {steps.map((step, i) => (
          <div key={i} className="text-center text-white">
            <div
              ref={(el) => (nodeRefs.current[i] = el)}
              className="relative mx-auto w-28 h-28 mb-6"
            >
              <div className="absolute inset-0 rounded-full bg-black/40" />
              <div className="relative w-full h-full rounded-full bg-[#B8AFFF] text-[#2E2B44] flex items-center justify-center text-3xl font-bold shadow-xl">
                {step.number}
              </div>
            </div>

            <p className="flex items-center justify-center gap-2 text-lg font-medium">
              <span className="text-[#8B7CFF]">→</span>
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
