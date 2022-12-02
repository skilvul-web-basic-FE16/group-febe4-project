import React, { useState, useEffect } from "react";
// import "../components/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers, GetUsersLogin } from "../redux/users/usersAction";
import { connect } from "react-redux";

function Login({ getUsers }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const dispatch = useDispatch();
  const navigation = useNavigate();
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const role = window.localStorage.getItem("user");
  // const output = JSON.parse(role);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    getUsers({ email, password });
    if (!email || !password) {
      setError("please input all input Field");
    } else {
      navigation(`/`);
      setError("");
    }
  };
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar mb-0 h1">
            <b>Menthy</b>
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center align-items-center inner-row">
          <div className="col-md-5 col-md-7">
            <div className="form-box login-form p-5">
              <div className="form-title">
                <h2 className="fw-bold mb-3">Login</h2>
                <h6 className="card-subtitle text-muted mb-5 fw-bold">
                  Selamat Datang Kembali !!!
                </h6>
              </div>
              <form id="form" action="">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-sm"
                    placeholder="EMail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="">Password</label>
                </div>
                <div className="mt-3">
                  <button
                    className="btn primaryBg text-white"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <span>Belum Punya Akun ?</span>
                <button className="p-0 border-0 bg-transparent primaryColor">
                  <Link className="link-signup" to="/registrasi">
                    Sign Up
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    getUsers: (input) => dispatch(GetUsersLogin(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
