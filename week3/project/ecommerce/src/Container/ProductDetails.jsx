import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import FavButton from "./FavButton.jsx";
import useFetch from "../assets/hooks/useFetch.jsx";

function ProductDetails() {
  const { id } = useParams(); 


  const {data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`)

  if (loading) return <div className="loading">Loading...</div>;
  if (error) {
    return (
      <div className="error">
        <p>Product not found.</p>
        <p>{error.message}</p>
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
        <FavButton productId={product.id} />
      </div>
    </>
  );
}

export default ProductDetails;