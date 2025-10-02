import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="inline-block w-64 h-screen hidden lg:block bg-slate-900 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Midori Roll</h2>
      <nav className="flex flex-col gap-4">
        <Link to="inventario" className="hover:bg-green-600 p-2 rounded">
          Inventario
        </Link>
        <Link to="caja" className="hover:bg-green-600 p-2 rounded">
          Caja
        </Link>
        <Link to="" className="hover:bg-green-600 p-2 rounded">
          Reportes (futuro)
        </Link>
      </nav>
    </div>
  );
}
