import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, change: number) => void;
  getCartCount: () => number;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (newItem: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prevItems, newItem];
    });
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, getCartCount, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};