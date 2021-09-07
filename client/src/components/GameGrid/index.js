import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchBar from '../SearchBar';
import GameCard from "../GameCard";
import NavBar from "../NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    backgroundColor: '#fafafa',
    height: '100%'
  },
}));

export default function GameGrid() {
  const classes = useStyles();
  const [games, setGames] = useState([]);

  useEffect(() => {
    // API.get('/mmo')
    // .then(res => {
    //   console.log(res)
    //   setGames(res);
    // });
    setGames([
      {
        name: "Guild Wars 2",
        description: "A pretty rad MMO",
        logo: "https://res.cloudinary.com/gageeide/image/upload/v1630816875/mmo-finder/GW2Logo.png",
        genre: "MMORPG",
        release_date: new Date("August 28, 2012"),
        pay_model: "Buy To Play",
        platforms: ["PC"],
        pve: true,
        pvp: true,
        developers: ["ArenaNet"],
        publishers: ["ArenaNet", "NCSoft"],
        tags: [
          "Story-Rich",
          "Genre-bending",
          "World Events",
          "Level Scaling",
          "Expansive PvP",
        ],
      },
      {
        name: "World of Warcraft",
        description: "The Big Cheese",
        logo: "https://res.cloudinary.com/gageeide/image/upload/v1630817482/mmo-finder/wowLogo.png",
        genre: "MMORPG",
        release_date: new Date("November 23, 2004"),
        pay_model: "Subscription",
        platforms: ["PC"],
        pve: true,
        pvp: true,
        developers: ["Blizzard Entertainment"],
        publishers: ["Blizzard Entertainment"],
        tags: ["Grind-heavy", "Rich End Game", "Expansive PvP"],
      },
      {
        name: "The Elder Scrolls Online",
        description: "A fancy story-based RPG",
        logo: "https://res.cloudinary.com/gageeide/image/upload/v1630817874/mmo-finder/tesoLogo.jpg",
        genre: "MMORPG",
        release_date: new Date("June 1, 2021"),
        pay_model: "Buy to Play",
        platforms: ["PC"],
        pve: true,
        pvp: true,
        developers: ["ZeniMax Online Studios"],
        publishers: ["Bethesda Softworks"],
        tags: ["Story-Rich", "World Events", "Level-scaling"],
      },
      {
        name: "Black Desert Online",
        description: "2 extensive 4 me",
        logo: "https://res.cloudinary.com/gageeide/image/upload/v1630978292/mmo-finder/BDO_CoverArt.png",
        genre: "MMORPG",
        release_date: new Date("December 1, 2014"),
        pay_model: "Buy to Play",
        platforms: ["PC"],
        pve: true,
        pvp: true,
        developers: ["Pearl Abyss"],
        publishers: ["Pearl Abyss", "Kakao Games", "Kakao", "GameNet", "Koch Media", "GameOn Co., Ltd."],
        tags: ["Story-Rich", "World Events", "Level-scaling", "Large World"],
      },
    ]);
  }, []);

  const tags = [];
  if (games.length > 0) {
    games.forEach(game => {
      try {
        game.tags.forEach(tag => {
          if (!tags.includes(tag)) tags.push(tag)
        })
      } catch (e) {
        console.log(e);
        return;
      }
    })
  }
  console.log(tags)

  return (<>
    <SearchBar tags={tags} />
    <Grid 
      container 
      spacing={2} 
      className={classes.root}
      justifyContent='space-evenly'
    >
      {games.map((game) => {
        return (
          <Grid item align='flex-start' key={game.name}>
            <GameCard game={game} />
          </Grid>
        );
      })}
    </Grid>
  </>);
}
