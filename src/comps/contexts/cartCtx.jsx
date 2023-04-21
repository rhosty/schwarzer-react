//create a shopping cat context
import React, { createContext } from "react";

export const CartContext = createContext({
    cartItems: [],
});

//create a provider for the shopping cart context
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = React.useState([]);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
}