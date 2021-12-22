import { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 15px",
    backgroundColor: "#fafafa",
    height: "100%",
  },
}));

export default function GamePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>GENERAL KENOBI</div>
  )
}