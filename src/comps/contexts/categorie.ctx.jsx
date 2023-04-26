// create category context
import React, { createContext } from "react";
import { useState } from "react";

export const CategoryContext = createContext({
    categories: [],
    setCategories: () => {},
});

//create a provider for the category context
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const value = { categories, setCategories };
    

    return (
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    );
}