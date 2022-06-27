import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/Checkout/OrderStatusBar";
import CartProductTitle from "../../components/Cart/CartProductTitle";
import CartProductItem from "../../components/Cart/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";
import CartTotal from "../../components/Cart/CartTotal";
import CheckoutButton from "../../components/Cart/CheckoutButton";
import EmptyCart from "../../components/EmptyCart";
import NotLoggedinTemplate from "../../components/NotLoggedinTemplate";

const Cart = () => {
  const isLoggedin = true;
  const cartCount = 0;
  return (
    <>
      <div class="body-wrapper">
        <div className="cart-wrapper">
          {isLoggedin ? (
            <>
              {false ? (
                <>
                  <div>
                    <p className="cart-heading">Cart</p>
                  </div>
                  <OrderStatusBar
                    cart={true}
                    checkout={false}
                    confirmation={false}
                  />
                  <CartProductTitle />
                  <CartProductItem /> <CartProductItem /> <CartProductItem />
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
