import React, { useRef, useState } from "react";
import AuthService from "../Service/auth.service";


const Register = () => {

  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  //Felhasználói név kiolvasása az input mezőből
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  //Email cím kiolvasása az input mezőből
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  //Jelszó kiolvasása az input mezőből
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);



    AuthService.register(username, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
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

        <form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Felhasználói név</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Emailcím</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Jelszó</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Regisztrálok</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;