import create from "zustand";

interface IIsAlertVisible {
  alert: boolean;
  showAlert: () => void;
  hideAlert: () => void;
}

interface IAlertTextStore {
  alertText: string;
  setAlertText: (param: string) => void;
}

interface ICartStore {
  cart: Array<object>;
  addToCart: (param: object) => void;
  removeFromCart: (param: object) => void;
  emptyCart: () => void;
}

interface ISelectedSizeStore {
  size: any;
  selectSize: any;
}

interface IWishlistStore {
  wishlist: Array<object>;
  addToWishlist: (param: object) => void;
  removeFromWishlist: (param: string) => void;
}

interface ISetExpandedCard {
  expandedCardId: string;
  setExpandedCardId: any;
}

interface ICartGrandTotalStore {
  cartGrandTotal: any;
  setCartGrandTotal: any;
  increaseCartGrandTotal: any;
  decreaseCartGrandTotal: any;
}

interface ITotalWithTaxesStore {
  totalWithTaxes: any;
  setTotalWithTaxes: any;
}

interface IProductListStore {
  productList: any;
  addToProductList: any;
}

interface IAddressFormStore {
  formValues: any;
  submitIsTriggered: any;
  setFormValues: any;
  setSubmitIsTriggered: any;
}

interface IUserLogin {
  isLoginModalOpen: any;
  showLoginModal: any;
  hideLoginModal: any;
  isSignupModalOpen: any;
  showSignupModal: any;
  hideSignupModal: any;
  isAuthModalOpen: any;
  showAuthModal: any;
  hideAuthModal: any;
}

interface IIsLoading {
  isAppLoading?: boolean;
  showIsAppLoading?: any;
  hideIsAppLoading?: any;
}

interface ITriggerErrorModal {
  isErrorModalOpen: boolean;
  showErrorModal: any;
  hideErrorModal: any;
  errorModalMessage: string;
  setErrorModalMessage: any;
}

interface ILoggedInUser {
  loggedInUserData: any;
  setLoggedInUserData: any;
}

//backend to store user data of previous order
export const cartStore = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (item: any) => set((state) => ({ cart: [item, ...state.cart] })),
  removeFromCart: (id: any) =>
    set((state) => ({
      cart: state.cart.filter((cartItem: any) => {
        return cartItem.id !== id;
      }),
    })),
  emptyCart: () => set((state) => ({ cart: [] })),
}));

//size selection
export const selectedSizeStore = create<ISelectedSizeStore>((set) => ({
  size: [],
  selectSize: (item: any) => set((state) => ({ size: [item, ...state.size] })),
}));

//alert component trigger
export const isAlertVisible = create<IIsAlertVisible>((set) => ({
  alert: false,
  showAlert: () => set((state) => ({ alert: true })),
  hideAlert: () => set((state) => ({ alert: false })),
}));

export const alertTextStore = create<IAlertTextStore>((set) => ({
  alertText: "",
  setAlertText: (text: any) => set((state) => ({ alertText: text })),
}));

//backend user specific store
export const wishlistStore = create<IWishlistStore>((set) => ({
  wishlist: [],
  addToWishlist: (item: any) =>
    set((state) => ({ wishlist: [item, ...state.wishlist] })),
  removeFromWishlist: (id: string) =>
    set((state) => ({
      wishlist: state.wishlist.filter((cartItem: any) => {
        return cartItem.id !== id;
      }),
    })),
}));

//card expanded id
export const setExpandedCard = create<ISetExpandedCard>((set) => ({
  expandedCardId: "",
  setExpandedCardId: (id: any) => set((state) => ({ expandedCardId: id })),
}));

//card grand total
export const cartGrandTotalStore = create<ICartGrandTotalStore>((set) => ({
  cartGrandTotal: 0,
  setCartGrandTotal: (price: any) =>
    set((state) => ({ cartGrandTotal: price })),
  increaseCartGrandTotal: (price: any) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal + price })),
  decreaseCartGrandTotal: (price: any) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal - price })),
}));

//final cart price with taxes
export const totalWithTaxesStore = create<ITotalWithTaxesStore>((set) => ({
  totalWithTaxes: 0,
  setTotalWithTaxes: (price: any) =>
    set((state) => ({ totalWithTaxes: price })),
}));

//cardinfo
export const productListStore = create<IProductListStore>((set) => ({
  productList: [],
  addToProductList: (item: any) => set((state) => ({ productList: item })),
}));

//address form validation
export const addressFormStore = create<IAddressFormStore>((set) => ({
  formValues: {},
  submitIsTriggered: false,
  setFormValues: (formValue: any) =>
    set((state) => ({ formValues: { ...formValue } })),
  setSubmitIsTriggered: () =>
    set((state) => ({
      submitIsTriggered: true,
    })),
}));

//Login sign up trigger
export const userLogin = create<IUserLogin>((set) => ({
  isLoginModalOpen: false,
  showLoginModal: () => set((state) => ({ isLoginModalOpen: true })),
  hideLoginModal: () => set((state) => ({ isLoginModalOpen: false })),
  isSignupModalOpen: false,
  showSignupModal: () => set((state) => ({ isSignupModalOpen: true })),
  hideSignupModal: () => set((state) => ({ isSignupModalOpen: false })),
  isAuthModalOpen: false,
  showAuthModal: () => set((state) => ({ isAuthModalOpen: true })),
  hideAuthModal: () => set((state) => ({ isAuthModalOpen: false })),
}));

//App loading
export const isLoading = create<IIsLoading>((set) => ({
  isAppLoading: false,
  showIsAppLoading: () => set((state) => ({ isAppLoading: true })),
  hideIsAppLoading: () => set((state) => ({ isAppLoading: false })),
}));

//Error modal
export const triggerErrorModal = create<ITriggerErrorModal>((set) => ({
  isErrorModalOpen: false,
  showErrorModal: () => set((state) => ({ isErrorModalOpen: true })),
  hideErrorModal: () => set((state) => ({ isErrorModalOpen: false })),
  //message in error modal
  errorModalMessage: "",
  setErrorModalMessage: (text: string) =>
    set((state) => ({ errorModalMessage: text })),
}));

//logged in user details
export const loggedInUser = create<ILoggedInUser>((set) => ({
  loggedInUserData: {},
  setLoggedInUserData: (loggedInUserData: any) =>
    set((state) => ({ loggedInUserData: { ...loggedInUserData } })),
}));
