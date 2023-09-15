import About from "./component/about/about";
import Contact from "./component/contact/contant";
import Feedback from "./component/feedback/feedback";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Product from "./component/product/product";
import Title from "./component/title/title";

function App() {
  return (
    <>
      <Header />
      <Title />
      <About />
      <Product />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
