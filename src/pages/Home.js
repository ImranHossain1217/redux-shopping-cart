import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <img
        className="home-banner"
        src="https://www.visitdubai.com/-/media/images/leisure/itinerary-images/shopping/dubai-shopping-scene-hero.jpg"
        alt="banner-img"
      />
      <div className="product-container">
        <h3 className="product-title">Our Products</h3>
        <Products />
      </div>
    </div>
  );
};

export default Home;
