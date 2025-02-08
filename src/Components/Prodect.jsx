import React from "react";
import "./Product.css";
const Prodect = (props) => {
  return (
    <div className="container">
      <img src={props.image} alt="" />
      <div className="title">{props.title}</div>
      <div className="price">{props.price}</div>
      <div className="details">{props.details}</div>
      <div className="buy">
        <button>buy</button>
      </div>
    </div>
  );
};

export default Prodect;
