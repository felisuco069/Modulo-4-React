import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { generatePath, Link } from "react-router-dom";
import { StyledTableCell, StyledTableRow } from "../layaut/table-layaut";
import { useStyles } from "../layaut/avatar-layaut";

export const GetMemberTableRow = (props) => {
  const { member } = props;
  const classes = useStyles();

  return (
    <StyledTableRow key={member.id}>
      <StyledTableCell>
        <Avatar src={member.avatar_url} className={classes.root} />
      </StyledTableCell>
      <StyledTableCell align="center">
        <span>{member.id}</span>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Link to={generatePath("/detail/:id", { id: member.login })}>
          {member.login}
        </Link>
      </StyledTableCell>
    </StyledTableRow>
  );
};
