import { create } from "zustand";
import type { CartItem } from "../types/cart_item.type";

export interface CartStore {
  items: CartItem[];
  totalItems: number;
  addCartItem: (newItem: CartItem) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
  removeCartItem: (itemId: string) => void;
}

const calculateItemTotal = (items: CartItem[]) => {
  let total = 0;
  items.forEach((item) => total += item.quantity);
  return total;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  addCartItem: (newItem: CartItem) => {
    set((state) => ({
      items: [
        ...state.items,
        newItem
      ],
      totalItems: calculateItemTotal([...state.items, newItem])
    }));
  },
  updateCartItemQuantity: (itemId: string, newQuantity: number) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
      // I hate this but whatever
      totalItems: calculateItemTotal(state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      }))
    }));
  },
  removeCartItem: (itemId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
      totalItems: calculateItemTotal(state.items.filter((item) => item.id !== itemId))
    }));
  }
}));