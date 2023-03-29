import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
