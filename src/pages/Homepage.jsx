import React from "react";
import App from "../App";
import HomepageHeader from "../components/HomepageHeader";
import RecentWorkSection from "../components/RecentWorkSection";
import ServicesSection from "../components/ServicesSection";
import WorkShowcaseSection from "../components/WorkShowcaseSection";

const Homepage = () => {
  return (
    <App>
      <HomepageHeader />
      <ServicesSection />
      <RecentWorkSection />
      <WorkShowcaseSection />
    </App>
  );
};

export default Homepage;
