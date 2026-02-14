import React, { createContext, useContext, useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("kfd_cart");
    return saved ? JSON.parse(saved) : {};
  });
  const [food_list_data, setFoodList] = useState(food_list);
  const [loading, setLoading] = useState(false);

  // Try to fetch food from API (fallback to local)
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch(`${API_URL}/api/food`);
        if (res.ok) {
          const apiFood = await res.json();
          // Merge API data with local images (API has name/price/category, we need image from assets)
          const foodWithImages = apiFood.map((item) => {
            const local = food_list.find((f) => f._id === item._id);
            return { ...item, image: local?.image || item.image };
          });
          if (foodWithImages.length > 0) setFoodList(foodWithImages);
        }
      } catch {
        // Use local food_list from assets
      }
    };
    fetchFood();
  }, []);

  useEffect(() => {
    localStorage.setItem("kfd_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const next = { ...prev };
      if (next[itemId] <= 1) delete next[itemId];
      else next[itemId]--;
      return next;
    });
  };

  const clearCart = () => setCartItems({});

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [id, qty]) => {
      const item = food_list_data.find((f) => f._id === id);
      return total + (item?.price || 0) * qty;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        food_list: food_list_data,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        url: API_URL,
        getTotalCartAmount,
        getTotalCartItems,
        loading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
