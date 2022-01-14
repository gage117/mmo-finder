import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "20px",
  },
  coverAndRatings: {
    '& div': {
      margin: "0 10px"
    }
  }
}));

export default function StatsRow({ gameData }) {
  const classes = useStyles();
  const [ rating, setRating ] = useState(0);

  useEffect(() => {
    if (gameData) {
      setRating(gameData.igdbData.rating);
    }
  }, [gameData])

  return (
    <Grid container direction='column'>
      {/* Game Title */}
      <Grid item className={classes.title}>
        <Typography variant="h3">{gameData.ourData.name}</Typography>
      </Grid>
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
    </Grid>
  )
}