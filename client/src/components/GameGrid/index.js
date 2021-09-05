import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import GameCard from '../GameCard';

export default function GameGrid() {
    const [games, setGames] = useState([]);
  
    useEffect(() => {
      // API.get('/mmo')
      // .then(res => {
      //   console.log(res)
      //   setGames(res);
      // });
      setGames([
        {
          name: 'Guild Wars 2',
          description: 'A pretty rad MMO',
          genre: 'MMORPG',
          release_date: new Date('August 28, 2012'),
          pay_model: 'Buy To Play',
          platforms: ['PC'],
          pve: true,
          pvp: true,
          developers: ['ArenaNet'],
          publishers: ['ArenaNet', 'NCSoft'],
          tags: ['Story-Rich', 'Genre-bending', 'World Events', 'Level Scaling', 'Expansive PvP']
        },{
          name: 'World of Warcraft',
          description: 'The Big Cheese',
          genre: 'MMORPG',
          release_date: new Date('November 23, 2004'),
          pay_model: 'Subscription',
          platforms: ['PC'],
          pve: true,
          pvp: true,
          developers: ['Blizzard Entertainment'],
          publishers: ['Blizzard Entertainment'],
          tags: ['Grind-heavy', 'Rich End Game', 'Expansive PvP']
        },{
          name: 'The Elder Scrolls Online',
          description: 'A fancy story-based RPG',
          genre: 'MMORPG',
          release_date: new Date('June 1, 2021'),
          pay_model: 'Buy to Play',
          platforms: ['PC'],
          pve: true,
          pvp: true,
          developers: ['ZeniMax Online Studios'],
          publishers: ['Bethesda Softworks'],
          tags: ['Story-Rich', 'World Events', 'Level-scaling']
        },
      ])
    }, []);
  
    console.log(games);

    return (
        <Grid container>
            {games.map(game => {
                return (
                    <Grid item>
                        <GameCard game={game}></GameCard>
                    </Grid>
                )
            })}
        </Grid>
    )
}