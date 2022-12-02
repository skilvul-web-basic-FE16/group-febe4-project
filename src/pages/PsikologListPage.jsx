import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PsikologCard from "../components/PsikologCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PsikologListPage = () => {
  const [allPsikolog, setAllPsikolog] = useState([]);

  // get all psikolog
  const getAllPsikolog = async () => {
    try {
      let response = await axios.get("https://febe4-mswellbeing-backend-production.up.railway.app/psikolog");
      setAllPsikolog(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAllPsikolog();
  }, []);

  return (
    <div>
      <Navbar />
      <Intro heading={"Psikolog"} description={"Temui Psikolog Terpercaya Kami"} />
      <div className="container mb-5">
        <h2 className=" container border-bottom pb-2 fw-semibold mt-5 mb-3 text-center">Psikolog</h2>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
          {allPsikolog.map((item, index) => {
            return <PsikologCard key={index} id={item._id} gambarURL={item.gambarURL} nama={item.nama} pengalaman={item.pengalaman} lulusan={item.lulusan} lokasi={item.lokasi} lokasiURL={item.lokasiURL} spesialis={item.spesialis} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PsikologListPage;
