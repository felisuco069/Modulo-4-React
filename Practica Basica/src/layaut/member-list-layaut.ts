import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
  goTo: {
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
