import React, { createContext, useEffect, useState } from "react";
import { products } from '../assets/assets/assets';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Universal Variables
  const currency = '$';

  const [allProducts] = useState(products);

  const [menClothing, setMenClothing] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);
  const [childrenClothing, setChildrenClothing] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  const [categories, setCategories] = useState([]);

  // Filter products and update state
  useEffect(() => {
    const men = products.filter(item => item.category.toLowerCase() === 'men');
    const women = products.filter(item => item.category.toLowerCase() === 'women');
    const kids = products.filter(item => item.category.toLowerCase() === 'kids');
    const best = products.filter(item => item.bestseller);

    setMenClothing(men);
    setWomenClothing(women);
    setChildrenClothing(kids);
    setBestSellers(best);

    // Update categories
    const updatedCategories = [
      { name: 'Men', length: men.length, products: men },
      { name: 'Women', length: women.length, products: women },
      { name: 'Children', length: kids.length, products: kids },
      { name: 'Best Sellers', length: best.length, products: best },
    ];
    setCategories(updatedCategories);

  }, []); // Empty dependency array since products are static

  return (
    <ShopContext.Provider value={{
      currency,
      allProducts,
      menClothing,
      womenClothing,
      childrenClothing,
      bestSellers,
      categories,
    }}>
      {children}
    </ShopContext.Provider>
  );
};

