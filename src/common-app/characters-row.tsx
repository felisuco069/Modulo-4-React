import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { generatePath, Link } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "../layaut/table-layaut";
import { avatarUseStyles } from "../layaut/avatar-layaut";

export const GetCharacterTableRow = (props) => {
  const { character } = props;
  const classes = avatarUseStyles();

  return (
    <StyledTableRow key={character.id}>
      <StyledTableCell>
        <Avatar src={character.image} className={classes.root} />
      </StyledTableCell>
           <StyledTableCell align="center">
        <Link to={"/characterdetail"}>
          {character.name}
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};
