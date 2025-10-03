import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Inventario from "./Inventario";
import Caja from "./Caja";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <main className="flex-1 bg-gray-100 ">
        <Routes>
          <Route path="inventario" element={<Inventario />} />
          <Route path="caja" element={<Caja />} />
          <Route
            path="*"
            element={
              <h1 className="text-black text-center">
                Bienvenido a Midori Roll 🍣
              </h1>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
