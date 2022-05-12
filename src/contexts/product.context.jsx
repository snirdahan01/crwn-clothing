import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../routes/shop/shop.data';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  );
};
