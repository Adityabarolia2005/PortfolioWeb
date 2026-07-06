import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Description from './Description';

// Direction ke hisaab se variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',  // right ya left se aao
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',  // opposite side pe jaao
    opacity: 0,
  }),
};

const transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

function Slider({ items = [] }) {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  if (!items.length) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1); // direction decide karo
    setCurrent(index);
  };

  const item = items[current];

 return (
  <div className="w-full">
    <div className="w-full bg-white/10 rounded-2xl shadow-md backdrop-blur-sm p-6 flex flex-col min-h-[600px] sm:min-h-[450px] lg:min-h-[380px]">

      {/* Relative wrapper — absolute children ke liye */}
      <div className="flex-1 relative overflow-hidden">

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="absolute inset-0 flex flex-col"
            //          ↑
            //    poora space cover karega, overlap nahi hoga
          >
            {/* Logo + Heading */}
            <div className="flex items-center gap-3 mb-4">
              {item.logo && (
                <span className="text-3xl leading-none">{item.logo}</span>
              )}
              <h3 className="text-xl font-bold text-white leading-snug">
                {item.heading}
              </h3>
            </div>

            {/* Project tags */}
            {item.project && (
              <div className="flex flex-wrap gap-2 mb-5">
                {item.project.map((proj, idx) => (
                  <span key={idx} className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                    {proj}
                  </span>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="text-gray-200 text-sm leading-relaxed break-words">
              <Description>{item.desc}</Description>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dots — absolute wrapper ke bahar */}
      <div className="flex justify-center gap-2 pt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-6 bg-blue-500'
                : 'w-2 bg-gray-400/40 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

    </div>
  </div>
)
}
export default Slider