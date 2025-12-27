import {
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#2E2B44] text-white pt-24 overflow-hidden">

      {/* Wave background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="none"
          stroke="#8B7CFF"
          strokeWidth="2"
          d="M0,160 C240,80 480,240 720,160 960,80 1200,240 1440,160"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/20">

          {/* LOGO */}
          <div>
            <h3 className="text-2xl font-bold tracking-widest mb-4">
              DIV-M
            </h3>
            <p className="text-sm text-[#C9C6E3] max-w-xs">
              Building modern digital products, software platforms, and
              data-driven solutions for growing businesses.
            </p>
          </div>

          {/* MAIN LINKS */}
          <div>
            <ul className="space-y-3 text-sm">
              <FooterLink href="#about" label="About Us" />
              <FooterLink href="#services" label="Services" />
              <FooterLink href="#technologies" label="Technologies" />

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <ul className="space-y-3 text-sm">
                            <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#join-hydra" label="Contact Us" />

            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4 tracking-widest">
              CONNECT WITH US
            </h4>

            <div className="flex gap-4 mb-6">
              <SocialIcon Icon={Facebook} link="https://facebook.com" />
              <SocialIcon Icon={Linkedin} link="https://linkedin.com" />
              <SocialIcon Icon={Youtube} link="https://youtube.com" />
              <SocialIcon Icon={Instagram} link="https://instagram.com" />
            </div>

            <a
              href="#join-hydra"
              className="inline-block px-8 py-3 rounded-full 
                         bg-[#8B7CFF] text-[#2E2B44] font-semibold 
                         hover:scale-105 transition"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-white/60 py-6 tracking-widest">
          © {new Date().getFullYear()} DIV-M — ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

/* Footer link */
function FooterLink({ href, label }) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-[#8B7CFF] transition"
      >
        {label}
      </a>
    </li>
  );
}

/* Social icon */
function SocialIcon({ Icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full 
                 bg-[#3A3654] flex items-center justify-center 
                 hover:bg-[#8B7CFF] transition"
    >
      <Icon size={18} />
    </a>
  );
}
