import React from "react";
import "./Product.css";
const Prodect = (props) => {
  let { image, title, price, details, count } = props; //object destructuring!
  return (
    props.count && (
      <div className="container">
        <img src={image} alt="" />
        <div className="title">{title}</div>
        <div className="price">{price}</div>
        <div className="details">{details}</div>
        <div className="buy">
          <button>buy</button>
        </div>
      </div>
    )
  );
};

// const Prodect = ({ image, title, price, details, count } ) => {
//   return (
//     props.count && (
//       <div className="container">
//         <img src={image} alt="" />
//         <div className="title">{title}</div>
//         <div className="price">{price}</div>
//         <div className="details">{details}</div>
//         <div className="buy">
//           <button>buy</button>
//         </div>
//       </div>
//     )
//   );
// };

export default Prodect;
