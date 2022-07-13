import create from "zustand";

export const cartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [item, ...state.cart] })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => {
        return cartItem.id !== id;
      }),
    })),
}));

export const selectedSizeStore = create((set) => ({
  size: [],
  selectSize: (item) => set((state) => ({ size: [item, ...state.size] })),
}));

export const isAlertVisible = create((set) => ({
  alert: false,
  showAlert: () => set((state) => ({ alert: true })),
  hideAlert: () => set((state) => ({ alert: false })),
}));
