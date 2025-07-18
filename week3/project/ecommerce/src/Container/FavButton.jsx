import React from 'react';
import heartRegular from '../assets/heart-regular.svg';
import heartSolid from '../assets/heart-solid.svg';
import { useContext } from 'react';
import { FavoritesContext } from '../Context/FavoritesContext';

const FavButton = ({ productId }) => {
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
    <button onClick={handleFavIcon} className="fav-button">
      <img        
        src={isFavorite ? heartSolid : heartRegular}
        alt="fav-button"
      />
    </button>
  );
};

export default FavButton;
