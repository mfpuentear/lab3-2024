import { useState, useEffect } from "react";

export function Ejercicio11() {
  const [personas, setPersonas] = useState([]);

  const handleMostrarPersonas = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      console.log("llegaron los datos!");
      const nuevasPersonas = await res.json();
      setPersonas(nuevasPersonas);
    } else {
      console.error("Error: no llegaron los datos");
    }
  };

  useEffect(() => {
    const cargarPersonas = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        console.log("llegaron los datos!");
        const nuevasPersonas = await res.json();
        setPersonas(nuevasPersonas);
      } else {
        console.error("Error: no llegaron los datos");
      }
    };
    cargarPersonas();
  }, []);

  return (
    <>
      <h1>Listado de personas</h1>
      {/*
      <button onClick={handleMostrarPersonas}>Mostrar personas</button>
      */}
      <ul>
        {personas.map((persona) => (
          <li key={persona.id}>
            {persona.id} - {persona.name} - {persona.email}
          </li>
        ))}
      </ul>
    </>
  );
}
