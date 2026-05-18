import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import greenPico from "../assets/Greenpico.png";
import peachPico from "../assets/Peachpico.png";
import yellowPico from "../assets/Yellowpico.png";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/tanishqtiwari7",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/tanishq-tiwari-dev",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/tanishqtiwari2025",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        relative
        mt-24
        overflow-hidden
        rounded-t-[48px]
        bg-linear-to-br
        from-pink-100
        via-rose-50
        to-orange-50
        px-6
        py-16
      "
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Heading */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-neutral-900">
              Let’s build something great.
            </h3>

            <p className="mt-2 text-sm text-neutral-600">
              Open for internships, collaborations, and freelance work.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    bg-white/80
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  <Icon className="text-lg text-neutral-800" />
                </a>
              );
            })}
          </div>

          {/* Signature */}
          <div className="text-center">
            <p className="text-sm text-neutral-600">Crafted with passion by</p>

            <p className="font-caveat text-3xl text-neutral-900">Tanishq</p>
          </div>
        </div>
      </div>

      {/* Sprite accents */}
      <img
        src={yellowPico}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-6
          left-8
         h-8 w-8 sm:h-10 sm:w-10
          -rotate-12deg
          select-none
        "
      />

      <img
        src={peachPico}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-12
          right-24
         h-8 w-8 sm:h-12 sm:w-12
          rotate-[8deg]
          select-none
        "
      />

      <img
        src={greenPico}
        alt=""
        aria-hidden="true"
        className="
          absolute
          bottom-6
          right-8
         
          h-8 w-8 sm:h-10 sm:w-10
          rotate-[-8deg]
          select-none
          -scale-x-100
        "
      />
    </footer>
  );
}
