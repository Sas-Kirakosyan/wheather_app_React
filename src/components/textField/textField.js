import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    justifyContent: "space-between",
    marginTop: "25px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Input({
  value,
  handleChenge = () => {},
  handleSubmit = () => {},
}) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <FormControl>
        <InputBase
          onChange={handleChenge}
          className={classes.input}
          placeholder="Search the city"
          inputProps={{ "aria-label": "search google maps" }}
          value={value}
        />
      </FormControl>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
