function Products({ products, filter = null}) {
    const filteredProducts = filter
        ? products.filter(product => product.category === filter)
        : products;

    return (
        <ul className="products">
            {filteredProducts.map((product) => (
                <li key={product.id} className="product-item">
                    <div className="product">
                        <img src={product.image} alt="product image" className="product-image" />
                        <span>{product.title}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Products;