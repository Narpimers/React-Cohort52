import React from "react";

function Categories({ categories, selectedCategory, onSelectCategory }) {
    if (!categories.length) {
    return <p className="error">No categories found.</p>;
  }

  return (
    <div className="category-bar">
      <ul className="category-list">
        {categories.map((item, index) => {
          const isSelected = selectedCategory === item;
          return (
            <li
              key={index}
              className={`category ${isSelected ? "selected" : ""}`}
              onClick={() => onSelectCategory(isSelected ? null : item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;