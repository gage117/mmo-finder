import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import GameCard from "../GameCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    backgroundColor: "#fafafa",
    height: "100%",
  },
}));

export default function GameGrid() {
  const { games, activeTags, searchInput } = useContext(AppContext);
  const classes = useStyles();

  let filteredGames = [...games];
  
  if (activeTags.length > 0) {
    filteredGames = filteredGames.filter((game) => {
      return activeTags.every((tag) => game.tags.includes(tag));
    });
  }

  if (searchInput) {
    filteredGames = filteredGames.filter((game) => {
      return game.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="space-evenly"
    >
      {filteredGames.map((game) => {
        return (
          <Grid item align="flex-start" key={game.name}>
            <GameCard game={game} />
          </Grid>
        );
      })}
    </Grid>
  );
}
