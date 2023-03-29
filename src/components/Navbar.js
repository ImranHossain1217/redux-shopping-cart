import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartItem);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Redux Shopping Store</h2>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="cartCount">{getTotalQuantity() || 0}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
