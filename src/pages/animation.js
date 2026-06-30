export const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export const staggeredParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const staggeredChild = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
    },
  },
};

export const navAnimation ={
  hidden:{opacity:0 , X:-50},
  visible: {
    opacity:1,
    x:0,
    transition:{
      type:"spring",
      stiffness: 80,
      damping:20,
    },
  },
};
