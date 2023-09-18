import Form from "../form/form";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import NavigationIcon from "@mui/icons-material/Navigation";
export default function Contact() {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}>
          Any questions left?
        </motion.h2>
        <motion.ul
          className="contact__wrapper"
          initial={{ opacity: 0, x: 10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}>
          <li className="contact-item">
            <a href="mailto:wowlook@gmail.com">
              <EmailIcon fontSize="large" />
              wowlook@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <a href="tel:0733202223">
              <LocalPhoneIcon fontSize="large" />
              0733202223
            </a>
          </li>
          <li className="contact-item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%93%D0%BE%D0%B3%D0%BE%D0%BB%D1%8F,+62,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/data=!4m2!3m1!1s0x40d4c3e0c65d71d5:0x9184f7ef5a1c99da?sa=X&ved=2ahUKEwj7jIeW7qyBAxXDhv0HHaDQCEcQ8gF6BAgPEAA&ved=2ahUKEwj7jIeW7qyBAxXDhv0HHaDQCEcQ8gF6BAgSEAI">
              <NavigationIcon fontSize="large" />
              Kiev,Gogol`a 62
            </a>
          </li>
        </motion.ul>
      </div>
      <Form />
    </motion.section>
  );
}
