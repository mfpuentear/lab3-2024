import { useState } from "react";

export default function Numero() {
  const [numero, setNumero] = useState(0);
  return (
    <>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
      />
      <Signo numero={numero} />
      <Paridad numero={numero} />
      <Multiplo numero={numero} />
      <Capicua numero={numero} />
    </>
  );
}

function Signo(props) {
  return (
    <>
      {props.numero > 0 && <p>Es positivo</p>}
      {props.numero < 0 && <p>Es negativo</p>}
      {props.numero === 0 && <p>Es cero</p>}
    </>
  );
}

function Paridad(props) {
  return (
    <>
      {props.numero % 2 === 0 && <p>Es par</p>}
      {Math.abs(props.numero % 2) === 1 && <p>Es impar</p>}
    </>
  );
}

function Multiplo(props) {
  return props.numero % 7 === 0 ? (
    <p>Es multiplo de 7</p>
  ) : (
    <p>No es multiplo de 7</p>
  );
}

function Capicua({ numero }) {
  const numeroInvertido = parseInt(
    numero.toString().split("").reverse().join("")
  );
  return numero == numeroInvertido ? <p>Es Capicua</p> : <p>No es capicua</p>;
}
