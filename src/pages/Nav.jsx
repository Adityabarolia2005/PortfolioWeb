function Nav() {
  const tabs = [
    { name: 'Home', to: '#home' },
    { name: 'Skills', to: '#skills' },
    { name: 'Projects', to: '#projects' }
  ];

  const base = "px-3 py-1.5 rounded-md bg-white/20 text-black shadow transition duration-200 ease-in-out hover:bg-white/40 hover:scale-105 font-btn font-medium"
  return (
    <nav className="fixed top-0 left-0 right-0  bg-white/30 backdrop-blur-md border-b border-white/40 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 ">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href={tab.to}
            className={`${base} m-2 shadow-sm hover:text-white inline-block text-center`}
          >
            {tab.name}
          </a>
        ))}
        <a href="#contacts" className={`${base} m-2 shadow-sm hover:text-white inline-block text-center`}>
          Lets Connect
        </a>
      </div>
    </nav>
  );
}

export default Nav;
