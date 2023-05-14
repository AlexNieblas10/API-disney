import { useContext, useEffect } from "react";
import { FullContext } from "../context/full";
import "../styles/characters.css";

export const Characters = () => {
  const {
    setApiResponse,
    setPersonajes,
    personajes,
    apiResponse,
    pagina,
    setPersonaje,
    setInfoModal,
    setModal,
    modal,
  } = useContext(FullContext);

  let API = `https://api.disneyapi.dev/character?page=${pagina}`;

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setApiResponse(data));
  }, [pagina]);

  console.log(apiResponse);

  return (
    <main>
      <section id="allCharactersButtonContainer">
        {personajes === false && (
          <button
            onClick={() => {
              setPersonajes(true);
              setPersonaje(false);
            }}
          >
            Ver todos los personajes
          </button>
        )}
      </section>

      {apiResponse?.info?.count > 1 && personajes && (
        <section className="mainContainer">
          {apiResponse.data.map((character) => {
            return (
              <article key={character._id} className={"character"}>
                <h2>{character.name}</h2>
                <div className="imageContainer">
                  <img
                    src={character.imageUrl}
                    alt="No se puede encontrar foto de este personaje"
                  />
                </div>
                <button
                  onClick={() => {
                    setInfoModal(character);
                    setModal(!modal);
                  }}
                >
                  ver mas
                </button>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
};
