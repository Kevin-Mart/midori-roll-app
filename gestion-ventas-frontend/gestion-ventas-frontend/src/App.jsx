import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Inventario from "./pages/Inventario";
import Caja from "./pages/Caja";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="inventario" element={<Inventario />} />
            <Route path="caja" element={<Caja />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
