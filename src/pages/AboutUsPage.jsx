import About from "../components/About";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Intro heading={"About Us"} description={"About FEBE 4"} />
      <h2 className="container border-bottom fw-semibold mt-5 text-center">FEBE 4</h2>
      <br />
      <br />
      <br />
      <About />
      <Footer />
    </div>
  );
};
export default AboutUs;
