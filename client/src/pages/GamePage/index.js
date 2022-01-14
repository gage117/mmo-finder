import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Chip, Typography, Divider } from "@material-ui/core";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import API from '../../utils/api';
import { makeStyles } from "@material-ui/core/styles";


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
  igdb_credit: {
    position: "fixed",
    bottom: "0px"
  },
  coverAndRatings: {
    '& div': {
      margin: "0 10px"
    }
  },
}));

export default function GamePage() {
  const params = useParams();
  const classes = useStyles();

  //* STATE
  const [ gameData, setGameData ] = useState(null);
  const [ rating, setRating ] = useState(0);

  // Get game data from API
  useEffect(() => {
    API.get(`/mmo/${params.game}`).then( res => setGameData(res.data) );
  }, [])
  // Use effect to set rating
  // Rating circle animation requires an inital value of 0 and a re-render with a new value
  useEffect(() => {
    if (gameData) {
      setRating(gameData.igdbData.rating);
    }
  }, [gameData])

  //* RENDER
  if (!gameData) return <div>Loading...</div>;
  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        {/* Game Cover and Ratings */}
        <Grid container item className={classes.coverAndRatings}>
          {/* Cover */}
          <Grid item>
            <img src={"https:" + gameData.igdbData.cover.url.replace("thumb", "logo_med")} />
          </Grid>
          {/* Ratings */}
          <Grid item style={{ width: 120 }}>
            <CircularProgressbar 
              value={rating} 
              text={`${rating.toFixed(2)}`}
            />
            <Typography variant="body1" style={{ marginTop: "10px", textAlign: 'center' }}>
              Rating
            </Typography>
          </Grid>
        </Grid>
        {/* Game Title */}
        <Grid item>
          <Typography variant="h3">{gameData.ourData.name}</Typography>
        </Grid>
      </Grid>
      <Divider />
      {/* Tags */}
      <Typography variant="h5">Tags</Typography>
      <Grid container direction='row'>
        {gameData.ourData.tags.map(tag => (
          <Grid item key={tag}>
            <Chip variant="outlined" color="primary" size="small" label={tag} className={classes.chip} />
          </Grid>
        ))}
      </Grid>
      <Divider />
      {/* Summary */}
        <Typography variant="h5">Summary</Typography>
      <div>{gameData.igdbData.summary}</div>
      <div className={classes.igdb_credit}>Additional game data provided by <a href="https://api-docs.igdb.com/" target="_blank">IGDB API</a></div>
    </div>
  )
}