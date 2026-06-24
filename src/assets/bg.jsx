// import { useEffect, useRef } from "react";

// /* ============================================================
//    COPY EVERYTHING BELOW, DOWN TO "END COPY", INTO ITS OWN FILE —
//    e.g. src/components/PremiumSpaceBackground.jsx
//    ============================================================ */

// const LAYERS = [
//   { count: 130, size: [0.5, 1.2], drift: 6, parallax: 14, alpha: [0.15, 0.5], glow: 0 },
//   { count: 55, size: [1, 2], drift: 14, parallax: 28, alpha: [0.35, 0.8], glow: 3 },
//   { count: 18, size: [1.6, 3], drift: 26, parallax: 46, alpha: [0.6, 1], glow: 8 },
// ];

// const STAR_CORE = "255,255,255"; // dots are always pure white
// const STAR_GLOW = "120,180,255"; // halo around them stays blue

// function rand(min, max) {
//   return Math.random() * (max - min) + min;
// }

// export function PremiumSpaceBackground({ children, className = "" }) {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 }); // normalized -1..1, smoothed
//   const targetMouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     let width = 0;
//     let height = 0;
//     let dpr = Math.min(window.devicePixelRatio || 1, 2);

//     function resize() {
//       width = canvas.clientWidth;
//       height = canvas.clientHeight;
//       canvas.width = width * dpr;
//       canvas.height = height * dpr;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     }
//     resize();
//     window.addEventListener("resize", resize);

//     // Build star field — positions stored as 0..1 fractions of viewport,
//     // converted to pixels each frame so resize never breaks layout.
//     const stars = LAYERS.flatMap((layer, layerIndex) =>
//       Array.from({ length: layer.count }, () => ({
//         fx: Math.random(),
//         fy: Math.random(),
//         r: rand(layer.size[0], layer.size[1]),
//         alpha: rand(layer.alpha[0], layer.alpha[1]),
//         twinkleSpeed: rand(0.4, 1.4),
//         twinklePhase: rand(0, Math.PI * 2),
//         layerIndex,
//       }))
//     );

//     const driftAngle = (-28 * Math.PI) / 180; // gentle up-right drift direction
//     const driftDirX = Math.cos(driftAngle);
//     const driftDirY = Math.sin(driftAngle);

//     let comets = [];
//     let nextCometAt = rand(1.5, 4);
//     let elapsed = 0;
//     let lastTime = performance.now();
//     let rafId;

//     function spawnComet() {
//       const startX = rand(width * 0.05, width * 0.75);
//       const startY = rand(-30, height * 0.25);
//       const angle = (rand(125, 145) * Math.PI) / 180;
//       const speed = rand(650, 950);
//       comets.push({
//         x: startX,
//         y: startY,
//         vx: Math.cos(angle) * speed,
//         vy: Math.sin(angle) * speed,
//         trail: [],
//         life: 0,
//         maxLife: rand(0.9, 1.4),
//       });
//     }

//     function onMouseMove(e) {
//       targetMouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       targetMouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
//     }
//     if (!prefersReducedMotion) window.addEventListener("mousemove", onMouseMove);

//     function draw(now) {
//       const dt = Math.min((now - lastTime) / 1000, 0.05);
//       lastTime = now;
//       elapsed += dt;

//       // Smooth (lerp) the mouse so parallax feels fluid, not jittery
//       const m = mouseRef.current;
//       const tm = targetMouseRef.current;
//       m.x += (tm.x - m.x) * 0.04;
//       m.y += (tm.y - m.y) * 0.04;

//       ctx.clearRect(0, 0, width, height);

//       // Stars
//       for (const s of stars) {
//         const layer = LAYERS[s.layerIndex];
//         const driftDist = prefersReducedMotion ? 0 : elapsed * layer.drift;
//         const px =
//           (((s.fx * width + driftDist * driftDirX + m.x * layer.parallax) % width) +
//             width) %
//           width;
//         const py =
//           (((s.fy * height + driftDist * driftDirY * 0.4 + m.y * layer.parallax) %
//             height) +
//             height) %
//           height;

//         const twinkle = prefersReducedMotion
//           ? 1
//           : 0.7 + 0.3 * Math.sin(elapsed * s.twinkleSpeed + s.twinklePhase);
//         const a = Math.min(1, s.alpha * twinkle);

//         if (layer.glow > 0) {
//           ctx.shadowBlur = layer.glow;
//           ctx.shadowColor = `rgba(${STAR_GLOW},${a})`;
//         } else {
//           ctx.shadowBlur = 0;
//         }
//         ctx.beginPath();
//         ctx.arc(px, py, s.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${STAR_CORE},${a})`;
//         ctx.fill();
//       }
//       ctx.shadowBlur = 0;

//       // Shooting stars
//       if (!prefersReducedMotion) {
//         if (elapsed > nextCometAt && comets.length < 2) {
//           spawnComet();
//           nextCometAt = elapsed + rand(2.5, 5.5);
//         }

//         comets.forEach((c) => {
//           c.life += dt;
//           c.x += c.vx * dt;
//           c.y += c.vy * dt;
//           c.trail.push({ x: c.x, y: c.y });
//           if (c.trail.length > 16) c.trail.shift();

//           const fade = Math.max(0, 1 - c.life / c.maxLife);
//           for (let i = 1; i < c.trail.length; i++) {
//             const p0 = c.trail[i - 1];
//             const p1 = c.trail[i];
//             const segAlpha = (i / c.trail.length) * fade;
//             ctx.beginPath();
//             ctx.moveTo(p0.x, p0.y);
//             ctx.lineTo(p1.x, p1.y);
//             ctx.strokeStyle = `rgba(220,235,255,${segAlpha})`;
//             ctx.lineWidth = 1.6 * (i / c.trail.length);
//             ctx.stroke();
//           }
//           ctx.shadowBlur = 12;
//           ctx.shadowColor = "rgba(220,235,255,0.9)";
//           ctx.beginPath();
//           ctx.arc(c.x, c.y, 1.6, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255,255,255,${fade})`;
//           ctx.fill();
//           ctx.shadowBlur = 0;
//         });

//         comets = comets.filter(
//           (c) => c.life < c.maxLife && c.x < width + 100 && c.y < height + 100
//         );
//       }

//       rafId = requestAnimationFrame(draw);
//     }

//     rafId = requestAnimationFrame(draw);

//     return () => {
//       cancelAnimationFrame(rafId);
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", onMouseMove);
//     };
//   }, []);

//   return (
//     <div className={`relative w-full overflow-hidden bg-[#04030a] ${className}`}>
//       {/* Drifting nebula clouds */}
//       <div className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen">
//         <div className="nebula nebula-a absolute -left-1/4 -top-1/4 h-[60vw] w-[60vw] rounded-full bg-blue-700/25 blur-[100px]" />
//         <div className="nebula nebula-b absolute -right-1/4 top-0 h-[55vw] w-[55vw] rounded-full bg-indigo-600/20 blur-[110px]" />
//         <div className="nebula nebula-c absolute bottom-[-20%] left-1/4 h-[45vw] w-[45vw] rounded-full bg-cyan-500/15 blur-[100px]" />
//       </div>

//       {/* Glow orb with ring */}
//       <div className="pointer-events-none absolute left-[48%] top-[12%] -translate-x-1/2">
//         <div className="orb-pulse h-24 w-24 rounded-full bg-linear-to-br from-white via-sky-300 to-blue-600 shadow-[0_0_70px_24px_rgba(56,189,248,0.5)]" />
//         <div className="orb-ring absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/25" />
//       </div>

//       {/* Star + comet canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

//       {/* Vignette for focus / depth */}
//       <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />

//       {/* Film grain for premium texture */}
//       <svg className="hidden">
//         <filter id="grainFilter">
//           <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
//         </filter>
//       </svg>
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
//         style={{ filter: "url(#grainFilter)" }}
//       />

//       <div className="relative z-10">{children}</div>

//       <style>{`
//         @keyframes nebulaDriftA {
//           0%, 100% { transform: translate(0,0) scale(1); }
//           50%      { transform: translate(4%, 6%) scale(1.08); }
//         }
//         @keyframes nebulaDriftB {
//           0%, 100% { transform: translate(0,0) scale(1); }
//           50%      { transform: translate(-5%, 4%) scale(1.05); }
//         }
//         @keyframes nebulaDriftC {
//           0%, 100% { transform: translate(0,0) scale(1); }
//           50%      { transform: translate(3%, -5%) scale(1.1); }
//         }
//         .nebula-a { animation: nebulaDriftA 26s ease-in-out infinite; }
//         .nebula-b { animation: nebulaDriftB 32s ease-in-out infinite; }
//         .nebula-c { animation: nebulaDriftC 38s ease-in-out infinite; }

//         .orb-pulse { animation: orbPulse 4.5s ease-in-out infinite; }
//         @keyframes orbPulse {
//           0%, 100% { filter: brightness(1); transform: scale(1); }
//           50%      { filter: brightness(1.25); transform: scale(1.06); }
//         }
//         .orb-ring { animation: ringSpin 50s linear infinite; }
//         @keyframes ringSpin {
//           from { transform: translate(-50%,-50%) rotate(0deg) scaleY(0.55); }
//           to   { transform: translate(-50%,-50%) rotate(360deg) scaleY(0.55); }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .nebula-a, .nebula-b, .nebula-c, .orb-pulse, .orb-ring {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// /* ======================= END COPY ======================= */

// export default function PremiumHeroDemo({ children }) {
//   return (
//     <PremiumSpaceBackground className="min-h-screen text-white">
//       {children}
//     </PremiumSpaceBackground>
//   );
// }
