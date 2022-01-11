import React from "react";
import { Table, TableBody, TableContainer, TableHead } from "@material-ui/core";
import { StyledTableCell } from "../layaut/common-layout";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GetCharacterTableRow } from "./characters-row";
import { characterUseStyles } from "../layaut/character-layaut";
import { Character } from "../models/character-model";

interface Props {
  characters: Character[];
}

export const CharacterTable = (props) => {
  const { characters } = props;

  const classes = characterUseStyles();
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map((character) => (
              <GetCharacterTableRow key={character.id} character={character} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
