import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";

const Home = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery();

  return (
    <div className="home-container">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <p>An error occurred...</p>
      ) : (
        <>
          <h2>All Products</h2>
          <div className="products">
            {data.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">{product.price}</span>
                </div>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
