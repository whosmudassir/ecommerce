import React, { useEffect } from "react";
import "./index.css";
import OrderStatusBar from "../../components/Checkout/OrderStatusBar";
import CartProductTitle from "../../components/Cart/CartProductTitle";
import CartProductItem from "../../components/Cart/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";
import CartTotal from "../../components/Cart/CartTotal";
import CheckoutButton from "../../components/Cart/CheckoutButton";
import EmptyCart from "../../components/EmptyCart";
import NotLoggedinTemplate from "../../components/NotLoggedinTemplate";
import { cartStore, cartGrandTotalStore } from "../../store";

const Cart = () => {
  const isLoggedin = true;

  //store
  const itemsInCart = cartStore<any>((state) => state.cart);
  const setCartGrandTotal = cartGrandTotalStore<any>(
    (state) => state.setCartGrandTotal
  );

  const calculateGrandTotal = () => {
    const grandTotal = itemsInCart
      .map((item: any) => {
        return item.price;
      })
      .reduce((prev: any, curr: any) => {
        return prev + curr;
      });
    setCartGrandTotal(grandTotal);
  };

  useEffect(() => {
    itemsInCart.length > 0 && calculateGrandTotal();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="body-wrapper">
        <div className="cart-wrapper">
          {isLoggedin ? (
            <>
              {itemsInCart.length > 0 ? (
                <>
                  <div>
                    <p className="cart-heading">Cart</p>
                  </div>
                  <OrderStatusBar
                    cartSuccess={true}
                    checkoutSuccess={false}
                    confirmationSuccess={false}
                    navToCart={true}
                    navToCheckout={true}
                  />
                  <CartProductTitle />
                  {itemsInCart.map((item: any) => (
                    <>
                      <CartProductItem
                        id={item.id}
                        brandName={item.brandName}
                        name={item.name}
                        size={item.size}
                        price={item.price}
                        imageUrl={item.imageUrl}
                      />
                    </>
                  ))}

                  <CouponCodeInput />
                  <CartTotal />
                  <CheckoutButton />
                </>
              ) : (
                <EmptyCart />
              )}
            </>
          ) : (
            <NotLoggedinTemplate screenName={"cart"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
