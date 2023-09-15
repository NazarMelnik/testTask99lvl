import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [burger, setBurger] = useState(true);
  const burgerMenuRef = useRef(null);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (
        !burger &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setBurger(!burger);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [burger]);

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <a href="#">
            <img
              src="../../public/img/logo.jpg"
              alt=""
              width={250}
              height={120}
            />
          </a>
          <ul
            className={
              !burger ? "header-nav-items burger--items" : "header-nav-items"
            }>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
          <div
            ref={burgerMenuRef}
            className={burger ? "burger-menu" : "burger-menu open"}
            onClick={toggleBurger}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>
    </header>
  );
}
