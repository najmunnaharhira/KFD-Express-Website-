import "./Cart.css";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, getTotalCartAmount, clearCart } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    address: "",
    branch: "Banani",
    deliveryMethod: "delivery",
  });
  const [placing, setPlacing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

  const placeOrder = async (e) => {
    e.preventDefault();
    const items = Object.entries(cartItems).map(([id, qty]) => {
      const item = food_list.find((f) => f._id === id);
      return {
        id,
        name: item?.name,
        price: item?.price,
        quantity: qty,
      };
    });
    if (items.length === 0) return;
    setPlacing(true);
    setOrderSuccess(null);
    try {
      const res = await fetch(`${API_URL}/api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          totalAmount: getTotalCartAmount(),
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderSuccess(data.orderId);
        clearCart();
      } else {
        setOrderSuccess(false);
      }
    } catch {
      setOrderSuccess(false);
    } finally {
      setPlacing(false);
    }
  };

  const cartIds = Object.keys(cartItems);
  if (cartIds.length === 0 && !orderSuccess) {
    return (
      <div className="cart-empty">
        <img src={assets.basket_icon} alt="Cart" />
        <h2>Your cart is empty</h2>
        <p>Add some delicious items from our menu!</p>
        <button onClick={() => navigate("/")}>Explore Menu</button>
      </div>
    );
  }

  if (orderSuccess && typeof orderSuccess === "string") {
    return (
      <div className="cart-success">
        <h2>Order placed successfully!</h2>
        <p>Order ID: {orderSuccess}</p>
        <p>We'll contact you shortly to confirm delivery.</p>
        <button onClick={() => navigate("/")}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <h1>Your Cart</h1>
        {cartIds.map((id) => {
          const item = food_list.find((f) => f._id === id);
          if (!item) return null;
          return (
            <div key={id} className="cart-item">
              <img src={item.image || assets.header_img} alt={item.name} />
              <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-counter">
                  <button onClick={() => removeFromCart(id)}>
                    <img src={assets.remove_icon_red} alt="Remove" />
                  </button>
                  <p>{cartItems[id]}</p>
                  <button onClick={() => addToCart(id)}>
                    <img src={assets.add_icon_green} alt="Add" />
                  </button>
                </div>
              </div>
              <p className="cart-item-total">${item.price * cartItems[id]}</p>
            </div>
          );
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Subtotal: ${getTotalCartAmount()}</h2>
        </div>

        <form className="cart-form" onSubmit={placeOrder}>
          <h2>Delivery Details</h2>
          <input
            required
            placeholder="Your Name"
            value={form.customerName}
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            required
            placeholder="Delivery Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <select
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
          >
            <option value="Banani">Banani Branch</option>
            <option value="Uttara">Uttara Branch</option>
          </select>
          <select
            value={form.deliveryMethod}
            onChange={(e) => setForm({ ...form, deliveryMethod: e.target.value })}
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
          {orderSuccess === false && (
            <p className="cart-error">Failed to place order. Please try again.</p>
          )}
          <button type="submit" disabled={placing}>
            {placing ? "Placing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
