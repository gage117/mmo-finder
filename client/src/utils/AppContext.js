import { createContext, useState, useEffect } from 'react';
import API from './api';

export const AppContext = createContext();

const AppProvider = ({children}) => {
  const [activeTags, setActiveTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    API.get("/mmo").then(res => setGames(res.data));
  }, [])

  const allTags = [];
  if (games.length > 0) {
    games.forEach((game) => {
      try {
        game.tags.forEach((tag) => {
          if (!allTags.includes(tag)) allTags.push(tag);
        });
      } catch (e) {
        console.log(e);
        return;
      }
    });
  }

  const handleSearchChange = (input) => {
    setSearchInput(input);
  }

  const handleTagChange = (tag) => {
    activeTags.includes(tag) ?
      setActiveTags(activeTags.filter(activeTag => activeTag !== tag))
     :setActiveTags([tag, ...activeTags]);
  }
  
  return (
      <AppContext.Provider value={{ games, activeTags, handleTagChange, allTags, searchInput, handleSearchChange }}>
          {children}
      </AppContext.Provider>
  )
}

export default AppProvider;