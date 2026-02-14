import "./Navbar.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { getTotalCartItems } = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="KFD Express" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
        >
          Explore Menu
        </a>

        {/* Show sub-menu when hovering over "Explore Menu" */}
        {showSubMenu && (
          <div className="navbar-submenu">
            <ul>
              <li>Appetizers</li>
              <li>Main Course</li>
              <li>Dumplings</li>
              <li>Soups</li>
              <li>Specials</li>
              <li>Desserts</li>
            </ul>
          </div>
        )}

        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <Link to="/cart" className="navbar-cart">
          <img src={assets.basket_icon} alt="Cart" />
          {getTotalCartItems() > 0 && (
            <span className="navbar-cart-count">{getTotalCartItems()}</span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
