//create a shopping cat context
import React, { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
});

//create a provider for the shopping cart context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const value = { cartItems, setCartItems };
    

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}