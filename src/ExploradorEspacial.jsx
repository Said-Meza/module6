import { useState, useEffect, useMemo } from "react";
import { Planeta } from "./Planeta";

export const ExploradorEspacial = () => {
  const [distacia, setdistacia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("en Orbita");
  const [planetaVisitado, setPlanetaVisitado] = useState([]);
  const [planeta, setPlaneta] = useState("");

  useEffect(() => {
    console.log("¡El panel de control está listo!");
    const intervalo = setInterval(() => {
      setCombustible((prev) => prev - 1);
      setdistacia((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo); // Desmontaje
      console.log("El panel se ha apagado."); // Desmontaje
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!"); // Actualización
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const hanledonclick = () => {
    setEstadoNave("Aterrizando");
    setPlanetaVisitado([...planetaVisitado, planeta]);
    setPlaneta("");
  };

  return (
    <div>
      {/* ... (información del panel) */}
      {planetaVisitado.map((planeta, index) => (
        <Planeta key={index} nombre={planeta} />
      ))}

      <hr />
      <h2>estado de la nave</h2>
      <p>distancia:{distacia}</p>
      <p>combustible:{combustible}</p>
      <p>{mensajeEstado}</p>
      <input
        type="text"
        value={planeta}
        onChange={(e) => setPlaneta(e.target.value)}
        placeholder="que planeta estas?"
      />
      <button
        onClick={() => {
          hanledonclick();
        }}
      >
        Aterrizar
      </button>
    </div>
  );
};
