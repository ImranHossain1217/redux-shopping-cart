import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItem);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h3 className="cart-title"> Your Shopping Cart</h3>
      {products.length === 0 && (
        <Link to="/">
          <p>Continue shopping...</p>
        </Link>
      )}
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.quantity}</h5>
            <h5>${product.price}</h5>
            <button
              className="btn"
              onClick={() => dispatch(removeFromCart(product))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
