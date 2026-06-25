import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const navs = [
    { name: 'Home', to: '#home' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' },
    { name: 'Contact', to: '#contacts' }
]

export default function Nav() {
  const frostyLink = "hidden  nav:block px-3 py-2 text-slate-200 bg-white/5 rounded-md hover:text-white hover:bg-white/15 shadow transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium"
 const mobileLink = "px-3 py-2 text-slate-200 bg-white/5 rounded-md hover:text-white hover:bg-white/15 shadow transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium  text-center w-[150px] justify-space-around";
   return(
     <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/10 backdrop-blur-md shadow-sm border-b border-white/10 min-h-[64.8px]">
      <div className="flex max-w-[1200px] mx-auto w-full items-center justify-between px-4 py-3">
        {navs.map((item, index) => (
          <a
            key={index}
            href={item.to}
            className={frostyLink}
          >
            {item.name}
          </a>
        ))}
      </div > 

      <div className=" flex gap-3  items-center justify-between px-4 py-2 nav:hidden ">
          <button className={mobileLink}>Home</button>
          <RxHamburgerMenu className="text-white"/>
      </div>
    </nav>
  )
}
