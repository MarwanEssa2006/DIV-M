import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image from "../assets/DIV-_-removebg-preview.png";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      className="relative bg-[#2E2B44] text-white overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-24 space-y-24">

        {/* TOP ROW */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm tracking-widest text-[#C9C6E3] mb-3">
              INTRODUCTION
            </h3>

            <div className="flex items-center gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                TO DIV-M
              </h2>
              <ArrowRight className="text-[#8E7CFF]" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#C9C6E3] leading-relaxed max-w-xl"
          >
            We design and build smart software solutions that help businesses
            organize operations, manage data efficiently, and replace manual
            work with automated systems tailored to real business needs.
          </motion.p>
        </div>

        {/* MIDDLE ROW */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="w-[280px] sm:w-[360px] lg:w-[420px] aspect-square rounded-[48px] shadow-2xl">
              <img
                src={image}
                alt="Div-M Software Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* ABOUT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm tracking-widest text-[#C9C6E3] mb-2">
              ABOUT
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              DIV-M
            </h2>

            <p className="text-[#C9C6E3] leading-relaxed mb-8 max-w-xl">
              Div-M creates custom business systems, dashboards, and management
              tools that simplify daily operations. We transform spreadsheets
              and disconnected tools into powerful platforms that give business
              owners clarity, control, and confidence.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8E7CFF] to-[#A66BFF] font-semibold"
            >
              START YOUR PROJECT
            </motion.button>
          </motion.div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm tracking-widest text-[#C9C6E3] mb-3">
              WHY BUILD
            </h3>

            <div className="flex items-center gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                WITH DIV-M?
              </h2>
              <ArrowRight className="text-[#8E7CFF]" />
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#C9C6E3] leading-relaxed max-w-xl"
          >
            We focus on practical, scalable solutions built around how your
            business actually works. Our systems are clean, reliable, and
            designed to grow with you — not slow you down.
          </motion.p>
        </div>

      </div>

      {/* OPTIONAL DECORATIVE WAVE */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute right-0 top-1/3 w-[600px] h-[600px] border border-white/10 rounded-full" />
      </div>
    </section>
  );
}
