

export function fetchCharacters() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      return data.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          species: eachCharacter.species,
          gender: eachCharacter.gender,
          house: eachCharacter.house,
          alive: eachCharacter.alive,
          image: eachCharacter.image,
          actor: eachCharacter.actor,
          alternate_names: eachCharacter.alternate_names,
        };
      });
    });
}