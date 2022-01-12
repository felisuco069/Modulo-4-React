import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { StyledTableCell, StyledTableRow } from "../layaut/common-layout";
import { avatarUseStyles } from "../layaut/avatar-layaut";
import { Character } from "../models/character-model";

interface Props {
  character: Character;
}

export const GetCharacterTableRow = (props: Props) => {
  const { character } = props;
  const classes = avatarUseStyles();

  return (
    <StyledTableRow key={character.id}>
      <StyledTableCell>
        <Avatar src={character.image} className={classes.root} />
      </StyledTableCell>
      <StyledTableCell align="center">{character.name}</StyledTableCell>
    </StyledTableRow>
  );
};
