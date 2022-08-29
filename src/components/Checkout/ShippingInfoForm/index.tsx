import React, { useState, useEffect } from "react";
import CartTotal from "../../Cart/CartTotal";
import "./index.css";
import { addressFormStore } from "../../../store";

const ShippingInfoForm = () => {
  const setFormValues = addressFormStore((state) => state.setFormValues);
  const formValues = addressFormStore((state) => state.formValues);
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    phone: "",
    email: "",
  };
  const [formValue, setFormValue] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  console.log("::::::::::formsssss", formValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    console.log(":::submited");
  };

  useEffect(() => {
    console.log(":::errors", formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log("::::useeffect", formValue);
      setFormValues(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
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
              autocomplete="postal-code"
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
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ShippingInfoForm;
