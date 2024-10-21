import { useNavigate } from "react-router-dom";
import "../../assets/styles/_characters.scss";

//Horacio estilos de esta página
const Character = ({ character }) => {
  const navigate = useNavigate();

  const handleOnClick = (characterId) => {
    navigate("/personajes/info/" + characterId);
  };

  function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div
      key={character.id}
      className="character"
      onClick={() => handleOnClick(character.id)}
    >
      <h1>{character.name}</h1>
      <div className="data">
        <span className={capitalize(character.status) + " status"}>
          Status: {capitalize(character.status)}
        </span>
      </div>
      <img src={character.image} draggable="false" alt={character.name} />
      <span className="origin">From: {character.origin.name}</span>
    </div>
  );
};

export default Character;
