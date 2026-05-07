import { create } from "zustand";
import type { CartItem } from "../types/cart_item.type";

export interface CartStore {
  items: CartItem[];
  addCartItem: (newItem: CartItem) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
  removeCartItem: (itemId: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addCartItem: (newItem: CartItem) => {
    set((state) => ({
      items: [
        ...state.items,
        newItem
      ]
    }));
  },
  updateCartItemQuantity: (itemId: string, newQuantity: number) => {
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    }));
  },
  removeCartItem: (itemId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId)
    }));
  }
}));