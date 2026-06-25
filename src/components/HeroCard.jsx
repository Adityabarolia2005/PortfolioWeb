import styles from './HeroCard.module.css'
function HeroCard() {
    const subheading = "I am Full Stack Developer"
    const des = "MERN stack developer building scalable web apps with clean code and great user experiences."
    
    return (
    <div className='flex flex-col text-center hero:text-start md:flex-row max-w-[1200px] mx-auto h-auto md:h-auto mt-20 p-4 gap-10 md:gap-12' id="home">
    
      <div className='flex-1'>
        <div className='max-w-full space-y-3'>

          <p style={{ height: 'var(--front-script-height)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='bg-code-bg w-full rounded-md font-mono text-sm sm:text-base border border-white/5 '>
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

          <div className={`${styles.bigHeadline} font-heading space-y-2`}>
            <p>Aditya</p>
            <p>Barolia</p>
          </div>

          <p className={`${styles.smallHeadline} font-heading`}>
            <span className='text-3xl text-theme-highlight'>"</span>
            {subheading}
            <span className='text-3xl text-theme-highlight'>"</span>
          </p>

          <p className='text-base sm:text-lg text-theme-secondary font-desc leading-relaxed'>
            {des}
          </p>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center mt-8 md:mt-0'>
        <img src='' alt='Profile' className='w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-primary object-cover shadow-2xl shadow-primary/20' />
      </div>
    </div>
  )
}

export default HeroCard
