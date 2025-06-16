import categories from "./fake-data/all-categories.js";
import AllProducts from "./all-products.jsx";
import allItems from "./fake-data/all-products.js";
import { useState } from "react";

function CategoryBar({ items, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-bar">
      <ul className="category-list">
        {items.map((bar, index) => (
          <li key={index} className="category"
            onClick={() => {
              const cleanCategory = bar.replace(/^FAKE:\s*/, "");
              onSelectCategory(selectedCategory === cleanCategory ? null : cleanCategory);
            }}>{bar}</li>
        ))}
      </ul>
    </div>
  );
}

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <h1>Products</h1>
      <CategoryBar items={categories} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <AllProducts products={allItems} filter={selectedCategory} />
    </>
  );
}

export default Navbar;