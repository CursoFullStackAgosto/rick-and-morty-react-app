// const Characters = () => {
//   return (
//     <h1>Personajes</h1>
//   )
// }

// export default Characters

// export default function Characters() {
//   return (
//     <h1>Characters</h1>
//   )
// }
// Josie estilos de esta página
import { useEffect, useState } from "react";
import '/src/assets/styles/_characters.scss'


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const previousPage = () => {
    if (page <= 0) return;
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getOnePageCharactersFetch = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        console.log("Personajes",data);
        setCharacters(data.results);
      } catch (error) {
        console.error(
          "El error al obtener los personajes es el siguiente:",
          error
        );
      }
    };

    getOnePageCharactersFetch();
  }, [page]);

  return (
    <div className="wrapper-characters border">
      <h1>Personajes</h1>
      <div className="characters">
        {characters.length > 0 ? characters.map((item) => (
          <div key={item.id} className="character">
            <h1>{item.name}</h1>
            <div className="data">
              <span className={capitalize(item.status) + " status"}>
                Status: {capitalize(item.status)}
              </span>
            </div>
            <img src={item.image} draggable="false" alt={item.name} />
            <span className="origin">From: {item.origin.name}</span>
          </div>
        )) : <p>No hay personajes que pueda mostrar</p>}
      </div>
      <button onClick={previousPage}>Previous page</button>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};

export default Characters;
