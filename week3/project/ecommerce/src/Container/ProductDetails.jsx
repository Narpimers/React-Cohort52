import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetcher from "../data/fetcher.js";
import NavBar from "./NavBar.jsx";

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetcher(`https://fakestoreapi.com/products/${id}`)
      .then(setLoading(true))
      .then(data => setProduct(data))
      .catch(err => {
        console.error("Error when receiving the product:", err);
        setError("Couldn't upload the product");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) {
    return (
      <div className="error">
        {error}
        <Link to="/" className="back-link">⬅️</Link>
      </div>
    );
  }
  if (!product) return <div>Product not found</div>;

  return (
    <>  
      <NavBar/>
      <div className="product-details">
        <h2>{product.title}</h2>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default ProductDetails;