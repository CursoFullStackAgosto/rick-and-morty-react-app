
//Horacio estilos de esta página
const Character = ({character}) => {

  return (
    <div>
      {character.name ? 
      <>
        <img src={character.image} alt={character.name} />
        {character.name}
        {character.status}
        {character.species}
        {character.gender}
        {character.origin.name}
      </> : <p>No hay un personaje que pueda mostrar</p>}
      
    </div>
  );
};

export default Character;
