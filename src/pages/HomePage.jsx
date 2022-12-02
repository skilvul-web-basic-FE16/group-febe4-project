import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import AboutUsCard from "../components/AboutUsCard";
import Intro from "../components/Intro";
import Layanan from "../components/Layanan";
import PsikologCard from "../components/PsikologCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recomendationPsikolog, setRecomendationPsikolog] = useState([]);
  const [newArticle, setNewArticle] = useState([]);

  // get recomendation psikolog
  const getRecomendationPsikolog = async () => {
    try {
      let response = await axios.get("https://menthy.herokuapp.com/psikolog");
      setRecomendationPsikolog(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRecomendationPsikolog();
  }, []);

  // get new article
  const getNewArticle = async () => {
    try {
      let response = await axios.get("https://menthy.herokuapp.com/article/new=true");
      setNewArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getNewArticle();
  }, []);

  return (
    <>
      <Navbar />
      <Intro heading={"Wellcome to Menthy"} description={"Partner Kesehatan Mentalmu"} />
      <br />
      <br />
      <br />
      <h2 className="container border-bottom pb-2 fw-semibold mt-5 mb-3 text-center">Why Choose Us?</h2>
      <Layanan />
      <br />
      <br />
      <br />
      <h2 className="container border-bottom pb-2 fw-semibold mt-5 mb-3 text-center">Layanan Kami</h2>

      <div className="container mt-5 mb-3">
        <div className="d-flex align-items-center justify-content-between semua">
          <h5 className="container fw-semibold p-0">Article Terbaru</h5>
          <Link to={"/article"}>Semua</Link>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {newArticle.map((item, index) => {
            return <Card key={index} id={item._id} imgURL={item.imgURL} title={item.title} genre={item.genre} description={item.description} text={item.text} />;
          })}
        </div>
      </div>
      <div className="container mt-5 mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="container fw-semibold p-0">Rekomendasi Psikolog</h5>
          <Link to={"/psikolog"}>Semua</Link>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {recomendationPsikolog.map((item, index) => {
            return <PsikologCard key={index} id={item._id} gambarURL={item.gambarURL} nama={item.nama} pengalaman={item.pengalaman} spesialis={item.spesialis} />;
          })}
        </div>
      </div>
      <h5 className="container fw-semibold mt-5 mb-3 p-0">About Us</h5>
      <AboutUsCard />
      <Footer />
    </>
  );
};
export default HomePage;
