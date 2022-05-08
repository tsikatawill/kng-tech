import React from "react";
import App from "../App";
import HomepageHeader from "../components/HomepageHeader";
import RecentWorkSection from "../components/RecentWorkSection";
import ServicesSection from "../components/ServicesSection";

const Homepage = () => {
  return (
    <App>
      <HomepageHeader />
      <ServicesSection />
      <RecentWorkSection />
    </App>
  );
};

export default Homepage;
