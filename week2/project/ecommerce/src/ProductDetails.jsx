import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetcher from "./data/fetcher.js"; 


function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher(`https://fakestoreapi.com/products/${id}`)
      .then(data => setProduct(data))
      .catch(err => console.error("Error when getting Product:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div>Product is not fined</div>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />
      <p>{product.description}</p>
      <Link to="/" className="back-link">Back</Link>
    </div>
  );
}

export default ProductDetails;