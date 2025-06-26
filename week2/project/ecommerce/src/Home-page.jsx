import { useEffect, useState } from "react";
import Products from "./Products.jsx";
import fetcher from "./data/fetcher.js";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingItems, setLoadingItems] = useState(true);

  // get  Categories
  useEffect(() => {
    setLoadingCategories(true);
    fetcher("https://fakestoreapi.com/products/categories")
      .then(data => setCategories(data))
      .catch(err => console.error("Error when getting categories:", err))
      .finally(() => setLoadingCategories(false));
  }, []);

  // get Items
  useEffect(() => {
    setLoadingItems(true);
    fetcher("https://fakestoreapi.com/products")
      .then(data => setAllItems(data))
      .catch(err => console.error("Error when getting Items:", err))
      .finally(() => setLoadingItems(false));
  }, []);

  const isLoading = loadingCategories || loadingItems;

  return (
    <>
      
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h1 className="cap">Products</h1>
          <div className="category-bar">
            <ul className="category-list">
              {categories.map((item, index) => {
                const isSelected = selectedCategory === item;

                return (
                  <li
                    key={index}
                    className={`category ${isSelected ? "selected" : ""}`}
                    onClick={() =>
                      setSelectedCategory(isSelected ? null : item)
                    }
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Products products={allItems} filter={selectedCategory} />
        </>
      )}
    </>
  );
}

export default HomePage;