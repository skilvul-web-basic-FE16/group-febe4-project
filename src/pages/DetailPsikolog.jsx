import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetailPsikolog = () => {
  const { id } = useParams();

  const [detailPsikolog, setDetailPsikolog] = useState([]);

  const getDetailPsikolog = async () => {
    try {
      let response = await axios.get("https://febe4-mswellbeing-backend-production.up.railway.app/psikolog");
      console.log();
      setDetailPsikolog(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetailPsikolog();
  }, []);

  return (
    <>
      <div className="container mb-5">
        <h2 className=" container border-bottom pb-2 fw-semibold my-5">Menthy</h2>
        <div className="row align-items-center justify-content-center p-2">
          <div className="col-sm-6">
            {detailPsikolog
              .filter((item) => item._id === id)
              .map((item) => {
                return (
                  <div key={item._id} className="card psikolog">
                    <img src={item.gambarURL} alt="" className="w-100 card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title fw-bold mb-4">{item.nama}</h3>
                      <div className="list-group list-group-flush">
                        <div className="d-flex align-items-center pb-3">
                          <box-icon type="solid" name="briefcase-alt-2"></box-icon>
                          <p className="list-group-item hapus-padding card-text">Spesialis {item.spesialis}</p>
                        </div>
                        <div className="d-flex align-items-center pb-3">
                          <box-icon name="time" type="solid"></box-icon>
                          <p className="list-group-item card-text hapus-padding"> {item.pengalaman}</p>
                        </div>
                        <div className="d-flex align-items-center pb-3">
                          <box-icon name="graduation" type="solid"></box-icon>
                          <p className="list-group-item card-text card-text hapus-padding">Alumnus {item.lulusan}</p>
                        </div>
                        <div className="d-flex align-items-center pb-3">
                          <box-icon name="city" type="solid"></box-icon>
                          <a href={item.lokasiURL} className="list-group-item hapus-padding card-tex fw-semibold">
                            {item.lokasi}
                          </a>
                        </div>
                        <br />
                        <a href={item.lokasiURL} className="btn btn-success btn-md mt-3">
                          Lihat di Map
                        </a>
                      </div>
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
export default DetailPsikolog;
