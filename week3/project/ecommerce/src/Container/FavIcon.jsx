import React from 'react';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavIcon = ({ productId }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const isFavorite = favorites.includes(productId);

  const handleFavIcon = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  return (
    <img
      className="fav-icon"
      src={isFavorite ? heartSolid : heartRegular}
      onClick={handleFavIcon}
      alt="favorite-icon"
    />
  );
};

export default FavIcon;
