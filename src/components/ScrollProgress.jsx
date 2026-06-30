import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function ScrollProgress() {
  // Step 1: MotionValue — 0 to 100
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
      className="fixed top-20 left-0 h-1 bg-btn-cta-bg z-50"
      //         ↑ transition-[width] hata diya — Framer handle karega
    />
  );
}

export default ScrollProgress;