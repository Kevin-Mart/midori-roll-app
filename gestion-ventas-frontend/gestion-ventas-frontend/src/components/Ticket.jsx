import React from "react";

export default function Ticket({ cuenta, total, onCerrarCuenta }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Ticket</h2>

      {cuenta.length === 0 ? (
        <p className="text-gray-500">No hay productos en la cuenta.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cuenta.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b py-2 text-gray-700"
              >
                <span>{item.nombre}</span>
                <span>${item.precio.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-gray-900 text-lg mb-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCerrarCuenta}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
          >
            Cerrar Cuenta
          </button>
        </>
      )}
    </div>
  );
}
