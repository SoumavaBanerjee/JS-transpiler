import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heroWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "200vh",
  },
  textHighlight: {
    color: theme.palette.primary.light,
  },
}));
