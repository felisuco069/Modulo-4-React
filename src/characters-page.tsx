import React, { useState } from "react";
import { characterUseStyles } from "./layaut/character-layaut";
import { getCharacters } from "./api";
import { Character } from "./models/character-model";
import { CharacterDetail } from "./common-app/character-detail";
import { Headboard } from "./common-app/character-headboard";
import { CharacterTable } from "./common-app/character-table";
import { ImageAvatars } from "./common-app/image-modal";

export const CharacterPage: React.FC = () => {
  const [characterInput, setCharacterInput] = React.useState("Character Name");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [debounce, setDebounce] = useState<string>(characterInput);
  const classes = characterUseStyles();

  React.useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(characterInput);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [characterInput]);

  if (debounce === "Character Name" || debounce === "") {
    return (
      <>
        <Headboard
          characterInput={characterInput}
          setCharacterInput={setCharacterInput}
        />
        <CharacterTable characters={characters} />
      </>
    );
  }
  const character = characters.find((character) =>
    character.name.includes(debounce)
  );

  if (!character) {
    return (
      <>
        <Headboard
          characterInput={characterInput}
          setCharacterInput={setCharacterInput}
        />
        <h2>No hay personaje que coincida con lo que has escrito</h2>
      </>
    );
  }
  return (
    <>
      <Headboard
        characterInput={characterInput}
        setCharacterInput={setCharacterInput}
      />
      {/*No entiendo por que la siguiente función CharacterDetail no la puedo usar,
      quiero componentizar este restultado como la cabecera pero no puedo*/}
      {/* <CharacterDetail character={character} />; */}
      <div className={classes.paper}>
        <div className={classes.modalStyle}>
          <div>
            <ImageAvatars image={character.image} />
          </div>
          <div className={classes.container}>
            <div className={classes.characterDetail}>
              <span>Name: </span>
              <span>Status: </span>
              <span>Species: </span>
              <span>Gender: </span>
              <span>Origin: </span>
            </div>
            <div className={classes.characterDetail}>
              <span>{character.name}</span>
              <span>{character.status}</span>
              <span>{character.species}</span>
              <span>{character.gender}</span>
              <span>{character.origin.name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
