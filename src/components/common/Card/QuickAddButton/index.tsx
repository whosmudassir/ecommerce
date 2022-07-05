import React, { useState } from "react";

import "../index.css";
import AddToCartPopup from "../AddToCartPopup";

const QuickAddButton = () => {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <>
      <button
        className="primary-btn card-plus-icon"
        onClick={visible ? hide : show}
      >
        Add
      </button>
    </>
  );
};

export default QuickAddButton;
