import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Inventario from "./Inventario";
import Caja from "./Caja";

export default function Home() {
  return (
    <div className="flex justify-center items self-center ">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex p-6 bg-white">
        <Routes>
          <Route path="inventario" element={<Inventario />} />
          <Route path="caja" element={<Caja />} />
          <Route
            path="*"
            element={
              <h1 className="text-black">Bienvenido a Midori Roll 🍣</h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
