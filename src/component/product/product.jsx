import { useEffect, useState } from "react";

export default function Product() {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        setBags(data);
      });
  }, [bags]);

  return (
    <section className="product-section" id="services">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="product__wrapper">
          {bags.map((bag) => (
            <div className="product-item" key={bag.id}>
              <img
                src={bag.image_url}
                alt={bag.name}
                className="product-img"
                width={250}
                height={300}
              />
              <h3 className="product-name">{bag.name}</h3>
              <p className="product-description">{bag.description}</p>
              <p className="product-price">Price: ${bag.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
