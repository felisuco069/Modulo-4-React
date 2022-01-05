import { makeStyles } from "@material-ui/core/styles";

export const characterUseStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
  return: {
    marginBottom: 24,
    display: "flex",
  },
  input: {
    marginBottom: 24,
    display: "flex",
    maxWidth: 280,
  },
  title: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 100,
    paddingBottom: 12,
  },
});
