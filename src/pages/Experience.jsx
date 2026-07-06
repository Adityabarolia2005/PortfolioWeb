import { useEffect, useRef } from "react";
import Slider from "../components/Slider";
import PageHeading from "../components/PageHeading";

export default function Experience() {
  useEffect(() => {
    const element = document.querySelectorAll(".dataSlider");
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry)=>{
          if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
          entry.target.classList.remove("fadeLeft");
          observer.unobserve(entry.target);
        }
        }) 
      },
      { threshold: 0.15 }
    );
    element.forEach((ele)=>{observer.observe(ele);});
    
    return () => observer.disconnect();
  }, []);

  const experienceData = [
    {
      logo: "🏆",
      heading: "Smart India Hackathon",
      desc: (
        <ol className="list-decimal pl-5 space-y-2 text-gray-300">
          <li>Collaborated with a multidisciplinary team to conceptualize and develop an immersive E-Forest VR platform along with an intelligent herbal tracking system proposed for the Ministry of Ayush.</li>
          <li>Contributed to designing intuitive user interfaces and interactive experiences that effectively bridged the gap between hardware visualization, data representation, and end-user accessibility.</li>
          <li>Worked closely with teammates to understand problem statements, brainstorm innovative solutions, and translate ideas into functional prototypes within strict hackathon timelines.</li>
          <li>Assisted in integrating frontend interfaces with system modules to provide real-time visualization and seamless user interaction for the proposed solution.</li>
          <li>Participated in requirement analysis, presentation preparation, and solution demonstration, strengthening teamwork, problem-solving, and project development skills in a high-pressure competitive environment.</li>
        </ol>
      ),
    },
    {
      logo: "💻",
      heading: "Frontend Developer Intern – Primebook",
      desc: (
        <ol className="list-decimal pl-5 space-y-2 text-gray-300">
          <li>Developed reusable and scalable React components, improving code maintainability and reducing development time across multiple projects.</li>
          <li>Implemented efficient state management techniques to ensure seamless data flow and a better user experience.</li>
          <li>Optimized application performance through component reusability, code splitting, lazy loading, and rendering optimizations, resulting in faster page load times and improved responsiveness.</li>
          <li>Worked extensively with modern React, and frontend development best practices while gaining practical industry experience in debugging, version control, code reviews, and collaborative software development workflows.</li>
          <li>Working on the company's new website and contributing to the frontend and the backend also.</li>
        </ol>
      ),
      project: ["UI Component Library", "Performance Optimization", "State Management"],
    },
  ];

  // ✅ return function ke ANDAR hai variants={fadeInAnimation} whileInView="visible" viewport={{once:true , amount:0.1}} initial="hidden" 
  return (
    <section
      className="  mt-8 flex flex-col max-w-[1200px] w-full mx-auto justify-center overflow-hidden px-4 scroll-mt-[80px]"
      id="Experience"
    >
      <PageHeading className="text-center mb-6 px-4">Experience</PageHeading>
      <div className="w-full dataSlider fadeLeft" >
        <Slider items={experienceData} />
      </div>
    </section>
  );

} // ✅