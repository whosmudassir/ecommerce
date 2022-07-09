import create from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
}));

export default useStore;
