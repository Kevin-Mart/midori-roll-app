import React from "react";

export default function CardInventario({ nombre, descripcion, cantidad }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between hover:shadow-xl transition">
      <h2 className="text-lg font-bold text-gray-800">{nombre}</h2>
      <p className="text-gray-600 text-sm mt-2">{descripcion}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Disponibles:</span>
        <span className="text-xl font-semibold text-sky-600">{cantidad}</span>
      </div>
    </div>
  );
}
