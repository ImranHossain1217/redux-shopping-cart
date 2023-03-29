import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const [product, setproduct] = useState({});
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  });
  return (
    <div className="product-details">
      <img src={product.image} alt="" />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>
          Description: <br /> {product.description}
        </p>
        <h5>Price: {product.price}</h5>
        <button className="btn" onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
