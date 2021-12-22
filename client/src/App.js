import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import MainSearch from './pages/MainSearch';
import GamePage from './pages/GamePage';
import ContributeData from './pages/ContributeData';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:game" element={<GamePage />} />
          <Route path="/contribute-data" element={<ContributeData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
