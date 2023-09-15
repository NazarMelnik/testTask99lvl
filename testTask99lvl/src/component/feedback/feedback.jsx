import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  };
  return (
    <section className="feedback-section" id="feedback">
      <div className="container">
        <h2 className="section-title">Feedback</h2>
        <Slider {...settings} className="feedback-slider">
          {reviews.map((review, id) => (
            <div key={id} className="feedback-review">
              <div className="feedback__wrapper">
                <div className="feedback-person__wrapper">
                  <PersonIcon fontSize="large" />
                  <p className="feedback-person-name">{review.name}</p>
                </div>
                <p className="feedback-text">{review.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
