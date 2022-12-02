import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLoginUser } from "../redux/users/usersAction";
import "./Navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const dataLogin = useSelector((state) => state.users);
  // console.log(dataLogin);
  const dispatch = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    dispatch(getLoginUser());
  }, []);

  window.addEventListener("scroll", changeColor);
  return (
    <nav
      className={
        color
          ? "navbar navbar-expand-lg fixed-top navbar-dark nav-bg"
          : "navbar navbar-expand-lg fixed-top navbar-dark"
      }
    >
      <div className="container">
        <Link className="navbar-brand fw-bold color-success fs-4" to={"/"}>
          Menthy.
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center align-items-center">
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 fw-semibold"
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 fw-semibold"
                to={"/article"}
              >
                Article
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 fw-semibold"
                to={"/psikolog"}
              >
                Psikolog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active mx-1 fw-semibold"
                to={"/aboutUs"}
              >
                About Us
              </Link>
            </li>
            {dataLogin?.email ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-success  mx-1  fw-semibold text-white">
                    dataLogin?.email
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link  btn  mx-1  fw-semibold"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-success  mx-1  fw-semibold text-white"
                    to={"/registrasi"}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
