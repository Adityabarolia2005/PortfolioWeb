import styles from './HeroCard.module.css'
import { staggeredChild, staggeredParent } from '../pages/animation'
import { motion } from 'framer-motion'

function HeroCard() {
  const subheading = "I am Full Stack Developer"
  const des = "MERN stack developer building scalable web apps with clean code and great user experiences."

  return (
    <div className='flex flex-col text-center hero:text-start md:flex-row max-w-[1200px] mx-auto h-auto md:h-screen mt-20 p-4 gap-10 md:gap-12' id="home">

      <div className='flex-1'>
        <div className='max-w-full space-y-3'>

          {/* ✅ Parent — yahan stagger container lagaya */}
          <motion.div
            variants={staggeredParent}
            initial="hidden"
            animate="visible"
          >

            {/* Child 1 — code snippet */}
            <motion.p
              variants={staggeredChild}
              style={{ height: 'var(--front-script-height)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className='bg-code-bg w-full rounded-md font-mono text-sm sm:text-base border border-white/5'
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
            </motion.p>

            {/* Child 2 — Name */}
            <motion.div
              variants={staggeredChild}
              className={`${styles.bigHeadline} font-heading space-y-2`}
            >
              <h1>Aditya</h1>
              <h1>Barolia</h1>
            </motion.div>

            {/* Child 3 — Subheading */}
            <motion.p
              variants={staggeredChild}
              className={`${styles.smallHeadline} font-heading`}
            >
              <span className='text-3xl text-theme-highlight'>"</span>
              {subheading}
              <span className='text-3xl text-theme-highlight'>"</span>
            </motion.p>

            {/* Child 4 — Description */}
            <motion.p
              variants={staggeredChild}
              className='text-base sm:text-lg text-theme-secondary font-desc leading-relaxed'
            >
              {des}
            </motion.p>

          </motion.div>
          {/* ✅ Parent end */}

        </div>
      </div>

      {/* Profile image — alag animation, stagger se bahar */}
      <motion.div
        className='flex-1 flex justify-center items-center mt-8 md:mt-0'
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      >
        <img
          src=''
          alt='Profile'
          className='w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-primary object-cover shadow-2xl shadow-primary/20'
        />
      </motion.div>

    </div>
  )
}

export default HeroCard