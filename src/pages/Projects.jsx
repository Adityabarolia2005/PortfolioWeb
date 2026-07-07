import { useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'
import PageHeading from '../components/PageHeading'

export default function Projects() {

  const projects = [
    { name: "Task Manager", des: "Full-stack task management app with CRUD operations, user authentication, and real-time updates. Built with MERN stack.", tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"], gitSrc: "https://github.com/Adityabarolia2005/Task-Manager.git" },
    { name: "Resume Analyzer", des: "AI-powered resume analyzer using OpenAI API. Parses resumes, gives feedback, and suggests improvements for job seekers.", tech: ["React", "Node.js", "OpenAI API"], gitSrc: "https://github.com/Adityabarolia2005/Ai-Resume-Analyzer.git" },
    { name: "Code Explainer", des: "Paste any code snippet and get a plain-English explanation powered by OpenAI. Supports multiple languages.", tech: ["React", "Express", "OpenAI API"], gitSrc: "https://github.com/Adityabarolia2005/Code-Explainer.git" }
  ]

  const parentProjectRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const parent = entries[0];
      if (parent.isIntersecting) {
        const boxes = parentProjectRef.current.querySelectorAll('.stagger-box');
        boxes.forEach((box, index) => {
          box.style.transitionDelay = `${index * 0.30}s`;
          box.classList.add('show-box');
        });
      }
    }, { threshold: 0.3 });

    if (parentProjectRef.current) {
      observer.observe(parentProjectRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className='w-full px-4 max-w-[1200px] mx-auto scroll-mt-[80px]' id='projects' ref={parentProjectRef}>
      <div className='mb-6 m-auto w-auto text-center'>
        <PageHeading className='stagger-box'>Projects</PageHeading>
      </div>
      <div className='grid gap-5 m-auto justify-items-center sm:grid-cols-2 xl:grid-cols-3'>
        {projects.map((item, index) => (
          <div
            key={item.name}
            className='projectCards stagger-box'
          >
            <ProjectCard index={index + 1} name={item.name} des={item.des} tech={item.tech} src={item.gitSrc} />
          </div>
        ))}
      </div>
    </section>
  )
}