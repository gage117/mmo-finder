import { useState, useEffect } from 'react';
import { List, ListItem } from '@material-ui/core';
import API from './utils/api';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // API.get('/mmo')
    // .then(res => {
    //   console.log(res)
    //   setGames(res);
    // });
    fetch('http://localhost:3001/api/mmo')
      .then(res => {
        console.log(res)
        setGames(res);
      });
  }, []);

  console.log(games);

  return (
    <div className="App">
      <List>
        
      </List>
    </div>
  );
}

export default App;
