import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-success pt-5">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-1 justify-content-between">
          <div className="col col-lg-6 mb-lg-0 mb-4">
            <h2 className="fw-bold text-white mb-3 ">Menthy</h2>
            <p className="text-white-50">Wellcome to Menthy, Partner Kesehatan Mentalmu</p>
          </div>
          <div className="col col-lg-2 d-flex flex-column mb-lg-0 mb-4">
            <h5 className="fw-bold text-white">Menus</h5>
            <Link to={"/"} className="text-white-50 mt-3 text-decoration-none">
              Home
            </Link>
            <Link to={"/article"} className="text-white-50 mt-3 text-decoration-none">
              Article
            </Link>
            <Link to={"/psikolog"} className="text-white-50 mt-3 text-decoration-none">
              Psikolog
            </Link>
            <Link to={"/aboutUs"} className="text-white-50 mt-3 text-decoration-none">
              About Us
            </Link>
            <Link to={"/login"} className="text-white-50 mt-3 text-decoration-none">
              Login
            </Link>
            <Link to={"/signup"} className="text-white-50 mt-3 text-decoration-none">
              Sign Up
            </Link>
          </div>
          <div className="col col-lg-2 d-flex flex-column">
            <h5 className="fw-bold text-white mb-3">Others</h5>
            <p className="text-white-50 text-decoration-none">Sumatera, Jawa, Sulawesi, Indonesia</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text-white text-center mt-5 pt-5">Menthy &copy; Copyright 2022 by FEBE4, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
