import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export const PaginationControlled = (props) => {
  const { pages } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    navigate(`/list/${value}`);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={pages} page={page} onChange={handleChange} />
    </div>
  );
};
