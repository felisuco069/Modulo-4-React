import { TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../core/myContext";
import { characterUseStyles } from "../layaut/character-layaut";

interface Props {
  characterInput: string;
  setCharacterInput: (value: string) => void;
}

export const Headboard = (props: Props) => {
  const { characterInput, setCharacterInput } = props;
  const { listPage } = React.useContext(MyContext);

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
              onChange={(e) => setCharacterInput(e.target.value)}
              value={characterInput}
            />
          </div>
        }
      </div>
    </>
  );
};
