import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Service/auth.service";

const Login = () => {

  let navigate = useNavigate();

  const form = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //Felhasználói név kiolvasása az input mezőből
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  //Jelszó kiolvasása az input mezőből
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);



    AuthService.login(username, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();


        setLoading(false);
        setMessage(resMessage + " Hibás felhasználói név vagy jelszó!");
      }
    );

  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src=""
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="username">Felhasználói név</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              required
              onChange={onChangeUsername}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Jelszó</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Bejelentkezés</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;