import { useState } from "react";

export default function Entrada() {
  const [entrada, setEntrada] = useState("");
  const [texto, setTexto] = useState("");

  const modificar = () => {
    setTexto(entrada);
  };

  return (
    <>
      <input value={entrada} onChange={(e) => setEntrada(e.target.value)} />
      <button onClick={modificar}>Modificar</button>
      <p>Texto ingresado: {texto}</p>
    </>
  );
}
