import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../utils/api';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    backgroundColor: "#fafafa",
    height: "100%",
  },
}));

export default function GamePage() {
  const [ gameData, setGameData ] = useState(null);
  const params = useParams();

  useEffect(() => {
    API.get(`/mmo/${params.game}`).then( res => setGameData(res.data) )
  }, [])
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!gameData ?
        <div> Loading... </div> 
        :
        <div>{gameData.name}</div>
      }
    </div>
  )
}