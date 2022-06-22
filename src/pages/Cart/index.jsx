import React from "react";
import "./index.css";
import OrderStatusBar from "../../components/Checkout/OrderStatusBar";
import CartProductTitle from "../../components/Cart/CartProductTitle";
import CartProductItem from "../../components/Cart/CartProductItem";
import CouponCodeInput from "../../components/CouponCodeInput";
import CartTotal from "../../components/Cart/CartTotal";
import CheckoutButton from "../../components/Cart/CheckoutButton";
import EmptyCart from "../../components/EmptyCart";
import Footer from "../../components/Footer/index";
const Cart = () => {
  return (
    <>
      <div class="body-wrapper">
        <div className="cart-wrapper">
          {true ? (
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
