import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getCharacters } from "./api";
import { GetCharacterTableRow } from "./common-app/characters-row";
import { MyContext } from "./core/myContext";
import { useNavigate, useParams, Link } from "react-router-dom";
import { PaginationControlled } from "./common-app/pagination";
import { characterUseStyles } from "./layaut/character-layaut";
import { StyledTableCell } from "./layaut/common-layout";

export const ListOfCharacters: React.FC = () => {
  const { listPage } = React.useContext(MyContext);
  const [characters, setCharacters] = useState([]);
  const [inputValue, setInputValue] = useState("Name Character");
  const [debounce, setDebounce] = useState(inputValue);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(inputValue);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  React.useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data.results);
    });
  }, []);

  const classes = characterUseStyles();
  return (
    <>
      <div className={classes.title}>
        <h2>Hello from Character page</h2>
        <Link className={classes.return} to={`/list/${listPage}`}>
          Back to list page
        </Link>
        {
          <div>
            <TextField
              className={classes.input}
              size="small"
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>
        }
      </div>

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
      {/* <PaginationControlled pages={pages} /> */}
    </>
  );
};
