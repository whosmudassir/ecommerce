import create from "zustand";

const cartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
}));

export default cartStore;
