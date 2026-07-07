// export function setupFadeOnScroll(selector, options = {}) {
//   const { threshold = 0.3, rootMargin = "0px 0px -3% 0px" } = options;
//   const elements = document.querySelectorAll(selector);

//   if (!elements.length) {
//     return () => {};
//   }

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const target = entry.target;

//         if (entry.isIntersecting) {
//           target.classList.remove("fadeOut");
//           target.classList.add("fadeIn");
//         }
//       });
//     },
//     { threshold, rootMargin }
//   );

//   elements.forEach((element) => observer.observe(element));

//   return () => observer.disconnect();
// }


