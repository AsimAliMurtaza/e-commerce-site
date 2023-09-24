import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utility.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const getCategoryMap = async ()=>{
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
    };
    getCategoryMap();
  },[]);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
