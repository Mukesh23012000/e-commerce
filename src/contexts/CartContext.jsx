import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}){

    const [cart,setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
      });

    const addToCart = (value) =>{
        setCart((prev) => {
            const exists = prev.find((p) => p.id === value.id);
            return !exists ? [...prev, { ...value, quantity: 1 }] : [...prev.map((p) => p.id === value.id ? { ...p, quantity: p.quantity + 1 } : p)];
        });
    }

    const removeFromCart = (value) => {
        
        setCart((prev) => {
            const exists = prev.find((p) => p.id === value.id && p.quantity > 1);
            return exists ? prev.map((p) => p.id === value.id ? { ...p, quantity: p.quantity - 1 } : p) : prev.filter((p) => p.id !== value.id);
        });
    }

    const clearCart = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => useContext(CartContext);