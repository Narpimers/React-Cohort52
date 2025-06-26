import { Link } from "react-router-dom";

function Products({ products, filter = null }) {
  const filteredProducts = filter
    ? products.filter(product => product.category === filter)
    : products;

  return (
    <ul className="products">
      {filteredProducts.map(product => (
        <li key={product.id} className="product-item">
          <div className="product">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </Link>
            <span>{product.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Products;