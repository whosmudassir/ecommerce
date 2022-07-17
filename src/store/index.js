import create from "zustand";

//backend to store user data of previous order
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

//size selection
export const selectedSizeStore = create((set) => ({
  size: [],
  selectSize: (item) => set((state) => ({ size: [item, ...state.size] })),
}));

//alert component trigger
export const isAlertVisible = create((set) => ({
  alert: false,
  showAlert: () => set((state) => ({ alert: true })),
  hideAlert: () => set((state) => ({ alert: false })),
}));

export const alertTextStore = create((set) => ({
  alertText: "",
  setAlertText: (text) => set((state) => ({ alertText: text })),
}));

//backend user specific store
export const wishlistStore = create((set) => ({
  wishlist: [],
  addToWishlist: (item) =>
    set((state) => ({ wishlist: [item, ...state.wishlist] })),
  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((cartItem) => {
        return cartItem.id !== id;
      }),
    })),
}));

//card expanded id
export const setExpandedCard = create((set) => ({
  expandedCardId: "",
  setExpandedCardId: (id) => set((state) => ({ expandedCardId: id })),
}));

//card grand total
export const cartGrandTotalStore = create((set) => ({
  cartGrandTotal: 0,
  setCartGrandTotal: (price) => set((state) => ({ cartGrandTotal: price })),
  increaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal + price })),
  decreaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal - price })),
}));
