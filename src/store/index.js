import create from "zustand";

export const cartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
  // removeFromCart:(id)=>set((state)=>)
}));

export const selectedSizeStore = create((set) => ({
  size: [],
  selectSize: (item) => set((state) => ({ size: [item, ...state.size] })),
}));
