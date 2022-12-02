import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticleListPage = () => {
  const [allArticle, setAllArticle] = useState([]);

  // get all article
  const getAllArticle = async () => {
    try {
      let response = await axios.get("https://febe4-mswellbeing-backend-production.up.railway.app/article");
      setAllArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAllArticle();
  }, []);

  return (
    <>
      <Navbar />
      <Intro heading={"Article"} description={"Baca Article Kami untuk Membantu Kesehatan Mentalmu"} />
      <h2 className=" container border-bottom pb-2 fw-semibold mt-5 mb-3 text-center">Articles</h2>
      <div className="container mb-5">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {allArticle.map((item, index) => {
            return <Card key={index} id={item._id} imgURL={item.imgURL} title={item.title} genre={item.genre} description={item.description} text={item.text} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ArticleListPage;
