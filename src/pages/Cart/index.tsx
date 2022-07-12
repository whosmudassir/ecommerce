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
import { cartStore } from "../../store";

const Cart = () => {
  const itemsInCart = cartStore((state) => state.cart);
  const isLoggedin = true;

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
                    cart={true}
                    checkout={false}
                    confirmation={false}
                  />
                  <CartProductTitle />
                  {itemsInCart.map((item) => (
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
