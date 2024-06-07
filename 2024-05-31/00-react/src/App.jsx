// js + xml

// Componente
function MiComponente(props) {
  const { mensaje, numero } = props;

  return (
    <p>
      <b>{mensaje}:</b> {numero % 2 === 0 ? "par" : "impar"}
    </p>
  );
}

// Otro componente
function Otro(props) {
  return <p>{props.children}</p>;
}

// Componente de aplicacion
function App() {
  const miMensaje = "desde app";
  return (
    <>
      <h1>Hola</h1>
      <h2>mundo</h2>
      <MiComponente mensaje="hola" numero={5} />
      <MiComponente mensaje="desde" numero={3} />
      <MiComponente mensaje="mi componente" numero={56} />
      <Otro>Esto es children</Otro>
      <Otro>
        <h3>Algo</h3>
      </Otro>
    </>
  );
}

export default App;
