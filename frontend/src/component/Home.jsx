import React from "react";
import { useGetAllProductsQuery } from "../features/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const { items: product, status } = useSelector((state) => state.product);
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

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
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
