import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
