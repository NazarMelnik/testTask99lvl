import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: -60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
      }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}>
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
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}
              />
              <motion.h3
                className="product-name"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}>
                {bag.name}
              </motion.h3>
              <motion.p
                className="product-description"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}>
                {bag.description}
              </motion.p>
              <motion.p
                className="product-price"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }}>
                Price: ${bag.price}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
