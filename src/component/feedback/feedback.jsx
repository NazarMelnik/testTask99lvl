import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
export default function Feedback() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/feedback-reviews.json")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <motion.section
      className="feedback-section"
      id="feedback"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}>
          Feedback
        </motion.h2>
        <Slider {...settings} className="feedback-slider">
          {reviews.map((review, id) => (
            <div key={id} className="feedback-review">
              <div className="feedback__wrapper">
                <div className="feedback-person__wrapper">
                  <PersonIcon fontSize="large" />
                  <p className="feedback-person-name">{review.name}</p>
                </div>
                <motion.p
                  className="feedback-text"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}>
                  {review.text}
                </motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}
