import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Link } from "react-router-dom";
import { ImageAvatars } from "./image-modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalStyle: {
      display: "flex",
      alignItems: "center",
      "& > div": {
        padding: "2rem",
        marging: "2rem",
      },
    },
    characterDetail: {
      display: "flex",
      alignItems: "top",
      width: "100%",
      flexWrap: "nowrap",
    },
  })
);

export const SimpleModal = (props) => {
  const { character } = props;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.modalStyle}>
        <div>
          <ImageAvatars image={character.image} />
        </div>
        <div>
          <div className={classes.characterDetail}>
            <span>Name: </span>
            <span>{character.name}</span>
          </div>
          <div className={classes.characterDetail}>
            <span>Status: </span>
            <span>{character.status}</span>
          </div>
          <div className={classes.characterDetail}>
            <span>Species: </span>
            <span>{character.species}</span>
          </div>
          <div className={classes.characterDetail}>
            <span>Gender: </span>
            <span>{character.gender}</span>
          </div>
          <div className={classes.characterDetail}>
            <span>Origin: </span>
            <span>{character.origin.name}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {character.name}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
