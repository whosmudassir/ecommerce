import React, { useState, useEffect } from "react";
import "./index.css";
import { addressFormStore, cartStore } from "../../../store";
import PlaceOrderButton from "../PlaceOrderButton";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const ShippingInfoForm = () => {
  //store
  const itemsInCart = cartStore<any>((state) => state.cart);
  const emptyCart = cartStore<any>((state) => state.emptyCart);
  const setFormValues = addressFormStore<any>((state) => state.setFormValues);

  // logged in user
  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    email: "",
  };

  //states
  const [formValue, setFormValue] = useState<any>(initialState);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isOrderPlaced, setIsOrderPlaced] = useState<any>(false);

  const navigate = useNavigate();

  //functions
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // createOrdersData();
    setFormValue({ ...formValue, [name]: value });
  };

  //saving to firestore
  const createOrdersData = async () => {
    try {
      //random id generator
      const randstr = (prefix: any) => {
        return Math.random()
          .toString(36)
          .replace("0.", prefix || "");
      };
      const orderID = randstr("msftsRep");

      await setDoc(
        doc(db, "users", user.uid),
        {
          orders: {
            [orderID]: itemsInCart,
          },
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0) {
      setFormValues(formValue);
    }
    if (
      Object.keys(formErrors).length === 0 &&
      formValue.firstName.length > 0
    ) {
      createOrdersData();
      emptyCart();
      navigate("/order-confirmation");
    }
  }, [formErrors]); // eslint-disable-line react-hooks/exhaustive-deps

  const validate = (values: any) => {
    const errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.city) {
      errors.city = "City name is required!";
    }
    if (!values.pinCode) {
      errors.pinCode = "Pincode is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Incorrect email format!";
    }
    return errors;
  };

  return (
    <div className="shipping-info-form-wrapper">
      <form>
        <div>
          <p className="order-info-text">Billing & shipping</p>
          <p className="form-text-error">{formErrors.firstName}</p>
          <p className="form-text-error">{formErrors.lastName}</p>
          <div className="shipping-info-two-item-wrapper">
            <input
              className="outlined-input"
              type="text"
              name="firstName"
              placeholder="First name"
              value={formValue.firstName}
              onChange={handleChange}
              autoComplete="cc-given-name"
            />
            <input
              className="outlined-input"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formValue.lastName}
              onChange={handleChange}
              autoComplete="cc-family-name"
            />
          </div>
          <p className="shipping-info-headings-text">Street address</p>
          <p className="form-text-error">{formErrors.address}</p>
          <div className="shipping-info-item-wrapper">
            <input
              className="outlined-input shipping-info-input"
              type="text"
              name="address"
              placeholder="House number and street name"
              value={formValue.address}
              onChange={handleChange}
              autoComplete="street-address"
            />
          </div>
          <p className="shipping-info-headings-text">City / town</p>
          <p className="form-text-error">{formErrors.city}</p>
          <div className="shipping-info-item-wrapper">
            <input
              className="outlined-input  shipping-info-input"
              type="text"
              name="city"
              value={formValue.city}
              onChange={handleChange}
              autoComplete="address-level2"
            />
          </div>

          <p className="shipping-info-headings-text">Pin code / zip</p>
          <p className="form-text-error">{formErrors.pinCode}</p>
          <div className="shipping-info-item-wrapper">
            <input
              className="outlined-input  shipping-info-input"
              type="text"
              name="pinCode"
              value={formValue.pinCode}
              onChange={handleChange}
              autoComplete="postal-code"
            />
          </div>

          <p className="shipping-info-headings-text">Phone</p>
          <p className="form-text-error">{formErrors.phone}</p>
          <div className="shipping-info-item-wrapper">
            <input
              className="outlined-input  shipping-info-input"
              type="text"
              name="phone"
              value={formValue.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
            />
          </div>
          <p className="shipping-info-headings-text">Email</p>
          <p className="form-text-error">{formErrors.email}</p>
          <div className="shipping-info-item-wrapper">
            <input
              className="outlined-input  shipping-info-input"
              type="text"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
        </div>
      </form>
      <PlaceOrderButton handleOnClick={handleSubmit} />
    </div>
  );
};

export default ShippingInfoForm;
