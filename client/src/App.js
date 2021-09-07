import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import API from './utils/api';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <GameGrid />
    </div>
  );
}

export default App;
