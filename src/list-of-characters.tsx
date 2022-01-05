import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getMembers,getCharacters  } from "./api";
import { GetMemberTableRow } from "./common-app/members-table-row";
import { GetCharacterTableRow } from "./common-app/characters-row";
import { MyContext } from "./core/myContext";
import { StyledTableCell, useStyles } from "./layaut/table-layaut";
import { useNavigate, useParams, Link } from "react-router-dom";
import { PaginationControlled } from "./common-app/pagination";

export const ListOfCharacters: React.FC = () => {
    const { listPage } = React.useContext(MyContext);
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  
  React.useEffect(() => {
    getCharacters().then((data) =>{
      console.log(data.results)
      setCharacters(data.results)
    })
  }, []);

    const classes = useStyles();
  return (
    <>
      <h2>Hello from Character page</h2>
      <Link to={`/list/${listPage}`}>Back to list page</Link>
      {/* <div>
        <TextField
          size="small"
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Search
        </Button>
      </div> */}

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