import Description from '../components/Description'
function ProjectCard({ index, name, des, tech = [] , src , className=""}) {
  return (
    <div className = {`w-full  max-w-[1200px] h-full p-4 rounded-3xl glass-card glass-card-hover flex flex-col items-center gap-4 text-center ${className}`} >
      {index && (
        <span className='text-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-[#040212] shadow-sm shadow-accent/20'>
          #{index}
        </span>
      )}
      <h2 className='text-lg font-heading font-bold text-theme-primary'>
        {name}
      </h2>
      <Description>{des}</Description>
      <div className='flex flex-wrap justify-center gap-2 m-auto'>
        {tech.map((item, idx) => (
          <span key={idx} className='rounded-full bg-badge-tech-bg px-3 py-1 text-xs font-semibold text-badge-tech-text border border-secondary/10'>
            {item}
          </span>
        ))}
      </div>
      <a
        href={src || '#'}
        target="_blank"
        rel="noreferrer"
        className="w-full sm:w-2/3 px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-btn font-semibold text-slate-200 hover:text-white transition mt-auto cursor-pointer text-center"
      >
        Git Repo
      </a>
    </div>
  )
}

export default ProjectCard
