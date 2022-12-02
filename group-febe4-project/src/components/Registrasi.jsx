import React, { useEffect, useState } from "react";
import "../components/Registrasi.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchUsers } from "../redux/users/usersAction";
import { registrasi } from "../redux/users/usersAction";
import { connect } from "react-redux";

function Registrasi({ fetchUsers, addUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noHp, setNoHp] = useState("");
  const [error, setError] = useState("");
  const role = "user";

  const navigation = useNavigate();

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const registrasiHandle = (e) => {
    e.preventDefault();
    console.table(name, email, password, noHp, role);
    addUsers({ name, email, noHp, password, role });
    if (!name || !email || !password || !noHp) {
      setError("please input all input Field");
    } else {
      navigation("/Login");
      setError("");
    }
    setName("");
    setEmail("");
    setPassword("");
    setNoHp("");
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
          <div className="card shadow-sm">
            <div className="form-box login-form p-5">
              <div className="form-title">
                <h2 className="fw-bold h1 text-center mb-3">Sign Up</h2>
                <h6 className="card-subtitle text-center text-muted mb-5 fw-bold">
                  Selamat Datang Kembali !!!
                </h6>
              </div>
              <form id="form">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    required
                    className="form-control form-control-sm"
                    placeholder="Username"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    required
                    className="form-control form-control-sm"
                    placeholder="Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    required
                    className="form-control form-control-sm"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="">Password</label>
                </div>
                <div className="form-floating mb-5">
                  <input
                    type="text"
                    required
                    className="form-control form-control-sm"
                    placeholder="No Hp"
                    id="NoHP"
                    value={noHp}
                    onChange={(e) => setNoHp(e.target.value)}
                  />
                  <label htmlFor="">NoHp</label>
                </div>
                <div className="mb-3 text-center">
                  <button
                    id="btn"
                    className="btn btn-success w-100 text-white fw-bold"
                    onClick={(e) => registrasiHandle(e)}
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className=" text-center">
                <span>Sudah Punya Akun ?</span>
                <button className="p-0 border-0 bg-transparent primaryColor">
                  <Link className="links" to="/Login">
                    Login Sekarang
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
    addUsers: (input) => dispatch(registrasi(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Registrasi);
