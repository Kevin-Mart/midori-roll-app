import React, { useState } from "react";
import Ticket from "../components/Ticket";

export default function Caja() {
  const [cuenta, setCuenta] = useState([]);
  const [precio, setPrecio] = useState("");

  // Lista de productos disponibles (simulación)
  const productosDisponibles = [
    { nombre: "Roll de Salmón", precio: 120 },
    { nombre: "Roll de Atún", precio: 100 },
    { nombre: "Nigiri de Camarón", precio: 80 },
    { nombre: "Tempura", precio: 90 },
    { nombre: "Refresco", precio: 25 },
  ];

  // Agregar producto seleccionado
  const handleAddProducto = (producto) => {
    setCuenta([...cuenta, producto]);
  };

  // Cerrar cuenta (resetear ticket)
  const handleCerrarCuenta = () => {
    setCuenta([]);
  };

  const total = cuenta.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Caja Registradora
      </h1>

      {/* Selección de productos */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6 w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Añadir Platillo</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {productosDisponibles.map((prod, index) => (
            <button
              key={index}
              onClick={() => handleAddProducto(prod)}
              className="bg-sky-500 text-white py-2 px-3 rounded-lg hover:bg-sky-600 transition"
            >
              {prod.nombre} <br />{" "}
              <span className="text-sm">${prod.precio}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Ticket */}
      <Ticket
        cuenta={cuenta}
        total={total}
        onCerrarCuenta={handleCerrarCuenta}
      />
    </div>
  );
}
