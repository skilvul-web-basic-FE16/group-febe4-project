import aboutUs from "./dataAbout";
import AboutCard from "./AboutCard";
import "./About.css";

const About = () => {
  return (
    <div className="d-flex align-items-center py-lg-0 py-">
      <div className="container mb-5">
        {aboutUs.map((item, index) => {
          return <AboutCard key={index} role={item.role} nama={item.nama} description={item.description} linkCV={item.linkCV} posisi={item.posisi} foto={item.foto} />;
        })}
      </div>
    </div>
  );
};

export default About;
