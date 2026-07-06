import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function ScrollProgress() {
  
  const scrollProgress = useMotionValue(0);

  // Step 2: Optional — spring lagao smooth feel ke liye
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 200,
    damping: 30,
  });

  // Step 3: 0-100 → "0%"-"100%" mein convert karo
  const width = useTransform(smoothProgress, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight <= 0) {
        scrollProgress.set(0);
        return;
      }

      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgress.set(Math.min(100, Math.max(0, progress)));
      //               ↑
      //         .set() method — useState ka setter nahi
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    //                                               ↑
    //                              performance optimization — browser
    //                              ko batao yeh scroll block nahi karega

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  // scrollProgress stable hai — dependency mein nahi chahiye

  return (
    <motion.div
      style={{ width }}
      //       ↑
      //  live wire — string nahi, motionValue directly
      className="fixed top-[72.8px] left-0 h-1 bg-btn-cta-bg z-40   shadow-[0_-1px_4px_rgba(255,255,255,0.8),0_-2px_10px_rgba(56,189,248,0.7)]"
      //         ↑ transition-[width] hata diya — Framer handle karega 
    />
  );
}

export default ScrollProgress;