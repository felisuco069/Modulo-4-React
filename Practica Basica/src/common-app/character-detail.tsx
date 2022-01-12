import React from "react";
import { ImageAvatars } from "./image-modal";
import { characterUseStyles } from "../layaut/character-layaut";
import { Character } from "../models/character-model";

interface Props {
  character: Character;
}
const classes = characterUseStyles();

export const CharacterDetail = (props: Props) => {
  const { character } = props;

  return (
    <>
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
