import Navbar from "../components/navbar";
import HomeHero from "../components/heros/homeHero";
// import Stats from "../components/stats";
import FeaturedCourses from "../components/featuredCourses";
import About from "../components/about";
import Instructors from "../components/instructors";
import Community from "../components/community";
import CTA from "../components/cat";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <HomeHero />
      {/* <Stats /> */}
      <FeaturedCourses />
      <About />
      <Instructors />
      <Community />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
