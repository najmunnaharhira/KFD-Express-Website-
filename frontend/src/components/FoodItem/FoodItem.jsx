import "./FoodItem.css";
import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={image || assets.header_img}
          alt={name ? name : "food item"}
        />

        {!cartItems[id] ? (
          <button
            aria-label="Add to Cart"
            className="add-button"
            onClick={() => addToCart(id)}
          >
            <img src={assets.add_icon_white} alt="add icon" />
          </button>
        ) : (
          <div className="food-item-counter">
            <button aria-label="Remove from Cart" onClick={() => removeFromCart(id)}>
              <img src={assets.remove_icon_red} alt="remove icon" />
            </button>
            <p aria-label="Item Count">{cartItems[id]}</p>
            <button aria-label="Add More to Cart" onClick={() => addToCart(id)}>
              <img src={assets.add_icon_green} alt="add icon" />
            </button>
          </div>
        )}

      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p aria-label="Food Name">{name ? name : "Unknown Item"}</p>
          <img src={assets.rating_starts} alt="food rating" />
        </div>
        <p aria-label="Food Description" className="food-item-desc">
          {description ? description : "No description available"}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
