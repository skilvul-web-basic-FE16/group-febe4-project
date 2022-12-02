import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailArticle = () => {
  const { id } = useParams();

  const [detailArticle, setDetailArticle] = useState([]);

  const getDetailArticle = async () => {
    try {
      let response = await axios.get("https://menthy.herokuapp.com/article");
      console.log();
      setDetailArticle(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetailArticle();
  }, []);

  return (
    <>
      <div className="container pb-5 px-3">
        <h2 className=" container border-bottom pb-2 fw-semibold mt-5 mb-3">Article</h2>
        <div className="row">
          <div className="col">
            {detailArticle
              .filter((item) => item._id === id)
              .map((item) => {
                return (
                  <div key={item._id} className="mt-5">
                    <p>{item.genre}</p>
                    <h1 className="mt-3 mb-4">{item.title}</h1>
                    <div>
                      <img src={item.imgURL} alt="" className="card-img-top mb-5 mt-3" />
                      <h6 className="fw-semibold mb-3 fs-5 fst-italic">{item.description}</h6>
                      <p className="lh-lg text">{item.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailArticle;
