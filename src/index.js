import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import OutsourcingPage from "./pages/OutsourcingPage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/outsourcing" element={<OutsourcingPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact-us" element={<ContactUsPage />}></Route>
        <Route
          path="*"
          element={<Link to="/" children={<button>Go home</button>} />}
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
