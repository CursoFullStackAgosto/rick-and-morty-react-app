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

import React, { useEffect } from "react";

const Characters = () => {
  useEffect(() => {
    const getOnePageCharactersFetch = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=1`
        );
        const data = await response.json();
        console.log('Personajes',data);
      } catch (error) {
        console.error(
          "El error al obtener los personajes es el siguiente:",
          error
        );
      }
    };

    getOnePageCharactersFetch();
  }, []);

  return (
    <div className="wrapper-characters border">
      <h1>Personajes</h1>
    </div>
  );
};

export default Characters;
