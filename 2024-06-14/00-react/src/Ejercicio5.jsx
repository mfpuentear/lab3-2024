import { useState } from "react";
import "./Ejercicio5.css";

export function Ejercicio5() {
  const [colorTexto, setColorTexto] = useState("black");
  const [colorFondo, setColorFondo] = useState("white");

  return (
    <>
      <p
        style={{ color: colorTexto, backgroundColor: colorFondo }}
        className="parrafo"
      >
        Un Texto
      </p>
      <div>
        <label htmlFor="colorTexto">Color del texto</label>
        <select
          id="colorTexto"
          value={colorTexto}
          onChange={(e) => {
            setColorTexto(e.target.value);
            console.log("valor actual", e.target.value);
            console.log("valor estado", colorTexto);
          }}
        >
          <option value="black">Negro</option>
          <option value="red">Rojo</option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
        </select>
      </div>
      <div>
        <label htmlFor="colorFondo">Color del fondo</label>
        <select
          id="colorFondo"
          value={colorFondo}
          onChange={(e) => setColorFondo(e.target.value)}
        >
          <option value="white">Blanco</option>
          <option value="red">Rojo</option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
        </select>
      </div>
    </>
  );
}
