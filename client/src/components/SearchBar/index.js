import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#3F51B5",
    padding: "15px 0px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  inputBackground: {
    backgroundColor: "#7E88C1",
    width: "25ch",
  },
  chipMargin: {
    margin: "0 5px",
  },
}));

export default function SearchBar({ tags, activeTags, setActiveTags }) {
  const classes = useStyles();

  const handleChipClick = (e) => {
    activeTags.includes(e.target.innerText) ?
      setActiveTags(activeTags.filter(tag => tag !== e.target.innerText))
    : setActiveTags([e.target.innerText, ...activeTags])
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        className={classes.inputBackground}
        id="outlined-basic"
        label="Game Title"
        variant="filled"
      />
      <div>
        {tags.map((tag) => {
          return (
            <Chip
              label={tag}
              key={tag}
              className={classes.chipMargin}
              onClick={handleChipClick}
              color={activeTags.includes(tag) ? 'primary' : 'default'}
            />
          );
        })}
      </div>
    </form>
  );
}
