import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          deleniti!
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product_rating">☆☆☆</div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1603219527847-24c87f552a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGJhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
        alt=""
        className="product-image"
      />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
