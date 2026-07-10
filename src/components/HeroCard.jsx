import { useEffect, useRef } from 'react'
import styles from './HeroCard.module.css'

function HeroCard() {
  const subheading = "I am Full Stack Developer"
  const des = "MERN stack developer building scalable web apps with clean code and great user experiences."
  const parentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const parent = entries[0];
        if(parent.isIntersecting) {
        const boxes = parentRef.current.querySelectorAll('.stagger-box');
        boxes.forEach((box, index) =>{
          box.style.transitionDelay = `${index * 0.15}s`; 
          box.classList.add('show-box');
        });

      }
    }, { threshold: 0.1 });

    if (parentRef.current) {
      observer.observe(parentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={parentRef} className='flex flex-col text-center items-center hero:text-start md:flex-row max-w-[1200px] mx-auto h-auto md:min-h-[calc(100vh-80px)] mt-20 p-4 gap-10 md:gap-12' id="home">
      <div className='flex-1'>
        <div className='max-w-full space-y-3'>
          <div className='space-y-3'>
            <p
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className='stagger-box h-front-script-height bg-code-bg rounded-md font-mono text-md sm:text-base border border-white/5 mx-4'
            >
              <span>
                <span className='text-primary font-bold'>const</span>
                <span className='text-secondary'> dev</span>
                <span className='text-white'>= {'{'}</span>
                <span className='text-primary'> Stack</span>
                <span className='text-white'>:</span>
                <span className='text-secondary'> "MERN"</span>
                <span className='text-white'> {'}'}</span>
              </span>
            </p>

            <div className={`stagger-box ${styles.bigHeadline} font-heading space-y-2`}>
              <h1>Aditya</h1>
              <h1>Barolia</h1>
            </div>

            <p className={`stagger-box ${styles.smallHeadline} font-heading`}>
              <span className='text-3xl text-theme-highlight'>"</span>
              {subheading}
              <span className='text-3xl text-theme-highlight'>"</span>
            </p>

            <p className='stagger-box text-base sm:text-lg text-theme-secondary font-desc leading-relaxed'>
              {des}
            </p>

            <div className='stagger-box w-auto inline-block border text-md text-[rgb(56,253,1)] bg-[rgb(56,253,1)]/10 shadow-sm rounded-4xl px-4 py-2'>
              Available for Work
            </div>
          </div>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-start mt-8 md:mt-0'>
        <img
          src='\Image\Profile Photo.png'
          alt='Profile'
          className='stagger-box w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-primary object-cover shadow-2xl shadow-primary/20'
        />
      </div>
    </div>
  )
}

export default HeroCard