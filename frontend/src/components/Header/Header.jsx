import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite food here</h1>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and satisfy your cravings and
          elevate your dining experience, one delicious meal at a time.
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
