import { useContext } from "react";
import { FullContext } from "../context/full";


export const Bienvenida = () => {
  const {
    setPersonaje,
    setPersonajes,
    setPagina,
  } = useContext(FullContext);

  const submitBusqueda = (e) => {
    e.preventDefault();
    setPersonaje(e.target[0].value);
    setPersonajes(false);
    setPagina(1);
    e.target[0].value = "";
  };

  return (
    <section className="buscarPersonajeMain">
      <h1>Bienvenido a Disney character</h1>
      <form action="" onSubmit={submitBusqueda}>
        <label htmlFor="buscarPersonaje">
          Aqui puedes buscar a tu personaje:
        </label>
        <input type="text" id="buscarPersonaje" placeholder="Mickey Mouse" />

        <button>Buscar</button>
      </form>
    </section>
  );
};
