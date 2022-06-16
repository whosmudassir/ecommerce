import create from "zustand";

const store = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => [item, ...state.cart]),
}));
