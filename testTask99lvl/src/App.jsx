import { useEffect, useState } from "react";
import About from "./component/about/about";
import Contact from "./component/contact/contant";
import CookieBanner from "./component/cookiebanner/cookieBanner";
import Feedback from "./component/feedback/feedback";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Product from "./component/product/product";
import Title from "./component/title/title";

function App() {
  const [cookie, setCookie] = useState([]);
  useEffect(() => {
    setCookie(true);
  }, []);
  return (
    <>
      <Header />
      <Title />
      <About />
      <Product />
      <Feedback />
      <Contact />
      <Footer />
      <CookieBanner show={cookie} />
    </>
  );
}

export default App;
