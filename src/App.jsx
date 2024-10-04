// import React, { useState } from "react";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/About";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/home" element={<Home/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/about" element={<About/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
