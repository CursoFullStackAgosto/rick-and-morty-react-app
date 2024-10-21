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
import Character from "./components/Character";


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

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
          <Character key={item.id} character={item} />
        )) : <p>No hay personajes que pueda mostrar</p>}
      </div>

      <button onClick={previousPage}>Previous page</button>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};

export default Characters;
