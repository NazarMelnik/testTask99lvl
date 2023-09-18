import { motion } from "framer-motion";
import { sectionMotion, textLeftMotion } from "../motion";
export default function Title() {
  return (
    <motion.section className="header-section" id="title" {...sectionMotion}>
      <div className="container">
        <div className="header-section__wrapper">
          <motion.h2 className="section-title" {...textLeftMotion}>
            HEY, HERE ARE THE BAGS OF YOUR DREAMS{" "}
          </motion.h2>
          <img src="/img/title.PNG" alt="" width={300} height={300} />
          <motion.h1 className="header-slogan" {...textLeftMotion}>
            Wow look is a brand of stylish and practical eco-leather bags
          </motion.h1>
          <motion.a
            href="#order"
            className="header-section-btn"
            {...textLeftMotion}>
            Order
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
