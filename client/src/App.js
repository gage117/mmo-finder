import GameGrid from './components/GameGrid';
import NavBar from './components/NavBar';
import API from './utils/api';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GameGrid />
    </div>
  );
}

export default App;
