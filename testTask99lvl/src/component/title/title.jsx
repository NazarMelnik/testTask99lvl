export default function Title() {
  return (
    <section className="header-section" id="title">
      <div className="container">
        <div className="header-section__wrapper">
          <h2 className="section-title">
            HEY, HERE ARE THE BAGS OF YOUR DREAMS{" "}
          </h2>
          <img
            src="../../../public/img/title.PNG"
            alt=""
            width={300}
            height={300}
          />
          <h1 className="header-slogan">
            Wow look is a brand of stylish and practical eco-leather bags
          </h1>
          <a href="#services" className="header-section-btn">
            Order
          </a>
        </div>
      </div>
    </section>
  );
}
