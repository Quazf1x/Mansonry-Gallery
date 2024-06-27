const mansonryGridVariants = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    transition: { delay: 0.75, duration: 1 },
    x: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
    x: 150,
  },
};

const modalVariants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export { mansonryGridVariants, modalVariants };
