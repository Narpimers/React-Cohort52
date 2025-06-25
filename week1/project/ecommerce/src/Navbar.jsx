import categories from "./fake-data/all-categories.js";
import Products from "./Products.jsx";
import allItems from "./fake-data/all-products.js";
import { useState } from "react";

function CategoryBar({ items, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-bar">
      <ul className="category-list">
        {items.map((item, index) => {
          const cleanCategory = item.replace(/^FAKE:\s*/, "");
          const isSelected = selectedCategory === cleanCategory;

          return (
            <li
              key={index}
              className={`category ${isSelected ? "selected" : ""}`}
              onClick={() =>
                onSelectCategory(isSelected ? null : cleanCategory)
              }
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <CategoryBar items={categories} onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Products products={allItems} filter={selectedCategory} />
    </>
  );
}

export default ProductPage;