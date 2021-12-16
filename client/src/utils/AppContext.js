import { createContext, useState } from 'react';

export const AppContext = createContext();

const dateFormat = { month: 'long', day: 'numeric', year: 'numeric' };

const games = [
  {
    name: "Guild Wars 2",
    description: "A pretty rad MMO",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630816875/mmo-finder/GW2Logo.png",
    genre: "MMORPG",
    release_date: new Date("August 28, 2021").toLocaleDateString("en-US", dateFormat),
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
      "Level-scaling",
      "Expansive PvP",
    ],
  },
  {
    name: "World of Warcraft",
    description: "The Big Cheese",
    logo: "https://res.cloudinary.com/gageeide/image/upload/v1630817482/mmo-finder/wowLogo.png",
    genre: "MMORPG",
    release_date: new Date("November 23, 2004").toLocaleDateString("en-US", dateFormat),
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
    release_date: new Date("June 1, 2021").toLocaleDateString("en-US", dateFormat),
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
    release_date: new Date("December 1, 2014").toLocaleDateString("en-US", dateFormat),
    pay_model: "Buy to Play",
    platforms: ["PC"],
    pve: true,
    pvp: true,
    developers: ["Pearl Abyss"],
    publishers: [
      "Pearl Abyss",
      "Kakao Games",
      "Kakao",
      "GameNet",
      "Koch Media",
      "GameOn Co., Ltd.",
    ],
    tags: ["Story-Rich", "World Events", "Level-scaling", "Large World"],
  },
];

const AppProvider = ({children}) => {
  const [activeTags, setActiveTags] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const allTags = [];
  // ! Remove from defaultState when API is implemented
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