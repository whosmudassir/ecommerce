import create from "zustand";

interface IIsAlertVisible {
  alert: boolean;
  showAlert: () => void;
  hideAlert: () => void;
}

interface IAlertTextStore {
  alertText: string;
  setAlertText: () => void;
}

interface ICartStore {
  cart: any;
  addToCart: () => void;
  removeFromCart: () => void;
}

interface ISelectedSizeStore {
  size: any;
  selectSize: () => void;
}

interface IWishlistStore {
  wishlist: any;
  addToWishlist: () => void;
  removeFromWishlist: () => void;
}

interface ISetExpandedCard {
  expandedCardId: string;
  setExpandedCardId: () => void;
}

interface ICartGrandTotalStore {
  cartGrandTotal: any;
  setCartGrandTotal: () => void;
  increaseCartGrandTotal: () => void;
  decreaseCartGrandTotal: () => void;
}

interface ITotalWithTaxesStore {
  totalWithTaxes: any;
  setTotalWithTaxes: () => void;
}

interface IProductListStore {
  productList: any;
  addToProductList: () => void;
}

interface IAddressFormStore {
  formValues: any;
  submitIsTriggered: any;
  setFormValues: () => void;
  setSubmitIsTriggered: () => void;
}

//backend to store user data of previous order
export const cartStore = create<ICartStore>((set) => ({
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
export const selectedSizeStore = create<ISelectedSizeStore>((set) => ({
  size: [],
  selectSize: (item) => set((state) => ({ size: [item, ...state.size] })),
}));

//alert component trigger
export const isAlertVisible = create<IIsAlertVisible>((set) => ({
  alert: false,
  showAlert: () => set((state) => ({ alert: true })),
  hideAlert: () => set((state) => ({ alert: false })),
}));

export const alertTextStore = create<IAlertTextStore>((set) => ({
  alertText: "",
  setAlertText: (text) => set((state) => ({ alertText: text })),
}));

//backend user specific store
export const wishlistStore = create<IWishlistStore>((set) => ({
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
export const setExpandedCard = create<ISetExpandedCard>((set) => ({
  expandedCardId: "",
  setExpandedCardId: (id) => set((state) => ({ expandedCardId: id })),
}));

//card grand total
export const cartGrandTotalStore = create<ICartGrandTotalStore>((set) => ({
  cartGrandTotal: 0,
  setCartGrandTotal: (price) => set((state) => ({ cartGrandTotal: price })),
  increaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal + price })),
  decreaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal - price })),
}));

//final cart price with taxes
export const totalWithTaxesStore = create<ITotalWithTaxesStore>((set) => ({
  totalWithTaxes: 0,
  setTotalWithTaxes: (price) => set((state) => ({ totalWithTaxes: price })),
}));

//cardinfo
export const productListStore = create<IProductListStore>((set) => ({
  productList: [],
  addToProductList: (item) => set((state) => ({ productList: item })),
}));

//address form validation
export const addressFormStore = create<IAddressFormStore>((set) => ({
  formValues: {},
  submitIsTriggered: false,
  setFormValues: (formValue) =>
    set((state) => ({ formValues: { ...formValue } })),
  setSubmitIsTriggered: () =>
    set((state) => ({
      submitIsTriggered: true,
    })),
}));
