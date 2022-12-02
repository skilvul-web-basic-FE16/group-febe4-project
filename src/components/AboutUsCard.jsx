import { Link } from "react-router-dom";

const PopularCard = () => {
  return (
    <section className="d-flex align-items-center py-lg-0 py-5">
      <div className="container mb-5">
        <div className="row justify-content-around align-items-center g-5 g-lg-0">
          <div className="foto2 col-lg-6 order-lg-1 order-1 g-5 px-2">
            <img className="w-100 rounded-4 px-3" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className="col-lg-6 order-lg-2 order-2 g-5 text-about">
            <p className="mb-1">About Us</p>
            <h1 className="mb-3">FEBE 4</h1>
            <p className="mb-4">
              FEBE 4 adalah group yang dibentuk dari group FE 16 dan BE 4. FEBE 4 mengambil Challange Partner MS Wellbeing Center. MS Wellbeing Center adalah sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja &
              anak melalui berbagai layanan konseling dan terapi. MS Wellbeing Center juga mempunyai layanan tumbuh kembang psikologi anak dan anak-anak dengan kebutuhan khusus.
            </p>
            <Link to={"aboutUs"} className="btn btn-success btn-md">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularCard;
