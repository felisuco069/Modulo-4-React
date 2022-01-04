import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getMembers } from "./api";
import { GetMemberTableRow } from "./common-app/members-table-row";
import { MyContext } from "./core/myContext";
import { StyledTableCell, useStyles } from "./layaut/table-layaut";
import { useNavigate, useParams } from "react-router-dom";
import { PaginationControlled } from "./common-app/pagination";

export const ListPage: React.FC = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [pages, setPages] = useState(1);
  const {
    inputValue,
    setInputValue,
    members,
    setMembers,
    listPage,
    setListPage,
  } = React.useContext(MyContext);

  React.useEffect(() => {
    getMembers(inputValue).then((data) => {
      setMembers(
        data.slice((Number(page) - 1) * 5, (Number(page) - 1) * 5 + 5)
      );
      setPages(Math.ceil(data.length / 5));
      setListPage(Number(page));
    });
  }, [page]);

  const handleClick = () => {
    navigate(`/list/1`);
    getMembers(inputValue).then((data) => {
      setMembers(
        data.slice((Number(page) - 1) * 5, (Number(page) - 1) * 5 + 5)
      );
      setPages(Math.ceil(data.length / 5));
    });
  };
  const classes = useStyles();
  return (
    <>
      <h2>Hello from List page</h2>
      <div>
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
      </div>
      <TableContainer component={Paper} className="table">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.map((member) => (
              <GetMemberTableRow key={member.id} member={member} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationControlled pages={pages} />
    </>
  );
};
