import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ProductContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    api
      .get()
      .then((resp) => setProducts(resp.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
console.log(products)
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
