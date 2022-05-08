import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";

const App = ({ children }) => {
  const path = useLocation().pathname;
  React.useEffect(() => {
    console.log(path);
    switch (path) {
      case "/about":
        document.title = "KNG Tech | About us";
        break;

      case "/outsourcing":
        document.title = "KNG Tech | Outsourcing";
        break;

      case "/contact-us":
        document.title = "KNG Tech | Contact us";
        break;

      default:
        document.title = "KNG Tech | Agile and clean code development";
    }
  }, [path]);
  return (
    <div className="App" data-scroll-section>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default App;
