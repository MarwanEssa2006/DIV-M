import { ArrowRight, MapPin, Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/DIV-_-removebg-preview.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "TECHNOLOGIES", href: "#technologies" },
    { label: "PROJECTS", href: "#projects" },
  ];

  return (
    <section className="relative min-h-screen bg-[#2E2B44] text-white overflow-hidden">

      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path
            d="M1200 0C1000 200 1400 400 1000 800"
            stroke="#8B7CFF"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] bg-[#8B7CFF]/30 blur-[160px] rounded-full animate-pulse" />
      </div>

      {/* NAVBAR */}
      <nav className="relative z-30 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="relative flex items-center">
          <div className="absolute w-24 h-24 bg-[#8B7CFF]/40 blur-2xl rounded-full" />
          <img
            src={logo}
            alt="DIV-M Logo"
            className="relative w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wider">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-[#8B7CFF] transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#join-hydra"
            className="px-6 py-2 rounded-full bg-[#8B7CFF] text-[#2E2B44] font-semibold hover:scale-105 transition"
          >
            JOIN DIV-M
          </a>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#2E2B44]/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-white/10"
            >
              <X size={28} />
            </button>

            <div className="h-full flex flex-col items-center justify-center gap-8 text-lg font-semibold">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#8B7CFF] transition"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#join-hydra"
                onClick={() => setOpen(false)}
                className="mt-6 px-8 py-3 rounded-full bg-[#8B7CFF] text-[#2E2B44]"
              >
                JOIN DIV-M
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CENTER CONTENT */}
      <div className="relative z-10 min-h-[75vh] flex items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="block text-[#C9C6E3]">
              We Build Smart Software
            </span>
            <span className="block text-[#8B7CFF] mt-2">
              That Organizes Your Business
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[#C9C6E3] text-base sm:text-lg max-w-xl mx-auto mb-8"
          >
            Custom systems, dashboards, and automation designed to replace manual
            work and give you full control over your operations.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            href="#join-hydra"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
              bg-[#8B7CFF] text-[#2E2B44] font-semibold hover:scale-110 transition"
          >
            BUILD YOUR WORLD
            <ArrowRight />
          </motion.a>
        </motion.div>
      </div>

      {/* CONTACT BAR */}
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-full bg-[#3A3653]/80 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 px-8 py-6">
            <PillInfo icon={MapPin} title="Pay Us a Visit" value="Union St, Seattle, WA" />
            <PillInfo icon={Phone} title="Give Us a Call" value="(110) 1111-1010" />
            <PillInfo icon={Mail} title="Send Us a Message" value="Contact@DivMTech.com" />
          </div>
        </div>
      </div> */}

    </section>
  );
}

function PillInfo({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4 px-6 py-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-[#C9C6E3]">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        <p className="text-xs text-[#C9C6E3]">{value}</p>
      </div>
    </div>
  );
}
