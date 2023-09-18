import { motion } from "framer-motion";

export default function Title() {
  return (
    <motion.section
      className="header-section"
      id="title"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      }}>
      <div className="container">
        <div className="header-section__wrapper">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}>
            HEY, HERE ARE THE BAGS OF YOUR DREAMS{" "}
          </motion.h2>
          <img src="/img/title.PNG" alt="" width={300} height={300} />
          <motion.h1
            className="header-slogan"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}>
            Wow look is a brand of stylish and practical eco-leather bags
          </motion.h1>
          <a href="#order" className="header-section-btn">
            Order
          </a>
        </div>
      </div>
    </motion.section>
  );
}
