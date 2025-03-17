import { ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image?: string;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: number, change: number) => void;
  getCartCount: () => number;
  removeFromCart: (id: number) => void;
}

export const CartContext: React.Context<CartContextType | undefined>;

export interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider(props: CartProviderProps): JSX.Element;
export function useCart(): CartContextType;