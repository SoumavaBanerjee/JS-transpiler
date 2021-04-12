import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    // could cause future problems. watch out
    overflow: "hidden",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    wrapper: {
      flexDirection: "column",
    },
  },
}));
