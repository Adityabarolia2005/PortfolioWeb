import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { navAnimation } from "./animation";
import { AnimatePresence , motion } from "framer-motion";

const navs = [
  { name: "Home", to: "#home" },
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contacts" },
];
const nav2 = [
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#projects" },
  { name: "Contact", to: "#contacts" },
  { name: "Experience", to: "#Experience" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const frostyLink =
    "hidden md:block px-3 py-2 text-slate-200 rounded-md hover:text-white border-b-1 hover:border-b-btn-cta-hover   shadow hover:shadow-cyan-500/50 transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium";
  const mobileLink =
    "px-3 py-2 text-slate-200 bg-white/5 rounded-md hover:text-white hover:bg-white/15 shadow transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium text-center w-[150px]";

  function handleHammer() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/10 backdrop-blur-md shadow-sm border-b border-white/10 min-h-[64.8px]">
      <div className="flex flex-row max-w-full mx-auto  items-center justify-around px-4 py-2">
        <div className="hidden md:flex items-center justify-around w-full gap-8">
          <a href="#home">
            <img src="/Image/Logo5.png" alt="Logo" width="64.8px" />
          </a>
          <div className="flex gap-3"> 
            {nav2.map((item, index) => (
              <a key={index} href={item.to} className={frostyLink}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden w-full justify-between">
          <a href="#home">
            <img
              src="/Image/Logo5.png"
              alt="logo"
              width="64.8px"
              className="rounded-md object-cover"
            />
          </a>
          <button
            onClick={handleHammer}
            className="text-white text-2xl focus:outline-none cursor-pointer hover:scale-105 transition-all duration-250 ease-in-out relative w-8 h-8 flex items-center justify-center "
          >
            {/* Hamburger Icon */}
            <span
              className={`absolute transition-all duration-300 transform ${isOpen ? "opacity-0 scale-50 rotate-45" : "opacity-100 scale-100 rotate-0"}`}
            >
              <RxHamburgerMenu />
            </span>

            {/* Cross Icon */}
            <span
              className={`absolute transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"}`}
            >
              <RxCross1 />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex text-center absolute flex-col mt-3  left-4 right-4 gap-2 p-4 z-50 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
