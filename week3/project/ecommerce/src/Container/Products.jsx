import { Link } from "react-router-dom";
import FavButton from "./FavButton";

function Products({ products = [] }) {

  if (!products.length) {
    return <p className="error">No products found.</p>;
  }
  
  return (
    <ul className="products">
      {products.map(product => (
        <li key={product.id} className="product-item">
          <div className="product">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </Link>
            <FavButton productId={product.id} />
            <span>{product.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;