import { useState } from "react";

export function Ejercicio7() {
  const [personas] = useState(["Pepe", "Maria", "Juan", "Pedro", "Cacho"]);

  return (
    <>
      <h1>Listado de personas</h1>
      <ol>
        {personas.map((persona, index) => {
          return <li key={index}>{persona}</li>;
        })}
      </ol>
    </>
  );
}
