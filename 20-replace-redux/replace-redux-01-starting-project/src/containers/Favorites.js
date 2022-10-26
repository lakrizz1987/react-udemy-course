import React, { useContext } from 'react';


import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../contexts/ProductsContext';
import './Products.css';

const Favorites = props => {
  const {productList} = useContext(ProductsContext);

  const favoriteProducts = productList.filter(p => p.isFavorite)
  
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
