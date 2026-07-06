import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import PageHeading from '../components/PageHeading'

export default function Projects(){

  useEffect(() => {
    const projectsElement = document.querySelectorAll('.projectCards')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fadeLeft')
            entry.target.classList.add('fadeIn')
            observer.unobserve(entry.target)
          }
          else{
            
          }
          
        })
      },
      { threshold: 0.15 }
    )
    projectsElement.forEach((project) => {
      if (project) observer.observe(project)
    })
    return () => observer.disconnect()
  }, [])

  const projects = [
    {name : "Task Manager" , des:"Full-stack task management app with CRUD operations, user authentication, and real-time updates. Built with MERN stack." , tech:["MongoDB","Express","React","Node.js" , "Tailwind CSS"] , gitSrc:"https://github.com/Adityabarolia2005/Task-Manager.git"},
    {name : "Resume Analyzer" , des:"AI-powered resume analyzer using OpenAI API. Parses resumes, gives feedback, and suggests improvements for job seekers." , tech:["React","Node.js","OpenAI API"] , gitSrc:"https://github.com/Adityabarolia2005/Ai-Resume-Analyzer.git"},
    {name : "Code Explainer" , des:"Paste any code snippet and get a plain-English explanation powered by OpenAI. Supports multiple languages." , tech:["React","Express","OpenAI API"] , gitSrc:"https://github.com/Adityabarolia2005/Code-Explainer.git"}
  ]
  return (
    <section className='mt-6 w-full px-4 max-w-[1200px] mx-auto scroll-mt-[80px]' id='projects'>
      <div className='mb-6 m-auto w-auto text-center'>
        <PageHeading>Projects</PageHeading>
      </div>
      <div className='grid gap-5 m-auto justify-items-center sm:grid-cols-2 xl:grid-cols-3 '>
        {projects.map((item, index) => (
          <div
            key={item.name}
            className='projectCards fadeLeft'
          >
            <ProjectCard index={index + 1} name={item.name} des={item.des} tech={item.tech} src={item.gitSrc} />
          </div>
        ))}
      </div>
    </section>
  )
}
