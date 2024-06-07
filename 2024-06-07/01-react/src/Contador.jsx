import { useState } from "react";

export default function Contador() {
  // hook useState: manejar estados
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <>
      <p>{cuenta}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Decrementar</button>
    </>
  );
}
