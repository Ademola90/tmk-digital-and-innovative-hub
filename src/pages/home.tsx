// src/pages/home.tsx

import Navbar from "../components/navbar";
import HomeHero from "../components/heros/homeHero";
import FeaturedCourses from "../components/featuredCourses";
import Footer from "../components/footer";
import { useEffect } from "react";
import StatsSection from "../components/sections/StatsSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import SuccessStoriesGrid from "../components/SuccessStoriesGrid";
import CTABanner from "../components/sections/CTABanner";
import { successStories } from "../data/successStoriesData";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HomeHero />
      <StatsSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <SuccessStoriesGrid stories={successStories} />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Home;
