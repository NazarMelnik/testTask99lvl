import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" },
      }}>
      <div className="container">
        <motion.h2
          className="section-title about-title"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}>
          About us
        </motion.h2>
        <div className="about-section__wrapper">
          <img src="/img/1.jpg" alt="image" width={280} height={280} />
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}>
            <p>
              ` Wow look is a brand of stylish and practical bags made of eco
              leather Wow look (stylish image, "Wow, look") the bag is just an
              addition image, therefore, when buying a bag, the client receives
              not just an image, but stylish image. We are made to complement
              and make any image is brighter. Our bags are very spacious, they
              will fit everyone your everyday things and even more We are for
              environmental friendliness, that's why we use only eco materials.
              Our mission is the maximum the pleasure of our little ones even
              before you touch them What do we put in every order? Of course,
              love
            </p>
            You can do it with us find exactly that dream bag that will make the
            bow wow, and we, in turn, we will surprise you with good packaging
            and quality service. Choose yours a perfect model and want to
            conquer this world 🪄 With love to each client{" "}
            <p>
              We are for environmental friendliness, that's why we use only eco
              materials. Our mission is the maximum the pleasure of our little
              ones even before you touch them What do we put in every order? Of
              course, love
            </p>
            You can do it with us find exactly that dream bag that will make the
            bow wow, and we, in turn, we will surprise you with good packaging
            and quality service. Choose yours a perfect model and want to
            conquer this world 🪄 With love to each client`
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
