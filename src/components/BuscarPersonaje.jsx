import { useEffect, useContext } from "react";
import { FullContext } from "../context/full";
import "../styles/busqueda.css";

export function BuscarPersonaje() {
  const {
    personaje,
    setApiPersonaje,
    apiPersonaje,
    setInfoModal,
    setModal,
    modal,
  } = useContext(FullContext);

  let APICharacter = `https://api.disneyapi.dev/character?name=${personaje}`;

  useEffect(() => {
    if (personaje !== null && personaje !== false) {
      fetch(APICharacter)
        .then((response) => response.json())
        .then((data) => setApiPersonaje(data));
    }
  }, [personaje]);

  return (
    <>
      {apiPersonaje !== null && personaje !== false && apiPersonaje?.info?.count > 1 && (
        <section className="mainContainerBusqueda">
          {apiPersonaje.data.map((busqueda) => (
            <article key={busqueda._id} className="busqueda">
              <h2>{busqueda.name}</h2>
              <div className="imageContainer">
                <img
                  src={busqueda.imageUrl}
                  alt="No se puede encontrar foto de este personaje"
                />
              </div>

              <button
                className="verMas"
                onClick={() => {
                  setInfoModal(busqueda);
                  setModal(!modal);
                }}
              >
                Ver mas
              </button>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
