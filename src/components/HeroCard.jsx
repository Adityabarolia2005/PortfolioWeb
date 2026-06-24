import styles from './HeroCard.module.css'
function HeroCard() {
    const subheading = "I am Full Stack Developer"
    const des = "MERN stack developer building scalable web apps with clean code and great user experiences."
    
    return (
    <div className='flex  w-[782.075px] m-auto h-[450.0 px] mt-23' id="home">
    
  <div className='flex-1 '>
    <div className=' w-64 space-y-3'>

      <p style={{ height: 'var(--front-script-height)' }} className='bg-[#0e0e42] w-full text-center rounded-md'>
        
        <span  className='text-[#a6c1ee] ' >const</span>
        <span  className='text-[#fbc2eb]'> dev</span>
        <span  className='text-white'>= {'{'}</span>
        <span  className='text-[#a6c1ee]'> Stack</span>
        <span  className='text-white'>:</span>
        <span  className='text-[#fbc2eb]'> "MERN"</span>
        <span className='text-white'> {'}'}</span>
      </p>
      <div className={`${styles["bigHeadline"]} font-heading space-y-2`}>
        <p >Aditya </p><p>Barolia</p>
      </div>
      <p className={`${styles["smallHeadline"]} font-heading`}>
        <span className='text-3xl text-white'>"</span>{subheading}<span className='text-3xl'>"</span>
      </p>
      <p className="text-xl text-[rgb(84, 170, 209)] font-desc">
        {des}
      </p>
    </div>
  </div>
    
  <div className='flex-1 flex  justify-center'>
    <img src="" alt="" className='w-72 h-72  rounded-full border-4 border-[#a6c1ee] object-cover my-20' />
  </div>
</div>
  )
}

export default HeroCard