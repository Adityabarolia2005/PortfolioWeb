import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { LazyMotion, domAnimation, m , AnimatePresence} from "framer-motion";

const nav2 = [
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#projects" },
  { name: "Experience", to: "#Experience" },
  { name: "Contact", to: "#contacts" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null); // ✅ button ka alag ref
  const dropdownRef = useRef(null); // ✅ dropdown ka alag ref

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const frostyLink =
    "hidden md:block px-3 py-2 text-slate-200 rounded-md hover:text-white border-b-1 hover:border-b-btn-cta-hover shadow hover:shadow-cyan-500/50 transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/10 backdrop-blur-md shadow-sm border-b border-white/10 min-h-[64.8px]">
      <div className="flex flex-row max-w-full mx-auto items-center justify-around px-4 py-2">
        {/* ── Desktop ── */}
        <div className="hidden md:flex items-center justify-around w-full gap-8">
          <a href="#home" className="flex items-center justify-center rounded-md overflow-hidden shrink-0 w-[56px] h-[56px]">
            <img
              src="\Image\transparent-imageFinal.webp"
              alt="Logo"
              width="56px"
              height="56px"
              loading="eager"
              fetchPriority="high"
              className="block  object-contain"
            />
          </a>
          <div className="flex gap-3">
            {nav2.map((item, index) => (
              <a key={index} href={item.to} className={frostyLink}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* ── Mobile topbar ── */}
        <div className="flex items-center gap-3 md:hidden w-full justify-between">
          <a href="#home" className="flex items-center justify-center rounded-md overflow-hidden shrink-0 w-[56px] h-[56px]">
            <img
              src="\Image\transparent-imageFinal.webp"
              alt="Logo"
              width="56px"
              height="56px"
              loading="eager"
              fetchPriority="high"
              className="block  object-contain"
            />
          </a>

          {/* ✅ buttonRef + z-[60] */}
          <button
            ref={buttonRef}
            onClick={(e) => {
              setIsOpen((prev) => !prev);
              e.stopPropagation();
            }}
            aria-label="Navigation dropdown button"
            className="text-white text-2xl focus:outline-none cursor-pointer  hover:scale-105 transition-all duration-250 ease-in-out relative w-8 h-8 flex items-center justify-center"
          >
            {/* Hamburger */}
            <span
              className={`absolute transition-all duration-300 transform ${
                isOpen
                  ? "opacity-0 scale-50 rotate-45 z-100"
                  : "opacity-100 scale-100 rotate-0 z-10"
              }`}
            >
              <RxHamburgerMenu />
            </span>
            {/* Cross */}
            <span
              className={`absolute transition-all duration-300 transform ${
                isOpen
                  ? "opacity-100 scale-100 rotate-0 z-100"
                  : "opacity-0 scale-50 -rotate-45 z-10"
              }`}
            >
              <RxCross1 />
            </span>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
        {isOpen && (
          <m.div
            key="mobile-nav"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            ref={dropdownRef}
            className="md:hidden flex flex-col text-center absolute left-4 right-4 gap-1 p-4 z-50 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl"
          >
            {nav2.map((item, index) => (
              <a
                key={index}
                href={item.to}
                className="block px-3 py-2 text-slate-200 hover:text-white rounded-md bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </m.div>
        )}
        </AnimatePresence>
      </LazyMotion>
    </nav>
  );
}
