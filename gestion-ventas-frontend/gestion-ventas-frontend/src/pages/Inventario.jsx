import React from "react";
import CardInventario from "../components/CardInventario";

export default function Inventario() {
  // Aquí simulamos datos de inventario (luego se podrá conectar a una API o BD)
  const productos = [
    {
      id: 1,
      nombre: "Roll de Salmón",
      descripcion: "Delicioso roll con salmón fresco",
      cantidad: 12,
    },
    {
      id: 2,
      nombre: "Roll de Atún",
      descripcion: "Clásico roll de atún con aguacate",
      cantidad: 8,
    },
    {
      id: 3,
      nombre: "Nigiri de Camarón",
      descripcion: "Camarón sobre arroz gohan",
      cantidad: 20,
    },
    {
      id: 4,
      nombre: "Tempura",
      descripcion: "Crujiente tempura de vegetales",
      cantidad: 5,
    },
  ];

  return (
    <div className="flex-1 p-6 bg-gray-100 min-h-screen w-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Inventario</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <CardInventario
            key={prod.id}
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            cantidad={prod.cantidad}
          />
        ))}
      </div>
    </div>
  );
}
