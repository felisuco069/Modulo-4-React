import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { generatePath, Link } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "../layaut/common-layout";
import { avatarUseStyles } from "../layaut/avatar-layaut";
import { SimpleModal } from "./character-modal";

export const GetCharacterTableRow = (props) => {
  const { character } = props;
  const classes = avatarUseStyles();

  return (
    <StyledTableRow key={character.id}>
      <StyledTableCell>
        <Avatar src={character.image} className={classes.root} />
      </StyledTableCell>
      <StyledTableCell align="center">
        {/* <SimpleModal character={character} /> */}

        {/* <Link to={"/characterdetail"}> */}
        {character.name}
        {/* </Link> */}
      </StyledTableCell>
    </StyledTableRow>
  );
};
