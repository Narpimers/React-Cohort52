import React, { useState } from 'react';
import useFetch from '../assets/hooks/useFetch'; 
import Products from './Products.jsx';
import Categories from './Categories.jsx';
import NavBar from './NavBar.jsx';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { data: categories, loading: loadingCategories, error: errorCategories } = useFetch("https://fakestoreapi.com/products/categories");

  const { data: allItems, loading: loadingItems, error: errorItems } = useFetch("https://fakestoreapi.com/products");

  const isLoading = loadingCategories || loadingItems;
  const error = errorCategories || errorItems;

  const filteredItems = selectedCategory
    ? (allItems || []).filter(item => item.category === selectedCategory)
    : (allItems || []);

  if (error) {
    return <div className="error">Data upload error: {error.message || String(error)}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="title-container">
            <h1 className="cap">Products</h1>
            <NavBar/>
          </div>
          <Categories
            categories={categories || []}
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