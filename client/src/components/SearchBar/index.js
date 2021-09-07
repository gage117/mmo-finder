import { makeStyles } from '@material-ui/core/styles';
import { TextField, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3F51B5',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  inputBackground: {
      backgroundColor: '#7E88C1'
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.inputBackground} id="outlined-basic" label="Game Title" variant="filled" />
      <div>
        <Chip />
      </div>
    </form>
  );
}