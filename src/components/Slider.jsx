import React, { useEffect, useState } from 'react';
import Description from './Description';

function Slider({ items = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [items]);

  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
      {/* CRITICAL OUTER CONTAINER: 
        Must have overflow-hidden, w-full, and relative positioning 
        to cut off sliding elements cleanly.
      */}
      <div className="relative overflow-hidden w-full bg-white/10 rounded-2xl shadow-md p-6 backdrop-blur-sm">
        
        {/* SLIDES TRACK: 
          Forced to stay exactly w-full. The translation calculations work flawlessly 
          when the parent container provides absolute structural boundaries.
        */}
        <div
          className="flex w-full transition-transform duration-700 ease-in-out gap-6"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              /* THE SQUASH & BLEED FIX:
                - 'w-full min-w-full max-w-full': Tells flex box it can NOT shrink or grow past 100%.
                - 'box-border': Ensures padding doesn't push width out.
              */
              className="w-full min-w-full max-w-full flex-shrink-0 block box-border"
            >
              {/* Header block with uniform spacing */}
              <div className="flex items-center gap-3 mb-4">
                {item.logo && <span className="text-3xl leading-none">{item.logo}</span>}
                <h3 className="text-xl font-bold text-white leading-snug">{item.heading}</h3>
              </div>

              {/* Project Tags */}
              {item.project && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {item.project.map((proj, idx) => (
                    <span key={idx} className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                      {proj}
                    </span>
                  ))}
                </div>
              )}

              {/* Content text section with break-words to handle structural text overflow */}
              <div className="text-gray-200 text-sm leading-relaxed pr-4 break-words">
                <Description>{item.desc}</Description>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current ? 'w-6 bg-blue-500' : 'w-2 bg-gray-400/40 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Slider;