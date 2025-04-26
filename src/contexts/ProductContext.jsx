import { createContext, useEffect } from "react";
import productsData from "../data/products";
import { useContext, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {

    const [products, setProducts] = useState(productsData);
   
    const [filteredProducts, setFilterProducts] = useState(productsData);

    const filterProducts = (search, filter) => {
        const filterProducts = products.filter((p) => {
            return (!filter || p.category === filter) && (!search || p.name.toLowerCase().includes(search.toLowerCase()));
        });
        setFilterProducts(filterProducts);
    };

    const highToLow = () => {
        setFilterProducts((prev)=>[...prev].sort((a, b) => b.price - a.price));
    };

    const lowToHigh = () => {
        setFilterProducts((prev)=>[...prev].sort((a, b) => a.price - b.price));
    };

    const updateRating = (id, rating) => {
        setFilterProducts((prev) => {
            return prev.map((p) => {
                if (p.id === id) {
                    return { ...p, rating: rating };
                }
                return p;
            });
        });
    };

    return (
        <ProductContext.Provider value={{ products, filteredProducts, filterProducts, highToLow, lowToHigh, updateRating }}>
            {children}
        </ProductContext.Provider>
    );
}



export const useProductContext = () => useContext(ProductContext);