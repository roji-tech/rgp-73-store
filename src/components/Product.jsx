import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";
import AnimatedButton from "./AnimatedButton";
import ThreeDText from "./ThreeDText";

import "../css/product.css";

const Product = ({ items }) => {
  const { productId } = useParams();
  const item = items.find((product) => product.id == productId);

  return (
    <div className="item-div">
      <div className="item shadow">
        <div className="item-img-div">
          <img src={item.image} className="item-img" alt={item.name} />
        </div>
        <div className="item-detail shadow">
          <ThreeDText className="item-name custom-title" text={item.name}/>
          {/* <h3 className="item-name custom-title threeDee">{item.name}</h3> */}
          <p className="item-desc">{item.description}</p>
          <p className="item-price">#{item.price}</p>
          <div className="item-order">
            <AnimatedButton bgcolor={"rgb(250, 67, 0)"} text={"Add to Cart"} />
            <AnimatedButton text={"Order Now"} />
          </div>
        </div>
      </div>
      <div className="backToProducts">
        <Button text={"View More"} />
      </div>
    </div>
  );
};

export default Product;
