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
// Emiliano estilos de esta página
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Character from "./components/Character";
import "../assets/styles/_detailCharacter.scss";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({}) 
  const params = useParams();

  useEffect(() => {
    const getOnePageCharactersFetch = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${params.characterId}`);
        console.log(response.data)
        setCharacter(response.data)
      } catch (error) {
        console.error(
          "El error al obtener los personajes es el siguiente:",
          error
        );
      }
    };

    getOnePageCharactersFetch();
  }, [params.characterId]);

  return (
    <>
    <div className="wrapper-characters border">
      <h1>Detalle del personaje</h1>
    </div>
    <div className="border">
      <div className="cardContainer">
        <Character character={character} />
      </div>
    </div>
    </>
  );
};

export default DetailCharacter;
