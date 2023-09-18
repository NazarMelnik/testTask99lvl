import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sectionMotion, textLeftMotion, textRightMotion } from "../motion";

export default function Product() {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setBags(data);
      });
  }, []);

  return (
    <motion.section
      className="product-section"
      id="services"
      {...sectionMotion}>
      <div className="container">
        <motion.h2 className="section-title" {...textLeftMotion}>
          Our Products
        </motion.h2>
        <div className="product__wrapper">
          {bags.map((bag) => (
            <div className="product-item" key={bag.id}>
              <motion.img
                src={bag.image_url}
                alt={bag.name}
                className="product-img"
                width={250}
                height={300}
                {...textRightMotion}
              />
              <motion.h3 className="product-name" {...textLeftMotion}>
                {bag.name}
              </motion.h3>
              <motion.p className="product-description" {...textLeftMotion}>
                {bag.description}
              </motion.p>
              <motion.p className="product-price" {...textLeftMotion}>
                Price: ${bag.price}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
