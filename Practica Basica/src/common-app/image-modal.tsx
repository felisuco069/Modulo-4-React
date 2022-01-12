import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(),
      },
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  })
);

export const ImageAvatars = (props) => {
  const { image } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={image} className={classes.large} />
    </div>
  );
};
