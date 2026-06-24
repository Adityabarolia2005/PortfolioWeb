import React from 'react'

const navs = [
    { name: 'Home', to: '#home' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' }
]
export default function Nav() {
  
  const base = "px-4 py-1.5 rounded-md bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 shadow transition-all duration-200 ease-in-out hover:scale-105 font-btn font-medium"
  return (
    <nav className="fixed flex justify-center top-0 left-0 right-0 max-w-full bg-[#040212]/40 backdrop-blur-md border-b border-white/10 z-50">
      <div className="flex justify-between items-center w-full max-w-[782.075px] px-4">
        <div className="flex">
          {navs.map((item, index) => (
            <a
              key={index}
              href={item.to}
              className={`${base} m-2 shadow-sm hover:text-white inline-block text-center`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <a href="#contacts" className={`${base} m-2 shadow-sm hover:text-white inline-block text-center`}>
          Connect
        </a>
      </div>
    </nav>
  )
}
