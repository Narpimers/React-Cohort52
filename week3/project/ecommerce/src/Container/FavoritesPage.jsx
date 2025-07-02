import React, { useContext } from 'react';
import useFetch from '../assets/hooks/useFetch'; 
import NavBar from './NavBar';
import Products from './Products';
import { FavoritesContext } from '../Context/FavoritesContext';

const Favorites = () => {
  const [favorites] = useContext(FavoritesContext);

  const { data: allItems, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (error) {
    return <div className="error">Error loading 'products': {error.message || String(error)}</div>;
  }

  const favoriteItems = (allItems || []).filter(item => favorites.includes(item.id));

  return (
    <div>
      <div className="title-container">
        <h1 className="cap">Favorites</h1>
        <NavBar />
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : favoriteItems.length > 0 ? (
        <Products products={favoriteItems} />
      ) : (
        <p className="no-favorites">You haven't chosen any favorites yet!</p>
      )}
    </div>
  );
};

export default Favorites;