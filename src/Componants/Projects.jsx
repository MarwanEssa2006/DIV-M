import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import img1 from "../assets/Lamp acadmy-C7Km8_Xq.png";
import img2 from "../assets/Screenshot 2025-11-17 003527.png";
import img3 from "../assets/Screenshot-2025-11-14-184830.png";
import img4 from "../assets/image-Bt1-MueH.png";
import img5 from "../assets/Screenshot 2025-11-17 005107.png";
import img6 from "../assets/klyr-Be7uDisa.png";

const projects = [
  {
    title: "Lamp Academy",
    image: img1,
    tags: ["API", "MVC", "Platform"],
    link: "https://lampacademy1-sites.ezsite.ai/",
  },
  {
    title: "Bluroforce",
    image: img2,
    tags: ["Software", "SPA"],
    link: "https://www.bluraforce.site/",
  },
  {
    title: "Medoniq",
    image: img3,
    tags: ["AI", "API"],
    link: "https://medoniqeg.vercel.app/",
  },
  {
    title: "Skillova Academy",
    image: img4,
    tags: ["React", "Education"],
    link: "https://skillovaacademy-57f58.firebaseapp.com/",
  },
  {
    title: "Berimbolo",
    image: img5,
    tags: ["Security", "Frontend"],
    link: "https://enchanting-bublanina-5a0997.netlify.app/",
  },
  {
    title: "Modern Cloud Banking",
    image: img6,
    tags: ["Cloud", "Frontend"],
    link: "https://github.com/mhaoead112/Klyr",
  },
];

export default function Work() {
  return (
    <section
      id="projects"
      className="relative bg-[#2E2B44] text-white py-28 px-6 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Our <span className="text-[#8B7CFF]">Projects</span>
        </h2>
        <p className="text-[#C9C6E3] max-w-xl">
          A selection of digital products and platforms crafted by Div-M with
          precision, performance, and elegant design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[32px] overflow-hidden 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover 
                           group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B44]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold tracking-wide">
                  {p.title}
                </h3>

                <span
                  className="p-2 rounded-full bg-[#8B7CFF]/20 
                             text-[#8B7CFF] group-hover:bg-[#8B7CFF] 
                             group-hover:text-[#2E2B44] transition"
                >
                  <ArrowUpRight size={18} />
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-[#8B7CFF]/10 text-[#C9C6E3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
