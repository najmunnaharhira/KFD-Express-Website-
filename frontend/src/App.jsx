import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import MyOrders from "./pages/MyOrders/MyOrders";
import Navbar from "./components/Navbar/Navbar";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import React, { useState } from "react";
import Verify from "./pages/Verify/Verify";
import { Route, Routes } from "react-router-dom";

// import Cart from "./pages/Cart/Cart";
// import Footer from "./components/Footer/Footer";
// import Home from "./pages/Home/Home";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import Navbar from "./components/Navbar/Navbar";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";

// const App = () => {


//   const [showLogin,setShowLogin] = useState(false)
//   return (
//     <>
//     {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
//     <div className='app'>
//       <Navbar setShowLogin={setShowLogin}/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/cart' element={<Cart/>} />
//         <Route path='/order' element={<PlaceOrder/>} />
//         <Route path='/verify' element={<Verify/>} />
//         <Route path='/myorders' element={<MyOrders/>} />
//       </Routes>
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default App


// ✅ Import missing components

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
