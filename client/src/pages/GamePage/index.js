import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Chip, Typography, Divider } from "@material-ui/core";
import API from '../../utils/api';
import { makeStyles } from "@material-ui/core/styles";
import StatsRow from '../../components/StatsRow';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    marginTop: "20px",
    backgroundColor: "#fafafa",
    height: "100%",
  },
  chip: {
    margin: theme.spacing(1),
  },
  divider: {
    marginBottom: "10px",
  },
  igdb_credit: {
    position: "fixed",
    bottom: "0px"
  },
  sectionTitle: {
    marginTop: "15px"
  }
}));

export default function GamePage() {
  const params = useParams();
  const classes = useStyles();

  //* STATE
  const [ gameData, setGameData ] = useState(null);

  // Get game data from API
  useEffect(() => {
    API.get(`/mmo/${params.game}`).then( res => setGameData(res.data) );
  }, [])

  console.log(gameData)
  //* RENDER
  if (!gameData) return <div>Loading...</div>;
  return (
    <div className={classes.root}>
      {/* Stats Row */}
      <StatsRow gameData={gameData} />
      {/* Tags */}
      <Typography variant="h4" className={classes.sectionTitle}>Tags</Typography>
      <Divider className={classes.divider} />
      <Grid container direction='row'>
        {gameData.ourData.tags.map(tag => (
          <Grid item key={tag}>
            <Chip variant="outlined" color="primary" size="small" label={tag} className={classes.chip} />
          </Grid>
        ))}
      </Grid>
      {/* Summary */}
      <Typography variant="h4" className={classes.sectionTitle}>Summary</Typography>
      <Divider className={classes.divider} />
      <div>{gameData.igdbData.summary}</div>
      <div className={classes.igdb_credit}>Additional game data provided by <a href="https://api-docs.igdb.com/" target="_blank">IGDB API</a></div>
    </div>
  )
}