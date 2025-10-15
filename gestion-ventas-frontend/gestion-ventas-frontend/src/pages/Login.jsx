import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import logo from "../assets/MidoriRollLogo.png";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    usuario: "",
    contra: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.text();

      if (result === "OK") {
        navigate("/home");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error en la solicitud");
    }
  };

  return (
    <div className=" bg-white flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://images.pexels.com/photos/3763816/pexels-photo-3763816.jpeg"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-10 md:p-52 sm:20 p-8 w-full lg:w-1/2 flex flex-col items-center relative">
        <img
          src={logo}
          alt="Midori Roll"
          className="w-40  drop-shadow-lg -mt-8 mb-1"
        />
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-8 rounded-2xl shadow-lg w-96"
        >
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Iniciar Sesión
          </h1>
          <Input
            label="Usuario"
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
          />

          <Input
            label="Contraseña"
            type="password"
            name="contra"
            value={formData.contra}
            onChange={handleChange}
          />

          <Button text="Ingresar" type="submit" className="w-full mt-4" />
        </form>
      </div>
    </div>
  );
}
