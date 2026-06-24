import Discription from '../components/Description'

function ProjectCard({ index, name, des, tech = [] }) {
  return (
    <div className='w-full max-w-[260px] h-full px-5 py-5 rounded-3xl bg-white/10 text-white shadow-lg transition duration-200 ease-in-out hover:bg-white/20 hover:scale-105 hover:shadow-2xl flex flex-col items-center gap-4 text-center'>
      {index && (
        <span className=' text-center rounded-full bg-sky-500 px-3 py-1 text-sm  text-white'>
          #{index}
        </span>
      )}
      <h2 className='text-lg font-heading font-bold'>{name}</h2>
      <Discription>{des}</Discription>
      <div className='flex flex-wrap justify-center gap-2 m-auto'>
        {tech.map((item, idx) => (
          <span key={idx} className='rounded-full bg-amber-950 px-3 py-1 text-xs font-extrabold text-slate-200'>
            {item}
          </span>
        ))}
      </div>
      <button className="w-1/2 px-4 py-2 rounded-md bg-black text-sm font-btn font-medium text-slate-200 mt-auto">Git Repo</button>
    </div>
  )
}

export default ProjectCard