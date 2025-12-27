import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  BarChart3,
  ChevronDown,
  Smartphone,
} from "lucide-react";

import { FaReact, FaLaravel, FaNodeJs, FaDatabase } from "react-icons/fa";

const features = [
  {
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Custom web and mobile applications built with scalable architecture, modern technologies, and clean code standards.",
    icon: Code2,
  },
  {
    title: "DIGITAL EDUCATION",
    description:
      "Interactive learning platforms, training systems, and digital solutions designed to enhance knowledge delivery.",
    icon: GraduationCap,
  },
  {
    title: "DATA & ANALYTICS",
    description:
      "Business intelligence dashboards, reporting systems, and data-driven solutions that support smart decisions.",
    icon: BarChart3,
  },
  {
    title: "MOBILE APPLICATIONS",
    description:
      "User-focused mobile apps that help businesses connect with customers and grow efficiently.",
    icon: Smartphone,
  },
];

export default function DivMFeatures() {
  return (
    <section
      className="bg-[#2E2B44] text-white py-20 px-6 overflow-hidden"
      id="services"
    >
      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-[#3A3656] rounded-3xl p-8 text-center shadow-2xl"
          >
            {/* ICON */}
            <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-[#2E2B44] flex items-center justify-center border-4 border-[#8E7CFF]">
              <item.icon className="w-10 h-10 text-[#8E7CFF]" />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-bold tracking-widest mb-4">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-[#C9C6E3] leading-relaxed mb-6">
              {item.description}
            </p>

            {/* BUTTON */}
            <a
              href="#join-hydra"
              className="inline-block px-6 py-2 rounded-full bg-[#8E7CFF]/20 hover:bg-[#8E7CFF]/40 transition text-sm font-semibold"
            >
              GET STARTED
            </a>
          </motion.div>
        ))}
      </div>

      {/* TECHNOLOGIES SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mt-28 bg-white/10 backdrop-blur-xl rounded-[60px] py-20 px-6 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest mb-3">
          TECHNOLOGIES & TOOLS
        </h2>
        <p className="text-[#C9C6E3] tracking-widest mb-10">
          POWERING DIV-M SOLUTIONS
        </p>

        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#2E2B44] rounded-full flex items-center justify-center shadow-xl">
          <ChevronDown className="text-[#8E7CFF]" />
        </div>
      </motion.div>

      {/* TECHNOLOGY LOGOS */}
      <div className="max-w-5xl mx-auto mt-24 grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        <TechItem icon={FaReact} label="REACT" />
        <TechItem icon={FaLaravel} label="LARAVEL" />
        <TechItem icon={FaNodeJs} label="NODE JS" />
        <TechItem icon={FaDatabase} label="SQL" />
      </div>
    </section>
  );
}

function TechItem({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition">
      <Icon className="text-5xl text-[#8B7CFF]" />
      <span className="text-sm font-bold tracking-widest text-white">
        {label}
      </span>
    </div>
  );
}
