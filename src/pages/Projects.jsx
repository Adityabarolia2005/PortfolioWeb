import ProjectCard from '../components/ProjectCard'
import PageHeading from '../components/PageHeading'

export default function Projects(){
  const projects = [
    {name : "Task Manager" , des:"Full-stack task management app with CRUD operations, user authentication, and real-time updates. Built with MERN stack." , tech:["MongoDB","Express","React","Node.js" , "Tailwind CSS"]},
    {name : "Resume Analyzer" , des:"AI-powered resume analyzer using OpenAI API. Parses resumes, gives feedback, and suggests improvements for job seekers." , tech:["React","Node.js","OpenAI API"]},
    {name : "Code Explainer" , des:"Paste any code snippet and get a plain-English explanation powered by OpenAI. Supports multiple languages." , tech:["React","Express","OpenAI API"]}
  ]
  return (
    <section className='mt-6 w-full max-w-[782.075px] mx-auto' id='projects'>
      <div className='mb-6'>
        <PageHeading>Projects</PageHeading>
      </div>
      <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((item, index) => (
          <ProjectCard key={index} index={index + 1} name={item.name} des={item.des} tech={item.tech} />
        ))}
      </div>
    </section>
  )
}
