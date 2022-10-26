import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ]);

  const toggleFavorite = (id) => {
    setProductList(oldState => {
      const findIndex = oldState.findIndex(x=>x.id === id);
      const newFavStatus = !oldState[findIndex].isFavorite;
      const updatedProducts = [...oldState];
      updatedProducts[findIndex]={
        ...oldState[findIndex],
        isFavorite:newFavStatus
      }
      return updatedProducts;
    });
  };

  const value = {productList,
    toggleFavorite
  }

  return <ProductsContext.Provider value={value}>{props.children}</ProductsContext.Provider>
}

export default ProductsProvider;