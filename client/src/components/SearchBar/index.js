import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#293475",
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

export default function SearchBar() {
  const {allTags, activeTags, setActiveTags} = useContext(AppContext);
  const classes = useStyles();

  const handleChipClick = (e) => {
    if (activeTags.includes(e.target.innerText)) {
      setActiveTags(activeTags.filter(tag => tag !== e.target.innerText))
      
    } else {
      setActiveTags([e.target.innerText, ...activeTags])
    }
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
        {allTags.map((tag) => {
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
