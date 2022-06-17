import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/OrderStatusBar";
import CartProductTitle from "../../components/CartProductTitle";
import CartProductItem from "../../components/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";
import CartTotal from "../../components/CartTotal";
import CheckoutButton from "../../components/CheckoutButton";
import EmptyCart from "../EmptyCart";
import Footer from "../../components/Footer/index";
const Cart = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="cart-wrapper">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
