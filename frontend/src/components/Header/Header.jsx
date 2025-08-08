import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Welcome to KFD Express: The Genuine Taste from China</h2>
        <p>
          Budget-friendly and home to the best dumplings in town! Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
