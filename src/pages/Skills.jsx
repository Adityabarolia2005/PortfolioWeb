
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaGithub, FaGitAlt, FaReact, FaNodeJs } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { RiClaudeLine } from "react-icons/ri";
import StrechedButton from '../components/StrechedButton'
import PageHeading from '../components/PageHeading'


const skills = [
  { name: 'Mongo DB', icons: [SiMongodb] , des :"Designing schemas, CRUD operations, and integrating with Mongoose in MERN projects." },
  { name: 'Express', icons: [SiExpress] , des :"Building RESTful APIs with middleware, routing, and JWT-based authentication."},
  { name: 'React', icons: [FaReact] , des :"Component architecture, hooks (useState, useEffect, useContext, useMemo), and performance optimization." },
  { name: 'Node JS', icons: [FaNodeJs] , des:"Server-side JavaScript, async/await, and connecting frontend with backend via REST APIs."},
  { name: 'Tailwind CSS', icons: [SiTailwindcss] , des:"Utility-first styling with responsive design and custom theming."},
  { name: 'Github', icons: [FaGithub] , des:"Remote repositories, push/pull workflows, SSH setup, and project collaboration"},
  { name: 'Git', icons: [FaGitAlt] , des:"Version control, branching, merging, and resolving merge conflicts via terminal"},
  { name: 'DSA', icons: [FaCode] , des:"120+ LeetCode problems solved covering Arrays, Strings, Linked Lists, Stacks, Queues, and Trees"},
  { name: 'Claude Code', icons: [RiClaudeLine] ,des:"Building AI-powered apps using Claude API with prompt engineering and structured outputs." }
]

export default function Skills() {
  return (
    <section id="skills">
      <div className='md:mt-8 max-w-[1200px] w-full mx-auto h-auto px-4'>
        <PageHeading className="text-center">Skills</PageHeading>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 justify-items-stretch z-0 '>
          {skills.map((item) => (
            <StrechedButton key={item.name} name={item.name} icons={item.icons} des={item.des} />
          ))}
        </div>
      </div>
    </section>
  )
}
