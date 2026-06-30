import React, { useEffect, useState } from 'react';
import Description from './Description';

function Slider({ items = [] }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const interval = setInterval(() => {
      // Pehle fade out
      setVisible(false);
      // Phir slide change karke fade in
      setTimeout(() => {
        setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
        setVisible(true);
      }, 400);
    }, 10000);
    return () => clearInterval(interval);
  }, [items]);

  const goTo = (index) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 400);
  };

  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No data available.</p>;
  }

  const item = items[current];

 return (
    <div className="w-full">
      <div className="w-full bg-white/10 rounded-2xl shadow-md backdrop-blur-sm p-6 flex flex-col" style={{minHeight: '420px'}}>

        {/* Sirf active slide — fade in/out */}
        <div
          className="flex-1" 
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            {item.logo && (
              <span className="text-3xl leading-none">{item.logo}</span>
            )}
            <h3 className="text-xl font-bold text-white leading-snug">
              {item.heading}
            </h3>
          </div>

          {/* Project Tags */}
          {item.project && (
            <div className="flex flex-wrap gap-2 mb-5">
              {item.project.map((proj, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                >
                  {proj}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="text-gray-200 text-sm leading-relaxed break-words">
            <Description>{item.desc}</Description>
          </div>
        </div>

        {/* Dots — mt-auto se hamesha bottom pe rahega */}
        <div className="flex justify-center gap-2 mt-auto pt-6 text-center ">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-6 bg-blue-500'
                  : 'w-2 bg-gray-400/40 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
  export default Slider