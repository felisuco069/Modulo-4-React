import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

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
  // const{}
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={4} page={page} onChange={handleChange} />
    </div>
  );
};
