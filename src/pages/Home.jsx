/* eslint-disable no-unused-vars */
import AboutSection from "../components/AboutSection";
import HeroSlider from "../components/HeroSlider";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Careers from "../components/Careers";

function Home() {
  return (
    <div className="h-full snap-y lg:snap-mandatory overflow-y-scroll ">
      <HeroSlider />
      <AboutSection />
      <Testimonials/>
      <Blog />
      <Careers/>
      <Footer />
    </div>
  );
}

export default Home;
