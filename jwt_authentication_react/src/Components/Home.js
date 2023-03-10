import React, { useEffect, useState } from "react";
import UserService from "../Service/user.service";

const Home = () => {
  
    const [content, setContent] = useState("");

  useEffect(() => {

    //Publikus tartalom lekérése. Ezt bárki eléri bejelentkezés nélkül.
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );

}

export default Home;