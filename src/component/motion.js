const sectionMotion = {
  initial: { opacity: 0, y: -20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const textLeftMotion = {
  initial: { opacity: 0, x: 20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const textRightMotion = {
  initial: { opacity: 0, x: -20 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
export { textLeftMotion, textRightMotion, sectionMotion };
