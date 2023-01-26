import React from "react";
import AuthService from "../Service/auth.service";

const Profile = () => {



  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Üdvözlünk <strong>{currentUser.username}</strong>
        </h3>
      </header>
      <p>
        <strong>Jwt token:</strong> {currentUser.accessToken}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email cím:</strong> {currentUser.email}
      </p>
      <strong>Szerepkörök:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );

};

export default Profile;