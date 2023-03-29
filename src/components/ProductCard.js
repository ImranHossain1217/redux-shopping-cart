import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const { id, image, title, price } = product;
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link to={`details/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h4>{title}</h4>
      <h5>Price: ${price}</h5>
      <button className="btn" onClick={() => dispatch(addToCart(product))}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
