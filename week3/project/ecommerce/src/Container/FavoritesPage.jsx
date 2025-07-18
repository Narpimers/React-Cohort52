import React, { useContext, useState, useEffect } from 'react';
import useFetch from '../assets/hooks/useFetch'; 
import NavBar from './NavBar';
import Products from './Products';
import { FavoritesContext } from '../Context/FavoritesContext';

const Favorites = () => {
  const [content, setContent] = useState(null);
  const [favorites] = useContext(FavoritesContext);
  const { data: allItems, loading, error } = useFetch('https://fakestoreapi.com/products');

  useEffect(() => {
    if (error) {
      setContent(<div className="error">Error loading 'products': {error.message || String(error)}</div>);
    } else if (loading) {
      setContent(<div className="loading">Loading...</div>);
    } else {
      const favoriteItems = (allItems || []).filter(item => favorites.includes(item.id));
      if (favoriteItems.length > 0) {
        setContent(<Products products={favoriteItems} />);
      } else {
        setContent(<p className="no-favorites">You haven't chosen any favorites yet!</p>);
      }
    }
  }, [loading, error, allItems, favorites]);

  return (
    <div>
      <div className="title-container">
        <h1 className="cap">Favorites</h1>
        <NavBar />
      </div>
      {content}
    </div>
  );
};

export default Favorites;