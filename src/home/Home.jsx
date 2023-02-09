import React from "react";
import Product from "../products/Product";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
            alt=""
            className="home__image"
          />

          <div className="home_row">
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home_row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
