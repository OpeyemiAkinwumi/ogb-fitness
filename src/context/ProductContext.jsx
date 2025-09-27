import { createContext, useState } from "react";

// Create the store
export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState("Beans");
  return (
    <ProductContext.Provider value={{ products: products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
