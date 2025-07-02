import { useEffect, useState } from "react";
import Products from "./Products.jsx";
import Categories from "./Categories.jsx";
import fetcher from "../data/fetcher.js";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingItems, setLoadingItems] = useState(true);

  useEffect(() => {
    setLoadingCategories(true);
    fetcher("https://fakestoreapi.com/products/categories")
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to fetch categories:", err))
      .finally(() => setLoadingCategories(false));
  }, []);

  useEffect(() => {
    setLoadingItems(true);
    fetcher("https://fakestoreapi.com/products")
      .then(data => setAllItems(data))
      .catch(err => console.error("Failed to fetch items:", err))
      .finally(() => setLoadingItems(false));
  }, []);

  const isLoading = loadingCategories || loadingItems;

  const filteredItems = selectedCategory
    ? allItems.filter(item => item.category === selectedCategory)
    : allItems;

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h1 className="cap">Products</h1>
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <Products products={filteredItems} />
        </>
      )}
    </>
  );
}

export default HomePage;